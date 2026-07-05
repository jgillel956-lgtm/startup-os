---
id: DOC-OPS-002
title: Operations Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, support, operating-model, standard]
dependencies: [DOC-OPS-001]
related: [DOC-OPS-003, DOC-OPS-006, DOC-ENG-002, DOC-PRD-002]
---

# Operations Operating System

Defines the overall operating model for customer operations: support ownership, principles, service quality, escalation paths, and how the function improves over time.

## Principles

1. **The customer gets the truth, promptly.** Not the most comforting answer — the accurate one, delivered as fast as it can be delivered accurately (see [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md)).
2. **Coordinate, don't solve alone.** Support's value is routing the right issue to the right owner fast, not becoming a bottleneck by trying to resolve everything itself.
3. **Every issue is a data point.** A ticket closed without being categorized and, where relevant, fed back is a lost signal (see [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md)).
4. **Lightweight until it needs to not be.** One person can run this whole system informally at first — the discipline (triage, honest communication, feedback capture) matters more than the tooling.

## Support Ownership

Support owns:

- The customer relationship for issues, questions, and incidents.
- Coordinating a response across whoever needs to be involved.
- Deciding what the customer is told and when (working from facts engineering/product provide).

Support does not own:

- Whether a reported behavior is a bug worth fixing now, later, or never (product/engineering call, informed by support's input).
- The technical fix itself (engineering).
- Roadmap or pricing decisions (product/business).

## Service Quality

Service quality is defined by [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md) — response and resolution targets by severity — and measured by [OPERATIONS-METRICS.md](OPERATIONS-METRICS.md). Quality is not "customers didn't complain" — it's meeting stated targets and knowing when they're missed.

## Escalation Paths

Support escalates outward when an issue exceeds what first-line support can resolve: to engineering for technical issues, to product for behavior/roadmap questions, to leadership for business-risk or reputational issues, to vendors/account management where a third party is involved. Full detail in [ESCALATION-MANAGEMENT.md](ESCALATION-MANAGEMENT.md).

## Continuous Improvement

- Support knowledge ([SUPPORT-KNOWLEDGE-BASE.md](SUPPORT-KNOWLEDGE-BASE.md)) and runbooks ([OPERATIONAL-RUNBOOKS.md](OPERATIONAL-RUNBOOKS.md)) are updated as issues recur — a question answered three times becomes a knowledge base article, not three more ad hoc answers.
- Recurring themes feed [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) so they become product/engineering input, not permanent support overhead.
- Metrics are reviewed on a regular rhythm, the same discipline as [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) — a trend acted on early is cheaper than one left to become a crisis.

## Inputs and Outputs

- **Inputs:** customer questions, bug reports, incidents, feature requests, released capabilities and known issues from engineering/product.
- **Outputs:** resolved tickets, escalations routed to the right owner, customer-facing incident communication, knowledge base articles, runbooks, and structured feedback into product/engineering.

## Scaling the System

At one person: triage, response, and feedback capture happen in one head, informally. What must not disappear at any size: a stated response expectation (even if just "we reply within a day"), a way to escalate when something's beyond first-line support, and somewhere findable that recurring issues get written down. Formalize as the team grows — don't invent new obligations, staff the ones already here.
