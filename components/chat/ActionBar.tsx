"use client";

import React, { useState } from "react";
import { Copy, Check, RotateCw, Edit3, ThumbsUp, ThumbsDown } from "lucide-react";
import { Message, Role } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ActionBarProps {
  content: string;
  role: Role;
  feedback?: "up" | "down" | null;
  isStreaming?: boolean;
  onEdit?: () => void;
  onRegenerate?: () => void;
  onFeedback?: (type: "up" | "down" | null) => void;
}

export function ActionBar({
  content,
  role,
  feedback,
  isStreaming = false,
  onEdit,
  onRegenerate,
  onFeedback,
}: ActionBarProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const isUser = role === "user";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks", err);
    }
  };

  if (isStreaming) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-1 mt-1 text-text-tertiary select-none transition-opacity duration-150",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {/* Copy Button */}
      <button
        type="button"
        onClick={handleCopy}
        className="h-6 px-1.5 rounded-md flex items-center gap-1 text-[11px] text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent hover:border-border transition-all active:scale-95 cursor-pointer"
        aria-label="Salin teks pesan"
        title="Salin teks"
      >
        {hasCopied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] text-emerald-500 font-medium">Tersalin</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium hidden xs:inline">Salin</span>
          </>
        )}
      </button>

      {/* User: Edit Button */}
      {isUser && onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="h-6 px-1.5 rounded-md flex items-center gap-1 text-[11px] text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent hover:border-border transition-all active:scale-95 cursor-pointer"
          aria-label="Edit pesan ini"
          title="Edit pesan"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium hidden xs:inline">Edit</span>
        </button>
      )}

      {/* Assistant: Regenerate Button */}
      {!isUser && onRegenerate && (
        <button
          type="button"
          onClick={onRegenerate}
          className="h-7 px-2 rounded-lg flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent hover:border-border transition-all active:scale-95"
          aria-label="Buat ulang respon"
          title="Buat ulang respon"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium hidden xs:inline">Ulang</span>
        </button>
      )}

      {/* Assistant: Feedback Buttons */}
      {!isUser && onFeedback && (
        <div className="flex items-center gap-0.5 ml-1 pl-1 border-l border-border/60">
          <button
            type="button"
            onClick={() => onFeedback(feedback === "up" ? null : "up")}
            className={cn(
              "w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-95",
              feedback === "up"
                ? "text-accent bg-accent-subtle"
                : "text-text-tertiary hover:text-text-primary hover:bg-surface"
            )}
            aria-label="Bagus"
            title="Bagus"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onFeedback(feedback === "down" ? null : "down")}
            className={cn(
              "w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-95",
              feedback === "down"
                ? "text-red-500 bg-red-500/10"
                : "text-text-tertiary hover:text-text-primary hover:bg-surface"
            )}
            aria-label="Kurang pas"
            title="Kurang pas"
          >
            <ThumbsDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
