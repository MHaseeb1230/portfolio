import { SocialLinks } from "./social-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer mt-24">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
              Next engagement window
            </p>
            <p className="text-lg font-semibold">Booking new collaborations from Q1 2026.</p>
            <p className="text-sm text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
              Remote-first, available for onsite intensives in EMEA & North America.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] transition-colors hover:text-accent"
            >
              Start a conversation
            </Link>
          </div>
          <div className="grid gap-6 text-sm text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)] sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                Navigation
              </p>
              <ul className="mt-3 space-y-2">
                <li><Link href="/#hero" className="transition-colors hover:text-accent">Overview</Link></li>
                <li><Link href="/#projects" className="transition-colors hover:text-accent">Projects</Link></li>
                <li><Link href="/#skills" className="transition-colors hover:text-accent">Capabilities</Link></li>
                <li><Link href="/#experience" className="transition-colors hover:text-accent">Experience</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                Connect
              </p>
              <div className="mt-3 space-y-2">
                <SocialLinks className="flex gap-4" />
                <p className="text-xs text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                  Available for consultations, audits, or embedded engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Muhammad Haseeb. All rights reserved.</p>
          <p>Crafted with accessibility, performance, and long-term maintainability in mind.</p>
        </div>
      </div>
    </footer>
  );
}
