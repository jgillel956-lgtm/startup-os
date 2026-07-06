---
id: DOC-ARCH-002
title: Archive Operating Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, operating-model, standard]
dependencies: [DOC-ARCH-001]
related: [DOC-FND-007, DOC-KNW-002]
---

# Archive Operating Standard

Defines the overall model for retiring, archiving, preserving, and referencing outdated or superseded material. No specific archive, storage, or wiki tool is assumed.

## Principles

1. **Nothing is deleted, things are archived.** Per [Constitution Article VII](../../CONSTITUTION.md) — history stays legible even when it's no longer current guidance.
2. **Archived is not deleted, and it's not current.** Two distinct failure modes to avoid: losing history by deleting, and misleading a reader by presenting old material as current.
3. **Every archived document earned its way here.** Through deliberate retirement or supersession (see [README.md](README.md)) — never by neglect or drift.
4. **The archive stays findable, not just preserved.** Material nobody can locate again has the practical value of material that was deleted (see [ARCHIVE-INDEXING.md](ARCHIVE-INDEXING.md)).
5. **Lightweight until it needs to not be.** A small company's archive may be a handful of superseded documents — the discipline (clear reason, clear status, findable) matters more than volume.

## Ownership

| Role | Responsibility |
|------|-----------------|
| Document owner (whoever owned it while active) | Deciding when to retire or supersede it, and doing so correctly |
| Founder / archive owner | Archive structure, indexing, periodic quality checks |

## Inputs and Outputs

- **Inputs:** a document reaching the end of its relevance, or a successor document that makes it obsolete.
- **Outputs:** a correctly archived document — `status: archived`, moved to `docs/99-archive/`, with its reason and any successor stated.

## Review Expectations

The archive itself is reviewed periodically for quality (per [ARCHIVE-QUALITY-CONTROL.md](ARCHIVE-QUALITY-CONTROL.md)) — not individual documents' relevance, which doesn't change once archived, but whether the archive as a whole stays findable and correctly marked.

## Decision Standards

Retiring or superseding a document that's still referenced elsewhere (dependencies, cross-links) follows the same rigor as any decision with consequences (see [DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md)) — check what still points to it before moving it, per [ARCHIVE-MIGRATION.md](ARCHIVE-MIGRATION.md).

## Scaling the System

At a small company: archiving may be as simple as moving a file and updating its status. What must not shrink to zero: the `status: archived` field is always set correctly, and a superseded document always names its successor. Formalize indexing and review cadence as the archive grows.
