"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "@/components/section";
import { Mail, MessageCircle, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message is too short"),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(ContactSchema) });

  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit(values: ContactValues) {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to send");
      setStatus({ ok: true, msg: "Thanks! I will get back to you soon." });
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setStatus({ ok: false, msg: message });
    }
  }

  const contactDetails = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "haseeb262721@gmail.com",
      href: "mailto:haseeb262721@gmail.com",
    },
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp",
      value: "+92 313 402 7332",
      href: "https://wa.me/923134027332",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Lahore, Pakistan · Available remote",
    },
    {
      icon: <Clock size={18} />,
      label: "Office hours",
      value: "Mon–Fri · 10:00–18:00 PKT (flexible for global teams)",
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Collaboration"
      title="Let’s build a polished product experience together."
      description="Share the context, ambitions, and timelines. I typically respond within one business day and can provide an audit, proposal, or capabilities deck tailored to your team."
    >
      <div className="section-grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
        <aside className="space-y-6">
          <div className="glass-card p-8">
            <p className="text-sm leading-relaxed text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
              Whether you need a partner on a greenfield build, support scaling a design system, or a focused
              audit of the existing experience, I approach each engagement with clarity, craft, and pragmatic execution.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-3">
                  <span className="mt-[2px] inline-flex size-9 items-center justify-center rounded-full bg-[rgba(124,58,237,0.12)] text-[color:color-mix(in_srgb,var(--accent)_70%,var(--accent-secondary)_30%)]">
                    {detail.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm font-medium tracking-tight text-[color:color-mix(in_srgb,var(--foreground)_80%,var(--accent)_20%)] transition-colors hover:text-accent"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-[color:color-mix(in_srgb,var(--muted)_78%,var(--foreground)_22%)]">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="frosted-card p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
              Typical engagements
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[color:color-mix(in_srgb,var(--muted)_80%,var(--foreground)_20%)]">
              <li>• Design system & UI engineering leadership</li>
              <li>• End-to-end marketing ↔ product experience builds</li>
              <li>• Frontend architecture audits & roadmap definition</li>
            </ul>
          </div>
        </aside>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-5 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="How should I address you?"
                className="mt-2 w-full rounded-2xl input-surface px-4 py-3 text-sm"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-2xl input-surface px-4 py-3 text-sm"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-[color:color-mix(in_srgb,var(--muted)_75%,var(--foreground)_25%)]">
              Project summary
            </label>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Share the vision, timelines, and where you need support…"
              className="mt-2 w-full resize-y rounded-2xl input-surface px-4 py-3 text-sm"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-[0_16px_40px_rgba(124,58,237,0.35)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>

          {status && (
            <p
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                status.ok
                  ? "bg-[rgba(34,197,94,0.12)] text-[rgb(50,205,109)]"
                  : "bg-[rgba(214,76,95,0.12)] text-[rgb(244,114,182)]"
              }`}
            >
              {status.ok ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
