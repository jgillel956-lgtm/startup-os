---
id: DOC-CS-006
title: Customer Health
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: customer-success
tags: [customer-success, health, standard]
dependencies: [DOC-CS-005]
related: [DOC-CS-007, DOC-CS-011, DOC-OPS-011, DOC-SEC-011]
---

# Customer Health

Defines customer health signals, risk indicators, health scoring principles, account review cadence, and escalation triggers. No specific health-scoring or customer success platform is assumed.

## Health Signals

| Signal | What it indicates |
|--------|---------------------|
| Usage/engagement trend | Whether the customer is actually getting value (see [ADOPTION-AND-ENGAGEMENT.md](ADOPTION-AND-ENGAGEMENT.md)) |
| Support ticket volume/tone | Rising volume or increasingly frustrated tone signals friction (see [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)) |
| Stakeholder engagement | Whether the key contact(s) are still responsive and engaged (see [RELATIONSHIP-MANAGEMENT.md](RELATIONSHIP-MANAGEMENT.md)) |
| Outcome progress | Whether the customer is progressing toward the success criteria they defined (see [CUSTOMER-OUTCOMES.md](CUSTOMER-OUTCOMES.md)) |
| Commercial signals | Payment friction, renewal date approaching without engagement, unaddressed pricing/value concerns |
| Trust/security signals | A security incident affecting this account ([SECURITY-INCIDENT-RESPONSE.md](../14-security-compliance/SECURITY-INCIDENT-RESPONSE.md)) or an unresolved trust concern |

## Risk Indicators

A single weak signal is worth noting; multiple weak signals together are a real risk. Disengaged stakeholder + declining usage + rising ticket volume is a stronger signal than any one alone — health assessment weighs signals together, not in isolation.

## Health Scoring Principles

- Score reflects the actual signals above, not a gut feeling disconnected from data.
- A score is a prioritization tool for where to focus attention — not a number to report and forget.
- Scoring is directional (improving, stable, declining) as much as absolute — a "medium" account trending down needs attention sooner than a "medium" account trending up.

## Account Review Cadence

Every active account has a reviewed health status on a regular rhythm — not just when something goes obviously wrong. Reviews check the signals above explicitly, not just whoever's memory of "how that account feels."

## Escalation Triggers

A health status crossing into risk territory triggers action: a direct outreach, an internal escalation to leadership if the account is significant, or entry into [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md) if churn looks likely. Waiting until the renewal conversation to address a health decline that was visible months earlier is the single most preventable failure in this domain.

## Required Artifacts

A documented health status per account, updated on the review cadence; an escalation record when a trigger fires, including what action was taken.

## Ownership

Customer success owns tracking and reviewing health; escalation to leadership or sales (for renewal risk) happens per [RENEWALS-AND-RETENTION.md](RENEWALS-AND-RETENTION.md) and [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md) triggers.

## Anti-Patterns

- **Health theater.** A score that exists on paper but isn't actually reviewed or acted on.
- **Single-signal scoring.** Judging health from one data point (usually the most recent conversation) instead of the fuller signal set.
- **Reactive-only health checks.** Only assessing health when a customer complains or a renewal is imminent.
