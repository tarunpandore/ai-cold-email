"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { OnboardingStepContainer } from "@/components/onboarding/OnboardingStepContainer";
import {
  FileUp as UploadIcon,
  RefreshCw as SyncIcon,
  ArrowRight as SkipIcon,
  Sparkles as MagicIcon,
  MoveRight as ArrowIcon
} from "lucide-react";

const methods = [
  {
    id: "csv",
    title: "Upload CSV Now",
    desc: "Import contacts via .csv or .xlsx file. Best for legacy spreadsheets.",
    icon: UploadIcon,
    tag: "Manual Upload",
    recommended: false,
  },
  {
    id: "hubspot",
    title: "Connect HubSpot",
    desc: "Sync your CRM data automatically in real-time. No manual mapping required.",
    icon: SyncIcon,
    tag: "Direct Integration",
    recommended: true,
  },
  {
    id: "skip",
    title: "Skip for Now",
    desc: "Explore the dashboard with sample data first. Start fresh when ready.",
    icon: SkipIcon,
    tag: "Secondary Path",
    recommended: false,
  },
];

export default function DataSetupPage() {
  const router = useRouter();
  const { data, updateData, setStep } = useOnboardingStore();

  useEffect(() => {
    setStep(4);
  }, [setStep]);

  const handleFinish = () => {
    // In a real app, this would submit the data to the backend
    console.log("Final Onboarding Data:", data);
    router.push("/dashboard");
  };

  return (
    <OnboardingStepContainer
      onNext={handleFinish}
      nextLabel="Finish Setup"
      showBack
      backHref="/email-preferences"
      isLastStep
    >
      <OnboardingProgress
        title="How would you like to import your data?"
        subtitle="Step 4 of 4"
        description="Connect your existing tools or start fresh with a manual upload. You can always change these settings later in your dashboard."
      />

      <div className="space-y-12">
        {/* Setup Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method) => (
            <div
              key={method.id}
              onClick={() => updateData({ importMethod: method.id as any })}
              className={`group cursor-pointer flex flex-col gap-4 p-6 rounded-xl border-2 transition-all hover:shadow-lg relative ${data.importMethod === method.id
                ? "border-primary bg-white ring-1 ring-primary"
                : "border-primary/10 bg-white hover:border-primary"
                }`}
            >
              {method.recommended && (
                <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Recommended
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${data.importMethod === method.id
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                }`}>
                <method.icon className="size-6" />
              </div>

              <div>
                <p className={`text-lg font-bold leading-tight mb-2 ${data.importMethod === method.id ? "text-primary" : "text-[#121811]"
                  }`}>
                  {method.title}
                </p>
                <p className="text-slate-500 text-sm font-normal leading-relaxed">
                  {method.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-primary/5">
                <span className={`text-xs font-bold uppercase tracking-widest ${data.importMethod === method.id ? "text-primary" : "text-primary/60"
                  }`}>
                  {method.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Start Guide Panel */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 mb-1">
              <MagicIcon className="text-primary size-5" />
              <p className="text-[#121811] text-lg font-bold leading-tight">Quick Start Guide</p>
            </div>
            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Ensure your CSV headers match our required fields: <span className="font-semibold text-primary">Name, Email, and Company</span>. HubSpot sync typically takes 2-5 minutes depending on your database size.
            </p>
          </div>
          <a href="#" className="whitespace-nowrap inline-flex items-center gap-2 text-sm font-bold leading-normal tracking-wide text-primary hover:underline group">
            View formatting tips
            <ArrowIcon className="size-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </OnboardingStepContainer>
  );
}
