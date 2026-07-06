---
id: DOC-PAT-008
title: Risk and Escalation Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, risk, escalation]
dependencies: [DOC-PAT-002]
related: [DOC-BIZ-010, DOC-OPS-006]
---

# Risk and Escalation Patterns

## Purpose

Naming a risk explicitly and routing it to whoever can actually decide what to do about it — before it becomes the emergency that forces the conversation.

## When to Use

Anything that could materially hurt the business, a customer relationship, or a system, if it's not addressed: a technical vulnerability, a churn signal, a market assumption showing cracks, a compliance gap.

## Common Pattern

```
Name the risk explicitly, in writing  →  Assess likelihood and impact honestly  →
Route to the owner who holds authority over that risk type  →
Respond: mitigate, monitor, or explicitly accept  →  Escalate further if unresolved or worsening
```

"Explicitly accept" is a legitimate response, distinct from silently ignoring — the difference is whether someone with actual authority made the call on the record.

## Inputs

An observed signal (a metric trend, a specific finding, a pattern across incidents) that something could go wrong.

## Outputs

A tracked risk entry with a stated response and an owner; for anything material, a decision on the record (see [DECISION-MAKING-PATTERNS.md](DECISION-MAKING-PATTERNS.md)).

## Owner

Whoever surfaces the risk owns naming it; whoever holds authority over that risk type owns the response; risk that crosses domains or exceeds any one owner's authority escalates to leadership.

## Review Points

- Was the risk named before it became urgent, or only after it caused a problem?
- Is "accepted" actually a documented decision by someone with authority, or just something nobody addressed?
- Does the same risk keep resurfacing without ever getting a real response?

## Example Use Cases

- [BUSINESS-RISKS-AND-ASSUMPTIONS.md](../01-business/BUSINESS-RISKS-AND-ASSUMPTIONS.md)
- [ESCALATION-MANAGEMENT.md](../09-operations/ESCALATION-MANAGEMENT.md)
- [CHURN-AND-SAVE-PLAYS.md](../13-customer-success/CHURN-AND-SAVE-PLAYS.md)
- [SECURITY-METRICS.md](../14-security-compliance/SECURITY-METRICS.md) risk trends

## Anti-Patterns

- **Risk felt but not written down.** A real, known concern that lives only as background anxiety.
- **Escalation without a named owner.** Sending a risk "to the team" instead of a specific person who's acknowledged it.
- **Silent risk acceptance.** Treating "nobody addressed it" as equivalent to a deliberate decision to accept it.

## Related Docs

[BUSINESS-RISKS-AND-ASSUMPTIONS.md](../01-business/BUSINESS-RISKS-AND-ASSUMPTIONS.md) · [ESCALATION-MANAGEMENT.md](../09-operations/ESCALATION-MANAGEMENT.md) · [SECURITY-INCIDENT-RESPONSE.md](../14-security-compliance/SECURITY-INCIDENT-RESPONSE.md)
