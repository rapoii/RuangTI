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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ profile, onOpenLogin }: HeroProps) {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Top Pill Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface border border-accent/30 text-accent text-[11px] sm:text-xs font-semibold tracking-wide mb-6 max-w-[96%] text-center justify-center select-none"
        >
          <Sparkles size={13} className="text-accent shrink-0" />
          <span className="hidden sm:inline">Platform AI Co-Pilot Rekayasa Sistem Industri</span>
          <span className="sm:hidden">AI Co-Pilot Teknik Industri</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary max-w-4xl leading-[1.18] sm:leading-[1.12]"
        >
          Transformasi Analisis & Pemecahan Masalah{" "}
          <span className="text-accent">
            Teknik Industri
          </span>{" "}
          dengan Presisi AI.
        </motion.h1>

        {/* Subheadline Description — FIX: line-length max-w-xl (< 80 chars/line) */}
        <motion.p
          variants={fadeUp}
          className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-xl font-normal leading-relaxed"
        >
          Dirancang khusus untuk mahasiswa dan praktisi Teknik Industri. Solver matematis, formula KaTeX, analisis PTLF, riset operasi, dan ergonomi kerja.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto max-w-md sm:max-w-none"
        >
          {profile.isLoggedIn ? (
            <Link
              href="/chat"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-accent/25 transition-all active:scale-[0.97] flex items-center justify-center gap-2.5"
            >
              <span>Buka Workspace RuangTI</span>
              <ArrowRight size={17} />
            </Link>
          ) : (
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-accent/25 transition-all active:scale-[0.97] flex items-center justify-center gap-2.5"
            >
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight size={17} />
            </button>
          )}

          <a
            href="#features"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-surface border border-border text-text-primary font-semibold text-sm hover:border-accent/40 hover:bg-canvas transition-all active:scale-[0.97] flex items-center justify-center gap-2"
          >
            <span>Pelajari Modul Keilmuan</span>
          </a>
        </motion.div>

        {/* Trust & Spec Micro-Badges — FIX: all-caps-body removed uppercase from longer labels */}
        <motion.div
          variants={fadeUp}
          className="mt-12 pt-8 border-t border-border/40 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 text-left max-w-3xl w-full"
        >
          {[
            { icon: CheckCircle, text: "Formula KaTeX Presisi" },
            { icon: Terminal, text: "FastAPI Engine" },
            { icon: Activity, text: "Kurikulum Standar TI" },
            { icon: ShieldCheck, text: "SQLite Persistence" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg">
                <Icon size={15} className="text-accent shrink-0" />
                <span className="text-xs text-text-secondary font-medium">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
