---
id: DOC-KNW-012
title: Knowledge Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, metrics, standard]
dependencies: [DOC-KNW-002]
related: [DOC-PAT-007, DOC-KNW-011]
---

# Knowledge Metrics

## Purpose

Defines how to measure whether the knowledge system is actually working — the [metrics pattern](../11-patterns/METRICS-PATTERNS.md), applied to knowledge instead of a domain's operational output.

## When to Use

Reviewed on a regular rhythm, the same as every other Startup OS metrics standard.

## Owner

Whoever owns the knowledge library structure.

## Inputs

Records and their staleness, ownership, and citation history.

## Outputs

A trend read across periods — is the library getting more useful, or accumulating unmaintained clutter.

## Required Artifacts

A periodic snapshot against the metrics below.

## Metrics

- **Coverage** — how many domains have at least some captured knowledge versus relying entirely on memory.
- **Freshness** — proportion of records reviewed within their expected cadence ([KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md)).
- **Ownership completeness** — proportion of records with a named, currently-valid owner ([KNOWLEDGE-OWNERSHIP.md](KNOWLEDGE-OWNERSHIP.md)).
- **Quality pass rate** — proportion of audited records meeting the [quality checklist](KNOWLEDGE-QUALITY-CONTROL.md).
- **Citation rate** — how often records are actually referenced in real decisions, versus sitting unused.
- **Duplicate rate** — how often a new capture turns out to duplicate an existing record, a direct signal on retrieval quality ([KNOWLEDGE-RETRIEVAL.md](KNOWLEDGE-RETRIEVAL.md)).

## Review Points

- Is freshness declining — records aging past their expected review cadence?
- Is citation rate near zero for a domain — a sign the library isn't actually useful there, or isn't being checked before decisions.
- Is duplicate rate high — a sign records aren't findable, not that people aren't trying.

## Examples

- A quarterly knowledge-library audit reporting these six metrics alongside [BUSINESS-METRICS.md](../01-business/BUSINESS-METRICS.md)'s own review cycle.

## Anti-Patterns

- **Measuring volume, not usefulness.** Counting records captured without checking whether they're ever cited.
- **Metrics reviewed but not acted on.** A declining freshness trend noticed repeatedly with no process change.
- **Vanity coverage.** Capturing knowledge in domains where it's easy, ignoring domains where it's actually needed but harder to gather.

## Related Docs

[METRICS-PATTERNS.md](../11-patterns/METRICS-PATTERNS.md) · [KNOWLEDGE-QUALITY-CONTROL.md](KNOWLEDGE-QUALITY-CONTROL.md) · [KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md)
