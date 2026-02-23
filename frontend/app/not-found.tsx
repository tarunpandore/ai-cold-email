import { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import DecorativeVisual from "@/components/not-found/DecorativeVisual";
import NotFoundHeading from "@/components/not-found/NotFoundHeading";
import NotFoundActions from "@/components/not-found/NotFoundActions";
import DashboardFooter from "@/components/layouts/DashboardFooter";

export const metadata: Metadata = {
    title: "404 - Lost in the Digital Silence | ColdReply",
    description: "The page you are looking for has vanished. Let’s get you back to your outreach.",
};

export default function NotFound() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col font-manrope">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-12">
                <div className="w-full max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <DecorativeVisual />
                    <NotFoundHeading />
                    <NotFoundActions />
                </div>
            </main>

            {/* Footer */}
            <DashboardFooter />
        </div>
    );
}
