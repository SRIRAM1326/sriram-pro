"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import SpotlightButton from "@/components/ui/SpotlightButton";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px] z-50 transition-all duration-500">
            <div className={`p-1 rounded-2xl transition-all duration-500 ${scrolled ? 'glass-premium' : 'bg-white/5 border border-white/5'}`}>
                <div className="px-8 h-14 flex justify-between items-center bg-transparent">
                    <Link href="/" className="font-space-grotesk font-bold text-lg tracking-tighter">
                        SRIRAM<span className="text-brand-blue">M</span>
                    </Link>
                    <div className="hidden md:flex gap-8 items-center">
                        {['About', 'Expertise', 'Timeline', 'Projects', 'Research'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        <SpotlightButton
                            href="mailto:sriram132607@gmail.com"
                            className="!px-5 !py-2 !text-[9px] min-w-[100px]"
                        >
                            Contact
                        </SpotlightButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
