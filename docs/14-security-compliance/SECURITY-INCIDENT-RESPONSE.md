---
id: DOC-SEC-011
title: Security Incident Response
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, incident-response, standard]
dependencies: [DOC-SEC-002]
related: [DOC-ENG-010, DOC-OPS-007, DOC-SEC-012]
---

# Security Incident Response

Defines how suspected security incidents are reported, triaged, escalated, contained, investigated, communicated, documented, and reviewed. This is the security-specific counterpart to [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md) — a security incident follows this process even if it also triggers that one.

## Reporting

Anyone — any function, any level — can report a suspected security incident, and does so immediately on suspicion, not after confirming it's real. The cost of a false alarm is far lower than the cost of a delayed real one.

## Triage

A reported issue is assessed fast: what's the suspected exposure (data, access, availability), how confident is the report, and does it warrant immediate containment action. Triage does not wait for full certainty before acting — contain first if there's real doubt, confirm after.

## Escalation

A confirmed or credible security incident escalates to the security owner and leadership immediately, regardless of apparent severity at first glance — severity is often underestimated in the first few minutes. If customer data is or may be affected, customer success and operations are looped in for communication planning (see below), not left to find out from a customer.

## Containment

Priority is stopping ongoing exposure — revoking compromised access, isolating an affected system — before full root-cause investigation. Containment actions are documented as they happen, since the sequence matters for the later investigation.

## Investigation

After containment: what happened, how, what was actually exposed, and for how long. Investigation findings are factual and specific — "we don't yet know the full scope" is an honest, acceptable finding at first; it's followed up until scope is actually known.

## Communication

- **Internal** — leadership is kept current throughout, not just briefed at the end.
- **Customer-facing** — if customer data or service is affected, communication follows [INCIDENT-COMMUNICATION.md](../09-operations/INCIDENT-COMMUNICATION.md)'s discipline: acknowledge fast, state only what's confirmed, update on a cadence proportional to severity. Any claim about what happened or what's being done goes through the same truthfulness bar as [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md) — a security incident is exactly the moment overclaiming or underclaiming does the most damage.
- **Regulatory/contractual** — if an obligation requires notification ([COMPLIANCE-OBLIGATIONS.md](COMPLIANCE-OBLIGATIONS.md)), that notification happens within whatever timeframe the obligation requires — tracked explicitly, not left to be remembered under pressure.

## Documentation

Every security incident, regardless of eventual severity, gets a record: what was reported, the timeline, root cause, what was exposed, and what's changing so it doesn't recur — the same blameless postmortem discipline as [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md).

## Review

Every security incident is reviewed for systemic gaps (missing control, missing monitoring, a process that let it happen) — the same "concrete follow-up action, not just 'be more careful'" rule as engineering postmortems.

## Ownership

The security owner coordinates response; engineering executes technical containment and investigation; operations/customer success handle customer-facing coordination; leadership owns external/regulatory communication decisions and risk acceptance.

## Anti-Patterns

- **Waiting for certainty before acting.** Delaying containment while confirming the incident is "real."
- **Technical-only response.** Fixing the technical issue without ever addressing customer or regulatory communication obligations.
- **No postmortem for "small" incidents.** Skipping review because an incident was contained quickly, missing the chance to close the underlying gap.
