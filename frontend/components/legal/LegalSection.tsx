interface LegalSectionProps {
    id: string;
    title: string;
    number?: number;
    children: React.ReactNode;
}

export default function LegalSection({
    id,
    title,
    number,
    children,
}: LegalSectionProps) {
    return (
        <section id={id} className="scroll-mt-32 space-y-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3 font-display border-b border-primary/10 pb-4">
                {number ? `${number}. ${title}` : title}
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                {children}
            </div>
        </section>
    );
}
