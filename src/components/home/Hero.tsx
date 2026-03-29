"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, MapPin, Briefcase } from "lucide-react";
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
                <div className="flex flex-col items-start text-left max-w-5xl mx-auto w-full">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gradient text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-[1.2] mb-10"
                    >
                        Hi, I'm Sri Ram, building <span className="text-white/40">algorithmic trading systems</span> and <span className="text-white/40">quantitative infrastructure.</span><br />
                        I work on <span className="text-white/40">real-time market data, automated strategies,</span> and <span className="text-white/40">broker API execution engines.</span>
                    </motion.h1>


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-full max-w-4xl"
                    >
                        <div className="glass-premium rounded-3xl p-8 border border-white/10 shadow-3xl text-left">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                <div className="flex flex-wrap gap-4">
                                    <SpotlightButton href="#projects" className="group flex items-center gap-2 text-sm px-4 py-2">
                                        About my project
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </SpotlightButton>
                                    <SpotlightButton
                                        href="/Sriram_Resume_13.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-4 py-2"
                                    >
                                        My Resume
                                    </SpotlightButton>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 text-white/50 text-xs font-medium border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                            <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                                        </div>
                                        <span className="text-white/80">1+ Year Exp</span>
                                    </div>
                                    <a href="https://www.linkedin.com/in/sriram-m-b0b9033b5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                        <img src="/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5" />
                                        LinkedIn
                                    </a>
                                    <a href="mailto:sriram1326.io@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                        <img src="/email-icon.png" alt="Email" className="w-5 h-5" />
                                        Email
                                    </a>
                                    <div className="flex items-center gap-2">
                                        <img src="/location-icon.png" alt="Location" className="w-5 h-5" />
                                        Chennai, India
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
