"use client";

import React, { useState } from "react";
import {
  Clock,
  Check,
  Copy,
  Info,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { DocArticle } from "@/lib/docs-data";
import { KaTeXFormula } from "@/components/ui/KaTeXFormula";

interface DocsContentProps {
  article: DocArticle;
  onNavigateArticle: (articleId: string) => void;
  prevArticle?: DocArticle | null;
  nextArticle?: DocArticle | null;
}

export function DocsContent({
  article,
  onNavigateArticle,
  prevArticle,
  nextArticle,
}: DocsContentProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const renderCallout = (callout: {
    type: "info" | "warning" | "success" | "tip";
    title: string;
    message: string;
  }) => {
    const config = {
      info: {
        bg: "bg-blue-500/10 border-blue-500/20 text-blue-900",
        icon: <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />,
      },
      warning: {
        bg: "bg-amber-500/10 border-amber-500/20 text-amber-950",
        icon: <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />,
      },
      success: {
        bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-950",
        icon: <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />,
      },
      tip: {
        bg: "bg-accent/10 border-accent/25 text-amber-950",
        icon: <Lightbulb size={16} className="text-accent shrink-0 mt-0.5" />,
      },
    }[callout.type];

    return (
      <div className={`my-4 p-4 rounded-xl border ${config.bg} flex items-start gap-3`}>
        {config.icon}
        <div className="flex flex-col gap-1 text-xs">
          <span className="font-bold">{callout.title}</span>
          <p className="leading-relaxed text-text-secondary">{callout.message}</p>
        </div>
      </div>
    );
  };

  return (
    <article className="w-full max-w-4xl mx-auto py-6 sm:py-8 px-4 sm:px-6 md:px-8 space-y-8">
      {/* Header Artikel */}
      <div className="space-y-3 pb-6 border-b border-border/40">
        <div className="flex flex-wrap items-center gap-2">
          {article.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-[11px]">
              {article.badge}
            </span>
          )}
          <div className="flex items-center gap-1 text-[11px] text-text-secondary">
            <Clock size={12} />
            <span>{article.readTime} waktu baca</span>
          </div>
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
          {article.content.lead}
        </p>
      </div>

      {/* Sections Isi Artikel */}
      <div className="space-y-10">
        {article.content.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
            <h2 className="font-display font-bold text-lg sm:text-xl text-text-primary flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-accent inline-block" />
              <span>{section.title}</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
              {section.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Formula Block jika ada */}
            {section.formula && (
              <div className="my-4 p-4 rounded-xl bg-surface border border-border/60 space-y-2">
                <div className="overflow-x-auto py-2">
                  <KaTeXFormula math={section.formula.math} display />
                </div>
                <div className="pt-2 border-t border-border/40 text-[11px] sm:text-xs text-text-secondary flex items-start gap-1.5">
                  <Sparkles size={13} className="text-accent shrink-0 mt-0.5" />
                  <span>{section.formula.explanation}</span>
                </div>
              </div>
            )}

            {/* Table Block jika ada */}
            {section.table && (
              <div className="my-4 overflow-x-auto rounded-xl border border-border/60">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-surface/80 border-b border-border/60">
                    <tr>
                      {section.table.headers.map((h, i) => (
                        <th key={i} className="px-3.5 py-2.5 font-semibold text-text-primary whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-surface/40 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3.5 py-2.5 text-text-secondary align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Code Snippet Block jika ada */}
            {section.codeSnippet && (
              <div className="my-4 rounded-xl border border-border/60 bg-surface/50 overflow-hidden text-xs">
                <div className="px-3.5 py-2 bg-surface border-b border-border/40 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-text-secondary">
                    {section.codeSnippet.caption || section.codeSnippet.language}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(section.codeSnippet!.code, section.id)
                    }
                    className="flex items-center gap-1 text-[11px] text-text-secondary hover:text-text-primary px-2 py-0.5 rounded hover:bg-canvas transition-colors"
                  >
                    {copiedCode === section.id ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Salin Kode</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto font-mono text-[12px] leading-relaxed text-text-primary bg-surface/30">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Callout jika ada */}
            {section.callout && renderCallout(section.callout)}
          </section>
        ))}
      </div>

      {/* Navigasi Artikel Sebelumnya & Selanjutnya */}
      <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevArticle ? (
          <button
            type="button"
            onClick={() => onNavigateArticle(prevArticle.id)}
            className="w-full sm:w-auto p-3.5 rounded-xl border border-border/60 bg-surface hover:border-accent/40 text-left flex items-center gap-3 transition-all group max-w-xs"
          >
            <ArrowLeft size={16} className="text-text-secondary group-hover:-translate-x-1 group-hover:text-accent transition-transform shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] text-text-secondary uppercase tracking-wider">Sebelumnya</span>
              <span className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                {prevArticle.title}
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextArticle && (
          <button
            type="button"
            onClick={() => onNavigateArticle(nextArticle.id)}
            className="w-full sm:w-auto p-3.5 rounded-xl border border-border/60 bg-surface hover:border-accent/40 text-right flex items-center justify-end gap-3 transition-all group max-w-xs ml-auto"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-text-secondary uppercase tracking-wider">Selanjutnya</span>
              <span className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                {nextArticle.title}
              </span>
            </div>
            <ArrowRight size={16} className="text-text-secondary group-hover:translate-x-1 group-hover:text-accent transition-transform shrink-0" />
          </button>
        )}
      </div>
    </article>
  );
}
