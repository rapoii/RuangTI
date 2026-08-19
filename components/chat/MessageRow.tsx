"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Message } from "@/lib/types";
import { MarkdownContent } from "./MarkdownContent";
import { ActionBar } from "./ActionBar";
import { TheGlow } from "./TheGlow";
import { ThinkingBlock } from "./ThinkingBlock";
import { cn } from "@/lib/utils";
import {
  Cpu,
  User,
  Layers,
  FileText,
  FileSpreadsheet,
  FileCode2,
  FileArchive,
  File as FileIcon,
  Download,
  Box,
  Activity,
  Terminal,
} from "lucide-react";

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

  // Helper function to extract <think>...</think> blocks from content
  const extractThinkingAndContent = (text: string) => {
    let thinking = "";
    let main = text;
    let isThinkingInProgress = false;

    if (text.includes("<think>")) {
      const thinkStart = text.indexOf("<think>") + 7;
      const thinkEnd = text.indexOf("</think>");

      if (thinkEnd !== -1) {
        thinking = text.substring(thinkStart, thinkEnd).trim();
        main = (text.substring(0, text.indexOf("<think>")) + text.substring(thinkEnd + 8)).trim();
      } else {
        // Tag <think> is still open (streaming)
        thinking = text.substring(thinkStart).trim();
        main = text.substring(0, text.indexOf("<think>")).trim();
        isThinkingInProgress = true;
      }
    }

    return { thinking, main, isThinkingInProgress };
  };

  const { thinking: thinkingText, main: cleanedContent, isThinkingInProgress } = !isUser && message.content
    ? extractThinkingAndContent(message.content)
    : { thinking: "", main: message.content, isThinkingInProgress: false };

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

  const getDocIcon = (ext: string) => {
    if (["xlsx", "xls", "csv"].includes(ext)) {
      return <FileSpreadsheet className="w-4 h-4 text-emerald-600" />;
    }
    if (["docx", "doc", "rtf", "txt", "md"].includes(ext)) {
      return <FileText className="w-4 h-4 text-sky-600" />;
    }
    if (["pdf"].includes(ext)) {
      return <FileText className="w-4 h-4 text-rose-600" />;
    }
    if (["zip", "tar", "gz", "7z", "rar"].includes(ext)) {
      return <FileArchive className="w-4 h-4 text-amber-600" />;
    }
    if (["dwg", "dxf"].includes(ext)) {
      return <Layers className="w-4 h-4 text-teal-600" />;
    }
    if (["step", "stp", "stl", "obj", "sldprt", "sldasm", "ipt", "iam"].includes(ext)) {
      return <Box className="w-4 h-4 text-indigo-600" />;
    }
    if (["gcode", "nc", "cnc", "tap"].includes(ext)) {
      return <Terminal className="w-4 h-4 text-emerald-700" />;
    }
    if (["fsm", "fsx"].includes(ext)) {
      return <Activity className="w-4 h-4 text-orange-600" />;
    }
    if (
      [
        "py", "js", "ts", "tsx", "jsx", "json", "sql", "yaml", "yml", "html",
        "css", "sh", "cpp", "c", "java", "r", "m"
      ].includes(ext)
    ) {
      return <FileCode2 className="w-4 h-4 text-violet-600" />;
    }
    return <FileIcon className="w-4 h-4 text-slate-600" />;
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
      className={cn(
        "group w-full flex flex-col my-2 sm:my-2.5 transition-all select-text",
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

              {/* Attached Documents List */}
              {message.documents && message.documents.length > 0 && (
                <div className="flex flex-col items-end gap-1.5 mb-1 w-full">
                  {message.documents.map((doc, idx) => (
                    <a
                      key={doc.id || idx}
                      href={resolveImageUrl(doc.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-canvas/90 hover:bg-canvas border border-border text-left shadow-xs transition-colors group/doc max-w-[280px] sm:max-w-[340px]"
                    >
                      <div className="p-1.5 rounded-lg bg-surface border border-border/70 shrink-0">
                        {getDocIcon(doc.ext)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-text-primary truncate group-hover/doc:text-accent transition-colors">
                          {doc.name}
                        </p>
                        <p className="text-[10px] text-text-tertiary">
                          {doc.ext.toUpperCase()} • {formatFileSize(doc.size)}
                        </p>
                      </div>
                      <Download className="w-3.5 h-3.5 text-text-tertiary group-hover/doc:text-text-primary shrink-0 opacity-0 group-hover/doc:opacity-100 transition-opacity" />
                    </a>
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
          <div className="flex items-center gap-2 mb-1.5 select-none">
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
            {/* Render Thinking Block if available */}
            {thinkingText && (
              <ThinkingBlock
                content={thinkingText}
                isStreaming={isStreaming && isThinkingInProgress}
              />
            )}

            {cleanedContent ? (
              <>
                <MarkdownContent content={cleanedContent} />
                {isStreaming && !isThinkingInProgress && (
                  <span className="inline-block w-2 h-4 ml-1 align-middle bg-accent rounded-xs animate-pulse" />
                )}
              </>
            ) : isThinkingInProgress ? (
              null
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
