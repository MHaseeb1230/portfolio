import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject } from "@/data/projects";
import { Section } from "@/components/section";
import { siteConfig } from "@/config/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {
      title: "Project",
      description: "Project case study",
    };
  }

  return {
    title: `${project.title} — Case study`,
    description: project.desc,
    openGraph: {
      title: `${project.title} — Case study`,
      description: project.desc,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  const showcaseImages = project.images ?? [];
  const summary = [
    { label: "Engagement", value: project.role },
    { label: "Sector", value: project.tag },
    { label: "Year", value: project.year },
  ];

  return (
    <div className="space-y-14">
      <Section
        id="project-detail"
        eyebrow="Case study"
        title={project.title}
        description={project.desc}
        actions={
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to all
          </Link>
        }
      >
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)]">
          <span className="tag-chip">{project.tag}</span>
          <span>{project.year}</span>
          <span className="size-1 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_65%,var(--accent-secondary)_35%)]" />
          <span>{project.role}</span>
        </div>
      </Section>

      <div className="container-px">
        <div className="surface-panel grid gap-4 rounded-[28px] border border-border/60 p-6 md:grid-cols-4">
          {summary.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                {item.label}
              </p>
              <p className="text-sm font-semibold tracking-tight text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)]">
                {item.value}
              </p>
            </div>
          ))}
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
              Stack
            </p>
            <p className="text-sm text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)]">
              {project.stack.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="container-px space-y-16">
        {showcaseImages.length > 0 ? (
          <section className="grid gap-4 md:grid-cols-2">
            {showcaseImages.map((src, idx) => (
              <figure
                key={`${src}-${idx}`}
                className="surface-panel relative h-60 overflow-hidden rounded-[26px] border border-border/60 p-6"
              >
                <Image src={src} alt={`${project.title} visual ${idx + 1}`} fill className="object-contain" />
              </figure>
            ))}
          </section>
        ) : null}

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <article className="glass-card space-y-6 p-8">
            <h2 className="text-lg font-semibold tracking-tight">Project overview</h2>
            <p className="text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
              {project.desc}
            </p>
            <p className="text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
              From discovery to delivery, this engagement focused on pairing polished visual design with a robust architecture.
              We iterated on information hierarchy, built responsive layouts, and ensured the experience remained performant
              across devices.
            </p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_18px_42px_rgba(124,58,237,0.35)] transition hover:opacity-90"
              >
                Visit live project
                <ExternalLink size={15} />
              </a>
            ) : null}
          </article>

          <aside className="frosted-card space-y-4 p-6 text-sm text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)]">
                Deliverables
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Frontend architecture planning</li>
                <li>• Component library & design system foundations</li>
                <li>• Responsive UI implementation & performance tuning</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)]">
                Technology
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em]">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-border/60 px-3 py-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

