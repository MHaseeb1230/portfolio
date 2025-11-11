import type { Metadata } from "next";
import { Contact } from "@/sections/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description:
    "Start a collaboration with Muhammad Haseeb. Share project details and request audits, retainers, or bespoke builds.",
};

export default function ContactPage() {
  return <Contact />;
}

