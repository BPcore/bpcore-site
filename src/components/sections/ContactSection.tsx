"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to integrate NeuraEdge™ into your next SoC?
                        <br />
                        Our engineering team is ready to support your evaluation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <GlassCard className="p-6 space-y-4">
                            <div className="flex items-center gap-3 text-foreground">
                                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span className="font-medium">Email</span>
                            </div>
                            <a
                                href="mailto:info@bpcore-silicon.com"
                                className="block text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                info@bpcore-silicon.com
                            </a>
                        </GlassCard>

                        <GlassCard className="p-6 space-y-4">
                            <div className="flex items-center gap-3 text-foreground">
                                <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span className="font-medium">Location</span>
                            </div>
                            <p className="text-muted-foreground">
                                Bangalore, India<br />
                                <span className="text-sm opacity-70">Global Support Available</span>
                            </p>
                        </GlassCard>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <GlassCard className="p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                                            First Name
                                        </label>
                                        <Input
                                            id="firstName"
                                            placeholder="Jane"
                                            className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                                            Last Name
                                        </label>
                                        <Input
                                            id="lastName"
                                            placeholder="Doe"
                                            className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Work Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="jane@company.com"
                                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                                        Company
                                    </label>
                                    <Input
                                        id="company"
                                        placeholder="Company Name"
                                        className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project requirements..."
                                        className="min-h-[120px] bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                    />
                                </div>

                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium h-11">
                                    Send Message
                                </Button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
