import { Request, Response } from "express";
import { SettingsService } from "./settings.service";

export class SettingsController {
    static async getSettings(req: Request, res: Response) {
        try {
            const userId = req.userId!;
            const settings = await SettingsService.getSettings(userId);
            res.json(settings);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    static async updateSettings(req: Request, res: Response) {
        try {
            const userId = req.userId!;
            const updatedSettings = await SettingsService.updateSettings(userId, req.body);
            res.json(updatedSettings);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
}
