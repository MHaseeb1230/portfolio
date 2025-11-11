export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  role: string;
  desc: string;
  stack: string[];
  link?: string;
  repo?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "ir-solutions",
    title: "IR Solutions",
    tag: "Company Website",
    year: "2024",
    role: "Frontend Developer",
    desc: "Corporate website with clean UX, fast performance and contact flows.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    link: "https://www.irsolutions.tech/",
    images: ["/globe.svg"],
  },
  {
    slug: "bsi-health-insurance",
    title: "BSI Health Insurance",
    tag: "Health Insurance",
    year: "2024",
    role: "Frontend Developer",
    desc: "Responsive quote flow, plan comparison and policy details.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://bsi.instlytechnologies.com/get-quote#",
    images: ["/file.svg"],
  },
  {
    slug: "stellar-ai",
    title: "Stellar AI",
    tag: "Voice Assistant",
    year: "2023",
    role: "Frontend Developer",
    desc: "AI-powered assistant UI with conversational flows and auth.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://askstellarai.com/",
    images: ["/next.svg"],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    tag: "System Admin",
    year: "2023",
    role: "Frontend Developer",
    desc: "Analytics, tables, filters, and role-based modules.",
    stack: ["React", "TypeScript", "Tailwind", "Chart.js"],
    link: "https://mosaic.cruip.com/",
    images: ["/window.svg"],
  },
  // Additional showcase projects (realistic style)
  {
    slug: "ecommerce-storefront",
    title: "E‑commerce Storefront",
    tag: "Retail",
    year: "2022",
    role: "Frontend Developer",
    desc: "Product listings, cart, checkout, and order tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    images: ["/next.svg"],
  },
  {
    slug: "saas-landing",
    title: "SaaS Landing Page",
    tag: "Marketing",
    year: "2022",
    role: "Frontend Developer",
    desc: "High-converting landing with pricing, FAQs and contact form.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    images: ["/globe.svg"],
  },
  {
    slug: "portfolio-template",
    title: "Developer Portfolio",
    tag: "Personal",
    year: "2021",
    role: "Frontend Developer",
    desc: "Multi-page portfolio with projects, blog, and contact.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    images: ["/file.svg"],
  },
  {
    slug: "blog-platform",
    title: "Blog Platform UI",
    tag: "Content",
    year: "2021",
    role: "Frontend Developer",
    desc: "MDX posts, categories, search and author pages.",
    stack: ["Next.js", "MDX", "Tailwind"],
    images: ["/window.svg"],
  },
  {
    slug: "events-portal",
    title: "Events & Tickets",
    tag: "Events",
    year: "2020",
    role: "Frontend Developer",
    desc: "Events listing, seat selection, checkout and confirmations.",
    stack: ["React", "TypeScript", "Tailwind"],
    images: ["/globe.svg"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
