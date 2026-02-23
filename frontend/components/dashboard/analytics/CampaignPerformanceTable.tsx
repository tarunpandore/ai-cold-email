"use client";

import { MoreHorizontal, ExternalLink } from "lucide-react";

const campaigns = [
    { name: "SaaS Founders Q1", sent: 1250, openRate: "72%", replyRate: "14%", leads: 175, status: "Active" },
    { name: "Tech Recruiters Outreach", sent: 850, openRate: "65%", replyRate: "1.2%", leads: 10, status: "Paused" },
    { name: "Series A Marketing Teams", sent: 2100, openRate: "58%", replyRate: "8.5%", leads: 178, status: "Completed" },
    { name: "E-commerce Growth Hackers", sent: 800, openRate: "81%", replyRate: "22%", leads: 176, status: "Active" },
];

export default function CampaignPerformanceTable() {
    return (
        <div className="bg-white rounded-xl border border-primary/5 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-primary/5 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-800">Campaign Breakdown</h3>
                <button className="text-xs font-bold text-primary hover:underline">View All Campaigns</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50">
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Campaign Name</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Sent</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Open Rate</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Reply Rate</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                        {campaigns.map((camp, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <span className="text-sm font-bold text-slate-800 block">{camp.name}</span>
                                    <span className="text-[10px] text-slate-400 font-medium tracking-tight">Created 12 days ago</span>
                                </td>
                                <td className="px-6 py-4 text-center font-bold text-slate-700 text-sm">{camp.sent.toLocaleString()}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-sm font-black text-primary">{camp.openRate}</span>
                                </td>
                                <td className="px-6 py-4 text-center text-sm font-bold text-slate-700">{camp.replyRate}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex px-2 py-1 rounded text-[10px] font-black uppercase tracking-tight ${camp.status === 'Active' ? 'bg-green-50 text-green-600' :
                                            camp.status === 'Paused' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {camp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
                                            <ExternalLink size={16} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors hover:bg-slate-100 rounded-lg">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
