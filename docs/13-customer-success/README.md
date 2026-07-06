---
id: DOC-CS-001
title: Customer Success — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: customer-success
tags: [customer-success, overview, operating-system]
dependencies: []
related: [DOC-CS-002, DOC-SLS-011, DOC-OPS-001, DOC-PRD-001]
---

# Customer Success — Overview

The customer success domain defines the **Customer Success Operating System**: how a Startup OS company manages onboarding, adoption, account health, renewals, expansion opportunities, relationship management, customer outcomes, and churn prevention — after a customer becomes active.

## Where This Sits

```
Sales (docs/07-sales/)              "closes the deal, hands off with context"
  → Customer Success (docs/13-customer-success/)   "owns the customer relationship and outcomes going forward"
      ↔ Operations & Support (docs/09-operations/)   "handles day-to-day issues and communication"
      ↺ adoption gaps, health signals, and outcomes flow back into product, marketing, and sales
```

Customer success starts where [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) ends. It does not manage active sales opportunities (sales) or handle day-to-day support tickets (operations) — it owns whether the customer actually achieves the outcome they bought the product for, and whether the relationship survives and grows.

## Documents

| Document | Defines |
|----------|---------|
| [CUSTOMER-SUCCESS-OPERATING-SYSTEM.md](CUSTOMER-SUCCESS-OPERATING-SYSTEM.md) | Model, ownership, principles, collaboration, cadence |
| [CUSTOMER-ONBOARDING.md](CUSTOMER-ONBOARDING.md) | Signed agreement to active usage: planning, kickoff, milestones |
| [IMPLEMENTATION-HANDOFF.md](IMPLEMENTATION-HANDOFF.md) | Context transfer across sales, implementation, ops, product, CS |
| [ADOPTION-AND-ENGAGEMENT.md](ADOPTION-AND-ENGAGEMENT.md) | Usage monitoring, adoption milestones, underuse risk |
| [CUSTOMER-HEALTH.md](CUSTOMER-HEALTH.md) | Health signals, scoring principles, review cadence, escalation |
| [RELATIONSHIP-MANAGEMENT.md](RELATIONSHIP-MANAGEMENT.md) | Stakeholder mapping, business reviews, relationship risk |
| [RENEWALS-AND-RETENTION.md](RENEWALS-AND-RETENTION.md) | Renewal planning, retention risk, value reinforcement |
| [EXPANSION-AND-GROWTH.md](EXPANSION-AND-GROWTH.md) | Expansion opportunities, validated value, coordination with sales |
| [CUSTOMER-OUTCOMES.md](CUSTOMER-OUTCOMES.md) | Success plans, business goals, measurable value, proof points |
| [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md) | Identifying, escalating, and learning from churn risk |
| [CUSTOMER-SUCCESS-METRICS.md](CUSTOMER-SUCCESS-METRICS.md) | Time to value, adoption, health, renewal, churn, expansion |

## How Customer Success Connects to Everything Else

- **Sales** (`docs/07-sales/`) — receives closed deals with full context via [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md); coordinates with sales on renewals and expansion ([RENEWALS-AND-RETENTION.md](RENEWALS-AND-RETENTION.md), [EXPANSION-AND-GROWTH.md](EXPANSION-AND-GROWTH.md)) since those carry commercial terms sales owns.
- **Operations & Support** (`docs/09-operations/`) — support handles day-to-day tickets ([CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md)); customer success watches for patterns in that signal that indicate account health risk, via the same feedback discipline as [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md).
- **Product** (`docs/02-product/`) — adoption gaps and customer outcome data are product input via [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md), the same way support themes are.
- **Marketing** (`docs/06-marketing/`) — proven customer outcomes become proof points and case studies ([POSITIONING-AND-MESSAGING.md](../06-marketing/POSITIONING-AND-MESSAGING.md), [CONTENT-MARKETING.md](../06-marketing/CONTENT-MARKETING.md)).
- **Engineering** (`docs/03-engineering/`) — only where a technical blocker, reliability issue, or incident is actually driving a customer outcome or churn risk (see [CUSTOMER-HEALTH.md](CUSTOMER-HEALTH.md), [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md)).

## Ownership Boundary

Customer success owns customer outcomes, adoption, retention risk, and relationship continuity after close. Sales owns commercial opportunity management (new deals, and the commercial mechanics of renewals/expansion). Operations owns support coordination and customer issue communication. Product owns product direction and prioritization. Engineering owns technical implementation and system health. Customer success does not negotiate commercial terms unilaterally and does not resolve support tickets directly — it makes sure the right owner is engaged and the customer's actual outcome stays on track.
