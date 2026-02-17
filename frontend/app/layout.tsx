import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ColdReply | AI Outreach Studio",
    description: "AI-powered cold email personalization and outreach.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${geistMono.variable} antialiased`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
