"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { OnboardingStepContainer } from "@/components/onboarding/OnboardingStepContainer";
import {
  Type,
  MessageSquare,
  Calendar,
  ShieldCheck,
  AlignLeft,
  Type as ShortIcon,
  List as MediumIcon,
  AlignLeft as DetailedIcon
} from "lucide-react";

const emailLengths = [
  { id: "short", label: "Short", icon: ShortIcon, desc: "Quick Intro" },
  { id: "medium", label: "Medium", icon: MediumIcon, desc: "Standard" },
  { id: "detailed", label: "Detailed", icon: DetailedIcon, desc: "In-depth" },
];

const ctaStyles = [
  {
    id: "soft",
    label: "Soft Question",
    desc: "Spark curiosity without being pushy.",
    icon: MessageSquare
  },
  {
    id: "direct",
    label: "Direct Ask",
    desc: "Clear and concise next steps for the prospect.",
    icon: Type
  },
  {
    id: "calendar",
    label: "Calendar Link",
    desc: "Include your booking link directly in the sign-off.",
    icon: Calendar
  },
];

export default function EmailPreferencesPage() {
  const router = useRouter();
  const { data, updateData, setStep } = useOnboardingStore();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  const handleNext = () => {
    router.push("/setup");
  };

  return (
    <OnboardingStepContainer onNext={handleNext} showBack backHref="/business">
      <OnboardingProgress
        title="Email Preferences"
        subtitle="Step 3 of 4"
        description="Tailor how your messages are crafted and delivered."
      />

      <div className="space-y-10">
        {/* Email Length */}
        <section>
          <label className="block text-sm font-bold uppercase tracking-wider text-primary/60 mb-6">
            Preferred Email Length
          </label>
          <div className="grid grid-cols-3 gap-4 p-1 bg-primary/5 rounded-xl">
            {emailLengths.map((len) => (
              <label
                key={len.id}
                className={`flex flex-col items-center justify-center py-6 px-2 rounded-lg cursor-pointer transition-all ${data.emailLength === len.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-primary/80 hover:bg-primary/10"
                  }`}
              >
                <input
                  type="radio"
                  name="emailLength"
                  className="hidden"
                  checked={data.emailLength === len.id}
                  onChange={() => updateData({ emailLength: len.id as any })}
                />
                <len.icon className={`size-6 mb-2 ${data.emailLength === len.id ? "text-white" : "text-primary"}`} />
                <span className="text-sm font-bold">{len.label}</span>
                <span className={`text-[10px] opacity-70 ${data.emailLength === len.id ? "text-white/80" : "text-primary/60"}`}>
                  {len.desc}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* CTA Style */}
        <section className="space-y-4">
          <label className="block text-sm font-bold uppercase tracking-wider text-primary/60 mb-2">
            CTA Style
          </label>
          <div className="space-y-3">
            {ctaStyles.map((cta) => (
              <label
                key={cta.id}
                className={`flex items-start gap-4 p-5 border rounded-xl cursor-pointer transition-all ${data.ctaStyle === cta.id
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-primary/10 hover:border-primary/40 hover:bg-primary/5"
                  }`}
              >
                <input
                  type="radio"
                  name="ctaStyle"
                  className="mt-1.5 size-4 text-primary focus:ring-primary border-primary/30"
                  checked={data.ctaStyle === cta.id}
                  onChange={() => updateData({ ctaStyle: cta.id as any })}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <cta.icon className={`size-4 ${data.ctaStyle === cta.id ? "text-primary" : "text-slate-400"}`} />
                    <span className={`font-bold ${data.ctaStyle === cta.id ? "text-primary" : "text-[#121811]"}`}>
                      {cta.label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    {cta.desc}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Compliance */}
        <section className="pt-8 border-t border-primary/10">
          <label className="flex items-start gap-4 p-4 rounded-xl cursor-pointer hover:bg-primary/5 transition-all">
            <input
              type="checkbox"
              className="mt-1.5 size-5 rounded border-primary/30 text-primary focus:ring-primary transition-all"
              checked={data.complianceAccepted}
              onChange={(e) => updateData({ complianceAccepted: e.target.checked })}
            />
            <div className="flex-1">
              <span className="font-bold text-[#121811] flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                Compliance & Quality Standards
              </span>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                I agree to follow professional outreach standards and anti-spam policies. Heritage ensures all AI-generated content meets these requirements.
              </p>
            </div>
          </label>
        </section>
      </div>
    </OnboardingStepContainer>
  );
}
