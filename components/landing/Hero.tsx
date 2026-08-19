"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Terminal, Activity, ShieldCheck, BookOpen } from "lucide-react";
import Link from "next/link";
import { UserProfile } from "@/lib/types";

interface HeroProps {
  profile: UserProfile;
  onOpenLogin: () => void;
}

export function Hero({ profile, onOpenLogin }: HeroProps) {
  return (
    <section className="pt-14 sm:pt-20 pb-10 sm:pb-12 w-full flex flex-col items-center text-center relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-6 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center w-full">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface border border-accent/30 text-accent text-[11px] sm:text-xs font-semibold tracking-wide mb-4 max-w-full text-center justify-center select-none shadow-sm">
          <Sparkles size={13} className="text-accent shrink-0" />
          <span className="hidden sm:inline">Platform AI Co-Pilot Rekayasa Sistem Industri</span>
          <span className="sm:hidden">AI Co-Pilot Teknik Industri</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary max-w-4xl leading-[1.18] sm:leading-[1.12]">
          Transformasi Analisis & Pemecahan Masalah{" "}
          <span className="text-accent">
            Teknik Industri
          </span>{" "}
          dengan Presisi AI.
        </h1>

        {/* Subheadline Description */}
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
          Dirancang khusus untuk mahasiswa dan praktisi Teknik Industri. Solver matematis, formula KaTeX, analisis PTLF, riset operasi, dan ergonomi kerja.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto max-w-md sm:max-w-none">
          {profile.isLoggedIn ? (
            <Link
              href="/chat"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-white font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-accent/20 transition-all active:scale-[0.97] flex items-center justify-center gap-2.5"
            >
              <span>Buka Workspace RuangTI</span>
              <ArrowRight size={17} />
            </Link>
          ) : (
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-white font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-accent/20 transition-all active:scale-[0.97] flex items-center justify-center gap-2.5"
            >
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight size={17} />
            </button>
          )}

          <Link
            href="/docs"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-surface border border-border text-text-primary font-semibold text-sm hover:border-accent/40 hover:bg-canvas transition-all active:scale-[0.97] flex items-center justify-center gap-2 group shadow-2xs"
          >
            <BookOpen size={16} className="text-text-secondary group-hover:text-accent transition-colors" />
            <span>Dokumentasi Resmi</span>
          </Link>
        </div>

        {/* Trust & Spec Micro-Badges */}
        <div className="mt-8 sm:mt-9 pt-5 sm:pt-6 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 text-left max-w-3xl w-full">
          {[
            { icon: CheckCircle, text: "Formula KaTeX" },
            { icon: Terminal, text: "FastAPI Engine" },
            { icon: Activity, text: "Kurikulum TI" },
            { icon: ShieldCheck, text: "SQLite RAG" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-lg bg-surface/50 border border-border/30">
                <Icon size={14} className="text-accent shrink-0" />
                <span className="text-xs text-text-secondary font-medium leading-none truncate">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
