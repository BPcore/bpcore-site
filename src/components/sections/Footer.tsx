import { Github, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-6 md:px-12 border-t border-border bg-background relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="text-xl font-bold text-foreground tracking-tight">
                        BPcore Silicon
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Production-ready RISC-V NPU IP.<br />
                        Royalty-Free. Full Source.<br />
                        Made in India.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto pt-4">
                        <span>Made in India</span>
                        <span className="text-lg">🇮🇳</span>
                    </div>
                </div>

                {/* Features Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Features
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Modular Tile Mesh</li>
                        <li>Int8→Int32 Compute</li>
                        <li>Sparsity-Aware Execution</li>
                        <li>Deterministic Validation</li>
                        <li>DVFS & Clock Gating</li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Contact
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="font-medium text-foreground">Email Us</div>
                        <a
                            href="mailto:info@bpcore-silicon.com"
                            className="block text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
                        >
                            info@bpcore-silicon.com
                        </a>
                    </div>
                </div>

                {/* Social & Legal Column */}
                <div className="flex flex-col gap-4 md:items-end">
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:info@bpcore-silicon.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-right mt-auto">
                        © 2025 BPcore Silicon.<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
