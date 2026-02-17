export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                            <span className="material-symbols-outlined text-sm">bolt</span>
                            AI-Powered Outreach
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">
                            Cold Emails That Actually Get{" "}
                            <span className="text-primary underline decoration-primary/20">
                                Replies
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                            ColdReply uses AI to research your prospects and craft deeply
                            personalized messages that cut through the noise. Stop sending
                            spam, start building real relationships.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="h-14 px-8 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                                Start Free Trial
                            </button>
                            <button className="h-14 px-8 bg-white border border-gray-200 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-gray-50 transition-all">
                                <span className="material-symbols-outlined">play_circle</span>
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
                                        <span className="material-symbols-outlined text-sm">
                                            search
                                        </span>{" "}
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
                                                    <span className="material-symbols-outlined text-[14px] text-primary">
                                                        person
                                                    </span>
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
                                            <span className="material-symbols-outlined text-sm animate-spin">
                                                auto_fix
                                            </span>{" "}
                                            Crafting Opener...
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 flex flex-col gap-4 relative overflow-hidden">
                                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter">
                                        <span className="material-symbols-outlined text-sm">
                                            psychology
                                        </span>{" "}
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
                                            <span className="material-symbols-outlined text-[14px]">
                                                done_all
                                            </span>
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
