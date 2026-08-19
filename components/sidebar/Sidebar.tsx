"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewChatButton } from "./NewChatButton";
import { ConversationSearch } from "./ConversationSearch";
import { ConversationList } from "./ConversationList";
import { ProfileModal } from "@/components/profile/ProfileModal";
import { useConversations } from "@/hooks/use-conversations";
import { UserProfile } from "@/lib/types";
import { PanelLeftClose, PanelLeftOpen, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  conversationsState: ReturnType<typeof useConversations>;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  profileState: {
    profile: UserProfile;
    updateProfile: (data: Partial<UserProfile>) => void;
    login: (name: string, email: string) => void;
    logout: () => void;
  };
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({
  conversationsState,
  isMobileOpen,
  onCloseMobile,
  profileState,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { profile, updateProfile, login, logout } = profileState;

  const {
    conversations,
    activeId,
    searchQuery,
    setSearchQuery,
    selectConversation,
    startNewConversation,
    renameConversation,
    togglePinConversation,
    deleteConversation,
  } = conversationsState;

  const handleSelectConv = (id: string) => {
    selectConversation(id);
    onCloseMobile();
  };

  const handleNewChat = () => {
    startNewConversation();
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Drawer Backdrop + Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onCloseMobile}
              aria-hidden="true"
            />

            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] max-w-[85vw] h-full bg-surface border-r border-border/80 flex flex-col z-10 shadow-floating"
            >
              {/* Mobile Sidebar Header */}
              <div className="p-3.5 border-b border-border/60 flex items-center gap-2">
                <div className="flex-1">
                  <NewChatButton onClick={handleNewChat} />
                </div>
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-canvas-subtle transition-colors"
                  aria-label="Tutup sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="px-3.5 py-2.5">
                <ConversationSearch value={searchQuery} onChange={setSearchQuery} />
              </div>

              {/* Mobile History List */}
              <div className="flex-1 overflow-y-auto px-2 pb-4">
                <ConversationList
                  conversations={conversations}
                  activeId={activeId}
                  onSelectConversation={handleSelectConv}
                  onRenameConversation={renameConversation}
                  onTogglePinConversation={togglePinConversation}
                  onDeleteConversation={deleteConversation}
                />
              </div>

              {/* Mobile Footer: Profile & Theme Switcher */}
              <div className="p-3 border-t border-border/60 bg-canvas/40 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex-1 flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-surface transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 shadow-sm shadow-accent/20">
                    {profile.isLoggedIn ? profile.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-text-primary truncate">
                      {profile.isLoggedIn ? profile.name : "Masuk Akun"}
                    </p>
                    <p className="text-[11px] text-text-secondary truncate">
                      {profile.isLoggedIn ? `${profile.plan} Plan` : "Tamu"}
                    </p>
                  </div>
                  </button>
                  </div>
                  </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Collapsible with smooth animation) */}
      <motion.aside
        animate={{ width: isCollapsed ? 68 : 260 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex flex-col h-full bg-canvas-subtle border-r border-border select-none shrink-0 relative transition-colors duration-200"
      >
        {/* Top Action Bar */}
        <div className={cn("p-3 flex items-center gap-2", isCollapsed ? "flex-col justify-center gap-2.5 px-2" : "")}>
          {/* When collapsed: show expand / maximize button prominently at the top */}
          {isCollapsed ? (
            <>
              <button
                type="button"
                onClick={onToggleCollapse}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-accent hover:text-white bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent shadow-sm transition-all duration-150 active:scale-95 shrink-0 group"
                aria-label="Perbesar / Maximize sidebar"
                title="Perbesar / Maximize sidebar"
              >
                <PanelLeftOpen className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
              <div className="w-full">
                <NewChatButton onClick={handleNewChat} isCollapsed={isCollapsed} />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 min-w-0">
                <NewChatButton onClick={handleNewChat} isCollapsed={isCollapsed} />
              </div>
              <button
                type="button"
                onClick={onToggleCollapse}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-surface transition-all active:scale-95 shrink-0"
                aria-label="Lipat sidebar (Minimize)"
                title="Lipat sidebar (Minimize)"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Search Bar (Only shown when expanded) */}
        {!isCollapsed && (
          <div className="px-3 pb-2">
            <ConversationSearch value={searchQuery} onChange={setSearchQuery} />
          </div>
        )}

        {/* Conversation List */}
        <div className={cn("flex-1 overflow-y-auto", isCollapsed ? "px-1.5" : "px-2.5")}>
          {!isCollapsed ? (
            <ConversationList
              conversations={conversations}
              activeId={activeId}
              onSelectConversation={handleSelectConv}
              onRenameConversation={renameConversation}
              onTogglePinConversation={togglePinConversation}
              onDeleteConversation={deleteConversation}
            />
          ) : (
            <div className="py-2 flex flex-col items-center gap-1.5">
              {conversations.slice(0, 8).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleSelectConv(c.id)}
                  title={c.title}
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold transition-all duration-150",
                    c.id === activeId
                      ? "bg-surface text-accent shadow-sm border border-border"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
                  )}
                >
                  {c.title.charAt(0).toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Sidebar Bottom Footer: Profile + Theme Switcher */}
        {/* Bottom Profile Section */}
        <div className="p-3 border-t border-border/80 bg-surface/50">
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(true)}
                title={profile.isLoggedIn ? `${profile.name} (${profile.plan})` : "Masuk Akun"}
                className="flex-1 min-w-0 flex items-center gap-2 p-1.5 rounded-xl hover:bg-surface transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-xl bg-accent text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 shadow-sm shadow-accent/20">
                  {profile.isLoggedIn ? profile.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-text-primary truncate">
                    {profile.isLoggedIn ? profile.name : "Masuk Akun"}
                  </p>
                  <p className="text-[11px] text-text-secondary truncate">
                    {profile.isLoggedIn ? `${profile.plan} Plan` : "Tamu"}
                  </p>
                </div>
              </button>
            </div>
          ) : (
            /* Collapsed State: Stacked Profile */
            <div className="flex flex-col items-center gap-2 py-1">
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(true)}
                title={profile.isLoggedIn ? `${profile.name} (${profile.plan})` : "Masuk Akun"}
                className="w-9 h-9 rounded-xl bg-accent text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 shadow-sm shadow-accent/20 hover:scale-105 transition-transform"
              >
                {profile.isLoggedIn ? profile.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </motion.aside>

      {/* Profile / Auth Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onUpdateProfile={updateProfile}
        onLogout={logout}
        onLogin={login}
      />
    </>
  );
}
