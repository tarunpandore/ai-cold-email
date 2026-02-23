import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);

  if (res.headersSent) {
    return;
  }

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};