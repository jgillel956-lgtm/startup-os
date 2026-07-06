---
id: DOC-ARCH-006
title: Historical Reference
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, historical-reference, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-ARCH-011, DOC-KNW-004]
---

# Historical Reference

## Purpose

Defines how archived material is used safely for context — understanding why a past decision was made, without mistaking it for current guidance.

## When to Use

Researching why something is the way it is, onboarding someone into the company's history, or checking whether a currently-debated idea was already tried and rejected before.

## Owner

Whoever's researching; the archived document's original owner if deeper context is needed.

## Inputs

An archived document relevant to the question at hand.

## Outputs

Context that informs a current decision, without being cited as if it were still binding.

## Required Artifacts

None beyond the archived document itself — historical reference is a way of reading, not a new artifact.

## How to Reference Archived Material Correctly

State explicitly that the source is archived and from when — "per an archived 2025 decision, since superseded" reads very differently from an unqualified citation that implies current authority. Per [AI-USE-OF-ARCHIVED-KNOWLEDGE.md](AI-USE-OF-ARCHIVED-KNOWLEDGE.md), this applies to AI-generated references too.

## Review Points

- Does the reference make clear the source is archived, not current?
- If the archived document was superseded, is the successor also checked and cited where relevant?
- Is the historical context actually informing a decision, or just being cited to win an argument without checking if it still applies?

## Examples

- Citing an archived ADR to understand why a now-replaced architecture was originally chosen, before proposing something new.
- Checking archived market research to see whether a currently-proposed strategy was already tried and found not to work.

## Anti-Patterns

- **Unqualified citation.** Referencing archived material without noting it's archived, implying current authority it no longer has.
- **Ignoring the successor.** Citing archived material's now-outdated conclusion while ignoring that a successor document reached a different one.
- **Historical amnesia.** Never checking the archive before re-proposing something that was already tried and specifically rejected.

## Related Docs

[AI-USE-OF-ARCHIVED-KNOWLEDGE.md](AI-USE-OF-ARCHIVED-KNOWLEDGE.md) · [KNOWLEDGE-STRUCTURE.md](../12-knowledge/KNOWLEDGE-STRUCTURE.md)
