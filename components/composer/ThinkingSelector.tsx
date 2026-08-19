"use client";

import React, { useState, useRef, useEffect } from "react";
import { Brain, Sparkles, Check, ChevronUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThinkingEffort, THINKING_EFFORT_OPTIONS, ThinkingOption } from "@/lib/types";

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
          "h-8 sm:h-9 px-2.5 rounded-lg flex items-center gap-1.5 transition-all text-xs font-medium shrink-0",
          isThinkingActive
            ? "bg-accent/15 text-accent border border-accent/30 shadow-xs hover:bg-accent/20"
            : "text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-transparent",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        title={`Model: ${selectedOption.modelId} (${selectedOption.label})`}
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
            isOpen ? "rotate-0" : "rotate-180"
          )}
        />
      </button>

      {/* Popover Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-72 sm:w-80 rounded-2xl bg-surface/95 backdrop-blur-md border border-border shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 border-b border-border/60 mb-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-accent" />
                Thinking Effort Mode
              </span>
              <span className="text-[10px] text-text-tertiary font-mono">
                grok-4.6
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
                    "w-full text-left p-2 rounded-xl transition-all flex items-start gap-2.5 group",
                    isSelected
                      ? "bg-accent/10 border border-accent/25 text-text-primary"
                      : "hover:bg-surface-hover text-text-secondary border border-transparent"
                  )}
                >
                  <div className={cn(
                    "p-1.5 rounded-lg mt-0.5 shrink-0 transition-colors",
                    isSelected
                      ? "bg-accent text-white"
                      : "bg-surface border border-border/70 text-text-tertiary group-hover:text-text-primary"
                  )}>
                    {option.id === "none" ? (
                      <Zap className="w-3.5 h-3.5" />
                    ) : (
                      <Brain className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className={cn(
                        "text-xs font-semibold tracking-tight truncate",
                        isSelected ? "text-accent" : "text-text-primary"
                      )}>
                        {option.label}
                      </span>
                      <span className={cn(
                        "text-[9px] font-mono px-1.5 py-0.5 rounded-md border shrink-0",
                        isSelected
                          ? "bg-accent/20 text-accent border-accent/30 font-medium"
                          : "bg-surface text-text-tertiary border-border/60"
                      )}>
                        {option.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-text-tertiary leading-snug mt-0.5">
                      {option.description}
                    </p>
                    <span className="text-[10px] text-text-tertiary font-mono block mt-0.5 opacity-70">
                      {option.modelId}
                    </span>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-accent shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
