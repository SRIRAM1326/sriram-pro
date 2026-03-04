"use client";

import { motion } from "framer-motion";
import { BarChart3, Binary, ShieldCheck } from "lucide-react";

const expertiseAreas = [
    {
        title: "Algorithmic Market Systems",
        icon: <Binary className="w-6 h-6 text-brand-blue" />,
        skills: ["Real-time data (WebSocket/REST)", "Multi-threaded engines", "Execution lifecycle", "Order management"],
    },
    {
        title: "Data & Analytics",
        icon: <BarChart3 className="w-6 h-6 text-brand-blue" />,
        skills: ["Python (Pandas, NumPy)", "Time-series analysis", "Statistical modeling", "Dashboard development"],
    },
    {
        title: "Infrastructure & Security",
        icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
        skills: ["Risk-aware stop-loss", "Capital protection", "Latency optimization", "Failover handling"],
    },
];

const Expertise = () => {
    return (
        <section id="expertise" className="py-32 relative overflow-hidden">
            <div className="ambient-glow-blue glow-overlay w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2 opacity-5" />

            <div className="section-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-6">Technical Expertise</h2>
                    <p className="text-white/40 font-medium max-w-xl">Deep technical proficiency in high-performance trading infrastructure and quantitative analytics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bento-card group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:border-brand-blue/30 transition-all duration-500">
                                {area.icon}
                            </div>
                            <h3 className="font-space-grotesk text-xl font-bold mb-6 text-white">{area.title}</h3>
                            <ul className="space-y-4">
                                {area.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-white/40 text-sm font-medium">
                                        <div className="w-1 h-1 rounded-full bg-brand-blue/50" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
