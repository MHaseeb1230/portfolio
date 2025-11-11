"use client";

import { IconButton } from "@/components/icon-button";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Image from "next/image";
import { SocialLinks } from "@/components/social-icons";
import { Section } from "@/components/section";

const stats = [
  { value: "20+", label: "Commercial launches" },
  { value: "4yrs", label: "Experience in scaling teams" },
  { value: "98%", label: "Client satisfaction" },
];

export function Hero() {
  return (
    <Section
      id="hero"
      className="pt-28"
      containerClassName="relative isolate grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[40px]" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124,58,237,0.55), rgba(14,165,233,0.15) 55%, transparent 70%)",
          }}
        />
      </div>

      <div className="order-2 space-y-6 md:order-none">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45 }}
          className="pill text-xs"
        >
          Frontend Lead · Next.js Specialist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="heading-xl font-semibold leading-tight tracking-[-0.04em]"
        >
          Working with founders & teams to ship polished, resilient web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="subtle max-w-xl text-base leading-relaxed"
        >
          I partner with product and engineering teams to design and build robust React/Next.js applications. From
          design systems to high-traffic launches, I focus on scalability, accessibility, and a meticulous experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap items-center gap-3"
        >
          <IconButton
            className="focus-ring"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>View Signature Work</span>
            <ArrowRight size={16} />
          </IconButton>

          <IconButton
            className="focus-ring"
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Schedule a call</span>
            <Mail size={16} />
          </IconButton>

          <a
            href="https://drive.google.com/file/d/1kwmnV4WbzJC0Kw3K_Resumelink/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm subtle hover:text-accent transition-colors focus-ring"
          >
            <FileText size={16} />
            Download résumé
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <SocialLinks className="mt-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="grid gap-3 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="text-2xl font-semibold accent-gradient bg-clip-text text-transparent">{stat.value}</div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="order-1 relative mx-auto w-full max-w-[420px] md:order-none md:max-w-[480px]"
      >
        <div className="glass-card relative overflow-hidden rounded-[36px] px-6 pb-8 pt-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_55%)]" />
          <div className="relative mx-auto size-[240px] overflow-hidden rounded-[32px] border border-border/70">
            <Image
              src="/img/haseeb.png"
              alt="Muhammad Haseeb portrait"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 768px) 35vw, 70vw"
            />
          </div>
          <div className="relative mt-6 space-y-2 text-center text-sm">
            <p className="font-medium text-[0.95rem] tracking-tight">Muhammad Haseeb</p>
            <p className="subtle text-xs uppercase tracking-[0.25em]">Frontend Architect</p>
            <p className="subtle text-xs">
              Lahore, PK · Open to global remote collaboration
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
