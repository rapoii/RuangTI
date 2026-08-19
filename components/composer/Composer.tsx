"use client";

import React, { useRef, useEffect, useState } from "react";
import { SendStopButton } from "./SendStopButton";
import { Paperclip, Globe, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { compressImageFile } from "@/lib/image-compressor";
import { uploadImageToBackend } from "@/lib/api-client";

interface ComposerProps {
  onSendMessage: (
    text: string,
    options?: { webSearch?: boolean; images?: string[] }
  ) => void;
  onStopStreaming: () => void;
  isStreaming: boolean;
  disabled?: boolean;
}

export function Composer({
  onSendMessage,
  onStopStreaming,
  isStreaming,
  disabled = false,
}: ComposerProps) {
  const [text, setText] = useState("");
  // Store compressed base64 data URLs for instant local previews
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        220
      )}px`;
    }
  }, [text]);

  // Process and compress image file (client-side resize + webp compression)
  const processAndAddImage = async (file: File) => {
    try {
      const compressedDataUrl = await compressImageFile(file, 1280, 1280, 0.82);
      setPreviewImages((prev) => [...prev, compressedDataUrl]);
    } catch (err) {
      console.error("Compression error:", err);
    }
  };

  // Handle file selection from input
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith("image/")) {
        await processAndAddImage(file);
      }
    }

    // Reset input value so same file can be selected again
    e.target.value = "";
  };

  // Handle paste image from clipboard
  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          await processAndAddImage(file);
        }
      }
    }
  };

  const removeImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (isStreaming) {
      onStopStreaming();
      return;
    }
    const hasText = text.trim().length > 0;
    const hasImages = previewImages.length > 0;

    if ((hasText || hasImages) && !disabled && !isUploading) {
      let uploadedUrls: string[] = [];

      if (hasImages) {
        setIsUploading(true);
        try {
          const uploadPromises = previewImages.map((b64) => uploadImageToBackend(b64));
          const results = await Promise.all(uploadPromises);
          uploadedUrls = results.filter((url): url is string => Boolean(url));
        } catch (err) {
          console.error("Upload error before sending message:", err);
          // Fallback to base64 if backend upload failed
          uploadedUrls = previewImages;
        } finally {
          setIsUploading(false);
        }
      }

      onSendMessage(text.trim(), {
        webSearch: webSearchEnabled,
        images: uploadedUrls.length > 0 ? uploadedUrls : undefined,
      });

      setText("");
      setPreviewImages([]);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const canSubmit = (text.trim().length > 0 || previewImages.length > 0) && !disabled && !isUploading;

  return (
    <div className="w-full px-3 sm:px-6 pb-2 pt-1 select-none">
      <div className="max-w-chat mx-auto w-full">
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png,image/jpeg,image/webp,image/gif"
          multiple
          className="hidden"
        />

        {/* Floating Composer Container */}
        <div
          className={cn(
            "relative rounded-2xl bg-surface transition-all duration-200 border px-3 sm:px-4 flex flex-col shadow-sm py-1.5",
            isFocused
              ? "border-accent/80 shadow-md ring-2 ring-accent/10"
              : "border-border/80 hover:border-border-strong"
          )}
        >
          {/* Attached Images Thumbnail Strip */}
          {previewImages.length > 0 && (
            <div className="flex items-center gap-2.5 pt-1.5 pb-2.5 overflow-x-auto no-scrollbar border-b border-border/60 mb-1.5">
              {previewImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative group shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-border/80 bg-canvas-subtle shadow-sm"
                >
                  <img
                    src={imgSrc}
                    alt={`Attachment preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-sm"
                    title="Hapus gambar"
                  >
                    <X size={11} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-dashed border-border/90 hover:border-accent/80 bg-surface flex flex-col items-center justify-center text-text-tertiary hover:text-accent transition-colors gap-1"
                title="Tambah gambar lain"
              >
                <ImageIcon size={16} />
                <span className="text-[11px] font-medium">+ Tambah</span>
              </button>
            </div>
          )}

          {/* Main Input Row */}
          <div className="flex items-center gap-2.5 min-h-[44px]">
            {/* File Attachment Button */}
            <div className="flex items-center justify-center shrink-0">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors m-0 p-0",
                  previewImages.length > 0
                    ? "bg-accent/15 text-accent hover:bg-accent/25"
                    : "text-text-tertiary hover:text-text-primary hover:bg-surface-hover"
                )}
                aria-label="Lampirkan berkas gambar/foto tugas"
                title="Lampirkan foto studi kasus / soal ujian"
              >
                <Paperclip className="w-4 h-4" />
              </button>
            </div>

            {/* Multi-line Auto-resizing Textarea */}
            <div className="flex-1 flex items-center min-h-[36px]">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={1}
                placeholder={
                  previewImages.length > 0
                    ? "Tulis instruksi tambahan untuk gambar ini..."
                    : "Tanyakan masalah optimasi, lean, atau upload gambar soal..."
                }
                disabled={disabled || isUploading}
                className="w-full bg-transparent text-text-primary text-xs sm:text-sm placeholder:text-text-tertiary resize-none outline-none py-1.5 px-1 max-h-[220px] leading-normal font-sans block m-0"
              />
            </div>

            {/* Web Search Toggle */}
            <div className="flex items-center justify-center shrink-0">
              <button
                type="button"
                onClick={() => setWebSearchEnabled((prev) => !prev)}
                className={cn(
                  "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors m-0 p-0",
                  webSearchEnabled
                    ? "bg-accent/15 text-accent hover:bg-accent/25"
                    : "text-text-tertiary hover:text-text-primary hover:bg-surface-hover"
                )}
                aria-label={
                  webSearchEnabled
                    ? "Matikan pencarian web"
                    : "Nyalakan pencarian web"
                }
                title={
                  webSearchEnabled
                    ? "Pencarian Web: AKTIF (RAG + Live Web)"
                    : "Pencarian Web: NONAKTIF (RAG saja)"
                }
              >
                <Globe className="w-4 h-4" />
              </button>
            </div>

            {/* Send / Stop Action Button */}
            <div className="flex items-center justify-center shrink-0">
              {isUploading ? (
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-accent">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              ) : (
                <SendStopButton
                  isStreaming={isStreaming}
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>

        {/* Web Search Status Indicator */}
        {webSearchEnabled && (
          <div className="text-center mt-1.5">
            <span className="text-[11px] text-amber-700 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium inline-flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Smart & Dynamic Web Search Aktif (Memindai hingga 50 Website + Kurasi Otomatis)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
