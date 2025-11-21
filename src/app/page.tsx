import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MilestoneSection } from "@/components/sections/MilestoneSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 relative overflow-hidden selection:bg-emerald-500/30">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <HeroSection />
      <MilestoneSection />
      <FeaturesSection />
      <CapabilitiesSection />
    </main>
  );
}
