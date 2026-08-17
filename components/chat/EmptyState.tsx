"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Factory, TrendingUp, Users, Cpu, Layers } from "lucide-react";

interface EmptyStateProps {
  onSelectPrompt: (prompt: string) => void;
}

const PROMPT_SUGGESTIONS = [
  {
    title: "Optimasi Layout Fasilitas (PTLF)",
    desc: "Formulasi From-To Chart & Activity Relationship Chart (ARC) pabrik",
    prompt: "Bagaimana cara menyusun From-To Chart dan Activity Relationship Chart (ARC) untuk perancangan tata letak fasilitas pabrik?",
    icon: <Factory className="w-4 h-4 text-accent" />,
  },
  {
    title: "Implementasi Lean Six Sigma",
    desc: "Tahapan metodologi DMAIC, FMEA, dan eliminasi 8 pemborosan (Muda)",
    prompt: "Jelaskan langkah metodologi DMAIC untuk mereduksi cacat produk di lini perakitan manufaktur.",
    icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
  },
  {
    title: "Model Persediaan EOQ & ROP",
    desc: "Optimasi safety stock, reorder point, dan simulasi biaya pergudangan",
    prompt: "Buatkan formulasi dan simulasi kode Python untuk menghitung EOQ, Reorder Point (ROP), dan Total Inventory Cost.",
    icon: <Cpu className="w-4 h-4 text-blue-500" />,
  },
  {
    title: "Ergonomi & Pengukuran Kerja",
    desc: "Metode RULA/REBA, NIOSH Lifting Equation, dan waktu baku kerja",
    prompt: "Bagaimana tahapan menghitung Waktu Baku (Standard Time) menggunakan metode Jam Henti (Stopwatch Time Study)?",
    icon: <Users className="w-4 h-4 text-amber-500" />,
  },
];

export function EmptyState({ onSelectPrompt }: EmptyStateProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-8 max-w-chat mx-auto w-full select-none">
      {/* Hero Badge & Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-text-secondary mb-3 shadow-xs">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span>Ruang Konsultasi & Rekayasa Sistem</span>
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-2">
          Selamat datang di <span className="text-accent">RuangTI</span>
        </h1>

        <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto leading-relaxed px-4">
          Platform AI khusus Teknik Industri: Riset Operasi, Lean Six Sigma, Ergonomi, Supply Chain, Tata Letak Fasilitas, dan Manajemen Kualitas.
        </p>
      </motion.div>

      {/* Suggested Prompt Cards with Framer Motion Stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full pb-20">
        {PROMPT_SUGGESTIONS.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => onSelectPrompt(item.prompt)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            className="group p-3.5 sm:p-4 rounded-2xl bg-surface border border-border hover:border-accent/60 hover:bg-surface-hover transition-all duration-150 text-left flex flex-col justify-between shadow-xs hover:shadow-sm active:scale-[0.98] min-h-[96px]"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-text-primary group-hover:text-accent transition-colors">
                <div className="w-6 h-6 rounded-lg bg-canvas flex items-center justify-center shrink-0 border border-border/80">
                  {item.icon}
                </div>
                <span>{item.title}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-tertiary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </div>

            <p className="text-[11px] sm:text-xs text-text-secondary line-clamp-2 leading-relaxed">
              {item.desc}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
