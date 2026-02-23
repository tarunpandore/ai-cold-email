"use client";

import { useState } from "react";
import { Download, ShieldCheck, AlertCircle, Trash2, FileJson, FileType, Check, X, Loader2, Link } from "lucide-react";
import SettingsCard from "./SettingsCard";
import DashboardFooter from "@/components/layouts/DashboardFooter";
import api from "@/lib/api";
import { useUserStore } from "@/store/useUserStore";

export default function DataManagementSection() {
    const { logout } = useUserStore();
    const [isDeleting, setIsDeleting] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deletingLoading, setDeletingLoading] = useState(false);

    const handleDeleteAccount = async () => {
        if (!confirmDelete) {
            setConfirmDelete(true);
            return;
        }

        setDeletingLoading(true);
        try {
            await api.delete("/user");
            logout();
            window.location.href = "/signup";
        } catch (error) {
            console.error("Failed to delete account:", error);
            alert("Failed to delete account. Please try again.");
            setDeletingLoading(false);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Export Account Data */}
            <SettingsCard
                title="Export Account Data"
                description="Download a comprehensive copy of your account activity, contact lists, and campaign history."
                icon={Download}
            >
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    A download link will be sent to your registered email address.
                </p>
                <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm">
                        <FileType className="mr-2" size={18} />
                        Export as CSV
                    </button>
                    <button className="inline-flex items-center px-4 py-2.5 border border-primary/20 bg-primary/5 text-primary text-sm font-bold rounded-lg hover:bg-primary/10 transition-all">
                        <FileJson className="mr-2" size={18} />
                        Export as JSON
                    </button>
                </div>
            </SettingsCard>

            {/* Data Privacy & Compliance */}
            <SettingsCard
                title="Data Privacy & Compliance"
                description="How we handle and protect your data."
                icon={ShieldCheck}
            >
                <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        At ColdReply, we prioritize your data sovereignty. All outreach data is encrypted at rest using AES-256 and in transit via TLS 1.3. We are fully GDPR and CCPA compliant.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                        <p className="text-xs text-primary font-bold leading-relaxed">
                            Your data is never sold to third parties or used to train public AI models without your explicit consent.
                        </p>
                    </div>
                </div>
            </SettingsCard>

            {/* Danger Zone */}
            <div className="bg-rose-50 rounded-xl border border-rose-100 p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-rose-500 shrink-0">
                        <AlertCircle size={32} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-rose-900 mb-2">Danger Zone</h3>
                        <p className="text-sm text-rose-800/70 mb-6 leading-relaxed max-w-2xl">
                            Deleting your account is permanent. All campaign data, leads, and analytics will be purged. This action cannot be undone.
                        </p>

                        {!confirmDelete ? (
                            <button
                                onClick={() => setConfirmDelete(true)}
                                className="inline-flex items-center px-6 py-3 bg-rose-500 text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-all shadow-md shadow-rose-200"
                            >
                                <Trash2 className="mr-2" size={18} />
                                Permanently Delete Account
                            </button>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                                <button
                                    onClick={handleDeleteAccount}
                                    disabled={deletingLoading}
                                    className="inline-flex items-center px-6 py-3 bg-rose-600 text-white text-sm font-bold rounded-lg hover:bg-rose-700 transition-all shadow-md shadow-rose-200 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {deletingLoading ? (
                                        <Loader2 className="mr-2 animate-spin" size={18} />
                                    ) : (
                                        <Check className="mr-2" size={18} />
                                    )}
                                    Confirm Deletion
                                </button>
                                <button
                                    onClick={() => setConfirmDelete(false)}
                                    disabled={deletingLoading}
                                    className="inline-flex items-center px-6 py-3 bg-white border border-rose-200 text-rose-600 text-sm font-bold rounded-lg hover:bg-rose-50 transition-all"
                                >
                                    <X className="mr-2" size={18} />
                                    Cancel
                                </button>
                                <p className="text-xs text-rose-600 font-medium ml-2">Are you sure?</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <DashboardFooter />
        </div>
    );
}
