import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";

type ReviewsSectionProps = {
  data: LandingContent["reviews"];
};

/**
 * Parent-focused testimonials with concrete outcomes and time context.
 */
export function ReviewsSection({ data }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="bg-secondary/4 py-18 sm:py-22">
      <Container>
        <div className="max-w-3xl">
          <h2>{data.title}</h2>
          <p className="text-muted mt-5 text-base leading-relaxed sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {data.items.map((review) => (
            <li
              key={`${review.parentName}-${review.course}`}
              className="border-border/80 rounded-2xl border bg-background p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">
                    {review.parentName}, родитель
                  </p>
                  <p className="text-muted mt-1 text-xs">
                    Ребенок: {review.childAge}
                  </p>
                </div>
                {review.rating ? (
                  <p className="text-primary text-base" aria-label={`Рейтинг ${review.rating} из 5`}>
                    {"★".repeat(review.rating)}
                  </p>
                ) : null}
              </div>

              <p className="text-muted mt-4 text-xs font-semibold tracking-wide uppercase">
                Курс и срок
              </p>
              <p className="mt-1.5 text-sm">
                {review.course} · {review.timeframe}
              </p>

              <p className="text-muted mt-4 text-xs font-semibold tracking-wide uppercase">
                Результат
              </p>
              <p className="text-primary mt-1.5 text-sm leading-relaxed font-semibold">
                {review.result}
              </p>

              <ul className="mt-4 space-y-2 text-xs">
                {review.metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="border-border/85 bg-background rounded-md border px-3 py-2 leading-relaxed"
                  >
                    <span className="text-muted">{metric.label}:</span>{" "}
                    <span className="font-medium">{metric.before}</span>
                    <span className="text-muted"> → </span>
                    <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 font-semibold">
                      {metric.after}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-muted mt-4 text-xs font-semibold tracking-wide uppercase">
                Что отмечает родитель
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">{review.story}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

