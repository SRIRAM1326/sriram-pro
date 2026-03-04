"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-32 relative overflow-hidden">
            <div className="ambient-glow-blue glow-overlay w-full h-[300px] bottom-0 left-0 opacity-5" />

            <div className="section-container">
                <div className="bento-card p-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-left">
                        <div className="max-w-md">
                            <h2 className="text-gradient text-4xl font-bold mb-6 tracking-tight">
                                Ready for the <span className="text-brand-blue">next challenge.</span>
                            </h2>
                            <p className="text-white/40 font-medium mb-10 leading-relaxed text-lg">
                                I’m always open to discussing strategic systems, engineering challenges, or new opportunities in trading technology.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a
                                    href="mailto:sriram132607@gmail.com"
                                    className="p-4 rounded-2xl bg-white text-black hover:bg-white/90 transition-all shadow-xl shadow-white/5"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/sriram1326"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl border border-white/10 text-white hover:border-white/30 hover:bg-white/5 transition-all"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-white font-bold text-sm">
                                        <Mail className="w-4 h-4 text-brand-blue" />
                                        <a href="mailto:sriram132607@gmail.com" className="hover:text-brand-blue transition-colors">sriram132607@gmail.com</a>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-white font-bold text-sm">
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

                    <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                            © 2026 SRIRAM M // QUANT INFRASTRUCTURE
                        </p>
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
