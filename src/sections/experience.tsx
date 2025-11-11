import { Section } from "@/components/section";

const experiences = [
  {
    role: "Lead Frontend Engineer",
    company: "Independent / Remote",
    timeframe: "2023 — Present",
    summary:
      "Partnering with growth-stage SaaS companies to architect, design, and deliver high-performing web applications and design systems.",
    highlights: [
      "Defined frontend architecture and delivery workflows for multi-tenant SaaS dashboards handling thousands of users.",
      "Implemented multi-brand design systems shared across marketing sites and app surfaces with Storybook & Chromatic.",
      "Led accessibility, performance audits, and mentoring programs improving Core Web Vitals and developer velocity.",
    ],
    stack: ["Next.js", "React Query", "Tailwind", "Vite", "Figma", "Playwright"],
  },
  {
    role: "Senior Frontend Developer",
    company: "IR Solutions",
    timeframe: "2021 — 2023",
    summary:
      "Shipped responsive web platforms for insurance, healthcare, and AI, working closely with designers and backend teams.",
    highlights: [
      "Delivered a quote-comparison platform improving conversion by 34% through UX experiments and performance tuning.",
      "Coordinated with stakeholders to migrate legacy stacks to TypeScript, reducing runtime issues and onboarding friction.",
      "Introduced component governance, linting, and CI pipelines, keeping deployments reliable and predictable.",
    ],
    stack: ["Next.js", "Remix", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance & Agency Collaborations",
    timeframe: "2019 — 2021",
    summary:
      "Designed and developed marketing sites, admin dashboards, and content platforms for agencies and independent founders.",
    highlights: [
      "Crafted interactive storytelling landing pages with advanced animations and localization support.",
      "Integrated CMS-driven content flows (Sanity, Contentful) and improved editorial workflows for clients.",
    ],
    stack: ["React", "Next.js", "Styled Components", "SCSS", "Gatsby"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Delivering modern product experiences with cross-functional teams."
      description="I've supported startups, agencies, and global teams—leading frontend initiatives, pairing with designers, and ensuring releases feel premium from day one. Here’s a snapshot of recent engagements."
    >
      <ol className="relative space-y-8 border-l border-border/60 pl-6">
        {experiences.map((item, index) => (
          <li key={item.role} className="relative pl-6">
            <span className="absolute left-[-12px] top-2 inline-flex size-3 rounded-full border border-accent/70 bg-[color:color-mix(in_srgb,var(--accent)_50%,var(--accent-secondary)_50%)] shadow-[0_0_12px_rgba(124,58,237,0.45)]" />
            <article className="frosted-card border border-transparent p-6 transition-all duration-500 hover:border-accent/50">
              <header className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                  <p className="text-sm text-[color:color-mix(in_srgb,var(--muted)_72%,var(--foreground)_28%)]">{item.company}</p>
                </div>
                <span className="pill text-[10px] uppercase tracking-[0.3em]">
                  {item.timeframe}
                </span>
              </header>
              <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
                {item.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-flex size-1.5 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_60%,var(--accent-secondary)_40%)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-[10px] tracking-[0.22em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="absolute right-6 top-6 text-xs font-semibold uppercase tracking-[0.24em] text-[color:color-mix(in_srgb,var(--muted)_65%,var(--foreground)_35%)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
