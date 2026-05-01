"use client";

import type { ComponentType } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { layout, type SectionName } from "@/config/layout";
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
 * Dynamic landing renderer based on selected language.
 * Section order still comes from config/layout.ts.
 */
export function LandingPage() {
  const { content } = useLanguage();

  const sectionRendererMap: Record<SectionName, ComponentType> = {
    hero: () => <HeroSection data={content.hero} />,
    courses: () => <CoursesSection data={content.courses} />,
    about: () => <AboutSection data={content.about} />,
    teachers: () => <TeachersSection data={content.teachers} />,
    reviews: () => <ReviewsSection data={content.reviews} />,
    cta: () => <CtaSection data={content.cta} />,
    contact: () => <ContactSection data={content.contact} />,
  };

  return (
    <>
      {layout.map((sectionName) => {
        const Section = sectionRendererMap[sectionName];
        return <Section key={sectionName} />;
      })}
    </>
  );
}

