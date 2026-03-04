"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const researchProjects = [
    {
        date: "SRM UNIVERSITY • 2023",
        title: "Event Marketing – Major Events Analysis",
        description: "Analysed marketing strategy, budgeting and operations across three large-scale events including India International Leather Fair, Chennai Book Fair and ED Pavilion.",
        tags: ["Marketing Strategy", "Budgeting", "Operations"],
        metrics: [
            { label: "VISITORS", value: "100K–600K" },
            { label: "BUDGET", value: "₹42.8L" }
        ],
        details: [
            "Studied events with 100K–600K visitors",
            "Analysed budgets up to ₹42.8L",
            "Evaluated event lifecycle and stakeholder coordination"
        ],
        link: "/Event_Marketing_Report.html"
    },
    {
        date: "SRM UNIVERSITY • 2022",
        title: "Instagram Influencer Marketing Research",
        description: "Conducted quantitative research with 110 respondents to study influencer credibility and purchase behaviour.",
        tags: ["Quantitative Research", "Consumer Behaviour", "Statistics"],
        metrics: [
            { label: "PERFORMANCE", value: "70:30" },
            { label: "RESPONDENTS", value: "110" }
        ],
        details: [
            "Found influencer marketing outperforms traditional media 70:30",
            "Identified trust gap and authenticity impact on retention",
            "Applied statistical analysis and survey research"
        ],
        link: "/Instagram_Impact_Complete.html"
    },
    {
        date: "MAY 2025 – MAY 2025",
        title: "US Health Care Financial Dashboard",
        description: "Executive-level Power BI dashboard analyzing 100,000+ patient records, tracking expenses, insurance recoveries, and financial deficits.",
        tags: ["Power BI", "DAX", "Financial Analysis", "What-If Modelling"],
        metrics: [
            { label: "EXPENSES", value: "₹120 CR" },
            { label: "PAY TREND", value: "12%" }
        ],
        link: "/US-Healthcare-Dashboard-Technical-Analysis.html"
    },
    {
        date: "JUN 2023 – JUL 2023",
        title: "Market Analysis - Sales Optimization",
        description: "Comprehensive analysis of 106,000+ sales across channels and regions to identify growth opportunities and optimize inventory.",
        tags: ["BI", "Statistical Analysis", "Market Research", "Strategic Planning"],
        metrics: [
            { label: "ONLINE SHARE", value: "51%" },
            { label: "GAP FOUND", value: "18%" }
        ],
        link: "/Market-Analysis-Report-Multicolor.html"
    }
];

const Research = () => {
    return (
        <section id="research" className="py-32 relative">
            <div className="section-container">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-6">Research & Analysis</h2>
                    <div className="w-12 h-1 bg-brand-blue rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {researchProjects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bento-card group flex flex-col justify-between h-full hover:border-brand-blue/30 transition-all"
                            >
                                <div>
                                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-6 block font-mono">
                                        {project.date}
                                    </span>
                                    <h3 className="font-space-grotesk text-2xl font-bold mb-6 tracking-tight leading-tight text-white group-hover:text-brand-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/40 text-base leading-relaxed mb-6 italic">
                                        &quot;{project.description}&quot;
                                    </p>

                                    {project.details && (
                                        <ul className="space-y-3 mb-8">
                                            {project.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="flex items-center gap-3 text-white/40 text-sm">
                                                    <div className="w-1 h-1 rounded-full bg-brand-blue/50" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1 bg-white/5 border border-white/5 text-white/40 text-[10px] font-bold uppercase tracking-wider rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                                    <div className="flex gap-8">
                                        {project.metrics.map((metric, mIdx) => (
                                            <div key={mIdx} className="flex flex-col">
                                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1 font-mono">{metric.label}</span>
                                                <span className="text-sm font-bold text-brand-blue font-mono">{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
