---
id: DOC-ARCH-007
title: Archive Indexing
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, indexing, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-KNW-007, DOC-FND-003]
---

# Archive Indexing

## Purpose

Defines how archived material stays findable — the retrieval pattern, applied to the archive specifically, since preserved-but-unfindable material has the practical value of deleted material.

## When to Use

Whenever a document is archived (indexing happens at archive time, not as a separate later task) and whenever the archive grows large enough that browsing alone no longer works.

## Owner

Whoever archives the document; the archive owner maintains the index structure overall.

## Inputs

The archived document, its original ID, its reason for archiving, and its successor (if any).

## Outputs

An archived document that's still locatable — by filename, by cross-link from wherever it's referenced, and by whatever index the archive maintains.

## Required Artifacts

Filenames preserved from the original per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) ("archived documents keep their original filename"); the document's `id` never changes per [ID-STANDARD.md](../00-foundation/ID-STANDARD.md), so links to it by ID keep working even after archiving.

## Review Points

- Can this archived document still be found by someone who only remembers roughly what it was about?
- Does its ID still resolve correctly wherever it's referenced, since IDs don't change on archiving?
- As the archive grows, is browsing alone still sufficient, or does it need a more structured index?

## Examples

- An archived ADR still findable via its original `ADR-NNNN` ID from any document that cites it.
- A retired standard retaining its original filename in `docs/99-archive/`, so a search for that filename still resolves.

## Anti-Patterns

- **Renaming on archive.** Changing a document's filename or ID when it's archived, breaking every existing reference to it.
- **Index drift.** An archive that's grown large enough to need structure but still relies purely on browsing.
- **Findable only by accident.** Archived material with no cross-links from anywhere, discoverable only by someone who happens to open the folder.

## Related Docs

[KNOWLEDGE-RETRIEVAL.md](../12-knowledge/KNOWLEDGE-RETRIEVAL.md) · [ID-STANDARD.md](../00-foundation/ID-STANDARD.md) · [NAMING-STANDARDS.md](../00-foundation/NAMING-STANDARDS.md)
