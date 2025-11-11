import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description:
    "Case studies showcasing product interfaces, design system builds, and high-impact launches delivered by Muhammad Haseeb.",
};

export default function ProjectsPage() {
  return (
    <Section
      id="projects-index"
      eyebrow="Case studies"
      title="Partnering with founders and product teams to ship better experiences."
      description="A selection of engagements across SaaS, insurance, marketing, and AI-driven products. Each collaboration involved close product strategy alignment, rapid iteration, and continual refinement."
      actions={
        <a
          href="mailto:haseeb262721@gmail.com?subject=Project%20enquiry"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] transition-colors hover:text-accent"
        >
          Share your brief
          <ArrowUpRight size={14} />
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const previewImage = project.images?.[0] ?? "/next.svg";
          return (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-[28px] border border-border/60 surface-panel p-6 transition-all duration-500 hover:border-accent/60 hover:shadow-[0_24px_60px_rgba(14,17,38,0.45)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="tag-chip">
                  {project.tag}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)]">
                  {project.year}
                </span>
              </div>
              <Link href={`/projects/${project.slug}`} className="mt-6 block">
                <div className="relative flex h-40 w-full items-center justify-center">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_70%)] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <div className="relative h-24 w-24 opacity-90 transition duration-500 group-hover:scale-105">
                    <Image
                      src={previewImage}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
              <div className="space-y-3">
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors hover:text-accent"
                  >
                    {project.title}
                    <ArrowUpRight size={16} />
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                  {project.stack.map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-full border border-border/60 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[color:color-mix(in_srgb,var(--foreground)_78%,var(--accent)_22%)] transition-colors hover:text-accent"
                    >
                      Live link
                      <ExternalLink size={14} />
                    </a>
                  ) : null}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[color:color-mix(in_srgb,var(--foreground)_78%,var(--accent)_22%)] transition-colors hover:text-accent"
                  >
                    View case study
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

