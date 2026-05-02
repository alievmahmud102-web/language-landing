"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import type { LandingContent } from "@/config/content";

type ContactSectionProps = {
  data: LandingContent["contact"];
};

/**
 * Low-friction contact form with trust cues and Telegram lead delivery.
 */
export function ContactSection({ data }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const endpoint =
        typeof window !== "undefined"
          ? new URL("/api/telegram", window.location.origin).toString()
          : "/api/telegram";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          age: childAge,
        }),
      });

      const raw = (await response.text()).replace(/^\uFEFF/, "").trim();
      let payload: { ok?: unknown; error?: unknown; code?: unknown };
      try {
        payload = raw ? (JSON.parse(raw) as typeof payload) : {};
      } catch {
        setError(data.form.submitErrorMessage);
        return;
      }

      const success = payload.ok === true;
      if (!response.ok || !success) {
        if (payload.code === "TELEGRAM_FORBIDDEN") {
          setError(data.form.telegramNeedStartHint);
          return;
        }
        const errStr =
          typeof payload.error === "string" ? payload.error.trim() : "";
        const missingEnvOnServer =
          payload.code === "MISSING_TELEGRAM_ENV" ||
          errStr.toLowerCase().includes("not configured for telegram");
        if (missingEnvOnServer) {
          setError(data.form.telegramMissingEnvHint);
          return;
        }
        const apiError = errStr.length > 0 ? errStr : null;
        setError(apiError ?? data.form.submitErrorMessage);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError(data.form.submitErrorMessage);
    } finally {
      setIsLoading(false);
    }
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
                  {error ? (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm leading-relaxed text-foreground"
                    >
                      {error}
                    </p>
                  ) : null}

                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      {data.form.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isLoading}
                      autoComplete="name"
                      placeholder={data.form.namePlaceholder}
                      aria-label={data.form.nameLabel}
                      className="border-border mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="text-sm font-medium">
                      {data.form.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      disabled={isLoading}
                      autoComplete="tel"
                      placeholder={data.form.phonePlaceholder}
                      aria-label={data.form.phoneLabel}
                      className="border-border mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-child-age" className="text-sm font-medium">
                      {data.form.childAgeLabel}
                    </label>
                    <input
                      id="contact-child-age"
                      type="text"
                      name="age"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      disabled={isLoading}
                      placeholder={data.form.childAgePlaceholder}
                      aria-label={data.form.childAgeLabel}
                      className="border-border mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-primary-foreground w-full rounded-lg px-4 py-3.5 text-sm font-semibold shadow-[0_10px_24px_-12px_var(--theme-primary)] hover:bg-primary/92 hover:shadow-[0_14px_26px_-14px_var(--theme-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 disabled:pointer-events-none disabled:opacity-65"
                  >
                    {isLoading ? data.form.submitSendingLabel : data.form.submitLabel}
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
