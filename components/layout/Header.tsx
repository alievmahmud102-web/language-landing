"use client";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { siteConfig } from "@/config/site";

/**
 * Top bar placeholder — replace with nav, logo, and CTA in a later milestone.
 */
export function Header() {
  const { lang, setLang, locales } = useLanguage();

  return (
    <header className="border-border/80 bg-background/96 supports-[backdrop-filter]:bg-background/88 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <span className="text-foreground text-base font-semibold tracking-tight">
          {siteConfig.name}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-muted text-sm">
            {siteConfig.labels.headerPlaceholder[lang]}
          </span>
          <div className="border-border inline-flex overflow-hidden rounded-md border">
            {locales.map((locale) => (
              <button
                key={locale}
                type="button"
                onClick={() => setLang(locale)}
                className={`px-2.5 py-1 text-xs font-semibold uppercase ${
                  lang === locale
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted hover:bg-background/70"
                }`}
                aria-pressed={lang === locale}
                aria-label={`Switch language to ${locale.toUpperCase()}`}
              >
                {locale}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
