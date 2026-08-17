"use client";

import React, { useState } from "react";
import { ModelOption, UserProfile } from "@/lib/types";
import { Dropdown } from "@/components/ui/DropdownMenu";
import { ProfileModal } from "@/components/profile/ProfileModal";
import { ChevronDown, Moon, Sun, Menu, Cpu, Factory, Activity, Layers, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentModel: ModelOption;
  onSelectModel: (model: ModelOption) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onToggleMobileSidebar: () => void;
  profile: UserProfile;
  onUpdateProfile: (data: Partial<UserProfile>) => void;
  onLogout: () => void;
  onLogin: (name: string, email: string) => void;
}

const AVAILABLE_MODELS: {
  id: ModelOption;
  label: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "ti-optima",
    label: "TI-Optima Pro",
    description: "Model spesialis Riset Operasi, Formulasi Linier & Optimasi SCM",
    icon: <Cpu className="w-4 h-4 text-accent" />,
  },
  {
    id: "ti-lean",
    label: "TI-Lean Six Sigma",
    description: "Analisis Kualitas SPC, Kaizen, 5S, DMAIC & Eliminasi Waste",
    icon: <Factory className="w-4 h-4 text-emerald-500" />,
  },
  {
    id: "ti-sim",
    label: "TI-Simulasi & Ergonomi",
    description: "Perhitungan Waktu Baku, Antropometri, RULA/REBA & Simulasi Pabrik",
    icon: <Activity className="w-4 h-4 text-blue-500" />,
  },
];

export function Header({
  currentModel,
  onSelectModel,
  theme,
  onToggleTheme,
  onToggleMobileSidebar,
  profile,
  onUpdateProfile,
  onLogout,
  onLogin,
}: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const activeModelObj =
    AVAILABLE_MODELS.find((m) => m.id === currentModel) || AVAILABLE_MODELS[0];

  const modelDropdownItems = AVAILABLE_MODELS.map((m) => ({
    id: m.id,
    label: m.label,
    description: m.description,
    icon: m.icon,
    active: m.id === currentModel,
  }));

  return (
    <>
      <header className="h-14 w-full flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30 glass-header select-none transition-colors duration-200">
        {/* Left: Mobile Drawer Trigger + Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface active:scale-95 transition-all"
            aria-label="Buka navigasi sidebar"
          >
            <Menu className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-display font-bold text-xs">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-text-primary hidden xs:inline-block">
              RuangTI
            </span>
          </div>

          {/* Model Selector Dropdown with micro-interaction */}
          <Dropdown
            trigger={
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface/80 hover:bg-surface border border-border text-xs sm:text-sm font-medium text-text-primary shadow-sm hover:border-border-strong transition-all duration-150 active:scale-[0.98]"
                aria-label="Pilih model kecerdasan buatan"
              >
                <span className="truncate max-w-[120px] sm:max-w-none">{activeModelObj.label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-text-secondary opacity-70" />
              </button>
            }
            items={modelDropdownItems}
            onSelect={(id) => onSelectModel(id as ModelOption)}
            widthClass="w-72"
          />
        </div>

        {/* Right: Theme Toggle & User Profile Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary bg-surface/60 hover:bg-surface border border-transparent hover:border-border transition-all duration-150 active:scale-95 shadow-sm"
            aria-label={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-text-primary" />
            )}
          </button>

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
            <span className="text-xs font-medium max-w-[100px] truncate hidden sm:inline-block">
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
    </>
  );
}
