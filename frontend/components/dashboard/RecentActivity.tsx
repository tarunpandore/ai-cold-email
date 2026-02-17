"use client";

import { FileText, MoreVertical } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

export default function RecentActivity() {
    const activity = useAppStore((state) => state.activity);

    return (
        <div className="bg-white rounded-xl border border-primary/5 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-primary/5 flex justify-between items-center">
                <h5 className="text-base font-bold text-slate-800">Recent Activity</h5>
                <button className="text-xs font-bold text-primary hover:underline">View All Sessions</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Batch Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Personalization</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                        {activity.map((item) => {
                            const statusConfig = {
                                Completed: { color: "bg-green-100 text-green-700", dot: "bg-green-500", pulse: false },
                                Processing: { color: "bg-amber-100 text-amber-700", dot: "bg-amber-500", pulse: true },
                                Failed: { color: "bg-red-100 text-red-700", dot: "bg-red-500", pulse: false },
                            }[item.status];

                            const formattedDate = new Date(item.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: '2-digit',
                                year: 'numeric'
                            });

                            return (
                                <tr key={item.id} className="hover:bg-slate-50 transition-all">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 bg-primary/10 text-primary rounded flex items-center justify-center">
                                                <FileText size={16} />
                                            </div>
                                            <span className="text-sm font-bold text-slate-800 truncate max-w-[200px]">{item.batchName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 font-medium whitespace-nowrap">{formattedDate}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${item.personalizationScore}%` }}></div>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">{item.personalizationScore}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold ${statusConfig.color} uppercase tracking-wider whitespace-nowrap`}>
                                            <span className={`size-1.5 rounded-full ${statusConfig.dot} ${statusConfig.pulse ? 'animate-pulse' : ''}`}></span>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-all p-1">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
