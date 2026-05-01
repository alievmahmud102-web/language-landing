# Audit website — prompt template

Use for a structured **site audit** (landing + public pages), not the admin app unless asked. Format: **solution → explanation → next steps**.

## Checklist areas

1. **Performance**: LCP, CLS, image/font strategy, caching, bundle size (high level).
2. **SEO**: titles, meta, headings, indexability, sitemap/robots, canonicals.
3. **Mobile UX**: tap targets, form usability, readability.
4. **Conversion**: CTA clarity, friction in forms, trust elements, repeated CTAs.
5. **Security (public)**: headers, form abuse, rate limits, exposed env.
6. **Accessibility**: contrast, focus, labels.

## Output format

- Table or bullets: **Issue | Severity (P0–P3) | Effort (S/M/L) | Fix hint**.
- Top **5 quick wins** first.

## Example finding

- **P1 / S**: Hero image 2.4MB WebP uncompressed → serve responsive srcset + compression.

## Next steps

- Ordered backlog linked to metrics (conversion, CWV).
