# Architecture

## Pattern

- **Modular monolith**: one deployable backend with **internal modules** (by folder or Nest modules) instead of premature microservices.
- **REST** over HTTP/JSON; consistent error format and status codes.

## Suggested module boundaries

| Module | Owns |
|--------|------|
| `auth` | Sessions or JWT, passwords, org membership, roles |
| `organizations` | Center profile, settings, billing hooks (future) |
| `leads` | Inquiry lifecycle, notes, assignment, source fields |
| `students` | Enrolled learners; optional link `leadId` |
| `analytics` | Read models or queries aggregating events / lead history |
| `integrations` | Telegram adapter, form webhooks, signature verification |
| `admin` | Cross-cutting admin operations or delegates to domain services |

## Frontend (Next.js)

- **App Router** recommended for new work unless the repo already standardized on Pages.
- **Route groups**: `(public)` landing, `(app)` authenticated CRM/dashboard/admin.
- Shared UI primitives in a `components/` or `ui/` library folder.

## Data

- **PostgreSQL** as source of truth.
- **Migrations** required for schema changes; no manual prod edits without a migration trail.

## Cross-cutting

- **Validation** at API boundary (Zod/Joi/class-validator—match repo).
- **Logging**: structured, correlation id per request when feasible.
- **Idempotency** for webhook handlers where duplicate delivery is possible.

## What we avoid (for now)

- Splitting into many services before team size or load requires it.
- GraphQL unless a concrete need appears.

## Diagram

See `docs/system.md` for a high-level flowchart.
