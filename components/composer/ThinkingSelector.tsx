"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Check, ChevronUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThinkingEffort, THINKING_EFFORT_OPTIONS } from "@/lib/types";

interface ThinkingSelectorProps {
  currentEffort: ThinkingEffort;
  onChangeEffort: (effort: ThinkingEffort) => void;
  disabled?: boolean;
}

export function ThinkingSelector({
  currentEffort,
  onChangeEffort,
  disabled = false,
}: ThinkingSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    THINKING_EFFORT_OPTIONS.find((opt) => opt.id === currentEffort) ||
    THINKING_EFFORT_OPTIONS[0];

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isThinkingActive = currentEffort !== "none";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        disabled={disabled}
        className={cn(
          "h-8 sm:h-9 px-2.5 rounded-lg flex items-center gap-1.5 transition-all text-xs font-medium shrink-0 active:scale-95",
          isThinkingActive
            ? "bg-accent/15 text-accent border border-accent/30 shadow-xs hover:bg-accent/20"
            : "text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-transparent",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        title={`Tingkat Penalaran: ${selectedOption.label}`}
        aria-label="Pilih Thinking Effort"
      >
        {currentEffort === "none" ? (
          <Zap className="w-3.5 h-3.5" />
        ) : (
          <Brain className="w-3.5 h-3.5 text-accent animate-pulse" />
        )}
        
        <span className="hidden sm:inline tracking-tight">
          {currentEffort === "none" ? "Non-Thinking" : `Thinking: ${selectedOption.shortLabel}`}
        </span>
        <span className="sm:hidden tracking-tight">
          {currentEffort === "none" ? "Fast" : selectedOption.shortLabel}
        </span>

        <ChevronUp
          className={cn(
            "w-3 h-3 transition-transform duration-150 opacity-60",
            isOpen ? "rotate-0 text-accent" : "rotate-180"
          )}
          style={{ willChange: "transform" }}
        />
      </button>

      {/* Popover Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 6 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="absolute bottom-full right-0 sm:left-0 sm:right-auto mb-2 w-[calc(100vw-2rem)] max-w-[300px] sm:w-80 rounded-2xl bg-surface border border-border shadow-xl p-2 z-50 select-none overflow-hidden"
          >
            <div className="px-2.5 py-1.5 border-b border-border/60 mb-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-accent" />
                  Thinking Effort Mode
                </span>
                <span className="text-[10px] text-accent font-medium px-1.5 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                  RuangTI Engine
                </span>
              </div>
              <p className="text-[11px] text-text-secondary mt-0.5 leading-tight">
                Pilih kedalaman proses berpikir & penalaran langkah-demi-langkah AI.
              </p>
            </div>

            <div className="space-y-1 py-1">
              {THINKING_EFFORT_OPTIONS.map((option) => {
                const isSelected = option.id === currentEffort;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      onChangeEffort(option.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full px-2.5 py-2 rounded-xl text-left transition-colors flex items-start gap-2.5 group",
                      isSelected
                        ? "bg-accent/15 border border-accent/30 text-accent font-semibold"
                        : "hover:bg-surface-hover text-text-primary border border-transparent"
                    )}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isSelected ? (
                        <div className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-border/80 group-hover:border-text-secondary" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold leading-none">
                          {option.label}
                        </span>
                        <span className="text-[10px] text-text-secondary font-mono px-1.5 py-0.5 rounded bg-surface border border-border/60">
                          {option.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-secondary mt-1 line-clamp-2 leading-tight">
                        {option.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
