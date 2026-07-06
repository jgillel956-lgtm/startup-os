# Commit 0019 — Archive & Retention Foundation

You are working in the Startup OS repository.

## Goal

Create the Archive & Retention foundation for Startup OS in:

`docs/99-archive/`

This layer should define how Startup OS companies retire, archive, preserve, reference, and review outdated or superseded material without losing important history.

The archive should not become a dumping ground. It should provide a controlled place for inactive, superseded, historical, deprecated, or reference-only material.

## Branch

Current branch should be:

`feature/0019-archive-retention`

If the current branch is different, stop and flag it.

## Files to inspect first

Inspect:

- `README.md`
- `docs/00-foundation/FOLDER-STRUCTURE.md`
- `docs/00-foundation/ID-STANDARD.md`
- `docs/00-foundation/METADATA-STANDARD.md`
- `docs/12-knowledge/`
- `docs/11-patterns/`
- `docs/10-templates/`
- `docs/99-archive/`
- `tasks/`

Follow active repository standards.

Use the existing reserved folder:

`docs/99-archive/`

Use `DOC-ARCH-001` through `DOC-ARCH-012` unless the active ID standard defines a different Archive document prefix. If the standard defines a different prefix, use the active standard and flag the deviation.

## Files to create in `docs/99-archive/`

Create these files:

1. `README.md` — Doc ID: `DOC-ARCH-001`
2. `ARCHIVE-OPERATING-STANDARD.md` — Doc ID: `DOC-ARCH-002`
3. `DOCUMENT-RETIREMENT.md` — Doc ID: `DOC-ARCH-003`
4. `DOCUMENT-SUPERSESSION.md` — Doc ID: `DOC-ARCH-004`
5. `DEPRECATED-MATERIAL.md` — Doc ID: `DOC-ARCH-005`
6. `HISTORICAL-REFERENCE.md` — Doc ID: `DOC-ARCH-006`
7. `ARCHIVE-INDEXING.md` — Doc ID: `DOC-ARCH-007`
8. `RETENTION-AND-REVIEW.md` — Doc ID: `DOC-ARCH-008`
9. `ARCHIVE-MIGRATION.md` — Doc ID: `DOC-ARCH-009`
10. `ARCHIVE-QUALITY-CONTROL.md` — Doc ID: `DOC-ARCH-010`
11. `AI-USE-OF-ARCHIVED-KNOWLEDGE.md` — Doc ID: `DOC-ARCH-011`
12. `ARCHIVE-METRICS.md` — Doc ID: `DOC-ARCH-012`

## Requirements

- Use Markdown.
- Keep everything company-neutral.
- Do not mention AviationHub, BidIgniter, or DisburseCloud.
- Do not invent a specific archive tool, knowledge base tool, wiki, storage system, AI platform, search tool, or cloud provider.
- Explain when material should be archived instead of deleted.
- Explain when material should be superseded instead of archived.
- Explain when material should remain active.
- Explain how to mark archived material so humans and AI assistants do not treat it as current guidance.
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
- Cross-link to related knowledge docs, foundation standards, templates, patterns, and AI task workflow docs where appropriate.
- Include guidance for AI assistants:
  - Do not treat archived material as current truth.
  - Prefer active docs over archived docs.
  - Use archived docs only for historical context.
  - Flag archived status when referencing archived material.
  - Do not revive archived decisions without human approval.
- Update `README.md` and foundation/index files if appropriate.
- Do not remove or rename existing files unless replacing a `.gitkeep` in `docs/99-archive/`.
- Validate links.
- Run repository validation if available.
- Archive this task into `tasks/completed/0019-archive-retention.md`.
- Reset `tasks/NEXT.md` back to the reusable template after completion.

## Commit message

Commit exactly:

`Commit 0019 - Archive and Retention Foundation`

## Commit description

`Add the archive and retention layer: how Startup OS companies retire, supersede, preserve, index, review, and safely reference inactive, deprecated, historical, or archived material.`

## Summary expectations

When done, summarize:

- Files added
- Files updated
- Doc ID prefix used
- Folder used
- Validation result
- Any deviations or assumptions
