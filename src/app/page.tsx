import { HeroSection } from "@/components/sections/HeroSection";
import { MilestoneSection } from "@/components/sections/MilestoneSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TechSpecsSection } from "@/components/sections/TechSpecsSection";
import { LicensingSection } from "@/components/sections/LicensingSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30">
      <HeroSection />
      <MilestoneSection />
      <FeaturesSection />
      <TechSpecsSection />
      <LicensingSection />
      <Footer />
    </main>
  );
}
