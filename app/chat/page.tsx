"use client";

import React, { useState, useEffect } from "react";
import { Shell } from "@/components/layout/Shell";
import { MessageList } from "@/components/chat/MessageList";
import { EmptyState } from "@/components/chat/EmptyState";
import { Composer } from "@/components/composer/Composer";
import { useConversations } from "@/hooks/use-conversations";
import { useChat, SendMessageOptions } from "@/hooks/use-chat";
import { useProfile } from "@/hooks/use-profile";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { ModelOption, Message } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Ghost, ShieldAlert } from "lucide-react";

export default function ChatPage() {
  const router = useRouter();
  const profileState = useProfile();
  const [selectedModel, setSelectedModel] = useState<ModelOption>("ti-optima");
  const [isMounted, setIsMounted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [anonymousMessages, setAnonymousMessages] = useState<Message[]>([]);

  const conversationsState = useConversations({
    onNavigate: (id) => {
      // Jika bernavigasi ke percakapan lain, otomatis keluar dari mode anonim
      if (isAnonymous) {
        setIsAnonymous(false);
        setAnonymousMessages([]);
      }
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
    initialMessages: isAnonymous ? anonymousMessages : (activeConversation?.messages || []),
    conversationId: isAnonymous ? null : activeId,
    isAnonymous,
    onMessagesChange: (msgs) => {
      if (isAnonymous) {
        setAnonymousMessages(msgs);
      } else if (activeId) {
        updateMessages(activeId, msgs);
      }
    },
  });

  const handleToggleAnonymous = () => {
    if (!isAnonymous) {
      // Masuk mode anonim: mulai percakapan bersih di memori
      setIsAnonymous(true);
      setAnonymousMessages([]);
    } else {
      // Keluar mode anonim: bersihkan memori anonim
      setIsAnonymous(false);
      setAnonymousMessages([]);
    }
  };

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

  const handleSendMessage = (
    text: string,
    options?: SendMessageOptions
  ) => {
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
      isAnonymous={isAnonymous}
      onToggleAnonymous={handleToggleAnonymous}
      hasMessages={messages.length > 0}
    >
      <div className="flex-1 flex flex-col h-full min-h-0 overflow-hidden relative">
        {/* Anonymous Mode Active Banner */}
        {isAnonymous && (
          <div className="bg-stone-900 border-b border-stone-800 px-3 sm:px-4 py-2 flex items-center justify-between text-xs text-stone-300 select-none animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="flex items-center gap-2 max-w-[85%]">
              <Ghost className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="truncate text-[11px] sm:text-xs">
                <strong className="text-purple-300 font-semibold">Mode Anonim Aktif:</strong> Obrolan tidak dicatat ke riwayat/database dan akan terhapus otomatis saat Anda berpindah atau menutup halaman.
              </span>
            </div>
            <button
              type="button"
              onClick={handleToggleAnonymous}
              className="text-[11px] font-medium text-stone-400 hover:text-stone-100 hover:underline shrink-0 ml-2"
            >
              Keluar
            </button>
          </div>
        )}

        {/* Scrollable View (Empty State / Message List) */}
        {messages.length === 0 ? (
          <div
            id="empty-state-scroll"
            className="flex-1 overflow-hidden px-4 pb-24 sm:pb-28 pt-2 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-chat flex flex-col justify-center my-auto py-1">
              <EmptyState onSelectPrompt={handleSelectPrompt} userName={profileState.profile?.name} />
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
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none bg-gradient-to-t from-canvas via-canvas/90 to-transparent pt-6 pb-2 sm:pb-3 px-3 sm:px-4">
          <div className="pointer-events-auto w-full max-w-chat mx-auto">
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
