"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, ExternalLink, Database, BarChart3, Settings, TrendingUp, Cpu, PieChart, LineChart } from "lucide-react";
import React, { useRef, useState } from "react";

const certifications = [
  {
    title: "SQL Basics",
    issuer: "HackerRank",
    date: "Sept 2024",
    logo: "/logos/hackerrank.png",
    category: "Data Engineering",
    icon: <Database className="w-5 h-5" />,
    span: "md:col-span-3 lg:col-span-3",
    color: "#2EC866" // HackerRank Green
  },
  {
    title: "Advanced Excel",
    issuer: "Internshala",
    date: "Nov 2024",
    logo: "/logos/internshala.png",
    category: "Analysis",
    icon: <BarChart3 className="w-5 h-5" />,
    span: "md:col-span-3 lg:col-span-3",
    color: "#00A5EC" // Internshala Blue
  },
  {
    title: "Microsoft Co-Pilot for Productivity",
    issuer: "Microsoft & LinkedIn",
    date: "Nov 2024",
    logo: "/certifications/Microsoft & LinkedIn.webp",
    category: "AI & Tools",
    icon: <Cpu className="w-5 h-5" />,
    span: "md:col-span-2 lg:col-span-2",
    color: "#0A66C2" // LinkedIn Blue
  },
  {
    title: "Introduction to Data Analysis",
    issuer: "Coursera",
    date: "Sept 2024",
    logo: "/certifications/Coursera.webp",
    category: "Data Analysis",
    icon: <LineChart className="w-5 h-5" />,
    span: "md:col-span-2 lg:col-span-2",
    color: "#0056D2" // Coursera Blue
  },
  {
    title: "Accenture North America: Data Analytics",
    issuer: "Accenture",
    date: "Sept 2024",
    logo: "/certifications/Accenture.webp",
    category: "Strategy",
    icon: <TrendingUp className="w-5 h-5" />,
    span: "md:col-span-2 lg:col-span-2",
    color: "#A100FF" // Accenture Purple
  },
  {
    title: "Tata Group: Data Visualization",
    issuer: "Tata Group",
    date: "May 2025",
    logo: "/certifications/Tata_logo.svg.png",
    category: "Visualization",
    icon: <PieChart className="w-5 h-5" />,
    span: "md:col-span-3 lg:col-span-4",
    color: "#005BAC" // Tata Blue
  },
  {
    title: "Deloitte Australia: Data Analytics",
    issuer: "Deloitte",
    date: "May 2025",
    logo: "/certifications/Deloitte.webp",
    category: "Consulting",
    icon: <LineChart className="w-5 h-5" />,
    span: "md:col-span-3 lg:col-span-2",
    color: "#000000", // Deloitte Black
    accent: "#86BC25" // Deloitte Green
  },
  {
    title: "IBM SPSS Statistics",
    issuer: "IBM",
    date: "2024",
    category: "Statistics",
    icon: <Database className="w-5 h-5" />,
    span: "md:col-span-3 lg:col-span-3",
    color: "#006699" // IBM Blue
  },
  {
    title: "Principles Of Management",
    issuer: "NPTEL",
    date: "2024",
    logo: "/certifications/NPTEL_logo_128.png",
    category: "Management",
    icon: <Settings className="w-5 h-5" />,
    span: "md:col-span-3 lg:col-span-3",
    color: "#8B1E3F" // NPTEL Maroon
  }
];

const SpotlightCard = ({ cert, index }: { cert: typeof certifications[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const springConfig = { damping: 25, stiffness: 300 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
  };

  const spotlightRgb = hexToRgb(cert.color);
  const background = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15), transparent 85%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      style={{ backgroundColor: cert.color }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-1 ${cert.span}`}
    >
      {/* Background Spotlight */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Decorative Gradient Overlay */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none`} />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div 
              className={`p-2.5 rounded-2xl transition-all duration-500 group-hover:scale-110 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20`}
            >
              <div className="text-white">
                {cert.icon}
              </div>
            </div>
            <div className="flex flex-col">
                <span className={`text-[10px] font-bold uppercase tracking-[0.15em] font-mono leading-none mb-1 text-white/50`}>
                {cert.category}
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-widest font-mono leading-none text-white/40`}>
                {cert.date}
                </span>
            </div>
          </div>
          
          <div className="flex gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="space-y-3 flex-grow">
           <div className="flex items-center gap-2">
            {cert.logo ? (
               <img src={cert.logo} alt={cert.issuer} className={`h-3.5 transition-all duration-500 scale-100 group-hover:scale-105 invert brightness-[10] opacity-80 group-hover:opacity-100`} />
            ) : (
                <span className={`text-[11px] font-bold uppercase tracking-wider text-white/60`}>{cert.issuer}</span>
            )}
            <div className={`h-px flex-grow bg-white/20`} />
          </div>
          <h3 className={`font-bold text-[18px] md:text-[20px] transition-all duration-500 leading-[1.3] tracking-tight pr-4 text-white group-hover:text-white`}>
            {cert.title}
          </h3>
        </div>

        <div className={`mt-8 flex items-center justify-between pt-6 border-t border-white/10`}>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <Award className="w-3 h-3 text-white" />
                </div>
                <div 
                  className={`w-6 h-6 rounded-full border-2 border-white/20 bg-white/20 flex items-center justify-center shadow-lg`}
                >
                    <ExternalLink className="w-3 h-3 text-white" />
                </div>
            </div>
            <span className={`text-[10px] font-bold tracking-wide uppercase text-white/50`}>Verified Credential</span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05, x: 2 }}
            className={`flex items-center gap-2 text-[10px] font-bold transition-all duration-300 cursor-pointer text-white/60 group-hover:text-white`}
          >
            <span>VIEW ASSET</span>
            <ExternalLink className="w-3 h-3" />
          </motion.div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-[#fafbfd] relative overflow-hidden">
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 px-2 lg:px-0">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 shadow-sm mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] font-mono pr-1">Verified Proof-of-Work</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">
                    Professional <span className="text-black/30 font-medium">Milestones & Certifications</span>
                </h2>
                <p className="text-black/50 text-lg leading-relaxed">
                    A curated gallery of specialized credentials validating expertise in quantitative analysis, data engineering, and professional management.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-end text-right"
            >
                <div className="text-[56px] font-bold text-black/5 leading-none mb-2 tabular-nums">09</div>
                <div className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em] font-mono border-t border-black/5 pt-3">
                    Verified Milestones
                </div>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 px-2 lg:px-0">
          {certifications.map((cert, idx) => (
            <SpotlightCard key={idx} cert={cert} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
export default Certifications;
