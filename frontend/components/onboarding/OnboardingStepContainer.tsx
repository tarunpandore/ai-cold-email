"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface OnboardingStepContainerProps {
    children: ReactNode;
    onNext: () => void;
    nextLabel?: string;
    showBack?: boolean;
    backHref?: string;
    isLastStep?: boolean;
    imageAlt?: string;
    imageSrc?: string;
    quote?: string;
}

export const OnboardingStepContainer = ({
    children,
    onNext,
    nextLabel = "Continue",
    showBack = false,
    backHref,
    isLastStep = false,
    imageAlt = "Professional workspace",
    imageSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuAgy_XXMnCf_cNBYSmR2BTsYvV0pwm-znH2IN17I-jRP8J1sPxP4MCJifwN5LRp4_NQR0mcR9BlNhIw8PJwaKcYTBx56yg8sC4lra2PnHs9d0L9x3qWnnd82iJ2L2knAEQHc7BfoOfT3UaWmE0FPTU0vBx0USgaeTTUOk9ND4CEWLjFS2ldBk43_h1FzAAfBRg-5ZlXsuIm55nz-tWfzDG7un--ms73eVg89jBrQPFgDZL4PNcDHdgQO8T6bWpxs93GO2yu1OR-7bk",
    quote = "The right setup is the foundation of every successful sales outreach campaign.",
}: OnboardingStepContainerProps) => {
    const router = useRouter();

    const handleBack = () => {
        if (backHref) {
            router.push(backHref);
        } else {
            router.back();
        }
    };

    return (
        <main className="max-w-3xl mx-auto px-6 py-12">
            {/* Content Area */}
            <div className="space-y-10 min-h-[400px]">
                {children}
            </div>

            {/* Footer Actions (Mixed from Step 1 and 4) */}
            <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    {showBack && (
                        <button
                            onClick={handleBack}
                            className="px-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors flex items-center gap-2"
                        >
                            <ArrowLeft className="size-4" />
                            Back
                        </button>
                    )}
                    <p className="text-xs text-slate-500 text-center sm:text-left max-w-[200px]">
                        Your information is secure and will be used to customize your outreach.
                    </p>
                </div>

                <button
                    onClick={onNext}
                    className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                >
                    {nextLabel}
                    {isLastStep ? (
                        <CheckCircle className="size-5" />
                    ) : (
                        <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                    )}
                </button>
            </div>

            {/* Bottom Decorative Section (from Step 1) */}
            <div className="mt-20 flex flex-col items-center">
                <div className="relative w-full h-48 rounded-xl overflow-hidden border border-primary/10">
                    <Image
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        src={imageSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6 text-white text-center md:text-left">
                        <p className="text-sm font-medium italic">
                            "{quote}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Branding Footer */}
            <footer className="mt-12 text-center">
                <p className="text-xs text-slate-400">
                    © 2024 Heritage Outreach Systems. All rights reserved.
                </p>
            </footer>
        </main>
    );
};
