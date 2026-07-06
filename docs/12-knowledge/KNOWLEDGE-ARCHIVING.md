---
id: DOC-KNW-009
title: Knowledge Archiving
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, archiving, standard]
dependencies: [DOC-KNW-008]
related: [DOC-FND-007, DOC-ROOT-003]
---

# Knowledge Archiving

## Purpose

Defines when and how a knowledge record is retired — preserving history without letting stale material be mistaken for current guidance.

## When to Use

When a record's relevance has genuinely passed: the market condition it described has changed, the assumption was disproven, or it's been superseded by newer, better evidence.

## Owner

The record's owner, per [KNOWLEDGE-OWNERSHIP.md](KNOWLEDGE-OWNERSHIP.md); confirmed against [KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md) review findings.

## Inputs

A record identified as no longer current, ideally with a stated reason and, if applicable, a successor record.

## Outputs

The record moved to `docs/99-archive/`, status `archived`, per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) and [Constitution Article VII](../../CONSTITUTION.md) — nothing is deleted.

## Required Artifacts

An archived record retains its content and gains a note stating why it was archived and, if one exists, a link to its successor.

## Review Points

- Was the record archived, or silently deleted?
- Does the archive note explain why, so a future reader isn't left guessing?
- Is there a successor link when a newer record replaced this one?

## Examples

- A disproven market assumption archived with a note pointing to the corrected [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md) assumption.
- A superseded competitive fact archived once the competitor's offering changed materially, per [COMPETITIVE-MARKETING.md](../06-marketing/COMPETITIVE-MARKETING.md).

## Anti-Patterns

- **Deleting instead of archiving.** Losing the historical record of what was once believed and why.
- **Archiving without explanation.** A retired record with no stated reason, leaving a future reader unable to tell if it's wrong or just old.
- **Leaving stale records active.** Knowledge that's clearly outdated but never moved to archived status, risking being read as current.

## Related Docs

[STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) · [KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md) · `docs/99-archive/`
