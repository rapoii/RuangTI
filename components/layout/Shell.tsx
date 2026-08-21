"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "../sidebar/Sidebar";
import { useConversations } from "@/hooks/use-conversations";
import { UserProfile } from "@/lib/types";

interface ShellProps {
  children: React.ReactNode;
  conversationsState: ReturnType<typeof useConversations>;
  profileState: {
    profile: UserProfile;
    updateProfile: (data: Partial<UserProfile>) => void;
    login: (name: string, email: string) => void;
    logout: () => void;
  };
  isAnonymous?: boolean;
  onToggleAnonymous?: () => void;
  hasMessages?: boolean;
}

export function Shell({
  children,
  conversationsState,
  profileState,
  isAnonymous = false,
  onToggleAnonymous,
  hasMessages = false,
}: ShellProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  const toggleDesktopSidebar = () => {
    setIsDesktopCollapsed((prev) => !prev);
  };

  const handleShareStatusChanged = (isPublic: boolean, shareId?: string) => {
    if (conversationsState.activeId) {
      conversationsState.updateShareStatus(conversationsState.activeId, isPublic, shareId);
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden bg-canvas text-text-primary fixed inset-0">
      {/* Responsive Collapsible Sidebar with integrated Profile */}
      <Sidebar
        conversationsState={conversationsState}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        profileState={profileState}
        isCollapsed={isDesktopCollapsed}
        onToggleCollapse={toggleDesktopSidebar}
      />

      {/* Main App Canvas */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        <Header
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
          isSidebarCollapsed={isDesktopCollapsed}
          onToggleSidebarCollapse={toggleDesktopSidebar}
          activeConversation={conversationsState.activeConversation}
          onShareStatusChanged={handleShareStatusChanged}
          isAnonymous={isAnonymous}
          onToggleAnonymous={onToggleAnonymous}
          hasMessages={hasMessages}
        />

        {/* Content View */}
        <main className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
