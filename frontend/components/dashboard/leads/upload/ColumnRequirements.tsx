"use client";

import { User, Building, Globe, Link as LinkIcon } from "lucide-react";

export default function ColumnRequirements() {
    const columns = [
        { label: "Name", desc: "Full name or First Name", icon: User },
        { label: "Company", desc: "Current organization", icon: Building },
        { label: "Website", desc: "Company URL", icon: Globe },
        { label: "LinkedIn URL", desc: "Profile link required", icon: LinkIcon },
    ];

    return (
        <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/40 px-1">Required Columns</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {columns.map((col, idx) => {
                    const Icon = col.icon;
                    return (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-primary/10 shadow-sm">
                            <div className="p-2 bg-primary/5 text-primary rounded-lg shrink-0">
                                <Icon size={18} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">{col.label}</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight">{col.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
