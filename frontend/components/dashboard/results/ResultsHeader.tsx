"use client";

import { Download } from "lucide-react";

interface ResultsHeaderProps {
    count: number;
    campaignName: string;
}

export default function ResultsHeader({ count, campaignName }: ResultsHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Email Generation Results</h2>
                <p className="text-sm text-slate-500 mt-1">
                    Reviewing <span className="text-primary font-bold">{count}</span> personalized emails for <span className="font-bold">"{campaignName}"</span>
                </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-primary/20 rounded-lg text-primary text-sm font-bold hover:bg-primary/5 transition-all shadow-sm">
                <Download size={18} />
                Export CSV
            </button>
        </div>
    );
}
