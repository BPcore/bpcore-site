"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Cpu, Layers, Zap, Code, Terminal, ArrowRight, CheckCircle, AlertTriangle, Forward } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
    {
        id: "architecture",
        label: "Architecture",
        icon: Cpu,
        content: `# NeuraEdge™ Architecture
## Tile-Based Scalability
The NeuraEdge NPU is built on a modular tile-based architecture connected by a high-bandwidth 2D mesh network.

- **Compute Tile**: Each tile contains a RISC-V controller and a systolic array for Int8 matrix multiplication.
- **Mesh Interconnect**: A low-latency XY-routing mesh connects tiles, enabling linear performance scaling.
- **Distributed Memory**: SRAM is distributed across tiles to maximize data locality and minimize off-chip access.

## Key Features
- **Int8 Quantization**: Native support for Int8 inference with Int32 accumulation.
- **Sparsity Awareness**: Hardware support for skipping zero-valued activations, boosting efficiency.
- **DVFS Support**: Dynamic Voltage and Frequency Scaling hooks for power optimization.
`
    },
    {
        id: "isa",
        label: "Instruction Set",
        icon: Code,
        content: `# Instruction Set Architecture (ISA)
## Custom Extensions
NeuraEdge extends the standard RISC-V ISA with custom instructions optimized for neural network workloads.

| Mnemonic | Operands | Description |
| :--- | :--- | :--- |
| **MVM.8** | rd, rs1, rs2 | Matrix-Vector Multiplication (Int8) |
| **CONV.2D** | rd, rs1, rs2 | 2D Convolution with stride support |
| **RELU** | rd, rs1 | Rectified Linear Unit activation |
| **POOL.MAX** | rd, rs1 | Max Pooling operation |
| **DMA.LD** | rd, imm | Load data from external memory to tile SRAM |

## Programming Model
Developers can target the NPU using standard C/C++ with intrinsic functions or via our optimized compiler stack.
`
    },
    {
        id: "physical",
        label: "Physical Implementation",
        icon: Layers,
        content: `# Physical Implementation Stats
## Process Technology
Validated on **SkyWater 130nm** (Open Source PDK).

- **Area**: 2.4 mm² per tile (approx.)
- **Frequency**: 100 MHz (Worst Case), 178 MHz (Typical)
- **Power**: < 50mW per tile @ 100 MHz

## Integration
- **Interface**: Standard AXI4-Stream for data, APB for control.
- **Clock Domains**: Separate domains for core logic and interconnect.
- **Testability**: Built-in scan chains and BIST (Built-In Self-Test).
`
    },
    {
        id: "performance",
        label: "Performance",
        icon: Zap,
        content: `# Performance Benchmarks
## Throughput
Measured on ResNet-50 and MobileNetV2 workloads.

| Model | TOPS (Peak) | FPS (Batch=1) | Efficiency (TOPS/W) |
| :--- | :--- | :--- | :--- |
| **ResNet-50** | 0.5 | 120 | 2.5 |
| **MobileNetV2** | 0.4 | 180 | 3.1 |
| **YOLOv3-Tiny** | 0.6 | 210 | 2.8 |

## Latency
- **Single Tile**: < 1ms for small keyword spotting models.
- **4x4 Mesh**: < 5ms for object detection tasks.
`
    },
    {
        id: "protocols",
        label: "Protocols",
        icon: Forward,
        content: `# Interface Protocols
## Control Plane (APB)
Standard APB3 slave interface for configuration and status monitoring.
- **Address Width**: 32-bit
- **Data Width**: 32-bit
- **Registers**: Control, Status, Interrupt Mask, Performance Counters

## Data Plane (AXI-Stream)
High-bandwidth AXI4-Stream interface for streaming input data and weights.
- **Data Width**: 64-bit / 128-bit configurable
- **Flow Control**: TREADY/TVALID handshake
- **Sideband**: TUSER/TLAST for frame delineation
`
    },
    {
        id: "milestone",
        label: "100 MHz Milestone",
        icon: CheckCircle,
        content: `# 100 MHz Production Milestone
## Validation Status
We have successfully closed timing at **100 MHz** on the SkyWater 130nm process node under worst-case PVT conditions.

- **Target**: 100 MHz
- **Achieved (TT)**: 137 MHz (+37% margin)
- **Achieved (FF)**: 178 MHz (+78% margin)
- **Critical Path**: 3-stage pipeline (Router Input -> FIFO Write)

## Signoff Checks
- **LVS/DRC**: Clean
- **Power Analysis**: Within budget
- **Formal Verification**: Pass
`
    }
];

