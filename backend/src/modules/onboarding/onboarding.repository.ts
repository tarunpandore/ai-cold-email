import { prisma } from "../../config/prisma";
import { UserProfileInput, OutreachSettingsInput, BusinessContextInput, DataImportPreferenceInput } from "./onboarding.types";

export const createUserProfile = (userId: string, data: UserProfileInput) => {
  return prisma.userProfile.create({
    data: {
      userId,
      fullName: data.fullName,
      jobTitle: data.jobTitle,
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
      linkedinUrl: data.linkedinUrl,
      primaryRole: data.primaryRole,
    },
  });
};

export const createOutreachSettings = (userId: string, data: OutreachSettingsInput) => {
  return prisma.outreachSettings.create({
    data: {
      userId,
      bookMeetings: data.bookMeetings,
      generateLeads: data.generateLeads,
      buildBrand: data.buildBrand,
      recruitTalent: data.recruitTalent,
      tonePreference: data.tonePreference,
      emailLength: data.emailLength,
      ctaStyle: data.ctaStyle,
      complianceEnabled: data.complianceEnabled ?? false,
    },
  });
};

export const createBusinessContext = (userId: string, data: BusinessContextInput) => {
  return prisma.businessContext.create({
    data: {
      userId,
      productDescription: data.productDescription,
      targetIndustry: data.targetIndustry,
      companySize: data.companySize,
      decisionMakerRole: data.decisionMakerRole,
      keyPainPoints: data.keyPainPoints,
    },
  });
};

export const createDataImportPreference = (userId: string, data: DataImportPreferenceInput) => {
  return prisma.dataImportPreference.create({
    data: {
      userId,
      method: data.method,
    },
  });
};

export const markOnboardingComplete = (userId: string) => {
  return prisma.user.update({
    where: { id: userId },
    data: { onboardingComplete: true },
  });
};

export const getOnboardingStatus = (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: { onboardingComplete: true },
  });
};
