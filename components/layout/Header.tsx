"use client";

import React, { useState } from "react";
import { UserProfile, Conversation } from "@/lib/types";
import { ProfileModal } from "@/components/profile/ProfileModal";
import { ShareModal } from "@/components/chat/ShareModal";
import { Menu, Layers, User, PanelLeftOpen, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebarCollapse?: () => void;
  profile: UserProfile;
  activeConversation?: Conversation | null;
  onUpdateProfile: (data: Partial<UserProfile>) => void;
  onLogout: () => void;
  onLogin: (name: string, email: string) => void;
  onShareStatusChanged?: (isPublic: boolean, shareId?: string) => void;
}

export function Header({
  onToggleMobileSidebar,
  isSidebarCollapsed = false,
  onToggleSidebarCollapse,
  profile,
  activeConversation,
  onUpdateProfile,
  onLogout,
  onLogin,
  onShareStatusChanged,
}: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <header className="h-14 w-full flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30 glass-header select-none transition-colors duration-200">
        {/* Left: Mobile Drawer Trigger + Desktop Maximize Sidebar Toggle + Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Drawer Button */}
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface active:scale-95 transition-all"
            aria-label="Buka navigasi sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Desktop Maximize Sidebar Button (Always visible when sidebar is collapsed) */}
          {isSidebarCollapsed && onToggleSidebarCollapse && (
            <button
              type="button"
              onClick={onToggleSidebarCollapse}
              className="hidden md:flex w-9 h-9 rounded-xl items-center justify-center text-text-secondary hover:text-accent bg-surface/80 hover:bg-surface border border-border/80 hover:border-accent/40 active:scale-95 transition-all duration-150 shadow-sm"
              aria-label="Buka sidebar penuh (Maximize)"
              title="Buka sidebar penuh (Maximize)"
            >
              <PanelLeftOpen className="w-4 h-4 text-accent" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-display font-bold text-xs">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-text-primary">
              RuangTI
            </span>
          </div>
        </div>

        {/* Right: Share Button & User Profile Button */}
        <div className="flex items-center gap-2">
          {/* Claude-style Share Button */}
          {activeConversation && (
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              className={cn(
                "h-9 px-3 rounded-xl flex items-center gap-1.5 text-xs font-medium border transition-all duration-150 active:scale-95 shadow-sm",
                activeConversation.isPublic
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/15"
                  : "bg-surface hover:bg-surface-hover text-text-secondary hover:text-text-primary border-border"
              )}
              aria-label="Bagikan obrolan ini"
              title="Bagikan obrolan ini"
            >
              <Share2 className="w-3.5 h-3.5 shrink-0" />
              <span>{activeConversation.isPublic ? "Dibagikan" : "Bagikan"}</span>
            </button>
          )}

          {/* User Profile Trigger Button */}
          <button
            type="button"
            onClick={() => setIsProfileOpen(true)}
            aria-label={profile.isLoggedIn ? `Buka profil ${profile.name}` : "Masuk akun"}
            className={cn(
              "h-9 px-2.5 sm:px-3 rounded-xl flex items-center gap-2 border transition-all duration-150 active:scale-95 shadow-sm",
              profile.isLoggedIn
                ? "bg-surface hover:bg-surface-hover border-border text-text-primary"
                : "bg-accent text-white border-accent-hover hover:bg-accent-hover"
            )}
          >
            <div className={cn(
              "w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold font-display",
              profile.isLoggedIn ? "bg-accent/15 text-accent" : "bg-white/20 text-white"
            )}>
              {profile.isLoggedIn ? profile.name.charAt(0).toUpperCase() : <User className="w-3 h-3" />}
            </div>
            <span className="text-xs font-medium max-w-[160px] truncate hidden sm:inline-block">
              {profile.isLoggedIn ? profile.name : "Masuk"}
            </span>
          </button>
        </div>
      </header>

      {/* Profile / Auth Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
        onUpdateProfile={onUpdateProfile}
        onLogout={onLogout}
        onLogin={onLogin}
      />

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
