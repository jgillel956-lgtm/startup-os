---
id: DOC-ARCH-003
title: Document Retirement
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, retirement, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-ARCH-004, DOC-FND-007]
---

# Document Retirement

## Purpose

Defines how a document is moved to archive when its relevance has simply ended — no successor replaces it, the need it served no longer exists.

## When to Use

The capability, process, or fact a document described no longer applies, and nothing else has taken its place. Distinct from [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md), where a specific successor exists.

## Owner

The document's owner while it was active.

## Inputs

A document whose relevance has genuinely ended, and confirmation nothing still depends on it being active (check `dependencies`/`related` references across the repository).

## Outputs

The document moved to `docs/99-archive/`, `status: archived`, with a stated reason for retirement.

## Required Artifacts

A retirement note within the document (or its front matter's implicit history) stating why it was retired and when.

## Review Points

- Is the reason for retirement stated, or does the document just quietly disappear from active use?
- Did anything still reference this document as a dependency before it was retired — was that checked?
- Could this actually be a supersession in disguise — does something else now serve the purpose this document served?

## Examples

- A capability abandoned before shipping, its PRD retired with a note explaining why the capability was dropped.
- A process document for a workflow the company no longer runs, retired rather than superseded since no replacement process exists.

## Anti-Patterns

- **Silent disappearance.** A document simply stops being referenced, with no formal retirement — it's neither clearly active nor clearly archived.
- **Retirement without checking dependents.** Archiving a document that other active documents still cite as a dependency, leaving broken references.
- **Retirement mistaken for supersession.** Retiring a document when really something replaced it — losing the successor link a future reader would need.

## Related Docs

[DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md) · [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) · [ARCHIVE-MIGRATION.md](ARCHIVE-MIGRATION.md)
