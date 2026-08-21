"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  AlertCircle,
  Loader2,
  ArrowRight,
  Check,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userProfile: any) => void;
  initialError?: string;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess, initialError }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(initialError || null);
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    if (initialError) {
      setErrorMessage(initialError);
    }
  }, [initialError]);

  // Reset agreement state on modal open/close
  useEffect(() => {
    if (!isOpen) {
      setIsAgreed(false);
      setErrorMessage(null);
      setIsLoading(false);
    }
  }, [isOpen]);

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

  // Google OAuth Login Handler
  const handleGoogleLogin = async () => {
    if (!isAgreed) {
      setErrorMessage("Harap centang persetujuan Syarat & Ketentuan di bawah terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: window.location.origin + "/chat",
      });
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(
        err.message || "Gagal menghubungkan ke Google. Silakan coba beberapa saat lagi."
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop Blur (GPU Optimized) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ willChange: "opacity" }}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Modal Card / Responsive Bottom-Sheet on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="relative w-full max-w-md rounded-t-3xl sm:rounded-2xl bg-surface border border-border/80 shadow-2xl z-10 flex flex-col overflow-hidden"
          >
            {/* Header / Brand & Close Button */}
            <div className="p-4 sm:p-5 border-b border-border/60 flex items-center justify-between shrink-0 bg-surface">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white font-display font-bold text-sm shadow-sm shadow-accent/20">
                  TI
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-text-primary leading-tight flex items-center gap-1.5">
                    Ruang<span className="text-accent">TI</span> Workspace
                  </h3>
                  <p className="text-[11px] text-text-secondary font-medium">
                    Industrial Engineering AI & Research Assistant
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Tutup dialog"
                className="w-8 h-8 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors active:scale-95 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 flex flex-col gap-3.5">
              
              {/* Single Google OAuth Button (Atas) */}
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isLoading || !isAgreed}
                  className={`w-full group relative flex items-center justify-between py-3.5 px-4 rounded-xl border transition-all duration-150 shadow-xs active:scale-[0.99] ${
                    isAgreed && !isLoading
                      ? "border-border/90 bg-surface hover:bg-canvas-subtle text-text-primary hover:border-accent/60 hover:shadow-sm cursor-pointer"
                      : "border-border/40 bg-canvas-subtle/60 text-text-tertiary opacity-60 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-border/80 flex items-center justify-center shrink-0 shadow-2xs">
                      {isLoading ? (
                        <Loader2 size={16} className="animate-spin text-accent" />
                      ) : (
                        <svg className={`w-4 h-4 ${!isAgreed ? "grayscale opacity-70" : ""}`} viewBox="0 0 24 24">
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
                    </div>
                    <div className="flex flex-col text-left">
                      <span className={`font-bold text-sm transition-colors ${isAgreed ? "text-text-primary group-hover:text-accent" : "text-text-secondary"}`}>
                        Lanjutkan dengan Google
                      </span>
                      <span className="text-[11px] text-text-tertiary font-normal">
                        Masuk cepat & aman dengan akun Google
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={16} className={`transition-all ${isAgreed ? "text-text-tertiary group-hover:text-accent group-hover:translate-x-0.5" : "text-text-tertiary opacity-40"}`} />
                </button>
              </div>

              {/* Checkbox Syarat & Ketentuan (Bawah) dengan Lingkaran Diturunkan Presisi di Tengah Container */}
              <label className="flex items-center gap-3 p-3.5 rounded-xl bg-canvas-subtle border border-border/80 cursor-pointer select-none transition-colors hover:border-accent/50 group">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => {
                    setIsAgreed(e.target.checked);
                    if (e.target.checked) setErrorMessage(null);
                  }}
                  className="sr-only"
                />
                {/* Lingkaran Checkbox Eksplisit */}
                <div
                  style={{ transform: "translateY(0px)", marginTop: "0px", marginBottom: "0px" }}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 self-center my-auto ${
                    isAgreed
                      ? "bg-accent border-accent text-white shadow-xs scale-105"
                      : "bg-surface border-border-strong group-hover:border-accent"
                  }`}
                >
                  {isAgreed && <Check size={12} strokeWidth={3.5} />}
                </div>
                <div
                  style={{ marginTop: "0px", marginBottom: "0px" }}
                  className="text-xs text-text-secondary leading-[1.35] flex-1 self-center my-auto"
                >
                  Saya telah membaca dan menyetujui{" "}
                  <a
                    href="/docs?article=terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent font-semibold underline underline-offset-2 hover:brightness-110 transition-colors inline"
                  >
                    Syarat & Ketentuan
                  </a>{" "}
                  penggunaan platform RuangTI.
                </div>
              </label>

              {/* Error Alert Display */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-600 leading-relaxed"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
