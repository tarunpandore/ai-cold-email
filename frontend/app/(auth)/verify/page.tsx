"use client";

import Sidebar from "@/components/layouts/Sidebar";
import VerifyEmailCard from "@/components/auth/VerifyEmailCard";
import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";

export default function VerifyPage() {
    const { setSidebarOpen } = useAppStore();

    // Ensure sidebar is closed by default on mobile for this specific page
    useEffect(() => {
        setSidebarOpen(false);
    }, [setSidebarOpen]);

    return (
        <div className="flex h-screen overflow-hidden bg-background-light text-slate-900 font-sans relative">
            <Sidebar />
            <main className="flex-1 flex flex-col justify-center items-center h-full overflow-y-auto bg-background-light scroll-smooth overflow-x-hidden p-4 md:p-8">
                <VerifyEmailCard />
            </main>
        </div>
    );
}
