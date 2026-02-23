import { Calendar, Download } from "lucide-react";
import Link from "next/link";

interface LegalHeaderProps {
    title: string;
    description: string;
    lastUpdated: string;
    pdfLink?: string;
    breadcrumbLabel: string;
}

export default function LegalHeader({
    title,
    description,
    lastUpdated,
    pdfLink,
    breadcrumbLabel,
}: LegalHeaderProps) {
    return (
        <div className="mb-12 border-b border-primary/10 pb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <nav className="mb-4 flex gap-2 text-sm font-medium text-primary/60">
                        <Link href="/" className="hover:text-primary">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-primary/60 cursor-default">Legal</span>
                        <span>/</span>
                        <span className="text-primary font-bold">{breadcrumbLabel}</span>
                    </nav>

                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-display">
                        {title}
                    </h1>

                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 print:hidden">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                        Last Updated: {lastUpdated}
                    </span>

                    {pdfLink && (
                        <button className="flex items-center gap-2 rounded-lg border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm hover:bg-primary/5 transition-all">
                            <Download className="h-4 w-4" />
                            Download PDF
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
