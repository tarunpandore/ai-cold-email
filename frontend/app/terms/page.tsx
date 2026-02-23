import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LegalHeader from "@/components/legal/LegalHeader";
import LegalSidebar from "@/components/legal/LegalSidebar";
import LegalSection from "@/components/legal/LegalSection";
import { Info, CheckSquare, UserCheck, Gavel, AlertTriangle, XCircle } from "lucide-react";

export const metadata = {
    title: "Terms of Service | ColdReply Heritage",
    description: "Terms of Service for the ColdReply Heritage platform.",
};

const SIDEBAR_LINKS = [
    { id: "introduction", label: "Introduction", iconName: "info" },
    { id: "acceptance", label: "Acceptance of Terms", iconName: "check-square" },
    { id: "conduct", label: "User Conduct", iconName: "user-check" },
    { id: "ip", label: "Intellectual Property", iconName: "gavel" },
    { id: "liability", label: "Limitation of Liability", iconName: "alert-triangle" },
    { id: "termination", label: "Termination", iconName: "x-circle" },
];

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background-light font-sans text-slate-900 selection:bg-primary/30">
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                <LegalHeader
                    breadcrumbLabel="Terms of Service"
                    title="Terms of Service"
                    description="These Terms of Service govern your access to and use of the ColdReply Heritage platform, websites, and services. Please read these Terms carefully before using the Services."
                    lastUpdated="October 24, 2023 • Version 2.4.0"
                    pdfLink="#"
                />

                <div className="flex flex-col lg:flex-row gap-16">
                    <LegalSidebar links={SIDEBAR_LINKS} />

                    <article className="flex-1 max-w-3xl space-y-12 pb-24">
                        <LegalSection id="introduction" number={1} title="Introduction">
                            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 italic text-slate-600 leading-relaxed mb-6">
                                Welcome to the Heritage edition of ColdReply. This special edition is designed for high-volume legacy institutions requiring enhanced security and archival compliance. By accessing or using our services, you agree to be bound by these Terms of Service.
                            </div>
                            <p>
                                These Terms of Service ("Terms") govern your access to and use of the ColdReply Heritage platform, websites, and services. Please read these Terms carefully before using the Services. Your access to and use of the Services is conditioned on your acceptance of and compliance with these Terms.
                            </p>
                        </LegalSection>

                        <LegalSection id="acceptance" number={2} title="Acceptance of Terms">
                            <p>
                                By creating an account or using the Heritage platform, you represent that you are at least 18 years old and have the legal authority to bind your institution to these terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
                            </p>
                            <ul className="space-y-4 mt-4">
                                <li className="flex gap-4">
                                    <CheckSquare className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                                    <span>You agree to provide accurate, current, and complete information during the registration process.</span>
                                </li>
                                <li className="flex gap-4">
                                    <CheckSquare className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                                    <span>You are responsible for maintaining the confidentiality of your account password.</span>
                                </li>
                            </ul>
                        </LegalSection>

                        <LegalSection id="conduct" number={3} title="User Conduct">
                            <p>
                                Users of the Heritage edition are held to the highest standards of professional conduct. The platform may not be used for any illegal or unauthorized purpose. In the use of the Service, you must not violate any laws in your jurisdiction.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="p-5 border border-primary/10 bg-white rounded-xl space-y-2">
                                    <h4 className="font-bold text-slate-900">Compliance</h4>
                                    <p className="text-sm text-slate-600">All outreach must comply with regional anti-spam legislation including GDPR and CAN-SPAM.</p>
                                </div>
                                <div className="p-5 border border-primary/10 bg-white rounded-xl space-y-2">
                                    <h4 className="font-bold text-slate-900">Data Integrity</h4>
                                    <p className="text-sm text-slate-600">Users must ensure the accuracy of all heritage data uploaded to the archival servers.</p>
                                </div>
                            </div>
                        </LegalSection>

                        <LegalSection id="ip" number={4} title="Intellectual Property">
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of ColdReply and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ColdReply.
                            </p>
                        </LegalSection>

                        <LegalSection id="liability" number={5} title="Limitation of Liability">
                            <p>
                                In no event shall ColdReply, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </LegalSection>

                        <LegalSection id="termination" number={6} title="Termination">
                            <p>
                                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </LegalSection>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
