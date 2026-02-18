"use client";

import TopBar from "@/components/layouts/TopBar";
import AudienceContextForm from "@/components/dashboard/generate/AudienceContextForm";
import MessagingStrategyForm from "@/components/dashboard/generate/MessagingStrategyForm";
import LaunchControlCard from "@/components/dashboard/generate/LaunchControlCard";
import ProcessingFlowStepper from "@/components/dashboard/generate/ProcessingFlowStepper";
import AccountUsageCard from "@/components/dashboard/generate/AccountUsageCard";
import DashboardFooter from "@/components/layouts/DashboardFooter";

export default function GeneratePage() {
  return (
    <>
      <TopBar />

      <main className="p-4 md:p-8">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Page Heading */}
          <div>
            <h2 className="text-3xl font-black text-primary tracking-tight">Generate Emails</h2>
            <p className="text-sm text-slate-500 mt-1">Configure your AI-powered outreach sequence with deep personalization.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Column */}
            <div className="lg:col-span-2 space-y-8">
              <AudienceContextForm />
              <MessagingStrategyForm />
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <LaunchControlCard />
              <ProcessingFlowStepper />
              <AccountUsageCard />
            </div>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </>
  );
}
