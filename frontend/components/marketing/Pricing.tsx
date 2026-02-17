import { PRICING_PLANS } from "@/constants/landing";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Pricing() {
    return (
        <section className="py-24 lg:py-32" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black mb-6 tracking-tight">
                        Ready to scale your replies?
                    </h2>
                    <p className="text-gray-600">
                        Simple, transparent pricing for teams of all sizes.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {PRICING_PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className={`p-10 rounded-3xl border ${plan.featured
                                ? "border-2 border-primary transform lg:-translate-y-4 shadow-xl"
                                : "border-gray-200"
                                } bg-white flex flex-col relative`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h5 className="text-sm font-bold text-primary uppercase tracking-widest mb-2 font-display">
                                    {plan.name}
                                </h5>
                                <div className="text-4xl font-black">
                                    {plan.price}
                                    <span className="text-lg text-gray-400 font-medium">/mo</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => {
                                    const isAvailable = typeof feature !== "object" || feature.available;
                                    const featureText = typeof feature === "object" ? feature.text : feature;

                                    return (
                                        <li
                                            key={i}
                                            className={`flex items-center gap-3 text-sm ${!isAvailable ? "text-gray-400" : ""}`}
                                        >
                                            {isAvailable ? (
                                                <CheckCircle2 size={18} className="text-primary" />
                                            ) : (
                                                <XCircle size={18} className="text-gray-300" />
                                            )}
                                            {featureText}
                                        </li>
                                    );
                                })}
                            </ul>
                            <button
                                className={`w-full py-4 font-bold rounded-xl transition-all ${plan.featured
                                    ? "bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02]"
                                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
