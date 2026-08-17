"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Message, ModelOption } from "@/lib/types";
import { saveMessageToBackend } from "@/lib/api-client";

export function useChat({
  initialMessages = [],
  conversationId,
  onMessagesChange,
}: {
  initialMessages?: Message[];
  conversationId?: string | null;
  onMessagesChange?: (messages: Message[]) => void;
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const prevConvIdRef = useRef<string | null>(conversationId || null);

  // When conversationId changes (user switched threads in sidebar)
  useEffect(() => {
    if (conversationId !== prevConvIdRef.current) {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      setIsStreaming(false);
      setIsThinking(false);
      setMessages(initialMessages);
      prevConvIdRef.current = conversationId || null;
    }
  }, [conversationId, initialMessages]);

  const stopStreaming = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsStreaming(false);
    setIsThinking(false);
  }, []);

  const sendMessage = useCallback(
    async (content: string, modelId: ModelOption = "ti-optima") => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      const userMsg: Message = {
        id: `msg_u_${Date.now()}`,
        role: "user",
        content: trimmed,
        createdAt: Date.now(),
      };

      const assistantMsgId = `msg_a_${Date.now() + 1}`;
      const assistantMsgPlaceholder: Message = {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        createdAt: Date.now() + 1,
      };

      const newMessages = [...messages, userMsg, assistantMsgPlaceholder];
      setMessages(newMessages);
      onMessagesChange?.(newMessages);

      // Persist user message to backend DB if conversationId exists
      if (conversationId) {
        saveMessageToBackend(conversationId, "user", trimmed);
      }

      setIsStreaming(true);
      setIsThinking(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const apiUrl =
          typeof window !== "undefined"
            ? `${window.location.protocol}//${window.location.hostname}:8000/api/chat/stream`
            : "http://localhost:8000/api/chat/stream";

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            model_id: modelId,
            conversation_id: conversationId,
          }),
          signal: controller.signal,
        });

        if (!response.ok || !response.body) {
          throw new Error("Gagal menerima streaming respons dari server");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const textChunk = decoder.decode(value, { stream: true });
          const lines = textChunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const dataStr = line.slice(6).trim();
              if (dataStr === "[DONE]") {
                break;
              }
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk !== undefined) {
                  accumulated += parsed.chunk;
                  setIsThinking(false);
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantMsgId
                        ? { ...m, content: accumulated }
                        : m
                    )
                  );
                }
              } catch (e) {
                // Ignore JSON parse errors on partial chunks
              }
            }
          }
        }

        // Final save upon stream finish
        const finalMessages = newMessages.map((m) =>
          m.id === assistantMsgId ? { ...m, content: accumulated } : m
        );
        setMessages(finalMessages);
        onMessagesChange?.(finalMessages);

        // Persist completed assistant message to backend DB
        if (conversationId && accumulated) {
          saveMessageToBackend(conversationId, "assistant", accumulated);
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          // Streaming was stopped by user
        } else {
          console.error("Chat error:", err);
          const errorMsg =
            "\n\n*⚠️ Maaf, terjadi kendala saat menghubungi server backend RuangTI. Pastikan backend aktif.*";
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsgId
                ? { ...m, content: (m.content || "") + errorMsg }
                : m
            )
          );
        }
      } finally {
        setIsStreaming(false);
        setIsThinking(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isStreaming, conversationId, onMessagesChange]
  );

  const editMessage = useCallback(
    async (
      messageId: string,
      newContent: string,
      modelId: ModelOption = "ti-optima"
    ) => {
      const idx = messages.findIndex((m) => m.id === messageId);
      if (idx === -1) return;
      const historyUntilEdited = messages.slice(0, idx);
      setMessages(historyUntilEdited);
      await sendMessage(newContent, modelId);
    },
    [messages, sendMessage]
  );

  const regenerateMessage = useCallback(
    async (modelId: ModelOption = "ti-optima") => {
      if (messages.length === 0 || isStreaming) return;
      let lastUserIdx = -1;
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].role === "user") {
          lastUserIdx = i;
          break;
        }
      }
      if (lastUserIdx === -1) return;
      const userPrompt = messages[lastUserIdx].content;
      const historyBeforeUser = messages.slice(0, lastUserIdx);
      setMessages(historyBeforeUser);
      await sendMessage(userPrompt, modelId);
    },
    [messages, isStreaming, sendMessage]
  );

  return {
    messages,
    isStreaming,
    isThinking,
    sendMessage,
    stopStreaming,
    editMessage,
    regenerateMessage,
  };
}
