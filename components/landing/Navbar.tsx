"use client";

import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, ArrowRight, User } from "lucide-react";
import { UserProfile } from "@/lib/types";
import Link from "next/link";

interface NavbarProps {
  profile: UserProfile;
  onOpenLogin: () => void;
}

export function Navbar({ profile, onOpenLogin }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-canvas/85 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent flex items-center justify-center text-slate-950 font-display font-bold text-sm shadow-sm shadow-accent/20">
            TI
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-text-primary">
              Ruang<span className="text-accent">TI</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-text-secondary -mt-1 tracking-wider uppercase font-mono">
              Engineering AI
            </span>
          </div>
        </div>

        {/* Center Nav Links (Desktop Only) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          <a href="#features" className="hover:text-text-primary transition-colors">
            Pilar Keilmuan
          </a>
          <a href="#solvers" className="hover:text-text-primary transition-colors">
            Solver Matematis
          </a>
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 flex items-center justify-center transition-all"
            title="Ganti Tema"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {profile.isLoggedIn ? (
            <Link
              href="/chat"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-accent text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all"
            >
              <span className="hidden sm:inline">Buka Workspace</span>
              <span className="sm:hidden">Workspace</span>
              <ArrowRight size={14} />
            </Link>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-accent text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all"
            >
              <User size={14} />
              <span>Masuk</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
