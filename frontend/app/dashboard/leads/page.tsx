"use client";

import TopBar from "@/components/layouts/TopBar";
import LeadStats from "@/components/dashboard/leads/LeadStats";
import LeadFilters from "@/components/dashboard/leads/LeadFilters";
import LeadTable from "@/components/dashboard/leads/LeadTable";
import DashboardFooter from "@/components/layouts/DashboardFooter";

export default function LeadsPage() {
  return (
    <>
      <TopBar />

      <main className="p-4 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Leads Management</h2>
            <p className="text-sm text-slate-500 mt-1">Manage, filter, and track the status of your prospect batches.</p>
          </div>

          <LeadStats />
          <LeadFilters />
          <LeadTable />
        </div>
      </main>

      <DashboardFooter />
    </>
  );
}