export function TechSpecsSection() {
    const [activeTab, setActiveTab] = useState("architecture");

    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Technical Specifications
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Deep dive into the architecture, instruction set, and physical implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1 space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <GlassCard className="min-h-[600px] p-0 overflow-hidden border-border bg-background/50 backdrop-blur-xl">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="text-xs font-mono text-muted-foreground">
                                    bpcore-silicon-docs ~ {activeTab}
                                </div>
                                <div className="w-12" /> {/* Spacer for centering */}
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 md:p-8 font-mono text-sm overflow-y-auto max-h-[800px]">
                                <div className="space-y-6">
                                    {tabs.find(t => t.id === activeTab)?.content.split('\n').map((line, i) => {
                                        // Handle headers (lines starting with #)
                                        if (line.startsWith('# ')) {
                                            return (
                                                <h2 key={i} className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-8 mb-4 border-b border-emerald-500/20 pb-2">
                                                    {line.replace('# ', '')}
                                                </h2>
                                            );
                                        }
                                        if (line.startsWith('## ')) {
                                            return (
                                                <h3 key={i} className="text-lg font-bold text-foreground mt-6 mb-3">
                                                    {line.replace('## ', '')}
                                                </h3>
                                            );
                                        }

                                        // Handle bullet points
                                        if (line.trim().startsWith('- ')) {
                                            return (
                                                <div key={i} className="flex gap-3 text-muted-foreground pl-4">
                                                    <span className="text-emerald-600 dark:text-emerald-500 mt-1">›</span>
                                                    <span>
                                                        {line.replace('- ', '').split(/(\*\*.*?\*\*)/).map((part, j) => {
                                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                                return <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
                                                            }
                                                            return part;
                                                        })}
                                                    </span>
                                                </div>
                                            );
                                        }

                                        // Handle tables (lines starting with |)
                                        if (line.trim().startsWith('|')) {
                                            // Check if it's a separator line (contains only | - : spaces)
                                            if (/^[\s\|\-\:]+$/.test(line)) return null;

                                            const cells = line.split('|').filter(cell => cell.trim() !== '');
                                            const isHeader = i > 0 && tabs.find(t => t.id === activeTab)?.content.split('\n')[i + 1]?.trim().startsWith('|-');

                                            // If previous line was a table row, don't start a new table, just render row
                                            // But for simplicity in this map, we'll render each row as a div with grid
                                            // A better approach for tables would be parsing the whole block, but for now:

                                            return (
                                                <div key={i} className={`grid grid-cols-${cells.length} gap-4 py-2 border-b border-border ${isHeader ? 'bg-secondary/30 font-bold text-foreground' : 'text-muted-foreground'}`}>
                                                    {cells.map((cell, j) => (
                                                        <div key={j} className="px-2">
                                                            {cell.trim().split(/(\*\*.*?\*\*)/).map((part, k) => {
                                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                                    return <strong key={k} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
                                                                }
                                                                return part;
                                                            })}
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }

                                        // Handle empty lines
                                        if (!line.trim()) return <div key={i} className="h-4" />;

                                        // Default text
                                        return (
                                            <p key={i} className="text-muted-foreground leading-relaxed">
                                                {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
                                                    }
                                                    return part;
                                                })}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
