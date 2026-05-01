# Frontend rules

## Stack

- **Next.js** (App Router unless project already uses Pages), **React**, TypeScript where the repo uses it.

## UX and performance

- **Mobile-first** responsive layout; touch targets and readable typography on small screens.
- Optimize for **fast first load** and good **Core Web Vitals** (images, fonts, avoid unnecessary client JS).
- Forms: clear validation, accessible error messages (Russian copy for users).

## Structure

- Colocate components with routes or domain folders as established in the monorepo.
- Prefer server components and server actions where appropriate; use client components only when needed (interactivity, browser APIs).

## Data and API

- Call the **REST API** via typed fetch wrappers or a small API layer; handle loading and error states explicitly.
- Do not embed secrets in client code.

## SEO (landing)

- Semantic HTML, meaningful titles and meta descriptions per page, stable URLs.

## Testing and quality

- Follow project test setup if present; at minimum manually verify mobile + one desktop breakpoint for UI changes.
