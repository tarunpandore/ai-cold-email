"use client";

import { useState } from "react";
import { Camera, Sparkles, User as UserIcon } from "lucide-react";
import SettingsCard from "./SettingsCard";
import { SettingsInput, SettingsSelect } from "./SettingsForm";
import { useAppStore } from "@/store/useAppStore";

export default function ProfileSection() {
    const { user } = useAppStore();
    const [name, setName] = useState(user?.name || "Alexander Sterling");
    const [jobTitle, setJobTitle] = useState("Director of Growth");
    const [timezone, setTimezone] = useState("UTC-5");
    const [tone, setTone] = useState("professional");
    const [ctaType, setCtaType] = useState("calendar");

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Profile Picture */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-slate-200 overflow-hidden flex items-center justify-center">
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <UserIcon size={40} className="text-primary/40" />
                            )}
                        </div>
                        <button className="absolute bottom-0 right-0 bg-white border border-slate-200 rounded-full p-2 shadow-md hover:text-primary transition-colors">
                            <Camera size={16} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold text-slate-900">Profile Picture</h3>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                            JPG, GIF or PNG. Max size of 2MB. A professional photo helps build trust with recipients.
                        </p>
                    </div>
                </div>
                <button className="bg-slate-50 text-slate-700 px-5 py-2 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-100 transition-colors">
                    Change Photo
                </button>
            </div>

            {/* Profile Information */}
            <SettingsCard
                title="Profile Information"
                description="Basic details about your professional identity."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SettingsInput
                        label="Full Name"
                        id="full_name"
                        value={name}
                        onChange={setName}
                    />
                    <SettingsInput
                        label="Email Address"
                        id="email"
                        value={user?.email || "alexander@heritage-saas.com"}
                        onChange={() => { }}
                        readOnly
                    />
                    <SettingsInput
                        label="Job Title"
                        id="job_title"
                        value={jobTitle}
                        onChange={setJobTitle}
                    />
                    <SettingsSelect
                        label="Timezone"
                        id="timezone"
                        value={timezone}
                        onChange={setTimezone}
                        options={[
                            { value: "UTC-5", label: "Eastern Standard Time (EST)" },
                            { value: "UTC-8", label: "Pacific Standard Time (PST)" },
                            { value: "UTC+0", label: "Greenwich Mean Time (GMT)" },
                            { value: "UTC+1", label: "Central European Time (CET)" },
                        ]}
                    />
                </div>
            </SettingsCard>

            {/* AI Writing Preferences */}
            <SettingsCard
                title="AI Writing Preferences"
                description="Configure how ColdReply AI drafts your initial outreach."
                icon={Sparkles}
            >
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-3">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Default Email Tone
                            </label>
                            <p className="text-[10px] text-slate-400 mb-1 italic">Sets the baseline vocabulary and sentence structure.</p>
                            <div className="grid grid-cols-2 gap-2">
                                {["professional", "friendly", "bold", "concise"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTone(t)}
                                        className={`p-3 border-2 rounded-lg text-sm font-bold transition-all capitalize ${tone === t
                                                ? "border-primary bg-primary/5 text-primary"
                                                : "border-slate-100 text-slate-500 hover:border-primary/30"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <SettingsSelect
                                label="Primary CTA Type"
                                id="cta_type"
                                value={ctaType}
                                onChange={setCtaType}
                                options={[
                                    { value: "calendar", label: "Calendar Link (Direct Booking)" },
                                    { value: "open", label: "Open-Ended Question (Low Friction)" },
                                    { value: "interest", label: "Interest Gauge (Permission Based)" },
                                    { value: "meeting", label: "Specific Meeting Request (Hard CTA)" },
                                ]}
                            />
                            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Preview</p>
                                <p className="text-xs text-slate-600 italic leading-relaxed">
                                    "Do you have a calendar link handy, or would you prefer I send over a few times next Tuesday?"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SettingsCard>
        </div>
    );
}
