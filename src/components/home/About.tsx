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

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-6 text-lg md:text-xl text-black/70 font-inter font-normal leading-relaxed">
                                <div className="flex items-center gap-3 mb-6">
                                    <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] font-mono">Story // About</h3>
                                    <div className="flex-1 h-[1px] bg-black/5" />
                                </div>
                                <p className="text-black font-semibold text-2xl md:text-3xl leading-tight">
                                    I build algorithmic trading systems that transform market data into <span className="text-brand-blue">automated decisions.</span>
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
                        >
                            {[
                                {
                                    title: "Quantitative Thinking",
                                    description: "Designing rule-based strategies using statistical analysis.",
                                    color: "rose"
                                },
                                {
                                    title: "Real-Time Systems",
                                    description: "Processing live market data using WebSockets and APIs.",
                                    color: "emerald"
                                },
                                {
                                    title: "Trading Infrastructure",
                                    description: "Building automated execution engines for algorithmic trading.",
                                    color: "sky"
                                }
                            ].map((box, idx) => (
                                <div 
                                    key={idx} 
                                    className={`p-6 rounded-[22px] border transition-all duration-300 flex flex-col gap-4 group hover:scale-[1.02] shadow-sm hover:shadow-xl
                                        ${box.color === 'rose' ? 'bg-rose-50/50 border-rose-100 hover:bg-rose-50' : ''}
                                        ${box.color === 'emerald' ? 'bg-emerald-50/50 border-emerald-100 hover:bg-emerald-50' : ''}
                                        ${box.color === 'sky' ? 'bg-sky-50/50 border-sky-100 hover:bg-sky-50' : ''}
                                    `}
                                >
                                    {/* macOS dots */}
                                    <div className="flex gap-1.5">
                                        <div className={`w-2.5 h-2.5 rounded-full transition-colors ${box.color === 'rose' ? 'bg-rose-400' : 'bg-black/5 group-hover:bg-rose-400'}`} />
                                        <div className={`w-2.5 h-2.5 rounded-full transition-colors ${box.color === 'emerald' ? 'bg-emerald-400' : 'bg-black/5 group-hover:bg-emerald-400'}`} />
                                        <div className={`w-2.5 h-2.5 rounded-full transition-colors ${box.color === 'sky' ? 'bg-sky-400' : 'bg-black/5 group-hover:bg-sky-400'}`} />
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className={`font-bold text-[15px] ${
                                            box.color === 'rose' ? 'text-rose-900' : 
                                            box.color === 'emerald' ? 'text-emerald-900' : 
                                            'text-sky-900'
                                        }`}>
                                            {box.title}
                                        </h4>
                                        <p className={`text-sm leading-relaxed ${
                                            box.color === 'rose' ? 'text-rose-700/70' : 
                                            box.color === 'emerald' ? 'text-emerald-700/70' : 
                                            'text-sky-700/70'
                                        }`}>
                                            {box.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <div className={`w-8 h-[2px] rounded-full group-hover:w-full transition-all duration-500 ease-out ${
                                            box.color === 'rose' ? 'bg-rose-400/30' : 
                                            box.color === 'emerald' ? 'bg-emerald-400/30' : 
                                            'bg-sky-400/30'
                                        }`} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Small Personal Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="pt-20 text-center border-t border-black/5"
                        >
                            <p className="text-black/40 text-sm md:text-base font-medium italic max-w-2xl mx-auto">
                                "Markets are one of the few places where mathematics, psychology, and technology meet in real time."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
