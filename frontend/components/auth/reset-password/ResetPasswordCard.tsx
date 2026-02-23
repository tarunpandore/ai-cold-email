"use client";

import { useState } from "react";
import { Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

interface Props {
    token: string;
}

export default function ResetPasswordCard({ token }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setIsLoading(true);
        try {
            await api.post("/auth/reset-password", { token, newPassword: password });
            setIsSuccess(true);
        } catch (err: any) {
            setError(err.response?.data?.error || "Failed to reset password. The link might be expired.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-[#e5e1da] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                <div className="p-8 md:p-10 flex flex-col items-center text-center">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold leading-tight mb-2 text-primary">
                        Password successfully updated
                    </h2>
                    <p className="text-primary/70 text-sm mb-8">
                        Your account is now secure. You can log in with your new password.
                    </p>
                    <Link
                        href="/login"
                        className="w-full bg-primary hover:bg-[#1e3d1a] text-white font-bold py-3.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                    >
                        Back to Login
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="w-full max-w-md bg-white rounded-lg shadow-sm border border-[#e5e1da] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 md:p-10">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold leading-tight mb-2">Create your new password</h2>
                    <p className="text-primary/60 text-sm font-medium">
                        Choose a strong password to protect your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* New Password Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#121811]">New Password</label>
                        <div className="relative group">
                            <input
                                className="w-full px-4 py-3 bg-[#f9fbf9] border border-[#d7e1d6] rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all pr-12 text-base"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div className="h-1 flex-1 bg-primary rounded-full"></div>
                            <div className="h-1 flex-1 bg-primary rounded-full"></div>
                            <div className="h-1 flex-1 bg-primary rounded-full"></div>
                            <div className="h-1 flex-1 bg-primary/10 rounded-full"></div>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-primary">
                            Strong Password
                        </span>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#121811]">Confirm New Password</label>
                        <div className="relative group">
                            <input
                                className="w-full px-4 py-3 bg-[#f9fbf9] border border-[#d7e1d6] rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all pr-12 text-base"
                                placeholder="••••••••"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors"
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {error && <div className="text-red-500 text-sm font-medium">{error}</div>}

                    <button
                        className="w-full bg-primary hover:bg-[#1e3d1a] text-white font-bold py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98] disabled:opacity-70"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>

            {/* Note: In a real app, successful update would show a toast or change the view */}
        </main>
    );
}
