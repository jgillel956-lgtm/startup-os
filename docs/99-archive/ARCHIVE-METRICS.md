---
id: DOC-ARCH-012
title: Archive Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, metrics, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-PAT-007, DOC-ARCH-010]
---

# Archive Metrics

## Purpose

Defines how to measure whether the archive is healthy — organized, findable, correctly marked — rather than becoming clutter, per the [metrics pattern](../11-patterns/METRICS-PATTERNS.md) applied to archived material.

## When to Use

Reviewed on a regular rhythm, the same as every other Startup OS metrics standard.

## Owner

The archive owner.

## Inputs

The current state of `docs/99-archive/` and any documents elsewhere carrying `status: archived`.

## Outputs

A trend read across periods — is the archive staying organized and correctly marked, or degrading.

## Required Artifacts

A periodic snapshot against the metrics below.

## Metrics

- **Status accuracy** — proportion of archived documents actually carrying `status: archived`, and vice versa (no active-status documents sitting in `docs/99-archive/`). The single most important metric — see [ARCHIVE-QUALITY-CONTROL.md](ARCHIVE-QUALITY-CONTROL.md).
- **Successor link integrity** — proportion of superseded documents whose successor link still resolves.
- **Retirement reason coverage** — proportion of archived documents with a stated reason for retirement or supersession.
- **Orphaned reference rate** — how often an active document still points to something now archived without noting that it's archived.
- **Archive growth rate** — volume archived per period, read for trend (a sudden spike may indicate a major restructuring worth understanding, not just noting).

## Review Points

- Is status accuracy at or near 100%, or are there known drift cases?
- Are broken successor links accumulating, or caught and fixed promptly?
- Is archive growth matched by actual migrations following [ARCHIVE-MIGRATION.md](ARCHIVE-MIGRATION.md)'s checklist, or is material landing here informally?

## Examples

- A quarterly archive audit reporting these five metrics alongside the [knowledge library's own metrics review](../12-knowledge/KNOWLEDGE-METRICS.md).

## Anti-Patterns

- **Measuring volume only.** Tracking how much is archived without checking whether it's correctly marked and findable.
- **Ignoring status accuracy.** Treating this as a minor housekeeping metric when it's the one that actually determines whether archived material misleads readers.
- **No trend review.** Checking the archive's health once and never again as it grows.

## Related Docs

[METRICS-PATTERNS.md](../11-patterns/METRICS-PATTERNS.md) · [ARCHIVE-QUALITY-CONTROL.md](ARCHIVE-QUALITY-CONTROL.md) · [KNOWLEDGE-METRICS.md](../12-knowledge/KNOWLEDGE-METRICS.md)
