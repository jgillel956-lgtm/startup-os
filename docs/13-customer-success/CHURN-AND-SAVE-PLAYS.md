---
id: DOC-CS-011
title: Churn and Save Plays
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: customer-success
tags: [customer-success, churn, retention, standard]
dependencies: [DOC-CS-006]
related: [DOC-CS-008, DOC-CS-012, DOC-SLS-009]
---

# Churn and Save Plays

Defines how churn risks are identified, escalated, worked, documented, and converted into product, support, sales, or leadership learning.

## Identifying Churn Risk

Read from [customer health](CUSTOMER-HEALTH.md) signals and [relationship](RELATIONSHIP-MANAGEMENT.md) risk together — declining usage, disengaged stakeholders, unresolved support friction, or explicit customer statements of dissatisfaction. Churn risk is flagged on the earliest credible signal, not held until it's certain — the same "declare early" principle [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md) applies to technical incidents.

## Escalating Churn Risk

A material churn risk (significant account, or a pattern affecting multiple accounts) is escalated to leadership and, if the cause is technical, to engineering — the same routing discipline as [ESCALATION-MANAGEMENT.md](../09-operations/ESCALATION-MANAGEMENT.md). A churn risk sat on quietly by one person is a risk the company can't respond to.

## Working a Save Play

- **Understand the actual cause** — value not realized, a specific unresolved issue, a champion who left, price sensitivity, or a lost-fit situation. The right response differs entirely by cause; a generic "please stay" offer addresses none of them well.
- **Address the real cause directly** — enablement for underuse, an escalated fix for an unresolved technical issue ([TECHNICAL-DEBT.md](../03-engineering/TECHNICAL-DEBT.md) if it's a known gap), a business conversation for price sensitivity.
- **Involve sales for anything commercial** — a save play that requires a concession or contract change routes through sales' pricing authority ([PROPOSALS-AND-PRICING.md](../07-sales/PROPOSALS-AND-PRICING.md)), not an improvised customer success discount.

## Documenting Churn

Every churned account records the actual cause — not a euphemism. "Price" that was really "never adopted the product" should be recorded as what it really was, the same discipline [COMPETITIVE-SALES.md](../07-sales/COMPETITIVE-SALES.md) applies to sales loss reasons.

## Converting Loss into Learning

- A cause tracing to a real product gap becomes input to [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md).
- A cause tracing to a support/process failure becomes input to [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md).
- A cause tracing to a sales-side overcommitment becomes input to [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md)'s closing-the-loop discipline.
- A pattern across multiple churns (not just one account) is escalated to leadership as a systemic signal.

## Required Artifacts

A churn risk record from first flag through resolution or loss; a documented cause on every churned account; recurring-pattern reviews feeding the relevant function above.

## Ownership

Customer success identifies risk and runs save plays; sales handles any commercial concession; leadership is briefed on material or patterned risk; product/support receive root-cause learning.

## Anti-Patterns

- **Discounting as the default save play.** Offering a price concession without understanding whether price is actually the cause.
- **Loss-reason laundering.** Recording every churn as "budget" because it's the easiest answer, hiding real patterns.
- **Learning that dies with the account.** A churn cause identified and never fed back to the function that could act on it.
