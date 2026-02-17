"use client";

import { Bell, Menu } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

interface TopBarProps {
    title: string;
}

export default function TopBar({ title }: TopBarProps) {
    const { user, toggleSidebar } = useAppStore();

    const creditPercentage = user ? Math.round((user.creditsRemaining / user.totalCredits) * 100) : 0;

    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-primary/5 px-4 md:px-8 py-2 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-lg md:text-xl font-bold text-slate-800 truncate">{title}</h2>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
                {user && (
                    <div className="hidden sm:flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-lg border border-primary/10">
                        <span className="text-xs font-bold text-primary uppercase whitespace-nowrap">Credits: {user.creditsRemaining.toLocaleString()} Left</span>
                        <div className="w-24 hidden lg:block bg-primary/20 rounded-full h-1.5">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: `${creditPercentage}%` }}></div>
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-2 md:gap-3">
                    <button className="size-9 md:size-10 rounded-full hover:bg-primary/5 flex items-center justify-center text-slate-600 transition-colors">
                        <Bell size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}
