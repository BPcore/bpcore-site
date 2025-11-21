"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap, ShieldCheck, FileText } from "lucide-react";

export function MilestoneSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Production Milestone: 100 MHz Validated
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                    Timing signoff achieved on Sky130 technology with 3-stage pipeline architecture (November 2025).
                </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {/* Large Item: Timing Table */}
                <div className="md:col-span-2 row-span-1 md:row-span-2">
                    <GlassCard className="h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <Clock className="w-5 h-5 text-emerald-500" />
                            <h3 className="text-lg font-medium text-white">
                                Timing Signoff (Sky130)
                            </h3>
                        </div>
                        <div className="overflow-x-auto border border-zinc-800 rounded-lg">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-zinc-500 uppercase bg-zinc-800/50">
                                    <tr>
                                        <th className="px-6 py-4">Corner</th>
                                        <th className="px-6 py-4">Frequency</th>
                                        <th className="px-6 py-4">WNS</th>
                                        <th className="px-6 py-4">Margin</th>
                                        <th className="px-6 py-4">Pipeline</th>
                                        <th className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    <tr className="bg-zinc-900/20 hover:bg-zinc-800/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">
                                            TT (25°C, 1.80V)
                                        </td>
                                        <td className="px-6 py-4 font-mono text-emerald-400">
                                            137 MHz
                                        </td>
                                        <td className="px-6 py-4 font-mono text-emerald-400">
                                            +2.71ns
                                        </td>
                                        <td className="px-6 py-4 text-zinc-300">+37%</td>
                                        <td className="px-6 py-4 text-zinc-400">3-stage</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Signoff-Ready
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-zinc-900/20 hover:bg-zinc-800/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">
                                            FF (-40°C, 1.95V)
                                        </td>
                                        <td className="px-6 py-4 font-mono text-emerald-400">
                                            178 MHz
                                        </td>
                                        <td className="px-6 py-4 font-mono text-emerald-400">
                                            +4.37ns
                                        </td>
                                        <td className="px-6 py-4 text-zinc-300">+78%</td>
                                        <td className="px-6 py-4 text-zinc-400">3-stage</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Signoff-Ready
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-auto pt-6 space-y-4">
                            <div className="text-xs text-zinc-500">
                                * Post-placement timing with wire delay estimation (10-20% pessimistic)
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["POWER_AREA_ANALYSIS_3STAGE.md", "CI_100MHZ_VALIDATION.md", "sta_timing_roadmap.md"].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-400">
                                        <FileText className="w-3 h-3" />
                                        {doc}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Medium Item: Pipeline */}
                <div className="md:col-span-1 row-span-1">
                    <GlassCard className="h-full flex flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-500" />
                            <h3 className="text-lg font-medium text-white">
                                Technical Achievement
                            </h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-1">62%</div>
                                <div className="text-sm text-zinc-400">
                                    Critical Path Reduction
                                </div>
                                <div className="text-xs text-zinc-500 mt-2 max-w-[200px] mx-auto">
                                    Strategic pipeline insertion enabling deterministic 100 MHz operation.
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Small Item: Validation Checklist */}
                <div className="md:col-span-1 row-span-1">
                    <GlassCard className="h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-5 h-5 text-blue-500" />
                            <h3 className="text-lg font-medium text-white">Production Validation</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-zinc-300">
                            {[
                                "Zero synthesis-to-placement degradation",
                                "CI-protected nightly regression",
                                "Power/area overhead: +3.5% area, ~20% power",
                                "Efficiency: 3.0 MHz per mW"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </BentoGrid>
        </section>
    );
}
