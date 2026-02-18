"use client";

import TopBar from "@/components/layouts/TopBar";
import UploadZone from "@/components/dashboard/leads/upload/UploadZone";
import ColumnRequirements from "@/components/dashboard/leads/upload/ColumnRequirements";
import PreviewTable from "@/components/dashboard/leads/upload/PreviewTable";
import { Download, ArrowRight, ShieldCheck, Database, Eraser } from "lucide-react";
import Link from "next/link";
import DashboardFooter from "@/components/layouts/DashboardFooter";

export default function LeadsUploadPage() {
  return (
    <>
      <TopBar />

      <main className="p-4 md:p-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Upload Your Leads</h2>
              <p className="text-sm text-slate-500 mt-1">Import your prospects to start your cold outreach campaign.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg text-primary text-sm font-bold hover:bg-primary/10 transition-colors">
              <Download size={18} />
              Download Template
            </button>
          </div>

          <div className="bg-white rounded-xl border border-primary/10 shadow-sm p-8 space-y-8">
            <UploadZone />
            <ColumnRequirements />
          </div>

          <PreviewTable />

          {/* Action Bar */}
          <div className="flex items-center justify-end gap-6 pt-6 border-t border-slate-100">
            <Link href="/dashboard/leads" className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
              Cancel
            </Link>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 opacity-50 cursor-not-allowed flex items-center gap-2">
              Confirm & Process
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust Footer */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale pointer-events-none">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">Secure Transfer</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">Data Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Eraser size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">Auto-Cleaning</span>
            </div>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </>
  );
}
