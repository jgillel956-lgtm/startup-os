---
id: DOC-SLS-002
title: Sales Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: sales
tags: [sales, operating-model, standard]
dependencies: [DOC-SLS-001]
related: [DOC-MKT-002, DOC-PRD-002, DOC-OPS-002]
---

# Sales Operating System

Defines the overall sales model: principles, ownership, planning cadence, opportunity discipline, and how sales collaborates with marketing, product, design, engineering, and operations. Tool-agnostic — no specific CRM, sales automation, or forecasting platform is assumed.

## Principles

1. **Qualify before investing.** Time spent on an unqualified opportunity ([IDEAL-CUSTOMER-AND-QUALIFICATION.md](IDEAL-CUSTOMER-AND-QUALIFICATION.md)) is time not spent on one that could actually close.
2. **Discovery before pitching.** Understand the customer's actual problem ([DISCOVERY-AND-NEEDS-ASSESSMENT.md](DISCOVERY-AND-NEEDS-ASSESSMENT.md)) before presenting a solution — a demo built on assumed needs wastes both sides' time.
3. **Sell what's real.** Commitments made to a customer trace to what product has actually built or firmly committed to ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)) — never to a hoped-for roadmap item.
4. **Pipeline hygiene is not optional.** A pipeline nobody trusts (stale stages, inflated forecasts) is worse than a smaller, honest one — see [SALES-PIPELINE.md](SALES-PIPELINE.md).
5. **Every deal teaches something.** Win or lose, the reason is captured ([COMPETITIVE-SALES.md](COMPETITIVE-SALES.md) win/loss learning) — an unexamined loss repeats.
6. **Lightweight until it needs to not be.** Early on, sales may be the founder having direct conversations — the discipline (qualification, honest pipeline, documented handoff) matters more than process weight.

## Ownership

Sales owns active opportunity management and commercial progression — see the ownership boundary in [README.md](README.md).

| Role | Responsibility |
|------|-----------------|
| Sales owner (founder or delegate) | Pipeline integrity, pricing/discount authority, forecast accuracy |
| Salesperson (human or AI-assisted) | Qualification, discovery, demos, proposals, closing |
| Sales engineering / technical support (once it exists) | Technical feasibility answers during a deal cycle |

One person holds all these roles early on — the responsibilities still apply.

## Planning Cadence

Startup OS does not mandate a specific cadence. What's mandated regardless: pipeline is reviewed on a regular rhythm ([SALES-PIPELINE.md](SALES-PIPELINE.md)), forecasts are checked against actual outcomes to calibrate accuracy, and win/loss reasons are reviewed periodically, not just individually in the moment.

## Opportunity Discipline

An opportunity in the pipeline has a stated stage, a next step, and a realistic timeline — an opportunity sitting with no next action is not "still working," it's stalled and should be marked as such (see [SALES-PIPELINE.md](SALES-PIPELINE.md) deal hygiene).

## Collaboration Model

- **With marketing** — receives qualified interest with context ([MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md)); reports back which messages and sources actually convert.
- **With product** — sells current capability truthfully; surfaces recurring prospect requirements as product input rather than promising them independently.
- **With engineering** — routes technical feasibility, integration, and reliability questions to engineering rather than answering from assumption (see [COMPETITIVE-SALES.md](COMPETITIVE-SALES.md), [PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md)).
- **With operations** — hands off closed deals with full context ([SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md)) so the customer doesn't have to re-explain themselves.

## Standards This System Rests On

| Concern | Standard |
|---------|----------|
| Who to pursue | [IDEAL-CUSTOMER-AND-QUALIFICATION.md](IDEAL-CUSTOMER-AND-QUALIFICATION.md) |
| How opportunities are tracked | [SALES-PIPELINE.md](SALES-PIPELINE.md) |
| How needs are uncovered | [DISCOVERY-AND-NEEDS-ASSESSMENT.md](DISCOVERY-AND-NEEDS-ASSESSMENT.md) |
| How the solution is presented | [DEMO-AND-SOLUTION-PRESENTATION.md](DEMO-AND-SOLUTION-PRESENTATION.md) |
| How deals are priced and proposed | [PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md) |
| How pushback is handled | [OBJECTION-HANDLING.md](OBJECTION-HANDLING.md) |
| How alternatives are addressed | [COMPETITIVE-SALES.md](COMPETITIVE-SALES.md) |
| How deals close | [CONTRACTING-AND-CLOSE.md](CONTRACTING-AND-CLOSE.md) |
| How customers transition | [SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md) |
| How the system is measured | [SALES-METRICS.md](SALES-METRICS.md) |

## Inputs and Outputs

- **Inputs:** qualified interest from marketing, active capability/roadmap documentation, pricing/packaging authority from leadership.
- **Outputs:** a maintained pipeline, closed-won/closed-lost records with reasons, handoff packages to operations, and win/loss input back to marketing and product.

## Scaling the System

At one salesperson (often the founder): pipeline may be a short list, tracked informally; qualification may be a mental checklist. What must not shrink to zero: a real qualification bar (not every conversation is a real opportunity), an honest sense of what's actually likely to close, and a documented handoff when a deal closes. Formalize as the team grows.
