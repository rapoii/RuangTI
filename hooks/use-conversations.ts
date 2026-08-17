"use client";

import { useEffect, useState, useCallback } from "react";
import { Conversation, Message } from "@/lib/types";
import {
  loadConversations,
  saveConversations,
  createNewConversation,
  getInitialSeedConversations,
  getActiveConversationId,
  setActiveConversationId,
} from "@/lib/storage";
import { generateTitleFromMessage } from "@/lib/utils";

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveIdState] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Initial load
  useEffect(() => {
    setMounted(true);
    let loaded = loadConversations();
    if (loaded.length === 0) {
      loaded = getInitialSeedConversations();
      saveConversations(loaded);
    }
    setConversations(loaded);

    const savedActiveId = getActiveConversationId();
    if (savedActiveId && loaded.some((c) => c.id === savedActiveId)) {
      setActiveIdState(savedActiveId);
    } else if (loaded.length > 0) {
      setActiveIdState(loaded[0].id);
      setActiveConversationId(loaded[0].id);
    }
  }, []);

  const persist = useCallback((newList: Conversation[]) => {
    setConversations(newList);
    saveConversations(newList);
  }, []);

  const selectConversation = useCallback((id: string) => {
    setActiveIdState(id);
    setActiveConversationId(id);
  }, []);

  const startNewConversation = useCallback(() => {
    const newConv = createNewConversation();
    const updated = [newConv, ...conversations];
    persist(updated);
    selectConversation(newConv.id);
    return newConv.id;
  }, [conversations, persist, selectConversation]);

  const deleteConversation = useCallback(
    (id: string) => {
      const remaining = conversations.filter((c) => c.id !== id);
      persist(remaining);
      if (activeId === id) {
        if (remaining.length > 0) {
          selectConversation(remaining[0].id);
        } else {
          // If all deleted, create fresh empty one
          const fresh = createNewConversation();
          persist([fresh]);
          selectConversation(fresh.id);
        }
      }
    },
    [conversations, activeId, persist, selectConversation]
  );

  const renameConversation = useCallback(
    (id: string, newTitle: string) => {
      const trimmed = newTitle.trim();
      if (!trimmed) return;
      const updated = conversations.map((c) =>
        c.id === id ? { ...c, title: trimmed, updatedAt: Date.now() } : c
      );
      persist(updated);
    },
    [conversations, persist]
  );

  const togglePinConversation = useCallback(
    (id: string) => {
      const updated = conversations.map((c) =>
        c.id === id ? { ...c, pinned: !c.pinned } : c
      );
      persist(updated);
    },
    [conversations, persist]
  );

  const updateMessages = useCallback(
    (id: string, messages: Message[]) => {
      setConversations((prev) => {
        const target = prev.find((c) => c.id === id);
        if (!target) return prev;

        // Auto-generate title from first user message if still default
        let newTitle = target.title;
        if (
          (target.title === "Percakapan Baru" || !target.title) &&
          messages.length > 0
        ) {
          const firstUserMsg = messages.find((m) => m.role === "user");
          if (firstUserMsg) {
            newTitle = generateTitleFromMessage(firstUserMsg.content);
          }
        }

        const updated = prev.map((c) =>
          c.id === id
            ? { ...c, title: newTitle, messages, updatedAt: Date.now() }
            : c
        );
        saveConversations(updated);
        return updated;
      });
    },
    []
  );

  const filteredConversations = conversations.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchTitle = c.title.toLowerCase().includes(q);
    const matchContent = c.messages.some((m) =>
      m.content.toLowerCase().includes(q)
    );
    return matchTitle || matchContent;
  });

  const activeConversation = conversations.find((c) => c.id === activeId) || null;

  return {
    conversations: filteredConversations,
    allConversations: conversations,
    activeId,
    activeConversation,
    selectConversation,
    startNewConversation,
    deleteConversation,
    renameConversation,
    togglePinConversation,
    updateMessages,
    searchQuery,
    setSearchQuery,
    mounted,
  };
}
