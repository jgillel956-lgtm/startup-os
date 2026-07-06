---
id: DOC-INV-007
title: Financial Model and Assumptions
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: investors
tags: [investors, financial-model, standard]
dependencies: [DOC-INV-003]
related: [DOC-INV-006, DOC-INV-012]
---

# Financial Model and Assumptions

Defines how financial models, forecasts, assumptions, scenarios, unit economics, runway, hiring plans, and funding needs are documented and reviewed. No specific financial modeling tool is assumed. This document does not provide accounting, tax, or financial advice — the model's construction and any external-facing use of it should involve qualified financial expertise appropriate to the company's stage.

## Assumptions

Every material number in the model traces to a stated assumption (growth rate, conversion rate, cost per hire, churn) — not an unexplained figure. An assumption that later proves wrong is far easier to correct when it was explicit than when it's buried inside a formula.

## Scenarios

At minimum a base case; ideally also an upside and a conservative case — showing the model responds sensibly to its own assumptions changing, not just a single fixed-point forecast presented as the only possible future.

## Unit Economics

Where applicable: cost to acquire, revenue per customer/account, margin, and payback period — grounded in actual data from [SALES-METRICS.md](../07-sales/SALES-METRICS.md) and [CUSTOMER-SUCCESS-METRICS.md](../13-customer-success/CUSTOMER-SUCCESS-METRICS.md) wherever real data exists, rather than assumed figures once real data is available to replace them.

## Runway and Burn

Current runway (time until cash runs out at current burn) and burn rate are kept current — not calculated once and left stale as spending patterns change. See [INVESTOR-METRICS.md](INVESTOR-METRICS.md) for tracking these over time.

## Hiring Plans

Tied to the milestones the funding is meant to support ([FUNDRAISING-STRATEGY.md](FUNDRAISING-STRATEGY.md)) — a hiring plan disconnected from stated milestones is hard to justify and harder to defend in diligence.

## Funding Needs

The amount being raised traces back to this model — how much is needed to reach the next milestone with a reasonable buffer, not a number chosen independently of the model and then justified backward.

## Review

The model is reviewed for internal consistency (do the assumptions actually produce the stated outputs) and for reasonableness (are the assumptions themselves defensible) before it's used externally. Reviewed by whoever holds financial expertise — the founder alone, for a very early company, or a finance function/qualified advisor as the company grows.

## Keeping the Model Current

A model built once for a raise and never updated goes stale within a quarter — it's refreshed against actual results on a regular rhythm, the same discipline as [INVESTOR-METRICS.md](INVESTOR-METRICS.md).

## Required Artifacts

The model itself, with assumptions documented; a scenario comparison; a review record before external use.

## Ownership

Finance (or the founder/leadership, at small scale) owns model integrity; leadership approves any version shared externally; qualified financial/accounting advisors are consulted as the model's stakes and complexity grow.

## Anti-Patterns

- **Black-box assumptions.** A model where the underlying assumptions can't be found or explained.
- **One scenario only.** Presenting a single forecast as if it were certain, with no sensitivity shown.
- **Stale model, live raise.** Using a financial model that hasn't been updated against actual recent performance.
