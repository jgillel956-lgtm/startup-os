---
id: DOC-KNW-004
title: Knowledge Structure
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, structure, standard]
dependencies: [DOC-KNW-003]
related: [DOC-KNW-005, DOC-PAT-004]
---

# Knowledge Structure

## Purpose

Defines how knowledge records are organized and typed — including how a record graduates from "something we learned" into a decision, a standard, or an archived fact.

## When to Use

When placing a newly captured record, or when deciding whether an existing record's implications warrant a stronger document kind.

## Owner

Whoever owns the knowledge library structure (the founder, or a domain owner for records specific to their area).

## Inputs

A captured knowledge record ([KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md)).

## Outputs

A correctly placed, typed record — and, where warranted, a promoted decision or standard elsewhere in the repository.

## Required Artifacts

Each record is typed as one of: **fact** (verifiable, sourced), **assumption** (a working belief not yet fully verified), **example** (a specific instance illustrating a pattern), or **synthesis** (a conclusion drawn across multiple records). The type is stated explicitly — an unlabeled record defaults to being read as a fact, which is the most dangerous default for something that's actually an assumption.

## Graduating a Knowledge Record

A record graduates out of the knowledge library when someone acts on it deliberately:

- A synthesis that leads to a real choice becomes a decision record, per [DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md) — the knowledge record is cited as the evidence, not duplicated into the decision.
- A pattern confirmed across many records and adopted as required behavior becomes a standard in the relevant domain, not left as knowledge indefinitely.
- A record whose relevance has passed is archived, per [KNOWLEDGE-ARCHIVING.md](KNOWLEDGE-ARCHIVING.md).

## Review Points

- Is every record typed (fact/assumption/example/synthesis), or is type left ambiguous?
- Has a record that's repeatedly cited in real decisions been promoted to a standard, or is it still floating as "just knowledge" indefinitely?
- Does a decision record cite the knowledge it was based on, or restate it without a link?

## Examples

- A market-size **assumption** in [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md), sourced to a specific knowledge record here.
- A **synthesis** across several customer research sessions that led to a new capability being prioritized — the synthesis lives here; the resulting prioritization decision cites it.
- A confirmed **fact** about a regulatory requirement, feeding [COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md).

## Anti-Patterns

- **Untyped records.** No distinction between a confirmed fact and a working guess.
- **Knowledge that never graduates.** A pattern confirmed repeatedly that's never promoted to an actual standard, so every domain keeps rediscovering it.
- **Decisions that don't cite their evidence.** A decision record that restates knowledge inline instead of linking to the source record.

## Related Docs

[KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md) · [DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md) · [PATTERN-LIBRARY-STANDARD.md](../11-patterns/PATTERN-LIBRARY-STANDARD.md)
