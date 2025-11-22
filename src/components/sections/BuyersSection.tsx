"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Check, FileText, Shield, Zap, Layers, Box, Activity, LifeBuoy } from "lucide-react";

export function BuyersSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                    What Buyers Get
                </h2>
                <p className="text-muted-foreground max-w-3xl text-lg">
                    High‑confidence, integration‑ready NPU IP: everything required to evaluate, validate, integrate, and scale NeuraEdge with deterministic evidence and full architectural freedom.
                </p>
            </div>

            {/* Package Overview */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                    <Box className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
                    Package Overview
                </h3>
                <GlassCard className="overflow-hidden p-0 border-border" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-secondary/50 text-foreground border-b border-border">
                                    <th className="p-4 font-semibold whitespace-nowrap">Category</th>
                                    <th className="p-4 font-semibold whitespace-nowrap">Included Assets</th>
                                    <th className="p-4 font-semibold whitespace-nowrap">Outcome / Value</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                {[
                                    ["RTL Source", "Top, tile, PE, router mesh, sparsity primitives, latency injectors", "Full auditability & unlimited customization (no black boxes)"],
                                    ["Verification Harness", "Host adapter, deterministic protocol & numeric suites, stress benches", "Fast bring‑up (< 1 day) & reproducible correctness"],
                                    ["Workload Generators", "GEMM, 2‑layer MLP, conv tiling pad/stride matrix", "Coverage of boundary dims, flow control & compute variety"],
                                    ["Formal Collateral", "Key handshake & routing properties + SBY configs", "Early deadlock & protocol safety confidence"],
                                    ["PPA / Synthesis Collateral", "DVFS wrappers, clock gating stubs, integration checklist", "Accelerated timing/power exploration & partition planning"],
                                    ["Artifacts & Telemetry", "CSV (cycles, stalls, inflight, seeds, git SHA), watermarks, digest signatures", "Evidence trail for internal diligence & regression gating"],
                                    ["Sparsity Toolkit", "Bitmap RLE decoder, adaptive sparsity FSM", "Immediate MAC efficiency uplift without redesign"],
                                    ["Documentation", "Workload suite spec, CI usage, timing roadmap, power/area analysis", "Clear engineering narrative for signoff reviews"],
                                    ["Optional Evaluation Pack", "Sanitized RTL subset + workload matrix + golden digests", "Low‑friction pre‑purchase technical diligence"],
                                    ["Support Tiers (Optional)", "Advisory → design review → co‑design", "Right‑sized engagement aligned to roadmap cadence"],
                                ].map(([category, assets, outcome], i) => (
                                    <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">{category}</td>
                                        <td className="p-4">{assets}</td>
                                        <td className="p-4">{outcome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Deliverables & Why It Matters */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Deliverables */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        <Layers className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                        Deliverables (Annotated)
                    </h3>
                    <GlassCard className="p-6 h-full">
                        <ul className="space-y-4">
                            {[
                                "RTL Hierarchy – Human‑readable Verilog/SystemVerilog across all functional domains.",
                                "Deterministic Suites – Dual‑run protocol & numeric tests producing byte‑identical CSVs.",
                                "Stress & Edge Benches – Stall, reset, padding/stride, and sparsity scenarios.",
                                "Formal Properties – Routing progress, credit safety, FIFO bounds (extensible set).",
                                "Timing & PPA Collateral – Pipeline enable defines, power/area tradeoff documentation.",
                                "Telemetry Signals – Watermarks, watchdog, digest markers for tuning & confidence.",
                                "Sparsity Components – Plug‑in efficiency without architecture churn.",
                                "Advisory (Optional) – Mesh sizing, DVFS partitioning, buffer depth optimization.",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-mono text-muted-foreground border border-border">
                                        {i + 1}
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>

                {/* Why It Matters */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
                        Why It Matters
                    </h3>
                    <GlassCard className="overflow-hidden p-0 h-full border-border" noPadding>
                        <div className="overflow-x-auto h-full">
                            <table className="w-full text-left border-collapse text-sm h-full">
                                <thead>
                                    <tr className="bg-secondary/50 text-foreground border-b border-border">
                                        <th className="p-4 font-semibold">Need</th>
                                        <th className="p-4 font-semibold">Pain Without</th>
                                        <th className="p-4 font-semibold">Provided Relief</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    {[
                                        ["Fast bring‑up", "Weeks of ad‑hoc harness scripting", "Turn‑key adapter + deterministic suites"],
                                        ["Confidence", "Anecdotal test coverage", "Structured artifacts & formal proofs"],
                                        ["PPA Exploration", "Slow iteration on timing/power", "Ready pipeline defines & gating stubs"],
                                        ["Customization", "Vendor gating & opaque IP", "Full editable source + clear seams"],
                                        ["Efficiency", "Wasted MACs on zeros", "Sparsity decode + adaptive skip path"],
                                    ].map(([need, pain, relief], i) => (
                                        <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                                            <td className="p-4 font-medium text-foreground">{need}</td>
                                            <td className="p-4 text-red-600/80 dark:text-red-400/80">{pain}</td>
                                            <td className="p-4 text-emerald-600/80 dark:text-emerald-400/80">{relief}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Evaluation & Integration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Evaluation Path */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        <Activity className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                        Evaluation Path (Optional)
                    </h3>
                    <GlassCard className="p-8">
                        <div className="prose prose-zinc dark:prose-invert prose-sm">
                            <p className="text-muted-foreground leading-relaxed">
                                Request: <span className="text-emerald-600 dark:text-emerald-400">sanitized RTL subset</span>, workload matrix, golden digests, timing snapshot.
                            </p>
                            <div className="flex items-center gap-4 my-6 p-4 bg-secondary/50 rounded-lg border border-border">
                                <div className="text-center">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Run Time</div>
                                    <div className="text-xl font-mono text-foreground">&lt; 2 min</div>
                                </div>
                                <div className="h-8 w-px bg-border" />
                                <div className="flex-1">
                                    <div className="text-sm text-muted-foreground">Run <code className="text-emerald-600 dark:text-emerald-400">protocol_flow</code> & <code className="text-emerald-600 dark:text-emerald-400">protocol_micro</code></div>
                                    <div className="text-xs text-muted-foreground">Inspect CSV evidence → Proceed</div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Quick Integration Checklist */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
                        Quick Integration Checklist
                    </h3>
                    <GlassCard className="p-6">
                        <ul className="space-y-3">
                            {[
                                "Clone & lock SHA.",
                                "Run protocol + numeric determinism (expect digest MATCH).",
                                "Execute stress (stalls/resets) & sparsity enable toggle.",
                                "Inspect FIFO watermarks; tune depths (start at 4 → adjust if sustained depth‑1).",
                                "Enable pipeline defines for target Fmax (100 MHz validated baseline).",
                                "Partition DVFS domains (mesh vs. PE) if multi‑frequency needed.",
                                "Formal pass (routing progress, credit non‑negative, FIFO bounds).",
                                "Synthesis snapshot & timing margin review.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </div>

            {/* Support & Artifacts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Support Tiers */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        <LifeBuoy className="w-6 h-6 text-orange-600 dark:text-orange-500" />
                        Support Tiers (Optional)
                    </h3>
                    <GlassCard className="overflow-hidden p-0 border-border" noPadding>
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-secondary/50 text-foreground border-b border-border">
                                    <th className="p-4 font-semibold">Tier</th>
                                    <th className="p-4 font-semibold">Scope</th>
                                    <th className="p-4 font-semibold">SLA</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                {[
                                    ["Base", "Artifact Q&A (email)", "≤2 business days"],
                                    ["Enhanced", "Integration advisory & design review", "1 business day"],
                                    ["Premium", "Feature co‑design & formal expansion", "Same day"],
                                ].map(([tier, scope, sla], i) => (
                                    <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                                        <td className="p-4 font-medium text-foreground">{tier}</td>
                                        <td className="p-4">{scope}</td>
                                        <td className="p-4 font-mono text-xs">{sla}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </div>

                {/* Artifact Structure */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                        <FileText className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                        Artifact Structure Reference
                    </h3>
                    <GlassCard className="overflow-hidden p-0 border-border" noPadding>
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-secondary/50 text-foreground border-b border-border">
                                    <th className="p-4 font-semibold">Artifact</th>
                                    <th className="p-4 font-semibold">Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                                {[
                                    ["protocol_flow.csv", "Flow robustness metrics"],
                                    ["protocol_micro.csv", "Micro‑kernel determinism"],
                                    ["numeric.csv", "Int8→Int32 corner verification"],
                                    ["*.log", "Handshake & digest trace"],
                                    ["VCD (on fail)", "Debug root cause"],
                                    ["rtl_workload_suite.md", "Scope & status mapping"],
                                ].map(([artifact, purpose], i) => (
                                    <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                                        <td className="p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400">{artifact}</td>
                                        <td className="p-4">{purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </div>
            </div>

            {/* Differentiators */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Differentiators Snapshot</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        ["Licensing", "One‑time acquisition; zero royalty"],
                        ["Source Depth", "Full hierarchy + collateral (no encryption)"],
                        ["Determinism", "Byte‑identical dual‑run evidence"],
                        ["Extensibility", "Mesh/flit/FIFO/DVFS knobs & sparsity gating"],
                        ["Timing Confidence", "100 MHz validated (Sky130) with margin"],
                        ["Power Efficiency", "Sparsity + gating + DVFS hooks"],
                    ].map(([dim, adv], i) => (
                        <GlassCard key={i} className="p-6">
                            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{dim}</div>
                            <div className="font-medium text-foreground">{adv}</div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* Call To Action */}
            <div className="text-center space-y-8 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">Ready to Evaluate?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Email <a href="mailto:info@bpcore-silicon.com" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors">info@bpcore-silicon.com</a> with subject “NeuraEdge Evaluation Request” to receive the optional evaluation pack or initiate full acquisition.
                </p>
                <div className="text-xs text-muted-foreground">
                    © 2025 BPcore Silicon. NeauraEdge™ is a trademark of BPcore Silicon.
                </div>
            </div>
        </section>
    );
}
