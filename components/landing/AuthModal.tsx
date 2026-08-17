"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Sparkles, CheckCircle2, Lock } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string, email: string) => void;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [name, setName] = useState("Rafi Permana");
  const [email, setEmail] = useState("rafi.permana@untirta.ac.id");
  const [password, setPassword] = useState("••••••••");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess(name, email);
      setIsLoading(false);
      onClose();
    }, 600);
  };

  const handleDemoLogin = (demoName: string, demoEmail: string) => {
    setName(demoName);
    setEmail(demoEmail);
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess(demoName, demoEmail);
      setIsLoading(false);
      onClose();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-md bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm">
                  TI
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-text-primary">
                    Masuk ke RuangTI
                  </h3>
                  <p className="text-xs text-text-secondary">
                    Workspace AI & Konsultasi Teknik Industri
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg text-text-secondary hover:text-text-primary hover:bg-canvas flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Nama Lengkap
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
                    placeholder="Nama mahasiswa / praktisi..."
                    className="w-full pl-9 pr-3.5 py-2.5 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-text-secondary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Email Institusi / Pribadi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                    <Mail size={15} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@untirta.ac.id"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-text-secondary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wider">
                  Kata Sandi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                    <Lock size={15} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-canvas border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-text-secondary/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-xl bg-accent text-slate-950 font-semibold text-sm hover:brightness-110 shadow-sm shadow-accent/20 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Masuk ke Workspace</span>
                    <CheckCircle2 size={16} />
                  </>
                )}
              </button>

              {/* Fast 1-Click Login Suggestions */}
              <div className="pt-3 border-t border-border/40">
                <span className="block text-[11px] font-medium text-text-secondary text-center mb-2.5">
                  Atau akses cepat dengan akun:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleDemoLogin("Rafi Permana", "rafi.permana@untirta.ac.id")
                    }
                    className="p-2 rounded-xl bg-canvas border border-border hover:border-accent/50 text-left transition-all group"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary group-hover:text-accent">
                      <Sparkles size={12} className="text-accent" />
                      <span>Rafi Permana</span>
                    </div>
                    <span className="text-[10px] text-text-secondary truncate block">
                      Mahasiswa TI Untirta
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDemoLogin("Praktisi TI", "engineer@ruangti.ac.id")
                    }
                    className="p-2 rounded-xl bg-canvas border border-border hover:border-accent/50 text-left transition-all group"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary group-hover:text-accent">
                      <Sparkles size={12} className="text-accent" />
                      <span>Guest Engineer</span>
                    </div>
                    <span className="text-[10px] text-text-secondary truncate block">
                      Akses Eksplorasi TI
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
