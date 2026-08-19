"use client";

import React, { useState, useEffect } from "react";
import { Shell } from "@/components/layout/Shell";
import { MessageList } from "@/components/chat/MessageList";
import { EmptyState } from "@/components/chat/EmptyState";
import { Composer } from "@/components/composer/Composer";
import { useConversations } from "@/hooks/use-conversations";
import { useChat } from "@/hooks/use-chat";
import { useProfile } from "@/hooks/use-profile";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { ModelOption } from "@/lib/types";
import { useRouter, useParams } from "next/navigation";

export default function DynamicChatPage() {
  const router = useRouter();
  const rawParams = useParams();
  const conversationIdFromUrl =
    typeof rawParams?.id === "string" ? rawParams.id : undefined;

  const profileState = useProfile();
  const [selectedModel, setSelectedModel] = useState<ModelOption>("ti-optima");
  const [isMounted, setIsMounted] = useState(false);

  const conversationsState = useConversations({
    initialActiveId: conversationIdFromUrl,
    onNavigate: (id) => {
      if (id) {
        router.push(`/chat/${id}`);
      } else {
        router.push("/chat");
      }
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Redirect to landing page if user is not logged in
  useEffect(() => {
    if (profileState.isLoaded && !profileState.profile.isLoggedIn) {
      router.push("/");
    }
  }, [profileState.isLoaded, profileState.profile.isLoggedIn, router]);

  const {
    activeConversation,
    activeId,
    updateMessages,
    startNewConversation,
  } = conversationsState;

  const {
    messages,
    isStreaming,
    sendMessage,
    stopStreaming,
    editMessage,
    regenerateMessage,
  } = useChat({
    initialMessages: activeConversation?.messages || [],
    conversationId: activeId,
    onMessagesChange: (msgs) => {
      if (activeId) {
        updateMessages(activeId, msgs);
      }
    },
  });

  // Handle Global Shortcuts
  useKeyboardShortcuts({
    onNewChat: startNewConversation,
    onFocusComposer: () => {
      const textarea = document.querySelector("textarea");
      if (textarea) textarea.focus();
    },
    onEscape: () => {
      if (isStreaming) stopStreaming();
    },
  });

  const handleSendMessage = (text: string, options?: { webSearch?: boolean }) => {
    sendMessage(text, selectedModel, options);
  };

  const handleSelectPrompt = (promptText: string) => {
    sendMessage(promptText);
  };

  if (!isMounted || !profileState.isLoaded) {
    return (
      <div className="h-screen w-screen bg-canvas flex items-center justify-center text-accent">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent flex items-center justify-center animate-pulse">
            <span className="font-bold text-sm">TI</span>
          </div>
          <span className="text-xs text-text-secondary">Memuat RuangTI Workspace...</span>
        </div>
      </div>
    );
  }

  return (
    <Shell
      conversationsState={conversationsState}
      profileState={profileState}
    >
      <div className="flex-1 flex flex-col h-full min-h-0 overflow-hidden relative">
        {/* Scrollable View (Empty State / Message List) */}
        {messages.length === 0 ? (
          <div
            id="empty-state-scroll"
            className="flex-1 overflow-y-auto px-4 pb-28 sm:pb-32 pt-2 flex flex-col items-center justify-center no-scrollbar"
          >
            <div className="w-full max-w-chat my-auto py-2">
              <EmptyState onSelectPrompt={handleSelectPrompt} />
            </div>
          </div>
        ) : (
          <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
            <MessageList
              messages={messages}
              isStreaming={isStreaming}
              onEditMessage={(id, newText) => editMessage(id, newText)}
              onRegenerateMessage={(id) => regenerateMessage(id)}
              onFeedbackMessage={() => {}}
            />
          </div>
        )}

        {/* Floating Fixed-Position Composer (Always visible on mobile & desktop without scrolling) */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none bg-gradient-to-t from-canvas via-canvas/80 to-transparent pt-6 pb-2 sm:pb-3">
          <div className="pointer-events-auto">
            <Composer
              onSendMessage={handleSendMessage}
              onStopStreaming={stopStreaming}
              isStreaming={isStreaming}
            />
          </div>
        </div>
      </div>
    </Shell>
  );
}
