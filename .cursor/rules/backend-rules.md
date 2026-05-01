# Backend rules

## Stack

- **Node.js** with **Express** or **NestJS** (match what the repo uses; do not introduce a second framework without a task).
- **PostgreSQL** for persistence; use migrations for schema changes.

## Architecture

- **Modular monolith**: clear module boundaries (e.g. leads, students, analytics, integrations), **REST** JSON API, version or prefix routes consistently (`/api/v1/...` if adopted).

## Security

- **Authentication and authorization** on protected routes; never trust client-only checks.
- Validate all inputs (body, query, params); return consistent error shapes without leaking stack traces in production.
- Rate-limit sensitive endpoints (auth, public forms) where applicable.

## Data and business logic

- Model **leads**, **students**, **applications**, and **conversion events** explicitly; state transitions should be documented or obvious from code.
- Use transactions when multiple rows must stay consistent.

## Integrations

- **Telegram**, **web forms**: isolate in an `integrations` (or similar) module; retries and idempotency for webhooks where relevant.

## Observability

- Structured logs for important actions (lead created, status changed); avoid logging PII at debug level in shared logs.
