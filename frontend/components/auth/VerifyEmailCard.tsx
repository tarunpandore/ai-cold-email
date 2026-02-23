"use client";

import { ShieldCheck, Mail, Send, Edit2, ShieldAlert } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

export default function VerifyEmailCard() {
    const user = useUserStore((state) => state.user);
    const email = user?.email || "your email address";

    return (
        <div className="relative flex items-center justify-center p-8 overflow-y-auto w-full max-w-lg mx-auto z-10">
            {/* Verification Card */}
            <div className="w-full bg-white border border-primary/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 text-center relative z-20">

                {/* Icon/Shield Section */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center">
                            <ShieldCheck className="text-primary size-10" strokeWidth={2} />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-white p-1 rounded-full">
                            <Mail className="text-primary size-5" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Verify your email address</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    We've sent a verification link to <span className="font-semibold text-primary">{email}</span>.
                    Please check your inbox to continue to your dashboard and unlock all features.
                </p>

                {/* Actions */}
                <div className="space-y-4">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                        <span>Resend Verification Email</span>
                        <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="pt-4 flex flex-col gap-3">
                        <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors flex items-center justify-center gap-1">
                            <Edit2 className="size-3.5" />
                            Change email address
                        </button>
                        <p className="text-xs text-slate-400 italic">
                            Didn't receive an email? Check your spam folder or try resending.
                        </p>
                    </div>
                </div>

                {/* Abstract Decorative Pattern */}
                <div className="mt-12 opacity-10">
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                </div>
            </div>

            {/* Background Decoration (Subtle) */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -z-10">
                <ShieldAlert className="size-96 text-primary select-none -translate-y-12 translate-x-12" strokeWidth={0.5} />
            </div>
        </div>
    );
}
