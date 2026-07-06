---
id: DOC-BIZ-002
title: Business Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: business
tags: [business, operating-model, standard]
dependencies: [DOC-BIZ-001]
related: [DOC-BIZ-003, DOC-BIZ-007, DOC-BIZ-008]
---

# Business Operating System

Defines the overall business operating model: ownership, principles, cadence, artifacts, review expectations, and decision standards. No specific business model, industry, or operating tool is assumed.

## Principles

1. **Strategy follows evidence.** Direction is set and revised based on what product, sales, customer success, and operations actually show — not on conviction alone (see [STRATEGIC-REVIEW.md](STRATEGIC-REVIEW.md)).
2. **One direction, understood everywhere.** Every domain should be able to state how its work connects to current company strategy ([COMPANY-STRATEGY.md](COMPANY-STRATEGY.md)) — a domain that can't is either disconnected from strategy or strategy hasn't been communicated well enough.
3. **Decisions are owned, not diffused.** Every material decision has a specific owner and is documented ([DECISION-MAKING.md](DECISION-MAKING.md)) — a decision nobody owns is a decision nobody's accountable for.
4. **Risk is named, not absorbed silently.** Business risks and the assumptions strategy depends on are written down ([BUSINESS-RISKS-AND-ASSUMPTIONS.md](BUSINESS-RISKS-AND-ASSUMPTIONS.md)), not just carried as background anxiety.
5. **Lightweight until it needs to not be.** A one-founder company can run this whole system as a notebook and a weekly gut-check — the discipline (evidence-based strategy, owned decisions, named risks) matters more than the process weight.

## Ownership

Leadership owns company strategy, business model, risk acceptance, operating cadence, and company-level decisions — see the ownership boundary in [README.md](README.md).

| Role | Responsibility |
|------|-----------------|
| Founder / leadership | Strategy, business model, risk acceptance, final decision authority |
| Domain owners (product, marketing, sales, CS, engineering, etc.) | Executing within strategy, supplying evidence, flagging when reality contradicts direction |

One person holds most of these roles early on — the responsibilities still apply.

## Operating Cadence

Full detail in [OPERATING-CADENCE.md](OPERATING-CADENCE.md); in brief: a stated rhythm of planning cycles and reviews, scaled to company size — not mandated as a specific framework, but never absent entirely.

## Artifacts

| Artifact | Governed by |
|----------|-------------|
| Strategy statement | [COMPANY-STRATEGY.md](COMPANY-STRATEGY.md) |
| Business model description | [BUSINESS-MODEL.md](BUSINESS-MODEL.md) |
| Goals/OKRs | [GOALS-AND-OKRS.md](GOALS-AND-OKRS.md) |
| Decision log | [DECISION-MAKING.md](DECISION-MAKING.md) |
| Risk register | [BUSINESS-RISKS-AND-ASSUMPTIONS.md](BUSINESS-RISKS-AND-ASSUMPTIONS.md) |
| Strategic review record | [STRATEGIC-REVIEW.md](STRATEGIC-REVIEW.md) |

## Review Expectations

Strategy, goals, and risk are reviewed on the cadence [OPERATING-CADENCE.md](OPERATING-CADENCE.md) sets — not only when something goes wrong. A review checks actual evidence (metrics, outcomes, customer signal) against stated goals, per [STRATEGIC-REVIEW.md](STRATEGIC-REVIEW.md).

## Decision Standards

A decision with company-wide, hard-to-reverse, or cross-domain consequences follows [DECISION-MAKING.md](DECISION-MAKING.md)'s documentation discipline — the same context/options/decision/consequences structure as an engineering ADR ([ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)), applied at the business level.

## Inputs and Outputs

- **Inputs:** metrics and outcomes from every domain, market/customer evidence, financial reality, investor and governance input.
- **Outputs:** a stated strategy, goals, a decision log, a risk register, and periodic strategic review records that feed back into every domain's own priorities.

## Scaling the System

At one founder: strategy may be a page, goals may be a short list, and review may be a weekly personal check-in against them. What must not shrink to zero: strategy is written down somewhere, not just held in one person's head; every domain can trace its priorities back to it; and known risks are named, not just felt. Formalize as the team and company grow.
