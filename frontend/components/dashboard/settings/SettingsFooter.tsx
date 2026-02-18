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
    isDirty = false,
    isSaving = false
}: SettingsFooterProps & { isSaving?: boolean }) {
    // We always show the footer if we want it to be part of the layout, 
    // or we can keep the isDirty check if we only want it to pop up.
    // The user said "set the Discard button visible, and Enable Save Changes" when there's a change.

    return (
        <div className={`fixed bottom-0 right-0 left-0 lg:left-64 bg-white/80 backdrop-blur-md border-t border-slate-200 py-4 px-8 flex items-center justify-between z-20 transition-all duration-300 ${isDirty ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
            <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock size={14} />
                <span>Last saved {lastSaved}</span>
            </div>

            <div className="flex gap-3">
                {isDirty && (
                    <button
                        onClick={onDiscard}
                        className="px-5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <X size={16} />
                        Discard
                    </button>
                )}
                <button
                    onClick={onSave}
                    disabled={!isDirty || isSaving}
                    className={`px-8 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-lg transition-all flex items-center gap-2 ${(!isDirty || isSaving) ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`}
                >
                    {isSaving ? (
                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <Save size={16} />
                    )}
                    {isSaving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
