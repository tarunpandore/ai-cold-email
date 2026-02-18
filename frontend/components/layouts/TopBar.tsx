"use client";

import { useState } from "react";
import { BellDot, Menu, ChevronRight, Upload } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NotificationPanel from "../ui/NotificationPanel";
import { MOCK_NOTIFICATIONS } from "@/lib/mock";

interface TopBarProps {
    title?: string;
}

export default function TopBar({ title }: TopBarProps) {
    const { toggleSidebar } = useAppStore();
    const pathname = usePathname();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.isRead).length;

    // Breadcrumb logic
    const getBreadcrumbs = () => {
        const paths = pathname.split('/').filter(Boolean);
        return paths.map((path, index) => {
            let label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

            // Custom label mappings
            if (path === 'dashboard') label = 'Dashboard';
            if (path === 'generate') label = 'Generate Emails';
            if (path === 'settings') label = 'Settings';
            if (path === 'leads') label = 'Leads';
            if (path === 'analytics') label = 'Analytics';
            if (path === 'results') label = 'Results';
            if (path === 'billing') label = 'Billing';

            return {
                label: label,
                isLast: index === paths.length - 1
            };
        });
    };

    const breadcrumbs = getBreadcrumbs();
    const isLeadsPage = pathname === "/dashboard/leads";

    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-primary/5 px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>

                <div className="flex items-center gap-1.5 overflow-hidden">
                    {breadcrumbs.map((crumb, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                            <span className={`text-sm md:text-base whitespace-nowrap ${crumb.isLast ? "font-bold text-slate-800" : "font-medium text-primary/60"}`}>
                                {crumb.label}
                            </span>
                            {!crumb.isLast && (
                                <ChevronRight size={14} className="text-primary/40 shrink-0" />
                            )}
                        </div>
                    ))}
                    {breadcrumbs.length === 0 && title && (
                        <h2 className="text-lg md:text-xl font-bold text-slate-800 truncate">{title}</h2>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
                {isLeadsPage && (
                    <Link
                        href="/dashboard/leads/upload"
                        className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/10 hover:opacity-90 transition-all"
                    >
                        <Upload size={16} />
                        Upload Leads
                    </Link>
                )}

                <div className="flex items-center gap-2 md:gap-3 relative">
                    <button
                        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                        className="size-9 md:size-10 rounded-full hover:bg-primary/5 flex items-center justify-center text-slate-600 transition-colors relative"
                    >
                        <BellDot size={20} />
                        {unreadCount > 0 && (
                            <span className="absolute top-1.5 right-1.5 size-4 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    <NotificationPanel
                        isOpen={isNotificationOpen}
                        onClose={() => setIsNotificationOpen(false)}
                    />
                </div>
            </div>
        </header>
    );
}
