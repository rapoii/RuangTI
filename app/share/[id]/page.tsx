"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPublicSharedConversation, PublicSharedConversation } from "@/lib/api-client";
import { MessageList } from "@/components/chat/MessageList";
import { Button } from "@/components/ui/Button";
import { Layers, Globe, ArrowLeft, ShieldAlert, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SharedChatPage() {
  const params = useParams();
  const identifier = params?.id as string;

  const [conversation, setConversation] = useState<PublicSharedConversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSharedData() {
      if (!identifier) return;
      setIsLoading(true);
      setError(null);
      const data = await fetchPublicSharedConversation(identifier);
      if (data) {
        setConversation(data);
      } else {
        setError("Tautan obrolan ini tidak ditemukan atau telah diubah kembali ke status privat oleh pemiliknya.");
      }
      setIsLoading(false);
    }
    loadSharedData();
  }, [identifier]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-canvas text-text-primary">
      {/* Top Read-Only Bar */}
      <header className="h-14 w-full flex items-center justify-between px-4 sm:px-8 border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="flex items-center gap-2 group text-text-secondary hover:text-text-primary transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 text-accent flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-text-primary">
              RuangTI
            </span>
          </Link>
          <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
            Obrolan Dibagikan (Read-only)
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/chat">
            <Button size="sm" variant="primary" className="bg-accent hover:bg-accent-hover text-white text-xs gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mulai Diskusi Baru</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col min-h-0">
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 py-20">
            <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
            <p className="text-xs text-text-secondary">Memuat obrolan publik...</p>
          </div>
        ) : error || !conversation ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto py-20">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 border border-amber-500/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold font-display text-text-primary mb-1.5">
              Obrolan Tidak Tersedia
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed mb-6">
              {error || "Obrolan ini tidak dapat diakses."}
            </p>
            <Link href="/chat">
              <Button size="sm" variant="secondary" className="gap-2 text-xs">
                <ArrowLeft className="w-3.5 h-3.5" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {/* Header info */}
            <div className="pb-6 mb-6 border-b border-border/70">
              <div className="flex items-center gap-2 text-xs text-text-tertiary mb-2">
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>Dibagikan oleh <strong className="text-text-secondary font-medium">{conversation.author_name}</strong></span>
                <span>•</span>
                <span>Model: {conversation.model_id}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold font-display text-text-primary">
                {conversation.title}
              </h1>
            </div>

            {/* Read-Only Message Feed */}
            <div className="flex-1 pb-16">
              <MessageList
                messages={conversation.messages}
                isStreaming={false}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
