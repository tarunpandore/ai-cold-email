"use client";

import { Search, Filter, SortDesc } from "lucide-react";

export default function ResultsFilters() {
    return (
        <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="relative flex-1 min-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                <input
                    type="text"
                    placeholder="Search by subject, lead name, or company..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-primary/10 rounded-xl focus:ring-primary focus:border-primary text-sm font-medium transition-all"
                />
            </div>
            <div className="flex items-center gap-2">
                <button className="px-4 py-2.5 bg-white border border-primary/10 rounded-xl text-sm font-bold text-slate-600 hover:text-primary hover:border-primary/30 flex items-center gap-2 transition-all">
                    <Filter size={18} className="text-primary/40" />
                    Quality: All
                </button>
                <button className="px-4 py-2.5 bg-white border border-primary/10 rounded-xl text-sm font-bold text-slate-600 hover:text-primary hover:border-primary/30 flex items-center gap-2 transition-all">
                    <SortDesc size={18} className="text-primary/40" />
                    Score: High-Low
                </button>
            </div>
        </div>
    );
}
