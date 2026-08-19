"use client";

import React, { useState } from "react";
import { Brain, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThinkingBlockProps {
  content: string;
  isStreaming?: boolean;
}

export function ThinkingBlock({ content, isStreaming = false }: ThinkingBlockProps) {
  // Default open while streaming, closed when finished for clean reading
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (!content.trim() && !isStreaming) return null;

  return (
    <div className="my-2.5 rounded-2xl border border-accent/20 bg-accent/5 overflow-hidden transition-all text-xs">
      {/* Header Accordion Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-3.5 py-2 flex items-center justify-between text-left hover:bg-accent/10 transition-colors select-none group"
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0">
            <Brain className={cn("w-3 h-3 text-accent", isStreaming && "animate-pulse")} />
          </div>
          <span className="font-medium text-text-primary flex items-center gap-1.5 truncate">
            {isStreaming ? (
              <>
                <span className="text-accent font-semibold">Sedang menalar & membedah sistem...</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              </>
            ) : (
              <span className="text-text-secondary group-hover:text-text-primary">
                Proses Berpikir & Penalaran Sistem
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-text-tertiary">
          <span className="text-[10px] font-mono opacity-80">
            {isStreaming ? "aktif" : `${content.length} karakter`}
          </span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-200",
              isOpen ? "rotate-180 text-accent" : "rotate-0"
            )}
          />
        </div>
      </button>

      {/* Thinking Body */}
      {isOpen && (
        <div className="px-3.5 py-2.5 border-t border-accent/15 bg-canvas/60 text-text-secondary text-[11px] sm:text-xs leading-relaxed font-mono whitespace-pre-wrap max-h-72 overflow-y-auto custom-scrollbar">
          {content || "Menginisiasi struktur dekomposisi masalah..."}
          {isStreaming && (
            <span className="inline-block w-1.5 h-3 bg-accent animate-pulse ml-0.5 align-middle" />
          )}
        </div>
      )}
    </div>
  );
}
