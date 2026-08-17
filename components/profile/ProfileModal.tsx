"use client";

import React, { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { UserProfile } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { User, Mail, ShieldCheck, Sparkles, LogOut, Layers } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateProfile: (data: Partial<UserProfile>) => void;
  onLogout: () => void;
  onLogin: (name: string, email: string) => void;
}

export function ProfileModal({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onLogout,
  onLogin,
}: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [isAuthMode, setIsAuthMode] = useState(!profile.isLoggedIn);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginName, setLoginName] = useState("");

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onUpdateProfile({ name: name.trim(), email: email.trim() });
    setIsEditing(false);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginName.trim()) return;
    onLogin(loginName.trim(), loginEmail.trim() || "user@ruangti.ac.id");
    setIsAuthMode(false);
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        setIsEditing(false);
        onClose();
      }}
      title={isAuthMode ? "Masuk ke Akun RuangTI" : "Profil Praktisi / Mahasiswa TI"}
      description={
        isAuthMode
          ? "Sinkronkan riwayat riset operasi, catatan simulasi, dan preferensi modul Anda."
          : "Kelola identitas akun, instansi, paket akses model, dan data penelitian Anda."
      }
    >
      {isAuthMode ? (
        <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                placeholder="misal: Rafi Permana"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-sm text-text-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
              Alamat Email Kampus / Institusi
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="nama@untirta.ac.id"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-sm text-text-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                if (profile.isLoggedIn) setIsAuthMode(false);
                else onClose();
              }}
            >
              Batal
            </Button>
            <Button type="submit" variant="primary">
              Masuk / Buat Akun
            </Button>
          </div>
        </form>
      ) : isEditing ? (
        <form onSubmit={handleSaveEdit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-sm text-text-primary outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
              Alamat Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-sm text-text-primary outline-none transition-colors"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsEditing(false)}
            >
              Batal
            </Button>
            <Button type="submit" variant="primary">
              Simpan Perubahan
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-4 pt-1">
          {/* User Profile Card */}
          <div className="p-4 rounded-2xl bg-canvas border border-border flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 text-accent font-display font-bold text-lg flex items-center justify-center shrink-0">
              {profile.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm text-text-primary truncate">
                  {profile.name}
                </h4>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-accent text-white uppercase tracking-wider shrink-0">
                  {profile.plan}
                </span>
              </div>
              <p className="text-xs text-text-secondary truncate mt-0.5">
                {profile.email}
              </p>
            </div>
          </div>

          {/* Plan & Usage Details */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-canvas/60 border border-border/80 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-text-secondary">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Modul TI Aktif</span>
              </div>
              <span className="font-semibold text-text-primary">Akses Penuh (OR + Lean)</span>
            </div>

            <div className="p-3 rounded-xl bg-canvas/60 border border-border/80 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-text-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Status Akun</span>
              </div>
              <span className="font-semibold text-text-primary">Terverifikasi</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between border-t border-border/60">
            <button
              type="button"
              onClick={() => {
                setName(profile.name);
                setEmail(profile.email);
                setIsEditing(true);
              }}
              className="text-xs font-medium text-accent hover:underline"
            >
              Ubah Profil
            </button>

            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
}
