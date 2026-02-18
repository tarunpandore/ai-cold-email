"use client";

import { Search, ChevronDown, Filter } from "lucide-react";

export default function LeadFilters() {
    return (
        <div className="bg-white p-4 rounded-xl border border-primary/5 shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-lg">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, company, or email..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border-slate-100 rounded-lg text-sm focus:ring-primary focus:border-primary"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
                        <Filter size={16} />
                        Status
                        <ChevronDown size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
                        Score Range
                        <ChevronDown size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
                        Created Date
                        <ChevronDown size={14} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
                        Email Quality
                        <ChevronDown size={14} />
                    </button>

                    <button className="text-primary text-sm font-bold hover:underline ml-auto lg:ml-2">
                        Clear all filters
                    </button>
                </div>
            </div>
        </div>
    );
}
