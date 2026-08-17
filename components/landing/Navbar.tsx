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
    <header className="fixed top-0 inset-x-0 z-40 bg-canvas/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-slate-950 font-display font-bold shadow-sm shadow-accent/20">
            TI
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-text-primary">
              Ruang<span className="text-accent">TI</span>
            </span>
            <span className="text-[10px] text-text-secondary -mt-1 tracking-wider uppercase font-mono">
              Engineering AI
            </span>
          </div>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          <a href="#features" className="hover:text-text-primary transition-colors">
            Pilar Keilmuan
          </a>
          <a href="#solvers" className="hover:text-text-primary transition-colors">
            Solver Matematis
          </a>
          <a href="#preview" className="hover:text-text-primary transition-colors">
            Demo Interaktif
          </a>
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-accent/40 flex items-center justify-center transition-all"
            title="Ganti Tema"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {profile.isLoggedIn ? (
            <Link
              href="/chat"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-slate-950 font-medium text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all"
            >
              <span>Buka Workspace</span>
              <ArrowRight size={15} />
            </Link>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-slate-950 font-medium text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all"
            >
              <User size={15} />
              <span>Masuk Akun</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
