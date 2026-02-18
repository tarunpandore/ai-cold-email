"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Lock,
  Mail,
  ArrowRight,
  ChevronLeft,
  MailCheck
} from "lucide-react";

export default function ResetPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating email send
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-background-light min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 lg:px-40 py-4 bg-background-light">
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <Sparkles size={20} />
          </div>
          <h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight">ColdReply</h2>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors"
          >
            Login
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 bg-background-light">
        <div className="w-full max-w-[440px] flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {!isSubmitted ? (
            /* Phase 1: Request State Card */
            <div className="bg-white border border-primary/10 rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Lock size={28} />
                </div>
                <h1 className="text-background-dark text-3xl font-bold tracking-tight mb-2">Forgot Password?</h1>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-background-dark ml-1">Email Address</label>
                  <input
                    className="w-full rounded-lg border border-primary/20 bg-background-light px-4 py-3.5 text-background-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-zinc-400"
                    placeholder="e.g. name@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Send Reset Link</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-primary/5 flex justify-center">
                <Link href="/login" className="flex items-center gap-2 text-primary text-sm font-bold hover:underline">
                  <ChevronLeft size={18} />
                  Back to Login
                </Link>
              </div>
            </div>
          ) : (
            /* Phase 2: Success State Message Card */
            <div className="bg-white border border-primary/10 rounded-xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <div className="flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30">
                  <MailCheck size={32} />
                </div>
                <h1 className="text-background-dark text-3xl font-bold tracking-tight mb-4">Check your email</h1>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  We've sent a password reset link to <span className="text-primary font-bold">{email}</span>. Please check your inbox and spam folder.
                </p>
                <div className="w-full space-y-4">
                  <button
                    className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-bold py-3.5 rounded-lg transition-all"
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Resend Email
                  </button>
                  <Link
                    href="/login"
                    className="block w-full py-2 text-primary text-sm font-bold hover:opacity-80 transition-opacity"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="py-10 flex flex-col items-center justify-center gap-4 opacity-40 grayscale group hover:grayscale-0 transition-all mt-auto">
        <div className="flex gap-8">
          <div className="size-6 bg-primary rounded-full opacity-20"></div>
          <div className="size-6 bg-primary rounded-full opacity-40"></div>
          <div className="size-6 bg-primary rounded-full opacity-60"></div>
          <div className="size-6 bg-primary rounded-full opacity-40"></div>
          <div className="size-6 bg-primary rounded-full opacity-20"></div>
        </div>
        <p className="text-xs font-medium text-primary uppercase tracking-widest">Heritage Grade Security</p>
      </footer>
    </div>
  );
}
