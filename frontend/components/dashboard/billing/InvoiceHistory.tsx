"use client";

import { Download, Filter } from "lucide-react";

const INVOICES = [
    { date: "Sep 12, 2023", amount: "$79.00", status: "Paid" },
    { date: "Aug 12, 2023", amount: "$79.00", status: "Paid" },
    { date: "Jul 12, 2023", amount: "$79.00", status: "Paid" },
    { date: "Jun 12, 2023", amount: "$79.00", status: "Paid" },
];

export default function InvoiceHistory() {
    return (
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Invoice History</h3>
                <button className="text-xs text-slate-500 font-bold flex items-center gap-1.5 hover:text-primary transition-all">
                    <Filter size={16} className="text-primary/40" />
                    Filter History
                </button>
            </div>

            <div className="bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary/5 border-b border-primary/10">
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">Date</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">Amount</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60">Status</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary/60 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            {INVOICES.map((invoice, idx) => (
                                <tr key={idx} className="hover:bg-primary/[0.02] transition-colors group">
                                    <td className="px-6 py-4 text-sm font-bold text-slate-700">{invoice.date}</td>
                                    <td className="px-6 py-4 text-sm font-black text-slate-800">{invoice.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight border border-emerald-100 shadow-sm">
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all active:scale-95 shadow-sm group-hover:scale-110">
                                            <Download size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-primary/5 border-t border-primary/10 text-center">
                    <button className="text-xs font-black text-primary hover:underline underline-offset-4 decoration-2 transition-all">
                        View All Billing History
                    </button>
                </div>
            </div>

            <footer className="pt-10 pb-12 border-t border-primary/5 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] text-slate-400 font-bold leading-relaxed max-w-md text-center md:text-left">
                        You are currently on the <span className="text-primary">Growth Plan</span>. Need to pause your account or take a break? <button className="text-primary hover:underline underline-offset-4">Cancel subscription</button>
                    </p>
                    <div className="flex gap-6">
                        <button className="text-[11px] font-black text-slate-400 hover:text-primary transition-colors tracking-widest uppercase">Terms of Service</button>
                        <button className="text-[11px] font-black text-slate-400 hover:text-primary transition-colors tracking-widest uppercase">Privacy Policy</button>
                    </div>
                </div>
            </footer>
        </section>
    );
}
