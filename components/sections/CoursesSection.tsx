import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";
import { cn } from "@/lib/utils";

type CoursesSectionProps = {
  data: LandingContent["courses"];
};

/**
 * Conversion-oriented course grid with clear outcomes for parents.
 * All content is sourced from config/content.ts.
 */
export function CoursesSection({ data }: CoursesSectionProps) {
  return (
    <section id="courses" className="bg-secondary/4 py-18 sm:py-22">
      <Container>
        <div className="max-w-3xl">
          <h2>{data.title}</h2>
          <p className="text-muted mt-5 text-base leading-relaxed sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {data.items.map((course) => (
            <li
              key={course.title}
              className={cn(
                "border-border/80 rounded-2xl border bg-background p-5 sm:p-6",
                course.isFeatured &&
                  "border-primary/60 bg-primary/4 ring-primary/20 ring-1",
              )}
            >
              <div className="flex min-h-8 items-start justify-between gap-3">
                <h3 className="text-lg sm:text-xl">{course.title}</h3>
                {course.highlight ? (
                  <span className="border-primary/25 text-primary rounded-full border px-3 py-1 text-xs font-semibold tracking-wide">
                    {course.highlight}
                  </span>
                ) : null}
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-muted text-[11px] font-semibold tracking-wide uppercase">
                    Кому подходит
                  </p>
                  <p className="mt-1.5 text-sm">{course.audience}</p>
                </div>

                <div>
                  <p className="text-muted text-[11px] font-semibold tracking-wide uppercase">
                    Результат
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed font-medium sm:text-base">
                    {course.result}
                  </p>
                </div>

                <div>
                  <p className="text-muted text-[11px] font-semibold tracking-wide uppercase">
                    Как проходит обучение
                  </p>
                  <p className="text-muted mt-1.5 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="border-border mt-6 space-y-2 border-t pt-4 text-sm">
                <p>
                  <span className="text-muted">Формат:</span> {course.format}
                </p>
                <p>
                  <span className="text-muted">Длительность:</span> {course.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={data.cta.href}
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold shadow-[0_8px_20px_-10px_var(--theme-primary)] hover:bg-primary/92 hover:shadow-[0_12px_24px_-12px_var(--theme-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            {data.cta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

