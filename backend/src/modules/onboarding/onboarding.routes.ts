import { Router } from "express";
import { OnboardingController } from "./onboarding.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

export const onboardingRouter = Router();

// All onboarding routes require login
onboardingRouter.use(authMiddleware);

onboardingRouter.post("/profile", OnboardingController.saveProfile);
onboardingRouter.post("/outreach", OnboardingController.saveOutreach);
onboardingRouter.post("/business", OnboardingController.saveBusiness);
onboardingRouter.post("/import", OnboardingController.saveImportPreference);
onboardingRouter.get("/status", OnboardingController.status);