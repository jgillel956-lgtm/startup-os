---
id: DOC-KNW-002
title: Knowledge Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, operating-model, standard]
dependencies: [DOC-KNW-001]
related: [DOC-PAT-002, DOC-TPL-002]
---

# Knowledge Operating System

Defines the overall model for capturing, organizing, maintaining, retrieving, and reusing knowledge across every Startup OS domain. No specific knowledge base, wiki, or search tool is assumed.

## Principles

1. **Knowledge is evidence, not authority.** A knowledge record informs a decision; it doesn't make one on its own — see [README.md](README.md)'s document-kind table.
2. **Capture close to the source.** A finding is recorded where and when it's observed, not reconstructed from memory later (see [KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md)).
3. **Validated before trusted.** A claim is checked against its source before it's relied on for a decision (see [KNOWLEDGE-VALIDATION.md](KNOWLEDGE-VALIDATION.md)).
4. **Findable or it doesn't exist.** Knowledge nobody can retrieve later has the same practical value as knowledge never captured (see [KNOWLEDGE-RETRIEVAL.md](KNOWLEDGE-RETRIEVAL.md)).
5. **Owned, or it goes stale.** Every record has someone accountable for its continued accuracy (see [KNOWLEDGE-OWNERSHIP.md](KNOWLEDGE-OWNERSHIP.md)).
6. **Lightweight until it needs to not be.** A one-founder company's knowledge library may be a handful of dated notes — the discipline (validated, owned, findable) matters more than volume or tooling.

## Ownership

| Role | Responsibility |
|------|-----------------|
| Founder / knowledge owner | Library structure, quality bar, periodic review |
| Whoever captures a finding | Recording it accurately, with source, at capture time |
| Domain owners | Confirming knowledge in their area stays accurate over time |

One person holds all these roles early on — the responsibilities still apply.

## Inputs and Outputs

- **Inputs:** research findings, retrospective learnings, competitive intelligence, external facts relevant to the business, cross-domain synthesis.
- **Outputs:** findable, validated knowledge records that inform decisions, plus flags when a record is stale or contradicted by newer evidence.

## Review Expectations

Knowledge records are reviewed for continued accuracy on a rhythm proportional to how fast the underlying reality changes (see [KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md)) — a market-size estimate needs more frequent revisiting than a stable historical fact.

## Decision Standards

A knowledge record graduating into an actual decision (see [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md)) follows the decision-making pattern ([DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md)) — the knowledge record is the evidence; the decision is a separate, explicit act.

## Scaling the System

At one founder: knowledge may be a short set of dated notes, checked before anything they touch on gets used again. What must not shrink to zero: a source is stated for every record, and a stale record is flagged rather than silently trusted. Formalize structure and retrieval as the volume grows.
