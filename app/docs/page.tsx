"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DocsNavbar } from "@/components/docs/DocsNavbar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsTOC } from "@/components/docs/DocsTOC";
import { DocsContent } from "@/components/docs/DocsContent";
import { DocsSearchModal } from "@/components/docs/DocsSearchModal";
import { Footer } from "@/components/landing/Footer";
import { DOCS_CATEGORIES, DocArticle } from "@/lib/docs-data";

export default function DocsPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<string>("overview");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");

  // Flatten seluruh artikel untuk navigasi Previous/Next
  const allArticles: DocArticle[] = DOCS_CATEGORIES.flatMap((c) => c.articles);

  const currentArticle =
    allArticles.find((a) => a.id === selectedArticleId) || allArticles[0];
  const currentIndex = allArticles.findIndex((a) => a.id === currentArticle.id);

  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  // Lock body scroll saat mobile menu drawer terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMobileMenuOpen]);

  // Shortcut Ctrl+K / Cmd+K untuk search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Sync dengan URL Hash jika ada
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && allArticles.some((a) => a.id === hash)) {
        setSelectedArticleId(hash);
      }
    }
  }, [allArticles]);

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setIsMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.location.hash = articleId;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-canvas flex flex-col antialiased selection:bg-accent/20 selection:text-accent">
      {/* Search Modal */}
      <DocsSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
      />

      {/* Docs Header Navbar */}
      <DocsNavbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Main 3-Column Layout */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex items-start">
        {/* Left Column: Sidebar Nav (Desktop Sticky) */}
        <div className="hidden md:block w-64 lg:w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-r border-border/40 bg-surface/20">
          <DocsSidebar
            currentArticleId={currentArticle.id}
            onSelectArticle={handleSelectArticle}
            filterText={filterText}
          />
        </div>

        {/* Mobile Navigation Drawer Overlay + Slide Panel (GPU Accelerated Framer Motion) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex">
              {/* Backdrop Dimmer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                style={{ willChange: "opacity" }}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Sliding Sidebar Drawer */}
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform" }}
                className="relative w-[285px] max-w-[85vw] h-full bg-canvas border-r border-border shadow-2xl flex flex-col z-10 select-none"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
                <DocsSidebar
                  currentArticleId={currentArticle.id}
                  onSelectArticle={handleSelectArticle}
                  filterText={filterText}
                  onCloseMobile={() => setIsMobileMenuOpen(false)}
                />
              </motion.aside>
            </div>
          )}
        </AnimatePresence>

        {/* Center Column: Main Article Content */}
        <main className="flex-1 min-w-0 pb-1 sm:pb-2">
          <DocsContent
            article={currentArticle}
            onNavigateArticle={handleSelectArticle}
            prevArticle={prevArticle}
            nextArticle={nextArticle}
          />
        </main>

        {/* Right Column: On-this-page Table of Contents (Desktop Sticky) */}
        <div className="hidden xl:block w-60 shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-l border-border/40 overflow-y-auto">
          <DocsTOC
            subsections={currentArticle.subsections}
            articleTitle={currentArticle.title}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
