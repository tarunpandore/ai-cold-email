export interface UserProfileInput {
  fullName: string;
  jobTitle: string;
  companyName: string;
  companyWebsite?: string;
  linkedinUrl?: string;
  primaryRole: string;
}

export interface OutreachSettingsInput {
  bookMeetings: boolean;
  generateLeads: boolean;
  buildBrand: boolean;
  recruitTalent: boolean;
  tonePreference: string;
  emailLength: string;
  ctaStyle: string;
  complianceEnabled?: boolean;
}

export interface BusinessContextInput {
  productDescription: string;
  targetIndustry: string;
  companySize: string;
  decisionMakerRole: string;
  keyPainPoints: string;
}

export type DataImportPreferenceMethod = "CSV" | "HUBSPOT" | "SKIP";

export interface DataImportPreferenceInput {
  method: DataImportPreferenceMethod;
}