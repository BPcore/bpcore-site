"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
    { name: "Licensing", path: "/licensing" },
    { name: "What Buyers Get", path: "/buyers" },
    { name: "Performance", path: "/performance" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
            <nav className="flex items-center gap-1 p-1 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-lg">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                                isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
