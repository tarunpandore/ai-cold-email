"use client";

import Link from "next/link";
import { Home, LogIn } from "lucide-react";

export default function NotFoundActions() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
                href="/"
                className="w-full sm:w-auto min-w-[200px] bg-primary text-white px-8 py-4 rounded-lg text-base font-bold tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
                <Home className="w-5 h-5" />
                Return to Home
            </Link>

            <Link
                href="/login"
                className="w-full sm:w-auto min-w-[200px] bg-transparent border-2 border-primary/20 text-primary px-8 py-4 rounded-lg text-base font-bold tracking-wide hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
            >
                <LogIn className="w-5 h-5" />
                Go to Login
            </Link>
        </div>
    );
}
