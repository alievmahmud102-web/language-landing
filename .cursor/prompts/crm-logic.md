# CRM logic — prompt template

Use when defining or changing **lead and student lifecycle** in the CRM module. Format: **solution → explanation → next steps**.

## Domain defaults (adapt names to codebase)

- **Lead**: inquiry from landing/form/Telegram; source, UTM, contact, notes, status.
- **Student**: enrolled or active learner; link to lead when converted.
- **Status examples**: `new` → `contacted` → `trial_scheduled` → `trial_done` → `won` / `lost` (tune per sales process).

## Specify

- Mandatory fields vs optional; duplicate detection (phone/email)?
- Loss reasons; reopen rules; assignment (owner per lead).

## Deliverable

1. **State machine** (diagram in text or mermaid): valid transitions only.
2. **Events** for analytics: `lead_created`, `status_changed`, `trial_booked`, etc.
3. **REST** outline: list/filter leads, patch status, add note, convert to student.
4. **Validation rules** and idempotency for webhook-created leads.

## Integrations

- Forms and **Telegram**: map payload → lead; store raw payload for debugging (PII-aware).

## Next steps

- Migration notes if statuses change; backfill strategy for existing rows.
