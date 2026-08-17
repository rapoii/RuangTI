"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language?: string;
  value: string;
}

export function CodeBlock({ language, value }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin kode", err);
    }
  };

  const cleanLang = (language || "text").toLowerCase();

  return (
    <div className="relative my-3 rounded-2xl overflow-hidden border border-border/80 bg-[#16181D] text-gray-100 font-mono text-xs sm:text-[13px] shadow-sm select-text">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C1F26] border-b border-border/40 select-none">
        <span className="text-[11px] font-mono text-gray-400 font-medium tracking-wide">
          {cleanLang}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-150"
          aria-label="Salin potongan kode"
        >
          {hasCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Tersalin</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with Smooth Touch Swipe */}
      <div className="overflow-x-auto p-4 leading-relaxed no-scrollbar font-mono">
        <SyntaxHighlighter
          language={cleanLang}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "inherit",
            lineHeight: 1.65,
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-ibm-plex-mono), monospace",
            },
          }}
        >
          {value.replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
