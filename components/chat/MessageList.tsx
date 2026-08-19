"use client";

import React, { useRef, useEffect, useState } from "react";
import { Message } from "@/lib/types";
import { MessageRow } from "./MessageRow";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MessageListProps {
  messages: Message[];
  isStreaming?: boolean;
  onEditMessage?: (id: string, newContent: string) => void;
  onRegenerateMessage?: (id: string) => void;
  onFeedbackMessage?: (id: string, type: "up" | "down" | null) => void;
}

export function MessageList({
  messages,
  isStreaming = false,
  onEditMessage,
  onRegenerateMessage,
  onFeedbackMessage,
}: MessageListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const isAutoScrollEnabled = useRef(true);

  // Auto-scroll when messages update or stream
  useEffect(() => {
    if (isAutoScrollEnabled.current && containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: isStreaming ? "instant" : "smooth",
      });
    }
  }, [messages, isStreaming]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const distanceToBottom = scrollHeight - scrollTop - clientHeight;
    const isNearBottom = distanceToBottom < 80;

    isAutoScrollEnabled.current = isNearBottom;
    setShowScrollBottom(!isNearBottom);
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
      isAutoScrollEnabled.current = true;
      setShowScrollBottom(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto px-4 sm:px-6 pt-3 pb-24 sm:pb-28 scroll-smooth"
    >
      <div className="max-w-chat mx-auto w-full flex flex-col justify-start">
        {messages.map((message, index) => {
          const isLastMessage = index === messages.length - 1;
          const isCurrentStreaming = isStreaming && isLastMessage && message.role === "assistant";

          return (
            <MessageRow
              key={message.id || index}
              message={message}
              isStreaming={isCurrentStreaming}
              onEdit={(newContent) => onEditMessage?.(message.id, newContent)}
              onRegenerate={() => onRegenerateMessage?.(message.id)}
              onFeedback={(type) => onFeedbackMessage?.(message.id, type)}
            />
          );
        })}
      </div>

      {/* Floating Scroll to Bottom Button */}
      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.15 }}
            type="button"
            onClick={scrollToBottom}
            className="fixed bottom-28 right-6 sm:right-10 z-30 w-9 h-9 rounded-full bg-surface border border-border shadow-md text-text-secondary hover:text-text-primary hover:border-accent flex items-center justify-center transition-all active:scale-95"
            aria-label="Gulir ke pesan terbaru"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
