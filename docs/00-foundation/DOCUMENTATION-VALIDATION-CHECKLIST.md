---
id: DOC-FND-018
title: Documentation Validation Checklist
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, checklist, validation, standard]
dependencies: [DOC-FND-017]
related: [DOC-FND-009, DOC-FND-020]
---

# Documentation Validation Checklist

A reusable checklist for validating new or updated documentation before commit or PR. [VALIDATION.md](VALIDATION.md) documents the automated script (`npm run validate`) that checks front matter mechanically; this checklist covers what that script cannot — the human judgment calls behind [DOCUMENTATION-QUALITY-STANDARD.md](DOCUMENTATION-QUALITY-STANDARD.md)'s dimensions.

## Before Committing a New or Updated Document

### Automated (run first)

- [ ] `npm run validate` passes (see [VALIDATION.md](VALIDATION.md)).
- [ ] Every relative link in the document resolves.

### Metadata and IDs

- [ ] `id` is the next available number in its `TYPE-SCOPE` sequence — checked against the actual repository, not assumed (per [ID-STANDARD.md](ID-STANDARD.md)).
- [ ] `domain` matches the folder the file lives in.
- [ ] `status` reflects reality — `active` only if this is genuinely current guidance ready to be relied on.
- [ ] `dependencies` and `related` reference IDs that actually exist.

### Content Quality

- [ ] A reader unfamiliar with this task could follow the document without asking a question it should have answered.
- [ ] No unexplained jargon on first use.
- [ ] No company name, invented tool, or assumed tech stack, unless the domain genuinely requires one.
- [ ] No duplicated content that already exists elsewhere — linked instead of restated (see [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md)).
- [ ] Cross-links point to the domains and documents this actually connects to, per [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md) if the change is cross-domain.

### Placement

- [ ] The document lives in the correct domain folder per [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) — not a new folder invented for convenience.
- [ ] If this is a template, pattern, or knowledge record rather than a standard, it's in `docs/10-templates/`, `docs/11-patterns/`, or `docs/12-knowledge/` respectively, not mixed into a domain's own standards.

### Change Coupling

- [ ] If this document describes behavior that changed, the change itself is in the same commit — not a follow-up "update docs" task (per [DOCUMENTATION-PATTERNS.md](../11-patterns/DOCUMENTATION-PATTERNS.md)).
- [ ] `version` and `updated` are bumped per [METADATA-STANDARD.md](METADATA-STANDARD.md)'s versioning rules, for anything beyond a typo fix.

## Before Archiving a Document

- [ ] `status: archived` is set correctly (see [ARCHIVE-QUALITY-CONTROL.md](../99-archive/ARCHIVE-QUALITY-CONTROL.md)).
- [ ] Inbound references from active documents were migrated or removed, per [ARCHIVE-MIGRATION.md](../99-archive/ARCHIVE-MIGRATION.md).

## Using This Checklist

Run it as a self-check before requesting review — see [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) for when a self-check is sufficient versus when independent review is required.
