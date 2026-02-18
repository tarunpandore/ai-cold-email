"use client";

import { Clock, Save, X } from "lucide-react";

interface SettingsFooterProps {
    onSave: () => void;
    onDiscard: () => void;
    lastSaved?: string;
    isDirty?: boolean;
}

export default function SettingsFooter({
    onSave,
    onDiscard,
    lastSaved = "today at 2:45 PM",
    isDirty = true
}: SettingsFooterProps) {
    if (!isDirty) return null;

    return (
        <div className="fixed bottom-0 right-0 left-0 lg:left-64 bg-white/80 backdrop-blur-md border-t border-slate-200 py-4 px-8 flex items-center justify-between z-20 animate-in slide-in-from-bottom-full duration-300">
            <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock size={14} />
                <span>Last saved {lastSaved}</span>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={onDiscard}
                    className="px-5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                >
                    <X size={16} />
                    Discard
                </button>
                <button
                    onClick={onSave}
                    className="px-8 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
                >
                    <Save size={16} />
                    Save Changes
                </button>
            </div>
        </div>
    );
}
