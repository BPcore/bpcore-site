"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Zap, Check, Activity, BarChart2, Layers, Shield, Clock, Cpu, AlertTriangle } from "lucide-react";

export function PerformanceSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Performance & Integration
                </h2>
                <p className="text-zinc-400 max-w-3xl text-lg">
                    Production-validated, reproducible integration: move from evaluation to silicon with deterministic artifacts, scalable architecture, and quantified efficiency gains.
                </p>
            </div>

            {/* Integration Roadmap */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Clock className="w-6 h-6 text-emerald-500" />
                    Integration Roadmap
                </h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Phase</th>
                                    <th className="p-4 font-semibold">Task</th>
                                    <th className="p-4 font-semibold">Confidence Gate</th>
                                    <th className="p-4 font-semibold">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Bring‑up", "Simulation smoke + adapter connect", "Protocol A/B match", "< 1 day"],
                                    ["Validation", "Protocol & numeric determinism runs", "Byte‑identical CSV", "~2 min"],
                                    ["Stress", "Flow control, resets, boundary dims", "All PASS, no deadlock", "~30 min"],
                                    ["Optimization", "Mesh scaling, FIFO tuning, DVFS partition", "Watermarks & timing margin reviewed", "2–3 days"],
                                    ["Formal", "Handshake & routing liveness proofs", "Formal PASS", "~4 hours"],
                                    ["Synthesis", "Vendor flow iteration, multi‑corner STA", "100 MHz @TT/FF (post‑place)", "1–2 weeks"],
                                ].map(([phase, task, gate, duration], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{phase}</td>
                                        <td className="p-4">{task}</td>
                                        <td className="p-4 text-emerald-400">{gate}</td>
                                        <td className="p-4 font-mono text-xs">{duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Verification Strategy */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-500" />
                    Verification Strategy
                </h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Level</th>
                                    <th className="p-4 font-semibold">Coverage</th>
                                    <th className="p-4 font-semibold">Validation Evidence</th>
                                    <th className="p-4 font-semibold">Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Protocol Determinism", "Flow control, ready/valid, stall scenarios", "Dual‑run byte‑identical CSVs", "~2 min"],
                                    ["Numeric Corners", "Int8→Int32 accumulation limits", "Digest golden match, no compute errors", "~5 min"],
                                    ["Boundary Dims", "Odd GEMM shapes, partial tiles, edge padding", "Per‑workload logs + trace", "~10 min"],
                                    ["Stress", "Source/sink stalls, resets, watchdog", "No deadlock, no stalls > threshold", "~15 min"],
                                    ["Sparsity Toggle", "Adaptive FSM enable/disable, lane skipping", "Speedup vs. density ratio logged", "~5 min"],
                                    ["Formal Proof", "Routing progress, credit safety, FIFO bounds", "Liveness & deadlock‑freedom verified", "~4 hours"],
                                ].map(([level, coverage, evidence, time], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{level}</td>
                                        <td className="p-4">{coverage}</td>
                                        <td className="p-4">{evidence}</td>
                                        <td className="p-4 font-mono text-xs">{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Efficiency Levers */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    Efficiency Levers & Performance Multipliers
                </h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Lever</th>
                                    <th className="p-4 font-semibold">Mechanism</th>
                                    <th className="p-4 font-semibold">Typical Uplift</th>
                                    <th className="p-4 font-semibold">Trade‑off</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Int8 Accumulation", "Dense MAC packing → int32 results", "2–3× vs. int32 native", "Fixed precision"],
                                    ["Sparsity Skipping", "Adaptive FSM masks zero‑lanes", "1.5–2.5× on sparse kernels", "Scheduler complexity"],
                                    ["3‑Stage Pipeline", "Router input + FIFO write decoupling", "62% critical path reduction", "+3.5% area, +20% power"],
                                    ["DVFS Partitioning", "Independent mesh / PE / adapter freq", "15–25% system power", "CDC integration"],
                                    ["Clock Gating", "Disable FIFOs & idle router ports", "10–20% dynamic power reduction", "Negligible latency"],
                                    ["Mesh Scaling", "Tile parallelism (2×2 → 4×4 → N×N)", "Near‑linear throughput to ~3–4×", "Routing congestion"],
                                ].map(([lever, mech, uplift, tradeoff], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{lever}</td>
                                        <td className="p-4">{mech}</td>
                                        <td className="p-4 text-emerald-400 font-medium">{uplift}</td>
                                        <td className="p-4 text-zinc-400">{tradeoff}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Mesh Scaling & DVFS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <Layers className="w-6 h-6 text-purple-500" />
                        Mesh Scaling
                    </h3>
                    <GlassCard className="overflow-hidden p-0 h-full" noPadding>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                        <th className="p-4 font-semibold">Config</th>
                                        <th className="p-4 font-semibold">Tiles</th>
                                        <th className="p-4 font-semibold">Throughput</th>
                                    </tr>
                                </thead>
                                <tbody className="text-zinc-300">
                                    {[
                                        ["1×1", "1", "1.0×"],
                                        ["2×2", "4", "~3.6×"],
                                        ["3×3", "9", "~7.5×"],
                                        ["4×4", "16", "~13×"],
                                    ].map(([cfg, tiles, tput], i) => (
                                        <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                            <td className="p-4 font-medium text-white">{cfg}</td>
                                            <td className="p-4">{tiles}</td>
                                            <td className="p-4 text-emerald-400">{tput}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 text-xs text-zinc-500 border-t border-zinc-800">
                            *Estimates assume moderate sparsity & balanced workload.
                        </div>
                    </GlassCard>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <Activity className="w-6 h-6 text-orange-500" />
                        DVFS Ramp Profile
                    </h3>
                    <GlassCard className="overflow-hidden p-0 h-full" noPadding>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                        <th className="p-4 font-semibold">Phase</th>
                                        <th className="p-4 font-semibold">Mesh</th>
                                        <th className="p-4 font-semibold">PE</th>
                                        <th className="p-4 font-semibold">Use Case</th>
                                    </tr>
                                </thead>
                                <tbody className="text-zinc-300">
                                    {[
                                        ["Init", "100 MHz", "100 MHz", "Debug"],
                                        ["Ramp", "200 MHz", "300 MHz", "Light Inf"],
                                        ["Peak", "400 MHz", "600 MHz", "Burst"],
                                        ["Throttle", "250 MHz", "300 MHz", "Sustained"],
                                    ].map(([phase, mesh, pe, use], i) => (
                                        <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                            <td className="p-4 font-medium text-white">{phase}</td>
                                            <td className="p-4 font-mono text-xs">{mesh}</td>
                                            <td className="p-4 font-mono text-xs">{pe}</td>
                                            <td className="p-4">{use}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Silicon Readiness & Artifacts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-cyan-500" />
                        Silicon Readiness
                    </h3>
                    <GlassCard className="overflow-hidden p-0" noPadding>
                        <table className="w-full text-left border-collapse text-sm">
                            <tbody className="text-zinc-300">
                                {[
                                    ["Clock Gating Wrappers", "Included", "Seamless integration"],
                                    ["DVFS Reset/Clock Modules", "Included", "CDC-safe boundaries"],
                                    ["Scalable Mesh RTL", "Parameterized", "Product tiering"],
                                    ["Sparsity Primitives", "Enabled", "MAC efficiency uplift"],
                                    ["Lint Hardening", "Pre-hardened", "Smoother EDA flow"],
                                    ["Timing-Optimized RTL", "100 MHz Validated", "Post-placement signoff"],
                                ].map(([feat, status, benefit], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-zinc-100">{feat}</td>
                                        <td className="p-4"><span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-500/10 rounded-full">✅ {status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <BarChart2 className="w-6 h-6 text-pink-500" />
                        Confidence Artifacts
                    </h3>
                    <GlassCard className="overflow-hidden p-0" noPadding>
                        <table className="w-full text-left border-collapse text-sm">
                            <tbody className="text-zinc-300">
                                {[
                                    ["protocol_flow.csv", "Flow robustness metrics"],
                                    ["protocol_micro.csv", "Micro-kernel determinism"],
                                    ["numeric.csv", "Int8→Int32 corner validation"],
                                    ["per_workload.log", "Per-cycle handshake trace"],
                                    ["VCD (on failure)", "Debug root cause"],
                                    ["formal_report.txt", "Liveness & deadlock proof"],
                                ].map(([art, purp], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-mono text-xs text-emerald-400">{art}</td>
                                        <td className="p-4">{purp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </div>
            </div>

            {/* Risk Mitigation */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    Risk Mitigation Plan
                </h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Risk</th>
                                    <th className="p-4 font-semibold">Mitigation</th>
                                    <th className="p-4 font-semibold">Validation Gate</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Deadlock in stress suite", "XY routing + fair arbitration", "Stress suite passes with zero hangs"],
                                    ["Watchdog false positives", "Configurable timeout", "No spurious flags post-hardening"],
                                    ["Boundary dim failures", "Exhaustive odd GEMM/MLP matrix", "All odd dims 1..8 PASS"],
                                    ["Reset recovery glitches", "Mid-stream async reset validated", "Mid-reset workload continues"],
                                    ["Multi-corner timing", "100 MHz post-placement baseline", "WNS margins: TT ≥ +2.0ns"],
                                ].map(([risk, mit, gate], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-zinc-100">{risk}</td>
                                        <td className="p-4">{mit}</td>
                                        <td className="p-4 text-emerald-400/80">{gate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Fast-Path Integration */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    Fast-Path Integration Checklist
                </h3>
                <GlassCard className="p-6">
                    <ul className="space-y-3">
                        {[
                            "Clone & lock SHA → Record baseline git commit",
                            "Run protocol A/B → Verify byte‑identical digests (< 2 min)",
                            "Execute numeric corners → Confirm no saturation errors (< 5 min)",
                            "Stress suite → No deadlock, watchdog silent (< 15 min)",
                            "Inspect FIFO watermarks → Note peak occupancy per direction",
                            "Tune FIFO depths → Start at 4; increment if sustained occupancy near depth‑1",
                            "Enable pipeline defines → Set ENABLE_PIPELINE_ROUTER=1 for 100 MHz",
                            "Multi-corner STA → Post-placement validation (TT/FF margins verified)",
                            "Formal proofs → Routing progress + credit safety (expect PASS)",
                            "Sparsity toggle → Optional enable; measure MAC efficiency uplift",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-zinc-700">
                                    {i + 1}
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </GlassCard>
            </div>
        </section>
    );
}
