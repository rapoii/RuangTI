"use client";

import { useState, useRef, useCallback } from "react";
import { Message, ModelOption } from "@/lib/types";
import { simulateTokenStream } from "@/lib/mock-ai";

export function useChat({
  initialMessages = [],
  onMessagesChange,
}: {
  initialMessages?: Message[];
  onMessagesChange?: (messages: Message[]) => void;
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Sync state if initialMessages changes externally (e.g. switching threads)
  const setThreadMessages = useCallback((newMsgs: Message[]) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsStreaming(false);
    setIsThinking(false);
    setMessages(newMsgs);
  }, []);

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

      setIsStreaming(true);
      setIsThinking(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const stream = simulateTokenStream(trimmed, {
          signal: controller.signal,
          model: modelId,
        });

        let accumulated = "";
        let firstToken = true;

        for await (const chunk of stream) {
          if (firstToken) {
            setIsThinking(false);
            firstToken = false;
          }
          accumulated += chunk;

          setMessages((prev) => {
            const updated = prev.map((m) =>
              m.id === assistantMsgId ? { ...m, content: accumulated } : m
            );
            return updated;
          });
        }

        // Final save upon stream finish
        setMessages((prev) => {
          const updated = prev.map((m) =>
            m.id === assistantMsgId ? { ...m, content: accumulated } : m
          );
          onMessagesChange?.(updated);
          return updated;
        });
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          console.error("Stream error:", err);
        }
      } finally {
        setIsStreaming(false);
        setIsThinking(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isStreaming, onMessagesChange]
  );

  const editAndRegenerate = useCallback(
    async (messageId: string, newContent: string, modelId: ModelOption = "ti-optima") => {
      const targetIndex = messages.findIndex((m) => m.id === messageId);
      if (targetIndex === -1 || isStreaming) return;

      // Truncate all messages after this edited message
      const updatedUserMsg: Message = {
        ...messages[targetIndex],
        content: newContent,
      };

      const slicedMessages = messages.slice(0, targetIndex);
      const assistantMsgId = `msg_a_${Date.now()}`;
      const assistantPlaceholder: Message = {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        createdAt: Date.now(),
      };

      const newHistory = [...slicedMessages, updatedUserMsg, assistantPlaceholder];
      setMessages(newHistory);
      onMessagesChange?.(newHistory);

      setIsStreaming(true);
      setIsThinking(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const stream = simulateTokenStream(newContent, {
          signal: controller.signal,
          model: modelId,
        });

        let accumulated = "";
        let firstToken = true;

        for await (const chunk of stream) {
          if (firstToken) {
            setIsThinking(false);
            firstToken = false;
          }
          accumulated += chunk;

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMsgId ? { ...m, content: accumulated } : m
            )
          );
        }

        setMessages((prev) => {
          const updated = prev.map((m) =>
            m.id === assistantMsgId ? { ...m, content: accumulated } : m
          );
          onMessagesChange?.(updated);
          return updated;
        });
      } finally {
        setIsStreaming(false);
        setIsThinking(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isStreaming, onMessagesChange]
  );

  const regenerateAssistant = useCallback(
    async (assistantMessageId: string, modelId: ModelOption = "ti-optima") => {
      const targetIndex = messages.findIndex((m) => m.id === assistantMessageId);
      if (targetIndex === -1 || isStreaming) return;

      // Cut off at the user message preceding this assistant message
      const preceding = messages.slice(0, targetIndex);
      const prevUserMsg = preceding[preceding.length - 1];
      const promptToUse = prevUserMsg?.role === "user" ? prevUserMsg.content : "Analisis lebih lanjut";

      const assistantPlaceholder: Message = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        createdAt: Date.now(),
      };

      const newHistory = [...preceding, assistantPlaceholder];
      setMessages(newHistory);
      onMessagesChange?.(newHistory);

      setIsStreaming(true);
      setIsThinking(true);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const stream = simulateTokenStream(promptToUse, {
          signal: controller.signal,
          model: modelId,
        });

        let accumulated = "";
        let firstToken = true;

        for await (const chunk of stream) {
          if (firstToken) {
            setIsThinking(false);
            firstToken = false;
          }
          accumulated += chunk;

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId ? { ...m, content: accumulated } : m
            )
          );
        }

        setMessages((prev) => {
          const updated = prev.map((m) =>
            m.id === assistantMessageId ? { ...m, content: accumulated } : m
          );
          onMessagesChange?.(updated);
          return updated;
        });
      } finally {
        setIsStreaming(false);
        setIsThinking(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isStreaming, onMessagesChange]
  );

  const setFeedback = useCallback(
    (messageId: string, feedback: "up" | "down" | null) => {
      setMessages((prev) => {
        const updated = prev.map((m) =>
          m.id === messageId ? { ...m, feedback } : m
        );
        onMessagesChange?.(updated);
        return updated;
      });
    },
    [onMessagesChange]
  );

  return {
    messages,
    isStreaming,
    isThinking,
    sendMessage,
    stopStreaming,
    editAndRegenerate,
    regenerateAssistant,
    setFeedback,
    setThreadMessages,
  };
}
