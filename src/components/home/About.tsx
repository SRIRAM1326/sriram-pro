"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bento-card flex flex-col justify-center"
                    >
                        <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-10">About Me</h2>
                        <div className="space-y-8 text-lg md:text-xl text-white/50 font-medium leading-relaxed">
                            <p>
                                I build trading systems the way engineers build critical infrastructure —
                                <span className="text-white border-b border-brand-blue/30">structured, resilient, and designed for real-world pressure.</span>
                            </p>
                            <p>
                                With a foundation in information systems and hands-on experience in live derivatives markets, I specialize in developing modular, multi-threaded architectures that transform real-time market data into controlled execution decisions.
                            </p>
                            <p>
                                Outside system design, I enjoy studying market behavior, optimizing strategy logic, and exploring the deeper mechanics of financial infrastructure.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 bento-card flex flex-col justify-center bg-brand-blue/[0.02]"
                    >
                        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-8 font-mono">Core Principles //</h3>
                        <ul className="space-y-6">
                            {[
                                "Performance First",
                                "Deterministic Logic",
                                "Risk-Aware Architecture",
                                "Real-World Resilience"
                            ].map((item, idx) => (
                                <li key={idx} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-sm font-bold text-white">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                        {item}
                                    </div>
                                    <div className="w-full h-[1px] bg-white/5" />
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
