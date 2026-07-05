---
id: DOC-OPS-005
title: SLA and Response Standards
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, sla, standard]
dependencies: [DOC-OPS-004]
related: [DOC-OPS-006, DOC-ENG-010, DOC-OPS-012]
---

# SLA and Response Standards

Defines practical service-level standards: severity levels, response time targets, resolution expectations, customer update cadence, and internal accountability for meeting them.

## Severity Levels

Mirrors [engineering's incident severity](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md) so the two systems speak the same language when a support ticket turns into an incident:

| Severity | Meaning | Example |
|----------|---------|---------|
| SEV1 | Critical — system down, data at risk, money-handling broken, no workaround | Payments failing for all customers |
| SEV2 | Major — significant functionality impaired, workaround exists | A key feature broken for some customers |
| SEV3 | Minor — limited impact, cosmetic, or a how-to question | UI glitch, "how do I..." |

## Response Time Targets

| Severity | First response target |
|----------|------------------------|
| SEV1 | Immediate — minutes, not hours |
| SEV2 | Same business day |
| SEV3 | Within stated channel coverage (e.g. 1 business day) |

Exact numbers are calibrated per company and per plan tier where relevant; the structure — severity-scaled response time, stated and public to the team — is the Startup OS default.

## Resolution Expectations

Resolution time is a target, not a promise made to the customer as a hard deadline unless the company has explicitly contracted one. What *is* promised: the update cadence below, honestly kept, even when resolution is slow.

## Customer Updates

| Severity | Update cadence while open |
|----------|----------------------------|
| SEV1 | Frequent — e.g. every 30–60 minutes or on material change |
| SEV2 | At least daily |
| SEV3 | At meaningful milestones (received, working on it, resolved) |

An update that just says "still looking into it" with no new information, sent purely to hit the cadence, is better than silence — but a pattern of content-free updates is a signal the underlying issue needs escalating (see [ESCALATION-MANAGEMENT.md](ESCALATION-MANAGEMENT.md)).

## Internal Accountability

- SLA performance is tracked via [OPERATIONS-METRICS.md](OPERATIONS-METRICS.md) (first response time, resolution time, SLA adherence) — not just felt anecdotally.
- A missed SLA is reviewed for cause (understaffed coverage, unclear routing, a genuinely hard problem) the same way a missed engineering deadline is — not shrugged off as one-off bad luck every time.
- Patterns of missed SLA on a specific issue type route to [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) — an SLA repeatedly missed on the same category is a product or engineering signal, not just a support capacity problem.

## Relationship to Engineering Incidents

When a support ticket's severity indicates a broader system problem (multiple customers, same symptom), it triggers engineering's own incident process ([OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md)) rather than being worked as N separate tickets. Support's SLA continues to govern customer communication; engineering's severity levels govern the technical response — [INCIDENT-COMMUNICATION.md](INCIDENT-COMMUNICATION.md) bridges the two.
