"use client";

import React, { useState, useEffect, useRef } from "react";
import { Brain, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThinkingBlockProps {
  content: string;
  isStreaming?: boolean;
}

export function ThinkingBlock({ content, isStreaming = false }: ThinkingBlockProps) {
  // Default open while thinking stream is actively in progress
  const [isOpen, setIsOpen] = useState<boolean>(isStreaming);
  const userInteractedRef = useRef<boolean>(false);

  // Auto-collapse accordion saat proses thinking selesai dan output AI mulai muncul
  useEffect(() => {
    if (isStreaming) {
      if (!userInteractedRef.current) {
        setIsOpen(true);
      }
    } else {
      // Saat streaming thinking selesai (atau saat render riwayat pesan lama), auto-tutup akordion
      if (!userInteractedRef.current) {
        setIsOpen(false);
      }
    }
  }, [isStreaming]);

  const handleToggle = () => {
    userInteractedRef.current = true;
    setIsOpen((prev) => !prev);
  };

  if (!content.trim() && !isStreaming) return null;

  return (
    <div className="my-2.5 rounded-2xl border border-accent/20 bg-accent/5 overflow-hidden text-xs select-none">
      {/* Header Accordion Toggle */}
      <button
        type="button"
        onClick={handleToggle}
        className="w-full px-3.5 py-2 flex items-center justify-between text-left hover:bg-accent/10 transition-colors group cursor-pointer"
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
              "w-3.5 h-3.5 transition-transform duration-200 shrink-0",
              isOpen ? "rotate-180 text-accent" : "rotate-0"
            )}
            style={{ willChange: "transform" }}
          />
        </div>
      </button>

      {/* Zero-Lag Native CSS Grid Accordion */}
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-accent/15",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-3.5 py-2.5 bg-canvas/60 text-text-secondary text-[11px] sm:text-xs leading-relaxed font-mono whitespace-pre-wrap max-h-72 overflow-y-auto custom-scrollbar select-text">
            {content || "Menginisiasi struktur dekomposisi masalah..."}
            {isStreaming && (
              <span className="inline-block w-1.5 h-3 bg-accent animate-pulse ml-0.5 align-middle" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
