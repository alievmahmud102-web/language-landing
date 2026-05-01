import { Container } from "@/components/layout";
import type { HeroContent } from "@/config/content";
import Image from "next/image";

type HeroSectionProps = {
  data: HeroContent;
};

/**
 * Premium, conversion-focused hero driven entirely by config content.
 */
export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="hero" className="py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm">
              {data.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>

            <p className="text-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-[1.1rem]">
              {data.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={data.primaryCta.href}
                className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold shadow-[0_8px_20px_-10px_var(--theme-primary)] hover:bg-primary/92 hover:shadow-[0_12px_24px_-12px_var(--theme-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
              >
                {data.primaryCta.label}
              </a>
              <a
                href={data.secondaryCta.href}
                className="border-border text-foreground inline-flex items-center justify-center rounded-lg border bg-background px-6 py-3.5 text-sm font-medium hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
                target="_blank"
                rel="noreferrer"
              >
                {data.secondaryCta.label}
              </a>
            </div>

            <p className="text-muted mt-3 text-xs sm:text-sm">{data.secondaryCta.helper}</p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {data.trustStats.map((item) => (
                <li key={item.label} className="border-border/80 rounded-xl border bg-background p-4">
                  <p className="text-primary text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                    {item.value}
                  </p>
                  <p className="text-muted mt-1.5 text-xs leading-relaxed sm:text-sm">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="border-border/80 rounded-2xl border bg-background p-6 sm:p-7">
              <div className="border-border/80 mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background">
                <Image
                  src="/images/hero-placeholder.svg"
                  alt={data.visual.imageAlt}
                  width={960}
                  height={720}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-2xl tracking-tight">{data.visual.title}</h3>
              <p className="text-muted mt-2.5 text-sm leading-relaxed sm:text-base">
                {data.visual.subtitle}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {data.trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="border-border bg-background text-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-transparent" aria-hidden="true" />
      </Container>
    </section>
  );
}

