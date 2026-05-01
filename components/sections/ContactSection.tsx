"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";

type ContactSectionProps = {
  data: LandingContent["contact"];
};

/**
 * Low-friction contact form with trust cues and Telegram fallback.
 */
export function ContactSection({ data }: ContactSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="py-18 sm:pb-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h2>{data.title}</h2>
            <p className="text-muted mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              {data.subtitle}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {data.trustPoints.map((point) => (
                <li
                  key={point}
                  className="border-border bg-background text-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
                >
                  {point}
                </li>
              ))}
            </ul>

            <dl className="mt-8 space-y-3.5 text-sm">
              <div>
                <dt className="text-muted">{data.quickContacts.phoneLabel}</dt>
                <dd className="mt-0.5 font-medium">{data.quickContacts.phone}</dd>
              </div>
              <div>
                <dt className="text-muted">{data.quickContacts.telegramLabel}</dt>
                <dd className="mt-0.5 font-medium">{data.quickContacts.telegram}</dd>
              </div>
              <div>
                <dt className="text-muted">{data.quickContacts.addressLabel}</dt>
                <dd className="mt-0.5 font-medium">{data.quickContacts.address}</dd>
              </div>
              <div>
                <dt className="text-muted">{data.quickContacts.hoursLabel}</dt>
                <dd className="mt-0.5 font-medium">{data.quickContacts.workHours}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="border-border/80 rounded-2xl border bg-background p-6 sm:p-7">
              {isSubmitted ? (
                <p className="bg-secondary/15 text-foreground rounded-lg p-4 text-sm leading-relaxed">
                  {data.form.successMessage}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      {data.form.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={data.form.namePlaceholder}
                      aria-label={data.form.nameLabel}
                      className="border-border mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="text-sm font-medium">
                      {data.form.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={data.form.phonePlaceholder}
                      aria-label={data.form.phoneLabel}
                      className="border-border mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-child-age" className="text-sm font-medium">
                      {data.form.childAgeLabel}
                    </label>
                    <input
                      id="contact-child-age"
                      type="text"
                      placeholder={data.form.childAgePlaceholder}
                      aria-label={data.form.childAgeLabel}
                      className="border-border mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground w-full rounded-lg px-4 py-3.5 text-sm font-semibold shadow-[0_10px_24px_-12px_var(--theme-primary)] hover:bg-primary/92 hover:shadow-[0_14px_26px_-14px_var(--theme-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
                  >
                    {data.form.submitLabel}
                  </button>

                  <p className="text-muted text-xs leading-relaxed">{data.form.disclaimer}</p>
                </form>
              )}

              <a
                href={data.telegramCta.href}
                target="_blank"
                rel="noreferrer"
                className="border-border mt-5 inline-flex w-full items-center justify-center rounded-lg border bg-background px-4 py-3.5 text-sm font-medium hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
              >
                {data.telegramCta.label}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

