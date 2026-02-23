"use client";

import { Download, Calendar, Filter } from "lucide-react";

export default function AnalyticsHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Performance Analytics</h2>
                <p className="text-sm text-slate-500 mt-1">Deep dive into your outreach metrics and campaign ROI.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/10 rounded-lg shadow-sm text-sm font-bold text-slate-600">
                    <Calendar size={16} className="text-primary" />
                    <span>Last 30 Days</span>
                </div>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-primary/10 rounded-lg shadow-sm text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                    <Filter size={16} />
                    <span>Filters</span>
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-lg shadow-primary/10 text-sm font-bold hover:opacity-90 active:scale-95 transition-all">
                    <Download size={16} />
                    <span>Export Data</span>
                </button>
            </div>
        </div>
    );
}
