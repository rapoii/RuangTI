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
    }

    if (signupPassword.length < 8) {
      setIsLoading(false);
      setErrorMessage("Kata sandi minimal harus 8 karakter.");
      return;
    }

    try {
      const res = await registerToBackend({
        name,
        email: signupEmail,
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
      setErrorMessage(err.message || "Gagal melakukan pendaftaran akun.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
          >
            {/* Header with Brand & Tabs */}
            <div className="px-5 sm:px-6 pt-5 pb-3 border-b border-border/40 shrink-0 bg-surface">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-slate-950 font-bold text-sm shadow-sm shadow-accent/20">
                    TI
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-text-primary">
                      Ruang<span className="text-accent">TI</span> Auth
                    </h3>
                    <p className="text-[11px] text-text-secondary">
                      Portal Khusus Sivitas Akademika Untirta
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg text-text-secondary hover:text-text-primary hover:bg-canvas flex items-center justify-center transition-colors"
                  aria-label="Tutup Dialog"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Tab Switcher with High-Contrast Active Indicator */}
              <div className="grid grid-cols-2 p-1 bg-canvas rounded-xl border border-border">
                <button
                  type="button"
                  onClick={() => handleTabSwitch("login")}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    tab === "login"
                      ? "bg-surface text-text-primary shadow-sm border border-border/80 font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Masuk Akun
                </button>
                <button
                  type="button"
                  onClick={() => handleTabSwitch("signup")}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    tab === "signup"
                      ? "bg-surface text-accent shadow-sm border border-accent/40 font-bold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Daftar Baru (Untirta)
                </button>
              </div>
            </div>

            {/* Error Message Toast Inline */}
            {errorMessage && (
              <div className="mx-5 sm:mx-6 mt-3.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-start gap-2.5 shrink-0">
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
            )}

            {/* Scrollable Form Content */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
              {tab === "login" ? (
                /* ================= LOGIN TAB ================= */
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                      Email Untirta
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                        <Mail size={15} />
                      </div>
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="nama@untirta.ac.id"
                        className="w-full pl-9 pr-3.5 py-2.5 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-text-secondary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                        <Lock size={15} />
                      </div>
                      <input
                        type="password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-text-secondary/50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 px-4 rounded-xl bg-accent text-slate-950 font-bold text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all flex items-center justify-center gap-2 mt-2 active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Masuk ke Workspace RuangTI</span>
                        <CheckCircle2 size={16} />
                      </>
                    )}
                  </button>

                  <div className="pt-3 border-t border-border/40 text-center">
                    <span className="text-xs text-text-secondary">
                      Belum memiliki akun?{" "}
                      <button
                        type="button"
                        onClick={() => handleTabSwitch("signup")}
                        className="text-accent font-semibold hover:underline ml-1"
                      >
                        Daftar sekarang
                      </button>
                    </span>
                  </div>
                </form>
              ) : (
                /* ================= SIGNUP TAB ================= */
                <form onSubmit={handleSignup} className="space-y-3.5 pb-2">
                  {/* Domain Untirta Notice */}
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-[11px] flex items-center gap-2">
                    <Sparkles size={14} className="shrink-0" />
                    <span>Hanya email @untirta.ac.id atau @student.untirta.ac.id yang valid.</span>
                  </div>

                  {/* 1. Nama Lengkap */}
                  <div>
                    <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                        <User size={15} />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rafi Permana"
                        className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40"
                      />
                    </div>
                  </div>

                  {/* 2. Email Untirta */}
                  <div>
                    <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                      Email Institusi Untirta *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                        <Mail size={15} />
                      </div>
                      <input
                        type="email"
                        required
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="3333200001@student.untirta.ac.id"
                        className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40"
                      />
                    </div>
                  </div>

                  {/* 3. Nomor WhatsApp & Peran (Grid 2 Kolom) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                        Nomor WhatsApp *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                          <Phone size={15} />
                        </div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="08123456789"
                          className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                        Peran Akademik
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all"
                      >
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Dosen">Dosen / Peneliti</option>
                        <option value="Alumni">Alumni / Praktisi</option>
                      </select>
                    </div>
                  </div>

                  {/* 4. Alamat & Kode Pos (Dikelompokkan Logis) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                        Alamat Domisili / Kampus *
                      </label>
                      <div className="relative">
                        <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none text-text-secondary">
                          <MapPin size={15} />
                        </div>
                        <textarea
                          required
                          rows={2}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Jl. Jenderal Sudirman Km 3, Cilegon"
                          className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40 resize-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                        Kode Pos *
                      </label>
                      <div className="relative">
                        <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none text-text-secondary">
                          <Building size={15} />
                        </div>
                        <input
                          type="text"
                          required
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          placeholder="42435"
                          className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 5. Password & Confirm Password (Grid 2 Kolom) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                        Kata Sandi *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                          <Lock size={15} />
                        </div>
                        <input
                          type="password"
                          required
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          placeholder="Min. 8 karakter"
                          className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-text-secondary mb-1 uppercase tracking-wider">
                        Konfirmasi Sandi *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                          <Lock size={15} />
                        </div>
                        <input
                          type="password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Ulangi sandi..."
                          className="w-full pl-9 pr-3.5 py-2 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent transition-all placeholder:text-text-secondary/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Signup Button (Spaced & Never Cut Off) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-2.5 px-4 rounded-xl bg-accent text-slate-950 font-bold text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Daftar Akun Mahasiswa Untirta</span>
                          <CheckCircle2 size={16} />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 border-t border-border/40 text-center">
                    <span className="text-xs text-text-secondary">
                      Sudah punya akun?{" "}
                      <button
                        type="button"
                        onClick={() => handleTabSwitch("login")}
                        className="text-accent font-semibold hover:underline ml-1"
                      >
                        Masuk di sini
                      </button>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
