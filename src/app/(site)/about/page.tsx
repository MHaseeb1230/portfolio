import type { Metadata } from "next";
import { About } from "@/sections/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description:
    "Learn more about Muhammad Haseeb’s approach to frontend engineering, collaborative delivery, and design systems.",
};

export default function AboutPage() {
  return <About />;
}

