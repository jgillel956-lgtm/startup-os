---
id: DOC-SLS-003
title: Ideal Customer and Qualification
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: sales
tags: [sales, qualification, icp, standard]
dependencies: [DOC-SLS-002]
related: [DOC-MKT-004, DOC-SLS-004]
---

# Ideal Customer and Qualification

Defines how sales uses ICP fit, urgency, budget, authority, need, timing, and disqualification signals to decide where to invest time. Builds on marketing's [IDEAL-CUSTOMER-PROFILE.md](../06-marketing/IDEAL-CUSTOMER-PROFILE.md) — sales applies that profile to a real, individual opportunity rather than redefining it from scratch.

## Qualification Dimensions

| Dimension | Question |
|-----------|----------|
| Fit | Does this prospect match the ICP ([IDEAL-CUSTOMER-PROFILE.md](../06-marketing/IDEAL-CUSTOMER-PROFILE.md))? |
| Need | Is there a real, confirmed problem the product solves (see [DISCOVERY-AND-NEEDS-ASSESSMENT.md](DISCOVERY-AND-NEEDS-ASSESSMENT.md))? |
| Urgency | Is there a reason to act now versus later? |
| Budget | Is there budget, or a credible path to getting it, for a solution at this price range? |
| Authority | Is sales talking to someone who can decide or meaningfully influence the decision? |
| Timing | Does the prospect's timeline match a realistic sales cycle and, if relevant, an implementation window? |

A deal doesn't need a perfect score on every dimension to proceed — it needs an honest read on each, so the pipeline reflects reality rather than optimism.

## Qualification Notes

Every qualified opportunity records: what confirmed the fit, what the need actually is (in the prospect's words where possible), and which dimension is weakest — the weakest dimension is usually where the deal will stall or die, and naming it early lets it be addressed deliberately.

## Disqualification Signals

Signals that this isn't a fit right now: company size or use case outside the ICP, no real budget path, no urgency, or a need the product doesn't serve (see [Non-Goals](../02-product/PRD-STANDARD.md) in relevant PRDs). Disqualifying early is a service to both sides — it frees sales time and doesn't waste the prospect's.

## Requalification

A disqualified prospect isn't necessarily gone forever — a changed situation (new budget cycle, new urgency) can requalify them. Requalification checks the same dimensions again; it doesn't assume "they were interested once" is still true.

## Grounding in Marketing's ICP

Sales' qualification is the same ICP marketing defined ([IDEAL-CUSTOMER-PROFILE.md](../06-marketing/IDEAL-CUSTOMER-PROFILE.md)), applied at the individual-opportunity level. When sales consistently sees a pattern the documented ICP doesn't predict well (qualifying leads that don't convert, or disqualifying ones that would have), that's fed back to marketing — see [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md)'s feedback loop.

## Ownership

Sales applies qualification to real opportunities; marketing owns the ICP definition sales qualifies against; both revisit the ICP together when sales' real-world signal contradicts it.

## Anti-Patterns

- **Qualifying by hope.** Keeping a deal in the pipeline because it would be nice to close, not because it's actually qualified.
- **Skipping authority checks.** Running a full sales cycle with someone who can't actually decide, discovered only at the end.
- **Never disqualifying.** A pipeline that never shrinks because nothing is ever marked unqualified, inflating forecasts.
