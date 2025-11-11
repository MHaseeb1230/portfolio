import type { Metadata } from "next";
import { Experience } from "@/sections/experience";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Experience — ${siteConfig.name}`,
  description:
    "Explore Muhammad Haseeb’s recent partnerships, leadership roles, and the impact delivered for product teams.",
};

export default function ExperiencePage() {
  return <Experience />;
}

