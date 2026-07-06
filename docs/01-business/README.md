---
id: DOC-BIZ-001
title: Business — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: business
tags: [business, overview, operating-system]
dependencies: []
related: [DOC-BIZ-002, DOC-PRD-002, DOC-INV-001]
---

# Business — Overview

The business domain defines the **Business Operating System**: how a Startup OS company defines strategy, business model, operating cadence, goals, ownership, decisions, risks, metrics, and strategic reviews. It is the layer that connects every other domain to a single company-level direction.

This domain does not provide legal, tax, accounting, or securities advice, and does not assume a specific business model, pricing model, funding stage, industry, legal structure, or accounting method.

## Where This Sits

```
                        Business (docs/01-business/)
                     "what the company is trying to become, and why"
                              ↓ sets direction for ↓
Product · Engineering · Design · Marketing · Sales · Customer Success · Operations · Investors · Security & Compliance
                              ↑ report evidence back up ↑
```

Every other domain executes within a direction the business domain sets, and reports real evidence back up to it. Business strategy is not invented independently of what's actually happening in product, sales, or customer success — it's set with that evidence, and revised when the evidence contradicts it.

## Documents

| Document | Defines |
|----------|---------|
| [BUSINESS-OPERATING-SYSTEM.md](BUSINESS-OPERATING-SYSTEM.md) | Overall model, ownership, principles, cadence |
| [COMPANY-STRATEGY.md](COMPANY-STRATEGY.md) | Mission, vision, strategic themes, differentiation |
| [BUSINESS-MODEL.md](BUSINESS-MODEL.md) | Revenue model, value creation/capture, cost structure |
| [MARKET-AND-CUSTOMER-STRATEGY.md](MARKET-AND-CUSTOMER-STRATEGY.md) | Markets, segments, target customers, market assumptions |
| [GOALS-AND-OKRS.md](GOALS-AND-OKRS.md) | Goals, objectives, key results, priorities, milestones |
| [OPERATING-CADENCE.md](OPERATING-CADENCE.md) | Planning cycles, weekly/monthly/quarterly/annual rhythm |
| [DECISION-MAKING.md](DECISION-MAKING.md) | How decisions across domains are made and documented |
| [OWNERSHIP-AND-ACCOUNTABILITY.md](OWNERSHIP-AND-ACCOUNTABILITY.md) | Role clarity, decision owners, escalation paths |
| [BUSINESS-RISKS-AND-ASSUMPTIONS.md](BUSINESS-RISKS-AND-ASSUMPTIONS.md) | Risks, assumptions, dependencies, mitigation |
| [STRATEGIC-REVIEW.md](STRATEGIC-REVIEW.md) | How leadership reviews strategy and performance |
| [BUSINESS-METRICS.md](BUSINESS-METRICS.md) | Revenue, growth, retention, margin, runway, pipeline |

## How Business Connects to Every Domain

- **Product** (`docs/02-product/`) — strategy sets what problems matter; product decides how to solve them ([PRODUCT-OPERATING-SYSTEM.md](../02-product/PRODUCT-OPERATING-SYSTEM.md)).
- **Marketing** (`docs/06-marketing/`) — market/customer strategy grounds positioning ([MARKETING-OPERATING-SYSTEM.md](../06-marketing/MARKETING-OPERATING-SYSTEM.md)).
- **Sales** (`docs/07-sales/`) — revenue goals and business model inform pipeline targets ([SALES-OPERATING-SYSTEM.md](../07-sales/SALES-OPERATING-SYSTEM.md)).
- **Customer Success** (`docs/13-customer-success/`) — retention/expansion goals are business goals, not a side metric ([CUSTOMER-SUCCESS-OPERATING-SYSTEM.md](../13-customer-success/CUSTOMER-SUCCESS-OPERATING-SYSTEM.md)).
- **Investors** (`docs/08-investors/`) — fundraising strategy and investor metrics are business-strategy-driven, not independent ([INVESTOR-OPERATING-SYSTEM.md](../08-investors/INVESTOR-OPERATING-SYSTEM.md)).
- **Operations** (`docs/09-operations/`) — support volume and operational risk feed business risk tracking ([OPERATIONS-OPERATING-SYSTEM.md](../09-operations/OPERATIONS-OPERATING-SYSTEM.md)).
- **Engineering, Design, Security & Compliance** — delivery reliability, experience quality, and trust posture are business-level risks and dependencies, not purely technical concerns.

## Ownership Boundary

Leadership owns company strategy, business model, risk acceptance, operating cadence, and company-level decisions. Each domain owns its own execution and supplies the evidence (metrics, outcomes, risks) that strategy and review are actually built on. Leadership does not set strategy disconnected from that evidence, and no domain unilaterally redefines company strategy from its own execution alone.
