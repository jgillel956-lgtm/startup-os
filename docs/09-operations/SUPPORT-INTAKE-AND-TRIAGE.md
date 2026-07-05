---
id: DOC-OPS-004
title: Support Intake and Triage
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, support, triage, standard]
dependencies: [DOC-OPS-003]
related: [DOC-OPS-005, DOC-OPS-006, DOC-OPS-011]
---

# Support Intake and Triage

Defines how support requests move from arriving to closed: received, categorized, prioritized, routed, worked, updated, and closed. No specific ticketing tool is assumed — the stages apply however intake is actually implemented.

## Receive

- **Input:** A customer request arrives on any supported channel.
- **Output:** A tracked ticket exists — nothing worked on is untracked, even if resolved in thirty seconds. An untracked resolution is invisible to [OPERATIONS-METRICS.md](OPERATIONS-METRICS.md) and to the feedback loop.
- **Owner:** Whoever's on intake for that channel.

## Categorize

- **Input:** A new ticket.
- **Output:** A category (e.g. bug, how-to question, account issue, feature request, billing) and, where relevant, which capability it relates to (see [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)).
- **Owner:** First-line support.
- **Gate:** Every ticket gets a category before triage proceeds — an uncategorized backlog can't be prioritized or fed back meaningfully.

## Prioritize

- **Input:** Category and stated severity/impact (see [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md) for severity definitions).
- **Output:** A priority that determines response order.
- **Owner:** First-line support, using the SLA standard's severity levels — not gut feel per ticket.

## Route

- **Input:** Category, priority, and whether it's within first-line support's authority to resolve.
- **Output:** Either the ticket stays with support to resolve, or it's escalated per [ESCALATION-MANAGEMENT.md](ESCALATION-MANAGEMENT.md), with an explicit owner on the receiving end.
- **Gate:** A routed ticket has a named recipient who has acknowledged receipt — routing into a queue nobody is watching is the same as not routing it.

## Work

- **Input:** A ticket with a clear owner and enough information to act.
- **Output:** Progress toward resolution, or a specific blocker identified (missing information, waiting on engineering, waiting on the customer).
- **Owner:** Whoever currently holds the ticket per [CUSTOMER-SUPPORT-MODEL.md](CUSTOMER-SUPPORT-MODEL.md)'s ownership rule.

## Update

- **Input:** Any change in the ticket's state — progress, a blocker, a delay.
- **Output:** A customer-facing update, cadence per [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md), written per [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md).
- **Gate:** A ticket that's gone quiet past its update cadence is a defect in the process, not a normal state.

## Close

- **Input:** The issue is resolved, or the customer confirms it's no longer needed, or it's explicitly deferred with the customer told.
- **Output:** A closed ticket with its resolution recorded — including "won't fix" or "deferred," with why.
- **Gate:** A ticket that reveals a bug, a repeated question, or a feature request is tagged for [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) before closing — closing without this step is how the same issue gets rediscovered from scratch next quarter.

## Anti-Patterns

- **Silent triage** — deciding priority without a stated rule, so two similar tickets get wildly different treatment.
- **Closing to hit a metric** — closing a ticket that isn't actually resolved to look good on [OPERATIONS-METRICS.md](OPERATIONS-METRICS.md)'s reopen rate; this corrupts the metric it's gaming and erodes customer trust.
- **Routing without context** — escalating a ticket with "customer says it's broken" and nothing else, forcing the receiving owner to re-ask everything.
