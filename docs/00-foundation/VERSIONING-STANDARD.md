---
id: DOC-FND-025
title: Versioning Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, versioning, standard]
dependencies: [DOC-FND-004]
related: [DOC-FND-024, DOC-FND-026]
---

# Versioning Standard

Defines when a document's `version` should change and how to interpret version history over time. [METADATA-STANDARD.md](METADATA-STANDARD.md) already defines the MAJOR/MINOR/PATCH classification itself (per-field, in its Versioning Rules section) — this document doesn't restate that classification, it covers what that section doesn't: real worked examples, how to read a version history, and how per-document versioning relates to this repository's own `Commit NNNN` sequence.

## The Classification, By Reference

Per [METADATA-STANDARD.md](METADATA-STANDARD.md#versioning-rules): MAJOR for a meaning change, MINOR for an addition that doesn't change existing meaning, PATCH for clarification or wording. If you haven't read that section, read it before this one.

## Worked Examples From This Repository's Own History

- **MAJOR** — none yet in this repository's foundation docs; a MAJOR bump would be, for example, changing [STATUS-STANDARD.md](STATUS-STANDARD.md)'s lifecycle stages themselves.
- **MINOR** — [ID-STANDARD.md](ID-STANDARD.md) has taken several MINOR bumps (1.0→1.1→1.2...) as new scope codes (`GH`, `CS`, `SEC`, `PAT`, `KNW`, `TPL`, `ARCH`) were added — each addition didn't change how existing IDs worked, it added a new option.
- **PATCH** — [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)'s early bumps (1.0.0→1.0.1) were owner-field corrections during the [Commit 0002A cleanup](../../DECISIONS.md) — wording/metadata fixes, not new meaning.

## Interpreting a Version History

A document's version number tells a reader how much it's changed since creation, without needing to diff the full history: a document still at `1.0.0` has never had a substantive edit since it was written; a document at `1.6.0` has accumulated six additive changes and no meaning-changing ones; a jump to `2.0.0` signals something that used to be true about this document is no longer true — read that document's git history before relying on old assumptions about it.

## Version Bumps and `updated`

Every version bump (MAJOR, MINOR, or PATCH) is paired with an `updated` date change, per [METADATA-STANDARD.md](METADATA-STANDARD.md) — a version bump with a stale `updated` date, or an `updated` date change with no version bump, is itself a validation gap (see [VALIDATION-RULES.md](VALIDATION-RULES.md)'s metadata rules).

## Per-Document Versioning vs. Repository Commit Numbering

This repository's `Commit 0001` through `Commit 0023` (and beyond) is a **repository-level sequence** — one number per merged change, tracking the *order* changes landed. A document's `version` field is a **per-document** measure of how much that specific document has changed. They're independent: a single commit can bump ten different documents' versions by different amounts (a MINOR here, a PATCH there), and a document's version can stay untouched across many commits if that commit never touched it. Don't conflate the two when reading either.

## When Not to Bump

Per [METADATA-STANDARD.md](METADATA-STANDARD.md): typo-level edits don't bump `version` or `updated`. Reformatting that changes no content doesn't either. When in doubt, a PATCH bump is the safe default — it costs nothing and records that *something* changed, even a small something.

## Related Docs

[METADATA-STANDARD.md](METADATA-STANDARD.md) · [REPOSITORY-CHANGE-MANAGEMENT.md](REPOSITORY-CHANGE-MANAGEMENT.md) · [CHANGELOG-STANDARD.md](CHANGELOG-STANDARD.md)
