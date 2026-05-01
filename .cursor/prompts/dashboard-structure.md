# Dashboard structure — prompt template

Use for **analytics dashboard** for center owners: inquiries, conversion, sources. Format: **solution → explanation → next steps**.

## KPIs (MVP)

- New leads (period), conversion rate (lead → won or trial → enroll—define one primary definition).
- **Sources**: UTM / referrer / manual tag; share of leads per source.
- Funnel counts per stage (optional second chart).
- Response SLA if tracked (time to first contact).

## Ask

- Date range control (7d / 30d / custom)?
- Export CSV needed in MVP?

## Deliverable

1. **Layout**: grid of widgets (order for mobile vs desktop).
2. **Definitions**: exact formulas (SQL-level clarity).
3. **Empty states** and loading skeletons.
4. **Permissions**: who sees org-wide vs only assigned leads.

## Example formula (illustrative)

- `conversion_rate = won_leads / new_leads` in the same period (document if denominator differs).

## Next steps

- Which events must be instrumented first; backlog for cohort / LTV later.
