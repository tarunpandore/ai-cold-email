"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Unlock,
  Loader2
} from "lucide-react";
import api from "@/lib/api";
import { useUserStore } from "@/store/useUserStore";

export default function LoginPage() {
  const router = useRouter();
  // @ts-ignore
  const { setAccessToken, setUser } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Backend Integration: Handle user login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { accessToken } = response.data;

      // Store token
      setAccessToken(accessToken);

      // Fetch user info to check onboarding status
      const userRes = await api.get("/auth/me");
      const userData = userRes.data;
      setUser(userData);

      // Navigation Logic: Redirect based on onboarding completeness
      if (userData.onboardingComplete) {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || err.response?.data?.message || "Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light min-h-screen flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 lg:px-40 py-4 bg-background-light">
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
            <Sparkles size={20} />
          </div>
          <h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight">ColdReply</h2>
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-sm text-primary/70 font-medium">Don't have an account?</span>
          <Link
            href="/signup"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        {/* Abstract Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        {/* Centered Auth Card */}
        <div className="w-full max-w-[480px] bg-white border border-primary/10 rounded-xl p-8 md:p-10 relative z-10 shadow-xl shadow-primary/5">
          <div className="flex flex-col items-center mb-8">
            <div className="size-12 mb-4 bg-primary/5 rounded-full flex items-center justify-center">
              <Unlock size={28} className="text-primary" />
            </div>
            <h1 className="text-zinc-900 tracking-tight text-3xl font-extrabold leading-tight text-center">Welcome back</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base font-medium leading-relaxed mt-2 text-center max-w-[300px]">
              Enter your credentials to manage your outreach campaigns.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium animate-in fade-in zoom-in-95">
                {error}
              </div>
            )}
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-zinc-700 text-sm font-bold tracking-tight px-1">Email Address</label>
              <div className="relative group">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors" />
                <input
                  className="flex w-full pl-11 pr-4 py-3.5 rounded-lg text-zinc-900 border border-primary/10 bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-zinc-400"
                  placeholder="alex@company.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <label className="block text-zinc-700 text-sm font-bold tracking-tight">Password</label>
                <Link href="/forgot-password" title="forgot-password" className="text-xs font-bold text-primary hover:underline decoration-2">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors" />
                <input
                  className="flex w-full pl-11 pr-12 py-3.5 rounded-lg text-zinc-900 border border-primary/10 bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-zinc-400"
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input className="w-4 h-4 rounded border-primary/10 text-primary focus:ring-primary" id="remember" type="checkbox" />
              <label className="text-sm font-medium text-zinc-500 cursor-pointer" htmlFor="remember">Stay signed in for 30 days</label>
            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white h-14 text-base font-extrabold shadow-lg shadow-primary/10 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/10"></div>
            </div>
            <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest">
              <span className="bg-white px-4 text-zinc-400">Or continue with</span>
            </div>
          </div>

          {/* Social Auth Options */}
          <div className="grid grid-cols-1 gap-4">
            <button className="flex items-center justify-center gap-3 w-full h-12 rounded-lg border border-primary/10 bg-white hover:bg-zinc-50 transition-colors text-zinc-700 font-bold text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span>Google Sign In</span>
            </button>
          </div>

          {/* Mobile Footer Toggle */}
          <div className="mt-8 text-center md:hidden">
            <p className="text-sm text-zinc-500 font-medium">
              New to ColdReply?
              <Link href="/signup" className="text-primary font-bold hover:underline ml-1">Create an account</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="p-6 text-center mt-auto">
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
          <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link>
          <Link className="hover:text-primary transition-colors" href="#">Help Center</Link>
        </div>
        <p className="text-xs text-zinc-400">© 2024 ColdReply SaaS. Built for professionals.</p>
      </footer>
    </div>
  );
}
