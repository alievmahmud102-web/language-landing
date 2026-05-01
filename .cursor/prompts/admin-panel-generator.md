# Admin panel generator — prompt template

Use for designing or implementing a **simple admin** for education centers: settings, users, content snippets, feature flags light, integrations. Format: **solution → explanation → next steps**.

## Product context

- Monolith app: **Next.js** frontend + **Node** REST API + **PostgreSQL**.
- Roles: at minimum `owner` / `admin` / `staff` (adjust to repo).

## Ask / specify

- Which entities are editable from admin (courses, schedules, landing blocks, lead statuses)?
- Who may invite users or reset integration tokens?

## Deliverable structure

1. **Information architecture**: sidebar nav map (max 6–7 top items for MVP).
2. **Screens list** with purpose + primary action per screen.
3. **Permissions matrix** (role × action: view / edit / delete).
4. **Audit**: what to log (who changed lead status, who edited prices).
5. **API sketch**: REST resources and main endpoints (no implementation unless asked).

## UX rules

- Russian UI copy; dense but readable tables; filters for lists > ~20 rows.
- Every destructive action: confirm + undo window if feasible.

## Next steps

- Implementation order (P0/P1), and which screen unblocks first sales demo.
