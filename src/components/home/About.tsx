"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-32 relative bg-white">
            <div className="section-container">
                {/* Short Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <div className="px-6 py-2 rounded-full border border-black/10 bg-black/5 text-[10px] md:text-xs font-bold text-black/60 uppercase tracking-[0.2em] font-mono backdrop-blur-md">
                        Algorithmic Trading • Quantitative Systems • Real-Time Data Infrastructure
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-b from-black to-black/60 bg-clip-text text-transparent">
                            The Journey Into Quantitative Trading
                        </h2>
                        <p className="text-black/40 text-lg md:text-xl font-medium">
                            How curiosity about markets turned into building automated trading systems.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* Story Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-6 text-lg md:text-xl text-black/70 font-inter font-normal leading-relaxed text-left">
                                <div className="flex items-center gap-3 mb-6">
                                    <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] font-mono">Story // About</h3>
                                    <div className="flex-1 h-[1px] bg-black/5" />
                                </div>
                                <p className="text-black font-semibold text-2xl md:text-3xl leading-tight">
                                    I build algorithmic trading systems that transform market data into <span className="text-blue-600">automated decisions.</span>
                                </p>
                                <p>
                                    My work focuses on designing <span className="font-bold text-black/90">real-time trading infrastructure</span> that processes live market feeds, calculates quantitative indicators, and executes trades through broker APIs.
                                </p>
                                <p>
                                    From building VWAP-based strategies to designing event-driven trading systems, I enjoy solving complex problems at the intersection of <span className="font-bold text-black/90">finance, data, and software engineering.</span>
                                </p>
                                <p className="text-xl md:text-2xl font-medium text-black/80 italic border-l-4 border-black/10 pl-6 py-2">
                                    "I believe modern markets are driven by data, speed, and systematic decision making — and my goal is to build the technology that powers those systems."
                                </p>
                            </div>
                        </motion.div>

                        {/* Why Hire Me Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="pt-16 border-t border-black/5"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="text-left">
                                    <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] font-mono mb-6">Expertise // Why Hire Me</h3>
                                    <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                                        Engineering Reliability in <span className="text-black/40">Highly Volatile Markets</span>.
                                    </h4>
                                    <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-8">
                                        I build and deploy production-grade algorithmic trading systems with a strong focus on <span className="text-black font-semibold">performance, reliability, and risk control.</span>
                                    </p>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8 bg-black/[0.02] rounded-[32px] border border-black/[0.04]">
                                    {[
                                        { label: "Execution Latency", value: "<100ms" },
                                        { label: "System Uptime", value: "99.9%" },
                                        { label: "Automation Boost", value: "+95%" },
                                        { label: "Active Strategies", value: "06+" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center text-center p-4">
                                            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-black">{stat.value}</span>
                                            <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest mt-1">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 text-lg text-black/70 leading-relaxed text-left">
                                    <p>
                                        My systems handle real-time market data and automated trade execution across multiple broker APIs, capable of processing high-frequency data streams during peak market conditions without manual overhead.
                                    </p>
                                    <p>
                                        I specialize in designing scalable, low-latency architectures with end-to-end automation, reducing manual intervention by 95% while maintaining strict risk management through structured stop-loss and real-time monitoring systems.
                                    </p>
                                    <p className="font-medium text-black/80">
                                        With hands-on experience in real-time data pipelines, WebSocket integration, and quantitative strategy development, I can contribute immediately to building high-performance trading or data-driven systems.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
