"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import SpotlightButton from "@/components/ui/SpotlightButton";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-32 overflow-hidden bg-[#090a0c]">
            {/* SaaS Grid Background */}
            <div className="grid-background" />

            {/* Ambient Glows */}
            <div className="ambient-glow-blue glow-overlay w-[600px] h-[600px] -top-100 -left-100 opacity-20" />
            <div className="ambient-glow-purple glow-overlay w-[600px] h-[600px] top-40 -right-100 opacity-10" />

            <div className="section-container relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gradient text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-10"
                    >
                        Hi, I&apos;m Sriram M<br />
                        <span className="text-white/40">Algorithmic Trading developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-12 max-w-2xl"
                    >
                        I build trading systems the way engineers build critical infrastructure —
                        structured, resilient, and designed for real-world pressure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-24"
                    >
                        <SpotlightButton href="#projects" className="group flex items-center gap-2">
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </SpotlightButton>
                        <SpotlightButton
                            href="/Sriram_Resume_13.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </SpotlightButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-full max-w-3xl"
                    >
                        <div className="glass-premium rounded-3xl p-8 border border-white/10 shadow-3xl text-left">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                                        <TerminalIcon className="w-5 h-5 text-brand-blue" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-white uppercase tracking-widest">System Monitor</span>
                                        <span className="block text-[10px] text-white/40 font-mono">v4.0.2 // STABLE</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Live Execution
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                                {[
                                    { label: "Experience", value: "2+", color: "text-brand-blue" },
                                    { label: "Latency", value: "< 100ms", color: "text-emerald-400" },
                                    { label: "Uptime", value: "99.9%", color: "text-emerald-400" },
                                    { label: "Strategies", value: "10+", color: "text-brand-blue" },
                                    { label: "Markets", value: "Derivatives", color: "text-brand-blue" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <span className="block text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono">{stat.label}</span>
                                        <span className={`block text-xl font-bold font-mono ${stat.color}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
