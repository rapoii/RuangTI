"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, BookOpen, ArrowRight, FileText } from "lucide-react";
import { DOCS_CATEGORIES, DocArticle } from "@/lib/docs-data";

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (articleId: string, sectionId?: string) => void;
}

export function DocsSearchModal({
  isOpen,
  onClose,
  onSelectArticle,
}: DocsSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Flatten seluruh artikel untuk pencarian
  const allArticles: DocArticle[] = DOCS_CATEGORIES.flatMap((c) => c.articles);

  const filteredResults = searchQuery.trim()
    ? allArticles.filter(
        (art) =>
          art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.subsections.some((sub) =>
            sub.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : allArticles.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl bg-canvas border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="p-3.5 border-b border-border flex items-center gap-3 bg-surface/50">
          <Search size={18} className="text-accent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari dokumentasi, fitur, formula, atau standar ISO..."
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-secondary outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="p-1 rounded hover:bg-surface text-text-secondary"
            >
              <X size={14} />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-surface border border-border text-[10px] font-mono text-text-secondary">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-2 overflow-y-auto divide-y divide-border/30">
          {filteredResults.length > 0 ? (
            filteredResults.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => {
                  onSelectArticle(article.id);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-surface/80 transition-colors flex items-start justify-between gap-3 group"
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <FileText size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {article.title}
                    </span>
                    <p className="text-[11px] text-text-secondary line-clamp-1 mt-0.5">
                      {article.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-text-secondary group-hover:translate-x-1 group-hover:text-accent transition-all shrink-0 mt-2"
                />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-text-secondary">
              Tidak ditemukan artikel dokumentasi untuk "{searchQuery}".
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-surface/40 border-t border-border/40 text-[11px] text-text-secondary flex items-center justify-between">
          <span>Tekan ESC untuk menutup</span>
          <span className="font-mono">{filteredResults.length} hasil</span>
        </div>
      </div>
    </div>
  );
}
