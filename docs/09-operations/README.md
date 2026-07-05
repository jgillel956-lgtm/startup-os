---
id: DOC-OPS-001
title: Operations & Support — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, support, overview, operating-system]
dependencies: []
related: [DOC-OPS-002, DOC-OPS-003, DOC-ENG-001, DOC-PRD-001]
---

# Operations & Support — Overview

The operations domain defines the **Operations & Support Operating System**: how a Startup OS company supports customers, manages service expectations, handles escalations, communicates incidents, maintains support knowledge, and turns support experience into product and engineering input.

## Where This Sits

```
Product (docs/02-product/)         "what to build, and why"
  → Engineering (docs/03-engineering/)   "how it's built, and how it stays healthy"
      → Operations & Support (docs/09-operations/)   "how customers are supported once it's live"
          ↺ feedback flows back into Product and Engineering
```

Operations & Support starts once something is in customers' hands. It does not decide what gets built or how — it owns the customer relationship around what's already built: answering questions, resolving issues, coordinating when something's wrong, and making sure what's learned from customers doesn't get lost.

## Documents

| Document | Defines |
|----------|---------|
| [OPERATIONS-OPERATING-SYSTEM.md](OPERATIONS-OPERATING-SYSTEM.md) | The overall operating model for customer operations |
| [CUSTOMER-SUPPORT-MODEL.md](CUSTOMER-SUPPORT-MODEL.md) | Channels, coverage, roles, ticket ownership, boundaries |
| [SUPPORT-INTAKE-AND-TRIAGE.md](SUPPORT-INTAKE-AND-TRIAGE.md) | How requests are received, categorized, routed, closed |
| [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md) | Severity levels, response/resolution targets, accountability |
| [ESCALATION-MANAGEMENT.md](ESCALATION-MANAGEMENT.md) | When and how issues escalate beyond first-line support |
| [INCIDENT-COMMUNICATION.md](INCIDENT-COMMUNICATION.md) | Customer-facing communication before, during, after incidents |
| [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md) | Tone, clarity, cadence, and honesty under uncertainty |
| [SUPPORT-KNOWLEDGE-BASE.md](SUPPORT-KNOWLEDGE-BASE.md) | How support documentation is created, maintained, retired |
| [OPERATIONAL-RUNBOOKS.md](OPERATIONAL-RUNBOOKS.md) | Runbooks for recurring, manual, exception, and recovery work |
| [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) | How support themes flow back into product and engineering |
| [OPERATIONS-METRICS.md](OPERATIONS-METRICS.md) | Response time, resolution time, SLA adherence, CSAT, and more |

## How Operations Connects to Everything Else

- **Product** (`docs/02-product/`) — support is where a PRD's real-world edge cases surface first; feedback flows back via [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) into [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) and the [Improvement stage](../02-product/PRODUCT-LIFECYCLE.md).
- **Engineering** (`docs/03-engineering/`) — incidents, defects, and technical escalations route to engineering via [ESCALATION-MANAGEMENT.md](ESCALATION-MANAGEMENT.md); engineering's [Observability and Incidents](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md) is the technical mirror of this domain's [Incident Communication](INCIDENT-COMMUNICATION.md).
- **Customers** — the direct relationship this whole domain exists to manage: response, resolution, and honest communication.
- **Internal teams** — support coordinates across whoever needs to act (engineering, product, account management) without itself owning their decisions.
- **Company leadership** — sees the state of customer-facing risk through [OPERATIONS-METRICS.md](OPERATIONS-METRICS.md) and escalations that reach [ESCALATION-MANAGEMENT.md](ESCALATION-MANAGEMENT.md)'s leadership tier.

## Ownership Boundary

Support owns customer communication and issue coordination. Support does **not** own product decisions, technical fixes, release planning, or system health — those stay with product and engineering, per [OPERATIONS-OPERATING-SYSTEM.md](OPERATIONS-OPERATING-SYSTEM.md). Support's job is to make sure the right owner is engaged quickly and the customer is told the truth while that happens — not to make the technical or product call itself.
