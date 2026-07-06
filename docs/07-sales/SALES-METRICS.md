---
id: DOC-SLS-012
title: Sales Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: sales
tags: [sales, metrics, standard]
dependencies: [DOC-SLS-002]
related: [DOC-SLS-004, DOC-MKT-012, DOC-OPS-012, DOC-INV-012]
---

# Sales Metrics

Defines practical sales metrics. Like the metrics standards in marketing, engineering, operations, and design, these measure the system — pipeline health, process discipline — not individual ranking; using them purely to rank people invites gaming the pipeline instead of running it honestly. No specific CRM or forecasting tool is assumed.

## Qualified Pipeline

Total value and count of opportunities that have actually passed [qualification](IDEAL-CUSTOMER-AND-QUALIFICATION.md) — not raw inbound volume. A pipeline number inflated with unqualified opportunities looks healthier than it is.

## Stage Conversion

Rate at which opportunities move from one [pipeline stage](SALES-PIPELINE.md) to the next. A low conversion rate at a specific stage points to exactly where the process is losing deals — far more actionable than an overall win rate alone.

## Win Rate

Percentage of qualified opportunities that close won, tracked against the "qualified" baseline (not against total inbound) — otherwise the number conflates qualification quality with actual selling effectiveness.

## Sales Cycle Length

Time from qualification to close, by deal size or segment — a lengthening cycle in one segment specifically is a more useful signal than a single blended average.

## Average Deal Size

Tracked by segment/ICP — useful for sanity-checking [proposals and pricing](PROPOSALS-AND-PRICING.md) against reality and for forecasting.

## Forecast Accuracy

How closely forecasted pipeline matched actual closed results, over time. Chronic over-forecasting (or under-forecasting) is a direct signal to recalibrate [pipeline forecasting discipline](SALES-PIPELINE.md), not just an unlucky quarter.

## Loss Reasons

Distribution of documented loss reasons ([COMPETITIVE-SALES.md](COMPETITIVE-SALES.md)) — read for patterns (one competitor winning repeatedly on one dimension, a recurring price objection) rather than treated as a single aggregate number.

## Source Quality

Win rate and deal size by lead source/campaign — the sales-side measurement that closes the loop with [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md)'s handoff quality, telling marketing which sources actually produce closable business, not just volume.

## Handoff Quality

How well [sales-to-customer handoffs](SALES-TO-CUSTOMER-HANDOFF.md) set up onboarding — tracked informally (feedback from operations/support) or formally (e.g. early-customer satisfaction correlated with handoff completeness). A pattern of onboarding friction tracing back to thin handoffs is this metric's most useful finding.

## Using These Metrics

- Review on a regular rhythm, the same discipline as [MARKETING-METRICS.md](../06-marketing/MARKETING-METRICS.md), [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md), and [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md).
- React to trends and stage-specific signals, not a single blended number.
- Feed findings back into qualification criteria, pricing, messaging (via marketing), and handoff practice — a metric reviewed but never acted on is overhead, not insight.
- These are the same numbers [INVESTOR-METRICS.md](../08-investors/INVESTOR-METRICS.md) reports as traction — reused directly, not recalculated separately for investor purposes.

## Right-Sizing for Team Size

At one salesperson (often the founder): most of this is tracked informally — a short list of live deals, a mental sense of what's working. The metrics themselves don't change as the team grows, only the rigor and tooling used to track them.
