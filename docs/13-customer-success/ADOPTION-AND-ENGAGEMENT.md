---
id: DOC-CS-005
title: Adoption and Engagement
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: customer-success
tags: [customer-success, adoption, engagement, standard]
dependencies: [DOC-CS-003]
related: [DOC-CS-006, DOC-CS-012]
---

# Adoption and Engagement

Defines how product usage, adoption milestones, engagement signals, enablement needs, and underuse risk are monitored and improved. No specific analytics platform is assumed.

## Adoption vs. Engagement

- **Adoption** — whether the customer has actually started using the capabilities they bought, reaching the milestones that constitute real usage.
- **Engagement** — the ongoing pattern of usage after initial adoption: frequency, depth, and breadth of feature use over time.

A customer can adopt once and then disengage — both are tracked, not just the initial milestone.

## Adoption Milestones

Defined per what the customer actually bought (see [CUSTOMER-ONBOARDING.md](CUSTOMER-ONBOARDING.md)) — generic milestones that don't reflect the customer's actual use case measure the wrong thing.

## Engagement Signals

Usage frequency, feature breadth, and trend direction (growing, flat, declining) — read for what changed and why, not just reported as a number. A declining trend is a [health](CUSTOMER-HEALTH.md) signal worth investigating before it becomes a churn risk.

## Enablement Needs

Low adoption or engagement is diagnosed before it's assumed to mean disinterest — often it means the customer hasn't been trained on a relevant capability, or a key user left and nobody replaced their knowledge. Enablement (training, documentation pointers, a working session) addresses the actual cause rather than treating every underuse signal identically.

## Underuse Risk

A customer paying for capabilities they aren't using is a churn risk regardless of how "happy" they seem in conversation — usage data, not sentiment alone, is the check. Underuse identified early is addressable through enablement; underuse discovered at renewal time is often too late.

## Using Usage Data Responsibly

Usage signal informs where to focus attention — it does not replace direct relationship contact ([RELATIONSHIP-MANAGEMENT.md](RELATIONSHIP-MANAGEMENT.md)). A declining usage trend is a prompt for a conversation, not just an automated nudge.

## Required Artifacts

Defined adoption milestones per customer/segment; a periodic engagement review; enablement actions taken and their effect on subsequent usage.

## Ownership

Customer success monitors adoption/engagement and drives enablement; product supplies the underlying usage data model and, where usage reveals a genuine product gap, treats it as input to [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md).

## Anti-Patterns

- **Equating login with adoption.** Counting logins as success while the customer never reaches the capability that actually delivers value.
- **Enablement as an afterthought.** Waiting for the customer to ask for training instead of proactively addressing a visible underuse signal.
- **Sentiment-only health checks.** Assuming a friendly relationship means healthy usage, without checking the data.
