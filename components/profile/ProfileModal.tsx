"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@/components/ui/Dialog";
import { UserProfile } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { User, Mail, ShieldCheck, Sparkles, LogOut, Layers, Check, Edit2 } from "lucide-react";

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
      <AnimatePresence mode="wait">
        {isAuthMode ? (
          <motion.form
            key="auth-form"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            onSubmit={handleLoginSubmit}
            className="space-y-3.5 pt-1"
          >
            <div>
              <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
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
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-xs sm:text-sm text-text-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                Alamat Email Kampus / Institusi
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-xs sm:text-sm text-text-primary outline-none transition-colors"
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
          </motion.form>
        ) : isEditing ? (
          <motion.form
            key="edit-form"
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            onSubmit={handleSaveEdit}
            className="space-y-3.5 pt-1"
          >
            <div>
              <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-xs sm:text-sm text-text-primary outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-canvas border border-border focus:border-accent text-xs sm:text-sm text-text-primary outline-none transition-colors"
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
          </motion.form>
        ) : (
          <motion.div
            key="view-profile"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="space-y-3.5 pt-1"
          >
            {/* User Identity Banner */}
            <div className="p-3.5 rounded-xl bg-surface-subtle border border-border/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent font-bold flex items-center justify-center text-sm shadow-2xs">
                  {profile.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-text-primary">
                    {profile.name}
                  </h4>
                  <p className="text-[11px] text-text-secondary">
                    {profile.email || "Praktisi / Peneliti Teknik Industri"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setName(profile.name);
                  setEmail(profile.email);
                  setIsEditing(true);
                }}
                className="p-1.5 rounded-lg border border-border/70 hover:bg-surface text-text-secondary hover:text-text-primary transition-colors text-xs flex items-center gap-1"
                title="Edit Profil"
              >
                <Edit2 size={13} />
                <span className="hidden sm:inline">Edit</span>
              </button>
            </div>

            {/* Spec & Plan Info */}
            <div className="p-2.5 rounded-xl bg-surface border border-border/60 text-xs flex items-center justify-between">
              <span className="text-[10px] text-text-secondary uppercase font-semibold">
                Akses Model
              </span>
              <p className="font-semibold text-accent flex items-center gap-1">
                <Sparkles size={13} />
                <span>RuangTI Neural Pro</span>
              </p>
            </div>

            {/* Logout Action */}
            <div className="pt-2 flex items-center justify-between border-t border-border/40">
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="text-xs text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1.5 transition-colors p-1.5 rounded-lg hover:bg-rose-500/10"
              >
                <LogOut size={14} />
                <span>Keluar Akun</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
