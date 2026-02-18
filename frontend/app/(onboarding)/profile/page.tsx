"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { OnboardingStepContainer } from "@/components/onboarding/OnboardingStepContainer";
import { User, BadgeCheck, Target, CheckCircle2 } from "lucide-react";

const goals = [
  {
    id: "book-meetings",
    title: "Book Meetings",
    description: "Schedule more calls with prospects",
  },
  {
    id: "generate-leads",
    title: "Generate Leads",
    description: "Fill your pipeline with fresh prospects",
  },
  {
    id: "build-brand",
    title: "Build Brand",
    description: "Increase awareness in your industry",
  },
  {
    id: "recruit-talent",
    title: "Recruit Talent",
    description: "Find the best people for your team",
  },
];

export default function ProfileSetupPage() {
  const router = useRouter();
  const { data, updateData, setStep } = useOnboardingStore();

  useEffect(() => {
    setStep(1);
  }, [setStep]);

  const handleNext = () => {
    // Basic validation could be added here
    router.push("/business");
  };

  const toggleGoal = (goalId: string) => {
    const newGoals = data.goals.includes(goalId)
      ? data.goals.filter((id) => id !== goalId)
      : [...data.goals, goalId];
    updateData({ goals: newGoals });
  };

  return (
    <OnboardingStepContainer onNext={handleNext}>
      <OnboardingProgress
        title="Let's set up your profile"
        subtitle="Step 1: Personal Profile"
        description="Tell us a bit about yourself so we can tailor your experience."
      />

      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        {/* Section: Personal Info */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-primary/10">
            <User className="text-primary size-5" />
            <h2 className="text-lg font-semibold text-slate-900">Personal Info</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full">
              <label className="block text-sm font-medium mb-2 text-slate-700" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                id="full-name"
                placeholder="John Doe"
                type="text"
                value={data.fullName}
                onChange={(e) => updateData({ fullName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700" htmlFor="job-title">
                Job Title
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                id="job-title"
                placeholder="Sales Executive"
                type="text"
                value={data.jobTitle}
                onChange={(e) => updateData({ jobTitle: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700" htmlFor="company-name">
                Company Name
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                id="company-name"
                placeholder="Acme Corp"
                type="text"
                value={data.companyName}
                onChange={(e) => updateData({ companyName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700" htmlFor="company-website">
                Company Website
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                id="company-website"
                placeholder="https://example.com"
                type="url"
                value={data.companyWebsite}
                onChange={(e) => updateData({ companyWebsite: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700" htmlFor="linkedin-url">
                LinkedIn Profile URL
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                id="linkedin-url"
                placeholder="linkedin.com/in/username"
                type="url"
                value={data.linkedinUrl}
                onChange={(e) => updateData({ linkedinUrl: e.target.value })}
              />
            </div>
          </div>
        </section>

        {/* Section: Role Selection */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-primary/10">
            <BadgeCheck className="text-primary size-5" />
            <h2 className="text-lg font-semibold text-slate-900">Role Selection</h2>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-2 text-slate-700" htmlFor="role">
              What is your primary role?
            </label>
            <select
              className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-all cursor-pointer text-slate-900"
              id="role"
              value={data.role}
              onChange={(e) => updateData({ role: e.target.value })}
            >
              <option disabled value="">
                Select your role
              </option>
              <option value="founder">Founder</option>
              <option value="sdr">SDR / BDR</option>
              <option value="sales-manager">Sales Manager</option>
              <option value="account-executive">Account Executive</option>
              <option value="marketing">Marketing Specialist</option>
              <option value="other">Other</option>
            </select>
          </div>
        </section>

        {/* Section: Outreach Goals */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-primary/10">
            <Target className="text-primary size-5" />
            <h2 className="text-lg font-semibold text-slate-900">Outreach Goals</h2>
          </div>
          <p className="text-sm text-slate-500">What are you looking to achieve? Select all that apply.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goals.map((goal) => (
              <label
                key={goal.id}
                className={`group relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${data.goals.includes(goal.id)
                  ? "border-primary bg-primary/5"
                  : "border-primary/10 bg-white hover:border-primary/40"
                  }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={data.goals.includes(goal.id)}
                  onChange={() => toggleGoal(goal.id)}
                />
                <div className="flex-1">
                  <h3 className={`font-medium ${data.goals.includes(goal.id) ? "text-primary" : "text-slate-900"}`}>
                    {goal.title}
                  </h3>
                  <p className="text-xs text-slate-500">{goal.description}</p>
                </div>
                {data.goals.includes(goal.id) && (
                  <CheckCircle2 className="text-primary size-5" />
                )}
              </label>
            ))}
          </div>
        </section>
      </form>
    </OnboardingStepContainer>
  );
}
