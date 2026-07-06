---
id: DOC-FND-004
title: Metadata Standard (YAML Front Matter)
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-05
version: 1.6.0
domain: foundation
tags: [foundation, metadata, front-matter, yaml]
dependencies: [DOC-FND-006, DOC-FND-007]
related: [DOC-FND-005, DOC-FND-025]
---

# Metadata Standard

Every Markdown document in a Startup OS repository begins with a YAML front matter block. This is what makes documents machine-readable: AI agents and scripts rely on it for identity, lifecycle, and relationships. A document without valid front matter is non-compliant.

## Required Fields

```yaml
---
id: DOC-FND-004            # Stable unique ID (see ID-STANDARD.md). Never changes.
title: Metadata Standard   # Human-readable title. May change; id may not.
status: active             # Lifecycle status (see STATUS-STANDARD.md).
owner: Founder             # Accountable person (short handle). One owner, always.
created: 2026-07-04        # ISO 8601 date the document was created. Never changes.
updated: 2026-07-04        # ISO 8601 date of last substantive edit.
version: 1.0.0             # Semantic version of the document.
domain: foundation         # Domain matching the containing docs/ folder.
tags: [metadata, yaml]     # Lowercase kebab-case keywords for discovery.
dependencies: []           # IDs this document requires to be understood/valid.
related: []                # IDs that are relevant but not required.
---
```

## Field Rules

| Field | Type | Rules |
|-------|------|-------|
| `id` | string | Unique across the repository. Immutable. Format per [ID-STANDARD.md](ID-STANDARD.md). |
| `title` | string | Matches the document's H1. |
| `status` | enum | One of the values in [STATUS-STANDARD.md](STATUS-STANDARD.md). |
| `owner` | string | Exactly one accountable owner. Groups are not owners. |
| `created` | date | `YYYY-MM-DD`. Set once. |
| `updated` | date | `YYYY-MM-DD`. Bumped on every substantive edit (not typo fixes). |
| `version` | semver | `MAJOR.MINOR.PATCH` — see versioning rules below. |
| `domain` | enum | `root`, `foundation`, `business`, `product`, `engineering`, `ai`, `design`, `marketing`, `sales`, `investors`, `operations`, `customer-success`, `security-compliance`, `templates`, `patterns`, `knowledge`, `archive`. Must match the folder the file lives in (`root` for repository-root files; files under `prompts/` use `ai`, since the AI domain governs them; files under `.github/` use `templates`, since they are GitHub-native process templates). |
| `tags` | list | 1–8 lowercase kebab-case strings. |
| `dependencies` | list | Document IDs. If a dependency is archived, this document must be reviewed. |
| `related` | list | Document IDs. Informational only. |

## Platform-Specific Metadata

Some files need additional metadata for an external platform — GitHub is the current example. Rules:

- All required Startup OS fields (above) MUST remain present. Platform metadata is additive, never a substitute.
- Platform-specific fields are allowed only when they do not conflict with a Startup OS field name or meaning.
- **GitHub issue templates** may add `name` and `about` to populate GitHub's issue chooser.
- **Never add GitHub's `title` field to an issue template.** Startup OS already uses `title` for the document title; GitHub's `title` (issue-title prefill) would collide with it in the same flat front matter block.
- Platform fields are placed after the Startup OS fields in the front matter block, so the required set is always found in the same position.

## Versioning Rules

- **MAJOR** — meaning changes: a rule, requirement, or decision is different than before.
- **MINOR** — additions that do not change existing meaning: new sections, new examples.
- **PATCH** — clarifications, wording, formatting.

Typo-level edits do not bump `version` or `updated`. See [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md) for worked examples and how to interpret a version history.

## Validation

Any of the following makes a document non-compliant:

- Missing front matter block or missing required field.
- `id` that duplicates another document or does not match the ID standard.
- `status` or `domain` outside the allowed enums.
- `domain` that contradicts the file's location.
- `dependencies`/`related` referencing IDs that do not exist.

A validation script belongs in `scripts/` in any implementation that automates compliance checks.
