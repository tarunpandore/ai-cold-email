"use client";


import { useUserStore } from "@/store/useUserStore";

export default function AccountUsageCard() {
    const { user } = useUserStore();

    const used = 4280; // Mock from design
    const total = 10000;
    const percentage = (used / total) * 100;

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-primary/5">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700">Monthly Usage</span>
                <span className="text-xs font-bold text-primary font-display">{used.toLocaleString()} / {total.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-slate-100 p-0.5">
                <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <p className="text-[10px] text-slate-500 mt-3 leading-relaxed italic font-medium">
                Generated emails consume 1 credit each. Credits reset in 12 days.
            </p>
        </div>
    );
}
