"use client";

export default function ConversionFunnel() {
    const steps = [
        { label: "Emails Sent", value: 5000, percentage: 100, color: "bg-primary/20", border: "border-primary/30" },
        { label: "Emails Opened", value: 3210, percentage: 64.2, color: "bg-primary/40", border: "border-primary/50" },
        { label: "Links Clicked", value: 1105, percentage: 22.1, color: "bg-primary/60", border: "border-primary/70" },
        { label: "Replies Received", value: 920, percentage: 18.4, color: "bg-primary", border: "border-primary" },
    ];

    return (
        <div className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Engagement Funnel</h3>
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-end text-sm">
                            <span className="font-bold text-slate-700">{step.label}</span>
                            <div className="text-right">
                                <span className="block font-black text-slate-900">{step.value.toLocaleString()}</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{step.percentage}% conversion</span>
                            </div>
                        </div>
                        <div className="w-full bg-slate-50 rounded-full h-4 overflow-hidden border border-slate-100">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out border-r-2 ${step.color} ${step.border}`}
                                style={{ width: `${step.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-primary/5">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Success Rate</p>
                        <p className="text-xl font-black text-slate-900">18.4% <span className="text-sm font-bold text-green-600">+2.4% vs last month</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
