"use client";

import { Rocket, Sparkles } from "lucide-react";

export default function LaunchControlCard() {
    return (
        <div className="bg-white rounded-xl border border-primary/5 shadow-xl overflow-hidden">
            <div className="bg-primary p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Configuration Ready</span>
                        <Rocket size={18} className="text-white animate-pulse" />
                    </div>
                    <h4 className="text-2xl font-bold">Ready to Launch</h4>
                    <p className="text-white/70 text-xs mt-1">124 selected leads will be processed</p>
                </div>
                {/* Decorative glow */}
                <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl" />
            </div>

            <div className="p-6 space-y-4">
                <button className="w-full py-4 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                    <Sparkles size={18} />
                    Generate Emails
                </button>
                <div className="flex flex-col items-center">
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Estimated Completion: 4 mins</p>
                </div>
            </div>
        </div>
    );
}
