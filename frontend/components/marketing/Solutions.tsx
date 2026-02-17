export default function Solutions() {
    return (
        <section className="py-24 lg:py-32" id="solutions">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="p-8 lg:p-12 rounded-3xl bg-red-50 border border-red-100">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined">block</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-display">
                            The Problem: Low Reply Rates
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Generic templates and bulk automation have flooded inboxes.
                            Prospect research takes hours, but without it, your emails land
                            straight in the spam folder. Your sales team is burning leads with
                            outdated methods.
                        </p>
                    </div>
                    <div className="p-8 lg:p-12 rounded-3xl bg-primary/5 border border-primary/10">
                        <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined">auto_awesome</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-display">
                            The Solution: AI Personalization
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            ColdReply's engine researches every prospect—from their latest
                            LinkedIn posts to company funding news—to create hyper-relevant
                            openers. Scale your outreach while keeping that 1:1 human touch
                            that drives conversions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
