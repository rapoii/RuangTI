"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, FileText } from "lucide-react";
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

  // Auto focus input & Lock Body Scroll saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      setTimeout(() => inputRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

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
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-24 px-3 sm:px-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop Blur Dimmer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            style={{ willChange: "opacity" }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          {/* Modal Container with Scale + Fade Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="w-full max-w-xl bg-canvas border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Box */}
            <div className="p-3 sm:p-3.5 border-b border-border flex items-center gap-2.5 bg-surface/60">
              <Search size={17} className="text-accent shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari dokumentasi, fitur, formula, atau ISO..."
                className="w-full bg-transparent text-xs sm:text-sm text-text-primary placeholder:text-text-secondary outline-none font-medium"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary"
                  aria-label="Bersihkan pencarian"
                >
                  <X size={14} />
                </button>
              )}

              {/* Explicit Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 rounded-lg border border-border/60 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface transition-colors shrink-0"
                aria-label="Tutup pencarian"
                title="Tutup (ESC)"
              >
                <X size={15} />
              </button>
            </div>

            {/* Results List */}
            <div className="p-2 overflow-y-auto divide-y divide-border/30 max-h-[60vh]">
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
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                        <FileText size={15} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
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
                  Tidak ditemukan artikel dokumentasi untuk &quot;{searchQuery}&quot;.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
