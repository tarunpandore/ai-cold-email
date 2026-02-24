import jwt from "jsonwebtoken";

export const generateAccessToken = (payload: object) => {
  const secret = process.env.JWT_ACCESS_SECRET || "access_secret";
  return jwt.sign(payload, secret, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: object) => {
  const secret = process.env.JWT_REFRESH_SECRET || "refresh_secret";
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string) => {
  try {
    const secret = process.env.JWT_ACCESS_SECRET || "access_secret";
    return jwt.verify(token, secret);
  } catch (err: any) {
    if (err.name === "TokenExpiredError") return { expired: true };
    return null;
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    const secret = process.env.JWT_REFRESH_SECRET || "refresh_secret";
    return jwt.verify(token, secret);
  } catch (err: any) {
    if (err.name === "TokenExpiredError") return { expired: true };
    return null;
  }
};