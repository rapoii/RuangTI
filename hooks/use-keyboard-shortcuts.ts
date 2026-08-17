"use client";

import { useEffect } from "react";

interface KeyboardShortcutsOptions {
  onFocusComposer?: () => void;
  onNewChat?: () => void;
  onEscape?: () => void;
}

export function useKeyboardShortcuts({
  onFocusComposer,
  onNewChat,
  onEscape,
}: KeyboardShortcutsOptions) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const activeEl = document.activeElement;
      const isInputActive =
        activeEl?.tagName === "INPUT" ||
        activeEl?.tagName === "TEXTAREA" ||
        (activeEl as HTMLElement)?.isContentEditable;

      // "/" shortcut to focus composer (if not already in input)
      if (e.key === "/" && !isInputActive) {
        e.preventDefault();
        onFocusComposer?.();
        return;
      }

      // Esc shortcut
      if (e.key === "Escape") {
        onEscape?.();
        return;
      }

      // Cmd/Ctrl + Shift + O for new chat
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === "O" || e.key === "o")) {
        e.preventDefault();
        onNewChat?.();
        return;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onFocusComposer, onNewChat, onEscape]);
}
