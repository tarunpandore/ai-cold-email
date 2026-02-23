"use client";

import { TrendingUp, MousePointer2, MessageSquare, Target } from "lucide-react";

const metrics = [
    {
        label: "Average Open Rate",
        value: "64.2%",
        change: "+12.5%",
        trend: "up",
        icon: TrendingUp,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        label: "Reply Rate",
        value: "18.4%",
        change: "+4.2%",
        trend: "up",
        icon: MessageSquare,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        label: "Link Click Rate",
        value: "22.1%",
        change: "-2.1%",
        trend: "down",
        icon: MousePointer2,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        label: "Meeting Booked",
        value: "42",
        change: "+8",
        trend: "up",
        icon: Target,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
];

export default function PerformanceMetrics() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg ${metric.bg} ${metric.color}`}>
                            <metric.icon size={20} />
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${metric.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-rose-600 bg-rose-50'
                            }`}>
                            {metric.change}
                        </span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 mb-1">{metric.label}</p>
                    <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">{metric.value}</h4>
                </div>
            ))}
        </div>
    );
}
