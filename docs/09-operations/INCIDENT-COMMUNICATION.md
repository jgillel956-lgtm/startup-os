---
id: DOC-OPS-007
title: Incident Communication
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: operations
tags: [operations, incidents, communication, standard]
dependencies: [DOC-OPS-006, DOC-ENG-010]
related: [DOC-OPS-008, DOC-ENG-009, DOC-SEC-011]
---

# Incident Communication

Defines how customer-facing incidents are communicated before, during, and after — separate from, but coordinated with, engineering's technical incident response in [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md). Engineering owns diagnosing and fixing; support owns telling customers the truth about it, on time.

## Before an Incident (Preparedness)

- Support knows where to find live incident status from engineering — an incident channel, a status source, or a named contact — decided before it's needed, not improvised mid-incident.
- Planned, high-risk releases (per [RELEASE-AND-DEPLOYMENT.md](../03-engineering/RELEASE-AND-DEPLOYMENT.md)) are flagged to support in advance where feasible, so support isn't blindsided by a ticket spike it wasn't warned about.

## During an Incident

If the incident is or may be a security incident (suspected unauthorized access, data exposure), [SECURITY-INCIDENT-RESPONSE.md](../14-security-compliance/SECURITY-INCIDENT-RESPONSE.md) governs the technical response and what's confirmed to communicate — this document governs the delivery of that communication, not the underlying facts.

- **Acknowledge fast.** Customers affected by a SEV1/SEV2 (per [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md)) get told something is wrong before they have to ask, wherever that's feasible (status page, proactive message, in-app notice).
- **Say what's known, not what's guessed.** State confirmed impact and confirmed next steps; do not speculate about cause or timeline beyond what engineering has actually confirmed (see [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md) on communicating uncertainty).
- **Update on the incident's cadence, not the fix's.** Follow the SLA update cadence for the affected severity even if there's nothing new to report — silence during an active incident is worse than "still working on it."
- **One coordinated message.** Support and engineering agree on what's being said externally before it goes out — customers should not see two different explanations from the same company.

## After an Incident

- Customers affected are told when it's resolved, and, where appropriate, what happened and what's changing — proportional to severity and impact, not a form-letter for everything.
- Support contributes the customer-impact side of engineering's [postmortem](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md#postmortems): how many were affected, what they were told, and whether communication itself worked well.
- Recurring incident types or communication gaps feed [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) and, on the technical side, [TECHNICAL-DEBT.md](../03-engineering/TECHNICAL-DEBT.md).

## Status Updates

Whatever mechanism is used (status page, email, in-app banner), a status update states: what's affected, current status (investigating/identified/monitoring/resolved), and when the next update will come. No specific status-page tool is assumed — the discipline is the same regardless of platform.

## Anti-Patterns

- **Downplaying to avoid alarm** — minimizing stated impact to sound better, which reads as dishonest the moment the customer experiences the real impact.
- **Overcommitting on timeline** — naming a fix time engineering hasn't actually confirmed, then having to walk it back.
- **Going quiet mid-incident** — the single most common cause of customer trust damage during an incident, independent of how bad the incident itself was.
