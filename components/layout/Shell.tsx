"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "../sidebar/Sidebar";
import { useConversations } from "@/hooks/use-conversations";
import { UserProfile } from "@/lib/types";

interface ShellProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  conversationsState: ReturnType<typeof useConversations>;
  profileState: {
    profile: UserProfile;
    updateProfile: (data: Partial<UserProfile>) => void;
    login: (name: string, email: string) => void;
    logout: () => void;
  };
}

export function Shell({
  children,
  theme,
  onToggleTheme,
  conversationsState,
  profileState,
}: ShellProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  const toggleDesktopSidebar = () => {
    setIsDesktopCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-canvas text-text-primary">
      {/* Responsive Collapsible Sidebar with integrated Theme Switcher */}
      <Sidebar
        conversationsState={conversationsState}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        profileState={profileState}
        isCollapsed={isDesktopCollapsed}
        onToggleCollapse={toggleDesktopSidebar}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      {/* Main App Canvas */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        <Header
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
          isSidebarCollapsed={isDesktopCollapsed}
          onToggleSidebarCollapse={toggleDesktopSidebar}
          profile={profileState.profile}
          onUpdateProfile={profileState.updateProfile}
          onLogout={profileState.logout}
          onLogin={profileState.login}
        />

        {/* Content View */}
        <main className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
