---
id: DOC-PAT-007
title: Metrics Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, metrics]
dependencies: [DOC-PAT-002]
related: [DOC-BIZ-012, DOC-ENG-012]
---

# Metrics Patterns

## Purpose

Measuring a system's actual health in a way that resists being gamed and stays useful under pressure — the shape behind every metrics standard in Startup OS.

## When to Use

Any domain that needs to know whether it's actually working, not just whether it feels like it's working: engineering delivery, sales pipeline, support quality, security posture, business performance.

## Common Pattern

```
Measure the system, not the individual  →  Track by segment, not one blended number  →
React to trends across periods, not single data points  →  Feed findings back into what caused them
```

The "measure the system, not the individual" rule is the one that keeps metrics honest — the moment a metric is used to rank people, people start optimizing the metric instead of the outcome it was meant to represent.

## Inputs

Raw activity or outcome data from the domain being measured.

## Outputs

A tracked trend, reviewed on a cadence (see [OPERATING-CADENCE-PATTERNS.md](OPERATING-CADENCE-PATTERNS.md)), that changes a decision when it moves.

## Owner

The domain owner whose system is being measured; metrics used across domains (e.g. revenue, retention) are reconciled to one source, not recalculated separately per domain.

## Review Points

- Would this metric survive being seen by the people it measures, without changing their behavior in a way that defeats its purpose?
- Is it read by segment, or is a single blended number hiding a real problem in one part of it?
- Has a metric ever actually changed a decision, or is it tracked and ignored?

## Example Use Cases

- [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md)
- [SALES-METRICS.md](../07-sales/SALES-METRICS.md)
- [CUSTOMER-SUCCESS-METRICS.md](../13-customer-success/CUSTOMER-SUCCESS-METRICS.md)
- [SECURITY-METRICS.md](../14-security-compliance/SECURITY-METRICS.md)

## Anti-Patterns

- **Vanity metrics.** Tracking a number that looks good but doesn't reflect real health.
- **Individual ranking.** Using a system-health metric to rank people, inviting gaming.
- **Metrics nobody acts on.** Reviewed on schedule but never once changing a decision.

## Related Docs

[BUSINESS-METRICS.md](../01-business/BUSINESS-METRICS.md) · [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md) · [MARKETING-METRICS.md](../06-marketing/MARKETING-METRICS.md)
