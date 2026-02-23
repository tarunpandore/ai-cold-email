"use client";

import { Leaf, BadgeCheck } from "lucide-react";

interface WelcomeHeroProps {
    userName: string;
}

export default function WelcomeHero({ userName }: WelcomeHeroProps) {
    return (
        <div className="flex flex-col items-center text-center mb-16">
            <div className="size-48 mb-8 bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
                <Leaf className="size-24 text-primary opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <div className="absolute -bottom-2 -right-2">
                    <BadgeCheck className="size-10 text-primary/30" />
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Welcome to ColdReply, {userName}
            </h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Your AI-powered outreach engine is ready. Let's get your first campaign off the ground and start meaningful conversations.
            </p>
        </div>
    );
}
