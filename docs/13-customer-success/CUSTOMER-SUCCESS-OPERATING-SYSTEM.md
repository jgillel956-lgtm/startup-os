---
id: DOC-CS-002
title: Customer Success Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: customer-success
tags: [customer-success, operating-model, standard]
dependencies: [DOC-CS-001]
related: [DOC-SLS-002, DOC-OPS-002, DOC-PRD-002, DOC-BIZ-012]
---

# Customer Success Operating System

Defines the overall customer success model: ownership, principles, collaboration model, planning cadence, and success standards. Tool-agnostic — no specific customer success platform, onboarding tool, or analytics product is assumed.

## Principles

1. **Outcomes, not just usage.** A customer logging in is not success — achieving the outcome they bought the product for is (see [CUSTOMER-OUTCOMES.md](CUSTOMER-OUTCOMES.md)).
2. **Proactive over reactive.** Health signals ([CUSTOMER-HEALTH.md](CUSTOMER-HEALTH.md)) are watched continuously so risk is caught before a renewal conversation, not during one.
3. **Value reinforced continuously, not just at renewal time.** A customer who only hears from the company at renewal has had no relationship in between — see [RELATIONSHIP-MANAGEMENT.md](RELATIONSHIP-MANAGEMENT.md).
4. **Expansion follows proven value, never precedes it.** Growth pushed before outcomes are demonstrated erodes trust (see [EXPANSION-AND-GROWTH.md](EXPANSION-AND-GROWTH.md)).
5. **Every churn teaches something.** A loss without a documented reason repeats (see [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md)).
6. **Lightweight until it needs to not be.** Early on, this may be the founder checking in on customers directly — the discipline (tracking health, capturing outcomes, learning from churn) matters more than tooling.
7. **Retention is a business goal, not a side metric.** Health, renewal, and expansion feed [BUSINESS-METRICS.md](../01-business/BUSINESS-METRICS.md) directly — leadership sees the same retention picture customer success does.

## Ownership

Customer success owns customer outcomes, adoption, retention risk, and relationship continuity after close — see the ownership boundary in [README.md](README.md).

| Role | Responsibility |
|------|-----------------|
| Customer success owner (founder or delegate) | Health review cadence, escalation authority, renewal/expansion coordination with sales |
| Customer success manager (human or AI-assisted) | Onboarding, adoption tracking, relationship management, outcome documentation |
| Support (operations) | Day-to-day issue resolution; surfaces patterns to customer success |
| Sales | Owns commercial terms of renewals/expansion; customer success owns the readiness and timing signal |

One person holds all these roles early on — the responsibilities still apply.

## Collaboration Model

- **With sales** — receives a complete handoff ([SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md)); flags renewal/expansion readiness to sales rather than negotiating commercial terms directly.
- **With operations/support** — support signal ([CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)) feeds customer health; customer success does not duplicate support's ticket-handling role.
- **With product** — surfaces adoption gaps and outcome data as product input, via the same prioritization path as any other feedback source.
- **With marketing** — supplies proven outcomes as case study/proof-point material, with the customer's actual permission (same discipline as [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md)).

## Planning Cadence

Startup OS does not mandate a specific cadence. What's mandated regardless: every active account has a known health status, reviewed on a regular rhythm ([CUSTOMER-HEALTH.md](CUSTOMER-HEALTH.md)); renewals are worked ahead of their date, not discovered at the deadline ([RENEWALS-AND-RETENTION.md](RENEWALS-AND-RETENTION.md)).

## Standards This System Rests On

| Concern | Standard |
|---------|----------|
| Getting started | [CUSTOMER-ONBOARDING.md](CUSTOMER-ONBOARDING.md), [IMPLEMENTATION-HANDOFF.md](IMPLEMENTATION-HANDOFF.md) |
| Using the product | [ADOPTION-AND-ENGAGEMENT.md](ADOPTION-AND-ENGAGEMENT.md) |
| Knowing account risk | [CUSTOMER-HEALTH.md](CUSTOMER-HEALTH.md) |
| The relationship | [RELATIONSHIP-MANAGEMENT.md](RELATIONSHIP-MANAGEMENT.md) |
| Keeping the account | [RENEWALS-AND-RETENTION.md](RENEWALS-AND-RETENTION.md) |
| Growing the account | [EXPANSION-AND-GROWTH.md](EXPANSION-AND-GROWTH.md) |
| Proving value | [CUSTOMER-OUTCOMES.md](CUSTOMER-OUTCOMES.md) |
| Preventing/learning from loss | [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md) |
| Measuring the system | [CUSTOMER-SUCCESS-METRICS.md](CUSTOMER-SUCCESS-METRICS.md) |

## Inputs and Outputs

- **Inputs:** a complete sales handoff, product usage/engagement signal, support themes, the customer's own stated goals.
- **Outputs:** onboarded and adopting customers, tracked account health, renewed/expanded accounts, documented outcomes and proof points, and churn learnings fed back to product, marketing, and sales.

## Scaling the System

At one person (often the founder): health tracking may be a mental model built from direct relationships; onboarding may be a short call and a checklist. What must not shrink to zero: every account has a known status, nothing renews or churns as a surprise, and every loss has a recorded reason. Formalize as the team and customer base grow.
