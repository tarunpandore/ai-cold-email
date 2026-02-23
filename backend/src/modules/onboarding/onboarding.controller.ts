import { Request, Response } from "express";
import { OnboardingService } from "./onboarding.service";
import { UserProfileInput, OutreachSettingsInput, BusinessContextInput, DataImportPreferenceInput } from "./onboarding.types";

export class OnboardingController {
  static async saveProfile(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const data: UserProfileInput = req.body;
      const profile = await OnboardingService.saveUserProfile(userId, data);
      res.json(profile);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async saveOutreach(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const data: OutreachSettingsInput = req.body;
      const settings = await OnboardingService.saveOutreachSettings(userId, data);
      res.json(settings);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async saveBusiness(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const data: BusinessContextInput = req.body;
      const context = await OnboardingService.saveBusinessContext(userId, data);
      res.json(context);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async saveImportPreference(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const data: DataImportPreferenceInput = req.body;
      const preference = await OnboardingService.saveDataImportPreference(userId, data);
      res.json({ preference, onboardingComplete: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async status(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const status = await OnboardingService.getOnboardingStatus(userId);
      res.json(status);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}