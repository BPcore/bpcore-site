"use client";

import { GlassCard } from "@/components/ui/glass-card";
import {
    Unlock,
    FileCode,
    Layers,
    Flag,
    Grid,
    CheckCircle,
} from "lucide-react";

const features = [
    {
        title: "Royalty Free",
        description:
            "One-time acquisition. Unlimited deployments. No per-unit fees. Ever.",
        icon: <Unlock className="w-6 h-6 text-emerald-500" />,
    },
    {
        title: "Full Source",
        description:
            "Full RTL source you can audit, modify, and extend. No encrypted black boxes.",
        icon: <FileCode className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "Sparsity Aware",
        description:
            "Bitmap RLE decoder + adaptive sparsity FSM to skip inactive compute.",
        icon: <Layers className="w-6 h-6 text-purple-500" />,
    },
    {
        title: "Made in India",
        description:
            "Built to strengthen India's semiconductor independence and global leadership.",
        icon: <Flag className="w-6 h-6 text-orange-500" />,
    },
    {
        title: "Scalable Mesh",
        description:
            "Tile/mesh architecture. Scale from 2×2 to N×N seamlessly.",
        icon: <Grid className="w-6 h-6 text-cyan-500" />,
    },
    {
        title: "Deterministic",
        description:
            "Dual-run A/B with byte-identical CSVs for reproducible validation.",
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why BPcore Silicon
                    </h2>
                    <p className="text-zinc-400 max-w-2xl">
                        Innovation without lock-in. A new standard for IP ownership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <GlassCard
                            key={index}
                            className="hover:bg-zinc-800/40 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-zinc-900/50 rounded-lg w-fit border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
