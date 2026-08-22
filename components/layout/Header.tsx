"use client";

import React, { useState } from "react";
import { Conversation } from "@/lib/types";
import { ShareModal } from "@/components/chat/ShareModal";
import { Menu, PanelLeftOpen, Share2, MessageSquare, Pin, Ghost } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebarCollapse?: () => void;
  activeConversation?: Conversation | null;
  onShareStatusChanged?: (isPublic: boolean, shareId?: string) => void;
  isAnonymous?: boolean;
  onToggleAnonymous?: () => void;
  hasMessages?: boolean;
}

export function Header({
  onToggleMobileSidebar,
  isSidebarCollapsed = false,
  onToggleSidebarCollapse,
  activeConversation,
  onShareStatusChanged,
  isAnonymous = false,
  onToggleAnonymous,
  hasMessages = false,
}: HeaderProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <header className={cn(
        "h-14 w-full flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30 select-none transition-colors duration-200 border-b",
        isAnonymous 
          ? "bg-stone-900/90 text-stone-100 border-stone-800 backdrop-blur-md" 
          : "glass-header border-border/40 text-text-primary"
      )}>
        {/* Left: Mobile Drawer Trigger + Desktop Maximize Sidebar Toggle + Conversation Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[60%] sm:max-w-[70%]">
          {/* Mobile Drawer Button */}
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className={cn(
              "md:hidden w-9 h-9 rounded-xl flex items-center justify-center active:scale-95 transition-all shrink-0",
              isAnonymous 
                ? "text-stone-300 hover:text-white hover:bg-stone-800" 
                : "text-text-secondary hover:text-text-primary hover:bg-surface"
            )}
            aria-label="Buka navigasi sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Desktop Maximize Sidebar Button (Always visible when sidebar is collapsed) */}
          {isSidebarCollapsed && onToggleSidebarCollapse && (
            <button
              type="button"
              onClick={onToggleSidebarCollapse}
              className={cn(
                "hidden md:flex w-9 h-9 rounded-xl items-center justify-center active:scale-95 transition-all duration-150 shadow-sm shrink-0 border",
                isAnonymous
                  ? "bg-stone-800/80 hover:bg-stone-800 text-stone-300 border-stone-700 hover:text-white"
                  : "bg-surface/80 hover:bg-surface text-text-secondary hover:text-accent border-border/80 hover:border-accent/40"
              )}
              aria-label="Buka sidebar penuh (Maximize)"
              title="Buka sidebar penuh (Maximize)"
            >
              <PanelLeftOpen className="w-4 h-4 text-accent" />
            </button>
          )}

          {/* Dynamic Active Conversation Title */}
          <div className="flex items-center gap-2 min-w-0">
            <div className={cn(
              "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border",
              isAnonymous
                ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                : "bg-accent/10 border-accent/20 text-accent"
            )}>
              {isAnonymous ? <Ghost className="w-3.5 h-3.5" /> : <MessageSquare className="w-3.5 h-3.5" />}
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <h1
                className={cn(
                  "font-medium text-xs sm:text-sm truncate tracking-tight",
                  isAnonymous ? "text-stone-100" : "text-text-primary"
                )}
                title={isAnonymous ? "Obrolan Anonim (Sementara)" : (activeConversation?.title || "Percakapan Baru")}
              >
                {isAnonymous ? "Obrolan Anonim (Sementara)" : (activeConversation?.title || "Percakapan Baru")}
              </h1>
              {!isAnonymous && activeConversation?.isPinned && (
                <Pin className="w-3 h-3 text-accent shrink-0 fill-accent/20" />
              )}
            </div>
          </div>
        </div>

        {/* Right: Anonymous Mode Toggle + Share Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Incognito / Anonymous Mode Toggle:
              1. Hanya tampil jika belum mulai percakapan biasa (hasMessages == false)
              2. JIKA sudah dalam mode anonim (isAnonymous == true), tombol tetap tampil agar user bisa keluar */}
          {onToggleAnonymous && (!hasMessages || isAnonymous) && (
            <button
              type="button"
              onClick={onToggleAnonymous}
              className={cn(
                "h-9 px-2.5 sm:px-3 rounded-xl flex items-center gap-1.5 text-xs font-semibold border transition-all duration-150 active:scale-95 shadow-xs cursor-pointer",
                isAnonymous
                  ? "bg-purple-600/25 text-purple-300 border-purple-500/50 hover:bg-purple-600/35"
                  : "bg-surface hover:bg-surface-hover text-text-secondary hover:text-text-primary border-border"
              )}
              title={isAnonymous ? "Keluar dari Mode Anonim" : "Aktifkan Mode Anonim (Chat tidak disimpan)"}
            >
              <Ghost className={cn("w-3.5 h-3.5 shrink-0", isAnonymous ? "text-purple-400 animate-pulse" : "text-text-secondary")} />
              <span className="hidden xs:inline sm:inline">
                {isAnonymous ? "Anonim Aktif" : "Mode Anonim"}
              </span>
            </button>
          )}

          {/* Share Button (Hanya tampil jika bukan mode anonim, ada activeConversation, dan sudah ada pesan) */}
          {!isAnonymous && activeConversation && hasMessages && (
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              className={cn(
                "h-9 px-3 rounded-xl flex items-center gap-1.5 text-xs font-medium border transition-all duration-150 active:scale-95 shadow-sm cursor-pointer",
                activeConversation.isPublic
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/15"
                  : "bg-surface hover:bg-surface-hover text-text-secondary hover:text-text-primary border-border"
              )}
              aria-label="Bagikan obrolan ini"
              title="Bagikan obrolan ini"
            >
              <Share2 className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">
                {activeConversation.isPublic ? "Dibagikan" : "Bagikan"}
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Share Conversation Modal (Claude style) */}
      {activeConversation && (
        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          conversationId={activeConversation.id}
          conversationTitle={activeConversation.title}
          isInitiallyPublic={activeConversation.isPublic || false}
          initialShareId={activeConversation.shareId}
          onShareStatusChanged={onShareStatusChanged}
        />
      )}
    </>
  );
}
