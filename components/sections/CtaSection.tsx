import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";

type CtaSectionProps = {
  data: LandingContent["cta"];
};

/**
 * Conversion-focused CTA block with low-friction action and reassurance.
 */
export function CtaSection({ data }: CtaSectionProps) {
  return (
    <section id="cta" className="py-18 sm:py-22">
      <Container className="border-border/80 rounded-3xl border bg-background p-7 shadow-[0_12px_28px_-24px_black] sm:p-10">
        <div className="max-w-3xl">
          <h2>{data.title}</h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={data.primaryCta.href}
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold shadow-[0_10px_24px_-12px_var(--theme-primary)] hover:bg-primary/92 hover:shadow-[0_14px_26px_-14px_var(--theme-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            {data.primaryCta.label}
          </a>

          {data.secondaryCta ? (
            <a
              href={data.secondaryCta.href}
              className="border-border text-foreground inline-flex items-center justify-center rounded-lg border bg-background px-6 py-3.5 text-sm font-medium hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
              target="_blank"
              rel="noreferrer"
            >
              {data.secondaryCta.label}
            </a>
          ) : null}
        </div>

        {data.secondaryCta?.helper ? (
          <p className="text-muted mt-3.5 text-sm">{data.secondaryCta.helper}</p>
        ) : null}

        <ul className="mt-7 flex flex-wrap gap-2">
          {data.reassurancePoints.map((point) => (
            <li
              key={point}
              className="border-border bg-background text-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
            >
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

