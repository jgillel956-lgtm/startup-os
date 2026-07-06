---
id: DOC-KNW-011
title: Knowledge Quality Control
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, quality, standard]
dependencies: [DOC-KNW-005]
related: [DOC-KNW-012, DOC-PAT-006]
---

# Knowledge Quality Control

## Purpose

Defines what makes a knowledge record trustworthy enough to rely on — the bar every record in this library should meet, checked periodically rather than assumed.

## When to Use

At capture time (a self-check before recording) and periodically across the library (a quality audit, not just individual record maintenance).

## Owner

Whoever owns the knowledge library structure; every capturer self-checks their own records against this bar first.

## Inputs

Existing knowledge records.

## Outputs

Records confirmed to meet the bar, or flagged for correction — feeding [KNOWLEDGE-METRICS.md](KNOWLEDGE-METRICS.md).

## Required Artifacts

A quality checklist applied per record or per audit pass.

## Quality Checklist

- [ ] Source stated (per [KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md)).
- [ ] Type stated — fact, assumption, example, or synthesis (per [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md)).
- [ ] Owner assigned (per [KNOWLEDGE-OWNERSHIP.md](KNOWLEDGE-OWNERSHIP.md)).
- [ ] Validated per its actual stakes, per [KNOWLEDGE-VALIDATION.md](KNOWLEDGE-VALIDATION.md).
- [ ] Findable — cross-linked from at least one relevant domain document (per [KNOWLEDGE-RETRIEVAL.md](KNOWLEDGE-RETRIEVAL.md)).
- [ ] Not a duplicate of an existing record.
- [ ] Current — last-reviewed date consistent with how fast the underlying reality changes.

## Review Points

- Does a sample audit of the library consistently pass this checklist, or are gaps common?
- Are the same quality gaps recurring (e.g. missing sources) — a process problem worth fixing at capture time, not just catching after the fact?

## Examples

- A periodic audit sampling recent records against the checklist, the same discipline [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) applies to code, applied to knowledge.

## Anti-Patterns

- **Quality control only at creation.** Checking new records but never auditing the existing library for drift.
- **Checklist as formality.** Running through the list without actually verifying each item.
- **Ignoring recurring gaps.** The same quality issue showing up repeatedly without ever fixing the capture process that causes it.

## Related Docs

[KNOWLEDGE-VALIDATION.md](KNOWLEDGE-VALIDATION.md) · [KNOWLEDGE-METRICS.md](KNOWLEDGE-METRICS.md) · [REVIEW-GATE-PATTERNS.md](../11-patterns/REVIEW-GATE-PATTERNS.md)
