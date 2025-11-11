"use client";

import { EmblaCarousel } from "@/components/embla-carousel";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects as data } from "@/data/projects";
import { Section } from "@/components/section";

const projects = data.slice(0, 6); // show top 6 on home
const slides = [...projects, ...projects]; // Duplicate for smooth loop

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Case studies"
      title="Selected partnerships and outcomes."
      description="I collaborate from discovery through delivery—integrating with existing teams or leading the frontend track. Each engagement has unique needs; here are a few representative launches."
      actions={
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)] hover:text-accent transition-colors focus-ring"
        >
          View all projects
          <ArrowUpRight size={16} />
        </Link>
      }
    >
      <EmblaCarousel
        className="pt-3"
        options={{ align: "start", loop: true, dragFree: true }}
        hideArrows
        autoplay
        autoplayInterval={3200}
        hideDots
      >
        {slides.map((project, index) => {
          const previewImage = project.images?.[0] ?? "/next.svg";
          return (
            <motion.article
              key={`${project.slug}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="relative mr-6 w-[320px] max-w-full overflow-hidden rounded-[28px] border border-border/60 surface-panel transition-all duration-500 hover:border-accent/55 hover:shadow-[0_18px_48px_rgba(14,17,38,0.45)] md:w-[360px]"
            >
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "linear-gradient(140deg, rgba(124,58,237,0.35) 0%, rgba(17,25,61,0.15) 50%, rgba(34,211,238,0.35) 100%)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative h-24 w-24 opacity-90">
                    <Image
                      src={previewImage}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="tag-chip absolute bottom-4 left-4">
                  {project.tag}
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_76%,var(--foreground)_24%)]">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                  <span>{project.year}</span>
                  <span className="size-1 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_65%,var(--accent-secondary)_35%)]" />
                  <span>{project.stack.slice(0, 3).join(" · ")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-transparent px-0 py-0 font-medium text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] hover:text-accent transition-colors"
                    >
                      Live site
                      <ExternalLink size={14} />
                    </a>
                  ) : null}
                  <span className="text-[color:color-mix(in_srgb,var(--muted)_70%,transparent_30%)]">/</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent px-0 py-0 font-medium text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] hover:text-accent transition-colors"
                  >
                    Case study
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </EmblaCarousel>
    </Section>
  );
}

