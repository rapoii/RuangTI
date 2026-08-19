"use client";

import React from "react";
import { ArrowRight, User } from "lucide-react";
import { UserProfile } from "@/lib/types";
import Link from "next/link";

interface NavbarProps {
  onOpenLogin: () => void;
  profile: UserProfile;
}

export function Navbar({ onOpenLogin, profile }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-slate-950 font-bold text-sm shadow-sm shadow-accent/20 group-hover:scale-105 transition-transform">
            TI
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-text-primary leading-tight">
              Ruang<span className="text-accent">TI</span>
            </span>
            <span className="text-[11px] text-text-secondary leading-none">
              Engineering AI
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-text-secondary">
          <a
            href="#features"
            className="hover:text-text-primary transition-colors hover:underline underline-offset-4"
          >
            Pilar Keilmuan
          </a>
          <a
            href="#solvers"
            className="hover:text-text-primary transition-colors hover:underline underline-offset-4"
          >
            Solver Matematis
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {profile.isLoggedIn ? (
            <Link
              href="/chat"
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-accent text-slate-950 font-bold text-xs hover:brightness-110 shadow-sm shadow-accent/20 transition-all flex items-center gap-1.5 active:scale-[0.97]"
            >
              <span className="hidden sm:inline">Buka Workspace</span>
              <span className="sm:hidden">Workspace</span>
              <ArrowRight size={14} />
            </Link>
          ) : (
            <button
              onClick={onOpenLogin}
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-accent text-slate-950 font-bold text-xs hover:brightness-110 shadow-sm shadow-accent/20 transition-all flex items-center gap-1.5 active:scale-[0.97]"
            >
              <User size={13} />
              <span>Masuk</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
