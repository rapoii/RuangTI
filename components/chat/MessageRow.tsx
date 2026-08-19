"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Message } from "@/lib/types";
import { MarkdownContent } from "./MarkdownContent";
import { ActionBar } from "./ActionBar";
import { TheGlow } from "./TheGlow";
import { cn } from "@/lib/utils";
import { Cpu, User, Layers } from "lucide-react";

interface MessageRowProps {
  message: Message;
  isStreaming?: boolean;
  onEdit?: (newContent: string) => void;
  onRegenerate?: () => void;
  onFeedback?: (type: "up" | "down" | null) => void;
}

export function MessageRow({
  message,
  isStreaming = false,
  onEdit,
  onRegenerate,
  onFeedback,
}: MessageRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(message.content);
  const isUser = message.role === "user";

  const handleSaveEdit = () => {
    if (editText.trim() && editText !== message.content && onEdit) {
      onEdit(editText.trim());
      setIsEditing(false);
    } else {
      setIsEditing(false);
    }
  };

  const resolveImageUrl = (url: string) => {
    if (url.startsWith("/uploads/")) {
      const apiBase =
        typeof window !== "undefined"
          ? `${window.location.protocol}//${window.location.hostname}:8000`
          : "http://localhost:8000";
      return `${apiBase}${url}`;
    }
    return url;
  };

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group w-full flex flex-col my-3.5 transition-all select-text",
        isUser ? "items-end" : "items-start"
      )}
    >
      {/* User Message: Bubble Pill with refined borders */}
      {isUser ? (
        <div className="max-w-[88%] sm:max-w-[75%] flex flex-col items-end">
          {isEditing ? (
            <div className="w-full flex flex-col gap-2 p-3 rounded-2xl bg-surface border border-accent shadow-sm">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full bg-transparent text-text-primary text-xs sm:text-sm resize-none outline-none min-h-[60px]"
                rows={3}
                autoFocus
              />
              <div className="flex justify-end gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-2.5 py-1 rounded-lg text-text-secondary hover:text-text-primary"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="px-3 py-1 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover active:scale-95 transition-all"
                >
                  Simpan & Kirim
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-end gap-1.5">
              {/* Attached Images Grid */}
              {message.images && message.images.length > 0 && (
                <div className="flex flex-wrap justify-end gap-2 mb-1">
                  {message.images.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-xl overflow-hidden border border-border bg-canvas-subtle shadow-sm max-w-[240px] sm:max-w-[300px] max-h-[220px]"
                    >
                      <img
                        src={resolveImageUrl(imgSrc)}
                        alt={`Attachment ${idx + 1}`}
                        className="w-full h-full object-cover cursor-pointer hover:scale-[1.02] transition-transform"
                        onClick={() => window.open(resolveImageUrl(imgSrc), "_blank")}
                      />
                    </div>
                  ))}
                </div>
              )}

              {message.content && (
                <div className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl rounded-tr-sm bg-surface border border-border text-text-primary text-xs sm:text-sm font-sans leading-relaxed shadow-sm">
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                </div>
              )}

              {/* Action bar for user message */}
              <div className="opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                <ActionBar
                  content={message.content}
                  role={message.role}
                  onEdit={() => {
                    setEditText(message.content);
                    setIsEditing(true);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Assistant Message: Clean Editorial Full Width */
        <div className="w-full flex flex-col items-start">
          {/* Assistant Header Branding */}
          <div className="flex items-center gap-2 mb-2 select-none">
            <div className="w-6 h-6 rounded-lg bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-display font-bold text-xs shadow-xs">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-semibold text-xs text-text-primary tracking-tight">
              RuangTI
            </span>
            {isStreaming && (
              <span className="text-[10px] text-accent flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                Menganalisis sistem industri...
              </span>
            )}
          </div>

          {/* Assistant Markdown Content */}
          <div className="w-full text-xs sm:text-sm text-text-primary leading-relaxed relative">
            {message.content ? (
              <>
                <MarkdownContent content={message.content} />
                {isStreaming && (
                  <span className="inline-block w-2 h-4 ml-1 align-middle bg-accent rounded-xs animate-pulse" />
                )}
              </>
            ) : (
              <div className="py-2">
                <TheGlow message="RuangTI sedang merumuskan solusi teknik industri..." />
              </div>
            )}
          </div>

          {/* Action Bar (Copy, Regenerate, Feedback) */}
          {!isStreaming && message.content && (
            <div className="mt-3">
              <ActionBar
                content={message.content}
                role={message.role}
                feedback={message.feedback}
                onRegenerate={onRegenerate}
                onFeedback={onFeedback}
              />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
