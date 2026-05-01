# Process

## Roles

- **Product / engineering / sales**: single owner (you), supported by AI tools for execution speed.

## Git workflow

- **`main`**: always deployable or clearly tagged if not; avoid long-lived broken states.
- **Feature branches**: `feature/short-description` or `fix/issue-...`.
- **Pull requests**: use when you want a review checkpoint; optional for solo work but recommended for larger changes.

## How we define work

1. **Problem** and **user** (center operator vs parent).
2. **Acceptance**: what “done” looks like (including mobile check for UI).
3. **Scope boundary**: explicitly what is *not* in the change.

## Quality bar before merge

- Critical paths still work (lead creation, login, dashboard load—adjust to your app).
- No unrelated refactors bundled with the task.
- Update `docs/` when behavior or setup changes.

## Releases

- Tag or note deploy in a simple CHANGELOG or release doc if helpful for clients/demos.
- After deploy: smoke test landing form → CRM row → dashboard count.

## Sales and delivery loop

- Capture **feedback from first customers** in writing (even short bullets) and link to roadmap items.
- Case study pipeline: agree metrics **before** project end when possible.

## Communication with AI (Cursor)

- Prefer prompts that include **goal**, **constraints**, and **files touched**.
- Expect answers in **solution → explanation → next steps** style per project conventions.
