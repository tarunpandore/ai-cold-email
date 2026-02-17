import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import Solutions from "@/components/marketing/Solutions";
import Pricing from "@/components/marketing/Pricing";
import Testimonials from "@/components/marketing/Testimonials";

export default function Home() {
  return (
    <div className="bg-background-light  text-[#121811]  min-h-screen font-sans selection:bg-primary/30">
      <Navbar />
      <main className="pt-16">
        <Hero />

        {/* Trusted By Section */}
        <section className="py-12 bg-white/50 ">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
              Trusted by modern sales teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale">
              <span className="text-2xl font-black italic font-display">TECHNO</span>
              <span className="text-2xl font-black font-display">Velocity</span>
              <span className="text-2xl font-black tracking-tighter font-display">
                DATA<span className="text-primary">CORE</span>
              </span>
              <span className="text-2xl font-bold font-display">CloudStream</span>
              <span className="text-2xl font-black font-display">STRIKE</span>
            </div>
          </div>
        </section>

        <Solutions />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
