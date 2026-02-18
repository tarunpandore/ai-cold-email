"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Mail,
    LayoutDashboard,
    Users,
    Sparkles,
    TrendingUp,
    BarChart3,
    CreditCard,
    Settings,
    LogOut,
    X
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

const NAV_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/dashboard/leads", icon: Users },
    { name: "Generate", href: "/dashboard/generate", icon: Sparkles },
    { name: "Result", href: "/dashboard/results", icon: Mail },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
];

const SECONDARY_NAV = [
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { user, isSidebarOpen, setSidebarOpen, logout } = useAppStore();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    const creditPercentage = user ? Math.round((user.creditsRemaining / user.totalCredits) * 100) : 0;

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setSidebarOpen(false)}
            />

            <aside className={`
                fixed inset-y-0 left-0 w-64 bg-white border-r border-primary/10 flex flex-col z-50 transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h1 className="text-lg font-extrabold tracking-tight text-primary">ColdReply</h1>
                            <p className="text-xs font-medium opacity-60 text-slate-500">AI Outreach Studio</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 text-slate-400 hover:text-primary transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    if (window.innerWidth < 1024) setSidebarOpen(false);
                                }}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm font-semibold transition-all ${isActive
                                    ? "bg-primary/10 text-primary border-r-2 border-primary"
                                    : "text-slate-600 hover:bg-primary/5 hover:text-primary"
                                    }`}
                            >
                                <Icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="my-6 border-t border-primary/5"></div>

                    {SECONDARY_NAV.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    if (window.innerWidth < 1024) setSidebarOpen(false);
                                }}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium transition-all ${isActive
                                    ? "bg-primary/10 text-primary border-r-2 border-primary font-semibold"
                                    : "text-slate-600 hover:bg-primary/5 hover:text-primary"
                                    }`}
                            >
                                <Icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto px-4 pb-6 space-y-4">
                    {user && (
                        <div className="bg-primary/5 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">Plan {user.plan}</span>
                                <span className="text-xs font-medium text-primary">{creditPercentage}%</span>
                            </div>
                            <div className="w-full bg-primary/20 rounded-full h-1.5 mb-3">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${creditPercentage}%` }}></div>
                            </div>
                            <p className="text-[10px] text-primary/70 leading-tight">
                                {user.creditsRemaining.toLocaleString()} / {user.totalCredits.toLocaleString()} credits remaining. Reset in 12 days.
                            </p>
                        </div>
                    )}

                    <div className="pt-4 border-t border-primary/10">
                        {user ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="size-9 rounded-full bg-primary/20 bg-cover bg-center shrink-0 border border-primary/10"
                                        style={{ backgroundImage: `url(${user.avatar})` }}>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <p className="text-sm font-bold text-slate-800 truncate leading-none mb-1">{user.name}</p>
                                        <p className="text-[10px] font-semibold text-primary/60 truncate uppercase tracking-wider">{user.plan} Plan</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                    title="Sign out"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
