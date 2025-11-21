"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import {
    Terminal,
    Cpu,
    Zap,
    Layers,
    ArrowRight,
    Activity,
    Settings,
    Network,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const specs = {
    milestone: {
        title: "100mhz_validation.log",
        content: `[SUCCESS] Production Validation Complete (Nov 2025)
---------------------------------------------------
Target:       Sky130 Process Node
Architecture: 3-Stage Pipeline (Router+FIFO+PE)

[TIMING RESULTS]
Corner  | PVT             | Freq    | Margin
--------|-----------------|---------|-------
TT      | 25C, 1.80V      | 137 MHz | +37%
FF      | -40C, 1.95V     | 178 MHz | +78%

[STATUS]
Post-Placement: ✅ Zero Degradation
CI Protection:  ✅ Nightly Regression (TT>=2.0ns)
Power Overhead: ~20% for 10% Freq Gain
Area Overhead:  +3.5% (Negligible)

[CONCLUSION]
Signoff-Ready. Deterministic 100 MHz operation confirmed.`,
    },
    architecture: {
        title: "system_overview.json",
        content: `{
  "topology": "2D Mesh NoC (XY Routing)",
  "philosophy": [
    "Scalability: 1x1 -> NxN without redesign",
    "Determinism: Byte-identical validation",
    "Modularity: Clean tile/router interfaces",
    "Efficiency: Sparsity-aware execution"
  ],
  "core_elements": {
    "compute": "Int8->Int32 MAC, Sparsity Gating",
    "interconnect": "5-port Router, Ready/Valid Handshake",
    "safety": "Skid Buffers, Watchdog, Dim Clamping"
  }
}`,
    },
    modules: {
        title: "rtl_map.tree",
        content: `├── rtl
│   ├── router
│   │   ├── router_mesh.v      # Mesh topology
│   │   ├── router_cell.v      # 5-port router
│   │   └── fifo.v             # Elastic buffering
│   ├── pe
│   │   ├── neuraedge_pe.v     # Compute kernel
│   │   └── bitmap_rle_decoder # Sparsity logic
│   ├── top
│   │   └── neuraedge_top.v    # Integration wrapper
│   └── common
│       └── clock_gate_wrapper # Power management
└── docs
    └── ascii_block_diagram.md`,
    },
    datapath: {
        title: "pipeline_trace.log",
        content: `[PIPELINE STAGES]
1. Header Parse      -> Extract Opcode, M/N/K
2. Skid Buffer       -> Capture (Single-Cycle)
3. FIFO Staging      -> Backpressure Handling
4. PE Execution      -> Int8 MAC + Sparsity Mask
5. Activation        -> ReLU / Transform
6. Digest Reduction  -> XOR Fold Verification

[SPARSITY FLOW]
Expand (RLE) -> Select (FSM) -> Compute (MAC) -> Reduce
>> Benefit: 10-30% Cycle Reduction, Power Savings`,
    },
    parameters: {
        title: "config.params",
        content: `# Production Configuration (100 MHz)
ENABLE_PIPELINE_ROUTER  = 1  # -45% Critical Path
ENABLE_PIPELINE_FIFO_WR = 1  # -62% Total Path
PERIOD_NS               = 10.0

# Mesh Configuration
MESH_ROWS    = 1..6  # Scalable
MESH_COLS    = 1..6  # Scalable
FLIT_W       = 64    # Default Payload
FIFO_DEPTH   = 4     # Adaptive
USE_CREDIT   = 0/1   # Flow Control
SPARSITY_EN  = 0/1   # Power/Perf Opt`,
    },
    integration: {
        title: "interface_summary.sv",
        content: `// Primary Interfaces
input  logic        clk_mesh, clk_core, rst_n;

// Mesh Links (N/E/S/W)
inout  wire [63:0]  noc_flit [4];
inout  wire         noc_valid [4], noc_ready [4];

// Local Tile (Compute)
input  logic [63:0] local_in_flit;
output logic [63:0] local_out_flit;

// Telemetry
output logic        max_fifo_occ;
output logic        digest_valid;

/* PITFALLS & FIXES
 * 1. Timing Fail? -> Enable Pipeline Stages
 * 2. Stalls?      -> Check FIFO_DEPTH & Credits
 * 3. Data Loss?   -> Verify Skid Buffer Contract
 */`,
    },
};

const tabs = [
    { id: "milestone", label: "100 MHz Milestone", icon: Zap },
    { id: "architecture", label: "Architecture", icon: Cpu },
    { id: "modules", label: "RTL Modules", icon: Layers },
    { id: "datapath", label: "Data Path", icon: Activity },
    { id: "parameters", label: "Configuration", icon: Settings },
    { id: "integration", label: "Integration", icon: Network },
] as const;

export function TechSpecsSection() {
    const [activeTab, setActiveTab] =
        useState<keyof typeof specs>("milestone");

    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Navigation */}
                <div className="lg:col-span-4 space-y-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Technology
                        </h2>
                        <p className="text-zinc-400">
                            Deep dive into the NeuraEdge architecture. Full transparency, down
                            to the RTL.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
                                    activeTab === tab.id
                                        ? "bg-zinc-800 text-white border border-zinc-700"
                                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                                )}
                            >
                                <tab.icon className="w-5 h-5" />
                                <span className="font-medium">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <ArrowRight className="w-4 h-4 ml-auto text-emerald-500" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Terminal */}
                <div className="lg:col-span-8">
                    <GlassCard
                        className="h-full min-h-[600px] flex flex-col overflow-hidden p-0"
                        noPadding
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                            <div className="flex gap-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono bg-zinc-950/50 px-3 py-1 rounded border border-zinc-800">
                                <Terminal className="w-3 h-3" />
                                ~/neuraedge/tech/{specs[activeTab].title}
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
                                    <pre className="text-zinc-300 whitespace-pre-wrap">
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
