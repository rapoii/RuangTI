"use client";

import React from "react";
import Link from "next/link";
import { Search, ArrowRight, Github, BookOpen, Menu, X } from "lucide-react";

interface DocsNavbarProps {
  onOpenSearch: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export function DocsNavbar({
  onOpenSearch,
  onToggleMobileMenu,
  isMobileMenuOpen,
}: DocsNavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-border/40 bg-canvas/90 backdrop-blur-md px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto h-16 flex items-center justify-between gap-2">
        {/* Left: Hamburger & Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="md:hidden w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface transition-colors shrink-0"
            aria-label="Toggle docs navigation"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-accent flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-sm shadow-accent/20 group-hover:scale-105 transition-transform">
              TI
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-text-primary leading-tight">
                Ruang<span className="text-accent">TI</span>
              </span>
              <span className="hidden sm:inline text-[11px] text-text-secondary leading-none">
                Engineering AI
              </span>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-2 ml-2 pl-3 border-l border-border/50">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-[11px]">
              <BookOpen size={12} />
              <span>Dokumentasi Resmi</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface border border-border/50 text-text-secondary font-mono text-[11px]">
              v1.0 (742 Modul)
            </span>
          </div>
        </div>

        {/* Center: Quick Search Bar (Desktop only) */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full h-9 px-3 rounded-xl bg-surface/70 border border-border/60 hover:border-accent/40 text-text-secondary hover:text-text-primary flex items-center justify-between text-xs transition-all shadow-sm group"
          >
            <div className="flex items-center gap-2">
              <Search size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
              <span className="truncate">Cari fitur, modul, formula, atau API...</span>
            </div>
            <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-canvas border border-border text-[10px] font-mono text-text-secondary">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 pr-1 sm:pr-0">
          {/* Mobile Search Icon Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="md:hidden w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface transition-colors shrink-0"
            aria-label="Cari dokumentasi"
          >
            <Search size={15} />
          </button>

          <a
            href="https://github.com/rapoii/RuangTI"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-xl border border-border/60 items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
            title="GitHub Repository"
          >
            <Github size={16} />
          </a>

          <Link
            href="/chat"
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-accent text-white font-bold text-xs hover:brightness-110 shadow-sm shadow-accent/20 transition-all flex items-center gap-1 active:scale-[0.97] shrink-0"
          >
            <span className="hidden sm:inline">Buka Workspace</span>
            <span className="sm:hidden text-[11px]">Workspace</span>
            <ArrowRight size={12} className="shrink-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
