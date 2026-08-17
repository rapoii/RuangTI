"use client";

import React, { useRef, useEffect, useState } from "react";
import { SendStopButton } from "./SendStopButton";
import { Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComposerProps {
  onSendMessage: (text: string) => void;
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
      onSendMessage(text.trim());
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
        {/* Floating Composer Container with Exact Mathematical Center */}
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

          {/* Send / Stop Action Button */}
          <div className="flex items-center justify-center shrink-0">
            <SendStopButton
              isStreaming={isStreaming}
              disabled={!text.trim() || disabled}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
