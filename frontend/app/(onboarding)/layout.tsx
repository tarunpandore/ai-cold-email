import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { OnboardingTopbar } from "@/components/onboarding/OnboardingTopbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Onboarding - Heritage Outreach",
  description: "Set up your profile and business context",
};

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-screen bg-background-light font-sans ${manrope.variable}`}>
      <OnboardingTopbar />
      {children}
    </div>
  );
}
