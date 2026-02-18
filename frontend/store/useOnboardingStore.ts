import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OnboardingData {
  // Step 1: Profile
  fullName: string;
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  linkedinUrl: string;
  role: string;
  goals: string[];

  // Step 2: Business Context
  productDescription: string;
  targetIndustry: string;
  companySize: string;
  averageDealValue: string;
  decisionMakerRole: string;
  keyPainPoints: string;
  uvp: string;
  tone: string;

  // Step 3: Email Preferences
  emailLength: "short" | "medium" | "detailed";
  ctaStyle: "soft" | "direct" | "calendar";
  complianceAccepted: boolean;

  // Step 4: Data Setup
  importMethod: "csv" | "hubspot" | "skip" | null;
}

interface OnboardingState {
  step: number;
  data: OnboardingData;
  setStep: (step: number) => void;
  updateData: (data: Partial<OnboardingData>) => void;
  reset: () => void;
}

const initialData: OnboardingData = {
  fullName: "",
  jobTitle: "",
  companyName: "",
  companyWebsite: "",
  linkedinUrl: "",
  role: "",
  goals: [],
  productDescription: "",
  targetIndustry: "",
  companySize: "",
  averageDealValue: "",
  decisionMakerRole: "",
  keyPainPoints: "",
  uvp: "",
  tone: "formal",
  emailLength: "medium",
  ctaStyle: "soft",
  complianceAccepted: false,
  importMethod: null,
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      step: 1,
      data: initialData,
      setStep: (step) => set({ step }),
      updateData: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),
      reset: () => set({ step: 1, data: initialData }),
    }),
    {
      name: "onboarding-storage",
    }
  )
);
