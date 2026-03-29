"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
    {
        date: "Dec 2024 – Present",
        role: "Algorithmic Trading Developer",
        company: "UVFarms",
        description: "Engineered a low-latency, multi-threaded trading framework for live derivatives markets. Achieved 99.9% uptime and sub-100ms latency.",
        details: {
            fullTitle: "Algorithmic Trading Developer – UV Farms (uvfarms.in)",
            sections: [
                {
                    title: "My Role",
                    content: "I worked as an Algorithmic Trading Developer, responsible for building and maintaining fully automated trading systems for NIFTY and SENSEX derivatives. My role focused on developing low-latency infrastructure, implementing systematic strategies, and ensuring reliable real-time execution with strict risk controls."
                },
                {
                    title: "My Responsibilities",
                    items: [
                        "Design and develop automated trading strategies",
                        "Build and maintain real-time market data pipelines using WebSockets",
                        "Implement order execution and risk management systems",
                        "Integrate broker APIs (Dhan, Flattrade) for live trading",
                        "Monitor system performance, latency, and uptime",
                        "Ensure trade accuracy through position reconciliation and validation",
                        "Maintain system stability during high-volatility market conditions"
                    ]
                },
                {
                    title: "What I Did",
                    items: [
                        "Engineered a multi-threaded Python trading framework capable of processing live tick data with sub-100ms execution latency",
                        "Designed and deployed 6+ rule-based strategies using VWAP, Supertrend, SAR, CPR, and ATR across multiple timeframes",
                        "Built ATR-based stop-loss and dynamic risk management mechanisms",
                        "Automated the entire trade lifecycle including order placement, validation, error handling, and kill-switch logic",
                        "Created a modular backtesting system to test strategy robustness before live deployment",
                        "Implemented watchdog systems and retry mechanisms to reduce manual intervention by 95%",
                        "Developed internal monitoring dashboards to track P&L, drawdown, API latency, and system health"
                    ]
                },
                {
                    title: "What I Learned",
                    items: [
                        "How to design production-grade trading systems with high reliability and low latency",
                        "Practical risk management beyond theory — handling slippage, volatility spikes, and execution failures",
                        "Deep understanding of market microstructure and intraday derivatives behavior",
                        "Writing clean, modular, scalable Python code for real-time systems",
                        "Managing API limitations, WebSocket stability, and edge-case failures in live environments",
                        "The importance of discipline, monitoring, and continuous optimization in algorithmic trading"
                    ]
                }
            ]
        }
    },
    {
        role: "B.Com in Information Systems Management",
        company: "SRM Institute of Science & Technology",
        date: "Jan 2021 – May 2023",
        description: "Unique blend of commerce and computer science. Foundation for financially grounded and engineering-sound trading systems.",
        details: {
            fullTitle: "B.Com in Information Systems Management – SRMIST, Chennai",
            sections: [
                {
                    title: "Academic Journey",
                    content: "I completed my degree with a CGPA of 7.83. It was an interdisciplinary course where I studied finance, accounting, and economics alongside databases, information systems, and data analysis."
                },
                {
                    title: "Curriculum Highlights",
                    items: [
                        "Financial Accounting & Accounting Standards",
                        "Database Management Systems (DBMS)",
                        "Management Information Systems",
                        "Business Statistical Analysis",
                        "Economics & Financial Markets"
                    ]
                },
                {
                    title: "Strategic Synergy",
                    content: "This combination helped me bridge the gap between financial theory and technical execution. I learned to understand markets from a commerce perspective while building systems to automate them."
                },
                {
                    title: "Certifications & Training",
                    items: [
                        "IBM SPSS Statistics: Training in statistical analysis and data modeling",
                        "MS Office Automation: Advanced Excel and reporting through School of Management",
                        "NPTEL Certification: Coursework to strengthen core fundamentals"
                    ]
                }
            ]
        }
    },
    {
        date: "Dec 2022 – Feb 2023",
        role: "Business Associate",
        company: "Domino’s",
        description: "Foundational experience in high-pressure operations, logistics efficiency, and precision management.",
        details: {
            fullTitle: "Business Associate – My Experience at Domino’s",
            sections: [
                {
                    title: "My Role",
                    content: "I worked at Domino’s as a team member and cashier. Since it was my first job, it gave me real exposure to a fast-paced work environment where teamwork, customer service, and time management were very important."
                },
                {
                    title: "My Responsibilities",
                    items: [
                        "Handling cash transactions and accurate billing",
                        "Managing orders and assisting customers in person and over phone",
                        "Supporting the team during peak hours for smooth order flow",
                        "Tracking payments and ensuring financial reconciliation",
                        "Resolving customer concerns to ensure satisfaction"
                    ]
                },
                {
                    title: "What I Did",
                    content: "I worked closely with kitchen staff and delivery teams to ensure orders were prepared and dispatched on time. I learned to stay calm under pressure and maintain quick service without compromising quality during intense rush hours."
                },
                {
                    title: "What I Learned",
                    items: [
                        "Developed strong communication and coordination skills",
                        "Learned teamwork and basic team handling in high-speed environments",
                        "Improved time management and presence of mind during peak hours",
                        "Gained practical understanding of money management and billing accuracy",
                        "Understood the importance of discipline and speed in operations"
                    ]
                }
            ]
        }
    },
];

