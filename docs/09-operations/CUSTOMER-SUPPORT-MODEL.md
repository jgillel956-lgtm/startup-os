---
id: DOC-OPS-003
title: Customer Support Model
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, support, standard]
dependencies: [DOC-OPS-002]
related: [DOC-OPS-004, DOC-OPS-005]
---

# Customer Support Model

Defines support channels, coverage, roles, ticket ownership, communication expectations, and the boundaries of what support handles. Tool-agnostic — no specific ticketing system, CRM, or channel platform is assumed.

## Channels

Whatever channels a company offers (email, chat, phone, in-app, community forum), each stated channel has a stated response expectation (see [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md)). An unofficial channel a customer discovers (e.g. DMing an employee) does not carry the same SLA — support directs it back to the official channel, once acknowledged.

## Coverage

Coverage is stated explicitly: hours, days, and what happens outside them (queued for next business day, an emergency-only path, or genuine 24/7 — whichever the company has actually committed to). Coverage that isn't written down defaults to whatever the person on duty happens to do, which isn't coverage.

## Roles

| Role | Responsibility |
|------|-----------------|
| First-line support | Receives, triages, and resolves what's within their authority; escalates the rest |
| Support lead / owner | Owns the support model itself, coverage, and escalation quality |
| Engineering/product on-call or liaison | Receives escalations that need technical or product judgment |
| Leadership | Receives escalations with business or reputational risk |

One person can hold all these roles early on — the responsibilities still apply.

## Ticket Ownership

Every open ticket has exactly one owner at any given time — the person currently responsible for its next action. Ownership transfers explicitly (a stated handoff), never by just going quiet. A ticket with no clear owner is the support model's most common failure mode — [SUPPORT-INTAKE-AND-TRIAGE.md](SUPPORT-INTAKE-AND-TRIAGE.md) exists largely to prevent this.

## Customer Communication Expectations

- Every ticket gets acknowledged within its channel's stated response time, even if the resolution takes longer (see [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md)).
- Tone and content follow [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md) — this model defines *who* talks to the customer and *when*; that document defines *how*.

## Support Boundaries

Support handles: questions about how the product works, reported issues, account/access problems within its authority, and coordinating a response when something's broken. Support does not: promise a fix timeline it doesn't actually control, make pricing/contract exceptions without authority, or speak on behalf of engineering/product about *why* something works a certain way beyond what's already documented — it relays and coordinates, it doesn't improvise on their behalf.

## Anti-Patterns

- **Ticket ping-pong** — bouncing an issue between people with no owner taking responsibility for the next step.
- **Silent escalation** — routing to engineering/product without telling the customer anything, leaving them guessing.
- **Overcommitting to look helpful** — promising a specific fix date support doesn't control (see [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md) on avoiding overcommitment).
