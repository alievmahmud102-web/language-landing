# Stack

| Layer | Choice | Notes |
|-------|--------|--------|
| Frontend | **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4** | TypeScript; `@theme` in `styles/globals.css` |
| Backend | **Node.js**, **Express** or **NestJS** | Pick one per repo; Nest gives structure for growing modular monolith |
| Database | **PostgreSQL** | Migrations via Prisma, Knex, TypeORM, or Drizzle—follow repo |
| API style | **REST** | JSON; version prefix if public API grows |
| Hosting | **Vercel** (frontend) + **VPS** (API/DB) or combined | Cost and ops tradeoff; document actual choice in `setup.md` |
| Integrations | **Telegram Bot API**, HTTP **webhooks** for forms | Secrets in env only |

## Tooling (typical)

- Package manager: **pnpm** or **npm** (one per monorepo).
- Lint/format: **ESLint** + **Prettier** if configured.

## UI language

- Code and developer docs: **English**.
- User-facing product strings: **Russian**.

## Not in default stack unless needed

- Redis (caching, queues)—add when measured need exists.
- Separate analytics DB—later if volume demands.
