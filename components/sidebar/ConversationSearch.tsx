"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface ConversationSearchProps {
  value: string;
  onChange: (val: string) => void;
}

export function ConversationSearch({ value, onChange }: ConversationSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="w-3.5 h-3.5 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        placeholder="Cari percakapan..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-surface border border-border/70 text-text-primary placeholder:text-text-tertiary focus:border-accent focus:bg-surface transition-all outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary p-0.5 rounded-md hover:bg-canvas-subtle transition-colors"
          aria-label="Bersihkan pencarian"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}
