"use client";

import { LucideIcon } from "lucide-react";

interface SettingsToggleProps {
    title: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function SettingsToggle({ title, description, checked, onChange }: SettingsToggleProps) {
    return (
        <div className="flex items-center justify-between group py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 pr-4">
                <span className="text-sm font-bold text-slate-900">{title}</span>
                <span className="text-xs text-slate-500 leading-relaxed">{description}</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
        </div>
    );
}

interface SettingsInputProps {
    label: string;
    id: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    readOnly?: boolean;
    helpText?: string;
}

export function SettingsInput({
    label,
    id,
    value,
    onChange,
    type = "text",
    placeholder,
    readOnly = false,
    helpText
}: SettingsInputProps) {
    return (
        <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                readOnly={readOnly}
                className={`rounded-lg border border-slate-200 text-sm p-2.5 transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none ${readOnly ? "bg-slate-50 text-slate-400 cursor-not-allowed" : "bg-white text-slate-900"
                    }`}
            />
            {helpText && <p className="text-[10px] text-slate-400 mt-1">{helpText}</p>}
        </div>
    );
}

interface SettingsSelectProps {
    label: string;
    id: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}

export function SettingsSelect({ label, id, value, onChange, options }: SettingsSelectProps) {
    return (
        <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white text-slate-900 text-sm p-2.5 transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}
