"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Terminal, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { UserProfile } from "@/lib/types";

interface HeroProps {
  profile: UserProfile;
  onOpenLogin: () => void;
}

export function Hero({ profile, onOpenLogin }: HeroProps) {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface border border-accent/30 text-accent text-[10px] sm:text-xs font-semibold tracking-wide uppercase shadow-sm mb-6 max-w-[96%] text-center justify-center"
      >
        <Sparkles size={13} className="text-accent animate-pulse shrink-0" />
        <span className="hidden sm:inline">Platform AI Co-Pilot Rekayasa Sistem Industri #1</span>
        <span className="sm:hidden">AI Co-Pilot Rekayasa Sistem Industri #1</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary max-w-4xl leading-[1.18] sm:leading-[1.12]"
      >
        Transformasi Analisis & Pemecahan Masalah{" "}
        <span className="text-accent">
          Teknik Industri
        </span>{" "}
        dengan Presisi AI.
      </motion.h1>

      {/* Subheadline Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed"
      >
        Dirancang khusus untuk mahasiswa dan praktisi Teknik Industri. Dilengkapi solver matematis deterministik, formula KaTeX LaTeX, analisis tata letak pabrik (PTLF), riset operasi, persediaan (EOQ), dan ergonomi kerja.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto max-w-md sm:max-w-none"
      >
        {profile.isLoggedIn ? (
          <Link
            href="/chat"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-accent/25 transition-all flex items-center justify-center gap-2.5"
          >
            <span>Buka Workspace RuangTI</span>
            <ArrowRight size={17} />
          </Link>
        ) : (
          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-accent/25 transition-all flex items-center justify-center gap-2.5"
          >
            <span>Mulai Konsultasi Gratis</span>
            <ArrowRight size={17} />
          </button>
        )}

        <a
          href="#features"
          className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-surface border border-border text-text-primary font-semibold text-sm hover:border-accent/40 hover:bg-canvas transition-all flex items-center justify-center gap-2"
        >
          <span>Pelajari Modul Keilmuan</span>
        </a>
      </motion.div>

      {/* Trust & Spec Micro-Badges (1 column on mobile, 2 cols on tablet, 4 cols on desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left max-w-4xl w-full"
      >
        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface/40 sm:bg-transparent border sm:border-0 border-border/30">
          <CheckCircle size={16} className="text-accent shrink-0" />
          <span className="text-xs text-text-secondary font-medium truncate">
            Formula KaTeX LaTeX Presisi
          </span>
        </div>
        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface/40 sm:bg-transparent border sm:border-0 border-border/30">
          <Terminal size={16} className="text-accent shrink-0" />
          <span className="text-xs text-text-secondary font-medium truncate">
            FastAPI Deterministic Engine
          </span>
        </div>
        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface/40 sm:bg-transparent border sm:border-0 border-border/30">
          <Activity size={16} className="text-accent shrink-0" />
          <span className="text-xs text-text-secondary font-medium truncate">
            Kurikulum Terstandar TI
          </span>
        </div>
        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface/40 sm:bg-transparent border sm:border-0 border-border/30">
          <ShieldCheck size={16} className="text-accent shrink-0" />
          <span className="text-xs text-text-secondary font-medium truncate">
            Local SQLite Persistence
          </span>
        </div>
      </motion.div>
    </section>
  );
}
