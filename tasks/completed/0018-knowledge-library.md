# Commit 0018 — Knowledge Library Foundation

You are working in the Startup OS repository.

## Goal

Create the Knowledge Library foundation for Startup OS in:

`docs/12-knowledge/`

This layer should define how Startup OS companies capture, organize, maintain, retrieve, and reuse knowledge across business, product, engineering, design, marketing, sales, operations, investors, customer success, security/compliance, templates, patterns, and AI-assisted workflows.

The Knowledge Library should not duplicate the operating system docs. It should explain how knowledge is collected, validated, structured, linked, updated, archived, and made useful for humans and AI assistants.

## Branch

Current branch should be:

`feature/0018-knowledge-library`

If the current branch is different, stop and flag it.

## Files to inspect first

Inspect:

- `README.md`
- `docs/00-foundation/FOLDER-STRUCTURE.md`
- `docs/00-foundation/ID-STANDARD.md`
- `docs/00-foundation/METADATA-STANDARD.md`
- `docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md`
- `docs/01-business/`
- `docs/02-product/`
- `docs/03-engineering/`
- `docs/04-ai/`
- `docs/05-design/`
- `docs/06-marketing/`
- `docs/07-sales/`
- `docs/08-investors/`
- `docs/09-operations/`
- `docs/10-templates/`
- `docs/11-patterns/`
- `docs/13-customer-success/`
- `docs/14-security-compliance/`
- `tasks/`

Follow active repository standards.

Use the existing reserved folder:

`docs/12-knowledge/`

Use `DOC-KNOW-001` through `DOC-KNOW-012` unless the active ID standard defines a different Knowledge document prefix. If the standard defines a different prefix, use the active standard and flag the deviation.

## Files to create in `docs/12-knowledge/`

Create these 12 files:

1. `README.md` — Doc ID: `DOC-KNOW-001`
2. `KNOWLEDGE-OPERATING-SYSTEM.md` — Doc ID: `DOC-KNOW-002`
3. `KNOWLEDGE-CAPTURE.md` — Doc ID: `DOC-KNOW-003`
4. `KNOWLEDGE-STRUCTURE.md` — Doc ID: `DOC-KNOW-004`
5. `KNOWLEDGE-VALIDATION.md` — Doc ID: `DOC-KNOW-005`
6. `KNOWLEDGE-OWNERSHIP.md` — Doc ID: `DOC-KNOW-006`
7. `KNOWLEDGE-RETRIEVAL.md` — Doc ID: `DOC-KNOW-007`
8. `KNOWLEDGE-MAINTENANCE.md` — Doc ID: `DOC-KNOW-008`
9. `KNOWLEDGE-ARCHIVING.md` — Doc ID: `DOC-KNOW-009`
10. `AI-READY-KNOWLEDGE.md` — Doc ID: `DOC-KNOW-010`
11. `KNOWLEDGE-QUALITY-CONTROL.md` — Doc ID: `DOC-KNOW-011`
12. `KNOWLEDGE-METRICS.md` — Doc ID: `DOC-KNOW-012`

## Requirements

- Use Markdown.
- Keep everything company-neutral.
- Do not mention AviationHub, BidIgniter, or DisburseCloud.
- Do not invent a specific knowledge base tool, wiki, vector database, AI platform, search tool, documentation platform, CRM, project management system, or cloud provider.
- Explain the difference between:
  - Operating system docs
  - Templates
  - Patterns
  - Knowledge records
  - Decision records
  - Runbooks
  - Examples
  - Archived material
- Each document should include:
  - Purpose
  - When to use
  - Owner
  - Inputs
  - Outputs
  - Required artifacts
  - Review points
  - Examples
  - Anti-patterns
  - Related docs
- Cross-link to related operating system docs, templates, patterns, and AI task workflow docs where appropriate.
- Include guidance for AI assistants using repository knowledge:
  - prefer current active docs
  - cite or reference source docs
  - do not invent missing facts
  - flag stale, conflicting, or unsupported information
  - distinguish facts, assumptions, examples, and decisions
- Update `README.md` and foundation/index files if appropriate.
- Do not remove or rename existing files unless replacing a `.gitkeep` in `docs/12-knowledge/`.
- Validate links.
- Run repository validation if available.
- Archive this task into `tasks/completed/0018-knowledge-library.md`.
- Reset `tasks/NEXT.md` back to the reusable template after completion.

## Commit message

Commit exactly:

`Commit 0018 - Knowledge Library Foundation`

## Commit description

`Add the knowledge management layer: how Startup OS companies capture, structure, validate, maintain, retrieve, archive, and reuse knowledge across teams, documents, patterns, templates, decisions, and AI-assisted workflows.`

## Summary expectations

When done, summarize:

- Files added
- Files updated
- Doc ID prefix used
- Folder used
- Validation result
- Any deviations or assumptions
