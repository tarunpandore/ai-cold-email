'use client'

import { Bolt, PlayCircle, Search, User, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = ["Replies", "Meetings", "Growth", "Results"];

    // Refined timing for a more "human" feel
    const [delta, setDelta] = useState(200);

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                // Typing text
                setText(currentWord.substring(0, text.length + 1));
                // Variable speed while typing
                setDelta(100 + Math.random() * 80);

                if (text === currentWord) {
                    setIsDeleting(true);
                    setDelta(2000); // Pause at end
                }
            } else {
                // Deleting text
                setText(currentWord.substring(0, text.length - 1));
                setDelta(50); // Faster deletion

                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                    setDelta(500); // Pause before next word
                }
            }
        }, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, delta]);

    return (
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                            <Bolt size={14} />
                            AI-Powered Outreach
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900 min-h-[160px] lg:min-h-[180px]">
                            Cold Emails That Actually Get{" "}
                            <span className="text-primary relative inline-block">
                                <span className="relative z-10">{text}</span>
                                {/* Elegant blinking cursor */}
                                <span className="absolute -right-0.5 top-1 h-[80%] w-[2px] bg-primary animate-[blink_1s_step-end_infinite]"></span>
                                {/* Custom Underline Design - Adjusted for better visual alignment */}
                                <span className="absolute left-0 bottom-2 w-full h-[8px] bg-primary/15 -z-10 rounded-sm"></span>
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                            ColdReply uses AI to research your prospects and craft deeply
                            personalized messages that cut through the noise. Stop sending
                            spam, start building real relationships.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/signup"
                                className="h-14 px-8 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center"
                            >
                                Start Free Trial
                            </Link>
                            <button className="h-14 px-8 bg-white border border-gray-200 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-gray-50 transition-all">
                                <PlayCircle size={24} />
                                See Demo
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="mx-auto text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                    Live Personalization Engine
                                </div>
                            </div>
                            <div className="p-4 lg:p-6 grid grid-cols-2 gap-4 h-full min-h-[400px]">
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-tighter">
                                        <Search size={14} />{" "}
                                        Prospect Research
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-[10px] text-gray-400 font-bold mb-1">
                                                LINKEDIN URL
                                            </label>
                                            <div className="text-xs p-2 bg-white border border-gray-200 rounded text-primary font-medium truncate">
                                                linkedin.com/in/johndoe-founder
                                            </div>
                                        </div>
                                        <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <User size={14} className="text-primary" />
                                                </div>
                                                <div className="text-[11px] font-bold">John Doe</div>
                                            </div>
                                            <p className="text-[10px] text-gray-500 leading-tight">
                                                Just posted about: "Launching our new sustainability
                                                initiative next month. Hiring 10+ green energy
                                                experts!"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <button className="w-full py-2 bg-primary/10 text-primary text-[11px] font-bold rounded flex items-center justify-center gap-2">
                                            <Sparkles size={14} className="animate-spin" />{" "}
                                            Crafting Opener...
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 flex flex-col gap-4 relative overflow-hidden">
                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter">
                                        <Brain size={14} />{" "}
                                        AI Generation
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-white rounded-lg border border-primary/20 shadow-lg relative z-10">
                                            <p className="text-[11px] leading-relaxed text-gray-700">
                                                "Hi John, loved your recent post about the{" "}
                                                <span className="bg-primary/10 text-primary px-1 rounded font-bold">
                                                    sustainability initiative
                                                </span>
                                                . It's impressive that you're scaling with{" "}
                                                <span className="bg-primary/10 text-primary px-1 rounded font-bold">
                                                    10+ new green energy experts
                                                </span>
                                                . As a founder myself, I know..."
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-primary font-bold">
                                            <CheckCircle2 size={14} />
                                            Personalization Score: 98%
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Fixed missing import in the replacement content
import { Brain } from "lucide-react";

