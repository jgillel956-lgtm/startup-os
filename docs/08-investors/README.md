---
id: DOC-INV-001
title: Investors — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: investors
tags: [investors, overview, operating-system]
dependencies: []
related: [DOC-INV-002, DOC-MKT-001, DOC-SLS-001, DOC-SEC-001]
---

# Investors — Overview

The investors domain defines the **Investor Operating System**: how a Startup OS company prepares for fundraising, manages investor relationships, maintains investor materials, organizes a data room, supports due diligence, communicates progress, and tracks investor pipeline health.

This domain does not provide legal, tax, accounting, or securities advice, and does not assume a specific funding stage, investor type, legal structure, or fundraising tool. Any financial, legal, securities, tax, accounting, or compliance claim made to an investor is verified by qualified advisors before external use — the same discipline [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) requires for security and compliance claims, applied here to fundraising.

## Where This Sits

```
Business strategy (docs/01-business/) + Product (docs/02-product/)   "what the company is and where it's going"
  + Marketing narrative (docs/06-marketing/) + Sales & CS traction (docs/07-sales/, docs/13-customer-success/)
  + Security & compliance posture (docs/14-security-compliance/)
      ↓ all feed into
Investors (docs/08-investors/)   "the fundraising story, told accurately, to the right people"
```

Investor work draws evidence from every other domain — it does not originate its own facts. A pitch deck's traction slide restates what sales and customer success actually achieved; it does not invent a stronger version of it.

## Documents

| Document | Defines |
|----------|---------|
| [INVESTOR-OPERATING-SYSTEM.md](INVESTOR-OPERATING-SYSTEM.md) | Overall model, ownership, principles, cadence |
| [FUNDRAISING-STRATEGY.md](FUNDRAISING-STRATEGY.md) | Whether/why/how much to raise, milestones, readiness |
| [INVESTOR-PIPELINE.md](INVESTOR-PIPELINE.md) | Targets, introductions, stages, follow-ups, outcomes |
| [PITCH-NARRATIVE.md](PITCH-NARRATIVE.md) | Company story: problem, opportunity, traction, moat, team |
| [INVESTOR-DECK.md](INVESTOR-DECK.md) | Deck structure, evidence requirements, claim guardrails |
| [FINANCIAL-MODEL-AND-ASSUMPTIONS.md](FINANCIAL-MODEL-AND-ASSUMPTIONS.md) | Forecasts, assumptions, scenarios, unit economics, runway |
| [INVESTOR-DATA-ROOM.md](INVESTOR-DATA-ROOM.md) | Structure, permissions, versioning, diligence readiness |
| [DUE-DILIGENCE.md](DUE-DILIGENCE.md) | Receiving, assigning, answering, tracking diligence requests |
| [INVESTOR-UPDATES.md](INVESTOR-UPDATES.md) | Recurring update cadence, content, distribution |
| [BOARD-AND-GOVERNANCE.md](BOARD-AND-GOVERNANCE.md) | Lightweight governance, board/advisor communication |
| [INVESTOR-METRICS.md](INVESTOR-METRICS.md) | Pipeline, conversion, runway, burn, growth, consistency |

## How Investor Work Connects to Everything Else

- **Business** (`docs/01-business/`) — fundraising strategy is grounded in actual business strategy and milestones, not invented independently.
- **Product** (`docs/02-product/`) — the pitch narrative's product story reflects actual capabilities and roadmap ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)), not aspirational claims.
- **Marketing** (`docs/06-marketing/`) — investor narrative uses the same positioning discipline as [POSITIONING-AND-MESSAGING.md](../06-marketing/POSITIONING-AND-MESSAGING.md) and the same claim-review discipline as [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md).
- **Sales & Customer Success** (`docs/07-sales/`, `docs/13-customer-success/`) — traction claims (pipeline, retention, growth) restate what [SALES-METRICS.md](../07-sales/SALES-METRICS.md) and [CUSTOMER-SUCCESS-METRICS.md](../13-customer-success/CUSTOMER-SUCCESS-METRICS.md) actually show.
- **Security & Compliance** (`docs/14-security-compliance/`) — any trust, compliance, or certification claim in investor materials or diligence responses follows [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) and [COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md) — never asserted to impress an investor.

## Ownership Boundary

Leadership owns fundraising decisions and investor relationships. Finance or leadership owns financial assumptions. Product owns product direction. Sales and customer success own revenue and customer evidence. Marketing owns narrative clarity. Security and compliance own trust-claim guardrails. Investor materials assemble evidence from each owner — they do not let any one function unilaterally decide what claim gets made in someone else's area.
