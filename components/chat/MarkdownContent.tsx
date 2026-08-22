"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { CodeBlock } from "./CodeBlock";
import { FileDownloadCard, GenerateFileMeta } from "./FileDownloadCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MarkdownContentProps {
  content: string;
}

interface WebSourceMeta {
  title: string;
  url: string;
  snippet?: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Extract WebSources meta if present
  let cleanContent = content;
  let webSources: WebSourceMeta[] = [];
  let generatedFiles: GenerateFileMeta[] = [];

  const sourceMatch = cleanContent.match(/<!--WEBSOURCES:(.*?)-->/);
  if (sourceMatch) {
    try {
      webSources = JSON.parse(sourceMatch[1]);
      cleanContent = cleanContent.replace(sourceMatch[0], "");
    } catch {
      // ignore
    }
  }

  // Extract RUANGTI_GENERATE_FILE meta if present
  const fileRegex = /<!--RUANGTI_GENERATE_FILE:(.*?)-->/g;
  let fileMatch;
  while ((fileMatch = fileRegex.exec(cleanContent)) !== null) {
    try {
      const parsedFileMeta = JSON.parse(fileMatch[1]);
      if (parsedFileMeta && parsedFileMeta.file_type) {
        generatedFiles.push(parsedFileMeta);
      }
    } catch (e) {
      console.warn("Failed to parse RUANGTI_GENERATE_FILE meta:", e);
    }
  }
  cleanContent = cleanContent.replace(fileRegex, "");

  // Helper untuk mendapatkan favicon/domain
  const getDomain = (urlStr: string) => {
    try {
      return new URL(urlStr).hostname.replace("www.", "");
    } catch {
      return "web";
    }
  };

  // Pre-process content untuk normalisasi KaTeX:
  // 1. Transform delimiter standar LaTeX \[ ... \] dan \( ... \) menjadi $$ ... $$ dan $ ... $
  let processedContent = cleanContent
    .replace(/\\\[([\s\S]*?)\\\]/g, "\n\n$$$$$1$$$$\n\n")
    .replace(/\\\(([\s\S]*?)\\\)/g, " $$$1$$ ");

  // 2. Normalisasi semua blok display math ($$ ... $$) agar selalu berdiri sendiri dengan baris kosong di atas dan bawahnya
  processedContent = processedContent.replace(/\$\$\s*([\s\S]*?)\s*\$\$/g, (match, formula) => {
    return `\n\n$$\n${formula.trim()}\n$$\n\n`;
  });

  // 3. Konversi standar \frac menjadi \dfrac agar ekspresi pecahan tampil proporsional
  processedContent = processedContent.replace(/\\frac(?=\{)/g, "\\dfrac");

  // 4. Sanitasi teks multibahasa di dalam \text{...} agar aman dari karakter anomali
  processedContent = processedContent.replace(/\\text\{([^}]+)\}/g, (match, inner) => {
    const safeInner = inner.replace(/(?<!\\)%/g, "\\%");
    return `\\text{${safeInner}}`;
  });

  // State untuk expand/collapse jika sumber > 6
  const [isExpanded, setIsExpanded] = useState(false);

  const initialSources = webSources.slice(0, 6);
  const extraSources = webSources.slice(6);