const Timeline = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="timeline" className="py-32 relative">
            <div className="ambient-glow-purple glow-overlay w-96 h-96 bottom-0 right-0 opacity-10" />

            <div className="section-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-6">Professional Timeline</h2>
                    <div className="w-12 h-1 bg-brand-blue rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {experiences.map((exp, idx) => {
                        const isHovered = hoveredIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    opacity: { duration: 0.5, delay: idx * 0.1 },
                                    y: { duration: 0.5, delay: idx * 0.1 },
                                    layout: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                                }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`bento-card group relative overflow-hidden transition-colors duration-500 border-white/5 ${isHovered ? 'border-brand-blue/40 shadow-[0_0_50px_-12px_rgba(0,163,255,0.2)]' : 'hover:border-white/10'
                                    } p-1`}
                            >
                                <div className="relative">
                                    {/* Summary View */}
                                    <motion.div
                                        layout
                                        animate={{
                                            opacity: isHovered ? 0 : 1,
                                            height: isHovered ? 0 : 'auto',
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="flex flex-col md:flex-row md:items-center gap-8 p-4 md:p-6 overflow-hidden"
                                    >
                                        <div className="flex-shrink-0 w-32 md:w-40 border-l border-white/10 pl-6 h-full flex flex-col justify-center">
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] font-mono mb-2">{exp.date}</span>
                                            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-mono">{exp.company}</span>
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-space-grotesk tracking-tight">{exp.role}</h3>
                                            <p className="text-white/40 text-sm md:text-base leading-relaxed line-clamp-2 font-medium">{exp.description}</p>
                                        </div>

                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-8 h-8 rounded-full border border-brand-blue/20 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Detailed "BIG" View */}
                                    {exp.details && (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: isHovered ? 1 : 0,
                                                height: isHovered ? 'auto' : 0,
                                            }}
                                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 md:p-12 bg-[#0A0A0B]/50 backdrop-blur-3xl">
                                                <div className="flex flex-col mb-10 border-b border-white/10 pb-6">
                                                    <span className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-mono mb-4">Detailed Experience Overview</span>
                                                    <h4 className="font-space-grotesk text-2xl md:text-3xl font-bold text-white leading-tight">
                                                        {exp.details.fullTitle}
                                                    </h4>
                                                </div>

                                                <div className="grid grid-cols-1 gap-12">
                                                    {exp.details.sections.map((section, sIdx) => (
                                                        <div key={sIdx} className="relative">
                                                            <div className="flex items-center gap-4 mb-6">
                                                                <div className="w-8 h-[1px] bg-brand-blue/50" />
                                                                <h5 className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.4em] font-mono">
                                                                    {section.title}
                                                                </h5>
                                                            </div>

                                                            {section.content ? (
                                                                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium pl-12 border-l border-brand-blue/10">
                                                                    {section.content}
                                                                </p>
                                                            ) : (
                                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pl-12">
                                                                    {section.items?.map((item, iIdx) => (
                                                                        <li key={iIdx} className="flex items-start gap-4 group/item">
                                                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                                                            <span className="text-white/60 text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors duration-300">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
                                                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] font-mono">
                                                        Professional Portfolio — 2026
                                                    </span>
                                                    <div className="flex gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/20" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
