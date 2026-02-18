"use client";

import { CreditCard, HelpCircle } from "lucide-react";

export default function BillingDetails() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {/* Payment Method Section */}
            <section className="space-y-4">
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Payment Method</h3>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="size-12 bg-slate-900 rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-105 transition-transform">
                            <CreditCard className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800 tracking-tight">Visa ending in 4242</p>
                            <p className="text-xs text-slate-500 font-medium">Expires 12/26 • Secondary card</p>
                        </div>
                    </div>
                    <button className="text-primary text-xs font-bold px-4 py-2 border border-primary/20 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 shadow-sm">
                        Edit
                    </button>
                </div>
            </section>

            {/* Help Section */}
            <section className="space-y-4">
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Subscription Help</h3>
                <div className="bg-primary/[0.03] border border-primary/10 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                        <HelpCircle className="text-primary shrink-0" size={24} />
                        <div>
                            <p className="text-sm font-bold text-slate-800">Need a custom plan?</p>
                            <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                                If your team needs more than 50,000 monthly credits, reach out for a custom enterprise quote.
                            </p>
                            <button className="mt-4 text-primary text-xs font-black underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
                                Talk to Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
