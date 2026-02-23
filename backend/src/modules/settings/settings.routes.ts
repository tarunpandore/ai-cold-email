import { Router } from "express";
import { SettingsController } from "./settings.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

export const settingsRouter = Router();

settingsRouter.get("/", authMiddleware, SettingsController.getSettings);
settingsRouter.patch("/", authMiddleware, SettingsController.updateSettings);
