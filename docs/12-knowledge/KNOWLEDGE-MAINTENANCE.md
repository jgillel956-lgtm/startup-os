---
id: DOC-KNW-008
title: Knowledge Maintenance
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, maintenance, standard]
dependencies: [DOC-KNW-006]
related: [DOC-PAT-003, DOC-PAT-011]
---

# Knowledge Maintenance

## Purpose

Defines how knowledge records are kept current — the [documentation pattern](../11-patterns/DOCUMENTATION-PATTERNS.md), applied specifically to findings and learnings rather than standards.

## When to Use

On a recurring cadence proportional to how fast the underlying reality changes, and immediately whenever new evidence contradicts an existing record.

## Owner

The record's assigned owner, per [KNOWLEDGE-OWNERSHIP.md](KNOWLEDGE-OWNERSHIP.md).

## Inputs

New evidence, a scheduled review, or a reported contradiction.

## Outputs

A record confirmed current, updated, or flagged/archived if it no longer holds.

## Required Artifacts

A last-reviewed date on records that matter enough to warrant periodic checking; an update note when a record changes.

## Maintenance Cadence

Following the [operating cadence pattern](../11-patterns/OPERATING-CADENCE-PATTERNS.md): fast-changing knowledge (market conditions, competitive facts) reviewed frequently; stable knowledge (historical facts, confirmed research) reviewed rarely but not never.

## Handling Contradictions

When new evidence contradicts an existing record, the record is updated immediately, not left inconsistent until the next scheduled review — a stale record actively misleads; an absent one merely leaves a gap.

## Review Points

- Does a record's last-reviewed date match how fast its underlying reality actually changes?
- When new evidence contradicted something, was the old record updated promptly?
- Are there records nobody has checked in a long time that materially matter?

## Examples

- A market-size assumption refreshed each planning cycle per [OPERATING-CADENCE.md](../01-business/OPERATING-CADENCE.md).
- A competitive fact updated the moment sales or marketing learns a competitor has changed, per [COMPETITIVE-SALES.md](../07-sales/COMPETITIVE-SALES.md)'s intelligence feedback.

## Anti-Patterns

- **Write-once knowledge.** Captured once and never revisited, going stale silently.
- **Delayed correction.** Knowing a record is wrong but waiting for the "next review" instead of fixing it now.
- **Uniform review frequency.** Treating a fast-changing fact and a stable historical one with the same review cadence.

## Related Docs

[DOCUMENTATION-PATTERNS.md](../11-patterns/DOCUMENTATION-PATTERNS.md) · [OPERATING-CADENCE-PATTERNS.md](../11-patterns/OPERATING-CADENCE-PATTERNS.md) · [KNOWLEDGE-ARCHIVING.md](KNOWLEDGE-ARCHIVING.md)
