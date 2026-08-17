"use client";

import React, { useState, useEffect } from "react";
import { Shell } from "@/components/layout/Shell";
import { MessageList } from "@/components/chat/MessageList";
import { EmptyState } from "@/components/chat/EmptyState";
import { Composer } from "@/components/composer/Composer";
import { useConversations } from "@/hooks/use-conversations";
import { useChat } from "@/hooks/use-chat";
import { useTheme } from "@/hooks/use-theme";
import { useProfile } from "@/hooks/use-profile";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { ModelOption } from "@/lib/types";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const conversationsState = useConversations();
  const profileState = useProfile();
  const [selectedModel, setSelectedModel] = useState<ModelOption>("ti-optima");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleSendMessage = (text: string) => {
    sendMessage(text, selectedModel);
  };

  const handleSelectPrompt = (promptText: string) => {
    sendMessage(promptText, selectedModel);
  };

  if (!isMounted) {
    return (
      <div className="h-screen w-screen bg-[#0F1115] flex items-center justify-center text-accent">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent flex items-center justify-center animate-pulse">
            <span className="font-bold text-sm">TI</span>
          </div>
          <span className="text-xs text-text-secondary">Memuat RuangTI...</span>
        </div>
      </div>
    );
  }

  return (
    <Shell
      theme={theme}
      onToggleTheme={toggleTheme}
      conversationsState={conversationsState}
      selectedModel={selectedModel}
      onSelectModel={setSelectedModel}
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
              onEditMessage={(id, newText) => editMessage(id, newText, selectedModel)}
              onRegenerateMessage={() => regenerateMessage(selectedModel)}
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
