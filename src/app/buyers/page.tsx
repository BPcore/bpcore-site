import { FeaturesSection } from "@/components/sections/FeaturesSection";

import { BuyersSection } from "@/components/sections/BuyersSection";

export default function BuyersPage() {
    return (
        <main className="min-h-screen bg-zinc-950 relative overflow-hidden selection:bg-emerald-500/30">
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <BuyersSection />
        </main>
    );
}
