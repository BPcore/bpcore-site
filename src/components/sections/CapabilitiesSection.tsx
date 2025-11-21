"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

export function CapabilitiesSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
            {/* Key Capabilities */}
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Key Capabilities
                </h2>
                <GlassCard className="overflow-hidden p-0 border-zinc-800" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-6 font-semibold">Capability</th>
                                    <th className="p-6 font-semibold">Implementation</th>
                                    <th className="p-6 font-semibold">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300 divide-y divide-zinc-800">
                                {[
                                    ["100 MHz Production Timing", "3-stage pipeline: router input + FIFO write optimization", "Post-placement signoff @ TT (137 MHz +37%), FF (178 MHz +78%)"],
                                    ["Modular Mesh", "Scalable 2×2→4×4 topology without architecture rewiring", "~3.6× throughput @ 2×2, ~13× @ 4×4"],
                                    ["Int8→Int32 MAC", "Dense kernel packing optimized for GEMM, MLP, conv tiling", "2–3× density vs. int32 native"],
                                    ["Sparsity Skipping", "Adaptive FSM + bitmap RLE decode enables zero-lane masking", "1.5–2.5× speedup on sparse kernels"],
                                    ["Deterministic Validation", "Dual-run A/B protocol suite (byte-identical CSVs)", "Confidence artifacts for internal/customer diligence"],
                                    ["DVFS & Gating", "Multi-domain clock/reset wrappers + internal gating stubs", "10–20% idle power reduction"],
                                    ["Full RTL Source", "Human-readable Verilog/SystemVerilog hierarchy", "Audit, customize, extend. No black boxes."],
                                    ["Integration Collateral", "Testbenches, workload generators, formal properties", "< 1 day bring-up. Structured validation flow."],
                                ].map(([cap, imp, impact], i) => (
                                    <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-6 font-medium text-white">{cap}</td>
                                        <td className="p-6">{imp}</td>
                                        <td className="p-6 text-emerald-400/80">{impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Why This Matters */}
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Why This Matters
                </h2>
                <GlassCard className="overflow-hidden p-0 border-zinc-800" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-6 font-semibold">Challenge</th>
                                    <th className="p-6 font-semibold">Legacy IP Approach</th>
                                    <th className="p-6 font-semibold">NeuraEdge™ Solution</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300 divide-y divide-zinc-800">
                                {[
                                    ["Long integration cycles", "Months of ad-hoc harness scripting", "Turn-key adapter + deterministic suites (< 1 day)"],
                                    ["Confidence & sign-off risk", "Limited vendor validation", "Structured artifacts (CSV, logs, formal proofs)"],
                                    ["Timing closure", "Vendor black-box, hard to optimize", "Full RTL; pipeline defines; post-placement validated"],
                                    ["Recurring cost burden", "Per-unit royalties compound", "One-time acquisition; zero variable fees"],
                                    ["Customization constraints", "Vendor gating; contract renegotiation", "Unlimited modification rights; your roadmap control"],
                                    ["Power & efficiency", "Fixed compute; sparsity bolted on", "Sparsity + gating + DVFS hooks pre-integrated"],
                                ].map(([chal, legacy, sol], i) => (
                                    <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-6 font-medium text-white">{chal}</td>
                                        <td className="p-6 text-red-400/70">{legacy}</td>
                                        <td className="p-6 text-emerald-400 font-medium">{sol}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Fast Facts */}
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Fast Facts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Frequency: 100 MHz validated @ TT (137 MHz +37%), FF (178 MHz +78%)",
                        "Pipeline: 3-stage (router input + FIFO write) → 62% critical path reduction",
                        "Power: ~20% overhead for 10% frequency gain (3.0 MHz per mW)",
                        "Area: +3.5% die area (+576 FFs per router)",
                        "CI: Nightly regression with automated thresholds",
                        "Bring-up: < 1 day with provided harness & protocol suite",
                        "Validation: ~2 minutes protocol determinism run",
                        "Mesh Scaling: 2×2 ≈ 3.6× throughput, 4×4 ≈ 13×",
                        "Sparsity Uplift: 1.5–2.5× on sparse kernels",
                        "Integration: Full turn-key simulation, workloads, formal collateral"
                    ].map((fact, i) => (
                        <GlassCard key={i} className="p-6 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors">
                            <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 text-sm leading-relaxed">{fact}</span>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* Ready to Tapeout CTA */}
            <GlassCard className="p-8 md:p-12 text-center space-y-8 border-emerald-500/30 bg-gradient-to-b from-emerald-900/10 to-transparent">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Tapeout?
                    </h2>
                    <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-sm border border-emerald-500/30">
                        100 MHz Production Validation: Complete ✅
                    </div>
                </div>

                <div className="max-w-2xl mx-auto space-y-2 text-zinc-300">
                    <p className="text-lg font-medium text-white">
                        Sky130 timing signoff with 3-stage pipeline architecture
                    </p>
                    <p>
                        TT @ 137 MHz (+37% margin) | FF @ 178 MHz (+78% margin)
                    </p>
                    <p className="text-sm text-zinc-400">
                        Post-placement ✅ | CI-protected ✅ | Production-ready ✅
                    </p>
                </div>

                <div className="pt-4">
                    <Link href="/contact">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-emerald-500/20">
                            Request Evaluation <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <p className="mt-4 text-xs text-zinc-500">
                        Response within 1 business day.
                    </p>
                </div>
            </GlassCard>
        </section>
    );
}
