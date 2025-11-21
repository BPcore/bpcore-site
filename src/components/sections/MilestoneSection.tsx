"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap, ShieldCheck } from "lucide-react";

export function MilestoneSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Production Milestone
                </h2>
                <p className="text-zinc-400 max-w-2xl">
                    100 MHz validated on Sky130 technology with 3-stage pipeline
                    architecture.
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
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-zinc-500 uppercase bg-zinc-800/50">
                                    <tr>
                                        <th className="px-4 py-3 rounded-l-lg">Corner</th>
                                        <th className="px-4 py-3">Frequency</th>
                                        <th className="px-4 py-3">WNS</th>
                                        <th className="px-4 py-3">Margin</th>
                                        <th className="px-4 py-3 rounded-r-lg">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    <tr className="bg-zinc-900/20 hover:bg-zinc-800/30 transition-colors">
                                        <td className="px-4 py-4 font-medium text-white">
                                            TT (25°C, 1.80V)
                                        </td>
                                        <td className="px-4 py-4 font-mono text-emerald-400">
                                            137 MHz
                                        </td>
                                        <td className="px-4 py-4 font-mono text-emerald-400">
                                            +2.71ns
                                        </td>
                                        <td className="px-4 py-4 text-zinc-300">+37%</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Signoff-Ready
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="bg-zinc-900/20 hover:bg-zinc-800/30 transition-colors">
                                        <td className="px-4 py-4 font-medium text-white">
                                            FF (-40°C, 1.95V)
                                        </td>
                                        <td className="px-4 py-4 font-mono text-emerald-400">
                                            178 MHz
                                        </td>
                                        <td className="px-4 py-4 font-mono text-emerald-400">
                                            +4.37ns
                                        </td>
                                        <td className="px-4 py-4 text-zinc-300">+78%</td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                                Signoff-Ready
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-auto pt-6 text-xs text-zinc-500">
                            * Post-placement timing with wire delay estimation (10-20%
                            pessimistic)
                        </div>
                    </GlassCard>
                </div>

                {/* Medium Item: Pipeline */}
                <div className="md:col-span-1 row-span-1">
                    <GlassCard className="h-full flex flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-500" />
                            <h3 className="text-lg font-medium text-white">
                                3-Stage Pipeline
                            </h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="flex items-center gap-2 text-sm">
                                <div className="px-3 py-2 bg-zinc-800 rounded border border-zinc-700 text-zinc-300">
                                    Router
                                </div>
                                <div className="h-px w-4 bg-zinc-600" />
                                <div className="px-3 py-2 bg-zinc-800 rounded border border-zinc-700 text-zinc-300">
                                    FIFO
                                </div>
                                <div className="h-px w-4 bg-zinc-600" />
                                <div className="px-3 py-2 bg-zinc-800 rounded border border-zinc-700 text-zinc-300">
                                    PE
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">62%</div>
                            <div className="text-xs text-zinc-500">
                                Critical Path Reduction
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Small Item: CI Status */}
                <div className="md:col-span-1 row-span-1">
                    <GlassCard className="h-full flex flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-500" />
                            <h3 className="text-lg font-medium text-white">CI Protection</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">Status</span>
                                <span className="text-emerald-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Active
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">Threshold</span>
                                <span className="text-zinc-200 font-mono">TT ≥ +2.0ns</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">Last Run</span>
                                <span className="text-zinc-200">2h ago</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </BentoGrid>
        </section>
    );
}
