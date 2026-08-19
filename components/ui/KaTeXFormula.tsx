"use client";

import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface KaTeXFormulaProps {
  math: string;
  className?: string;
  display?: boolean;
}

export function KaTeXFormula({
  math,
  className = "",
  display = false,
}: KaTeXFormulaProps) {
  try {
    const html = katex.renderToString(math, {
      displayMode: display,
      throwOnError: false,
    });

    return (
      <span
        className={`inline-block font-normal ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    return <span className={`font-mono ${className}`}>{math}</span>;
  }
}
