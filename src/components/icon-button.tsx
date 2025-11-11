import * as React from "react";

type Variant = "solid" | "outline";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function IconButton({ className = "", variant = "solid", children, ...props }: IconButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,58,237,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(8,10,22,0.7)]";
  const styles =
    variant === "solid"
      ? "bg-accent text-white shadow-[0_18px_40px_rgba(124,58,237,0.35)] hover:-translate-y-[2px] hover:opacity-95 active:translate-y-0"
      : "border border-border/70 bg-[rgba(8,10,22,0.35)] text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] hover:-translate-y-[2px] hover:border-accent/60 hover:text-accent active:translate-y-0";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
