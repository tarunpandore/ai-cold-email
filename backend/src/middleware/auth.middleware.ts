import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../modules/auth/jwt.util";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "No token provided" });

  let token = header.startsWith("Bearer ") ? header.split(" ")[1] : header;

  // Remove any accidental quotes the user might have pasted from Postman
  if (token) {
    token = token.replace(/^["']|["']$/g, "");
  }

  const decoded: any = verifyAccessToken(token);
  if (!decoded) return res.status(401).json({ error: "Invalid token" });
  if (decoded.expired) return res.status(401).json({ error: "Token expired. Please login again." });

  req.userId = decoded.userId;
  req.onboardingComplete = decoded.onboardingComplete;
  next();
};