"use client";

import { useEffect } from "react";
import { Shield, Lock, History, Smartphone, Monitor, Tablet, LogOut, CheckCircle2 } from "lucide-react";
import SettingsCard from "./SettingsCard";
import { SettingsToggle } from "./SettingsForm";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function SecuritySection() {
    const { twoFA, updateField, setInitialState } = useSettingsStore();

    useEffect(() => {
        setInitialState({ twoFA: true });
    }, [setInitialState]);

    const setTwoFA = (val: boolean) => updateField("twoFA", val);

    const sessions = [
        {
            id: "1",
            device: "Chrome on MacOS (Ventura)",
            location: "London, United Kingdom",
            ip: "192.168.1.42",
            status: "active",
            icon: Monitor
        },
        {
            id: "2",
            device: "ColdReply iOS App",
            location: "iPhone 15 Pro",
            ip: "Last seen 2 hours ago",
            status: "revoke",
            icon: Smartphone
        },
        {
            id: "3",
            device: "Safari on iPadOS",
            location: "Manchester, UK",
            ip: "Last seen Jan 28, 2024",
            status: "revoke",
            icon: Tablet
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Two-Factor Authentication */}
            <SettingsCard
                title="Two-Factor Authentication (2FA)"
                description="Add an extra layer of security to your account."
                icon={Shield}
                headerAction={
                    <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase transition-colors ${twoFA ? "text-primary" : "text-slate-400"}`}>
                            {twoFA ? "Enabled" : "Disabled"}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={twoFA}
                                onChange={(e) => setTwoFA(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                }
            >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                        Requires a verification code from your mobile device in addition to your password whenever you log in.
                    </p>
                    <button className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">
                        Configure App
                    </button>
                </div>
            </SettingsCard>

            {/* Password Management */}
            <SettingsCard
                title="Password Management"
                description="Manage your password and security questions."
                icon={Lock}
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-xs font-medium text-slate-400 flex items-center gap-2">
                            <History size={14} />
                            Last changed: October 12, 2023 (4 months ago)
                        </p>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20">
                        Change Password
                    </button>
                </div>
            </SettingsCard>

            {/* Active Login Sessions */}
            <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                        <Monitor size={18} className="text-primary" />
                        <h3 className="text-lg font-bold text-slate-900">Active Login Sessions</h3>
                    </div>
                    <button className="text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors uppercase tracking-wider">
                        Logout all devices
                    </button>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100 overflow-hidden">
                    {sessions.map((session) => (
                        <div key={session.id} className="p-5 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                                    <session.icon size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-bold text-slate-900">{session.device}</h4>
                                        {session.status === "active" && (
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700 uppercase tracking-tighter">
                                                Active Now
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-0.5">{session.location} • {session.ip}</p>
                                </div>
                            </div>

                            {session.status === "active" ? (
                                <div className="p-2 text-emerald-500 bg-emerald-50 rounded-lg">
                                    <CheckCircle2 size={18} />
                                </div>
                            ) : (
                                <button className="px-3 py-1.5 text-xs font-bold text-rose-500 hover:bg-rose-50 rounded-lg transition-all border border-transparent hover:border-rose-100">
                                    Revoke
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
