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

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-text-primary text-[15px] sm:text-[16px] leading-[1.65]">
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
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
