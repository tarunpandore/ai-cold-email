"use client";

import { Mail } from "lucide-react";

export default function DecorativeVisual() {
    return (
        <div className="relative flex justify-center mb-8">
            {/* Glow Effect */}
            <div className="absolute -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>

            {/* Circular Container */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full flex items-center justify-center border border-primary/10 shadow-inner">
                <Mail className="w-16 h-16 md:w-20 md:h-20 text-primary opacity-60 stroke-[1.5]" />
            </div>
        </div>
    );
}
