---
id: DOC-ARCH-010
title: Archive Quality Control
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, quality, standard]
dependencies: [DOC-ARCH-009]
related: [DOC-ARCH-012, DOC-KNW-011]
---

# Archive Quality Control

## Purpose

Defines what makes an archived record trustworthy as history — the quality bar checked periodically across the whole archive, not just at the moment of migration.

## When to Use

At migration time (a self-check) and periodically across the archive as a whole (an audit).

## Owner

The archive owner; every migration's self-check is the document owner's responsibility.

## Inputs

Archived documents.

## Outputs

Confirmation the archive meets its quality bar, or a list of documents needing correction.

## Required Artifacts

A quality checklist applied per document or per audit pass.

## Quality Checklist

- [ ] `status: archived` is set correctly (this is the single most important check — see [README.md](README.md)).
- [ ] Original filename and `id` preserved, per [ARCHIVE-INDEXING.md](ARCHIVE-INDEXING.md).
- [ ] Reason for archiving stated (retirement or supersession, per [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md) / [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md)).
- [ ] If superseded, successor is named and the link resolves.
- [ ] Inbound references from active documents were migrated or removed, not left dangling.

## Review Points

- Does a sample audit turn up documents with `status` left as `active` despite living in `docs/99-archive/`, or vice versa?
- Are successor links in superseded documents still resolving, or have they broken since (e.g. the successor itself was later moved)?
- Is the same quality gap recurring across migrations — a sign the migration checklist itself needs reinforcing, not just individual fixes?

## Examples

- A periodic archive audit sampling recent migrations against this checklist, the same discipline [KNOWLEDGE-QUALITY-CONTROL.md](../12-knowledge/KNOWLEDGE-QUALITY-CONTROL.md) applies to knowledge records.

## Anti-Patterns

- **Wrong status.** A document physically in `docs/99-archive/` still marked `status: active` — the single most dangerous archive quality failure, since it directly misleads anyone or anything checking status before trusting the document.
- **Broken successor links.** A supersession link that no longer resolves because the successor itself moved.
- **Audit-free archive.** Never checking the archive's own quality after initial migrations.

## Related Docs

[ARCHIVE-MIGRATION.md](ARCHIVE-MIGRATION.md) · [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) · [KNOWLEDGE-QUALITY-CONTROL.md](../12-knowledge/KNOWLEDGE-QUALITY-CONTROL.md)
