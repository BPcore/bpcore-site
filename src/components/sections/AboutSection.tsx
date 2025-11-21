import { GlassCard } from "@/components/ui/glass-card";
import { Target, Lightbulb, Users, Globe } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    About BPcore Silicon
                </h2>
                <p className="text-zinc-400 max-w-2xl text-lg">
                    Enable next‑generation AI silicon freedom through royalty‑free IP that
                    customers fully own and control.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Mission</h3>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                        Enable next‑generation AI silicon freedom through royalty‑free IP that
                        customers fully own and control.
                    </p>
                </GlassCard>

                <GlassCard className="p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Vision</h3>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">
                        Build India’s leading fabless IP company for neural compute—defined
                        by transparent licensing and rigorous, reproducible engineering.
                    </p>
                </GlassCard>
            </div>

            <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white">
                    Leadership Philosophy
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            title: "Engineering Transparency",
                            desc: "Full source, no opaque black boxes.",
                        },
                        {
                            title: "Evidence‑Driven Claims",
                            desc: "Artifacts and determinism over anecdotes.",
                        },
                        {
                            title: "Customization Enablement",
                            desc: "Architectures designed for extension.",
                        },
                        {
                            title: "Sustainable Economics",
                            desc: "Eliminate compounding royalty drag.",
                        },
                    ].map((item, i) => (
                        <GlassCard key={i} className="p-6">
                            <h4 className="font-medium text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-zinc-500">{item.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-emerald-500" />
                    <h3 className="text-2xl font-semibold text-white">
                        India Semiconductor Ecosystem Impact
                    </h3>
                </div>
                <GlassCard className="p-8">
                    <p className="text-zinc-400 mb-6">
                        India’s rapid semiconductor transformation needs high‑quality,
                        royalty‑free building blocks that can be internalized quickly.
                        NeauraEdge contributes by:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            {
                                title: "Skill Development",
                                desc: "Clear, auditable RTL helps university & startup engineers learn real production IP structure.",
                            },
                            {
                                title: "Sovereign Capability",
                                desc: "Royalty‑free, modifiable ownership reduces dependence on opaque foreign black boxes.",
                            },
                            {
                                title: "Cost Efficiency",
                                desc: "One‑time acquisition model enables aggressive local prototyping without recurring fee pressure.",
                            },
                            {
                                title: "Startup Acceleration",
                                desc: "Fast bring‑up harnesses and deterministic validation shorten time from concept to silicon proof.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="space-y-1">
                                <h4 className="text-white font-medium">{item.title}</h4>
                                <p className="text-sm text-zinc-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
