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
    FileCode,
    Timer,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const specs = {
    milestone: {
        title: "100_mhz_milestone.md",
        content: `## 100 MHz Milestone Achieved (November 2025)

**Production-validated timing on Sky130 technology** with 3-stage pipeline architecture:

| Specification | Value | Notes |
|---------------|-------|-------|
| **TT Corner** | **137 MHz** | +37% margin above 100 MHz target @ 25°C/1.80V |
| **FF Corner** | **178 MHz** | +78% margin above 100 MHz target @ -40°C/1.95V |
| **Post-placement** | **Zero degradation** | Synthesis-to-placement correlation verified on TT |
| **CI Protection** | **Nightly regression** | Automated thresholds: TT ≥ +2.0ns, FF ≥ +4.0ns |
| **Overhead** | **+3.5% area, ~20% power** | Favorable trade-off for 10% frequency gain |

### Pipeline Architecture
- **Stage 1**: Router input pipeline (\`ENABLE_PIPELINE_ROUTER=1\`) — 45% critical path reduction
- **Stage 2**: FIFO write pipeline (\`ENABLE_PIPELINE_FIFO_WR=1\`) — 62% total path reduction
- **Result**: Deterministic 100 MHz operation on typical and fast process corners

**Efficiency**: 3.0 MHz per mW, 0.36 MHz per % chip power — production-ready for tapeout.

**Documentation**: [\`POWER_AREA_ANALYSIS_3STAGE.md\`](POWER_AREA_ANALYSIS_3STAGE.md) | [\`CI_100MHZ_VALIDATION.md\`](CI_100MHZ_VALIDATION.md) | [\`sta_timing_roadmap.md\`](sta_timing_roadmap.md)`,
    },
    architecture: {
        title: "architecture_overview.md",
        content: `## Architecture Overview

NeauraEdge is a **tile-based neural processing fabric** with a parameterized 2D mesh of 5-port routers (N/E/S/W/Local) interconnecting tiles that contain:
- Processing Elements (PEs) with int8→int32 MAC datapaths
- Local buffering and flow control
- Sparsity-aware execution logic

### Design Philosophy
- ✅ **Scalability**: 1×1 → N×N mesh growth without topology redesign
- ✅ **Determinism**: Reproducible behavior with byte-identical validation
- ✅ **Modularity**: Clean interfaces for independent tile/router verification
- ✅ **Efficiency**: Sparsity-aware paths reduce unnecessary computation
- ✅ **Production-ready**: 100 MHz validated timing with CI protection

## Core Elements

### Computation
- **Int8→Int32 MAC datapaths** — Optimized for GEMM/MLP inference
- **Sparsity gating** — Optional zero-skipping for power efficiency
- **Deterministic accumulation** — Predictable numeric behavior

### Interconnect
- **XY deterministic routing** — Manhattan distance-based packet routing
- **Ready/valid handshakes** — Backpressure-aware flow control
- **Optional credit-based throttling** — Bounded inflight packet control

### Control & Safety
- **Skid-buffered ingestion** — Prevents timing races on header capture
- **Dimension clamping** — Bounds checking for loop safety
- **Watchdog monitoring** — No-progress detection (simulation)

### Validation & Timing
- **Production-grade timing** — 100 MHz validated on Sky130 with post-placement signoff
- **3-stage pipeline** — Router input + FIFO write stages for critical path optimization
- **Latency & contention modeling** — Injectable delay/throttle knobs for realistic evaluation`,
    },
    modules: {
        title: "rtl_module_map.md",
        content: `## RTL Module Map

### Router & Network-on-Chip

| Function | Module | Path |
|----------|--------|------|
| **Router mesh** | \`router_mesh.v\` | [\`rtl/router/router_mesh.v\`](../rtl/router/router_mesh.v) |
| **Router cell** | \`router_cell.v\` | [\`rtl/router/router_cell.v\`](../rtl/router/router_cell.v) |
| **FIFO buffer** | \`fifo.v\` | [\`rtl/router/fifo.v\`](../rtl/router/fifo.v) |
| **NoC router (basic)** | \`noc_router.v\` | [\`rtl/noc/noc_router.v\`](../rtl/noc/noc_router.v) |
| **NoC router (enhanced)** | \`noc_router_enhanced.v\` | [\`rtl/noc/noc_router_enhanced.v\`](../rtl/noc/noc_router_enhanced.v) |

### Processing Elements

| Function | Module | Path |
|----------|--------|------|
| **PE (basic)** | \`neuraedge_pe.v\` | [\`rtl/pe/neuraedge_pe.v\`](../rtl/pe/neuraedge_pe.v) |
| **PE (enhanced)** | \`neuraedge_pe_enhanced.v\` | [\`rtl/pe/neuraedge_pe_enhanced.v\`](../rtl/pe/neuraedge_pe_enhanced.v) |
| **Sparsity decoder** | \`bitmap_rle_decoder.v\` | [\`rtl/common/bitmap_rle_decoder.v\`](../rtl/common/bitmap_rle_decoder.v) |

### Integration & Power

| Function | Module | Path |
|----------|--------|------|
| **Top wrapper** | \`neuraedge_top.v\` | [\`rtl/top/neuraedge_top.v\`](../rtl/top/neuraedge_top.v) |
| **NPU top** | \`npu_top.v\` | [\`rtl/npu_top.v\`](../rtl/npu_top.v) |
| **Clock gating** | \`clock_gate_wrapper.v\` | [\`rtl/common/clock_gate_wrapper.v\`](../rtl/common/clock_gate_wrapper.v) |`,
    },
    datapath: {
        title: "data_path_flow.md",
        content: `## Data Path Flow

### Execution Pipeline

\`\`\`
1. Header Parse
   ↓ Extract opcode, M/N/K dimensions
   ↓ Apply dimension clamping
   
2. Skid Buffer Capture
   ↓ Reliable ingestion with internal FSM
   ↓ Single-cycle capture contract
   
3. FIFO Staging
   ↓ Router/adapter boundary buffering
   ↓ Backpressure handling
   
4. PE MAC Accumulation
   ↓ Int8→Int32 accumulation
   ↓ Optional sparsity masking
   
5. Optional Activation
   ↓ Second-layer transform (MLP)
   ↓ ReLU or other activation
   
6. Digest Reduction
   ↓ XOR fold of int32 outputs
   ↓ Emit verification signature
\`\`\`

## Sparsity Path

### Sparsity Execution Stages

| Stage | Module | Purpose |
|-------|--------|---------|
| **Expand** | \`bitmap_rle_decoder\` | Reconstruct active lane mask from compressed bitmap/RLE |
| **Select** | Adaptive FSM | Gate zero lanes; prevent unnecessary MAC operations |
| **Compute** | PE accumulator | Execute only non-zero MACs with active lanes |
| **Reduce** | Digest logic | Fold outputs for golden reference comparison |

### Sparsity Benefits
- ✅ **10-30% cycle reduction** — Depends on input zero density
- ✅ **Power savings** — Skip inactive MACs and memory traffic
- ✅ **Drop-in integration** — Optional enable; no mesh rewiring required`,
    },
    parameters: {
        title: "configuration.md",
        content: `## Configuration Parameters

### Production Configuration (100 MHz Validated)

| Parameter | Value | Effect |
|-----------|-------|--------|
| **ENABLE_PIPELINE_ROUTER** | **1** | **Router input pipeline — reduces critical path by 45%** |
| **ENABLE_PIPELINE_FIFO_WR** | **1** | **FIFO write pipeline — achieves 100 MHz @ TT/FF corners** |
| **PERIOD_NS** | **10.0** | **100 MHz target frequency** |

### All Configuration Parameters

| Parameter | Purpose | Trade-off | Recommended Range |
|-----------|---------|-----------|-------------------|
| **MESH_ROWS** | Mesh height | Larger ↑ throughput, ↑ area & latency | 1-6 |
| **MESH_COLS** | Mesh width | Larger ↑ throughput, ↑ area & latency | 1-6 |
| **FLIT_W** | Flit width (bits) | Wider ↑ payload, ↑ timing risk | 32-128 (64 default) |
| **FIFO_DEPTH** | Buffer depth | Deeper ↑ area, ↓ stalls | 2-16 (4 default) |
| **USE_CREDIT** | Credit-based flow control | Adds counters & logic | 0/1 |
| **PIPELINE_OUTPUT** | Output register stage | Adds regs; timing relief | 0/1 |
| **ENABLE_PIPELINE_ROUTER** | Router input pipeline | **45% path reduction** | **1 (production)** |
| **ENABLE_PIPELINE_FIFO_WR** | FIFO write pipeline | **62% total path reduction** | **1 (production)** |
| **GATE_INTERNAL_CLOCKS** | Clock gating | Control complexity | 0/1 |
| **SPARSITY_ENABLE** | Zero-skipping | Pipeline gating overhead | 0/1 |
| **CREDIT_INIT** | Initial credits | Higher for latency tolerance | 2-8 (4 default) |

## Parameter Interaction Matrix

### Design Guidelines

| Parameter Pair | Interaction | Guideline |
|----------------|-------------|-----------|
| **FLIT_W vs. Timing** | Wider increases mux & mask delay | >64 bits: enable PIPELINE_OUTPUT |
| **FIFO_DEPTH vs. Latency** | Deeper reduces stalls until saturation | Start at 4; raise if watermark == depth-1 |
| **MESH_SIZE vs. Credit Need** | Larger meshes amplify contention | Enable USE_CREDIT for ≥3×3 meshes |
| **SPARSITY_ENABLE vs. FLIT_W** | Wider flits pack more zeros | Pre-register sparsity mask for FLIT_W>64 |
| **MESH_SIZE vs. POWER** | More routers increase idle dynamic | Use GATE_INTERNAL_CLOCKS beyond 2×2 |
| **Pipeline Stages vs. Freq** | More stages enable higher clocks | Both pipeline enables needed for 100 MHz |`,
    },
    integration: {
        title: "integration.md",
        content: `## Integration Pitfalls & Quick Fixes

| Pitfall | Symptom | Quick Fix |
|---------|---------|-----------|
| **100 MHz timing failure** | Negative slack @ 10ns period | Enable both ENABLE_PIPELINE_ROUTER=1 and ENABLE_PIPELINE_FIFO_WR=1 |
| **Missing PIPELINE_OUTPUT** | Negative slack on wide flit mux | Enable PIPELINE_OUTPUT for FLIT_W>64 |
| **Under-sized FIFO_DEPTH** | Early backpressure & stalls | Raise depth selectively (hotspot FIFOs only) |
| **Omitted credit gating** | Burst saturation / fairness issues | Enable USE_CREDIT + tune CREDIT_INIT for ≥3×3 meshes |
| **Skid buffer mis-integration** | Duplicate or lost headers | Maintain single-cycle capture contract (valid held until ready) |

## Interface Summary

### Primary Interfaces

| Interface | Direction | Purpose | Key Signals |
|-----------|-----------|---------|-------------|
| **Local tile** | In/Out | Activation/weight ingress; digest egress | \`local_valid\`, \`local_ready\`, \`local_flit[FLIT_W-1:0]\` |
| **Mesh link (N/E/S/W)** | Bidirectional | Flit movement between routers | \`dir_valid\`, \`dir_ready\`, \`dir_flit[FLIT_W-1:0]\` |
| **Host adapter** | In/Out | Microkernel stream for simulation | \`host_ext_valid\`, \`host_ext_ready\`, \`host_ext_flit\` |
| **Telemetry** | Output | Debug & tuning metrics | \`max_fifo_occ\`, \`router_watermarks\`, \`digest_valid\` |
| **Clock/Reset** | Input | Domain control (DVFS-friendly) | \`clk_mesh\`, \`clk_core\`, \`rst_n\` |

### Signal Conventions
- All data movement follows **ready && valid** handshake protocol
- Sender must hold \`flit\` stable while \`valid=1\` until \`ready=1\`
- Single-cycle capture on \`ready && valid\` assertion`,
    },
    protocols: {
        title: "protocols.md",
        content: `## Flit & Header Encoding

### Header Format (64-bit default)

| Bits | Field | Description |
|------|-------|-------------|
| **63:56** | \`opcode\` | 1=GEMM, 2=MLP2L (extensible for future ops) |
| **55:48** | \`M\` | Rows of A / first layer input length |
| **47:40** | \`N\` | Output columns of B / second layer output length |
| **39:32** | \`K\` | Inner dimension (A cols, B rows) / hidden size |
| **31:0** | \`reserved\` | Future: stride, padding, activation flags |

### Payload Packing (Int8)
- **8 int8 elements per 64-bit flit** — Little-endian (byte 0 in bits [7:0])
- **GEMM order**: A matrix (M×K bytes) → B matrix (K×N bytes)
- **MLP order**: Input (M bytes) → W1 weights (M×K) → W2 weights (K×N)

### Digest Output (64-bit)
- **Bits [63:32]**: Reserved (future CRC32 or extended checksum)
- **Bits [31:0]**: XOR fold of all int32 output values

### Opcode/Issue FSM
High-level control sequencing for opcode handling and compute issue.

**Diagram**: See \`images/opcode_fsm.svg\` for state machine visualization.`,
    },
    synthesis: {
        title: "synthesis_timing.md",
        content: `## Synthesis & Timing

### Sky130 Production Results (100 MHz Target)

| Corner | PVT | WNS (Placed) | Fmax | Critical Path | Status |
|--------|-----|--------------|------|---------------|--------|
| **TT** | 25°C, 1.80V | **+2.71ns** | **137 MHz** | 7.29ns (router→FIFO) | ✅ **Pass** |
| **FF** | -40°C, 1.95V | **+4.37ns** | **178 MHz** | 5.63ns (router→FIFO) | ✅ **Pass** |
| **SS** | 100°C, 1.60V | -3.10ns | 76 MHz | 13.10ns | ⚠️ Future work |

### Critical Path Optimization
- **Before pipeline**: 19ns (TT), 34ns (SS) — single-cycle din_valid → memory write
- **After 3-stage**: 7.3ns (TT), 13ns (SS) — **62% reduction** via strategic register insertion
- **Bottleneck eliminated**: nor3b gate (65 fanout) broken with FIFO write pipeline

### Synthesis Flow
- **Tool**: Yosys + ABC9 with Sky130 Liberty files
- **Placement**: OpenROAD global placement + wire delay estimation (10-20% pessimistic)
- **Analysis**: OpenSTA with multi-corner validation

### CI Integration
- **Nightly job**: \`sta-100mhz-validation\` runs @ 02:15 UTC
- **Thresholds**: TT ≥ +2.0ns, FF ≥ +4.0ns (post-placement)
- **Enforcement**: CI fails on regression; alerts team via GitHub Actions
- **Artifacts**: Timing reports, CSV logs, dashboard updates

**See**: [\`sta_timing_roadmap.md\`](sta_timing_roadmap.md) for complete timing validation strategy.`,
    },
};

const tabs = [
    { id: "milestone", label: "100 MHz Milestone", icon: Zap },
    { id: "architecture", label: "Architecture", icon: Cpu },
    { id: "modules", label: "RTL Modules", icon: Layers },
    { id: "datapath", label: "Data Path", icon: Activity },
    { id: "parameters", label: "Configuration", icon: Settings },
    { id: "integration", label: "Integration", icon: Network },
    { id: "protocols", label: "Protocols", icon: FileCode },
    { id: "synthesis", label: "Synthesis", icon: Timer },
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
                                    <pre className="text-zinc-300 whitespace-pre-wrap font-mono">
                                        {specs[activeTab].content.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                                            if (part.startsWith("**") && part.endsWith("**")) {
                                                return (
                                                    <span key={i} className="font-bold text-zinc-100">
                                                        {part.slice(2, -2)}
                                                    </span>
                                                );
                                            }
                                            return <span key={i}>{part}</span>;
                                        })}
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
