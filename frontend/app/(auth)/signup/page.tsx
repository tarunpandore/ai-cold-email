"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Star,
  Loader2
} from "lucide-react";
import api from "@/lib/api";
import { useUserStore } from "@/store/useUserStore";
import { useOnboardingStore } from "@/store/useOnboardingStore";

export default function SignupPage() {
  const router = useRouter();
  const { setAccessToken, setUser } = useUserStore();
  const { updateData } = useOnboardingStore();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Backend Integration: Handle user registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("/auth/signup", {
        email,
        password,
      });

      const { accessToken } = response.data;

      // Store token
      setAccessToken(accessToken);

      // Fetch user info to update store
      const userRes = await api.get("/auth/me");
      setUser(userRes.data);

      // Redirect to onboarding as per navigation logic
      updateData({ fullName: name });
      router.push("/profile");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || err.response?.data?.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    {
      text: "The most intuitive cold email tool we've ever used. It actually understands context and helps us book 3x more meetings.",
      author: "Sarah Jenkins",
      role: "Head of Sales @ TechFlow",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXu DuFhBv_9muIS1nuSpGHhuGHS3I3MAAYZvmbqTZY8ExcI7VIOX4gRu7thY-c9aXKzTNwuoeQV72eRzAzylSjy4Cap-gezxuQY9oIhMllw4qx8Hev0HdOhG30QgnEN26yH4MvcLkwnH32TXQ7LGG1gmiY9TcwrkWjGSoyBL0HrSpFmiUCfX_A-T-mPnThV4IZcPd6QEoGTSMa-7GTjpCkPb8VwMhrjmY7y9eMN02M66jkIBTLiNv1OeueDk_9OpDXui8hMOVnKCPNGM"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-background-light text-background-dark antialiased">
      {/* Left Side: Branding & Social Proof */}
      <div className="relative hidden w-full flex-col justify-between bg-gradient-to-br from-primary to-background-dark p-12 text-white lg:flex lg:w-1/2 xl:w-5/12 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZJtmJ0pKZkp7nmiQSwQUyM3RD4qymC8KTY7-d25eD4sZSOs7Efv3JuTGMzJSx9x9RiNg9Pg6wqrt6Ykc-P5DoKsFItV7DhurxenxO6P9rvEk6rkYEHtyzDLUCHMV6tbdk-KUVTKCnZjl6ymPhSZGLjs514VU3NV18CengvOndfdf1-cXneBfocGWpzayRrH_voqXvmOspzxltaUC5qyw1A94hyjCTuNl0poEosqMhwqTpEalXWtHdX26Fx28hpiv_8qox1Dq5uHQ')" }}></div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <Sparkles size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">ColdReply</h2>
          </Link>
        </div>

        <div className="relative z-10 mt-auto mb-auto max-w-lg">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-5.5xl xl:text-6xl">
            Cold outreach that feels <span className="text-primary/60">warm.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Join 5,000+ sales leaders using ColdReply to automate personalized responses. Scale your outbound without losing the human touch.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-slate-200 overflow-hidden">
                    <img className="h-full w-full object-cover" src={`https://i.pravatar.cc/150?u=${i + 10}`} alt={`User ${i}`} />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-white/90">Trusted by top growth teams</p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-md border border-white/10">
              <div className="flex text-yellow-400 mb-3 gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg italic text-white/90 font-medium leading-relaxed">
                "{testimonials[0].text}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border-2 border-white/20 overflow-hidden">
                  <img className="h-full w-full object-cover" src={testimonials[0].avatar} alt={testimonials[0].author} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{testimonials[0].author}</p>
                  <p className="text-xs text-white/60">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-8 text-sm text-white/40">
          <span>© 2024 ColdReply Inc.</span>
          <Link className="hover:text-white transition-colors" href="#">Privacy</Link>
          <Link className="hover:text-white transition-colors" href="#">Terms</Link>
        </div>
      </div>

      {/* Right Side: Form Area */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2 xl:w-7/12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">ColdReply</h2>
            </Link>
            <Link href="/login" className="text-sm font-semibold text-primary">Log in</Link>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-background-dark">Start your free trial</h2>
            <p className="mt-3 text-primary/80">14 days of full access. No credit card required.</p>
          </div>

          {/* Social Sign In */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-primary/10 bg-white px-4 py-2.5 text-sm font-semibold text-background-dark transition-all hover:bg-gray-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-primary/10 bg-white px-4 py-2.5 text-sm font-semibold text-background-dark transition-all hover:bg-gray-50">
              <svg className="h-5 w-5 fill-[#0077b5]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
              LinkedIn
            </button>
          </div>

          <div className="relative my-8">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background-light px-4 text-primary/80 font-medium">Or continue with email</span>
            </div>
          </div>

          {/* Registration Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium animate-in fade-in zoom-in-95">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-background-dark mb-2" htmlFor="full-name">Full Name</label>
              <div className="relative group">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <User size={18} className="text-primary/80 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  className="block w-full rounded-lg border border-primary/10 bg-white py-3 pl-11 pr-4 text-background-dark placeholder-primary/40 transition-all focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  id="full-name"
                  placeholder="John Doe"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-background-dark mb-2" htmlFor="email">Work Email</label>
              <div className="relative group">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Mail size={18} className="text-primary/80 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  className="block w-full rounded-lg border border-primary/10 bg-white py-3 pl-11 pr-4 text-background-dark placeholder-primary/40 transition-all focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  id="email"
                  placeholder="john@company.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-background-dark mb-2" htmlFor="password">Password</label>
              <div className="relative group">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Lock size={18} className="text-primary/80 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  className="block w-full rounded-lg border border-primary/10 bg-white py-3 pl-11 pr-12 text-background-dark placeholder-primary/40 transition-all focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  id="password"
                  placeholder="••••••••"
                  minLength={8}
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary/80 hover:text-primary transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="mt-2 text-[11px] font-medium text-primary/80">Minimum 8 characters with at least one number.</p>
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input className="h-4 w-4 rounded border-primary/10 text-primary focus:ring-primary cursor-pointer" id="terms" name="terms" type="checkbox" required />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-primary/80 cursor-pointer" htmlFor="terms">
                  I agree to the <Link className="font-semibold text-primary underline underline-offset-4" href="#">Terms of Service</Link> and <Link className="font-semibold text-primary underline underline-offset-4" href="#">Privacy Policy</Link>.
                </label>
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full rounded-lg bg-primary py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Your Free Account"
              )}
            </button>
          </form>

          <div className="mt-8 text-center lg:mt-10">
            <p className="text-sm text-primary/80">
              Already have an account?
              <Link className="font-bold text-primary hover:underline underline-offset-4 ml-1" href="/login">Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
