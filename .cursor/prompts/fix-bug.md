# Fix bug — prompt template

Use when debugging production or dev issues. Format: **solution → explanation → next steps**.

## Provide

- Expected vs actual behavior.
- Steps to reproduce (numbered), environment (browser, OS, role).
- Recent changes or deploy window if known.
- Logs / screenshots / request id (no secrets).

## Workflow for the assistant

1. **Hypothesis** list (max 3), ordered by likelihood.
2. **Smallest fix** that restores correctness without scope creep.
3. **Regression check**: what else to verify (mobile, API contract).

## Example snippet request

> “PATCH `/api/v1/leads/:id` returns 500 when `source` is null; Postgres NOT NULL constraint.”

## Guardrails

- Do not refactor unrelated modules.
- Add a test or a one-line guard only if the project already uses that pattern.

## Next steps

- If root cause is data: migration or one-off script note; if product: ticket for follow-up UX.
