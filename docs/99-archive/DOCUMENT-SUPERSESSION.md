---
id: DOC-ARCH-004
title: Document Supersession
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, supersession, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-ARCH-003, DOC-FND-007]
---

# Document Supersession

## Purpose

Defines how a document is archived when a specific new document replaces its purpose — archiving with a named successor, so a future reader lands on the current guidance instead of a dead end.

## When to Use

A revised standard, a new decision that reverses an old one, or a new version of a document that fully replaces an old one's role. Distinct from [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md), which has no successor.

## Owner

The document's owner, coordinated with whoever owns the successor.

## Inputs

The outgoing document and its confirmed successor.

## Outputs

The outgoing document archived (`status: archived`) with an explicit link to the successor; the successor document, if new, references what it supersedes.

## Required Artifacts

A stated successor link in the archived document; inbound references updated to point to the successor per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)'s migration rule ("inbound dependencies links are migrated to the successor").

## Review Points

- Does the archived document clearly state its successor, or does a reader have to guess?
- Were inbound references (from other active documents) actually updated to point to the successor?
- Is the successor genuinely equivalent in purpose, or is this a retirement mislabeled as supersession?

## Examples

- An ADR superseded by a new ADR that reverses the original decision — per [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)'s "revisit" section.
- A standard revised significantly enough that the old version is archived rather than edited in place, with the new version as its stated successor.

## Anti-Patterns

- **Successor-less supersession.** Archiving a document "because something new replaced it" without actually stating what.
- **Orphaned references.** Other documents still linking to the archived original, never updated to the successor.
- **Supersession without real equivalence.** Naming a successor that doesn't actually cover the same ground, misleading a reader who follows the link expecting full coverage.

## Related Docs

[DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md) · [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) · [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)
