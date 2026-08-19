"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Message, AttachedDocument } from "@/lib/types";
import { saveMessageToBackend, fetchMessagesFromBackend } from "@/lib/api-client";
import { useProfile } from "@/hooks/use-profile";

function getApiBase(): string {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:8000`;
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
}

interface UseChatProps {
  conversationId: string | null;
  initialMessages?: Message[];
  onMessagesChange?: (messages: Message[]) => void;
  onUpdateTitle?: (title: string) => void;
}

export interface SendMessageOptions {
  webSearch?: boolean;
  images?: string[];
  documents?: AttachedDocument[];
}

export function useChat({ conversationId, initialMessages = [], onMessagesChange, onUpdateTitle }: UseChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<string>("gcli/grok-4.6-high(xhigh)");
  const abortControllerRef = useRef<AbortController | null>(null);

  // Load messages from backend whenever conversationId changes
  useEffect(() => {
    if (!conversationId) {
      setMessages([]);
      return;
    }

    async function load() {
      if (!conversationId) return;
      const msgs = await fetchMessagesFromBackend(conversationId);
      setMessages(msgs);
      if (onMessagesChange) {
        onMessagesChange(msgs);
      }
    }
    load();
  }, [conversationId]);

  const stopStreaming = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
  }, []);

  const sendMessage = useCallback(
    async (content: string, customModel?: string, options?: SendMessageOptions) => {
      const hasContent = content.trim().length > 0;
      const hasImages = options?.images && options.images.length > 0;
      const hasDocs = options?.documents && options.documents.length > 0;
      if ((!hasContent && !hasImages && !hasDocs) || isStreaming || !conversationId) return;

      const userMsgId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const userMsg: Message = {
        id: userMsgId,
        role: "user",
        content,
        images: options?.images,
        documents: options?.documents,
        createdAt: Date.now(),
      };

      // Simpan user message ke backend database
      await saveMessageToBackend(conversationId, "user", content, options?.images, options?.documents);

      // Sediakan history percakapan terkini untuk context LLM
      const historyContext = messages.slice(-8).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      // Optimistic user message update
      const currentMessagesWithUser = [...messages, userMsg];
      setMessages(currentMessagesWithUser);
      if (onMessagesChange) onMessagesChange(currentMessagesWithUser);

      // Buat placeholder assistant message untuk live SSE stream
      const assistantMsgId = `msg_${Date.now() + 1}_${Math.random().toString(36).substring(2, 7)}`;
      const assistantMsg: Message = {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        createdAt: Date.now() + 1,
      };

      const withAssistant = [...currentMessagesWithUser, assistantMsg];
      setMessages(withAssistant);
      setIsStreaming(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const targetModel = selectedModel || "gcli/grok-4.6-high(xhigh)";
        const res = await fetch(`${getApiBase()}/api/chat/stream`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: content,
            images: options?.images || [],
            documents: options?.documents || [],
            model_id: targetModel,
            conversation_id: conversationId,
            history: historyContext,
            web_search: options?.webSearch || false,
          }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          throw new Error("Gagal menerima respon streaming dari 9Router LLM.");
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let assistantFullContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunkText = decoder.decode(value, { stream: true });
          const lines = chunkText.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const dataStr = line.slice(6).trim();
              if (dataStr === "[DONE]") {
                break;
              }
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk) {
                  assistantFullContent += parsed.chunk;
                  setMessages((prev) => {
                    const updated = prev.map((msg) =>
                      msg.id === assistantMsgId
                        ? { ...msg, content: assistantFullContent }
                        : msg
                    );
                    if (onMessagesChange) onMessagesChange(updated);
                    return updated;
                  });
                }
              } catch {
                // Ignore parse errors on partial frames
              }
            }
          }
        }

        // Persist final assistant response to backend SQLite
        if (assistantFullContent.trim()) {
          await saveMessageToBackend(conversationId, "assistant", assistantFullContent);
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Stream aborted by user");
        } else {
          console.error("Stream error:", err);
          const errorMsgContent =
            "*(Maaf, terjadi kendala saat menghubungi AI Gateway 9Router. Pastikan 9Router aktif di port 20128)*";
          setMessages((prev) => {
            const updated = prev.map((msg) =>
              msg.id === assistantMsgId ? { ...msg, content: errorMsgContent } : msg
            );
            if (onMessagesChange) onMessagesChange(updated);
            return updated;
          });
        }
      } finally {
        setIsStreaming(false);
        abortControllerRef.current = null;
      }
    },
    [conversationId, isStreaming, messages, onMessagesChange, selectedModel]
  );

  const editMessage = useCallback((id: string, newContent: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, content: newContent } : m)));
  }, []);

  const regenerateMessage = useCallback((id: string) => {
    const userMsg = messages.find((m) => m.role === "user");
    if (userMsg) {
      sendMessage(userMsg.content);
    }
  }, [messages, sendMessage]);

  return {
    messages,
    isStreaming,
    selectedModel,
    setSelectedModel,
    sendMessage,
    stopStreaming,
    editMessage,
    regenerateMessage,
  };
}
