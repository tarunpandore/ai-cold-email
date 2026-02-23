"use client";

import AnalyticsHeader from "@/components/dashboard/analytics/AnalyticsHeader";
import PerformanceMetrics from "@/components/dashboard/analytics/PerformanceMetrics";
import ConversionFunnel from "@/components/dashboard/analytics/ConversionFunnel";
import CampaignPerformanceTable from "@/components/dashboard/analytics/CampaignPerformanceTable";
import DashboardFooter from "@/components/layouts/DashboardFooter";
import TopBar from "@/components/layouts/TopBar";

export default function AnalyticsPage() {
  return (
    <>
      <TopBar title="Analytics" />

      <main className="p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <AnalyticsHeader />

        <PerformanceMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ConversionFunnel />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">Reply Rate Trends</h3>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase">
                    <div className="size-2 rounded-full bg-primary"></div>
                    Direct Replies
                  </span>
                </div>
              </div>

              <div className="flex-1 min-h-[300px] flex items-end justify-between gap-3 mt-4">
                {[45, 62, 58, 75, 90, 82, 95].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                    <div className="absolute -top-8 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {val}%
                    </div>
                    <div
                      className="w-full bg-primary/10 rounded-t-lg group-hover:bg-primary/20 transition-all duration-500 ease-out relative overflow-hidden"
                      style={{ height: `${val}%` }}
                    >
                      <div className="absolute bottom-0 w-full bg-primary/40 h-1/3"></div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase">W{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CampaignPerformanceTable />
      </main>

      <DashboardFooter />
    </>
  );
}
