import React from "react";
import { ArrowUp, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface SendStopButtonProps {
  isStreaming: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function SendStopButton({
  isStreaming,
  disabled,
  onClick,
}: SendStopButtonProps) {
  if (isStreaming) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Hentikan pembuatan pesan"
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent text-white flex items-center justify-center transition-all duration-150 shadow-sm hover:scale-105 active:scale-95 shrink-0"
      >
        <Square className="w-3.5 h-3.5 fill-current" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Kirim pesan"
      className={cn(
        "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-150 shadow-sm shrink-0",
        disabled
          ? "opacity-40 cursor-not-allowed bg-surface-active text-text-tertiary border border-border/80"
          : "bg-accent text-white hover:bg-accent-hover hover:scale-105 active:scale-95 shadow-md"
      )}
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
    </button>
  );
}
