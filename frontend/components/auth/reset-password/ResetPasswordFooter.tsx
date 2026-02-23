"use client";

import { ShieldCheck, Server } from "lucide-react";
import { SITE_CONFIG } from "@/constants/navigation";

export default function ResetPasswordFooter() {
    return (
        <footer className="mt-12 flex flex-col items-center gap-4 opacity-60">
            <div className="flex items-center gap-6 text-xs font-semibold text-primary/70">
                <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    256-bit Encryption
                </span>
                <span className="flex items-center gap-1.5">
                    <Server className="w-4 h-4" />
                    Secure Connection
                </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">
                © {new Date().getFullYear()} {SITE_CONFIG.name} SaaS Heritage
            </p>
        </footer>
    );
}
