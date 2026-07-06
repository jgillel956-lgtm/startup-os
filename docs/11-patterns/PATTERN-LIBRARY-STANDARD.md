---
id: DOC-PAT-002
title: Pattern Library Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, standard, library]
dependencies: [DOC-PAT-001]
related: [DOC-TPL-002, DOC-FND-004]
---

# Pattern Library Standard

Defines the required structure every pattern document in this library follows, and the discipline that keeps a pattern from silently becoming an unenforced standard or a vague template.

## Required Structure

Every pattern document includes, in order:

1. **Purpose** — what recurring problem this pattern addresses.
2. **When to Use** — the situation that calls for it, and when it doesn't fit.
3. **Common Pattern** — the actual reusable shape: the steps, roles, or structure that recur.
4. **Inputs** — what needs to exist before this pattern can be applied.
5. **Outputs** — what applying it produces.
6. **Owner** — who typically holds this pattern's steps, acknowledging it varies by domain.
7. **Review Points** — where to check the pattern is actually working, not just being followed mechanically.
8. **Example Use Cases** — real instances already in Startup OS where this pattern shows up, by name and link.
9. **Anti-Patterns** — the recognizable ways this shape gets done badly.
10. **Related Docs** — the domain standards, templates, and other patterns it connects to.

## What Makes Something a Pattern, Not a Standard

A pattern describes a shape that already appears, adapted, in more than one domain — it is descriptive of what works, not prescriptive of what must happen. If every domain that could use a pattern is instead required to follow it identically, it has become a standard and should be documented as one (in that domain's own folder, or in `docs/00-foundation/` if it's framework-wide) — not left here pretending to be optional.

## What Makes Something a Pattern, Not a Template

A pattern has no fill-in-the-blank document at its center — it's a way of structuring a solution, not a specific artifact. If a pattern accumulates a genuinely reusable fillable document, that document belongs in [`docs/10-templates/`](../10-templates/README.md), cross-linked from the pattern, not embedded as if the pattern itself were the template.

## Avoiding Invented Patterns

Every pattern here traces to at least two real, already-documented instances elsewhere in Startup OS (see [README.md](README.md)'s "Where These Patterns Already Show Up"). A pattern invented from first principles, with no real instance to point to, doesn't belong here yet — write down the real instance first, and extract the pattern once it's shown up more than once.

## Adding a New Pattern

1. Confirm it's genuinely a pattern (above), not a standard or template in disguise.
2. Find at least two real instances already in the repository.
3. Follow the required structure.
4. Assign the next `DOC-PAT-NNN`.
5. Add it to [README.md](README.md)'s table and cross-link it from the domain instances it was extracted from.

## Ownership

The founder (or whoever owns `docs/00-foundation/` standards generally) owns this library's structure; whoever extracts a new pattern is responsible for finding its real instances first.
