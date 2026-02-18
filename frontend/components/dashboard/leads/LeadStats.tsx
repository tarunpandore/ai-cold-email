"use client";

import { Users, ShieldCheck, Clock } from "lucide-react";

export default function LeadStats() {
    const stats = [
        { label: "Total Leads", value: "1,284", trend: "+12%", icon: Users, color: "text-primary", bg: "bg-primary/10" },
        { label: "High Quality", value: "856", trend: "+5%", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Pending Processing", value: "42", trend: "-2%", icon: Clock, color: "text-rose-500", bg: "bg-rose-50" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 ${stat.bg} ${stat.color} rounded-lg`}>
                                <Icon size={24} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"
                                }`}>
                                {stat.trend}
                            </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</h4>
                        <p className="text-3xl font-black text-slate-800 mt-1">{stat.value}</p>
                    </div>
                );
            })}
        </div>
    );
}
