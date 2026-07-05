---
id: DOC-ENG-012
title: Engineering Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, metrics, standard]
dependencies: [DOC-ENG-002]
related: [DOC-ENG-010, DOC-ENG-011]
---

# Engineering Metrics

Defines practical metrics for tracking engineering system health. These measure the *system*, not individual people — using them to rank engineers defeats their purpose and teaches people to game them.

## Cycle Time

Time from work starting (Technical Design or Implementation begins) to release. A rising cycle time usually means growing complexity, unclear specs, or review bottlenecks — worth diagnosing, not just noting.

## Deployment Frequency

How often changes reach production. Low frequency often means large, risky batches (see [RELEASE-AND-DEPLOYMENT.md](RELEASE-AND-DEPLOYMENT.md)) — more frequent, smaller releases are usually lower-risk, not higher-risk, despite the intuition.

## Escaped Defects

Bugs found in production that testing should have caught. A rising rate is a direct signal to revisit [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md) coverage — this metric is the most direct feedback loop from "did our quality gates actually work."

## Incident Rate

Frequency and severity of incidents (see [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md)) over time. Track by severity level, not just raw count — ten SEV3s is a different signal than one SEV1.

## Review Time

Time a PR spends waiting for review. Long review time either slows delivery or — worse — trains people to skip review under pressure. A consistently long review time is a staffing/process problem to fix, not a fact to route around.

## Reliability

Uptime/error-rate for what's live, scoped to what actually matters to users (a background job failing silently is different from checkout failing). Define reliability targets per capability's criticality, not one blanket number for everything.

## Delivery Predictability

How closely planned work matches delivered work over a period (see [SPRINT-TEMPLATE.md](../10-templates/SPRINT-TEMPLATE.md)'s planned-vs-completed metric). Chronic under-delivery signals either overcommitment or underestimated complexity — both worth naming rather than absorbing silently every cycle.

## Using These Metrics

- Track only what's actually reviewed periodically — a metric nobody looks at is overhead, not insight.
- A single bad data point is noise; a trend across several cycles is signal. React to trends.
- These metrics inform [technical debt](TECHNICAL-DEBT.md) prioritization and [prioritization](../02-product/PRIORITIZATION-STANDARD.md) generally — a capability with high escaped-defect and incident rates is a candidate for Improvement regardless of what else is competing for attention.

## Right-Sizing for Team Size

At very small scale, some of these are a mental note rather than a dashboard (e.g. "releases feel slow lately" is cycle time, observed informally). As the team grows, formalize tracking — the metrics themselves don't change, only how rigorously they're measured.
