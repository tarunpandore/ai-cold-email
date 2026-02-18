import { LucideIcon } from "lucide-react";

interface SettingsCardProps {
    title: string;
    description?: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    headerAction?: React.ReactNode;
    className?: string;
    danger?: boolean;
}

const cn_local = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

export default function SettingsCard({
    title,
    description,
    icon: Icon,
    children,
    headerAction,
    className,
    danger = false
}: SettingsCardProps) {
    return (
        <section className={cn_local(
            "rounded-xl border shadow-sm overflow-hidden bg-white",
            danger ? "border-rose-200 bg-rose-50/30" : "border-slate-200",
            className
        )}>
            <div className={cn_local(
                "p-6 border-b flex items-center justify-between",
                danger ? "border-rose-100 bg-rose-50/50" : "border-slate-100 bg-slate-50/30"
            )}>
                <div className="flex items-center gap-3">
                    {Icon && <Icon size={20} className={danger ? "text-rose-500" : "text-primary"} />}
                    <div>
                        <h3 className={cn_local(
                            "text-lg font-bold",
                            danger ? "text-rose-900" : "text-slate-900"
                        )}>{title}</h3>
                        {description && <p className="text-sm text-slate-500">{description}</p>}
                    </div>
                </div>
                {headerAction}
            </div>

            <div className="p-6">
                {children}
            </div>
        </section>
    );
}
