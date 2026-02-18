"use client";

import Link from "next/link";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { LineChart } from "lucide-react";

export const OnboardingTopbar = () => {
    const step = useOnboardingStore((state) => state.step);

    return (
        <nav className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-3xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <LineChart className="text-white size-4" />
                        </div>
                        <span className="font-bold text-primary tracking-tight">ColdReply</span>
                    </Link>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        Step {step} of 4
                    </span>
                </div>
            </div>
        </nav>
    );
};
