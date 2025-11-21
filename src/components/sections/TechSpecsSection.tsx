"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Zap, Layers, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const specs = {
    architecture: {
        title: "architecture.json",
        content: `{
  "topology": "2D Mesh NoC",
  "router": {
    "ports": 5,
    "algorithm": "XY Dimension Order",
    "pipeline": "3-stage (Input+FIFO+PE)"
  },
  "compute_tile": {
    "precision": "int8 -> int32",
    "sparsity": "bitmap_rle_decoder",
    "mac_units": "Configurable (default 64)"
  }
}`,
    },
    interfaces: {
        title: "interfaces.sv",
        content: `module neuraedge_tile (
  input  logic           clk_i,
  input  logic           rst_ni,
  // Mesh Links (N/E/S/W)
  input  logic [63:0]    noc_in_flit [4],
  input  logic           noc_in_valid [4],
  output logic           noc_in_ready [4],
  // Local Compute
  input  logic [63:0]    local_in_flit,
  output logic [63:0]    local_out_flit
);`,
    },
    power: {
        title: "power_analysis.log",
        content: `[INFO] Power Analysis Report (Sky130)
-------------------------------------
Corner:        TT (25C, 1.80V)
Frequency:     100 MHz
Total Power:   12.4 mW (per tile)
Efficiency:    3.0 MHz/mW

[BREAKDOWN]
Dynamic:       8.2 mW (66%)
Leakage:       4.2 mW (34%)
Clock Gating:  Enabled (92% coverage)`,
    },
};

export function TechSpecsSection() {
    const [activeTab, setActiveTab] = useState<keyof typeof specs>("architecture");

    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Navigation */}
                <div className="lg:col-span-4 space-y-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Technical Specs
                        </h2>
                        <p className="text-zinc-400">
                            Deep dive into the NeuraEdge architecture. Full transparency, down
                            to the RTL.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => setActiveTab("architecture")}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
                                activeTab === "architecture"
                                    ? "bg-zinc-800 text-white border border-zinc-700"
                                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                            )}
                        >
                            <Cpu className="w-5 h-5" />
                            <span className="font-medium">Architecture</span>
                            {activeTab === "architecture" && (
                                <ArrowRight className="w-4 h-4 ml-auto text-emerald-500" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("interfaces")}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
                                activeTab === "interfaces"
                                    ? "bg-zinc-800 text-white border border-zinc-700"
                                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                            )}
                        >
                            <Layers className="w-5 h-5" />
                            <span className="font-medium">Interfaces</span>
                            {activeTab === "interfaces" && (
                                <ArrowRight className="w-4 h-4 ml-auto text-emerald-500" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("power")}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
                                activeTab === "power"
                                    ? "bg-zinc-800 text-white border border-zinc-700"
                                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                            )}
                        >
                            <Zap className="w-5 h-5" />
                            <span className="font-medium">Power & Area</span>
                            {activeTab === "power" && (
                                <ArrowRight className="w-4 h-4 ml-auto text-emerald-500" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Right Column: Terminal */}
                <div className="lg:col-span-8">
                    <GlassCard className="h-full min-h-[500px] flex flex-col overflow-hidden p-0" noPadding>
                        {/* Terminal Header */}
                        <div className="flex items-center px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                            <div className="flex gap-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono bg-zinc-950/50 px-3 py-1 rounded border border-zinc-800">
                                <Terminal className="w-3 h-3" />
                                ~/neuraedge/specs/{specs[activeTab].title}
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="flex-1 p-6 bg-zinc-950/50 font-mono text-sm overflow-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <pre className="text-zinc-300">
                                        <code>{specs[activeTab].content}</code>
                                    </pre>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
