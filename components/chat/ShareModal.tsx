"use client";

import React, { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Lock, Globe, Check, Copy, ShieldCheck } from "lucide-react";
import { toggleShareConversationOnBackend } from "@/lib/api-client";
import { cn } from "@/lib/utils";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  conversationId: string;
  conversationTitle: string;
  isInitiallyPublic?: boolean;
  initialShareId?: string;
  onShareStatusChanged?: (isPublic: boolean, shareId?: string) => void;
}

export function ShareModal({
  isOpen,
  onClose,
  conversationId,
  conversationTitle,
  isInitiallyPublic = false,
  initialShareId,
  onShareStatusChanged,
}: ShareModalProps) {
  const [selectedOption, setSelectedOption] = useState<"private" | "public">(
    isInitiallyPublic ? "public" : "private"
  );
  const [isPublicState, setIsPublicState] = useState<boolean>(isInitiallyPublic);
  const [shareId, setShareId] = useState<string | undefined>(initialShareId);
  const [isSaving, setIsSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedOption(isInitiallyPublic ? "public" : "private");
      setIsPublicState(isInitiallyPublic);
      setShareId(initialShareId);
      setCopied(false);
    }
  }, [isOpen, isInitiallyPublic, initialShareId]);

  const originUrl =
    typeof window !== "undefined" ? window.location.origin : "http://localhost:3005";
  const shareLink = shareId
    ? `${originUrl}/share/${shareId}`
    : `${originUrl}/share/${conversationId}`;

  const handleApplyShare = async () => {
    setIsSaving(true);
    const targetPublic = selectedOption === "public";
    const result = await toggleShareConversationOnBackend(conversationId, targetPublic);
    setIsSaving(false);

    if (result && result.success) {
      setIsPublicState(result.is_public);
      setShareId(result.share_id);
      if (onShareStatusChanged) {
        onShareStatusChanged(result.is_public, result.share_id);
      }
      if (targetPublic) {
        // Auto copy link to clipboard on create
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(
              result.share_id ? `${originUrl}/share/${result.share_id}` : `${originUrl}/share/${conversationId}`
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
          }
        } catch {}
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback copy
      const textArea = document.createElement("textarea");
      textArea.value = shareLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Bagikan obrolan"
      description="Hanya pesan hingga titik ini yang akan dibagikan."
    >
      <div className="flex flex-col gap-3 py-0.5 select-none">
        {/* Option List (Claude style) */}
        <div className="flex flex-col rounded-2xl border border-border overflow-hidden divide-y divide-border/70 bg-canvas/40">
          {/* Option 1: Keep Private */}
          <button
            type="button"
            onClick={() => setSelectedOption("private")}
            className={cn(
              "w-full flex items-start gap-3 p-3 sm:p-3.5 text-left transition-all",
              selectedOption === "private"
                ? "bg-surface hover:bg-surface-hover"
                : "hover:bg-surface/50 opacity-80"
            )}
          >
            <div className="w-7 h-7 rounded-lg bg-canvas flex items-center justify-center text-text-secondary shrink-0 border border-border/80 mt-0.5">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-text-primary">Tetap privat</p>
              <p className="text-[11px] text-text-secondary mt-0.5">Hanya Anda yang memiliki akses</p>
            </div>
            {selectedOption === "private" && (
              <div className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-1">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            )}
          </button>

          {/* Option 2: Create Public Link */}
          <button
            type="button"
            onClick={() => setSelectedOption("public")}
            className={cn(
              "w-full flex items-start gap-3 p-3 sm:p-3.5 text-left transition-all",
              selectedOption === "public"
                ? "bg-surface hover:bg-surface-hover"
                : "hover:bg-surface/50 opacity-80"
            )}
          >
            <div className="w-7 h-7 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0 border border-accent/20 mt-0.5">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-text-primary">Buat tautan publik</p>
              <p className="text-[11px] text-text-secondary mt-0.5">Siapa saja dengan tautan dapat melihat</p>
            </div>
            {selectedOption === "public" && (
              <div className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-1">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            )}
          </button>
        </div>

        {/* Public Link Box (If already public or public option active) */}
        {isPublicState && (
          <div className="flex flex-col gap-1.5 p-2.5 sm:p-3 rounded-xl bg-surface border border-border">
            <div className="flex items-center justify-between text-xs text-text-secondary">
              <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                <ShieldCheck className="w-3.5 h-3.5" />
                Tautan publik aktif
              </span>
              {copied && <span className="text-accent font-semibold text-[11px]">Tautan disalin!</span>}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={shareLink}
                className="flex-1 min-w-0 px-2.5 py-1.5 text-xs rounded-lg bg-canvas border border-border text-text-primary outline-none focus:border-accent font-mono truncate"
              />
              <Button
                size="sm"
                variant="secondary"
                onClick={handleCopyLink}
                className="shrink-0 flex items-center gap-1.5 text-xs h-8 px-2.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Disalin" : "Salin Link"}</span>
              </Button>
            </div>
          </div>
        )}

        {/* Disclaimer / Footer info */}
        <p className="text-[10.5px] leading-relaxed text-text-tertiary">
          Perhatikan etika integritas akademik dan hindari membagikan data pribadi tanpa izin.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2 pt-2 border-t border-border/70">
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 text-xs">
            Batal
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={handleApplyShare}
            disabled={isSaving}
            className="h-8 text-xs bg-accent hover:bg-accent-hover text-white flex items-center gap-1.5 shadow-sm px-3.5"
          >
            {isSaving
              ? "Menyimpan..."
              : selectedOption === "public"
              ? isPublicState
                ? "Perbarui & Salin Link"
                : "Buat link berbagi"
              : "Simpan sebagai Privat"}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
