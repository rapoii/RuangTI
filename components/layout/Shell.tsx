"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "../sidebar/Sidebar";
import { useConversations } from "@/hooks/use-conversations";
import { ModelOption, UserProfile } from "@/lib/types";

interface ShellProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  conversationsState: ReturnType<typeof useConversations>;
  selectedModel: ModelOption;
  onSelectModel: (model: ModelOption) => void;
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
  selectedModel,
  onSelectModel,
  profileState,
}: ShellProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-canvas text-text-primary">
      {/* Responsive Collapsible Sidebar */}
      <Sidebar
        conversationsState={conversationsState}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        profileState={profileState}
      />

      {/* Main App Canvas */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        <Header
          currentModel={selectedModel}
          onSelectModel={onSelectModel}
          theme={theme}
          onToggleTheme={onToggleTheme}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
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
