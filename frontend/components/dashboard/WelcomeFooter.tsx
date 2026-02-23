"use client";

import Link from "next/link";

export default function WelcomeFooter() {
    return (
        <div className="mt-20 border-t border-primary/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 italic">
            <p>“The best time to plant a tree was 20 years ago. The second best time is now.”</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">
                    Read Documentation
                </Link>
                <span className="text-primary/20">•</span>
                <Link href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">
                    Watch Quick-start Guide
                </Link>
            </div>
        </div>
    );
}
