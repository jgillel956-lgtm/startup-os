---
id: DOC-SLS-001
title: Sales — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: sales
tags: [sales, overview, operating-system]
dependencies: []
related: [DOC-SLS-002, DOC-MKT-001, DOC-PRD-001, DOC-OPS-001]
---

# Sales — Overview

The sales domain defines the **Sales Operating System**: how a Startup OS company identifies, qualifies, manages, advances, closes, and learns from revenue opportunities.

## Where This Sits

```
Marketing (docs/06-marketing/)     "creates demand, hands off qualified interest"
  → Sales (docs/07-sales/)             "manages the opportunity to close"
      → Operations & Support (docs/09-operations/)  "supports the customer after close"
          ↺ win/loss and customer learnings flow back into marketing and product
```

Sales starts where marketing's handoff ends ([MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md)) and ends where the customer is handed to implementation/support ([SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md)). It does not create market demand (marketing) or decide what the product does (product) — it owns turning a qualified opportunity into a closed, well-handed-off customer.

## Documents

| Document | Defines |
|----------|---------|
| [SALES-OPERATING-SYSTEM.md](SALES-OPERATING-SYSTEM.md) | Principles, ownership, planning cadence, opportunity discipline |
| [IDEAL-CUSTOMER-AND-QUALIFICATION.md](IDEAL-CUSTOMER-AND-QUALIFICATION.md) | Fit, urgency, budget, authority, need, timing, disqualification |
| [SALES-PIPELINE.md](SALES-PIPELINE.md) | Stages, entry/exit criteria, deal hygiene, forecasting |
| [DISCOVERY-AND-NEEDS-ASSESSMENT.md](DISCOVERY-AND-NEEDS-ASSESSMENT.md) | Uncovering pain, impact, decision process, stakeholders |
| [DEMO-AND-SOLUTION-PRESENTATION.md](DEMO-AND-SOLUTION-PRESENTATION.md) | Connecting problems to capabilities, proof, next steps |
| [PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md) | Proposals, pricing, packaging, terms, approvals, exceptions |
| [OBJECTION-HANDLING.md](OBJECTION-HANDLING.md) | Responding to and learning from common objections |
| [COMPETITIVE-SALES.md](COMPETITIVE-SALES.md) | Positioning against alternatives, battlecards, win/loss |
| [CONTRACTING-AND-CLOSE.md](CONTRACTING-AND-CLOSE.md) | Verbal alignment through signature, close-won/close-lost |
| [SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md) | Handing closed deals to implementation and support, with context |
| [SALES-METRICS.md](SALES-METRICS.md) | Pipeline, conversion, win rate, cycle length, forecast accuracy |

## How Sales Connects to Everything Else

- **Marketing** (`docs/06-marketing/`) — receives qualified interest with context via [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md); reports back win/loss and message resonance so marketing's positioning and ICP stay grounded in real outcomes.
- **Product** (`docs/02-product/`) — sells what's actually built and roadmapped ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)); surfaces recurring prospect needs as product input via [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md), the same discipline [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md) applies to support signal.
- **Design** (`docs/05-design/`) — demos rely on the real product experience; a confusing UI is sales' problem to report, not paper over in a demo.
- **Operations & Support** (`docs/09-operations/`) — closed deals hand off to onboarding/support with full context ([SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md)), mirroring [CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md).
- **Engineering** (`docs/03-engineering/`) — technical feasibility and integration questions raised during a sales cycle route to engineering rather than being answered with a guess (see [COMPETITIVE-SALES.md](COMPETITIVE-SALES.md) and [PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md)).

## Ownership Boundary

Sales owns active opportunity management and commercial progression. Marketing owns market narrative and demand generation. Product owns product direction and capability decisions. Engineering owns technical feasibility and system health. Operations owns support coordination and customer communication after handoff. Sales does not set pricing strategy or product roadmap unilaterally, and does not commit the company to a technical capability engineering hasn't confirmed — it closes deals within the boundaries those other functions have set, and escalates when a deal needs something outside them.
