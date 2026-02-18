"use client";

import { Search, BrainCircuit, CheckCircle2 } from "lucide-react";

const STEPS = [
    {
        id: 1,
        title: "Lead Scraping",
        desc: "Deep scanning profiles for context",
        icon: Search,
        active: true
    },
    {
        id: 2,
        title: "AI Personalization",
        desc: "Drafting custom openers and hooks",
        icon: BrainCircuit,
        active: false
    },
    {
        id: 3,
        title: "Quality Scoring",
        desc: "Verifying tone and spam triggers",
        icon: CheckCircle2,
        active: false
    },
];

export default function ProcessingFlowStepper() {
    return (
        <section className="bg-white rounded-xl border border-primary/5 p-6">
            <h4 className="font-bold text-xs text-slate-800 mb-6 uppercase tracking-wider">Processing Flow</h4>
            <div className="space-y-8 relative">
                {/* Connector Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100 z-0" />

                {STEPS.map((step) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.id} className={`relative flex items-start gap-4 z-10 transition-opacity duration-300 ${step.active ? "opacity-100" : "opacity-40"}`}>
                            <div className={`size-8 rounded-full flex items-center justify-center shadow-sm ${step.active ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                                }`}>
                                <Icon size={16} />
                            </div>
                            <div>
                                <h5 className={`text-sm font-bold ${step.active ? "text-primary" : "text-slate-700"}`}>{step.title}</h5>
                                <p className="text-[10px] text-slate-500">{step.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
