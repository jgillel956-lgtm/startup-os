---
id: DOC-FND-017
title: Documentation Quality Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, quality, standard]
dependencies: [DOC-FND-005, DOC-FND-009]
related: [DOC-FND-018, DOC-FND-019, DOC-FND-020]
---

# Documentation Quality Standard

Defines how Startup OS documentation quality is evaluated — clarity, completeness, consistency, neutrality, ownership, metadata, links, and usefulness. [DOCUMENT-STANDARDS.md](DOCUMENT-STANDARDS.md) governs *how* a document is written (structure, tone, formatting); this document defines the bar that writing is checked against once it exists. [VALIDATION.md](VALIDATION.md)'s automated script checks metadata mechanically; this standard covers everything a script can't check.

## Quality Dimensions

### Clarity

A reader unfamiliar with the specific task can understand the document from the repository alone — no unexplained jargon, no reliance on context that only exists in a chat session. Per [DOCUMENT-STANDARDS.md](DOCUMENT-STANDARDS.md)'s quality bar: could an AI agent follow it without inventing anything?

### Completeness

The document answers what it claims to answer — a standard with a gap where a reader needs to guess is incomplete, regardless of how well-written the rest of it is. An open question is acceptable; a silent gap is not.

### Consistency

Terminology, structure, and cross-references match how the rest of the repository already describes the same things — see [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) for the linking-specific rules this feeds.

### Neutrality

Company-neutral by default (per [Constitution Article IV](../../CONSTITUTION.md)) unless the document explicitly governs a specific company's implementation — no company names, no invented tools, no assumed tech stack, no assumed business model, unless the domain genuinely requires naming one.

### Ownership

Every document has exactly one accountable owner in its front matter — per [METADATA-STANDARD.md](METADATA-STANDARD.md) and [OWNERSHIP-AND-ACCOUNTABILITY.md](../01-business/OWNERSHIP-AND-ACCOUNTABILITY.md)'s "no ownerless work" principle.

### Metadata

Front matter is complete, valid, and consistent with [ID-STANDARD.md](ID-STANDARD.md) and [METADATA-STANDARD.md](METADATA-STANDARD.md) — checked automatically by [VALIDATION.md](VALIDATION.md)'s script, but a passing script confirms structure, not accuracy (e.g. a wrong-but-well-formed `domain` value still passes automated validation).

### Links

Every relative link resolves; every referenced document ID actually exists — see [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md).

### Usefulness

A document earns its place by being something someone will actually reference — not padding a domain's document count. A document nobody would ever look up is a candidate for retiring, not writing in the first place.

## Applying the Standard

A document doesn't need a perfect score on every dimension before it can reach `active` status — [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) is the practical pre-commit checklist that applies these dimensions to a specific change, and [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) defines when a human review is required versus a self-check.

## Ownership

The founder (or whoever owns `docs/00-foundation/` standards generally) owns this bar; every document's author applies it as a self-check before requesting review.
