import { FEATURES } from "@/constants/landing";
import * as LucideIcons from "lucide-react";

export default function Features() {
    return (
        <section
            className="py-24 bg-white border-y border-gray-100"
            id="features"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-black mb-6 tracking-tight">
                        Everything you need to master outreach
                    </h2>
                    <p className="text-gray-600">
                        Our suite of AI tools ensures your message isn't just sent, but read
                        and responded to.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature) => {
                        const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.HelpCircle;
                        return (
                            <div
                                key={feature.title}
                                className="group p-8 rounded-2xl border border-gray-100 bg-background-light hover:border-primary/30 transition-all"
                            >
                                <div className="text-primary mb-6 block group-hover:scale-110 transition-transform">
                                    <IconComponent size={40} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-lg mb-3 font-display">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
