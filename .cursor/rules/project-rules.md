# Project rules

## Scope and safety

- Do not break working functionality. Prefer small, reversible changes; verify critical paths after edits.
- No drive-by refactors or unrelated cleanups. Every change should map to an explicit task or bugfix.
- Preserve business logic (lead lifecycle, CRM states, conversion events). UI-only work still must respect data contracts and server behavior.

## Code quality

- Write clear, readable code: meaningful names, early returns where they reduce nesting, consistent patterns with the existing codebase.
- Match existing structure in the monorepo (imports, folders, naming). Extend rather than duplicate.

## Language

- **Code** (identifiers, comments in code, commit messages if not specified otherwise): English.
- **End-user UI copy**: Russian (labels, errors shown to operators and parents/leads where applicable).

## Git workflow

- Default branch: `main`.
- Work in `feature/*` (or `fix/*`) branches; merge via PR when collaboration or review is needed; solo work may merge directly if that is the team norm—still keep commits focused.

## Documentation

- When behavior changes, update the relevant doc under `docs/` or inline comments at decision points, not long essays.

## AI assistance (Cursor)

- Prefer **solution → short explanation → next steps** in assistant replies unless the user asks for depth.
- Include concrete examples (snippets, curl, SQL shape) when they reduce ambiguity.
