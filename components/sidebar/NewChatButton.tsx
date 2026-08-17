"use client";

import React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewChatButtonProps {
  onClick: () => void;
  isCollapsed?: boolean;
}

export function NewChatButton({ onClick, isCollapsed }: NewChatButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Buat percakapan baru"
      className={cn(
        "group relative flex items-center rounded-xl bg-surface hover:bg-surface-hover active:bg-surface-active border border-border hover:border-border-strong text-text-primary text-xs sm:text-sm font-medium transition-all duration-150 shadow-sm active:scale-[0.98]",
        isCollapsed ? "w-10 h-10 p-0 justify-center mx-auto" : "w-full px-3.5 py-2.5"
      )}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-5 h-5 rounded-lg bg-accent-subtle text-accent flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
        {!isCollapsed && <span className="font-semibold tracking-tight whitespace-nowrap">Percakapan Baru</span>}
      </div>
    </button>
  );
}
