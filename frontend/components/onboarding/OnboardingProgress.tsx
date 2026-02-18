"use client";

import { useOnboardingStore } from "@/store/useOnboardingStore";

interface OnboardingProgressProps {
    title: string;
    subtitle: string;
    description?: string;
}

export const OnboardingProgress = ({
    title,
    subtitle,
    description,
}: OnboardingProgressProps) => {
    const step = useOnboardingStore((state) => state.step);
    const progress = (step / 4) * 100;

    return (
        <div className="flex flex-col gap-6 mb-10">
            {/* Progress Bar Section (from Step 4) */}
            <div className="flex flex-col gap-3">
                <div className="flex gap-6 justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">
                            Onboarding Progress
                        </span>
                        <p className="text-slate-900 text-base font-semibold leading-normal">
                            Step {step} of 4
                        </p>
                    </div>
                    <p className="text-primary text-sm font-bold leading-normal">{progress}%</p>
                </div>
                <div className="rounded-full bg-primary/10 h-2 w-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-primary transition-all duration-700 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-primary/70 text-sm font-normal leading-normal italic">
                    {subtitle}
                </p>
            </div>

            {/* Typography from Step 1 */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
                    {title}
                </h1>
                {description && (
                    <p className="text-slate-500 text-base max-w-2xl mx-auto md:mx-0">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};
