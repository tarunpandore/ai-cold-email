import { prisma } from "../../config/prisma";
import bcrypt from "bcrypt";

export const createUser = async (email: string, password: string) => {
  const hashed = await bcrypt.hash(password, 12);
  return prisma.user.create({ data: { email, password: hashed } });
};

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const findUserById = (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};

export const addRefreshSession = (userId: string, tokenHash: string, expiresAt: Date) => {
  return prisma.refreshSession.create({ data: { userId, tokenHash, expiresAt } });
};

export const deleteRefreshSession = (tokenHash: string) => {
  return prisma.refreshSession.deleteMany({ where: { tokenHash } });
};

export const findRefreshSession = (tokenHash: string) => {
  return prisma.refreshSession.findFirst({ where: { tokenHash } });
};