"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Check, X } from "lucide-react";

export function LicensingSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Licensing Model
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        We invert legacy semiconductor IP economics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Legacy IP */}
                    <GlassCard className="opacity-70 border-zinc-800/50">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-zinc-400">Traditional IP</h3>
                            <p className="text-zinc-500 text-sm mt-1">
                                The old way of doing business.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
                                <span className="text-zinc-500">Cost Model</span>
                                <span className="text-zinc-400">Upfront + Royalties</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
                                <span className="text-zinc-500">Per-Unit Fees</span>
                                <span className="text-red-400/80 flex items-center gap-2">
                                    <X className="w-4 h-4" /> Yes (Volume Escalators)
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
                                <span className="text-zinc-500">Source Access</span>
                                <span className="text-zinc-400">Encrypted / Limited</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
                                <span className="text-zinc-500">Attribution</span>
                                <span className="text-zinc-400">Often Mandated</span>
                            </div>
                        </div>
                    </GlassCard>

                    {/* NeuraEdge */}
                    <GlassCard className="border-emerald-500/30 bg-zinc-900/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white">BPcore NeuraEdge</h3>
                            <p className="text-emerald-400 text-sm mt-1">
                                The new standard.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-700">
                                <span className="text-zinc-300">Cost Model</span>
                                <span className="text-white font-medium">One-Time Acquisition</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-700">
                                <span className="text-zinc-300">Per-Unit Fees</span>
                                <span className="text-emerald-400 flex items-center gap-2 font-medium">
                                    <Check className="w-4 h-4" /> None (Zero Royalty)
                                </span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-700">
                                <span className="text-zinc-300">Source Access</span>
                                <span className="text-white font-medium">Full RTL Source</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-zinc-700">
                                <span className="text-zinc-300">Attribution</span>
                                <span className="text-white font-medium">Not Required</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
