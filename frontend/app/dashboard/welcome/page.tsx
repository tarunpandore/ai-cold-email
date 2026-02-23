"use client";

import { useSettingsStore } from "@/store/useSettingsStore";
import TopBar from "@/components/layouts/TopBar";
import WelcomeHero from "@/components/dashboard/WelcomeHero";
import WelcomeActions from "@/components/dashboard/WelcomeActions";
import WelcomeFooter from "@/components/dashboard/WelcomeFooter";

export default function WelcomePage() {
    const fullName = useSettingsStore((state) => state.fullName);
    const userName = fullName ? fullName.split(" ")[0] : "User";

    return (
        <>
            <TopBar title="Welcome" />
            <div className="p-12 max-w-5xl mx-auto w-full">
                <WelcomeHero userName={userName} />
                <WelcomeActions />
                <WelcomeFooter />
            </div>
        </>
    );
}
