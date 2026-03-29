"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Network, ShieldCheck, Zap, LineChart } from "lucide-react";

const ArchitectureNode = ({ title, items, delay = 0 }: { title: string, items: string[], delay?: number }) => (
    <div className="relative rounded-[40px] flex-1 w-full max-w-[320px] transition-transform duration-300 hover:-translate-y-1 p-[3px] overflow-hidden group">
        {/* Animated Border Beam */}
        <div
            className="border-beam opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{ animationDelay: `${delay}s` }}
        />

        {/* Inner Content */}
        <div className="relative flex flex-col items-center justify-center py-6 px-4 bg-white rounded-[37px] w-full h-full min-h-[140px] text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] z-10">
            <h4 className="font-inter font-extrabold text-black text-[15px] md:text-[17px] mb-2">{title}</h4>
            <p className="font-inter font-normal text-black/80 text-[12px] md:text-[14px] leading-relaxed max-w-[260px]">
                {items.join(' • ')}
            </p>
        </div>
    </div>
);

const ChunkyArrow = ({ className = "" }: { className?: string }) => (
    <svg className={`w-10 h-10 md:w-14 md:h-14 text-black/20 flex-shrink-0 opacity-100 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 10h10v-4l8 6-8 6v-4H4z" />
    </svg>
);

const SystemsIBuild = () => {
    const systems = [
        {
            title: "Data Ingestion",
            description: "Collects live market data from WebSocket feeds, including tick prices and market updates.",
            Icon: Database,
            gradient: "url(#icon-gradient-1)",
            bgClass: "bg-blue-500/10",
            borderClass: "border-blue-500/20",
            shadowClass: "shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        },
        {
            title: "Processing Layer",
            description: "Processes incoming data to compute indicators and generate trading signals.",
            Icon: Cpu,
            gradient: "url(#icon-gradient-2)",
            bgClass: "bg-purple-500/10",
            borderClass: "border-purple-500/20",
            shadowClass: "shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        },
        {
            title: "Strategy Engine",
            description: "Applies rule-based trading logic to evaluate market conditions and decide when to trade.",
            Icon: Network,
            gradient: "url(#icon-gradient-3)",
            bgClass: "bg-emerald-500/10",
            borderClass: "border-emerald-500/20",
            shadowClass: "shadow-[0_0_15px_rgba(16,185,129,0.15)]"
        },
        {
            title: "Risk Controls",
            description: "Manages trading risk through position limits, drawdown checks, and exposure control.",
            Icon: ShieldCheck,
            gradient: "url(#icon-gradient-4)",
            bgClass: "bg-rose-500/10",
            borderClass: "border-rose-500/20",
            shadowClass: "shadow-[0_0_15px_rgba(244,63,94,0.15)]"
        },
        {
            title: "Execution Engine",
            description: "Connects to broker APIs to place orders and manage trades automatically.",
            Icon: Zap,
            gradient: "url(#icon-gradient-5)",
            bgClass: "bg-amber-500/10",
            borderClass: "border-amber-500/20",
            shadowClass: "shadow-[0_0_15px_rgba(245,158,11,0.15)]"
        },
        {
            title: "Monitoring & Logs",
            description: "Tracks system performance, sends alerts, and monitors the health of the trading system.",
            Icon: LineChart,
            gradient: "url(#icon-gradient-6)",
            bgClass: "bg-indigo-500/10",
            borderClass: "border-indigo-500/20",
            shadowClass: "shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        }
    ];

    return (
        <section className="py-24 md:py-32 relative bg-white">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold font-inter tracking-tight mb-4 text-black text-center md:text-left">Systems I Build</h2>
                </motion.div>

                {/* Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col gap-6 md:gap-12 w-full max-w-6xl mx-auto"
                >
                    {/* Row 1 */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
                        <ArchitectureNode
                            title="Data Ingestion"
                            items={["WebSocket feeds", "Tick-level data", "Market updates"]}
                            delay={0}
                        />
                        <ChunkyArrow className="rotate-90 lg:rotate-0 my-2 lg:my-0" />
                        <ArchitectureNode
                            title="Processing Layer"
                            items={["Indicator computation", "Signal generation", "Pattern recognition"]}
                            delay={0.5}
                        />
                        <ChunkyArrow className="rotate-90 lg:rotate-0 my-2 lg:my-0" />
                        <ArchitectureNode
                            title="Strategy Engine"
                            items={["Rule-based logic", "Backtesting", "Live evaluation"]}
                            delay={1.0}
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2 mt-4 lg:mt-0">
                        <ArchitectureNode
                            title="Risk Controls"
                            items={["Position limits", "Drawdown management", "Exposure controls"]}
                            delay={1.5}
                        />
                        <ChunkyArrow className="rotate-90 lg:rotate-0 my-2 lg:my-0" />
                        <ArchitectureNode
                            title="Execution Engine"
                            items={["Broker integration", "Order placement", "Trade management"]}
                            delay={2.0}
                        />
                        <ChunkyArrow className="rotate-90 lg:rotate-0 my-2 lg:my-0" />
                        <ArchitectureNode
                            title="Monitoring & Logs"
                            items={["Performance tracking", "Real-time alerts", "System health"]}
                            delay={2.5}
                        />
                    </div>
                </motion.div>

                {/* Details List (No Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-12 w-full max-w-6xl mx-auto">
                    {systems.map((system, idx) => {
                        const Icon = system.Icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl border ${system.borderClass} ${system.bgClass} ${system.shadowClass} flex items-center justify-center`}>
                                        <Icon className="w-6 h-6" stroke={system.gradient} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-extrabold font-inter text-black">{system.title}</h3>
                                </div>
                                <p className="font-inter font-normal text-black/70 leading-relaxed">
                                    {system.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* SVG Gradients Definition */}
                <svg width="0" height="0" className="absolute">
                    <defs>
                        <linearGradient id="icon-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#3B82F6" offset="0%" />
                            <stop stopColor="#06B6D4" offset="100%" />
                        </linearGradient>
                        <linearGradient id="icon-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#A855F7" offset="0%" />
                            <stop stopColor="#EC4899" offset="100%" />
                        </linearGradient>
                        <linearGradient id="icon-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#10B981" offset="0%" />
                            <stop stopColor="#14B8A6" offset="100%" />
                        </linearGradient>
                        <linearGradient id="icon-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#F43F5E" offset="0%" />
                            <stop stopColor="#F97316" offset="100%" />
                        </linearGradient>
                        <linearGradient id="icon-gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#F59E0B" offset="0%" />
                            <stop stopColor="#F97316" offset="100%" />
                        </linearGradient>
                        <linearGradient id="icon-gradient-6" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor="#6366F1" offset="0%" />
                            <stop stopColor="#8B5CF6" offset="100%" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default SystemsIBuild;
