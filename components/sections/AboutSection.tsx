import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";

type AboutSectionProps = {
  data: LandingContent["about"];
};

/**
 * Trust-focused about section for parent confidence and credibility.
 */
export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-18 sm:py-22">
      <Container>
        <div className="max-w-3xl">
          <h2>{data.title}</h2>
          <p className="text-muted mt-5 text-base leading-relaxed sm:text-lg">
            {data.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {data.advantages.map((item) => (
            <li
              key={item.title}
              className="border-border/80 rounded-2xl border bg-background p-6"
            >
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-muted mt-2.5 text-sm leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-7 flex flex-wrap gap-2">
          {data.trustBadges.map((badge) => (
            <li
              key={badge}
              className="border-border bg-background text-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
            >
              {badge}
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {data.stats.map((stat) => (
            <li
              key={stat.label}
              className="border-border/80 rounded-xl border bg-background p-5"
            >
              <p className="text-primary text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="text-muted mt-1 text-sm">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

