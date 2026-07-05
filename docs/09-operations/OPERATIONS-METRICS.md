---
id: DOC-OPS-012
title: Operations Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, metrics, standard]
dependencies: [DOC-OPS-002]
related: [DOC-OPS-005, DOC-OPS-011, DOC-ENG-012]
---

# Operations Metrics

Defines practical operations and support metrics. These measure the *system* — response process, knowledge quality, feedback flow — not individual performance in isolation; using them to rank individuals invites the same gaming problem [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) warns against.

## First Response Time

Time from a ticket arriving to first substantive reply. Tracked against the targets in [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md), by severity — a single blended average hides whether SEV1s are actually getting immediate attention.

## Time to Resolution

Time from ticket open to close, by severity and category. A rising resolution time in one category specifically (not overall) usually points to a real underlying problem in that area — worth checking against [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md) themes.

## SLA Adherence

Percentage of tickets meeting their stated response/update targets, by severity. This is the direct measure of whether [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md) is being met in practice, not just on paper.

## Reopen Rate

Percentage of closed tickets that reopen. A rising reopen rate usually means tickets are being closed prematurely (see [SUPPORT-INTAKE-AND-TRIAGE.md](SUPPORT-INTAKE-AND-TRIAGE.md) anti-patterns) or the underlying issue wasn't actually fixed.

## Backlog Age

How long open tickets have been open, especially the oldest ones. A backlog with a long tail of very old tickets is a different problem than a backlog that's merely large — the tail indicates something is stuck, not just busy.

## Escalation Rate

Percentage of tickets escalated beyond first-line support, by destination (engineering, product, leadership, vendor). A rising escalation rate to engineering may mean product quality is slipping; a rising rate to leadership may mean a trust/risk problem — read by destination, not as one number.

## Customer Satisfaction

Whatever direct feedback mechanism is used (post-resolution rating, survey, etc.) — no specific tool assumed. Tracked by severity/category the same as resolution time, since a SEV1 satisfaction score means something different from a SEV3 one.

## Ticket Volume by Category

Count of tickets by category over time (see [SUPPORT-INTAKE-AND-TRIAGE.md](SUPPORT-INTAKE-AND-TRIAGE.md)'s categorization). A spike in one category is often the earliest signal of a release problem — cross-reference against recent releases in [RELEASE-AND-DEPLOYMENT.md](../03-engineering/RELEASE-AND-DEPLOYMENT.md).

## Recurring Issue Themes

Not a single number — a periodically reviewed list of the top recurring themes from [CUSTOMER-FEEDBACK-LOOP.md](CUSTOMER-FEEDBACK-LOOP.md), with trend (growing, stable, shrinking) per theme. This is the metric most directly tied to whether feedback is actually closing the loop into product/engineering action.

## Using These Metrics

- Review on a regular rhythm — a metric nobody looks at is overhead, not insight, the same principle as [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md).
- React to trends across periods, not single data points.
- These metrics feed prioritization the same way engineering's do: a category with rising volume, rising escalation, and falling satisfaction is a strong signal for [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) regardless of what else is competing for attention.

## Right-Sizing for Team Size

At very small scale, most of this is a mental model rather than a dashboard ("tickets about X keep coming up" is recurring-issue-themes, observed informally). Formalize measurement as volume grows — the metrics themselves don't change, only the rigor of tracking them.
