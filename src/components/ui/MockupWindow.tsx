"use client";

import React from "react";
import { motion } from "framer-motion";

interface MockupWindowProps {
    children: React.ReactNode;
    title?: string;
}

const MockupWindow: React.FC<MockupWindowProps> = ({ children, title = "terminal" }) => {
    return (
        <div className="mockup-glass rounded-2xl overflow-hidden w-full max-w-5xl mx-auto relative z-10">
            {/* Traveling Light Border Beam */}
            <div className="border-beam" />

            {/* Window Header */}
            <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                    {title}
                </div>
                <div className="w-12 h-1 bg-white/10 rounded-full" />
            </div>

            {/* Window Content */}
            <div className="p-8 md:p-12 min-h-[400px]">
                {children}
            </div>
        </div>
    );
};

export default MockupWindow;
