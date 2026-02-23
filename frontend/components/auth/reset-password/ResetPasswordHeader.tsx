"use client";

import { Lock } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/navigation";

export default function ResetPasswordHeader() {
    return (
        <div className="mb-12 flex flex-col items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Lock className="w-7 h-7" />
                </div>
                <h1 className="text-2xl font-extrabold tracking-tight text-primary">
                    {SITE_CONFIG.name}
                </h1>
            </Link>
        </div>
    );
}
