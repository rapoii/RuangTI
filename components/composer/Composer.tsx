"use client";

import React, { useRef, useEffect, useState } from "react";
import { SendStopButton } from "./SendStopButton";
import {
  Paperclip,
  Globe,
  X,
  Image as ImageIcon,
  Loader2,
  FileText,
  FileSpreadsheet,
  FileCode2,
  FileArchive,
  File as FileIcon,
  Box,
  Activity,
  Terminal,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { compressImageFile } from "@/lib/image-compressor";
import { uploadImageToBackend, uploadDocumentToBackend } from "@/lib/api-client";
import { AttachedDocument, ThinkingEffort, THINKING_EFFORT_OPTIONS } from "@/lib/types";
import { ThinkingSelector } from "./ThinkingSelector";

interface ComposerProps {
  onSendMessage: (
    text: string,
    options?: {
      webSearch?: boolean;
      images?: string[];
      documents?: AttachedDocument[];
      model_id?: string;
    }
  ) => void;
  onStopStreaming: () => void;
  isStreaming: boolean;
  disabled?: boolean;
}

interface LocalDocPreview {
  id: string;
  file: File;
  name: string;
  size: number;
  ext: string;
}

export function Composer({
  onSendMessage,
  onStopStreaming,
  isStreaming,
  disabled = false,
}: ComposerProps) {
  const [text, setText] = useState("");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewDocs, setPreviewDocs] = useState<LocalDocPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [webSearchEnabled, setWebSearchEnabled] = useState(false);
  const [thinkingEffort, setThinkingEffort] = useState<ThinkingEffort>("none");

  // Load saved thinking effort preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ruangti_thinking_effort") as ThinkingEffort;
      if (saved && ["none", "low", "medium", "high", "xhigh"].includes(saved)) {
        setThinkingEffort(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleChangeEffort = (effort: ThinkingEffort) => {
    setThinkingEffort(effort);
    try {
      localStorage.setItem("ruangti_thinking_effort", effort);
    } catch {
      // Ignore
    }
  };

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

  // Add document / code / zip / spreadsheet file
  const processAndAddDoc = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase() || "file";
    const docItem: LocalDocPreview = {
      id: `doc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      file,
      name: file.name,
      size: file.size,
      ext,
    };
    setPreviewDocs((prev) => [...prev, docItem]);
  };

  // Handle file selection from input
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith("image/")) {
        await processAndAddImage(file);
      } else {
        processAndAddDoc(file);
      }
    }

    // Reset input value so same file can be selected again
    e.target.value = "";
  };

  // Handle paste file from clipboard
  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          await processAndAddImage(file);
        }
      } else if (items[i].kind === "file") {
        const file = items[i].getAsFile();
        if (file) {
          processAndAddDoc(file);
        }
      }
    }
  };

  const removeImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeDoc = (id: string) => {
    setPreviewDocs((prev) => prev.filter((d) => d.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getDocIcon = (ext: string) => {
    if (["xlsx", "xls", "csv"].includes(ext)) {
      return <FileSpreadsheet className="w-4 h-4 text-emerald-600" />;
    }
    if (["docx", "doc", "rtf", "txt", "md"].includes(ext)) {
      return <FileText className="w-4 h-4 text-sky-600" />;
    }
    if (["pdf"].includes(ext)) {
      return <FileText className="w-4 h-4 text-rose-600" />;
    }
    if (["zip", "tar", "gz", "7z", "rar"].includes(ext)) {
      return <FileArchive className="w-4 h-4 text-amber-600" />;
    }
    if (["dwg", "dxf"].includes(ext)) {
      return <Layers className="w-4 h-4 text-teal-600" />;
    }
    if (["step", "stp", "stl", "obj", "sldprt", "sldasm", "ipt", "iam"].includes(ext)) {
      return <Box className="w-4 h-4 text-indigo-600" />;
    }
    if (["gcode", "nc", "cnc", "tap"].includes(ext)) {
      return <Terminal className="w-4 h-4 text-emerald-700" />;
    }
    if (["fsm", "fsx"].includes(ext)) {
      return <Activity className="w-4 h-4 text-orange-600" />;
    }
    if (
      [
        "py", "js", "ts", "tsx", "jsx", "json", "sql", "yaml", "yml", "html",
        "css", "sh", "cpp", "c", "java", "r", "m"
      ].includes(ext)
    ) {
      return <FileCode2 className="w-4 h-4 text-violet-600" />;
    }
    return <FileIcon className="w-4 h-4 text-slate-600" />;
  };

  const handleSubmit = async () => {
    if (isStreaming) {
      onStopStreaming();
      return;
    }
    const hasText = text.trim().length > 0;
    const hasImages = previewImages.length > 0;
    const hasDocs = previewDocs.length > 0;

    if ((hasText || hasImages || hasDocs) && !disabled && !isUploading) {
      let uploadedUrls: string[] = [];
      let uploadedDocuments: AttachedDocument[] = [];

      if (hasImages || hasDocs) {
        setIsUploading(true);
        try {
          // Upload Images
          if (hasImages) {
            const uploadImagePromises = previewImages.map((b64) => uploadImageToBackend(b64));
            const imgResults = await Promise.all(uploadImagePromises);
            uploadedUrls = imgResults.filter((url): url is string => Boolean(url));
          }

          // Upload Documents
          if (hasDocs) {
            const uploadDocPromises = previewDocs.map((d) => uploadDocumentToBackend(d.file));
            const docResults = await Promise.all(uploadDocPromises);
            uploadedDocuments = docResults
              .filter((res): res is any => Boolean(res && res.success))
              .map((res) => ({
                id: res.id,
                name: res.name,
                size: res.size,
                ext: res.ext,
                url: res.url,
                type: res.type,
              }));
          }
        } catch (err) {
          console.error("Upload error before sending message:", err);
          uploadedUrls = previewImages;
        } finally {
          setIsUploading(false);
        }
      }

      // Resolve model based on selected thinking effort
      const currentThinkingOption = THINKING_EFFORT_OPTIONS.find((opt) => opt.id === thinkingEffort);
      const selectedModelId = currentThinkingOption ? currentThinkingOption.modelId : "gcli/grok-4.6";

      onSendMessage(text.trim(), {
        webSearch: webSearchEnabled,
        images: uploadedUrls.length > 0 ? uploadedUrls : undefined,
        documents: uploadedDocuments.length > 0 ? uploadedDocuments : undefined,
        model_id: selectedModelId,
      });

      setText("");
      setPreviewImages([]);
      setPreviewDocs([]);
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

  return (
    <div className="relative w-full select-none">
      {/* Hidden File Input for Any Document, Image, Code, or Archive */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
        accept="*/*"
        className="hidden"
      />

      {/* Floating Composer Container */}
      <div
        className={cn(
          "flex flex-col bg-surface border border-border shadow-composer transition-all duration-200 ease-out",
          "rounded-[22px] sm:rounded-[24px]",
          isFocused ? "border-accent/40 ring-2 ring-accent/10" : "hover:border-border-hover"
        )}
      >
        {/* Upload Loading Indicator Bar */}
        {isUploading && (
          <div className="flex items-center gap-2 px-4 py-2 bg-canvas-subtle border-b border-border text-xs text-text-secondary rounded-t-[22px]">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-accent" />
            <span>Mengunggah dan memproses berkas dokumen / gambar...</span>
          </div>
        )}

        {/* Attachment Previews Area */}
        {(previewImages.length > 0 || previewDocs.length > 0) && (
          <div className="flex flex-wrap gap-2 p-3 pb-1 border-b border-border/50 max-h-48 overflow-y-auto">
            {/* Image Previews */}
            {previewImages.map((imgUrl, index) => (
              <div
                key={`img-${index}`}
                className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-border/80 bg-canvas shrink-0 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgUrl}
                  alt={`Lampiran gambar ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                  aria-label="Hapus gambar"
                >
                  <X size={11} strokeWidth={2.5} />
                </button>
              </div>
            ))}

            {/* Document / File Previews */}
            {previewDocs.map((doc) => (
              <div
                key={doc.id}
                className="relative group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-canvas/80 hover:bg-canvas shadow-xs shrink-0 max-w-[220px]"
              >
                <div className="p-1 rounded-lg bg-surface border border-border/60 shrink-0">
                  {getDocIcon(doc.ext)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-text-primary truncate">{doc.name}</p>
                  <p className="text-[10px] text-text-tertiary">{formatFileSize(doc.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeDoc(doc.id)}
                  className="w-4 h-4 rounded-full bg-border/80 hover:bg-rose-500 hover:text-white text-text-secondary flex items-center justify-center transition-colors shrink-0 ml-1"
                  aria-label="Hapus berkas"
                >
                  <X size={10} strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="flex items-center px-3 sm:px-4 py-2 sm:py-2.5 gap-1.5 sm:gap-2">
          {/* Paperclip Button (Attach Images, Docs, Excel, Code, Zip) */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors shrink-0"
            title="Lampirkan dokumen, spreadsheet, kodingan, zip, atau gambar"
            aria-label="Lampirkan berkas"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          {/* Textarea */}
          <div className="flex-1 min-w-0 flex items-center">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Tulis pesan..."
              disabled={disabled}
              rows={1}
              className={cn(
                "w-full max-h-[220px] resize-none border-0 bg-transparent py-1.5 sm:py-2 text-sm text-text-primary placeholder:text-text-tertiary",
                "focus:outline-none focus:ring-0 leading-normal font-sans"
              )}
            />
          </div>

          {/* Web Search Toggle Button */}
          <button
            type="button"
            onClick={() => setWebSearchEnabled((prev) => !prev)}
            className={cn(
              "w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors shrink-0",
              webSearchEnabled
                ? "bg-accent/15 text-accent border border-accent/25"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
            )}
            title={
              webSearchEnabled
                ? "Pencarian Web Aktif (Pencarian literatur & data terkini)"
                : "Aktifkan Pencarian Web"
            }
            aria-label="Toggle Web Search"
          >
            <Globe className="w-4 h-4" />
          </button>

          {/* Thinking Effort Selector Pill */}
          <ThinkingSelector
            currentEffort={thinkingEffort}
            onChangeEffort={handleChangeEffort}
            disabled={disabled || isStreaming}
          />

          {/* Send / Stop Action Button */}
          <div className="shrink-0 flex items-center">
            <SendStopButton
              isStreaming={isStreaming}
              onClick={handleSubmit}
              disabled={disabled || isUploading || (!text.trim() && previewImages.length === 0 && previewDocs.length === 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
