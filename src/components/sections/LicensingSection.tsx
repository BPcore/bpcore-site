"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Scale, Check, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export function LicensingSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Licensing Models
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Transparent, flat-fee licensing. No royalties. No hidden costs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Evaluation License */}
                    <GlassCard className="p-8 flex flex-col h-full border-border">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Evaluation</h3>
                            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">$0</div>
                            <p className="text-sm text-muted-foreground">3-month term</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Full RTL Access (Encrypted)",
                                "Simulation Testbench",
                                "Documentation Access",
                                "Email Support",
                                "No Tapeout Rights"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="w-full">
                            <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary">
                                Request Access
                            </Button>
                        </Link>
                    </GlassCard>

                    {/* Single-Use License */}
                    <GlassCard className="p-8 flex flex-col h-full border-emerald-500/50 bg-emerald-500/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Single Project</h3>
                            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Contact Us</div>
                            <p className="text-sm text-muted-foreground">Per SoC instantiation</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Full RTL Source (Unencrypted)",
                                "Unlimited Modifications",
                                "Single Tapeout Right",
                                "1 Year Priority Support",
                                "Commercial Warranty"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="w-full">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                Get Quote
                            </Button>
                        </Link>
                    </GlassCard>

                    {/* Multi-Use License */}
                    <GlassCard className="p-8 flex flex-col h-full border-border">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-foreground mb-2">Unlimited</h3>
                            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Custom</div>
                            <p className="text-sm text-muted-foreground">Enterprise agreement</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Everything in Single Project",
                                "Unlimited Tapeouts",
                                "Multi-Site Usage",
                                "Dedicated FAE Support",
                                "Roadmap Influence"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="w-full">
                            <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary">
                                Contact Sales
                            </Button>
                        </Link>
                    </GlassCard>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto pt-12 space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                        Common Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Are there any royalties?",
                                a: "No. All our licenses are one-time buyout fees. You pay once and own the IP rights for your specific project scope."
                            },
                            {
                                q: "Do I get the full source code?",
                                a: "Yes. Single Project and Unlimited licenses include full, unencrypted SystemVerilog RTL source code."
                            },
                            {
                                q: "What about verification?",
                                a: "We provide a complete verification suite including UVM testbenches, C++ reference models, and formal verification properties."
                            }
                        ].map((faq, i) => (
                            <GlassCard key={i} className="p-6 space-y-2">
                                <h3 className="text-lg font-bold text-foreground">{faq.q}</h3>
                                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
