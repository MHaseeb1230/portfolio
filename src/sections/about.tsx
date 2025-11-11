import { Section } from "@/components/section";

const highlights = [
  {
    title: "Design systems & component architecture",
    copy: "Establishing robust UI foundations with scalable tokens, accessibility baked in, and a healthy DX for teams collaborating across product lines.",
  },
  {
    title: "Experience-led delivery",
    copy: "Translating product strategy into interfaces that feel intentional. I prototype interactions, measure UX, and iterate quickly with teams.",
  },
  {
    title: "Engineering with craft",
    copy: "I care about performance budgets, type-safety, testing, and CI/CD. Expect thoughtful pull requests and an obsession with details.",
  },
];

const metrics = [
  { label: "Design systems created", value: "06" },
  { label: "Teams coached & up-skilled", value: "08" },
  { label: "Countries collaborating from", value: "04" },
];

const capabilities = [
  "Design systems & UI engineering",
  "React, Next.js, TypeScript",
  "API design & integration",
  "State machines & data fetching",
  "Accessibility (WCAG 2.2 AA)",
  "Performance optimization & SEO",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="Design-minded frontend engineer aligning pixels with product outcomes."
      description="I thrive in product environments where engineering and design come together. Whether embedded with a startup or partnering on a bespoke build, I collaborate closely across disciplines to simplify complexity and ship considered, resilient interfaces."
    >
      <div className="section-grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10">
        <div className="space-y-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="stat-card">
                <p className="text-3xl font-semibold tracking-tight accent-gradient bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {highlights.map((item) => (
              <article key={item.title} className="card-outline p-6">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_82%,var(--foreground)_18%)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
        <aside className="space-y-5">
          <div className="glass-card p-8">
            <h3 className="text-base font-semibold tracking-tight">Capabilities & ceremonies</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_80%,var(--foreground)_20%)]">
              I embed with teams to drive delivery, facilitate discovery workshops, and mentor engineers on modern frontend
              practices. Expect thoughtful execution, clear communication, and documentation that travels well.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_70%,var(--accent-secondary)_30%)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="frosted-card p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
              Currently collaborating with
            </p>
            <p className="mt-3 text-lg font-semibold">Growth-stage SaaS teams & product-led agencies.</p>
            <p className="mt-2 text-sm subtle">
              Available for select partnerships starting Q1 2026.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
