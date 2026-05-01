import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";
import Image from "next/image";

type TeachersSectionProps = {
  data: LandingContent["teachers"];
};

/**
 * Trust-first teachers section with qualifications and specializations.
 */
export function TeachersSection({ data }: TeachersSectionProps) {
  return (
    <section id="teachers" className="py-18 sm:py-22">
      <Container>
        <div className="max-w-3xl">
          <h2>{data.title}</h2>
          <p className="text-muted mt-5 text-base leading-relaxed sm:text-lg">{data.subtitle}</p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((teacher) => (
            <li
              key={teacher.name}
              className="border-border/80 rounded-2xl border bg-background p-6"
            >
              <div className="border-border/80 mb-5 aspect-[4/3] overflow-hidden rounded-xl border bg-background">
                <Image
                  src="/images/teacher-placeholder.svg"
                  alt={teacher.photoAlt}
                  width={640}
                  height={480}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-lg">{teacher.name}</h3>
              <p className="text-muted mt-1.5 text-sm">{teacher.role}</p>

              <ul className="mt-5 space-y-2 text-sm">
                <li>
                  <span className="text-muted">Опыт:</span> {teacher.experience}
                </li>
                <li>
                  <span className="text-muted">Квалификация:</span> {teacher.qualification}
                </li>
                <li>
                  <span className="text-muted">Специализация:</span> {teacher.specialization}
                </li>
              </ul>

              <p className="text-muted mt-5 text-sm leading-relaxed">
                {teacher.trustDescription}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {teacher.certifications.map((certificate) => (
                  <li
                    key={certificate}
                    className="border-border bg-background text-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
                  >
                    {certificate}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

