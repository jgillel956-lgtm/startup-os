---
id: DOC-CS-004
title: Implementation Handoff
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: customer-success
tags: [customer-success, handoff, standard]
dependencies: [DOC-CS-003]
related: [DOC-SLS-011, DOC-OPS-003]
---

# Implementation Handoff

Defines how sales, implementation, operations, product, and customer success transfer context after a customer closes — the internal-facing counterpart to [CUSTOMER-ONBOARDING.md](CUSTOMER-ONBOARDING.md), which is customer-facing.

## What Gets Transferred, and Between Whom

| From | To | What |
|------|-----|------|
| Sales | Customer success | Full deal context per [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) — need, commitments, stakeholders, risks |
| Customer success | Operations/support | Account context so support isn't starting cold on a ticket ([CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md)) |
| Customer success | Product | Real customer context behind adoption or configuration needs, when relevant to [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) |
| Any function | Customer success | Anything learned that affects the account's health or trajectory |

## Why a Second Handoff Layer Exists

Sales' handoff transfers deal context to customer success once. From there, customer success is the ongoing owner who must keep operations, product, and (when relevant) sales current as the relationship evolves — a single point-in-time handoff isn't enough for a relationship that continues for years.

## Handoff Completeness

Whoever receives context should not have to re-ask the customer something already known internally. The specific test: could this receiving function act correctly without asking the customer to repeat themselves? If not, the handoff was incomplete.

## Avoiding Context Loss

- Context lives somewhere durable (account records, not just someone's memory) — the same discipline [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) requires.
- When a customer success manager changes for an account, the same handoff discipline applies internally — a customer should never notice an ownership change by having to re-explain their situation.

## Required Artifacts

An account context record, kept current as onboarding and the relationship progress — not a one-time document frozen at handoff.

## Ownership

Customer success owns keeping account context current and distributing it to operations/product/sales as relevant; each receiving function owns actually using it rather than defaulting to asking the customer directly.

## Anti-Patterns

- **One-time handoff, then silence.** Treating the sales handoff as the only transfer needed, letting context go stale as the relationship evolves.
- **Tribal knowledge accounts.** Context that exists only in one person's head, lost the moment they're unavailable.
- **Re-asking the customer.** Support or product asking a customer something customer success already documented internally.
