"use client";

import React, { useEffect, useState } from "react";
import { ListTree, ArrowUp, Share2, Check } from "lucide-react";
import { DocSubSection } from "@/lib/docs-data";

interface DocsTOCProps {
  subsections: DocSubSection[];
  articleTitle: string;
}

export function DocsTOC({ subsections, articleTitle }: DocsTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Scrollspy menggunakan Intersection Observer
  useEffect(() => {
    if (subsections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    subsections.forEach((sub) => {
      const el = document.getElementById(sub.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [subsections]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // Offset navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (subsections.length === 0) return null;

  return (
    <div className="w-full space-y-4 py-4 px-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
          <ListTree size={14} className="text-accent" />
          <span>Di Halaman Ini</span>
        </div>
      </div>

      <nav className="space-y-1 text-xs border-l border-border/40 pl-3">
        {subsections.map((sub) => {
          const isActive = activeId === sub.id;
          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => scrollToHeading(sub.id)}
              className={`block w-full text-left py-1 transition-all truncate ${
                isActive
                  ? "font-semibold text-accent -ml-3 pl-3 border-l-2 border-accent"
                  : "text-text-secondary hover:text-text-primary font-normal"
              }`}
            >
              {sub.title}
            </button>
          );
        })}
      </nav>

      {/* Quick Action Buttons */}
      <div className="pt-4 border-t border-border/40 space-y-2">
        <button
          type="button"
          onClick={handleShareLink}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-surface border border-border/60 text-[11px] text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all group"
        >
          <span className="flex items-center gap-1.5">
            {copied ? (
              <Check size={12} className="text-emerald-600" />
            ) : (
              <Share2 size={12} className="text-text-secondary group-hover:text-accent" />
            )}
            <span>{copied ? "Tautan Tersalin!" : "Salin Tautan Artikel"}</span>
          </span>
        </button>

        <button
          type="button"
          onClick={scrollToTop}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-surface border border-border/60 text-[11px] text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all group"
        >
          <span className="flex items-center gap-1.5">
            <ArrowUp size={12} className="text-text-secondary group-hover:text-accent" />
            <span>Kembali ke Atas</span>
          </span>
        </button>
      </div>
    </div>
  );
}
