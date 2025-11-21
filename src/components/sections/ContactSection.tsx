import { GlassCard } from "@/components/ui/glass-card";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Get in Touch
                </h2>
                <p className="text-zinc-400 text-lg">
                    Acquire NeauraEdge™ NPU for your next AI SoC. Transform your
                    acceleration roadmap with royalty‑free ownership.
                </p>
            </div>

            <GlassCard className="p-8 md:p-12 space-y-8">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="p-3 rounded-full bg-zinc-800 text-white">
                        <Mail className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-white">Email Us</h3>
                        <a
                            href="mailto:info@bpcore-silicon.com"
                            className="text-emerald-500 hover:text-emerald-400 transition-colors text-lg font-medium"
                        >
                            info@bpcore-silicon.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 space-y-6">
                    <h4 className="text-white font-medium text-center">
                        Suggested Subjects
                    </h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "NeauraEdge Evaluation Request",
                            "AI SoC Integration Inquiry",
                            "Licensing Due Diligence",
                        ].map((subject) => (
                            <a
                                key={subject}
                                href={`mailto:info@bpcore-silicon.com?subject=${encodeURIComponent(
                                    subject
                                )}`}
                                className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-300 text-sm hover:bg-zinc-800 hover:text-white transition-colors"
                            >
                                {subject}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 space-y-4">
                    <h4 className="text-white font-medium">
                        Request Evaluation Package (Optional)
                    </h4>
                    <p className="text-sm text-zinc-400">
                        In your email, please include:
                    </p>
                    <ul className="list-disc list-inside text-sm text-zinc-500 space-y-1">
                        <li>Target process node and performance goals</li>
                        <li>Planned workloads (e.g., vision CNN, MLP)</li>
                        <li>Desired mesh size / flit width explorations</li>
                        <li>Timeline for RTL freeze and tape‑out</li>
                    </ul>
                </div>
            </GlassCard>

            <div className="text-center space-y-2">
                <h3 className="text-white font-medium">Commitment</h3>
                <p className="text-zinc-500 text-sm">
                    Fast responses, transparent terms, no hidden metering. Your silicon,
                    your roadmap.
                </p>
                <p className="text-zinc-600 text-xs pt-2">
                    Standard Response SLA: ≤1 business day.
                </p>
            </div>
        </section>
    );
}
