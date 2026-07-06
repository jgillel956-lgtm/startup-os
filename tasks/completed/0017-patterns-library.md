# Commit 0017 — Patterns Library Foundation

You are working in the Startup OS repository.

## Goal

Create the Patterns Library foundation for Startup OS in:

`docs/11-patterns/`

This layer should define reusable operating patterns that can be applied across business, product, engineering, design, marketing, sales, operations, investors, customer success, security/compliance, templates, and AI task workflows.

Patterns are not full standards and not copy/paste templates. They are reusable approaches for common operating problems.

## Branch

Current branch should be:

`feature/0017-patterns-library`

If the current branch is different, stop and flag it.

## Files to inspect first

Inspect:

- `README.md`
- `docs/00-foundation/FOLDER-STRUCTURE.md`
- `docs/00-foundation/ID-STANDARD.md`
- `docs/00-foundation/METADATA-STANDARD.md`
- `docs/01-business/`
- `docs/02-product/`
- `docs/03-engineering/`
- `docs/05-design/`
- `docs/06-marketing/`
- `docs/07-sales/`
- `docs/08-investors/`
- `docs/09-operations/`
- `docs/10-templates/`
- `docs/13-customer-success/`
- `docs/14-security-compliance/`
- `tasks/`

Follow active repository standards.

Use `DOC-PAT-001` through `DOC-PAT-012` unless the active ID standard defines a different Patterns prefix.

## Files to create in `docs/11-patterns/`

Create these 12 files:

1. `README.md` — Doc ID: `DOC-PAT-001`
2. `PATTERN-LIBRARY-STANDARD.md` — Doc ID: `DOC-PAT-002`
3. `OPERATING-CADENCE-PATTERNS.md` — Doc ID: `DOC-PAT-003`
4. `DECISION-MAKING-PATTERNS.md` — Doc ID: `DOC-PAT-004`
5. `HANDOFF-PATTERNS.md` — Doc ID: `DOC-PAT-005`
6. `REVIEW-GATE-PATTERNS.md` — Doc ID: `DOC-PAT-006`
7. `METRICS-PATTERNS.md` — Doc ID: `DOC-PAT-007`
8. `RISK-AND-ESCALATION-PATTERNS.md` — Doc ID: `DOC-PAT-008`
9. `COMMUNICATION-PATTERNS.md` — Doc ID: `DOC-PAT-009`
10. `FEEDBACK-LOOP-PATTERNS.md` — Doc ID: `DOC-PAT-010`
11. `DOCUMENTATION-PATTERNS.md` — Doc ID: `DOC-PAT-011`
12. `AI-ASSISTED-WORKFLOW-PATTERNS.md` — Doc ID: `DOC-PAT-012`

## Requirements

- Use Markdown.
- Keep everything company-neutral.
- Do not mention AviationHub, BidIgniter, or DisburseCloud.
- Do not invent tools, platforms, CRMs, project management systems, AI products, ticketing systems, or cloud providers.
- Explain the difference between standards, templates, and patterns.
- Each pattern document should include:
  - Purpose
  - When to use
  - Common pattern
  - Inputs
  - Outputs
  - Owner
  - Review points
  - Example use cases
  - Anti-patterns
  - Related docs
- Cross-link to related operating system docs and templates where appropriate.
- Update `README.md` and foundation/index files if appropriate.
- Do not remove or rename existing files unless replacing a `.gitkeep` in `docs/11-patterns/`.
- Validate links.
- Run repository validation if available.
- Archive this task into `tasks/completed/0017-patterns-library.md`.
- Reset `tasks/NEXT.md` back to the reusable template after completion.

## Commit message

Commit exactly:

`Commit 0017 - Patterns Library Foundation`

## Commit description

`Add the reusable patterns layer: how Startup OS companies apply common operating patterns for cadence, decisions, handoffs, review gates, metrics, risks, escalation, communication, feedback loops, documentation, and AI-assisted workflows.`

## Summary expectations

When done, summarize:

- Files added
- Files updated
- Doc ID prefix used
- Folder used
- Validation result
- Any deviations or assumptions
