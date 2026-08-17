"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropdownItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  active?: boolean;
  danger?: boolean;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (id: string) => void;
  align?: "left" | "right";
  className?: string;
  widthClass?: string;
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  align = "left",
  className,
  widthClass = "w-56",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0}>
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute z-50 mt-1.5 rounded-xl bg-surface border border-border/80 shadow-floating py-1.5 focus:outline-none backdrop-blur-xl",
              widthClass,
              align === "right" ? "right-0" : "left-0"
            )}
          >
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-3.5 py-2.5 text-xs sm:text-sm flex items-start gap-2.5 transition-colors rounded-lg mx-1 w-[calc(100%-8px)]",
                  item.active
                    ? "bg-accent-subtle text-accent font-medium"
                    : item.danger
                    ? "text-red-500 hover:bg-red-500/10"
                    : "text-text-primary hover:bg-surface-hover active:bg-surface-active"
                )}
              >
                {item.icon && <span className="mt-0.5 shrink-0 opacity-80">{item.icon}</span>}
                <div className="flex-1 min-w-0">
                  <div className="truncate font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-[11px] text-text-secondary truncate mt-0.5 leading-tight opacity-75">
                      {item.description}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
