// src/app.ts
import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./modules/auth/auth.routes";
import { onboardingRouter } from "./modules/onboarding/onboarding.routes";
import { settingsRouter } from "./modules/settings/settings.routes";

export const app = express();

app.set("trust proxy", 1);

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

// Routes
app.use("/auth", authRouter);                // Auth routes
app.use("/onboarding", onboardingRouter);    // Onboarding routes
app.use("/settings", settingsRouter);        // Settings routes

// Health check
app.get("/health", (_, res) => res.json({ status: "ok" }));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});