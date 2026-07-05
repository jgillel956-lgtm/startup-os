---
id: DOC-ENG-011
title: Technical Debt
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, technical-debt, standard]
dependencies: [DOC-ENG-002]
related: [DOC-ENG-010, DOC-ENG-012, DOC-PRD-008]
---

# Technical Debt

Defines how technical debt is identified, documented, prioritized, and either paid down or knowingly accepted. Technical debt that's tracked is a managed trade-off; technical debt that isn't tracked is just decay.

## What Counts as Technical Debt

A known gap between the current implementation and what it should be — a shortcut taken deliberately under time pressure, an outdated dependency, a missing test, an architecture that no longer fits current scale, or documentation that's fallen out of sync with behavior. Not every imperfection is debt — debt is a gap someone consciously decided to leave, or discovered and hasn't yet addressed.

## Identifying Debt

- Debt is named at the moment it's created wherever possible — "we're doing X instead of Y because of time; Y is better" belongs in the PR description and a debt entry, not just in someone's memory.
- Debt discovered later (during review, an incident postmortem, or a metrics review) is logged the same way, regardless of who's "at fault" for it existing.

## Documenting Debt

Each entry states: what the gap is, why it exists, what it costs to leave (risk, velocity drag, user impact), and what it would take to fix. A debt entry with no stated cost can't be prioritized against real work — it just becomes a permanent line item nobody reads.

## Prioritizing Debt

Debt competes for the same attention as new work, using the same lens as [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md): business value (here, mostly risk reduction and velocity), customer pain if it's user-visible, and complexity to fix. Debt is not automatically lower priority than features — a debt item actively causing incidents outranks most features.

## Accepting Debt

Some debt is knowingly accepted rather than fixed — the cost of fixing it exceeds the cost of living with it, for now. Acceptance is explicit (stated, with a reason and, ideally, a revisit trigger) — not a default that happens by never getting to it.

## Paying Down Debt

- High-risk debt (security, data integrity, anything blocking scale that's approaching) gets scheduled deliberately, not left to "whenever there's slack time" — there is rarely slack time.
- Paying down debt is itself a change subject to [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md) and [BRANCHING-AND-CODE-REVIEW.md](BRANCHING-AND-CODE-REVIEW.md) — "it's just cleanup" does not exempt it from review.

## Escalating Debt

Debt that's been repeatedly deprioritized despite rising cost (recurring incidents, growing workaround complexity) is escalated explicitly to the engineering owner rather than silently re-added to the backlog for another cycle. Three cycles of deferral on a growing-cost item is itself a signal worth surfacing.

## AI Agents and Technical Debt

AI agents should log debt they create (a shortcut taken to meet a stated scope) and debt they discover (a gap noticed while working nearby) rather than silently fixing unrelated debt mid-task — an unplanned fix folded into an unrelated PR makes both harder to review (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), "small, reviewable changes" and "no broad abstractions before they're needed").
