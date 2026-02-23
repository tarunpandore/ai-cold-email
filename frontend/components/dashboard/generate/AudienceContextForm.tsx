"use client";

import { Info, Briefcase, Coffee, Bolt } from "lucide-react";
import { useState } from "react";

export default function AudienceContextForm({
    industry,
    setIndustry,
    tone,
    setTone,
}: {
    industry: string;
    setIndustry: (v: string) => void;
    tone: string;
    setTone: (v: string) => void;
}) {

    return (
        <section className="bg-white rounded-xl border border-primary/5 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <line x1="12" y1="2" x2="12" y2="5" />
                        <line x1="12" y1="19" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="5" y2="12" />
                        <line x1="19" y1="12" x2="22" y2="12" />
                    </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-800">1. Audience & Context</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Target Industry or Niche</label>
                    <div className="relative">
                        <input
                            className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary text-sm py-2.5"
                            placeholder="e.g. Fintech Startups, SaaS Founders"
                            type="text"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/40">
                            <Info size={18} />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Tone of Voice</label>
                    <div className="grid grid-cols-3 gap-3">
                        <button
                            onClick={() => setTone("professional")}
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${tone === "professional"
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-slate-100 text-slate-500 hover:border-primary/30"
                                }`}
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Professional</span>
                        </button>

                        <button
                            onClick={() => setTone("casual")}
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${tone === "casual"
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-slate-100 text-slate-500 hover:border-primary/30"
                                }`}
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                                <line x1="6" y1="2" x2="6" y2="4" />
                                <line x1="10" y1="2" x2="10" y2="4" />
                                <line x1="14" y1="2" x2="14" y2="4" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Casual</span>
                        </button>

                        <button
                            onClick={() => setTone("direct")}
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${tone === "direct"
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-slate-100 text-slate-500 hover:border-primary/30"
                                }`}
                        >
                            <Bolt className="size-5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Direct</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
