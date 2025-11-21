"use client";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Cpu, Activity, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                {/* Left Column: Text & CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Production Ready: 100 MHz Validated
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Scalable AI. <br />
                            <span className="text-zinc-500">Zero Royalty.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            Production-ready RISC-V NPU IP. One-time acquisition, full source
                            access, and deterministic performance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium"
                        >
                            Get Evaluation
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full px-8 h-12 text-base font-medium"
                        >
                            View Specs
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8"
                    >
                        {[
                            { label: "Process", value: "Sky130" },
                            { label: "Frequency", value: "137 MHz TT" },
                            { label: "Architecture", value: "3-Stage" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-zinc-500 text-sm">{stat.label}</span>
                                <span className="text-zinc-200 font-mono font-medium text-lg">
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Visual Widgets */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlassCard className="relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Cpu className="w-24 h-24 text-white" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-zinc-100 font-medium">System Status</h3>
                                    <Activity className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-500">Core Voltage</span>
                                        <span className="text-emerald-400 font-mono">1.80V</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-zinc-500">Clock Jitter</span>
                                        <span className="text-emerald-400 font-mono">
                                            &lt; 50ps
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
                                        <div className="h-full bg-emerald-500 w-[92%] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <GlassCard>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-zinc-800/50 rounded-lg border border-zinc-700">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-100 font-medium">
                                        Nightly Regression
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Latest run passed with +2.71ns margin on TT corner.
                                    </p>
                                    <div className="mt-3 flex gap-2">
                                        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded border border-zinc-700">
                                            SHA: 7f3a9b
                                        </span>
                                        <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">
                                            PASS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
