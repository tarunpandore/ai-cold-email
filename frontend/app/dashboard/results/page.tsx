"use client";

import TopBar from "@/components/layouts/TopBar";
import DashboardFooter from "@/components/layouts/DashboardFooter";
import ResultsHeader from "@/components/dashboard/results/ResultsHeader";
import ResultsFilters from "@/components/dashboard/results/ResultsFilters";
import ResultsTable from "@/components/dashboard/results/ResultsTable";

export default function ResultsPage() {
  return (
    <>
      <TopBar />

      <main className="p-4 md:p-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <ResultsHeader
            count={154}
            campaignName="Heritage Q4 Outreach"
          />

          <ResultsFilters />

          <ResultsTable />
        </div>
      </main>

      <DashboardFooter />
    </>
  );
}
