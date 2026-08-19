"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { registerToBackend, loginToBackend } from "@/lib/api-client";
import { UserProfile } from "@/lib/types";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (profile: Partial<UserProfile> & { name: string; email: string }) => void;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "signup">("login");

  // Login Form States
  const [loginEmail, setLoginEmail] = useState("rafi.permana@untirta.ac.id");
  const [loginPassword, setLoginPassword] = useState("PasswordUntirta2026!");

  // Signup Form States
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [role, setRole] = useState("Mahasiswa");
  const [institution, setInstitution] = useState("FT Untirta");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Status & Validation States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Reset errors when switching tabs
  const handleTabSwitch = (newTab: "login" | "signup") => {
    setTab(newTab);
    setErrorMessage(null);
  };

  // Submit Handler for Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await loginToBackend({
        email: loginEmail,
        password: loginPassword,
      });

      onLoginSuccess({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        phone: res.user.phone,
        address: res.user.address,
        postalCode: res.user.postal_code,
        role: res.user.role,
        institution: res.user.institution,
        plan: res.user.plan || "Pro",
        token: res.access_token,
      });

      setIsLoading(false);
      onClose();
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || "Gagal masuk. Periksa email dan kata sandi Anda.");
    }
  };

  // Submit Handler for Signup (Wajib @untirta.ac.id atau @student.untirta.ac.id)
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const emailTrimmed = signupEmail.trim().toLowerCase();
    const isUntirta =
      emailTrimmed.endsWith("@untirta.ac.id") ||
      emailTrimmed.endsWith("@student.untirta.ac.id");

    if (!isUntirta) {
      setIsLoading(false);
      setErrorMessage(
        "Pendaftaran hanya diizinkan untuk email @untirta.ac.id atau @student.untirta.ac.id"
      );
      return;
    }

    if (signupPassword !== confirmPassword) {
      setIsLoading(false);
      setErrorMessage("Konfirmasi kata sandi tidak cocok.");
      return;
    }

    if (signupPassword.length < 8) {
      setIsLoading(false);
      setErrorMessage("Kata sandi minimal harus 8 karakter.");
      return;
    }

    try {
      const res = await registerToBackend({
        name,
        email: emailTrimmed,
        password: signupPassword,
        confirm_password: confirmPassword,
        phone,
        address,
        postal_code: postalCode,
        role,
        institution,
      });

      onLoginSuccess({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        phone: res.user.phone,
        address: res.user.address,
        postalCode: res.user.postal_code,
        role: res.user.role,
        institution: res.user.institution,
        plan: res.user.plan || "Pro",
        token: res.access_token,
      });

      setIsLoading(false);
      onClose();
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || "Gagal melakukan pendaftaran. Coba lagi nanti.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/45 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card / Responsive Bottom-Sheet on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-lg rounded-t-3xl sm:rounded-2xl bg-surface border border-border/80 shadow-2xl z-10 flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden"
          >
            {/* Header / Brand & Close Button with 44px Touch Target */}
            <div className="p-4 sm:p-5 border-b border-border/60 flex items-center justify-between shrink-0 bg-surface">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-slate-950 font-bold text-xs shadow-sm shadow-accent/20">
                  TI
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-text-primary leading-tight">
                    Ruang<span className="text-accent">TI</span> Auth
                  </h3>
                  <p className="text-[11px] text-text-secondary">
                    Portal Khusus Sivitas Akademika Untirta
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Tutup dialog"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors active:scale-95"
              >
                <X size={18} />
              </button>
            </div>

            {/* Tab Selector Segmented Control */}
            <div className="p-3 sm:p-4 pb-0 shrink-0 bg-surface">
              <div className="grid grid-cols-2 p-1 rounded-xl bg-canvas-subtle border border-border/60 text-xs font-semibold select-none">
                <button
                  type="button"
                  onClick={() => handleTabSwitch("login")}
                  className={`py-2 px-2.5 rounded-lg transition-all text-center flex items-center justify-center gap-1.5 ${
                    tab === "login"
                      ? "bg-surface text-text-primary shadow-sm border border-border/80 font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <User size={13} />
                  <span>Masuk Akun</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabSwitch("signup")}
                  className={`py-2 px-2.5 rounded-lg transition-all text-center flex items-center justify-center gap-1.5 ${
                    tab === "signup"
                      ? "bg-surface text-accent shadow-sm border border-accent/40 font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <Sparkles size={13} />
                  <span className="hidden sm:inline">Daftar Baru (Untirta)</span>
                  <span className="sm:hidden">Daftar Baru</span>
                </button>
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-4 sm:p-5 overflow-y-auto flex-1 custom-scrollbar">
              {tab === "login" ? (
                /* LOGIN FORM */
                <form onSubmit={handleLogin} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Email Untirta
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="contoh: rafi.permana@untirta.ac.id"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                      <input
                        type="password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Masukkan kata sandi..."
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs flex items-center gap-2"
                    >
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-2 py-3 rounded-xl bg-accent text-slate-950 font-bold text-xs hover:brightness-110 shadow-md shadow-accent/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="animate-pulse">Memproses...</span>
                    ) : (
                      <>
                        <span>Masuk ke Workspace RuangTI</span>
                        <CheckCircle2 size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-text-secondary mt-2">
                    Belum memiliki akun?{" "}
                    <button
                      type="button"
                      onClick={() => handleTabSwitch("signup")}
                      className="text-accent font-semibold hover:underline"
                    >
                      Daftar sekarang
                    </button>
                  </p>
                </form>
              ) : (
                /* SIGNUP FORM */
                <form onSubmit={handleSignup} className="flex flex-col gap-3">
                  {/* Banner untirta requirement */}
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-[11px] flex items-center gap-2">
                    <Sparkles size={13} className="shrink-0" />
                    <span>Hanya email @untirta.ac.id atau @student.untirta.ac.id yang valid.</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rafi Permana"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Email Institusi Untirta *
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                      <input
                        type="email"
                        required
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="3333200001@student.untirta.ac.id"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  {/* Grid WhatsApp & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Nomor WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="08123456789"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Peran Akademik
                      </label>
                      <div className="relative">
                        <GraduationCap size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent appearance-none cursor-pointer"
                        >
                          <option value="Mahasiswa">Mahasiswa</option>
                          <option value="Dosen">Dosen / Peneliti</option>
                          <option value="Alumni">Alumni / Praktisi</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Grid Address & Postal Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="sm:col-span-2 flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Alamat Domisili / Kampus *
                      </label>
                      <div className="relative">
                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Jl. Jenderal Sudirman Km 3, Cilegon"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Kode Pos *
                      </label>
                      <div className="relative">
                        <Building size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="text"
                          required
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          placeholder="42435"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Passwords */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Kata Sandi *
                      </label>
                      <div className="relative">
                        <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="password"
                          required
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          placeholder="Min. 8 karakter"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Ulangi Kata Sandi *
                      </label>
                      <div className="relative">
                        <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Ulangi sandi"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>
                  </div>

                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs flex items-center gap-2 mt-1"
                    >
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-2 py-3 rounded-xl bg-accent text-slate-950 font-bold text-xs hover:brightness-110 shadow-md shadow-accent/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="animate-pulse">Mendaftarkan...</span>
                    ) : (
                      <>
                        <span>Daftar Akun Mahasiswa Untirta</span>
                        <CheckCircle2 size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-text-secondary mt-1 pb-2">
                    Sudah memiliki akun?{" "}
                    <button
                      type="button"
                      onClick={() => handleTabSwitch("login")}
                      className="text-accent font-semibold hover:underline"
                    >
                      Masuk sekarang
                    </button>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
