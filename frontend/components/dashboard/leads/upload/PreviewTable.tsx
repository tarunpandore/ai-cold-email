"use client";

export default function PreviewTable() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-800">Preview Data</h3>
                <span className="text-[10px] font-bold text-primary/40 italic uppercase tracking-wider">Waiting for file upload...</span>
            </div>

            <div className="bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-primary/5">
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Website</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">LinkedIn</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            {/* Skeletons */}
                            {[1, 2].map((i) => (
                                <tr key={i} className="animate-pulse">
                                    <td className="px-6 py-5">
                                        <div className="h-4 w-32 bg-slate-100 rounded" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="h-4 w-24 bg-slate-100 rounded" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="h-4 w-40 bg-slate-100 rounded" />
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="h-4 w-48 bg-slate-100 rounded" />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center">
                                    <p className="text-xs text-slate-400 font-medium italic">
                                        No data to display. Please upload a file to preview your leads.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
