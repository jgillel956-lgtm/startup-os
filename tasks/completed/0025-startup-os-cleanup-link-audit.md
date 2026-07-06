# Commit 0025 — Startup OS Cleanup & Link Audit

You are working in the Startup OS repository.

## Goal

Perform a Startup OS cleanup and link audit.

This commit should improve repository quality before v1 by checking navigation, cross-links, folder references, document IDs, metadata, task files, archive references, and README consistency.

This is not a new operating system domain. It is a cleanup and quality commit.

## Branch

Current branch should be:

`feature/0025-startup-os-cleanup-link-audit`

If the current branch is different, stop and flag it.

## Files to inspect first

Inspect:

- `README.md`
- `docs/00-foundation/`
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
- `docs/12-knowledge/`
- `docs/13-customer-success/`
- `docs/14-security-compliance/`
- `docs/99-archive/`
- `tasks/`

Follow active repository standards.

## Work to perform

Review and clean up:

1. Broken or stale relative links
2. Incorrect folder references
3. README navigation issues
4. Domain map inconsistencies
5. ID standard gaps or conflicts
6. Metadata inconsistencies
7. Cross-linking issues
8. References to old folder locations
9. Task workflow references
10. Archive and active-doc guidance
11. Any obvious duplicate or conflicting guidance
12. Any obvious stale “future layer” notes that are no longer true

## Files to update

Update only where needed.

Likely files to review and update:

- `README.md`
- `docs/00-foundation/README.md`
- `docs/00-foundation/STARTUP-OS-MAP.md`
- `docs/00-foundation/DOMAIN-INTERACTION-MAP.md`
- `docs/00-foundation/DOCUMENTATION-NAVIGATION-GUIDE.md`
- `docs/00-foundation/STARTUP-OS-ADOPTION-GUIDE.md`
- `docs/00-foundation/STARTUP-OS-V1-GAP-ANALYSIS.md`
- `docs/00-foundation/STARTUP-OS-V1-RELEASE-CHECKLIST.md`
- `docs/00-foundation/FOLDER-STRUCTURE.md`
- `docs/00-foundation/ID-STANDARD.md`
- `docs/00-foundation/METADATA-STANDARD.md`
- `tasks/README.md`
- Any domain README where a link or folder reference is stale

Do not force edits into every file. Only change files where cleanup is actually needed.

## Requirements

- Use Markdown.
- Keep everything company-neutral.
- Do not mention AviationHub, BidIgniter, or DisburseCloud.
- Do not create a new top-level docs folder.
- Do not create a new operating system domain.
- Do not rewrite documents just to rewrite them.
- Do not make unnecessary large changes.
- Fix clear issues only.
- Preserve existing document intent.
- Prefer small, targeted edits.
- Validate links.
- Run repository validation if available.
- Archive this task into `tasks/completed/0025-startup-os-cleanup-link-audit.md`.
- Reset `tasks/NEXT.md` back to the reusable template after completion.

## Commit message

Commit exactly:

`Commit 0025 - Startup OS Cleanup and Link Audit`

## Commit description

`Clean up Startup OS documentation before v1: audit links, folder references, README navigation, document IDs, metadata, task workflow references, archive guidance, and stale cross-domain notes.`

## Summary expectations

When done, summarize:

- Files updated
- Issues fixed
- Validation result
- Any remaining gaps
- Any deviations or assumptions
