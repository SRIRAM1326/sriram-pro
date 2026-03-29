"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";

const logos = [
    { name: "Python", url: "/python-logo.png" },
    { name: "Gemini", url: "/logos/Gemini.png" },
    { name: "Claude", url: "/logos/icnsFile_eb419c20b139d994dc776a4210e372b0_Claude___Liquid_Glass__Default_.png" },
    { name: "Redis Insight", url: "/logos/icnsFile_774e013262f666893ae678fe6ce2c34f_RedisInsight.png" },
    { name: "Antigravity", url: "/logos/icnsFile_2415a19ea3b1a9baf76a7d9bc2699004_1763978424673.png" },
    { name: "Microsoft 365", url: "/logos/icnsFile_3f6ba96176f4da4f958a317745bf44f2_1723839479806.png" },
    { name: "SQL", url: "/logos/icnsFile_4dbb0da15f02f3449db6eac4dbf6a45b_0tGe577jHs.png" },
    { name: "ChatGPT", url: "/logos/icnsFile_6a785c5f973f145c99a0d6a5f72a8593_1751661121524.png" },
    { name: "NumPy", url: "/logos/icnsFile_725d4db3326b9c478ecc4908acc1ae52_1762644322052.png" },
    { name: "Tableau", url: "/logos/icnsFile_e1a0bfeec3828d5784013c5de874c3f0_CKKWAXwj98.png" },
    { name: "Perplexity", url: "/logos/icnsFile_e3c501ac6359897f836c65284eba459a_1757620129807.png" },
    { name: "REST API", url: "/logos/icnsFile_ef16be6604f977842d4a862c36d9a6ea_4BwKekdGDs.png" },
    { name: "Power BI", url: "/logos/icnsFile_f1cd7a90585ee231d826fe52fb2d6a45_1emzEHk2ds.png" },
    { name: "Dhan", url: "/logos/dhan.png" },
    { name: "FlatTrade", url: "/logos/flattrade.png" },
    { name: "Excel", url: "/logos/excel.png" },
    { name: "PowerPoint", url: "/logos/powerpoint.png" },
    { name: "Google Sheets", url: "/logos/google-sheets.png" },
    { name: "VS Code", url: "/logos/vscode.png" }
];

function Icon({ logo, mouseX }: { logo: any; mouseX: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center p-2 hover:bg-white/[0.08] transition-colors cursor-pointer group relative shadow-lg"
        >
            <img
                src={logo.url}
                alt={logo.name}
                className="w-full h-full object-contain filter drop-shadow-md transition-all duration-300 group-hover:scale-110"
            />
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#1a1a1a] border border-white/10 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {logo.name}
            </div>
        </motion.div>
    );
}

export default function TechDock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="flex justify-center w-full my-12">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="mx-auto flex h-20 items-end gap-3 rounded-[24px] bg-white/[0.02] px-4 pb-4 border border-white/[0.05] glass-premium shadow-2xl backdrop-blur-xl"
            >
                {logos.map((logo, i) => (
                    <Icon key={i} logo={logo} mouseX={mouseX} />
                ))}
            </motion.div>
        </div>
    );
}
