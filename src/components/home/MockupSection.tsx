"use client";

import React from "react";
import { motion } from "framer-motion";
import MockupWindow from "@/components/ui/MockupWindow";

const MockupSection = () => {
    return (
        <section className="py-40 relative overflow-hidden bg-[#090a0c]">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 dot-pattern opacity-40" />

            {/* Cinematic Illumination Glows (Refined Brand Colors) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] illumination-glow-orange opacity-20 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] illumination-glow-blue opacity-20 translate-x-1/2" />

            <div className="section-container relative z-10">
                <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-gradient text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Sync with Intelligence. <br />Both ways.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-white/40 font-medium leading-relaxed"
                    >
                        Manage your trading ecosystems with bidirectional data synchronization.
                        Use our refined interface as an advanced front-end for your algorithms.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Volumetric Background Glow (low opacity, matching Hero depth) */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-125 pointer-events-none" />

                    <MockupWindow title="SUPER-SAR Option Trading Dashboard">
                        <div className="relative rounded-xl overflow-hidden aspect-video border border-white/5">
                            <video
                                src="/assets/huly-mockup.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay to maintain the glassy depth feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/40 to-transparent pointer-events-none" />
                        </div>
                    </MockupWindow>
                </motion.div>
            </div>
        </section>
    );
};

export default MockupSection;
