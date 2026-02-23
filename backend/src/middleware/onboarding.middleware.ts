import { Request, Response, NextFunction } from "express";

export const onboardingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.onboardingComplete) {
    return res.status(403).json({ error: "Onboarding not completed" });
  }
  next();
};