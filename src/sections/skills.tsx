import Image from "next/image";
import { Section } from "@/components/section";

const capabilityAreas = [
  {
    title: "Architecture & systems",
    summary:
      "Design systems that scale—component tokens, accessibility baked-in, and patterns that empower product teams without sacrificing craft.",
    bullets: [
      "Design system governance & Storybook pipelines",
      "Accessibility-first workflows with automated audits",
      "Performance budgets, profiling, and Core Web Vitals monitoring",
    ],
  },
  {
    title: "Product delivery",
    summary:
      "Partnering with product and design from discovery → launch. I translate strategy into UI flows, iterate fast, and keep stakeholders in sync.",
    bullets: [
      "Rapid hypothesis-driven prototyping",
      "Cross-functional rituals and design critiques",
      "Data-informed iteration loops & UX instrumentation",
    ],
  },
  {
    title: "Operations & quality",
    summary:
      "CI/CD discipline, automated visual regression testing, and documentation that scales with the org—so teams keep shipping with confidence.",
    bullets: [
      "Playwright & visual regression automation",
      "Release workflows with typed contracts & lint rules",
      "Living documentation and onboarding playbooks",
    ],
  },
];

const toolchain = [
  {
    title: "Core product stack",
    caption: "SPA & SSR experiences optimised for latency, SEO, and maintainability.",
    skills: [
      { src: "/skills/nextjs.svg", label: "Next.js" },
      { src: "/skills/react.svg", label: "React" },
      { src: "/skills/typescript.svg", label: "TypeScript" },
      { src: "/skills/tailwind.svg", label: "Tailwind" },
    ],
  },
  {
    title: "Experience craft",
    caption: "Design system thinking with motion & interaction as first-class citizens.",
    skills: [
      { src: "/skills/css3.svg", label: "Advanced CSS" },
      { src: "/skills/javascript.svg", label: "Animations" },
      { src: "/skills/git.svg", label: "Storybook" },
      { src: "/skills/html5.svg", label: "Accessibility" },
    ],
  },
];

const outcomeMetrics = [
  { value: "30%", label: "faster delivery after systemising UI kits" },
  { value: "95%", label: "Lighthouse accessibility baseline across launches" },
  { value: "∞", label: "curiosity for better product/engineering handshakes" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Equipping teams with a modern, battle-tested frontend stack."
      description="A blend of architecture, experience design, and operational rigour. I bring the tooling, patterns, and collaboration habits that help product teams move fast without breaking craft."
    >
      <div className="section-grid gap-10">
        <article className="glass-card p-8 space-y-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight">North-star outcomes</h3>
            <span className="badge-soft">Craft & velocity</span>
          </div>
          <p className="text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
            Reliable delivery isn’t just about the stack. It’s the rituals, automation, and shared language that keep teams
            aligned. I coach squads on architecture decisions, codify design patterns, and build safeguards so product iterations
            stay fast, accessible, and maintainable.
          </p>
          <div className="info-grid">
            {outcomeMetrics.map((metric) => (
              <div key={metric.label} className="stat-card hover:translate-y-0">
                <p className="text-xl font-semibold tracking-tight accent-gradient bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="info-grid">
          {capabilityAreas.map((area) => (
            <section key={area.title} className="surface-panel border border-border/60 rounded-[24px] p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{area.title}</h3>
                <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--muted)_76%,var(--foreground)_24%)]">
                  {area.summary}
                </p>
              </div>
              <ul className="space-y-3 text-sm text-[color:color-mix(in_srgb,var(--muted)_74%,var(--foreground)_26%)]">
                {area.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex size-1.5 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_65%,var(--accent-secondary)_35%)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {toolchain.map((group) => (
            <section key={group.title} className="frosted-card p-6">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                  <p className="text-sm subtle">{group.caption}</p>
                </div>
              </header>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border/70 surface-panel px-4 py-5 text-center transition-all duration-300 hover:border-accent/60 hover:shadow-[0_18px_48px_rgba(18,20,45,0.45)]"
                    role="figure"
                    aria-label={skill.label}
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-[rgba(124,58,237,0.12)]">
                      <Image
                        src={skill.src}
                        alt={skill.label}
                        width={30}
                        height={30}
                        className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </span>
                    <p className="text-xs font-medium tracking-[0.12em] uppercase text-[color:color-mix(in_srgb,var(--muted)_70%,var(--foreground)_30%)]">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
