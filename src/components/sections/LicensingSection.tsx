"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Check, Shield, Scale, FileText, HelpCircle, ArrowRight, Lock, Globe, Zap, Activity } from "lucide-react";

export function LicensingSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Licensing & Procurement
                </h2>
                <p className="text-zinc-400 max-w-3xl text-lg">
                    Simple, transparent, and production-ready. One-time acquisition with no royalties.
                </p>
            </div>

            {/* Production Readiness */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Activity className="w-6 h-6 text-emerald-500" />
                    Production Readiness Statement
                </h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="p-6 border-b border-zinc-800">
                        <p className="text-zinc-300">
                            <strong className="text-white">100 MHz Validated</strong> — NeauraEdge achieves production-grade timing with multi-corner post-placement STA:
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Specification</th>
                                    <th className="p-4 font-semibold">Value</th>
                                    <th className="p-4 font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["TT Corner", "137 MHz", "WNS +2.71ns @ 25°C/1.80V (+37% margin)"],
                                    ["FF Corner", "178 MHz", "WNS +4.37ns @ -40°C/1.95V (+78% margin)"],
                                    ["Architecture", "3-stage pipeline", "CI-protected with automated regression detection"],
                                    ["Efficiency", "3.0 MHz/mW", "Favorable trade-offs: +3.5% area, ~20% power"],
                                ].map(([spec, value, notes], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-zinc-100">{spec}</td>
                                        <td className="p-4 font-bold text-white">{value}</td>
                                        <td className="p-4">{notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex flex-wrap gap-4 text-sm text-zinc-400">
                        <span className="flex items-center gap-2 text-emerald-400 font-medium">
                            <Check className="w-4 h-4" /> Ready for tape-out evaluation
                        </span>
                        <span className="hidden md:inline text-zinc-700">|</span>
                        <span>Documentation: POWER_AREA_ANALYSIS_3STAGE.md</span>
                        <span>CI_100MHZ_VALIDATION.md</span>
                        <span>sta_timing_roadmap.md</span>
                    </div>
                </GlassCard>
            </div>

            {/* Plain-English Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <FileText className="w-6 h-6 text-blue-500" />
                        Plain-English Summary
                    </h3>
                    <GlassCard className="p-8 h-full">
                        <div className="space-y-6">
                            <p className="text-xl text-white leading-relaxed">
                                <strong className="text-emerald-400">Perpetual, worldwide, royalty-free</strong> commercial license to use, modify, and integrate NeauraEdge RTL.
                            </p>
                            <p className="text-zinc-400">
                                Optional full rights transfer (IP assignment) available for organizations wanting complete ownership.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    "One-time acquisition — No recurring fees",
                                    "Zero royalties — No per-unit charges",
                                    "No attribution required — Your brand",
                                    "Full source access — Human-readable RTL",
                                    "Unlimited modifications — Internal forks",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                        <Globe className="w-6 h-6 text-purple-500" />
                        Global Scope
                    </h3>
                    <GlassCard className="p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <Globe className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h4 className="text-lg font-medium text-white">Worldwide Deployment</h4>
                        <p className="text-zinc-400 text-sm">
                            Synthesize, simulate, verify, and tape-out across product lines and process nodes globally.
                        </p>
                    </GlassCard>
                </div>
            </div>

            {/* License Models */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Scale className="w-6 h-6 text-yellow-500" />
                    License Models
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Standard License */}
                    <GlassCard className="p-0 overflow-hidden flex flex-col" noPadding>
                        <div className="p-6 bg-zinc-900/80 border-b border-zinc-800">
                            <h4 className="text-xl font-bold text-white">Standard Commercial License</h4>
                            <p className="text-zinc-400 text-sm mt-1">Default Model</p>
                        </div>
                        <div className="p-6 flex-1">
                            <ul className="space-y-4">
                                {[
                                    ["Fees", "One-time acquisition; no per-unit fees"],
                                    ["Scope", "Organization-wide; unlimited products"],
                                    ["Source", "Full RTL, testbenches, formal collateral"],
                                    ["Attribution", "Not required (internal branding only)"],
                                    ["Modification", "Unlimited internal forks"],
                                    ["Redistribution", "Prohibited except NDA to foundry/EDA"],
                                ].map(([key, value], i) => (
                                    <li key={i} className="grid grid-cols-3 gap-4 text-sm">
                                        <span className="text-zinc-500 font-medium">{key}</span>
                                        <span className="col-span-2 text-zinc-300">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-900/30 border-t border-zinc-800">
                            <h5 className="text-sm font-semibold text-white mb-2">What You Can Do</h5>
                            <ul className="space-y-2 text-xs text-zinc-400">
                                <li className="flex gap-2"><Check className="w-3 h-3 text-emerald-500" /> Modify RTL and integrate into internal SoCs</li>
                                <li className="flex gap-2"><Check className="w-3 h-3 text-emerald-500" /> Synthesize, simulate, verify, and tape-out</li>
                                <li className="flex gap-2"><Check className="w-3 h-3 text-emerald-500" /> Share RTL under NDA with foundries</li>
                            </ul>
                        </div>
                    </GlassCard>

                    {/* IP Assignment */}
                    <GlassCard className="p-0 overflow-hidden flex flex-col border-emerald-500/30" noPadding>
                        <div className="p-6 bg-emerald-950/30 border-b border-emerald-900/50">
                            <h4 className="text-xl font-bold text-white">Full Rights Transfer</h4>
                            <p className="text-emerald-400 text-sm mt-1">Optional IP Assignment</p>
                        </div>
                        <div className="p-6 flex-1">
                            <ul className="space-y-4">
                                {[
                                    ["Ownership", "Customer acquires all rights, title, interest"],
                                    ["Updates", "Customer self-maintains"],
                                    ["Enforcement", "Customer assumes enforcement"],
                                    ["Branding", "Remove/internalize fully"],
                                    ["Cost", "Higher one-time fee"],
                                    ["Royalties", "None"],
                                ].map(([key, value], i) => (
                                    <li key={i} className="grid grid-cols-3 gap-4 text-sm">
                                        <span className="text-zinc-500 font-medium">{key}</span>
                                        <span className="col-span-2 text-white font-medium">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-emerald-900/10 border-t border-emerald-900/30">
                            <h5 className="text-sm font-semibold text-white mb-2">When to Choose</h5>
                            <ul className="space-y-2 text-xs text-zinc-400">
                                <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Want to represent RTL as wholly owned internal IP</li>
                                <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Need complete control over future evolution</li>
                                <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Prefer to eliminate upstream dependency</li>
                            </ul>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-cyan-500" />
                    Frequently Asked Questions
                </h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <tbody className="text-zinc-300">
                                {[
                                    ["Are there per-core or per-wafer fees?", "None. Single upfront acquisition."],
                                    ["Is attribution required?", "No. Internal branding only; no \"powered by\" clauses."],
                                    ["Can we keep modifications private?", "Yes. Full internalization permitted."],
                                    ["What formal collateral is included?", "Key protocol & credit properties with SBY configs."],
                                    ["Is evaluation available before purchase?", "Yes. Sanitized package available under NDA."],
                                    ["Is rights transfer possible?", "Yes, through executed assignment agreement."],
                                    ["Any export restrictions?", "Standard semiconductor compliance; no embedded encryption."],
                                    ["Can we share with foundry/EDA vendors?", "Yes, under NDA for \"have-made\" purposes."],
                                    ["What about multi-site usage?", "Organization-wide license; all sites covered."],
                                    ["Are updates mandatory?", "No. You control when/if to integrate updates."],
                                ].map(([q, a], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-zinc-100 w-1/3">{q}</td>
                                        <td className="p-4 text-zinc-400">{a}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Procurement Flow */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <Zap className="w-6 h-6 text-orange-500" />
                    Procurement Flow
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-6">
                        <h4 className="text-lg font-bold text-white mb-4 border-b border-zinc-800 pb-2">Standard License</h4>
                        <ol className="space-y-4 relative border-l border-zinc-800 ml-2 pl-6">
                            {[
                                ["Request Evaluation (Optional)", "Review Technology & Validation pages"],
                                ["Internal Technical Diligence", "Run deterministic protocol suite"],
                                ["Commercial Agreement Execution", ""],
                                ["Internal Mirror + Baseline Tagging", ""],
                                ["Integration Kickoff", "Follow Developer Experience quick-start"],
                            ].map(([step, detail], i) => (
                                <li key={i} className="relative">
                                    <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-zinc-950" />
                                    <div className="font-medium text-zinc-200">{step}</div>
                                    {detail && <div className="text-xs text-zinc-500 mt-1">{detail}</div>}
                                </li>
                            ))}
                        </ol>
                    </GlassCard>
                    <GlassCard className="p-6">
                        <h4 className="text-lg font-bold text-white mb-4 border-b border-zinc-800 pb-2">Full Rights Transfer</h4>
                        <ol className="space-y-4 relative border-l border-zinc-800 ml-2 pl-6">
                            {[
                                ["Rights Transfer Intent Declared", ""],
                                ["Assignment Schedule Review", "Review chain-of-title documentation"],
                                ["IP Due Diligence", "Security review aids, Diff scan"],
                                ["Commercial Execution", "Execute assignment agreement"],
                                ["Internal Ownership", "Remove/adjust BPcore branding"],
                            ].map(([step, detail], i) => (
                                <li key={i} className="relative">
                                    <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-900 border border-zinc-950" />
                                    <div className="font-medium text-zinc-200">{step}</div>
                                    {detail && <div className="text-xs text-zinc-500 mt-1">{detail}</div>}
                                </li>
                            ))}
                        </ol>
                    </GlassCard>
                </div>
            </div>

            {/* Comparison */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">BPcore vs. Traditional IP Vendors</h3>
                <GlassCard className="overflow-hidden p-0" noPadding>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Aspect</th>
                                    <th className="p-4 font-semibold text-emerald-400">BPcore Silicon</th>
                                    <th className="p-4 font-semibold text-zinc-500">Traditional IP Vendor</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Cost Model", "Single upfront fee", "❌ Upfront + ongoing royalties"],
                                    ["Per-Unit Fees", "None", "❌ Common (volume escalators)"],
                                    ["Attribution", "Not required", "❌ Often mandated"],
                                    ["Source Access", "Full RTL & collateral", "⚠ Sometimes encrypted/limited"],
                                    ["Customization", "Unlimited", "⚠ Contractually gated"],
                                    ["Long-Term Risk", "Low (no compounding fees)", "❌ Higher (royalty creep, audits)"],
                                    ["Validation", "Deterministic (protocol/numeric)", "⚠ Limited harnesses"],
                                    ["Timing Validation", "100 MHz production signoff", "⚠ Varies by vendor"],
                                ].map(([aspect, bp, trad], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-zinc-100">{aspect}</td>
                                        <td className="p-4 font-medium text-white">{bp}</td>
                                        <td className="p-4 text-zinc-500">{trad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>

            {/* Contact */}
            <div className="text-center space-y-8 pt-8 border-t border-zinc-800">
                <h3 className="text-2xl font-bold text-white">Contact for Licensing Inquiries</h3>
                <div className="space-y-2">
                    <p className="text-zinc-400">Email: <a href="mailto:info@bpcore-silicon.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">info@bpcore-silicon.com</a></p>
                    <p className="text-xs text-zinc-500">Response SLA: ≤ 1 business day</p>
                </div>
            </div>
        </section>
    );
}
