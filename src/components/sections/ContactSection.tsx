"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Mail, Clipboard, Clock, ArrowRight, MessageSquare, Send } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Contact Us
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    Initiate your evaluation, request a license, or schedule a technical deep dive.
                </p>
            </div>

            {/* Primary Contact */}
            <GlassCard className="p-8 md:p-12 flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                    <Mail className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">Email Us</h3>
                    <a
                        href="mailto:info@bpcore-silicon.com"
                        className="text-3xl md:text-4xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors block break-all"
                    >
                        info@bpcore-silicon.com
                    </a>
                </div>
            </GlassCard>

            {/* Suggested Subjects & SLA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Suggested Subjects */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-500" />
                        Suggested Subjects
                    </h3>
                    <GlassCard className="overflow-hidden p-0 h-full" noPadding>
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Purpose</th>
                                    <th className="p-4 font-semibold">Subject Line</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Evaluation", "NeauraEdge Evaluation Request"],
                                    ["License", "NeauraEdge License Inquiry"],
                                    ["Rights Transfer", "NeauraEdge IP Assignment Inquiry"],
                                    ["Technical Deep Dive", "NeauraEdge Architecture Session"],
                                ].map(([purpose, subject], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{purpose}</td>
                                        <td className="p-4 text-zinc-400">{subject}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </div>

                {/* SLA */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-500" />
                        Response SLA
                    </h3>
                    <GlassCard className="overflow-hidden p-0 h-full" noPadding>
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-zinc-900/80 text-zinc-100 border-b border-zinc-800">
                                    <th className="p-4 font-semibold">Tier</th>
                                    <th className="p-4 font-semibold">Response Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    ["Standard", "≤1 business day"],
                                    ["Premium (optional)", "Same-day"],
                                ].map(([tier, time], i) => (
                                    <tr key={i} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                        <td className="p-4 font-medium text-white">{tier}</td>
                                        <td className="p-4 text-emerald-400 font-mono">{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-6 border-t border-zinc-800 text-sm text-zinc-400">
                            We value your time. Our engineering team reviews technical inquiries directly to ensure high-quality responses.
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Evaluation Request Template */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <Clipboard className="w-5 h-5 text-purple-500" />
                    Evaluation Request Template
                </h3>
                <GlassCard className="p-0 overflow-hidden" noPadding>
                    <div className="bg-zinc-950 p-6 font-mono text-sm text-zinc-300 overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            {`Company / Organization:
Contact Name & Role:
Process Node / Target Frequency:
Primary Workload (CNN / Transformer / MLP):
Desired Mesh Size Exploration:
Timeline to Tape-Out:
Rights Transfer Interest (Y/N):
Additional Customization Needs:`}
                        </pre>
                    </div>
                    <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex justify-between items-center">
                        <span className="text-xs text-zinc-500">Copy and paste this into your email body.</span>
                        <a
                            href="mailto:info@bpcore-silicon.com?subject=NeauraEdge%20Evaluation%20Request&body=Company%20%2F%20Organization%3A%0AContact%20Name%20%26%20Role%3A%0AProcess%20Node%20%2F%20Target%20Frequency%3A%0APrimary%20Workload%20(CNN%20%2F%20Transformer%20%2F%20MLP)%3A%0ADesired%20Mesh%20Size%20Exploration%3A%0ATimeline%20to%20Tape-Out%3A%0ARights%20Transfer%20Interest%20(Y%2FN)%3A%0AAdditional%20Customization%20Needs%3A"
                            className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            <Send className="w-4 h-4" /> Open in Mail App
                        </a>
                    </div>
                </GlassCard>
            </div>

            {/* Post-Contact Flow */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-yellow-500" />
                    Post-Contact Flow
                </h3>
                <GlassCard className="p-8">
                    <ol className="space-y-6 relative border-l border-zinc-800 ml-3 pl-8">
                        {[
                            "NDA (if evaluation requested).",
                            "Receive sanitized evaluation bundle.",
                            "Technical Q&A + benchmark alignment.",
                            "Commercial path (license or rights transfer).",
                            "Integration kickoff.",
                        ].map((step, i) => (
                            <li key={i} className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-400">
                                    {i + 1}
                                </span>
                                <div className="font-medium text-zinc-200 text-lg">{step}</div>
                            </li>
                        ))}
                    </ol>
                </GlassCard>
            </div>
        </section>
    );
}
