"use client";

import Link from "next/link";

const DESTINATIONS = [
    { label: "Campaigns", href: "/dashboard/campaigns" },
    { label: "Prospecting", href: "/dashboard/prospects" },
    { label: "Analytics", href: "/dashboard/analytics" },
];

export default function PopularDestinations() {
    return (
        <div className="pt-8 flex flex-col items-center gap-4">
            <p className="text-primary/40 text-sm font-semibold uppercase tracking-[0.2em]">
                Popular Destinations
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {DESTINATIONS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-primary/60 text-sm font-medium hover:text-primary underline decoration-primary/20 underline-offset-4 transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
