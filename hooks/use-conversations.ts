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

interface UseConversationsProps {
  initialActiveId?: string;
  onNavigate?: (id: string | null) => void;
}

export function useConversations(props?: UseConversationsProps) {
  const { initialActiveId, onNavigate } = props || {};
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveIdState] = useState<string | null>(initialActiveId || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync if initialActiveId changes from URL
  useEffect(() => {
    if (initialActiveId && initialActiveId !== activeId) {
      setActiveIdState(initialActiveId);
    }
  }, [initialActiveId]);

  // Load conversations from backend on mount
  useEffect(() => {
    setMounted(true);
    async function loadData() {
      setIsLoading(true);
      try {
        const list = await fetchConversationsFromBackend();
        setConversations(list || []);

        // Tentukan active ID target:
        // Jika user sengaja membuka /chat/abc-123 (initialActiveId ada), buka ID tersebut jika valid.
        // Jika user membuka /chat (tanpa ID spesifik), JANGAN auto-select chat lama agar landing ke Empty State "Percakapan Baru".
        let targetId = initialActiveId;

        if (targetId) {
          // Cek apakah targetId ada di list
          const exists = list.some((c) => c.id === targetId);
          if (!exists) {
            // Jika ID URL tidak valid, reset ke null (/chat)
            targetId = undefined;
            setActiveIdState(null);
            if (onNavigate) onNavigate(null);
          }
        }

        if (targetId) {
          setActiveIdState(targetId);
          // Load messages for the active conversation
          try {
            const msgs = await fetchMessagesFromBackend(targetId);
            setConversations((prev) =>
              prev.map((c) => (c.id === targetId ? { ...c, messages: msgs || [] } : c))
            );
          } catch (e) {
            console.error("Failed to load messages for conversation:", e);
          }
        } else {
          setActiveIdState(null);
        }
      } catch (err) {
        console.error("Failed to load conversations:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const selectConversation = useCallback(
    async (id: string) => {
      setActiveIdState(id);
      if (onNavigate) {
        onNavigate(id);
      }
      // Fetch messages for selected conversation if not loaded yet
      const current = conversations.find((c) => c.id === id);
      if (current && (!current.messages || current.messages.length === 0)) {
        const msgs = await fetchMessagesFromBackend(id);
        setConversations((prev) =>
          prev.map((c) => (c.id === id ? { ...c, messages: msgs } : c))
        );
      }
    },
    [conversations, onNavigate]
  );

  const startNewConversation = useCallback(async () => {
    const newConv = await createConversationOnBackend("Percakapan Baru");
    if (newConv) {
      setConversations((prev) => [newConv, ...prev]);
      setActiveIdState(newConv.id);
      if (onNavigate) {
        onNavigate(newConv.id);
      }
      return newConv.id;
    }
    return null;
  }, [onNavigate]);

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

  const updateShareStatus = useCallback(
    (id: string, isPublic: boolean, shareId?: string) => {
      setConversations((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, isPublic, shareId: shareId || c.shareId } : c
        )
      );
    },
    []
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
    updateShareStatus,
    updateMessages,
    mounted,
  };
}
