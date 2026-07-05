---
id: DOC-PRD-008
title: Prioritization Standard
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, prioritization, standard]
dependencies: [DOC-PRD-002]
related: [DOC-PRD-003, DOC-PRD-005]
---

# Prioritization Standard

Defines how Startup OS companies prioritize capabilities and features — a framework, not a specific company's roadmap.

## Prioritization Principles

1. **Evidence over enthusiasm.** A feature is prioritized because of demonstrated value or risk, not because it's interesting to build.
2. **One list, ranked.** Competing work is compared against the same list — parallel "priority ones" defeat the purpose of prioritizing.
3. **Reversible until committed.** Priority can change as evidence changes; it is a current best judgment, not a promise.
4. **Say no in writing.** A deprioritized idea gets a documented reason, not silence — see [FUTURE.md](CAPABILITY-MODEL.md) in the capability folder structure.

## MVP Discipline

Ship the smallest slice that lets you learn whether the capability delivers its intended outcome. A PRD's non-goals section (per [PRD-STANDARD.md](PRD-STANDARD.md)) is the primary MVP-discipline tool — everything deferred goes there, not silently into scope.

## Must / Should / Could / Won't

| Tier | Meaning |
|------|---------|
| Must | The capability/PRD does not ship without this |
| Should | Important, but shipping without it is viable if necessary |
| Could | Valuable if time allows; first to cut under pressure |
| Won't | Explicitly out of scope for this iteration (not "never," just "not now") |

Every user story and requirement carries one of these tiers (see [USER-STORY-TEMPLATE.md](../10-templates/USER-STORY-TEMPLATE.md)).

## Prioritization Factors

Weighed together, not by a single dominant factor:

- **Business value** — revenue, retention, or strategic positioning impact.
- **Customer pain** — how acute and how widespread the problem is.
- **Revenue impact** — direct effect on revenue or cost, where estimable.
- **Risk reduction** — whether this reduces a known operational, security, or compliance risk.
- **Complexity** — effort and uncertainty required to deliver it.
- **Dependencies** — whether this blocks or is blocked by other work.
- **Speed to market** — cost of delay; some value decays if not delivered promptly.
- **Strategic value** — fit with where the business is trying to go, beyond immediate metrics.

## When to Say No

Say no when a request scores low on value/pain/risk relative to available capacity, or when it would compromise a Startup OS constraint (company-neutrality, documentation-before-development, security). A "no" is recorded with its reasoning, not left implicit.

## When to Defer Features

Defer — rather than reject — when the idea has merit but isn't the highest-value use of current capacity. Deferred items go into a capability's `FUTURE.md` (see [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)) with enough context that revisiting them later doesn't require re-deriving the reasoning from scratch.
