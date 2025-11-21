import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 pt-20">
      <HeroSection />
      <Footer />
    </main>
  );
}
