# Setup

> The Next.js marketing site lives at the **repository root** (`app/`, `components/`, etc.). A separate API app may be added later (e.g. under `apps/api`).

## Prerequisites

- **Node.js** LTS (e.g. 20.x or 22.x—pin in `.nvmrc` or `engines` when added).
- **PostgreSQL** 15+ locally or via Docker (only when the API is introduced).
- **Git**.

## Layout (current)

```text
app/            # Next.js App Router
components/
config/
lib/
styles/
public/
```

## Environment variables

Create `.env.local` (web) and `.env` (api) as required—**never commit secrets**.

Typical keys (names illustrative):

- `DATABASE_URL` — Postgres connection string.
- `SESSION_SECRET` or `JWT_*` — per auth approach.
- `TELEGRAM_BOT_TOKEN` — if using Telegram.
- `PUBLIC_APP_URL` — canonical site URL for links and redirects.

Document real variables in a root `.env.example` when the repo is initialized.

## Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` and `npm run lint` before shipping.

Expected: web on `http://localhost:3000`, API on port defined in repo (e.g. `4000`).

## Database

```bash
# Example after tooling is chosen
npm run db:migrate
```

## Common issues

- **CORS**: API must allow the Next.js origin in dev.
- **HTTPS webhooks**: use a tunnel (e.g. ngrok) for local Telegram/form testing.
- **Timezone**: store timestamps in UTC; display in org timezone when added.

## Definition of “ready to demo”

- Seed or script creates a demo org + user.
- Submitting the landing form creates a visible lead and dashboard movement.