  return (
    <div className="prose prose-sm max-w-none text-text-primary text-[15px] sm:text-[16px] leading-[1.8] overflow-hidden">
      {/* Visual Live Source Carousel / Dynamic Full Width Adaptive Grid */}
      {webSources.length > 0 && (
        <div className="mb-5 not-prose w-full select-none">
          <div className="flex items-center justify-between gap-1.5 text-[11px] font-medium text-text-secondary uppercase tracking-wider mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>{webSources.length} Sumber Web Terkurasi:</span>
            </div>
            {webSources.length > 6 && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-7 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs font-medium text-accent bg-accent/10 hover:bg-accent/20 border border-accent/25 hover:border-accent/40 active:scale-95 transition-all shadow-xs cursor-pointer select-none no-underline outline-none"
              >
                <span>
                  {isExpanded
                    ? "Tampilkan Lebih Sedikit"
                    : `+${webSources.length - 6} Sumber Lainnya`}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 shrink-0" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                )}
              </button>
            )}
          </div>

          {/* Grid 6 Sumber Pertama (Responsif: 2 kolom di mobile, 3 di tablet, 6 di desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 w-full">
            {initialSources.map((ws, idx) => (
              <a
                key={idx}
                href={ws.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between p-2.5 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-surface-hover text-text-primary transition-all shadow-xs group w-full h-[64px] min-w-0 no-underline"
                title={`${ws.title} (${ws.url})`}
              >
                <div className="flex items-center justify-between gap-1.5 w-full">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${getDomain(ws.url)}&sz=32`}
                      alt=""
                      className="w-3.5 h-3.5 rounded-xs shrink-0 opacity-85 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span className="text-[11px] text-text-secondary font-mono truncate">
                      {getDomain(ws.url)}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-accent font-semibold px-1 py-0.2 rounded bg-accent/10 shrink-0">
                    [{idx + 1}]
                  </span>
                </div>
                <span className="text-[11px] font-medium text-text-primary truncate w-full group-hover:text-accent transition-colors">
                  {ws.title || getDomain(ws.url)}
                </span>
              </a>
            ))}
          </div>

          {/* Animated Accordion untuk Sumber Tambahan (>6) - Menggunakan CSS Grid yang identik persis */}
          <AnimatePresence initial={false}>
            {isExpanded && extraSources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 w-full pt-2.5">
                  {extraSources.map((ws, extraIdx) => {
                    const actualIdx = 6 + extraIdx;
                    return (
                      <motion.a
                        key={actualIdx}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: Math.min(extraIdx * 0.015, 0.2) }}
                        href={ws.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-between p-2.5 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-surface-hover text-text-primary transition-all shadow-xs group w-full h-[64px] min-w-0 no-underline"
                        title={`${ws.title} (${ws.url})`}
                      >
                        <div className="flex items-center justify-between gap-1.5 w-full">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <img
                              src={`https://www.google.com/s2/favicons?domain=${getDomain(ws.url)}&sz=32`}
                              alt=""
                              className="w-3.5 h-3.5 rounded-xs shrink-0 opacity-85 group-hover:opacity-100"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                            <span className="text-[11px] text-text-secondary font-mono truncate">
                              {getDomain(ws.url)}
                            </span>
                            </div>
                            <span className="text-[11px] font-mono text-accent font-semibold px-1 py-0.2 rounded bg-accent/10 shrink-0">
                            [{actualIdx + 1}]
                            </span>
                        </div>
                        <span className="text-[11px] font-medium text-text-primary truncate w-full group-hover:text-accent transition-colors">
                          {ws.title || getDomain(ws.url)}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const value = String(children).replace(/\n$/, "");

            if (!inline && (match || value.includes("\n"))) {
              return (
                <CodeBlock
                  language={match ? match[1] : "text"}
                  value={value}
                />
              );
            }

            return (
              <code
                className="px-1.5 py-0.5 rounded-sm bg-surface border border-border font-mono text-[13px] text-accent font-normal"
                {...props}
              >
                {children}
              </code>
            );
          },
          h1: ({ children }) => (
            <h1 className="text-[19px] sm:text-[20px] font-semibold text-text-primary mt-4 mb-2 font-sans leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-[16px] sm:text-[17px] font-semibold text-text-primary mt-3.5 mb-1.5 font-sans leading-snug">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-text-primary mt-3 mb-1 font-sans">
              {children}
            </h3>
          ),
          em: ({ children }) => <em className="italic text-text-primary/90">{children}</em>,
          strong: ({ children }) => <strong className="font-semibold text-text-primary">{children}</strong>,
          p: ({ children }) => <p className="mb-2.5 last:mb-0 leading-[1.75]">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-5 mb-2.5 space-y-1 leading-[1.75]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-5 mb-2.5 space-y-1 leading-[1.75]">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-accent pl-3.5 py-0.5 my-2.5 text-text-secondary italic">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-2.5 border border-border rounded-md">
              <table className="w-full text-left text-sm border-collapse">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-surface border-b border-border text-text-primary font-semibold text-xs">
              {children}
            </thead>
          ),
          th: ({ children }) => <th className="px-3 py-2 border-r border-border last:border-r-0">{children}</th>,
          td: ({ children }) => (
            <td className="px-3 py-2 border-t border-border border-r last:border-r-0 text-text-secondary text-xs">
              {children}
            </td>
          ),
          a: ({ href, children }) => {
            const label = String(children).trim();
            const isCitation = /^\[?\d+\]?$/.test(label);
            if (isCitation) {
              const numMatch = label.match(/\d+/);
              const cleanNumber = numMatch ? `[${numMatch[0]}]` : label;
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-mono text-[11px] font-semibold text-accent bg-accent/15 hover:bg-accent hover:text-white border border-accent/30 rounded px-1.5 py-0.5 mx-0.5 no-underline transition-all align-baseline cursor-pointer hover:shadow-xs"
                  title={`Buka sumber referensi: ${href || "Web Source"}`}
                >
                  {cleanNumber}
                </a>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors font-medium break-all"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>

      {/* Generated File Download Cards */}
      {generatedFiles.length > 0 && (
        <div className="mt-4 space-y-3">
          {generatedFiles.map((fileMeta, fIdx) => (
            <FileDownloadCard key={fIdx} meta={fileMeta} />
          ))}
        </div>
      )}
    </div>
  );
}
