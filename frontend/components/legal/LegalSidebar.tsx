"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    LucideIcon,
    Info,
    Database,
    LineChart,
    Share2,
    Shield,
    Lock,
    Mail,
    CheckSquare,
    UserCheck,
    Gavel,
    AlertTriangle,
    XCircle
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    info: Info,
    database: Database,
    "line-chart": LineChart,
    share2: Share2,
    shield: Shield,
    lock: Lock,
    mail: Mail,
    "check-square": CheckSquare,
    "user-check": UserCheck,
    gavel: Gavel,
    "alert-triangle": AlertTriangle,
    "x-circle": XCircle,
};

export interface SidebarLink {
    id: string;
    label: string;
    iconName: string;
}

interface LegalSidebarProps {
    links: SidebarLink[];
}

export default function LegalSidebar({ links }: LegalSidebarProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -80% 0px" }
        );

        links.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [links]);

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 print:hidden">
            <div className="sticky top-28 space-y-8">
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-primary/50">
                    Table of Contents
                </h3>
                <nav className="space-y-1">
                    {links.map((link) => {
                        const Icon = ICON_MAP[link.iconName] || Info;
                        const isActive = activeId === link.id;
                        return (
                            <Link
                                key={link.id}
                                href={`#${link.id}`}
                                className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all ${isActive
                                    ? "bg-primary/10 font-bold text-primary"
                                    : "font-medium text-slate-600 hover:bg-primary/5 hover:text-primary"
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.getElementById(link.id);
                                    if (target) {
                                        target.scrollIntoView({ behavior: "smooth" });
                                        // Optional: Update URL hash without navigating
                                        window.history.pushState(null, "", `#${link.id}`);
                                    }
                                }}
                            >
                                <Icon className={`h-5 w-5 ${isActive ? "" : "text-slate-400 group-hover:text-primary"}`} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-12 rounded-xl bg-primary p-6 text-white shadow-xl">
                    <p className="text-sm font-bold opacity-80">Need legal help?</p>
                    <p className="mt-2 text-xs leading-relaxed opacity-60">
                        Our Data Protection Officer is available for any questions regarding your privacy or our terms.
                    </p>
                    <button className="mt-4 w-full rounded-lg bg-white py-2 text-xs font-black text-primary hover:bg-slate-100 transition-colors">
                        Contact DPO
                    </button>
                </div>
            </div>
        </aside>
    );
}
