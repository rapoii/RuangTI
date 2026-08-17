import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
}

export function Button({
  children,
  className,
  variant = "secondary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100 select-none";

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-sm font-semibold",
    secondary: "bg-surface hover:bg-surface-hover active:bg-surface-active text-text-primary border border-border hover:border-border-strong",
    ghost: "bg-transparent hover:bg-surface-hover active:bg-surface-active text-text-secondary hover:text-text-primary",
    danger: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
    md: "h-9 px-4 text-xs sm:text-sm rounded-xl gap-2",
    lg: "h-11 px-5 text-sm sm:text-base rounded-xl gap-2.5",
    icon: "h-8 w-8 sm:h-9 sm:w-9 rounded-xl flex items-center justify-center p-0",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
