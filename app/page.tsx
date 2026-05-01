import type { ComponentType } from "react";
import type { Metadata } from "next";
import { layout, type SectionName } from "@/config/layout";
import { content } from "@/config/content";
import { siteConfig } from "@/config/site";
import {
  AboutSection,
  ContactSection,
  CoursesSection,
  CtaSection,
  HeroSection,
  ReviewsSection,
  TeachersSection,
} from "@/components/sections";

/**
 * Section registry: each key maps a layout token to its reusable component.
 * Layout order is controlled by config/layout.ts, not hardcoded JSX order.
 */
const sectionRendererMap: Record<SectionName, ComponentType> = {
  hero: () => <HeroSection data={content.hero} />,
  courses: () => <CoursesSection data={content.courses} />,
  about: () => <AboutSection data={content.about} />,
  teachers: () => <TeachersSection data={content.teachers} />,
  reviews: () => <ReviewsSection data={content.reviews} />,
  cta: () => <CtaSection data={content.cta} />,
  contact: () => <ContactSection data={content.contact} />,
};

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {layout.map((sectionName) => {
        const Section = sectionRendererMap[sectionName];
        return <Section key={sectionName} />;
      })}
    </>
  );
}