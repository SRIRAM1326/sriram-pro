"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-32 relative bg-black overflow-hidden">
            <div className="ambient-glow-blue glow-overlay w-full h-[300px] bottom-0 left-0 opacity-5 pointer-events-none" />

            <div className="section-container relative z-10 w-full max-w-6xl mx-auto px-6">
                <div className="py-10 md:py-16 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-[31px] md:gap-4">
                        <div className="max-w-xl relative z-10">
                            <h2 className="max-w-[510px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-transparent text-[44px] md:text-[56px] lg:text-[80px] font-inter font-medium leading-tight tracking-[-0.03em] mb-7 mt-2">
                                Join the Future of Trading Systems
                            </h2>
                            <div className="space-y-6 text-white/50 font-inter font-normal text-lg leading-relaxed mb-10">
                                <p>
                                    Building intelligent infrastructure for algorithmic trading and real-time market analysis.
                                </p>
                                <p>
                                    Designing systems that process live market data, generate quantitative signals, and execute trades automatically.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#systems"
                                    className="px-6 py-4 rounded-xl bg-white text-black font-inter font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
                                >
                                    View Trading Systems
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sriram-m-b0b9033b5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-4 rounded-xl border border-white/10 text-white font-inter font-bold hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:w-auto w-full">
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-sm">
                                        <Mail className="w-4 h-4 text-brand-blue" />
                                        <a href="mailto:sriram1326.io@gmail.com" className="hover:text-brand-blue transition-colors">sriram1326.io@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-sm">
                                        <MapPin className="w-4 h-4 text-brand-blue" />
                                        <span>Chennai, India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">Location</h3>
                                <p className="text-white/40 text-sm font-medium leading-relaxed">
                                    Operating remotely from Chennai.<br />
                                    Available for global opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                                © 2026 Sriram M — Quant Trading Systems
                            </p>
                            <p className="text-sm font-inter text-white/30">
                                Built with passion for algorithmic trading and financial technology.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Systems Nominal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
