"use client";

import { CheckCircle2 } from "lucide-react";

const PLANS = [
    {
        name: "Starter",
        price: 29,
        features: ["2,000 Credits", "5 Email Templates", "Basic Analytics"],
        buttonText: "Switch Plan",
        active: false,
    },
    {
        name: "Growth",
        price: 79,
        features: [
            "10,000 Credits",
            "Unlimited Templates",
            "Advanced AI Generation",
            "Priority Support",
        ],
        buttonText: "Active",
        active: true,
    },
    {
        name: "Agency",
        price: 199,
        features: [
            "50,000 Credits",
            "Team Collaboration",
            "White-label Reports",
            "Dedicated Manager",
        ],
        buttonText: "Upgrade to Agency",
        active: false,
    },
];

export default function PlanOptions() {
    return (
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">Plan Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`bg-white rounded-2xl p-8 flex flex-col relative shadow-sm transition-all duration-300 ${plan.active
                                ? "border-2 border-primary shadow-xl shadow-primary/10 -translate-y-1"
                                : "border border-primary/10 hover:border-primary/30"
                            }`}
                    >
                        {plan.active && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                Current Plan
                            </div>
                        )}

                        <h4 className="font-black text-xl text-slate-800">{plan.name}</h4>
                        <div className="flex items-baseline gap-1 mt-3">
                            <span className="text-3xl font-black text-slate-800">${plan.price}</span>
                            <span className="text-sm font-medium text-slate-500">/mo</span>
                        </div>

                        <ul className="mt-8 space-y-4 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="text-sm font-medium text-slate-600 flex items-center gap-2.5">
                                    <CheckCircle2 size={16} className="text-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full mt-10 py-3.5 px-6 rounded-xl font-bold text-sm transition-all ${plan.active
                                    ? "bg-primary/10 text-primary cursor-not-allowed opacity-80"
                                    : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                                }`}
                            disabled={plan.active}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
