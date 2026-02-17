"use client";

import { useAppStore } from "@/store/useAppStore";
import { Send, Zap, CheckCircle, Star } from "lucide-react";

const ICON_MAP: Record<string, any> = {
    "send": Send,
    "zap": Zap,
    "check-circle": CheckCircle,
    "star": Star,
};

export default function Stats() {
    const { user, stats } = useAppStore();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => {
                const Icon = ICON_MAP[stat.icon] || Send;
                const value = stat.isDynamicCredit
                    ? user?.creditsRemaining.toLocaleString()
                    : stat.value;
                const change = stat.isDynamicCredit
                    ? `${user?.plan || "Free"} PLAN`
                    : stat.change;

                return (
                    <div
                        key={stat.id}
                        className="bg-white p-5 md:p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                                <Icon size={20} />
                            </div>
                            {stat.trend === "up" ? (
                                <span className="text-[10px] md:text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                                    {change}
                                </span>
                            ) : (
                                <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest text-center">
                                    {change}
                                </span>
                            )}
                        </div>
                        <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                        <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                            {value}
                        </h4>
                    </div>
                );
            })}
        </div>
    );
}
