"use client";

import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const LEADS = [
    {
        id: 1,
        name: "Marcus Wright",
        email: "m.wright@technova.io",
        company: "TechNova Solutions",
        status: "Processed",
        score: 94,
        quality: "A",
        created: "Oct 12, 2023",
        avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        email: "s.jenkins@acme.co",
        company: "Acme Industries",
        status: "Pending",
        score: 72,
        quality: "B",
        created: "Oct 11, 2023",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        id: 3,
        name: "David Chen",
        email: "chen@globalflow.com",
        company: "GlobalFlow Inc",
        status: "Processed",
        score: 88,
        quality: "A",
        created: "Oct 10, 2023",
        avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
        id: 4,
        name: "Lina Roberts",
        email: "lroberts@velocity.dev",
        company: "Velocity Developers",
        status: "Failed",
        score: 34,
        quality: "C",
        created: "Oct 09, 2023",
        avatar: "https://i.pravatar.cc/150?u=lina"
    },
];

export default function LeadTable() {
    return (
        <div className="bg-white rounded-xl border border-primary/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-primary/5 bg-slate-50/50">
                            <th className="px-6 py-4 w-10">
                                <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Lead Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Company</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Pers. Score</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Email Quality</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Created</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                        {LEADS.map((lead) => (
                            <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-9 rounded-lg overflow-hidden shrink-0">
                                            <Image src={lead.avatar} alt={lead.name} width={36} height={36} className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800 leading-none mb-1">{lead.name}</p>
                                            <p className="text-[10px] text-slate-500 font-medium">{lead.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-slate-600">{lead.company}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${lead.status === "Processed" ? "bg-emerald-50 text-emerald-600" :
                                            lead.status === "Pending" ? "bg-amber-50 text-amber-600" :
                                                "bg-rose-50 text-rose-500"
                                        }`}>
                                        <span className="size-1.5 rounded-full bg-current" />
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-slate-700">{lead.score}</span>
                                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${lead.score > 85 ? "bg-emerald-500" : lead.score > 60 ? "bg-amber-500" : "bg-rose-500"
                                                    }`}
                                                style={{ width: `${lead.score}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`size-8 rounded flex items-center justify-center text-xs font-bold ${lead.quality === "A" ? "bg-emerald-50 text-emerald-700" :
                                            lead.quality === "B" ? "bg-amber-50 text-amber-700" :
                                                "bg-rose-50 text-rose-700"
                                        }`}>
                                        {lead.quality}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-xs font-medium text-slate-500">
                                    {lead.created}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-primary/5 flex items-center justify-between">
                <p className="text-xs text-slate-500">Showing 1-10 of 1,284 leads</p>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-all disabled:opacity-50" disabled>
                        <ChevronLeft size={16} />
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="size-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
                        <button className="size-8 rounded-lg hover:bg-slate-50 text-slate-600 text-xs font-bold transiti-all">2</button>
                        <button className="size-8 rounded-lg hover:bg-slate-50 text-slate-600 text-xs font-bold transiti-all">3</button>
                        <span className="text-slate-400 px-1">...</span>
                        <button className="size-8 rounded-lg hover:bg-slate-50 text-slate-600 text-xs font-bold transiti-all">129</button>
                    </div>
                    <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-all">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
