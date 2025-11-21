"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/bpcore-logo.webp";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 md:px-12 pointer-events-none">
            {/* Logo - Top Left (Always Visible) */}
            <div className="pointer-events-auto">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src={logoImg}
                            alt="BPcore Silicon Logo"
                            fill
                            className="object-contain invert"
                            placeholder="blur"
                        />
                    </div>
                    <span className="font-bold text-white text-lg md:text-xl tracking-tight">BPcore Silicon</span>
                </Link>
            </div>

            {/* Desktop Navigation - Centered Pill */}
            <nav className="hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-lg">
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

            {/* Mobile Navigation - Hamburger Right */}
            <div className="md:hidden pointer-events-auto">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-full w-10 h-10">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] bg-zinc-950 border-zinc-800 p-6">
                        <SheetTitle className="text-zinc-100 mb-6">Navigation</SheetTitle>
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                                            isActive
                                                ? "bg-zinc-800 text-white"
                                                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
