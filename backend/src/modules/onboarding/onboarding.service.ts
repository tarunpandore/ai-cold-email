import * as repo from "./onboarding.repository";
import { UserProfileInput, OutreachSettingsInput, BusinessContextInput, DataImportPreferenceInput } from "./onboarding.types";

export class OnboardingService {
  static async saveUserProfile(userId: string, data: UserProfileInput) {
    return repo.createUserProfile(userId, data);
  }

  static async saveOutreachSettings(userId: string, data: OutreachSettingsInput) {
    return repo.createOutreachSettings(userId, data);
  }

  static async saveBusinessContext(userId: string, data: BusinessContextInput) {
    return repo.createBusinessContext(userId, data);
  }

  static async saveDataImportPreference(userId: string, data: DataImportPreferenceInput) {
    const record = await repo.createDataImportPreference(userId, data);
    // After last onboarding step, mark complete
    await repo.markOnboardingComplete(userId);
    return record;
  }

  static async getOnboardingStatus(userId: string) {
    return repo.getOnboardingStatus(userId);
  }
}