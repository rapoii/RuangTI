"use client";

import React, { useRef, useEffect, useState } from "react";
import { SendStopButton } from "./SendStopButton";
import { Paperclip, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComposerProps {
  onSendMessage: (text: string, options?: { webSearch?: boolean }) => void;
  onStopStreaming: () => void;
  isStreaming: boolean;
  disabled?: boolean;
}

export function Composer({
  onSendMessage,
  onStopStreaming,
  isStreaming,
  disabled = false,
}: ComposerProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        220
      )}px`;
    }
  }, [text]);

  const handleSubmit = () => {
    if (isStreaming) {
      onStopStreaming();
      return;
    }
    if (text.trim() && !disabled) {
      onSendMessage(text.trim(), { webSearch: webSearchEnabled });
      setText("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full px-3 sm:px-6 pb-2 pt-1 select-none">
      <div className="max-w-chat mx-auto w-full">
        {/* Floating Composer Container */}
        <div
          className={cn(
            "relative rounded-2xl bg-surface transition-all duration-200 border px-3 sm:px-4 flex items-center gap-2.5 shadow-sm min-h-[52px] py-1.5",
            isFocused
              ? "border-accent/80 shadow-md ring-2 ring-accent/10"
              : "border-border/80 hover:border-border-strong"
          )}
        >
          {/* File Attachment Button */}
          <div className="flex items-center justify-center shrink-0">
            <button
              type="button"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-surface-hover transition-colors m-0 p-0"
              aria-label="Lampirkan berkas studi kasus (Fase 2)"
              title="Lampirkan berkas"
            >
              <Paperclip className="w-4 h-4" />
            </button>
          </div>

          {/* Multi-line Auto-resizing Textarea */}
          <div className="flex-1 flex items-center min-h-[36px]">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={1}
              placeholder="Tanyakan masalah optimasi, lean, atau sistem industri..."
              disabled={disabled}
              className="w-full bg-transparent text-text-primary text-xs sm:text-sm placeholder:text-text-tertiary resize-none outline-none py-1.5 px-1 max-h-[220px] leading-normal font-sans block m-0"
            />
          </div>

          {/* Web Search Toggle */}
          <div className="flex items-center justify-center shrink-0">
            <button
              type="button"
              onClick={() => setWebSearchEnabled((prev) => !prev)}
              className={cn(
                "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors m-0 p-0",
                webSearchEnabled
                  ? "bg-accent/15 text-accent hover:bg-accent/25"
                  : "text-text-tertiary hover:text-text-primary hover:bg-surface-hover"
              )}
              aria-label={webSearchEnabled ? "Matikan pencarian web" : "Nyalakan pencarian web"}
              title={webSearchEnabled ? "Pencarian Web: AKTIF (RAG + Live Web)" : "Pencarian Web: NONAKTIF (RAG saja)"}
            >
              <Globe className="w-4 h-4" />
            </button>
          </div>

          {/* Send / Stop Action Button */}
          <div className="flex items-center justify-center shrink-0">
            <SendStopButton
              isStreaming={isStreaming}
              disabled={!text.trim() || disabled}
              onClick={handleSubmit}
            />
          </div>
        </div>

        {/* Web Search Status Indicator */}
        {webSearchEnabled && (
          <div className="text-center mt-1">
            <span className="text-[10px] sm:text-[11px] text-accent font-medium tracking-wide inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Live Web Search Multi-Crawl Aktif (Top 5 Sumber + Deep Extract)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
