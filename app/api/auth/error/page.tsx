"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center mb-5 border border-red-500/20">
        <ShieldAlert className="w-8 h-8" />
      </div>
      <h1 className="text-xl sm:text-2xl font-bold mb-2">
        Autentikasi Gagal
      </h1>
      <p className="text-sm text-text-secondary max-w-md mb-6 leading-relaxed">
        Terjadi kendala saat memproses sesi autentikasi Anda. Silakan coba masuk kembali menggunakan akun Google.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-accent text-white font-medium text-xs hover:brightness-110 shadow-sm transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas text-text-primary flex items-center justify-center p-6 text-center">Memuat...</div>}>
      <AuthErrorContent />
    </Suspense>
  );
}
