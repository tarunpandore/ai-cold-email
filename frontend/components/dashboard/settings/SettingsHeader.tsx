"use client";

import { useMemo } from "react";

interface SettingsHeaderProps {
    title: string;
    description: string;
    tabs: { id: string; label: string }[];
    activeTab: string;
    onTabChange: (id: string) => void;
}

const cn_local = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

export default function SettingsHeader({
    title,
    description,
    tabs,
    activeTab,
    onTabChange
}: SettingsHeaderProps) {
    return (
        <header className="bg-white border-b border-primary/10 sticky top-0 z-10 pt-8">
            <div className="px-8 mb-6">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{title}</h2>
                <p className="text-slate-500 text-sm max-w-2xl">{description}</p>
            </div>

            <nav className="flex px-8 gap-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={cn_local(
                            "pb-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap",
                            activeTab === tab.id
                                ? "text-primary border-primary"
                                : "text-slate-400 hover:text-primary border-transparent"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}
