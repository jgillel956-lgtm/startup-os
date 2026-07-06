---
id: DOC-PAT-004
title: Decision Making Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, decisions]
dependencies: [DOC-PAT-002]
related: [DOC-BIZ-008, DOC-ENG-004]
---

# Decision Making Patterns

## Purpose

A repeatable shape for making a hard, hard-to-reverse, or cross-cutting call — so the reasoning survives past the meeting it was made in, and the decision can be revisited deliberately instead of relitigated from scratch.

## When to Use

A decision that's expensive to reverse, affects more than one domain, or commits meaningful resources. Not needed for routine calls clearly within one owner's stated authority.

## Common Pattern

```
Context (what forces a decision) → Options (at least two real ones) →
Decision (the choice + primary reason) → Consequences (including the honest downside) →
Revisit criteria (what would trigger reopening it)
```

The consequences step is the one people skip under pressure — and the one that matters most later, when someone asks "why did we do this" and the honest downside is the part they actually need to hear.

## Inputs

The forcing context; at least one real alternative to the obvious choice.

## Outputs

A documented decision record, findable later, that a person who wasn't in the room can understand.

## Owner

Whoever holds authority for the decision type; escalates to a broader owner when authority is unclear or the decision crosses domains.

## Review Points

- Were at least two real options considered, or was this a decision made and options listed afterward to look rigorous?
- Does the consequences section include something that gets harder, not just what gets easier?
- Is there a stated trigger for revisiting, or is this decision effectively permanent by default?

## Example Use Cases

- [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) — the engineering-specific instance.
- [DECISION-MAKING.md](../01-business/DECISION-MAKING.md) — the business-wide instance.
- [ADR-TEMPLATE.md](../10-templates/ADR-TEMPLATE.md) — the fillable artifact this pattern produces.
- `DECISIONS.md` — where framework-level instances of this pattern are recorded.

## Anti-Patterns

- **One-sided records.** Documenting only the chosen option's upside.
- **Options theater.** Listing alternatives that were never seriously considered, to make a predetermined choice look rigorous.
- **Silent reversal.** Quietly doing the opposite of a documented decision without a new decision record explaining why.

## Related Docs

[ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) · [DECISION-MAKING.md](../01-business/DECISION-MAKING.md) · [ADR-TEMPLATE.md](../10-templates/ADR-TEMPLATE.md)
