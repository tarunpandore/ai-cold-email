import { prisma } from "../../config/prisma";

export class SettingsService {
    static async getSettings(userId: string) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                profile: true,
                outreachSettings: true,
            },
        });

        if (!user) throw new Error("User not found");

        return {
            fullName: user.profile?.fullName || "",
            jobTitle: user.profile?.jobTitle || "",
            tone: user.outreachSettings?.tonePreference || "professional",
            ctaStyle: user.outreachSettings?.ctaStyle || "calendar",
            // Mock static data for fields not yet in DB schema
            timezone: "UTC-5",
            twoFA: true,
            emailTone: user.outreachSettings?.tonePreference || "Professional",
            primaryCtaType: user.outreachSettings?.ctaStyle || "Book a Meeting",
            language: "en",
            alerts: { processing: true, login: true, usage: true },
        };
    }

    static async updateSettings(userId: string, data: any) {
        const user = await prisma.user.findUnique({ where: { id: userId }, include: { profile: true, outreachSettings: true } });
        if (!user) throw new Error("User not found");

        if (user.profile && (data.fullName || data.jobTitle)) {
            await prisma.userProfile.update({
                where: { userId },
                data: {
                    ...(data.fullName && { fullName: data.fullName }),
                    ...(data.jobTitle && { jobTitle: data.jobTitle }),
                },
            });
        }

        if (user.outreachSettings && (data.tone || data.ctaStyle || data.emailTone || data.primaryCtaType)) {
            const tonePreference = data.tone || data.emailTone?.toLowerCase();
            const ctaStyle = data.ctaStyle || data.primaryCtaType?.split(" ")[0].toLowerCase();

            await prisma.outreachSettings.update({
                where: { userId },
                data: {
                    ...(tonePreference && { tonePreference }),
                    ...(ctaStyle && { ctaStyle }),
                },
            });
        }

        return this.getSettings(userId);
    }
}
