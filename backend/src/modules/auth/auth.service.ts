import bcrypt from "bcrypt";
import crypto from "crypto";
import { prisma } from "../../config/prisma";
import { createUser, findUserByEmail, findUserById, addRefreshSession, deleteRefreshSession, findRefreshSession } from "./auth.repository";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "./jwt.util";

export class AuthService {
  static async register(email: string, password: string) {
    const existing = await findUserByEmail(email);
    if (existing) throw new Error("Email already exists");

    const user = await createUser(email, password);
    const accessToken = generateAccessToken({ userId: user.id, onboardingComplete: user.onboardingComplete });
    const refreshToken = generateRefreshToken({ userId: user.id });

    const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    await addRefreshSession(user.id, tokenHash, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

    return { user, accessToken, refreshToken };
  }

  static async login(email: string, password: string) {
    const user = await findUserByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const accessToken = generateAccessToken({ userId: user.id, onboardingComplete: user.onboardingComplete });
    const refreshToken = generateRefreshToken({ userId: user.id });

    const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    await addRefreshSession(user.id, tokenHash, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

    return { user, accessToken, refreshToken };
  }

  static async refresh(oldToken: string) {
    const decoded: any = verifyRefreshToken(oldToken);
    if (!decoded) throw new Error("Invalid refresh token");

    const tokenHash = crypto.createHash("sha256").update(oldToken).digest("hex");
    const session = await findRefreshSession(tokenHash);
    if (!session) throw new Error("Refresh token expired or revoked");

    // delete old token
    await deleteRefreshSession(tokenHash);

    const user = await findUserById(decoded.userId);
    if (!user) throw new Error("User not found");

    const newAccessToken = generateAccessToken({ userId: user.id, onboardingComplete: user.onboardingComplete });
    const newRefreshToken = generateRefreshToken({ userId: user.id });

    const newTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex");
    await addRefreshSession(user.id, newTokenHash, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }

  static async forgotPassword(email: string) {
    const user = await findUserByEmail(email);
    if (!user) {
      // Return a generic success to prevent email enumeration
      return { message: "Password reset link sent to email" };
    }

    // Generate token
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour

    // Save to DB
    await prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    // Log the link
    console.log(`\n======================================================`);
    console.log(`[DEV] Password reset link for ${email}:`);
    console.log(`http://localhost:3000/reset-password/${token}`);
    console.log(`======================================================\n`);

    return { message: "Password reset link sent to email" };
  }

  static async resetPassword(token: string, newPassword: string) {
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });
    if (!resetToken) throw new Error("Invalid or expired reset token");

    if (resetToken.expiresAt < new Date()) {
      await prisma.passwordResetToken.delete({ where: { id: resetToken.id } });
      throw new Error("Reset token has expired");
    }

    const user = await findUserByEmail(resetToken.email);
    if (!user) throw new Error("User not found");

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Delete token after successful reset
    await prisma.passwordResetToken.deleteMany({
      where: { email: resetToken.email },
    });

    return { message: "Password updated successfully" };
  }

  static async logout(refreshToken: string) {
    const tokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    await deleteRefreshSession(tokenHash);
  }

  static async me(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        outreachSettings: true,
        businessContext: true,
        importPreference: true,
      },
    });
  }
}