---
id: DOC-BIZ-008
title: Decision Making
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: business
tags: [business, decisions, standard]
dependencies: [DOC-BIZ-002]
related: [DOC-BIZ-009, DOC-ENG-004]
---

# Decision Making

Defines how strategic, operational, product, financial, customer, hiring, and risk decisions are made, documented, reviewed, and revisited across the company. This is the business-level counterpart to [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) — the same discipline (context, options, decision, consequences, revisit criteria), applied beyond engineering.

## Decision Types

| Type | Typical owner |
|------|-----------------|
| Strategic | Leadership |
| Operational | Domain owner |
| Product | Product, informed by business strategy |
| Financial | Finance/leadership |
| Customer | Sales/customer success, within pricing and policy set by leadership |
| Hiring | Leadership, with domain owner input |
| Risk acceptance | Leadership |

## When a Decision Needs This Process

A decision needs documented rigor when it's hard to reverse, affects more than one domain, or commits meaningful resources — the same trigger [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) uses for engineering. Routine decisions within a domain owner's clear authority don't need this weight.

## Making a Decision

1. State the context forcing a decision and at least two real options.
2. State the decision and the primary reason it won the options considered.
3. State the consequences honestly — including what gets harder, not just what gets easier.
4. State what would trigger revisiting it.

## Documenting Decisions

Material decisions are recorded — not necessarily in `DECISIONS.md` (that log is for repository/framework-level ADRs), but somewhere durable and findable, so the reasoning survives past the meeting it was made in.

## Review and Revisit

A decision is revisited when its own stated revisit criteria are met, or when evidence from [STRATEGIC-REVIEW.md](STRATEGIC-REVIEW.md) contradicts the assumption it was based on. Revisiting is a new decision with the same rigor — not a quiet reversal with no record of why.

## Escalation

A decision that exceeds a domain owner's authority, or where two domains disagree, escalates to leadership with both perspectives represented — not decided unilaterally by whichever domain escalates first.

## Required Artifacts

A decision record per material decision: context, options, decision, consequences, revisit criteria, and who decided.

## Ownership

Whoever holds authority for the decision type owns making and documenting it; leadership owns decisions that cross domains or exceed any single owner's authority.

## Anti-Patterns

- **Undocumented major decisions.** A significant call made in conversation, never written down, later disputed or forgotten.
- **One-sided decision records.** Documenting only the chosen option's upside, never its real cost.
- **Silent reversal.** Quietly doing the opposite of a documented decision without recording why.
