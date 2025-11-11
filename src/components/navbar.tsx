"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SocialLinks } from "./social-icons";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Capabilities" },
  { href: "/#assistant", label: "Assistant" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight transition-transform hover:-translate-y-0.5">
          <span className="accent-gradient bg-clip-text text-transparent">Muhammad Haseeb</span>
          <span className="hidden text-xs uppercase tracking-[0.4em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)] sm:inline">
            Product Frontend
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-1 py-1 transition-colors hover:text-accent"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <SocialLinks className="hidden sm:flex" />
          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] transition-colors hover:text-accent lg:inline-flex"
          >
            Let’s talk
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
