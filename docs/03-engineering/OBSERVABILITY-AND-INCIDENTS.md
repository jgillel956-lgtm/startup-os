---
id: DOC-ENG-010
title: Observability and Incidents
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, observability, incidents, standard]
dependencies: [DOC-ENG-009]
related: [DOC-ENG-011, DOC-ENG-012]
---

# Observability and Incidents

Defines logging, monitoring, alerting, incident response, severity levels, postmortems, and how operational events feed back into the engineering system. Tool-agnostic — the discipline matters more than the specific platform.

## Logging

- Log what's needed to diagnose a problem after the fact: what happened, when, in what context (request/entity IDs) — not everything, and never sensitive data (no full credentials, no full account/payment identifiers, no PII beyond what's operationally necessary).
- Logs are structured enough to search, not just readable in isolation.

## Monitoring

- The things that matter to users (is the system up, is it fast enough, are core flows working) are monitored actively, not inferred from the absence of complaints.
- New capabilities get monitoring appropriate to their risk before they're considered fully released — a payment flow without monitoring isn't done, regardless of what [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md) says passed.

## Alerting

- Alerts fire on conditions that need a human response — not on everything that's merely interesting. An alert nobody acts on trains people to ignore alerts.
- Alerts route to whoever can actually act on them, with enough context to start diagnosing without reverse-engineering the alert itself.

## Incident Response

- **Declare early.** Uncertainty about whether something is "really" an incident is resolved by declaring it and downgrading later — not by waiting for certainty while impact continues.
- **One person coordinates.** During an active incident, one person is explicitly responsible for coordinating response, even if others are doing the technical work.
- **Communicate proportionally to severity.** Higher severity means more frequent, more visible updates — including to non-engineering stakeholders when customer impact exists.

## Severity Levels

| Level | Meaning | Response |
|-------|---------|----------|
| SEV1 | Critical — significant user impact, data integrity risk, or money-handling failure | Immediate, all-hands-if-needed response |
| SEV2 | Major — degraded functionality, workaround exists or impact is partial | Prompt response, same-day resolution target |
| SEV3 | Minor — limited impact, no urgent workaround needed | Scheduled fix, tracked as a normal work item |

Exact thresholds are calibrated per company; the structure — a small number of levels, each with a matching response posture — is the Startup OS default.

## Postmortems

- Every SEV1 and SEV2 incident gets a postmortem: what happened, timeline, root cause, what's changing so it doesn't recur.
- Postmortems are blameless — they name the systemic gap (missing test, missing alert, ambiguous spec), not the person who was on shift.
- A postmortem without at least one concrete follow-up action is incomplete — "we'll be more careful" is not a fix.

## Operational Learning

Findings from monitoring, incidents, and postmortems become concrete entries — a [technical debt item](TECHNICAL-DEBT.md), an [engineering metric](ENGINEERING-METRICS.md) to start tracking, or new product input. An incident that's discussed once and then forgotten will recur.

## AI Agents and Incidents

AI agents may monitor for and surface anomalies, and may draft postmortems from available evidence, but do not independently declare an incident resolved or make production changes during an active incident without human sign-off — incident response is a moment where AI-operating-rule caution (per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)) matters most.
