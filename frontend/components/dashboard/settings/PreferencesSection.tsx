"use client";

import { useEffect } from "react";
import { Mail, Globe, Bell as BellIcon, Info } from "lucide-react";
import SettingsCard from "./SettingsCard";
import { SettingsToggle, SettingsSelect } from "./SettingsForm";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function PreferencesSection() {
    const {
        tone, ctaStyle, language, alerts,
        updateField, updateAlerts, setInitialState
    } = useSettingsStore();

    useEffect(() => {
        setInitialState({
            tone: "Professional",
            ctaStyle: "Book a Meeting",
            language: "en",
            alerts: {
                processing: true,
                login: true,
                usage: true
            }
        });
    }, [setInitialState]);

    const setTone = (val: string) => updateField("tone", val);
    const setCtaType = (val: string) => updateField("ctaStyle", val);
    const setLanguage = (val: string) => updateField("language", val);
    const setAlerts = (field: keyof typeof alerts, val: boolean) => updateAlerts(field, val);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Email Generation Defaults */}
            <SettingsCard
                title="Email Generation Defaults"
                description="Set the core parameters for how our AI drafts your outreach emails."
                icon={Mail}
            >
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <label className="text-sm font-bold text-slate-900">Default Email Tone</label>
                            <Info size={14} className="text-slate-400 cursor-help" />
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {["Professional", "Casual", "Academic", "Bold"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTone(t)}
                                    className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${tone === t
                                        ? "border-primary bg-primary/5 text-primary"
                                        : "border-slate-100 text-slate-500 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className="text-sm font-bold">{t}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-md">
                        <SettingsSelect
                            label="Primary CTA Type"
                            id="cta_type"
                            value={ctaStyle}
                            onChange={setCtaType}
                            options={[
                                { value: "Book a Meeting", label: "Book a Meeting" },
                                { value: "Direct Pitch", label: "Direct Pitch" },
                                { value: "Free Trial Invite", label: "Free Trial Invite" },
                                { value: "Content Download", label: "Content Download" },
                                { value: "Custom CTA", label: "Custom CTA" },
                            ]}
                        />
                        <p className="mt-2 text-[11px] text-slate-400 leading-relaxed italic">
                            The call-to-action is the most critical part of your email. This default will be applied to new campaigns.
                        </p>
                    </div>
                </div>
            </SettingsCard>

            {/* Interface Localization */}
            <SettingsCard
                title="Interface Language"
                description="Select your preferred language for the dashboard and reports."
                icon={Globe}
            >
                <div className="max-w-md">
                    <SettingsSelect
                        label="Preferred Language"
                        id="language"
                        value={language}
                        onChange={setLanguage}
                        options={[
                            { value: "en", label: "English (US)" },
                            { value: "fr", label: "Français" },
                            { value: "de", label: "Deutsch" },
                            { value: "es", label: "Español" },
                            { value: "pt", label: "Português" },
                        ]}
                    />
                </div>
            </SettingsCard>

            {/* Notification Settings */}
            <SettingsCard
                title="Notification Settings"
                description="Control how and when you receive email alerts."
                icon={BellIcon}
            >
                <div className="divide-y divide-slate-100 -my-6">
                    <div className="py-6">
                        <SettingsToggle
                            title="Lead Processing Alerts"
                            description="Get an email when a new batch of leads has been successfully analyzed."
                            checked={alerts.processing}
                            onChange={(val) => setAlerts("processing", val)}
                        />
                    </div>
                    <div className="py-6">
                        <SettingsToggle
                            title="Login Alerts"
                            description="Receive a notification whenever a new login is detected on your account."
                            checked={alerts.login}
                            onChange={(val) => setAlerts("login", val)}
                        />
                    </div>
                    <div className="py-6">
                        <SettingsToggle
                            title="Usage Limit Warnings"
                            description="Notify me when I reach 80% and 100% of my monthly lead generation quota."
                            checked={alerts.usage}
                            onChange={(val) => setAlerts("usage", val)}
                        />
                    </div>
                </div>
            </SettingsCard>
        </div>
    );
}
