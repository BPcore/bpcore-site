"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

export function CapabilitiesSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Key Capabilities Table */}
                <div>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Key Capabilities
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Comprehensive feature set designed for modern edge AI workloads.
                        </p>
                    </div>
                    <GlassCard className="overflow-hidden p-0 border-border" noPadding>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-secondary/50 text-foreground border-b border-border">
                                        <th className="p-6 font-semibold">Feature</th>
                                        <th className="p-6 font-semibold">Specification</th>
                                        <th className="p-6 font-semibold">Benefit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-sm">
                                    {[
                                        ["Mesh Interconnect", "2D Mesh (XY Routing), 32-bit flits", "Scalable bandwidth, no central bottleneck"],
                                        ["Compute Tile", "Int8 MAC Array + RISC-V Controller", "High efficiency for quantized inference"],
                                        ["Sparsity Support", "Zero-skipping logic (activations)", "2x speedup on sparse models"],
                                        ["On-Chip Memory", "Distributed SRAM (per tile)", "Low latency, high locality"],
                                        ["External Interface", "AXI4-Stream / APB", "Standard SoC integration"],
                                    ].map(([feature, spec, benefit], i) => (
                                        <tr key={i} className="hover:bg-secondary/30 transition-colors">
                                            <td className="p-6 font-medium text-foreground">{feature}</td>
                                            <td className="p-6 text-muted-foreground font-mono">{spec}</td>
                                            <td className="p-6 text-emerald-600 dark:text-emerald-400">{benefit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* Why This Matters Comparison */}
                <div>
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Why This Matters
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            See how NeuraEdge™ compares to traditional licensing models.
                        </p>
                    </div>
                    <GlassCard className="overflow-hidden p-0 border-border" noPadding>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-secondary/50 text-foreground border-b border-border">
                                        <th className="p-6 font-semibold">Metric</th>
                                        <th className="p-6 font-semibold text-emerald-600 dark:text-emerald-400">NeuraEdge™ IP</th>
                                        <th className="p-6 font-semibold text-muted-foreground">Traditional IP</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-sm">
                                    {[
                                        ["Cost Model", "One-time Buyout", "License + Royalties"],
                                        ["Source Code", "Full RTL Included", "Encrypted / Black Box"],
                                        ["Customization", "Full Rights to Modify", "Locked / Change Requests"],
                                        ["Verification", "Deterministic Suites Provided", "Limited Test Benches"],
                                    ].map(([metric, neura, trad], i) => (
                                        <tr key={i} className="hover:bg-secondary/30 transition-colors">
                                            <td className="p-6 font-medium text-foreground">{metric}</td>
                                            <td className="p-6 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/5">{neura}</td>
                                            <td className="p-6 text-muted-foreground">{trad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* Fast Facts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Technology", value: "SkyWater 130nm" },
                        { label: "Frequency", value: "100 MHz (Worst Case)" },
                        { label: "Area Efficiency", value: "High Density" },
                        { label: "Power", value: "Low Power Design" },
                    ].map((fact, i) => (
                        <GlassCard key={i} className="p-6 flex flex-col items-center text-center hover:bg-secondary/50 transition-colors">
                            <div className="text-muted-foreground text-sm mb-2 uppercase tracking-wider">{fact.label}</div>
                            <div className="text-xl font-bold text-foreground">{fact.value}</div>
                        </GlassCard>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <GlassCard className="w-full max-w-3xl p-8 md:p-12 text-center bg-gradient-to-b from-emerald-900/10 to-transparent border-emerald-500/20">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Ready to Tapeout?
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                            Get the full package today. RTL, testbenches, and documentation ready for immediate integration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-emerald-500/20">
                                    Contact Sales
                                </Button>
                            </Link>
                            <Link href="/technology">
                                <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-accent rounded-full px-8 h-12 text-base font-medium">
                                    Technical Deep Dive
                                </Button>
                            </Link>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
