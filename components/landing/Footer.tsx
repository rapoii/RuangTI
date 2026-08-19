"use client";

import React from "react";
import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/30 py-8 sm:py-9 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-slate-950 font-display font-bold text-sm shrink-0">
            TI
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm text-text-primary">
              Ruang<span className="text-accent">TI</span>
            </span>
            <span className="text-[11px] text-text-secondary">
              AI Co-Pilot & Workspace Rekayasa Sistem Industri
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-6 text-xs text-text-secondary text-center sm:text-left">
          <a
            href="https://github.com/rapoii/RuangTI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
          >
            <Github size={15} />
            <span>GitHub Repository</span>
          </a>
          <span className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart size={13} className="text-rose-500 fill-rose-500 inline-block" />
            <span>untuk mahasiswa & civitas Untirta</span>
          </span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-5 pt-5 border-t border-border/20 text-center text-[11px] text-text-secondary/60">
        © {new Date().getFullYear()} RuangTI. All rights reserved. Dikembangkan oleh Rafi Permana (@rapoii).
      </div>
    </footer>
  );
}
