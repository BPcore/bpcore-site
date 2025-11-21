import { MilestoneSection } from "@/components/sections/MilestoneSection";

import { PerformanceSection } from "@/components/sections/PerformanceSection";

export default function PerformancePage() {
    return (
        <main className="min-h-screen bg-zinc-950 relative overflow-hidden selection:bg-emerald-500/30">
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <PerformanceSection />
        </main>
    );
}
