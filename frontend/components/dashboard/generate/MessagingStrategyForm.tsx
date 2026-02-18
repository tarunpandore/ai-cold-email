"use client";

import { PenLine, Copy } from "lucide-react";
import { useState } from "react";

const CTA_OPTIONS = [
    { id: "call", title: "Book a Call", desc: "Suggests a 15-minute intro meeting" },
    { id: "direct", title: "Direct Pitch", desc: "Goes straight to the value prop" },
    { id: "feedback", title: "Feedback Loop", desc: "Asks for opinion on a solution" },
    { id: "resource", title: "Free Resource", desc: "Offers an ebook or whitepaper" },
];

export default function MessagingStrategyForm() {
    const [selectedCta, setSelectedCta] = useState("call");
    const [abTest, setAbTest] = useState(true);

    return (
        <section className="bg-white rounded-xl border border-primary/5 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <PenLine size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-800">2. Messaging Strategy</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-4">Call to Action (CTA) Style</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CTA_OPTIONS.map((opt) => (
                            <label
                                key={opt.id}
                                className={`relative flex items-center p-4 rounded-lg border cursor-pointer transition-all hover:bg-slate-50 ${selectedCta === opt.id ? "border-primary bg-primary/5" : "border-slate-100"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="cta"
                                    checked={selectedCta === opt.id}
                                    onChange={() => setSelectedCta(opt.id)}
                                    className="size-4 text-primary focus:ring-primary border-slate-300"
                                />
                                <div className="ml-4">
                                    <div className="text-sm font-bold text-slate-800">{opt.title}</div>
                                    <div className="text-[10px] text-slate-500">{opt.desc}</div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                            <Copy size={18} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-800">A/B Variations</div>
                            <p className="text-[10px] text-slate-500">Generate 2 versions of each email to test performance</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setAbTest(!abTest)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${abTest ? "bg-primary" : "bg-slate-200"
                            }`}
                    >
                        <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${abTest ? "translate-x-5" : "translate-x-0"
                                }`}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
