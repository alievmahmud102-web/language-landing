# Education center website (Next.js foundation)

Production-oriented **starter only**: App Router, TypeScript, Tailwind CSS v4, and a scalable folder layout. No CRM, forms backend, or marketing sections yet.

## Structure

| Path | Role |
|------|------|
| `app/` | Routes, root layout, global CSS import |
| `components/` | UI building blocks (`layout/` today) |
| `config/` | Site metadata and tenant-safe defaults |
| `lib/` | Shared utilities |
| `styles/` | Tailwind entry + `@theme` tokens |

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Docs

Product and process documentation lives in `docs/` (not part of the Next.js bundle).
