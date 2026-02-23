import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LegalHeader from "@/components/legal/LegalHeader";
import LegalSidebar from "@/components/legal/LegalSidebar";
import LegalSection from "@/components/legal/LegalSection";
import { Info, Database, LineChart, Share2, Shield, Lock, Mail, User, Terminal, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | ColdReply",
    description: "Privacy Policy for the ColdReply platform explaining how we handle and protect data.",
};

const SIDEBAR_LINKS = [
    { id: "introduction", label: "Introduction", iconName: "info" },
    { id: "data-collection", label: "Data Collection", iconName: "database" },
    { id: "how-we-use", label: "Usage & Analytics", iconName: "line-chart" },
    { id: "data-sharing", label: "Data Sharing", iconName: "share2" },
    { id: "user-rights", label: "Your Rights", iconName: "shield" },
    { id: "security", label: "Security Measures", iconName: "lock" },
    { id: "contact", label: "Contact Us", iconName: "mail" },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background-light font-sans text-slate-900 selection:bg-primary/30">
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                <LegalHeader
                    breadcrumbLabel="Privacy Policy"
                    title="Privacy Policy"
                    description="At ColdReply, we are committed to protecting your professional data. This policy outlines how we handle information to provide you with high-performance B2B communication tools while maintaining absolute transparency."
                    lastUpdated="October 24, 2023"
                    pdfLink="#"
                />

                <div className="flex flex-col lg:flex-row gap-16">
                    <LegalSidebar links={SIDEBAR_LINKS} />

                    <article className="flex-1 max-w-3xl space-y-12 pb-24">
                        <LegalSection id="introduction" number={1} title="Introduction">
                            <p>
                                Welcome to ColdReply. We provide a B2B Software-as-a-Service (SaaS) platform designed to streamline business outreach and professional communications. This Privacy Policy explains how ColdReply ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website and use our platform.
                            </p>
                            <p>
                                By using the Service, you agree to the collection and use of information in accordance with this policy. We prioritize the security of your business intelligence and operate with a strict "privacy-by-design" methodology.
                            </p>
                        </LegalSection>

                        <LegalSection id="data-collection" number={2} title="Data Collection">
                            <p>
                                In order to provide our outreach services effectively, we collect several categories of information:
                            </p>

                            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-xl border border-primary/10 bg-white p-5">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900">Account Information</h4>
                                    <p className="mt-2 text-sm text-slate-600">Name, business email, job title, and company details used for authentication and service delivery.</p>
                                </div>

                                <div className="rounded-xl border border-primary/10 bg-white p-5">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Terminal className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900">Technical Data</h4>
                                    <p className="mt-2 text-sm text-slate-600">IP addresses, browser type, device information, and platform interaction logs for security and performance.</p>
                                </div>
                            </div>

                            <p>
                                We also process <strong>CRM Data</strong> that you choose to upload or integrate with our platform. ColdReply acts as a Data Processor for this information, while you remain the Data Controller.
                            </p>
                        </LegalSection>

                        <LegalSection id="how-we-use" number={3} title="How We Use Your Data">
                            <p>We use the collected data for various professional purposes:</p>
                            <ul className="list-disc pl-6 space-y-3 text-slate-700">
                                <li><strong>Service Provision:</strong> To maintain your account and provide the core functionalities of the ColdReply outreach platform.</li>
                                <li><strong>Personalization:</strong> To tailor your experience and improve our proprietary algorithms for better reply rates.</li>
                                <li><strong>Compliance:</strong> To prevent fraudulent activity and ensure all outreach complies with anti-spam regulations (CAN-SPAM, CASL).</li>
                                <li><strong>Analytics:</strong> To monitor usage patterns and improve user interface design and system reliability.</li>
                            </ul>

                            <div className="my-10 rounded-2xl bg-primary/5 border-l-4 border-primary p-8">
                                <div className="flex items-start gap-4">
                                    <Shield className="text-primary h-8 w-8 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-primary">Our Zero-Selling Promise</h4>
                                        <p className="mt-2 text-slate-700">ColdReply will never sell, rent, or trade your professional data or your prospects' data to third parties for marketing purposes. Your data is your competitive advantage.</p>
                                    </div>
                                </div>
                            </div>
                        </LegalSection>

                        <LegalSection id="data-sharing" number={4} title="Data Sharing & Disclosure">
                            <p>
                                We share information only with trusted third-party service providers who assist us in operating our platform, such as:
                            </p>

                            <div className="overflow-x-auto my-6">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-primary/20">
                                            <th className="py-4 text-sm font-bold text-slate-900 uppercase tracking-wider">Category</th>
                                            <th className="py-4 text-sm font-bold text-slate-900 uppercase tracking-wider">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-primary/10">
                                        <tr>
                                            <td className="py-4 text-sm font-semibold text-slate-700">Cloud Infrastructure</td>
                                            <td className="py-4 text-sm text-slate-600">Hosting and data storage (AWS/GCP)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 text-sm font-semibold text-slate-700">Payment Processors</td>
                                            <td className="py-4 text-sm text-slate-600">Secure billing and subscription management (Stripe)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 text-sm font-semibold text-slate-700">Customer Support</td>
                                            <td className="py-4 text-sm text-slate-600">Ticketing systems and live chat tools</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </LegalSection>

                        <LegalSection id="user-rights" number={5} title="Your Rights & Controls">
                            <p>
                                Depending on your location (specifically GDPR for EU residents and CCPA for California residents), you have significant rights over your data:
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-none p-0 mt-6">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="text-slate-700">Right to Access & Portability</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="text-slate-700">Right to Rectification (Correction)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="text-slate-700">Right to Erasure ("Right to be Forgotten")</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="text-slate-700">Right to Object to Processing</span>
                                </li>
                            </ul>
                        </LegalSection>

                        <LegalSection id="security" number={6} title="Security Measures">
                            <p>
                                We implement industry-standard security measures including:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mt-4 text-slate-700">
                                <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit.</li>
                                <li><strong>Access Controls:</strong> Role-based access control (RBAC) and mandatory Multi-Factor Authentication (MFA) for our internal staff.</li>
                                <li><strong>Audit Logs:</strong> Comprehensive logging of all system access and data modifications.</li>
                            </ul>
                        </LegalSection>

                        <section id="contact" className="mt-16 border-t border-primary/10 pt-16 scroll-mt-32">
                            <h2 className="text-2xl font-bold text-primary flex items-center gap-3 font-display mb-6">
                                7. Contact Information
                            </h2>
                            <p className="text-slate-700 text-lg">If you have any questions about this Privacy Policy, please contact our Legal Department:</p>

                            <div className="mt-6 rounded-xl bg-primary/5 p-8 border border-primary/10">
                                <p className="font-bold text-slate-900 text-lg">ColdReply Legal Team</p>
                                <p className="text-slate-600 mt-2">123 Heritage Way, Suite 500<br />San Francisco, CA 94107</p>
                                <p className="mt-4">
                                    <a href="mailto:privacy@coldreply.io" className="font-bold text-primary hover:underline">privacy@coldreply.io</a>
                                </p>
                            </div>
                        </section>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
