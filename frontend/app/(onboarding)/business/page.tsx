"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { OnboardingStepContainer } from "@/components/onboarding/OnboardingStepContainer";

// Custom mapping for icons if Lucide naming differs
import {
  Tag as SellIcon,
  Users as GroupsIcon,
  Mic as VoiceIcon,
  Briefcase as BusinessIcon,
  Smile as FriendlyIcon,
  Zap as DirectIcon,
  BrainCircuit as ConsultativeIcon
} from "lucide-react";

const tones = [
  { id: "formal", label: "Formal", icon: BusinessIcon },
  { id: "friendly", label: "Friendly", icon: FriendlyIcon },
  { id: "direct", label: "Direct", icon: DirectIcon },
  { id: "consultative", label: "Consultative", icon: ConsultativeIcon },
];

export default function BusinessContextPage() {
  const router = useRouter();
  const { data, updateData, setStep } = useOnboardingStore();

  useEffect(() => {
    setStep(2);
  }, [setStep]);

  const handleNext = () => {
    router.push("/email-preferences");
  };

  return (
    <OnboardingStepContainer onNext={handleNext} showBack backHref="/profile">
      <OnboardingProgress
        title="Business Context"
        subtitle="Step 2 of 4"
        description="Tell us about your offer and target audience to personalize your experience."
      />

      <div className="space-y-8">
        {/* Section 1: Offer Details */}
        <section className="bg-white p-6 md:p-8 rounded-xl border border-primary/10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2 border-b border-primary/5 pb-4">
            <SellIcon className="text-primary size-5" />
            <h2 className="text-[#121811] text-xl font-bold">Section 1: Offer Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full">
              <label className="block mb-2">
                <span className="text-[#121811] text-sm font-semibold">Product Description</span>
                <p className="text-slate-500 text-xs mb-2">Describe what you are selling in detail.</p>
                <textarea
                  className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-primary text-[#121811] min-h-[120px] placeholder:text-gray-400 p-3 bg-white outline-none ring-1 ring-primary/10"
                  placeholder="e.g. We provide AI-driven logistics optimization for mid-sized retail chains..."
                  value={data.productDescription}
                  onChange={(e) => updateData({ productDescription: e.target.value })}
                />
              </label>
            </div>

            <div className="col-span-1">
              <label className="block">
                <span className="text-[#121811] text-sm font-semibold">Target Industry</span>
                <select
                  className="w-full mt-1 px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary outline-none appearance-none transition-all cursor-pointer text-[#121811]"
                  value={data.targetIndustry}
                  onChange={(e) => updateData({ targetIndustry: e.target.value })}
                >
                  <option value="">Select industry</option>
                  <option>SaaS & Technology</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Fintech</option>
                  <option>Retail</option>
                </select>
              </label>
            </div>

            <div className="col-span-1">
              <label className="block">
                <span className="text-[#121811] text-sm font-semibold">Company Size (Employees)</span>
                <select
                  className="w-full mt-1 px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary outline-none appearance-none transition-all cursor-pointer text-[#121811]"
                  value={data.companySize}
                  onChange={(e) => updateData({ companySize: e.target.value })}
                >
                  <option value="">Select range</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        {/* Section 2: ICP */}
        <section className="bg-white p-6 md:p-8 rounded-xl border border-primary/10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2 border-b border-primary/5 pb-4">
            <GroupsIcon className="text-primary size-5" />
            <h2 className="text-[#121811] text-xl font-bold">Section 2: Ideal Customer Profile</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block mb-2">
                <span className="text-[#121811] text-sm font-semibold">Decision Maker Role</span>
                <input
                  className="w-full mt-1 px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="e.g. Head of Operations, CTO, Sales Director"
                  type="text"
                  value={data.decisionMakerRole}
                  onChange={(e) => updateData({ decisionMakerRole: e.target.value })}
                />
              </label>
            </div>

            <div>
              <label className="block mb-2">
                <span className="text-[#121811] text-sm font-semibold">Key Pain Points</span>
                <p className="text-slate-500 text-xs mb-2">What problems do you solve for them?</p>
                <textarea
                  className="w-full rounded-lg border-primary/20 focus:border-primary focus:ring-primary text-[#121811] min-h-[100px] p-3 bg-white outline-none ring-1 ring-primary/10"
                  placeholder="Describe the challenges your customers face..."
                  value={data.keyPainPoints}
                  onChange={(e) => updateData({ keyPainPoints: e.target.value })}
                />
              </label>
            </div>
          </div>
        </section>

        {/* Section 3: Tone Preference */}
        <section className="bg-white p-6 md:p-8 rounded-xl border border-primary/10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2 border-b border-primary/5 pb-4">
            <VoiceIcon className="text-primary size-5" />
            <h2 className="text-[#121811] text-xl font-bold">Section 3: Tone Preference</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tones.map((tone) => (
              <label
                key={tone.id}
                className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${data.tone === tone.id
                  ? "border-primary bg-primary/5"
                  : "border-primary/10 hover:bg-primary/5"
                  }`}
              >
                <input
                  type="radio"
                  name="tone"
                  className="hidden"
                  checked={data.tone === tone.id}
                  onChange={() => updateData({ tone: tone.id })}
                />
                <tone.icon className={`size-6 mb-2 ${data.tone === tone.id ? "text-primary" : "text-slate-400"}`} />
                <span className={`text-sm font-bold ${data.tone === tone.id ? "text-primary" : "text-slate-900"}`}>
                  {tone.label}
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </OnboardingStepContainer>
  );
}
