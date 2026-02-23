import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, accessToken, refreshToken } = await AuthService.register(email, password);

      res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
      res.status(201).json({ user, accessToken });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, accessToken, refreshToken } = await AuthService.login(email, password);

      res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
      res.json({ user, accessToken });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async refresh(req: Request, res: Response) {
    try {
      const oldToken = req.cookies.refreshToken;
      if (!oldToken) throw new Error("No refresh token");

      const { accessToken, refreshToken } = await AuthService.refresh(oldToken);

      res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
      res.json({ accessToken });
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }

  static async forgotPassword(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const result = await AuthService.forgotPassword(email);
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const { token, newPassword } = req.body;
      const result = await AuthService.resetPassword(token, newPassword);
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async logout(req: Request, res: Response) {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (refreshToken) await AuthService.logout(refreshToken);

      res.clearCookie("refreshToken", COOKIE_OPTIONS);
      res.json({ message: "Logged out" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async me(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const user = await AuthService.me(userId);
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}