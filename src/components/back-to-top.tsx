"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(p);
      setVisible(scrollTop > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed z-[60] group right-0 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity`}
    >
      <button
        type="button"
        aria-label="Back to top"
        onClick={onClick}
        className="relative mr-2 md:mr-1 grid place-items-center size-12 rounded-full text-foreground transition-all hover:-translate-x-0.5 focus:outline-none"
      >
        {/* Progress ring */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full border border-border/60 shadow-sm"
          style={{
            background: `conic-gradient(hsl(var(--accent)) ${progress * 360}deg, hsl(var(--border)) 0deg)`,
          }}
        />
        {/* Inner mask to create ring thickness */}
        <div className="absolute inset-1 rounded-full bg-card" />
        <ArrowUp size={18} className="relative" />
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-2 rounded-md px-2 py-1 text-xs bg-card border border-border/60 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap">
          Back to top
        </span>
      </button>
    </div>
  );
}
