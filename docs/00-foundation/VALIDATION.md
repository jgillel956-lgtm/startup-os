---
id: DOC-FND-009
title: Validation
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-05
version: 1.2.0
domain: foundation
tags: [foundation, validation, metadata, tooling]
dependencies: [DOC-FND-004, DOC-FND-007]
related: [DOC-FND-001, DOC-FND-011, DOC-FND-021, DOC-FND-022]
---

# Validation

Documents how Startup OS enforces the [metadata standard](METADATA-STANDARD.md) and [cross-linking standard](CROSS-LINKING-STANDARD.md) with automated checks. For when to run these checks in a real commit/PR workflow, see [DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md); for the full catalog of rules (automated and manual), see [VALIDATION-RULES.md](VALIDATION-RULES.md).

## Why Validation Exists

Startup OS relies on every document carrying complete, correct YAML front matter — it is what makes documents machine-readable (Constitution, Article III). A standard that nobody checks drifts. Validation turns the metadata standard from a convention into an enforceable rule, catching missing or malformed front matter before it merges.

## How to Run It

```bash
npm run validate
```

This runs two checks in sequence: front matter validation, then link validation. Each can also be run directly:

```bash
npm run validate:frontmatter
node scripts/validate-front-matter.js

npm run validate:links
node scripts/validate-links.js
```

Exit code `0` means every check passed. Exit code `1` means at least one file failed a check — read the printed report for specifics. `npm run validate` stops at the first failing check (front matter, then links) so failures aren't buried under each other.

## What Front Matter Validation Checks

[`scripts/validate-front-matter.js`](../../scripts/validate-front-matter.js) recursively scans the repository for `.md` files, skipping `node_modules`, `.git`, `dist`, `build`, `coverage`, `vendor`, and `tasks` (operational AI handoff files, not governed documents — see [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md)). `docs/99-archive/` **is** validated — the status standard does not exempt archived documents from carrying valid front matter (see [STATUS-STANDARD.md](STATUS-STANDARD.md)).

For each file, it checks:

1. The file starts with a YAML front matter block (`---` … `---`).
2. All required fields are present.
3. `status` is one of the valid lifecycle values.
4. `owner` is not empty.

It reports files checked, files passed, files failed, and the specific missing/invalid fields per failed file.

## What Link Validation Checks

[`scripts/validate-links.js`](../../scripts/validate-links.js) recursively scans the repository for `.md` files — including `tasks/` this time, since a broken link in task content is still a real broken link — skipping only `node_modules`, `.git`, `dist`, `build`, `coverage`, and `vendor`. For each relative Markdown link (`[text](path)`), it resolves the path against the file's own directory and confirms the target exists. External (`http`/`https`) and `mailto:` links are skipped; pure in-file anchors (`#section`) are skipped since they aren't checked for whether the heading actually exists — see [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md)'s note that a guessed anchor still needs a manual check.

It reports files checked, files passed, files failed, and the specific broken link(s) per failed file.

## Required Metadata Fields

Per [METADATA-STANDARD.md](METADATA-STANDARD.md):

`id`, `title`, `status`, `owner`, `created`, `updated`, `version`, `domain`, `tags`, `dependencies`, `related`

## Status Values

Per [STATUS-STANDARD.md](STATUS-STANDARD.md), matched case-insensitively:

`draft`, `review`, `active`, `deprecated`, `archived`

## How to Fix Errors

| Error | Fix |
|-------|-----|
| Missing YAML front matter | Add a front matter block per [METADATA-STANDARD.md](METADATA-STANDARD.md) as the first thing in the file. |
| Missing field(s) | Add the listed field(s) to the front matter. |
| Invalid status | Change `status` to one of the valid values listed above. |
| Owner must not be empty | Set `owner` to the accountable person — never leave it blank. |
| Broken link | Fix the path, or remove the link if the target was legitimately retired — see [VALIDATION-FAILURE-HANDLING.md](VALIDATION-FAILURE-HANDLING.md) for when to fix versus flag versus stop. |

## Future Validation Ideas

Not implemented yet; noted here so they are not lost — see [VALIDATION-RULES.md](VALIDATION-RULES.md) for the full rule catalog, including which of these remain manual for now:

- Verify `id` values are unique across the repository.
- Verify `dependencies`/`related` IDs actually exist.
- Verify `domain` matches the document's containing folder.
- Verify filenames follow [NAMING-STANDARDS.md](NAMING-STANDARDS.md).
- Run validation automatically via a Git pre-commit hook or CI check.
