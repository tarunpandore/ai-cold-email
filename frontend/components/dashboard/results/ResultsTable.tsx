"use client";

import { Eye, Edit2, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";

const MOCK_RESULTS = [
    {
        id: 1,
        subject: "Re: Scaling Heritage Design",
        firstLine: "I noticed your recent focus on cultural legacy...",
        score: 92,
        quality: "A",
    },
    {
        id: 2,
        subject: "Quick question for James",
        firstLine: "Your work at Sterling Co caught my eye...",
        score: 78,
        quality: "A",
    },
    {
        id: 3,
        subject: "Partnership Opportunity",
        firstLine: "I was impressed by your latest publication...",
        score: 64,
        quality: "B",
    },
    {
        id: 4,
        subject: "Ideas for your outreach",
        firstLine: "Saw your post about SaaS growth yesterday...",
        score: 45,
        quality: "C",
    },
    {
        id: 5,
        subject: "Feedback on ColdReply",
        firstLine: "Checking in to see how the onboarding went...",
        score: 88,
        quality: "A",
    },
];

export default function ResultsTable() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="bg-white rounded-2xl border border-primary/10 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary/5 border-b border-primary/10">
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/60">Subject Line</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/60">First Line</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/60">Email Body</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/60">Personalization</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/60">Quality</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/60 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            {MOCK_RESULTS.map((item) => (
                                <tr key={item.id} className="hover:bg-primary/[0.02] transition-colors group">
                                    <td className="px-6 py-5">
                                        <p className="text-sm font-bold text-slate-800">{item.subject}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-sm text-slate-500 truncate max-w-[200px]">{item.firstLine}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <button className="text-xs font-bold text-primary underline underline-offset-4 flex items-center gap-1 hover:opacity-80 transition-opacity">
                                            View Body
                                            <Eye size={14} />
                                        </button>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${item.score >= 85 ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                                item.score >= 60 ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                                    "bg-rose-50 text-rose-600 border border-rose-100"
                                            }`}>
                                            {item.score}% {item.score >= 85 ? "High" : item.score >= 60 ? "Medium" : "Low"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="size-8 rounded-lg flex items-center justify-center text-xs font-black bg-primary/10 text-primary border border-primary/20">
                                            {item.quality}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                                                <Edit2 size={18} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                                                <RotateCw size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500 tracking-tight">
                    Showing <span className="font-bold text-slate-800">1 to 5</span> of <span className="font-bold text-slate-800">154</span> results
                </p>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-primary/10 rounded-lg text-slate-400 hover:bg-primary/5 disabled:opacity-50 transition-all" disabled>
                        <ChevronLeft size={18} />
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="size-8 rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
                        <button className="size-8 rounded-lg hover:bg-primary/5 text-slate-600 text-xs font-bold transition-all">2</button>
                        <button className="size-8 rounded-lg hover:bg-primary/5 text-slate-600 text-xs font-bold transition-all">3</button>
                    </div>
                    <button className="p-2 border border-primary/10 rounded-lg text-slate-400 hover:bg-primary/5 transition-all">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
