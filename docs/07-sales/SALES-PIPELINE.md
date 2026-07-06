---
id: DOC-SLS-004
title: Sales Pipeline
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: sales
tags: [sales, pipeline, forecasting, standard]
dependencies: [DOC-SLS-003]
related: [DOC-SLS-005, DOC-SLS-010, DOC-SLS-012]
---

# Sales Pipeline

Defines opportunity stages, stage entry/exit criteria, deal hygiene, required fields, pipeline review, and forecasting discipline. No specific CRM or pipeline tool is assumed.

## Stages

| Stage | Entry criteria | Exit criteria |
|-------|-----------------|-----------------|
| Qualified | Passes [qualification](IDEAL-CUSTOMER-AND-QUALIFICATION.md) | Discovery call scheduled/held |
| Discovery | Qualification confirmed | Need, impact, and decision process understood ([DISCOVERY-AND-NEEDS-ASSESSMENT.md](DISCOVERY-AND-NEEDS-ASSESSMENT.md)) |
| Solution / Demo | Discovery complete | Demo delivered, mapped to confirmed needs ([DEMO-AND-SOLUTION-PRESENTATION.md](DEMO-AND-SOLUTION-PRESENTATION.md)) |
| Proposal | Solution validated by prospect | Proposal delivered ([PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md)) |
| Negotiation | Proposal under active discussion | Terms agreed verbally |
| Contracting | Verbal agreement reached | Signature obtained ([CONTRACTING-AND-CLOSE.md](CONTRACTING-AND-CLOSE.md)) |
| Closed-Won / Closed-Lost | Contract signed, or deal confirmed dead | Terminal — handoff ([SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md)) or loss reason recorded ([COMPETITIVE-SALES.md](COMPETITIVE-SALES.md)) |

A specific company may add stages for its own sales motion; the discipline — every stage has a stated entry and exit criterion, not just a name — is the Startup OS default regardless of the exact list.

## Deal Hygiene

- Every open opportunity has a stated next step and a realistic next-action date — an opportunity with no next step is stalled, not "in progress."
- Stage reflects reality — a deal doesn't sit in "Negotiation" for months with no actual negotiation happening; move it back, mark it stalled, or disqualify it.
- Opportunities untouched past a reasonable threshold are reviewed explicitly — silently aging deals distort the pipeline's honesty.

## Required Fields

At minimum, every opportunity records: qualification notes ([IDEAL-CUSTOMER-AND-QUALIFICATION.md](IDEAL-CUSTOMER-AND-QUALIFICATION.md)), current stage, next step and date, estimated value, and estimated close date. Missing any of these means the opportunity isn't actually ready to be counted in a forecast.

## Pipeline Review

Held on a regular rhythm: every open deal's stage, next step, and realistic likelihood are checked — not just the deals someone happens to remember. Deals that haven't moved are called out explicitly rather than carried forward silently.

## Forecasting Discipline

- Forecast from the pipeline's actual state, not from hope — a deal forecast to close "this month" for the third month running is a signal to downgrade it, not to keep forecasting it optimistically.
- Track forecast accuracy over time (see [SALES-METRICS.md](SALES-METRICS.md)) — a consistently over-optimistic forecast is a process problem worth naming, not a string of bad luck.

## Ownership

Salesperson maintains their own opportunities' hygiene; sales owner runs pipeline review and owns forecast accuracy for the whole pipeline.

## Anti-Patterns

- **Zombie deals.** Opportunities that never move and never get marked dead, inflating the apparent pipeline size.
- **Stage inflation.** Moving a deal to a later stage before it's actually met that stage's exit criteria, to make progress look better.
- **Forecasting from the top of the pipeline.** Counting early-stage, unqualified opportunities in a near-term forecast.
