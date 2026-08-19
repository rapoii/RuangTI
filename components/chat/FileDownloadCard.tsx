"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  FileText,
  Presentation,
  FileCode,
  Download,
  Check,
  Loader2,
  Sparkles,
  ArrowDownToLine,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GenerateFileMeta {
  file_type: "excel" | "docx" | "pptx" | "pdf" | string;
  filename: string;
  title?: string;
  subtitle?: string;
  headers?: string[];
  rows?: any[][];
  sections?: any[];
  slides?: any[];
}

interface FileDownloadCardProps {
  meta: GenerateFileMeta;
}

export function FileDownloadCard({ meta }: FileDownloadCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const cleanType = (meta.file_type || "excel").toLowerCase();

  // Color & Icon mapping
  const getFileBadge = () => {
    if (["excel", "xlsx", "csv"].includes(cleanType)) {
      return {
        icon: <FileSpreadsheet className="w-6 h-6 text-emerald-600" />,
        label: "Microsoft Excel Spreadsheet",
        ext: ".xlsx",
        badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
        btnBg: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white",
        desc: `${meta.headers?.length || 0} Kolom • ${meta.rows?.length || 0} Baris Data Terformat`,
      };
    }
    if (["word", "docx", "doc"].includes(cleanType)) {
      return {
        icon: <FileText className="w-6 h-6 text-sky-600" />,
        label: "Microsoft Word Document",
        ext: ".docx",
        badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
        btnBg: "bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white",
        desc: `${meta.sections?.length || 0} Bagian & Bab Laporan Resmi`,
      };
    }
    if (["powerpoint", "pptx", "ppt", "presentation"].includes(cleanType)) {
      return {
        icon: <Presentation className="w-6 h-6 text-amber-600" />,
        label: "PowerPoint Presentation (16:9)",
        ext: ".pptx",
        badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
        btnBg: "bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white",
        desc: `${meta.slides?.length || 0} Slide Presentasi Widescreen`,
      };
    }
    if (["pdf"].includes(cleanType)) {
      return {
        icon: <FileCode className="w-6 h-6 text-rose-600" />,
        label: "Dokumen Cetak PDF",
        ext: ".pdf",
        badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
        btnBg: "bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white",
        desc: `${meta.sections?.length || 0} Halaman Laporan Terstandar`,
      };
    }
    return {
      icon: <FileText className="w-6 h-6 text-accent" />,
      label: "Berkas RuangTI",
      ext: `.${cleanType}`,
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      btnBg: "bg-accent hover:bg-accent/90 text-white",
      desc: "Berkas Data Ekspor",
    };
  };

  const badge = getFileBadge();
  const rawName = meta.filename || `RuangTI_Export${badge.ext}`;
  const displayFilename = rawName.endsWith(badge.ext) ? rawName : `${rawName}${badge.ext}`;

  const handleDownload = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setErrorMsg(null);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${apiBase}/api/export/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_type: cleanType,
          filename: displayFilename,
          title: meta.title || "Dokumen RuangTI",
          subtitle: meta.subtitle,
          headers: meta.headers || [],
          rows: meta.rows || [],
          sections: meta.sections || [],
          slides: meta.slides || [],
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal membuat berkas di server.");
      }

      const result = await response.json();
      if (result.download_url) {
        const downloadLink = `${apiBase}${result.download_url}`;
        
        // Trigger browser download via dynamic link
        const a = document.createElement("a");
        a.href = downloadLink;
        a.download = displayFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 4000);
      }
    } catch (err: any) {
      console.error("Export error:", err);
      setErrorMsg(err.message || "Gagal mengunduh file.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
      className="my-4 rounded-2xl bg-surface border border-border/90 shadow-sm p-4 not-prose select-none relative overflow-hidden group"
    >
      {/* Background Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
        {/* Left Info */}
        <div className="flex items-start gap-3.5 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
            {badge.icon}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm font-bold text-text-primary tracking-tight truncate">
                {displayFilename}
              </h4>
              <span
                className={cn(
                  "text-[10px] font-semibold px-2 py-0.5 rounded-full border tracking-wide uppercase",
                  badge.badgeBg
                )}
              >
                {badge.label}
              </span>
            </div>

            <p className="text-xs text-text-secondary mt-0.5 truncate">
              {meta.title || badge.desc}
            </p>
            <p className="text-[11px] text-text-tertiary mt-0.5">
              {badge.desc} • Siap diunduh
            </p>
          </div>
        </div>

        {/* Right Download Button */}
        <div className="flex items-center gap-2 shrink-0 sm:self-center">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isGenerating}
            className={cn(
              "w-full sm:w-auto h-10 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all duration-150 shadow-sm active:scale-95 cursor-pointer",
              badge.btnBg,
              isGenerating && "opacity-75 cursor-wait"
            )}
            aria-label={`Unduh ${displayFilename}`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Menyiapkan Berkas...</span>
              </>
            ) : isDownloaded ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Tersimpan di Perangkat!</span>
              </>
            ) : (
              <>
                <ArrowDownToLine className="w-4 h-4 text-white" />
                <span>Unduh File {badge.ext}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {errorMsg && (
        <p className="text-xs text-rose-500 mt-2 font-medium">
          ⚠️ {errorMsg}
        </p>
      )}
    </motion.div>
  );
}
