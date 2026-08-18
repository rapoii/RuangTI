"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { CodeBlock } from "./CodeBlock";

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

  const sourceMatch = cleanContent.match(/<!--WEBSOURCES:(.*?)-->/);
  if (sourceMatch) {
    try {
      webSources = JSON.parse(sourceMatch[1]);
      cleanContent = cleanContent.replace(sourceMatch[0], "");
    } catch {
      // ignore
    }
  }

  // Helper untuk mendapatkan favicon/domain
  const getDomain = (urlStr: string) => {
    try {
      return new URL(urlStr).hostname.replace("www.", "");
    } catch {
      return "web";
    }
  };

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-text-primary text-[15px] sm:text-[16px] leading-[1.65]">
      {/* Visual Live Source Carousel / Pills */}
      {webSources.length > 0 && (
        <div className="mb-4 not-prose">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-text-secondary uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{webSources.length} Sumber Web Ditemukan & Dirayapi:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {webSources.map((ws, idx) => (
              <a
                key={idx}
                href={ws.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-surface border border-border hover:border-accent/50 hover:bg-surface-hover text-text-primary transition-all shadow-xs group"
                title={`${ws.title} (${ws.url})`}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(ws.url)}&sz=32`}
                  alt=""
                  className="w-3.5 h-3.5 rounded-xs shrink-0 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <span className="font-medium text-accent text-[11px] font-mono">[{idx + 1}]</span>
                <span className="max-w-[140px] sm:max-w-[200px] truncate text-[12px]">
                  {ws.title || getDomain(ws.url)}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
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
            <h1 className="text-[20px] font-semibold text-text-primary mt-6 mb-3 font-sans leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-[17px] font-semibold text-text-primary mt-5 mb-2 font-sans leading-snug">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-[15px] font-semibold text-text-primary mt-4 mb-2 font-sans">
              {children}
            </h3>
          ),
          em: ({ children }) => <em className="italic text-text-primary/90">{children}</em>,
          strong: ({ children }) => <strong className="font-semibold text-text-primary">{children}</strong>,
          p: ({ children }) => <p className="mb-3.5 last:mb-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-5 mb-3.5 space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-5 mb-3.5 space-y-1">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-accent pl-3.5 py-0.5 my-3.5 text-text-secondary italic">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 border border-border rounded-md">
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
        {cleanContent}
      </ReactMarkdown>
    </div>
  );
}
