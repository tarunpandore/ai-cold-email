import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../modules/auth/jwt.util";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "No token provided" });

  const token = header.split(" ")[1];
  const decoded: any = verifyAccessToken(token);
  if (!decoded) return res.status(401).json({ error: "Invalid token" });

  req.userId = decoded.userId;
  req.onboardingComplete = decoded.onboardingComplete;
  next();
};