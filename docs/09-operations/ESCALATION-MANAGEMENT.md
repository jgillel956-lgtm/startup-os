---
id: DOC-OPS-006
title: Escalation Management
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, escalation, standard]
dependencies: [DOC-OPS-002, DOC-OPS-004]
related: [DOC-ENG-004, DOC-ENG-010, DOC-OPS-007]
---

# Escalation Management

Defines when and how customer issues escalate beyond first-line support — to engineering, product, leadership, vendors, or account management.

## When to Escalate

Escalate when the issue is: technically beyond first-line support's ability to diagnose or fix, a business/roadmap question support can't answer from existing documentation, a risk to the customer relationship or company reputation, or dependent on a third party (vendor, payment processor, infrastructure provider). Escalate on suspicion, not certainty — waiting for proof an issue is serious before escalating is how minor issues become major ones.

## Escalation Paths

| Issue type | Escalates to | Typical trigger |
|------------|---------------|-------------------|
| Technical defect, system behavior | Engineering | Support can't reproduce a fix path; looks like a bug, not user error |
| Product/roadmap question, "why does it work this way" | Product | Question isn't answered by existing docs; may indicate a real gap ([PRD-STANDARD.md](../02-product/PRD-STANDARD.md)'s non-goals or edge cases) |
| Business risk, reputational risk, contract/pricing exception | Leadership | Customer threatens churn, legal/compliance concern, unusual request outside support's authority |
| Third-party failure | Vendor / account management | Issue traces to a dependency support doesn't control |

## How to Escalate

1. State what's known: symptom, impact, who's affected, what's been tried.
2. Name the receiving owner explicitly — an escalation isn't complete until someone specific has acknowledged it (see [SUPPORT-INTAKE-AND-TRIAGE.md](SUPPORT-INTAKE-AND-TRIAGE.md), Route stage).
3. State the customer-facing status so the receiving owner isn't guessing what's already been said.
4. If the issue meets engineering's incident bar, it also enters [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md)'s process — escalation to engineering and incident declaration are not mutually exclusive.

## Architecture-Level Escalation

If a technical escalation turns out to require a hard-to-reverse decision — not just a fix, but a change in approach — it becomes an ADR candidate per [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md), not just a ticket resolution. Support flags this possibility; engineering decides whether it rises to that level.

## Leadership Escalation

Leadership escalation is for business/reputational risk, not technical difficulty — a hard bug goes to engineering, not to leadership, unless it's also a business risk (major customer, public visibility, potential churn). Leadership escalation includes: what's at stake, who's affected, and what's already being done — leadership is briefed to decide, not to triage from scratch.

## Vendor / Third-Party Escalation

- Escalating to a vendor doesn't pause the customer update cadence in [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md) — "we're waiting on a vendor" is a valid update, delivered on schedule, not a reason to go quiet.
- A recurring vendor-caused issue is logged the same way as [technical debt](../03-engineering/TECHNICAL-DEBT.md) — a dependency risk worth tracking, not just repeatedly worked around.

## Anti-Patterns

- **Escalation without ownership** — sending an issue "to the team" instead of a named person, so nobody actually picks it up.
- **Escalating and disappearing** — support handing off and stopping communication with the customer, leaving them with no point of contact.
- **Escalation avoidance** — sitting on an issue too long hoping to resolve it alone, past the point where escalating would have been faster for the customer.
