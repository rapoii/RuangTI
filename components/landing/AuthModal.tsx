"use client";

import React, { useState, useEffect } from "react";
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
  Loader2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
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

  // Status & Loading States
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState<"google" | "microsoft" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle || "";
      };
    }
  }, [isOpen]);

  // Reset errors when switching tabs
  const handleTabSwitch = (newTab: "login" | "signup") => {
    setTab(newTab);
    setErrorMessage(null);
  };

  // Google OAuth Login Handler (@untirta.ac.id only)
  const handleGoogleLogin = async () => {
    setIsSocialLoading("google");
    setErrorMessage(null);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: window.location.origin + "/chat",
      });
    } catch (err: any) {
      setIsSocialLoading(null);
      setErrorMessage(
        err.message || "Gagal menghubungkan ke Google. Pastikan menggunakan akun @untirta.ac.id."
      );
    }
  };

  // Microsoft OAuth Login Handler (@student.untirta.ac.id only)
  const handleMicrosoftLogin = async () => {
    setIsSocialLoading("microsoft");
    setErrorMessage(null);
    try {
      await authClient.signIn.social({
        provider: "microsoft",
        callbackURL: window.location.origin + "/chat",
      });
    } catch (err: any) {
      setIsSocialLoading(null);
      setErrorMessage(
        err.message || "Gagal menghubungkan ke Microsoft. Pastikan menggunakan akun @student.untirta.ac.id."
      );
    }
  };

  // Submit Handler for Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const emailTrimmed = loginEmail.trim().toLowerCase();

    try {
      // 1. Better Auth Client Sign In
      const betterAuthRes = await authClient.signIn.email({
        email: emailTrimmed,
        password: loginPassword,
      });

      if (betterAuthRes.error) {
        throw new Error(betterAuthRes.error.message || "Email atau kata sandi tidak valid.");
      }

      // 2. Synchronize with FastAPI backend for chat history & RAG access
      let backendUser = null;
      try {
        const res = await loginToBackend({
          email: emailTrimmed,
          password: loginPassword,
        });
        backendUser = res;
      } catch (err) {
        // Fallback jika backend user belum terdaftar
      }

      const userProfile = {
        id: betterAuthRes.data?.user?.id || backendUser?.user?.id || `user_${Date.now()}`,
        name: betterAuthRes.data?.user?.name || backendUser?.user?.name || "Civitas Untirta",
        email: emailTrimmed,
        phone: backendUser?.user?.phone || "",
        address: backendUser?.user?.address || "",
        postalCode: backendUser?.user?.postal_code || "",
        role: (betterAuthRes.data?.user as any)?.role || backendUser?.user?.role || "Mahasiswa",
        institution: (betterAuthRes.data?.user as any)?.institution || backendUser?.user?.institution || "Untirta",
        plan: "Pro",
        token: backendUser?.access_token || "better_auth_session_active",
      };

      onLoginSuccess(userProfile);
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
    const isUntirtaStaff = emailTrimmed.endsWith("@untirta.ac.id");
    const isUntirtaStudent = emailTrimmed.endsWith("@student.untirta.ac.id");

    if (!isUntirtaStaff && !isUntirtaStudent) {
      setIsLoading(false);
      setErrorMessage(
        "Pendaftaran hanya diizinkan untuk civitas akademika UNTIRTA (@untirta.ac.id untuk Dosen/Staff atau @student.untirta.ac.id untuk Mahasiswa)."
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
      setErrorMessage("Kata sandi minimal harus 8 karakter demi keamanan akun Anda.");
      return;
    }

    try {
      // 1. Better Auth Sign Up
      const betterSignUpRes = await authClient.signUp.email({
        email: emailTrimmed,
        password: signupPassword,
        name: name.trim(),
        role: role,
        institution: institution,
        phone: phone.trim(),
        address: address.trim(),
        postalCode: postalCode.trim(),
      } as any);

      if (betterSignUpRes.error) {
        throw new Error(betterSignUpRes.error.message || "Gagal mendaftar di sistem autentikasi.");
      }

      // 2. Synchronize with FastAPI backend
      let backendUser = null;
      try {
        const res = await registerToBackend({
          name: name.trim(),
          email: emailTrimmed,
          password: signupPassword,
          confirm_password: confirmPassword,
          phone: phone.trim(),
          address: address.trim(),
          postal_code: postalCode.trim(),
          role,
          institution,
        });
        backendUser = res;
      } catch (err) {
        // Fallback
      }

      const userProfile = {
        id: betterSignUpRes.data?.user?.id || backendUser?.user?.id || `user_${Date.now()}`,
        name: name.trim(),
        email: emailTrimmed,
        phone: phone.trim(),
        address: address.trim(),
        postalCode: postalCode.trim(),
        role: role,
        institution: institution,
        plan: "Pro",
        token: backendUser?.access_token || "better_auth_session_active",
      };

      onLoginSuccess(userProfile);
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
            {/* Header / Brand & Close Button */}
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
              
              {/* SSO SOCIAL LOGIN SECTION (GOOGLE & MICROSOFT) */}
              <div className="flex flex-col gap-2.5 mb-4">
                {/* Google OAuth Button (@untirta.ac.id) */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isSocialLoading !== null || isLoading}
                  className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-border/90 bg-surface hover:bg-canvas-subtle text-text-primary text-xs font-semibold shadow-sm transition-all hover:border-text-secondary active:scale-[0.99] disabled:opacity-50"
                >
                  {isSocialLoading === "google" ? (
                    <Loader2 size={16} className="animate-spin text-accent" />
                  ) : (
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  )}
                  <span>Masuk dengan Google <strong className="font-semibold text-text-secondary">(@untirta.ac.id)</strong></span>
                </button>

                {/* Microsoft OAuth Button (@student.untirta.ac.id) */}
                <button
                  type="button"
                  onClick={handleMicrosoftLogin}
                  disabled={isSocialLoading !== null || isLoading}
                  className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-border/90 bg-surface hover:bg-canvas-subtle text-text-primary text-xs font-semibold shadow-sm transition-all hover:border-text-secondary active:scale-[0.99] disabled:opacity-50"
                >
                  {isSocialLoading === "microsoft" ? (
                    <Loader2 size={16} className="animate-spin text-accent" />
                  ) : (
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 21 21">
                      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                    </svg>
                  )}
                  <span>Masuk dengan Microsoft 365 <strong className="font-semibold text-text-secondary">(@student.untirta.ac.id)</strong></span>
                </button>
              </div>

              {/* OR DIVIDER */}
              <div className="relative flex py-2 items-center mb-3.5">
                <div className="flex-grow border-t border-border/80"></div>
                <span className="flex-shrink mx-3 text-[10px] uppercase font-semibold tracking-wider text-text-tertiary">
                  atau gunakan email Untirta
                </span>
                <div className="flex-grow border-t border-border/80"></div>
              </div>

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
                        placeholder="Masukkan kata sandi akun"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle size={15} className="shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 px-4 rounded-xl bg-accent text-slate-950 font-bold text-xs shadow-md shadow-accent/20 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-1 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 size={16} className="animate-spin text-slate-950" />
                    ) : (
                      <>
                        <span>Masuk ke RuangTI</span>
                        <CheckCircle2 size={14} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* SIGNUP FORM */
                <form onSubmit={handleSignup} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama Mahasiswa / Dosen"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Email Untirta Resmi
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                      <input
                        type="email"
                        required
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="nama@untirta.ac.id atau @student.untirta.ac.id"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                    <p className="text-[10px] text-text-tertiary leading-tight">
                      *Wajib menggunakan domain resmi @untirta.ac.id atau @student.untirta.ac.id
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Peran (Role)
                      </label>
                      <div className="relative">
                        <GraduationCap size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer"
                        >
                          <option value="Mahasiswa">Mahasiswa</option>
                          <option value="Dosen">Dosen</option>
                          <option value="Alumni">Alumni Untirta</option>
                          <option value="Peneliti">Peneliti Lab TI</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Fakultas / Jurusan
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="text"
                          value={institution}
                          onChange={(e) => setInstitution(e.target.value)}
                          placeholder="FT Teknik Industri"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        No. HP (WhatsApp)
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="081234567890"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Kode Pos
                      </label>
                      <div className="relative">
                        <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="text"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          placeholder="42435"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Kata Sandi
                      </label>
                      <div className="relative">
                        <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="password"
                          required
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          placeholder="Min. 8 karakter"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                        Ulangi Sandi
                      </label>
                      <div className="relative">
                        <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-tertiary" />
                        <input
                          type="password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Konfirmasi sandi"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-canvas border border-border text-text-primary text-xs focus:outline-none focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle size={15} className="shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 px-4 rounded-xl bg-accent text-slate-950 font-bold text-xs shadow-md shadow-accent/20 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-1 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 size={16} className="animate-spin text-slate-950" />
                    ) : (
                      <>
                        <span>Buat Akun Civitas Untirta</span>
                        <Sparkles size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Footer Notice */}
            <div className="p-3 sm:p-4 bg-canvas-subtle border-t border-border/60 text-center shrink-0">
              <p className="text-[11px] text-text-tertiary">
                Keamanan data terenkripsi. Sesuai standar tata kelola komputasi FT Untirta.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
