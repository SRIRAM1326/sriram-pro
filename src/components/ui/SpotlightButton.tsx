"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface SpotlightButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    target?: string;
    rel?: string;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
    children,
    href,
    onClick,
    className = "",
    target,
    rel
}) => {
    const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        buttonRef.current.style.setProperty("--x", `${x}px`);
        buttonRef.current.style.setProperty("--y", `${y}px`);
    };

    const combinedClassName = `btn-spotlight ${className}`;

    if (href) {
        return (
            <motion.a
                ref={buttonRef}
                href={href}
                target={target}
                rel={rel}
                onMouseMove={handleMouseMove}
                className={combinedClassName}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            ref={buttonRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            className={combinedClassName}
        >
            {children}
        </motion.button>
    );
};

export default SpotlightButton;
