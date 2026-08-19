"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Cpu,
  HardHat,
  Binary,
  HelpCircle,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";
import { DOCS_CATEGORIES, DocArticle } from "@/lib/docs-data";

interface DocsSidebarProps {
  currentArticleId: string;
  onSelectArticle: (articleId: string) => void;
  filterText: string;
  onCloseMobile?: () => void;
}

export function DocsSidebar({
  currentArticleId,
  onSelectArticle,
  filterText,
  onCloseMobile,
}: DocsSidebarProps) {
  // Simpan state accordion yang terbuka
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "getting-started": true,
    "core-features": true,
    "industrial-roles": true,
    "technical-specs": true,
    "faq-troubleshooting": true,
  });

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass size={15} className="text-accent shrink-0" />;
      case "Cpu":
        return <Cpu size={15} className="text-amber-600 shrink-0" />;
      case "HardHat":
        return <HardHat size={15} className="text-amber-700 shrink-0" />;
      case "Binary":
        return <Binary size={15} className="text-accent shrink-0" />;
      case "HelpCircle":
        return <HelpCircle size={15} className="text-text-secondary shrink-0" />;
      default:
        return <Sparkles size={15} className="text-accent shrink-0" />;
    }
  };

  return (
    <aside className="w-full h-full flex flex-col py-4 px-3 sm:px-4 overflow-y-auto">
      {/* Search status / stats / Mobile Close Button */}
      <div className="mb-3 px-2 flex items-center justify-between pb-2 border-b border-border/40">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
            Navigasi Docs
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border/50 text-text-secondary">
            12 Panduan
          </span>
        </div>

        {/* Mobile Close X Button */}
        {onCloseMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="md:hidden w-7 h-7 rounded-lg border border-border/60 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
            aria-label="Tutup menu navigasi"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Hierarchical Categories */}
      <div className="space-y-3">
        {DOCS_CATEGORIES.map((category) => {
          const isCategoryOpen = openCategories[category.id] ?? true;

          // Filter artikel jika ada filterText
          const filteredArticles = category.articles.filter(
            (art) =>
              art.title.toLowerCase().includes(filterText.toLowerCase()) ||
              art.description.toLowerCase().includes(filterText.toLowerCase())
          );

          if (filterText && filteredArticles.length === 0) {
            return null;
          }

          return (
            <div key={category.id} className="space-y-1">
              {/* Category Header Button */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-semibold text-text-primary hover:bg-surface/80 transition-colors group text-left"
              >
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category.iconName)}
                  <span className="truncate">{category.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: isCategoryOpen ? 90 : 0 }}
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                >
                  <ChevronRight size={13} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                </motion.div>
              </button>

              {/* Category Articles List with Smooth Collapse/Expand */}
              <AnimatePresence initial={false}>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pl-4 ml-3 border-l border-border/40 space-y-0.5"
                  >
                    {filteredArticles.map((article) => {
                      const isActive = currentArticleId === article.id;
                      return (
                        <button
                          key={article.id}
                          type="button"
                          onClick={() => {
                            onSelectArticle(article.id);
                            if (onCloseMobile) onCloseMobile();
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 flex items-center justify-between gap-1.5 ${
                            isActive
                              ? "bg-accent/10 text-accent font-semibold shadow-2xs"
                              : "text-text-secondary hover:text-text-primary hover:bg-surface/60 font-normal"
                          }`}
                        >
                          <span className="truncate">{article.title}</span>
                          {article.badge && (
                            <span
                              className={`text-[9px] px-1 py-0.2 rounded border font-mono shrink-0 ${
                                isActive
                                ? "bg-accent/15 border-accent/30 text-accent"
                                : "bg-surface border-border/60 text-text-secondary"
                              }`}
                            >
                              {article.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
