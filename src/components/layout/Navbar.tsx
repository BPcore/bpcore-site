"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
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
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-lg">
                <Link href="/" className="px-4 py-2 flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/bpcore-logo.png"
                            alt="BPcore Silicon Logo"
                            fill
                            className="object-contain invert"
                        />
                    </div>
                    <span className="font-bold text-white">BPcore Silicon</span>
                </Link>
                <div className="w-px h-6 bg-zinc-800 mx-2" />
                {navItems.map((item) => {
                    if (item.path === "/") return null; // Skip Home in list as it's the logo
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

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center justify-between w-full max-w-md mx-auto bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 shadow-lg rounded-full px-4 py-2">
                <Link href="/" className="flex items-center gap-2 px-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/bpcore-logo.png"
                            alt="BPcore Silicon Logo"
                            fill
                            className="object-contain invert"
                        />
                    </div>
                    <span className="text-white font-bold text-lg">BPcore</span>
                </Link>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                            <Menu className="w-6 h-6" />
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
