import Image from "next/image";
import { Section } from "@/components/section";

const stacks = [
  {
    title: "Core product stack",
    caption: "Production experience shipping performant, resilient applications.",
    skills: [
      { src: "/skills/react.svg", label: "React" },
      { src: "/skills/nextjs.svg", label: "Next.js" },
      { src: "/skills/typescript.svg", label: "TypeScript" },
      { src: "/skills/tailwind.svg", label: "Tailwind CSS" },
    ],
  },
  {
    title: "Frontend foundations",
    caption: "Solid grounding across the browser platform & modern tooling.",
    skills: [
      { src: "/skills/javascript.svg", label: "JavaScript" },
      { src: "/skills/html5.svg", label: "HTML5" },
      { src: "/skills/css3.svg", label: "CSS3" },
      { src: "/skills/git.svg", label: "Git & CI/CD" },
    ],
  },
];

const principles = [
  "Component-driven development & Storybook workflows",
  "Atomic design systems & tokens",
  "Progressive enhancement & accessibility audits",
  "Performance budgets, Core Web Vitals, and profiling",
  "Cross-functional collaboration with design & product",
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Equipping teams with a modern, battle-tested frontend stack."
      description="From initial prototypes to enterprise-scale web apps, I bring a pragmatic mix of engineering craft, design sensibility, and operational rigour. The stack below forms the foundation, supplemented by the right tools per problem space."
    >
      <div className="section-grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <article className="glass-card p-8">
          <h3 className="text-base font-semibold tracking-tight">How I approach the frontend</h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
            My focus is to enable teams to ship quickly without sacrificing quality. I help define architecture,
            evolve design systems, and build workflow automation that shortens the feedback loop between design,
            product, and engineering.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[color:color-mix(in_srgb,var(--muted)_76%,var(--foreground)_24%)]">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-1.5 rounded-full bg-[color:color-mix(in_srgb,var(--accent)_65%,var(--accent-secondary)_35%)]" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </article>
        <div className="grid gap-6">
          {stacks.map((stack) => (
            <section key={stack.title} className="frosted-card p-6">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{stack.title}</h3>
                  <p className="text-sm subtle">{stack.caption}</p>
                </div>
              </header>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stack.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border/70 surface-panel px-4 py-5 text-center transition-all duration-300 hover:border-accent/60 hover:shadow-[0_16px_40px_rgba(18,20,45,0.45)]"
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
