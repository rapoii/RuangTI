"use client";

import { useEffect, useState, useCallback } from "react";
import { Theme } from "@/lib/types";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("ruangti_theme_preference") as "light" | "dark" | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      // Default dark theme
      setTheme("dark");
      applyTheme("dark");
    }
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("ruangti_theme_preference", newTheme);
      applyTheme(newTheme);
      return newTheme;
    });
  }, []);

  return {
    theme,
    toggleTheme,
    mounted,
  };
}
