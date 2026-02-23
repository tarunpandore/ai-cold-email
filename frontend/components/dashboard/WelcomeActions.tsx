"use client";

import { Upload, ArrowRight, Settings, Brain } from "lucide-react";
import Link from "next/link";

export default function WelcomeActions() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Upload size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Upload your first leads</h3>
                <p className="text-slate-600 mb-8 flex-1">
                    Import your potential prospects via CSV file or sync directly with your CRM or LinkedIn accounts.
                </p>
                <Link
                    href="/dashboard/leads/upload"
                    className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                    Start Upload
                    <ArrowRight size={18} />
                </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Configure AI settings</h3>
                <p className="text-slate-600 mb-8 flex-1">
                    Define your brand voice, target audience parameters, and response styles to ensure personalization.
                </p>
                <Link
                    href="/dashboard/settings"
                    className="w-full py-3 bg-white border-2 border-primary text-primary rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                >
                    Go to Settings
                    <Settings size={18} />
                </Link>
            </div>
        </div>
    );
}
