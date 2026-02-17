import { TESTIMONIALS } from "@/constants/landing";

export default function Testimonials() {
    return (
        <>
            <section className="py-24 bg-primary text-white" id="testimonials">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                                "Our response rates jumped from 2% to 14% in one week."
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                                    <img
                                        alt="Alex Rivers"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-xl font-display">Alex Rivers</div>
                                    <div className="text-white/60">VP of Sales at CloudScale</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            {TESTIMONIALS.map((t, i) => (
                                <div
                                    key={i}
                                    className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
                                >
                                    <p className="italic text-lg mb-4">"{t.quote}"</p>
                                    <div className="font-bold font-display">
                                        — {t.author}, {t.role}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl font-black mb-8 leading-tight font-display">
                        Stop guessing, start replying.
                    </h2>
                    <p className="text-xl text-gray-500 mb-12">
                        Join 2,000+ sales teams who have abandoned generic templates for AI
                        personalization.
                    </p>
                    <button className="h-16 px-12 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                        Get Started for Free
                    </button>
                    <p className="mt-6 text-sm text-gray-400">
                        No credit card required. 14-day free trial.
                    </p>
                </div>
            </section>
        </>
    );
}
