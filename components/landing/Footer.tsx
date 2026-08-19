"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/30 py-4 sm:py-5 px-4 text-center">
      <p className="text-[11px] text-text-secondary/70">
        © {new Date().getFullYear()} RuangTI. All rights reserved. Dikembangkan oleh rapoi.
      </p>
    </footer>
  );
}
