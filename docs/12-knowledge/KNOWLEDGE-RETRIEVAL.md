---
id: DOC-KNW-007
title: Knowledge Retrieval
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, retrieval, standard]
dependencies: [DOC-KNW-004]
related: [DOC-KNW-010, DOC-FND-003]
---

# Knowledge Retrieval

## Purpose

Defines how a knowledge record gets found again when it's needed — captured knowledge that can't be retrieved has the practical value of knowledge never captured.

## When to Use

Whenever adding a record (to make it findable later) and whenever needing an answer that might already be known (to check before re-researching it).

## Owner

Whoever owns the knowledge library structure; every capturer is responsible for making their own record findable at the point of capture.

## Inputs

The record's content, its type ([KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md)), and what future question it would answer.

## Outputs

A record that a future reader (human or AI) can actually locate — by filename, by cross-link, or by search, whatever mechanism the company uses.

## Required Artifacts

Descriptive filenames per [NAMING-STANDARDS.md](../00-foundation/NAMING-STANDARDS.md); cross-links from the domain documents a record is relevant to, not just a standalone file nobody links to.

## Retrieval Discipline

- Before capturing something new, check whether it's already recorded — a duplicate record under a different name is effectively unfindable, since a future search might hit either or neither.
- Cross-link a record from every domain document it's relevant to, not just the one it originated from — a record findable from only one path is fragile.

## Review Points

- Could someone unfamiliar with when this was written actually find it later?
- Is it cross-linked from the domains that would need it, or does it only exist in isolation?
- When someone went looking for this and couldn't find it, was a duplicate created instead?

## Examples

- A research finding cross-linked from both [KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md)'s examples and the specific capability's own documentation.
- A market fact findable from both this library and [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md).

## Anti-Patterns

- **Findable-only-by-luck.** A record with no cross-links, discoverable only by someone who happens to browse the folder.
- **Silent duplication.** Recapturing something already known because the original couldn't be found.
- **Vague filenames.** A file named generically enough that it never surfaces in a targeted search.

## Related Docs

[NAMING-STANDARDS.md](../00-foundation/NAMING-STANDARDS.md) · [AI-READY-KNOWLEDGE.md](AI-READY-KNOWLEDGE.md) · [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md)
