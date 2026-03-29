"use client";

import { motion } from "framer-motion";
import { 
    Activity, 
    Zap, 
    BarChart3, 
    PieChart, 
    Database, 
    Sparkles, 
    Code,
    Server
} from "lucide-react";
import React from "react";

const stackItems = [
    {
        title: "Algorithmic Trading",
        description: "Backtesting, risk management, and quantitative strategies for options and futures markets.",
        icon: Activity,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Python Development",
        description: "Building automated trading systems and backend financial applications using Python and Flask.",
        icon: Code,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        title: "Real-Time Systems",
        description: "WebSockets, REST APIs, multithreading, and event-driven architectures for low-latency trading systems.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        title: "Quantitative Research",
        description: "Financial data analysis using Pandas and NumPy for developing and testing trading models.",
        icon: BarChart3,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        title: "Data Visualization",
        description: "Power BI, Tableau, and Matplotlib for analyzing strategy performance and market trends.",
        icon: PieChart,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    },
    {
        title: "Data Engineering",
        description: "SQL, Power Query, and Advanced Excel for financial data processing and transformation.",
        icon: Database,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
    {
        title: "AI Development Tools",
        description: "ChatGPT, Perplexity, Claude, Gemini, Antigravity CLI for research, coding assistance, and automation.",
        icon: Sparkles,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    },
    {
        title: "Market Data Infrastructure",
        description: "Handling real-time market feeds, tick data processing, OHLC aggregation, and exchange data synchronization.",
        icon: Server,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    }
];

import TechDock from "@/components/ui/TechDock";

// ... (existing stackItems data)

const Stack = () => {
    return (
        <section id="stack" className="py-24 relative overflow-hidden">
            <div className="section-container">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Stack</h2>
                </div>

                <TechDock />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {stackItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Content - macOS Notification Style */}
                            <div className="bg-[#1a1a1a]/40 backdrop-blur-2xl rounded-[22px] border border-white/10 p-5 shadow-2xl transition-all duration-300 group-hover:bg-[#1a1a1a]/60 group-hover:scale-[1.02] active:scale-[0.98] cursor-default flex flex-col gap-3 min-h-[160px]">
                                
                                {/* Notification Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-8 h-8 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shadow-lg`}>
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <span className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">
                                            {item.title.split(' ')[0]}
                                        </span>
                                    </div>
                                    <span className="text-[10px] text-white/30 font-medium">Now</span>
                                </div>

                                {/* Notification Body */}
                                <div className="space-y-1.5 pr-2">
                                    <h3 className="text-white font-bold text-[15px] leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-[13px] leading-[1.4] line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
