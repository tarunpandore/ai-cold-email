"use client";

import { CheckCircle2, Calendar, BarChart3 } from "lucide-react";

export default function PlanHero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {/* Current Plan Card */}
            <section className="lg:col-span-2">
                <div className="bg-white border border-primary/10 rounded-xl p-8 h-full flex flex-col justify-between shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                        <CheckCircle2 size={120} className="text-primary" />
                    </div>

                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2 block">Current Plan</span>
                            <h3 className="text-3xl font-black text-primary">Growth Plan</h3>
                            <div className="flex items-baseline gap-1 mt-3">
                                <span className="text-3xl font-black text-slate-800">$79</span>
                                <span className="text-sm font-medium text-slate-500">/month</span>
                            </div>
                        </div>
                        <div className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-emerald-100 shadow-sm">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                            Active
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-primary/5 pt-6 relative z-10">
                        <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                            <Calendar size={18} className="text-primary/40" />
                            Next renewal: <span className="text-slate-800 font-bold">Oct 12, 2023</span>
                        </div>
                        <button className="bg-primary text-white text-sm font-bold py-3 px-8 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
                            Manage Plan
                        </button>
                    </div>
                </div>
            </section>

            {/* Usage Meter Card */}
            <section>
                <div className="bg-white border border-primary/10 rounded-xl p-8 h-full shadow-sm flex flex-col">
                    <h4 className="text-sm font-bold text-slate-800 mb-8 flex items-center gap-2">
                        <BarChart3 size={18} className="text-primary" />
                        Usage Meter
                    </h4>

                    <div className="space-y-6 flex-1 flex flex-col justify-center">
                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Credits Consumed</span>
                                <span className="text-xl font-black text-primary">42.8%</span>
                            </div>
                            <div className="h-3 w-full bg-primary/5 rounded-full overflow-hidden border border-primary/5">
                                <div
                                    className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(44,89,38,0.3)]"
                                    style={{ width: '42.8%' }}
                                />
                            </div>
                            <div className="flex justify-between text-[11px] font-bold">
                                <span className="text-primary">4,280 Used</span>
                                <span className="text-slate-400">10,000 Total</span>
                            </div>
                        </div>

                        <div className="bg-primary/[0.03] p-4 rounded-xl border border-primary/10 mt-auto">
                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                                Your credits will automatically reset on <span className="text-primary font-bold">Oct 26, 2023</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
