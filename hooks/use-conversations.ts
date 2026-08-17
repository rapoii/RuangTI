"use client";

import { useEffect, useState, useCallback } from "react";
import { Conversation, Message } from "@/lib/types";
import {
  fetchConversationsFromBackend,
  createConversationOnBackend,
  deleteConversationOnBackend,
  renameConversationOnBackend,
  togglePinConversationOnBackend,
  fetchMessagesFromBackend,
} from "@/lib/api-client";
import { generateTitleFromMessage } from "@/lib/utils";

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveIdState] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load conversations from backend on mount
  useEffect(() => {
    setMounted(true);
    async function loadData() {
      setIsLoading(true);
      const list = await fetchConversationsFromBackend();
      setConversations(list);
      
      if (list.length > 0) {
        setActiveIdState(list[0].id);
        // Load messages for the first conversation
        const msgs = await fetchMessagesFromBackend(list[0].id);
        setConversations((prev) =>
          prev.map((c) => (c.id === list[0].id ? { ...c, messages: msgs } : c))
        );
      } else {
        // If empty, create a fresh initial conversation on backend
        const newConv = await createConversationOnBackend("Konsultasi TI Baru");
        if (newConv) {
          setConversations([newConv]);
          setActiveIdState(newConv.id);
        }
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  const selectConversation = useCallback(
    async (id: string) => {
      setActiveIdState(id);
      // Fetch messages for selected conversation if not loaded yet
      const current = conversations.find((c) => c.id === id);
      if (current && (!current.messages || current.messages.length === 0)) {
        const msgs = await fetchMessagesFromBackend(id);
        setConversations((prev) =>
          prev.map((c) => (c.id === id ? { ...c, messages: msgs } : c))
        );
      }
    },
    [conversations]
  );

  const startNewConversation = useCallback(async () => {
    const newConv = await createConversationOnBackend("Konsultasi TI Baru");
    if (newConv) {
      setConversations((prev) => [newConv, ...prev]);
      setActiveIdState(newConv.id);
      return newConv.id;
    }
    return null;
  }, []);

  const deleteConversation = useCallback(
    async (id: string) => {
      const ok = await deleteConversationOnBackend(id);
      if (ok) {
        const remaining = conversations.filter((c) => c.id !== id);
        setConversations(remaining);
        if (activeId === id) {
          if (remaining.length > 0) {
            selectConversation(remaining[0].id);
          } else {
            startNewConversation();
          }
        }
      }
    },
    [conversations, activeId, selectConversation, startNewConversation]
  );

  const renameConversation = useCallback(
    async (id: string, newTitle: string) => {
      const trimmed = newTitle.trim();
      if (!trimmed) return;
      setConversations((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, title: trimmed, updatedAt: Date.now() } : c
        )
      );
      await renameConversationOnBackend(id, trimmed);
    },
    []
  );

  const togglePinConversation = useCallback(
    async (id: string) => {
      const conv = conversations.find((c) => c.id === id);
      if (!conv) return;
      const nextPinned = !conv.pinned;
      setConversations((prev) =>
        prev.map((c) => (c.id === id ? { ...c, pinned: nextPinned } : c))
      );
      await togglePinConversationOnBackend(id, nextPinned);
    },
    [conversations]
  );

  const updateMessages = useCallback(
    (id: string, messages: Message[]) => {
      setConversations((prev) => {
        return prev.map((c) => {
          if (c.id !== id) return c;
          let newTitle = c.title;
          // Auto rename title if still default and there's a user message
          if (
            (c.title === "Percakapan Baru" || c.title === "Konsultasi TI Baru") &&
            messages.length > 0
          ) {
            const firstUser = messages.find((m) => m.role === "user");
            if (firstUser) {
              newTitle = generateTitleFromMessage(firstUser.content);
              renameConversationOnBackend(id, newTitle);
            }
          }
          return {
            ...c,
            title: newTitle,
            messages,
            updatedAt: Date.now(),
          };
        });
      });
    },
    []
  );

  const activeConversation =
    conversations.find((c) => c.id === activeId) || null;

  const filteredConversations = conversations.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = c.title.toLowerCase().includes(q);
    const matchesMessage = (c.messages || []).some((m: Message) =>
      m.content.toLowerCase().includes(q)
    );
    return matchesTitle || matchesMessage;
  });

  return {
    conversations: filteredConversations,
    allConversations: conversations,
    activeConversation,
    activeId,
    searchQuery,
    isLoading,
    setSearchQuery,
    selectConversation,
    startNewConversation,
    deleteConversation,
    renameConversation,
    togglePinConversation,
    updateMessages,
    mounted,
  };
}
