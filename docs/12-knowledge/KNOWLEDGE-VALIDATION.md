---
id: DOC-KNW-005
title: Knowledge Validation
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, validation, standard]
dependencies: [DOC-KNW-004]
related: [DOC-PAT-006, DOC-SEC-010]
---

# Knowledge Validation

## Purpose

Defines how a claim is checked before it's trusted enough to inform a decision — the review-gate pattern, applied to knowledge instead of published content.

## When to Use

Before a knowledge record materially informs a decision (a strategy call, a pricing change, a claim made externally). Not every minor note needs formal validation — weight the check to what the record will be used for.

## Owner

Whoever will act on the record; for anything with external-facing consequences, validation follows the same discipline as [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md).

## Inputs

The record and its stated source.

## Outputs

A confirmed, downgraded, or rejected record — with the outcome recorded, not just decided informally.

## Required Artifacts

A validation note: what was checked, against what source, and the outcome.

## Validation Checks

- **Source check** — does the stated source actually say what the record claims it says?
- **Currency check** — is the source still current, or has the underlying reality changed since?
- **Corroboration check** — for anything material, is there a second independent source, or is this resting on one data point?

## Review Points

- Would this record survive being checked against its original source right now?
- Has anyone actually re-verified a record that's been relied on for a while, or is trust just accumulating by repetition?
- Is a single-source claim being treated with the same confidence as a corroborated one?

## Examples

- A traction number cited in [PITCH-NARRATIVE.md](../08-investors/PITCH-NARRATIVE.md) checked against the actual metrics source before use, per [INVESTOR-METRICS.md](../08-investors/INVESTOR-METRICS.md).
- A competitive claim checked against a competitor's actual current offering before going into [COMPETITIVE-MARKETING.md](../06-marketing/COMPETITIVE-MARKETING.md).
- A security/compliance fact checked per [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) before any external use.

## Anti-Patterns

- **Trust by repetition.** A claim believed simply because it's been stated often, never re-checked against its source.
- **Single-source certainty.** Treating one anecdote with the same confidence as a corroborated fact.
- **Stale validation.** A check performed once, long ago, never repeated as the underlying reality changed.

## Related Docs

[REVIEW-GATE-PATTERNS.md](../11-patterns/REVIEW-GATE-PATTERNS.md) · [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) · [KNOWLEDGE-QUALITY-CONTROL.md](KNOWLEDGE-QUALITY-CONTROL.md)
