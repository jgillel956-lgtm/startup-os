---
id: DOC-ARCH-009
title: Archive Migration
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, migration, standard]
dependencies: [DOC-ARCH-003, DOC-ARCH-004]
related: [DOC-ARCH-007, DOC-FND-007]
---

# Archive Migration

## Purpose

Defines the mechanical steps for moving a document into the archive correctly — the practical checklist behind [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md) and [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md).

## When to Use

At the moment a retirement or supersession decision has been made and it's time to actually move the file.

## Owner

The document's owner.

## Inputs

A document confirmed ready to retire or supersede, per [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md) or [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md).

## Outputs

The document correctly relocated to `docs/99-archive/`, status updated, references migrated.

## Required Artifacts

A migration checklist completed per document.

## Migration Steps

1. Confirm the reason (retirement or supersession) and, if supersession, the successor.
2. Check for inbound references — other documents listing this one under `dependencies` or `related`.
3. Update those inbound references to point to the successor (supersession) or remove the now-stale reference with a note (retirement).
4. Set `status: archived` in the document's front matter.
5. Move the file to `docs/99-archive/`, keeping its original filename per [NAMING-STANDARDS.md](../00-foundation/NAMING-STANDARDS.md).
6. Confirm the `id` is unchanged.
7. Run `npm run validate` (or the repository's equivalent) to confirm the move didn't break anything.

## Review Points

- Was step 2 (checking inbound references) actually done, or skipped?
- Does the moved document still pass validation?
- Did the filename or ID change during the move — either is a migration error.

## Examples

- A superseded ADR moved through all seven steps, with its inbound references in `DECISIONS.md` updated to note the supersession.
- A retired capability document moved with a note explaining why, and a confirmation nothing else still depended on it.

## Anti-Patterns

- **Skipping the reference check.** Moving a file without checking who still points to it, leaving broken links.
- **Renaming during migration.** Changing the filename "to be clearer" while archiving, breaking the naming continuity [ARCHIVE-INDEXING.md](ARCHIVE-INDEXING.md) relies on.
- **No validation after the move.** Assuming the migration worked without actually checking.

## Related Docs

[DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md) · [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md) · [ARCHIVE-INDEXING.md](ARCHIVE-INDEXING.md) · [VALIDATION.md](../00-foundation/VALIDATION.md)
