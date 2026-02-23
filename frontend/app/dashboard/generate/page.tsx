"use client";

import { useState } from "react";
import TopBar from "@/components/layouts/TopBar";
import AudienceContextForm from "@/components/dashboard/generate/AudienceContextForm";
import MessagingStrategyForm from "@/components/dashboard/generate/MessagingStrategyForm";
import LaunchControlCard from "@/components/dashboard/generate/LaunchControlCard";
import ProcessingFlowStepper from "@/components/dashboard/generate/ProcessingFlowStepper";
import AccountUsageCard from "@/components/dashboard/generate/AccountUsageCard";
import DashboardFooter from "@/components/layouts/DashboardFooter";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function GeneratePage() {
  const router = useRouter();
  const [industry, setIndustry] = useState("");
  const [tone, setTone] = useState("professional");
  const [selectedCta, setSelectedCta] = useState("call");
  const [abTest, setAbTest] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLaunch = async () => {
    if (!industry) {
      setError("Please specify a target industry or niche.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Backend Integration: Call the generation endpoint
      // const response = await api.post("/generate", {
      //   industry,
      //   tone,
      //   cta: selectedCta,
      //   abTest,
      // });

      // Simulating a network request
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Success: Redirect to results or show success message
      router.push("/dashboard/results");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to initiate generation. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar title="Generate Outreach" />

      <main className="p-4 md:p-8">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-black text-primary tracking-tight">Generate Emails</h2>
              <p className="text-sm text-slate-500 mt-1">Configure your AI-powered outreach sequence with deep personalization.</p>
            </div>
            {error && (
              <div className="px-4 py-2 bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold rounded-lg animate-in fade-in zoom-in-95">
                {error}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Column */}
            <div className="lg:col-span-2 space-y-8">
              <AudienceContextForm
                industry={industry}
                setIndustry={setIndustry}
                tone={tone}
                setTone={setTone}
              />
              <MessagingStrategyForm
                selectedCta={selectedCta}
                setSelectedCta={setSelectedCta}
                abTest={abTest}
                setAbTest={setAbTest}
              />
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <LaunchControlCard
                onLaunch={handleLaunch}
                loading={loading}
                disabled={!industry}
              />
              <ProcessingFlowStepper activeStep={loading ? 1 : 0} />
              <AccountUsageCard />
            </div>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </>
  );
}
