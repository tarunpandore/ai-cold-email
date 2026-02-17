"use client";

import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/navigation";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary text-white p-1 rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="20"
                            fill="currentColor"
                        >
                            <path d="M120-120v-520h160v520H120Zm280 0v-720h160v720H400Zm280 0v-360h160v360H680Z" />
                        </svg>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-primary">
                        {SITE_CONFIG.name}
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-all">
                        Login
                    </button>
                    <button className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}
