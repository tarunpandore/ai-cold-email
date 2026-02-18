"use client";

import { UploadCloud } from "lucide-react";

export default function UploadZone() {
    return (
        <div className="border-2 border-dashed border-primary/20 rounded-xl p-12 flex flex-col items-center justify-center bg-primary/[0.02] hover:border-primary/40 transition-all group cursor-pointer">
            <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UploadCloud size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">Drag and drop your file here</h3>
            <p className="text-slate-500 text-sm mb-6 text-center">Supports CSV or Excel files (max 10MB)</p>
            <button className="bg-primary text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all">
                Select File
            </button>
        </div>
    );
}
