"use client";

import { GlassCard } from "@/components/ui/glass-card";
import {
    Unlock,
    FileCode,
    Zap,
    CheckCircle,
    Rocket,
    Grid,
    Cpu,
    Layers,
    Activity,
    Clock
} from "lucide-react";

const wins = [
    {
        title: "Full Technical Freedom",
        description: "Complete human-readable RTL source code. No encrypted black boxes. Audit, modify, customize—unlimited.",
        icon: <Unlock className="w-6 h-6 text-emerald-500" />,
    },
    {
        title: "Zero Royalty Economics",
        description: "Single upfront acquisition. Unlimited product deployments. No per-unit, per-core, or per-wafer fees. Ever.",
        icon: <FileCode className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "Production-Validated",
        description: "100 MHz signoff on Sky130 with CI protection. Post-placement timing margins. Ready for immediate tapeout.",
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Reproducible Validation",
        description: "Deterministic protocol, numeric, and stress suites generating byte-identical evidence. No guesswork.",
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
    {
        title: "Integration Velocity",
        description: "Structured deliverables: turn-key simulation harness, workload generators, DVFS collateral. Bring up in < 1 day.",
        icon: <Rocket className="w-6 h-6 text-purple-500" />,
    },
    {
        title: "Scalable & Extensible",
        description: "Modular 2×2→N×N mesh without redesign. Sparsity primitives, clock gating, DVFS hooks pre-integrated.",
        icon: <Grid className="w-6 h-6 text-cyan-500" />,
    },
];

const inside = [
    {
        title: "Modular Tile Mesh",
        description: "Lightweight NoC routers (5-port XY deterministic) connect compute tiles in 2D topology. Parameterized for 1×1 baseline to N×N scaling.",
        icon: <Grid className="w-5 h-5 text-zinc-400" />,
    },
    {
        title: "Int8→Int32 Compute",
        description: "Optimized integer MAC arrays for dense inference kernels (GEMM, MLP, convolution). High TOPS/W, deterministic numeric behavior.",
        icon: <Cpu className="w-5 h-5 text-zinc-400" />,
    },
    {
        title: "Sparsity-Aware Execution",
        description: "Bitmap RLE decoder + adaptive FSM skip zero-lanes. 1.5–2.5× efficiency uplift on sparse workloads without architecture churn.",
        icon: <Layers className="w-5 h-5 text-zinc-400" />,
    },
    {
        title: "Deterministic Validation",
        description: "CSV logs (cycles, stalls, inflight, seeds, git SHA), dual-run A/B protocol suite, numeric corner coverage. Reproducible evidence.",
        icon: <CheckCircle className="w-5 h-5 text-zinc-400" />,
    },
    {
        title: "DVFS & Clock Gating",
        description: "Multi-domain clock/reset wrappers, internal gating stubs. 10–20% dynamic power reduction. CDC-safe partition boundaries.",
        icon: <Clock className="w-5 h-5 text-zinc-400" />,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10 bg-secondary/30">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Why NeuraEdge Wins */}
                <div>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Why NeuraEdge™ Wins
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Innovation without lock-in. A new standard for IP ownership.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wins.map((feature, index) => (
                            <GlassCard
                                key={index}
                                className="hover:bg-secondary/50 transition-colors group"
                            >
                                <div className="mb-4 p-3 bg-secondary rounded-lg w-fit border border-border group-hover:border-zinc-400 dark:group-hover:border-zinc-700 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Inside NeuraEdge */}
                <div>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Inside NeuraEdge™
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Architected for performance, scalability, and ease of integration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {inside.map((feature, index) => (
                            <GlassCard
                                key={index}
                                className="hover:bg-secondary/50 transition-colors flex gap-4"
                            >
                                <div className="flex-shrink-0 p-2 bg-secondary rounded-lg h-fit border border-border">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
