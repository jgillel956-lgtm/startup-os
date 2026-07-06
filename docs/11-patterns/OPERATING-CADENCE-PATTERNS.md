---
id: DOC-PAT-003
title: Operating Cadence Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, cadence, review]
dependencies: [DOC-PAT-002]
related: [DOC-BIZ-007, DOC-CS-006]
---

# Operating Cadence Patterns

## Purpose

A recurring rhythm of review that catches drift before it becomes a crisis — the shape behind every "check this regularly" rule in Startup OS.

## When to Use

Any area where health changes gradually and silently between checks: account risk, pipeline health, security posture, technical debt, business metrics. Not needed for something that changes rarely or announces itself loudly when it breaks.

## Common Pattern

```
Frequent, light check  →  catches the obviously urgent
      ↓
Periodic, deeper check  →  catches slow drift the light check misses
      ↓
Occasional, strategic check  →  confirms the whole approach still fits reality
```

Three tiers, not one — a single review frequency is either too frequent to sustain (deep review weekly) or too infrequent to catch drift (deep review only annually). Each tier has a stated interval, a stated scope, and a stated output (what changes as a result).

## Inputs

Whatever evidence the area produces: metrics, status records, recent findings from the last review cycle.

## Outputs

A decision to continue as-is, adjust something specific, or escalate — a review that produces no output was skipped in spirit even if it happened on the calendar.

## Owner

Whoever owns the area under review; the cadence itself (frequency, scope) is set by that domain's operating-system document.

## Review Points

- Is the review actually happening on the stated interval, or slipping under pressure?
- Does each review produce a real output, or just a status recap?
- Is the deepest tier (strategic) actually questioning the approach, not just re-confirming it?

## Example Use Cases

- [OPERATING-CADENCE.md](../01-business/OPERATING-CADENCE.md) — weekly/monthly/quarterly/annual company review tiers.
- [CUSTOMER-HEALTH.md](../13-customer-success/CUSTOMER-HEALTH.md) — account review cadence catching risk before renewal.
- [SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](../14-security-compliance/SECURITY-COMPLIANCE-OPERATING-SYSTEM.md) — access and vendor review cadence.
- [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) — periodic trend review, not per-incident only.

## Anti-Patterns

- **Cadence in name only.** A stated schedule that gets skipped whenever things are busy — exactly when review matters most.
- **Review without output.** Meetings that happen on schedule but change nothing.
- **One-tier cadence.** Either reviewing everything weekly (unsustainable) or only annually (too slow to catch drift).

## Related Docs

[BUSINESS-OPERATING-SYSTEM.md](../01-business/BUSINESS-OPERATING-SYSTEM.md) · [STRATEGIC-REVIEW.md](../01-business/STRATEGIC-REVIEW.md) · [SPRINT-TEMPLATE.md](../10-templates/SPRINT-TEMPLATE.md)
