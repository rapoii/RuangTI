"use client";

import React from "react";
import { motion } from "framer-motion";

interface TheGlowProps {
  message?: string;
}

export function TheGlow({ message = "RuangTI sedang menganalisis sistem..." }: TheGlowProps) {
  return (
    <div className="flex items-center gap-3 py-2 select-none" role="status" aria-live="polite">
      {/* Animated Organic Orb / The Glow */}
      <div className="relative flex items-center justify-center w-5 h-5">
        {/* Soft Radial Ambient Aura */}
        <motion.div
          className="absolute w-7 h-7 rounded-full bg-accent/20 blur-md pointer-events-none"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Core Glowing Orb */}
        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(242,169,59,0.7)] animate-pulse" />
      </div>

      {/* Thought Process Text */}
      <span className="text-xs font-sans text-text-secondary animate-pulse tracking-wide font-medium">
        {message}
      </span>
    </div>
  );
}
