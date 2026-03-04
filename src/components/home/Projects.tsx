"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";

const tradingProjects = [
    {
        title: "SENSEX Option-Only Automated Trader",
        description: "A production-ready system for SENSEX options with integrated risk controls, multi-signal filtering, and execution automation.",
        tech: ["Python", "WebSockets", "TA-Lib"],
    },
    {
        title: "Super SAR Option Scalping Engine",
        description: "High-frequency option scalping bot with multi-threaded execution and real-time risk management.",
        tech: ["Python", "Flask", "Pandas", "WebSockets"],
        link: "/super-sar",
        details: ["Multi-strike Monitoring", "Sub-100ms Execution", "Dynamic ATR SL/TP"]
    },
    {
        title: "NanoProfits AI Logger",
        description: "High-throughput tick-level logging and analytics engine for strategy refinement and systematic research.",
        tech: ["PostgreSQL", "Multithreading"],
    },
];

const webProjects = [
    {
        year: "2026",
        title: "UVFarms Official Website",
        description: "Responsive multi-page business website for 9 agri-tech verticals, built with Next.js and AI-assisted workflows.",
        tech: ["Next.js", "React", "Gemini CLI"],
        labels: ["AI-DEVELOPED", "RESPONSIVE", "UVFARMS.IN"]
    }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isInternal = project.link?.startsWith("/");

    const CardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bento-card group h-full flex flex-col p-8 transition-all hover:border-brand-blue/30"
        >
            <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded bg-white/5 text-white/40 border border-white/5 group-hover:border-brand-blue/20 group-hover:text-brand-blue/60 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk group-hover:text-brand-blue transition-colors">
                    {project.title}
                </h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
                    {project.description}
                </p>

                {project.details && (
                    <div className="grid grid-cols-1 gap-3 mb-8">
                        {project.details.map((detail: string) => (
                            <div key={detail} className="flex items-center gap-3 text-sm text-white/40 border-l border-white/5 pl-4 group-hover:border-brand-blue/20 transition-colors">
                                <div className="w-1 h-1 rounded-full bg-brand-blue/30" />
                                {detail}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-white/30 group-hover:text-brand-blue transition-colors">
                VIEW PROJECT <ExternalLink className="w-4 h-4 translate-y-[-1px]" />
            </div>
        </motion.div>
    );

    if (isInternal) {
        return (
            <Link href={project.link}>
                {CardContent}
            </Link>
        );
    }

    return (
        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
            {CardContent}
        </a>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="section-container">
                {/* Featured Projects Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-6">Featured Projects</h2>
                    <div className="w-12 h-1 bg-brand-blue rounded-full" />
                </div>

                {/* Trading Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {tradingProjects.map((project, idx) => (
                        <ProjectCard project={project} index={idx} key={idx} />
                    ))}
                </div>

                {/* Web Development Header */}
                <div className="flex flex-col items-center text-center mb-16 px-4">
                    <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-6">Web Development</h2>
                    <div className="w-12 h-1 bg-brand-blue rounded-full" />
                </div>

                {/* Web Projects Grid */}
                <div className="max-w-4xl mx-auto">
                    {webProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bento-card group flex flex-col md:flex-row gap-8 items-center p-8 md:p-12 mb-8"
                        >
                            <div className="flex-1">
                                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 block font-mono">
                                    {project.year}
                                </span>
                                <h3 className="font-space-grotesk text-3xl font-bold mb-6 tracking-tight text-white group-hover:text-brand-blue transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-white/40 text-lg leading-relaxed mb-8 italic">
                                    &quot;{project.description}&quot;
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-white/5 text-white/50 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
                                    {project.labels.map((label, lIdx) => (
                                        <span key={lIdx} className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] font-mono">
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-blue group-hover:border-brand-blue/30 group-hover:scale-110 transition-all duration-500">
                                    <Code className="w-8 h-8" />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-brand-blue transition-all duration-500 cursor-pointer">
                                    <ExternalLink className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
