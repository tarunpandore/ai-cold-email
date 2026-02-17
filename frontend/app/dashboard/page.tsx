"use client";

import { FileUp, Zap } from "lucide-react";
import TopBar from "@/components/layouts/TopBar";
import Stats from "@/components/dashboard/Stats";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { useAppStore } from "@/store/useAppStore";

export default function DashboardPage() {
    const user = useAppStore((state) => state.user);

    return (
        <div className="flex-1 flex flex-col min-w-0 h-full">
            <TopBar title="Overview" />
            <div className="p-4 md:p-8 space-y-6 md:space-y-8">
                {/* Quick Actions / Welcome */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Welcome back, {user?.name || "User"}</h3>
                        <p className="text-sm text-slate-500">Here's what's happening with your outreach today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                        <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-primary/20 text-primary font-bold text-sm hover:bg-primary/5 transition-all w-full sm:w-auto">
                            <FileUp size={18} />
                            Upload CSV
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm shadow-xl shadow-primary/10 hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto">
                            <Zap size={18} />
                            Generate Emails
                        </button>
                    </div>
                </div>

                <Stats />

                <DashboardCharts />

                <RecentActivity />
            </div>
        </div>
    );
}
