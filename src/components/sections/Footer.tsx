import { Github, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-6 md:px-12 border-t border-zinc-800 bg-zinc-950 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="text-xl font-bold text-white tracking-tight">
                        BPcore Silicon
                    </div>
                    <p className="text-zinc-500 text-sm">
                        © 2025 BPcore Silicon. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:info@bpcore-silicon.com"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span>Made in India</span>
                    <span className="text-lg">🇮🇳</span>
                </div>
            </div>
        </footer>
    );
}
