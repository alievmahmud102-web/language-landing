"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { siteConfig } from "@/config/site";

/**
 * Footer placeholder — legal links, contacts, and socials go here later.
 */
export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/80 text-muted mt-auto border-t py-10 text-sm">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}.
        </p>
        <p className="text-xs">{siteConfig.labels.footerPlaceholder[lang]}</p>
      </Container>
    </footer>
  );
}
