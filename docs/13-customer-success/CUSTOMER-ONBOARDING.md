---
id: DOC-CS-003
title: Customer Onboarding
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: customer-success
tags: [customer-success, onboarding, standard]
dependencies: [DOC-CS-002]
related: [DOC-CS-004, DOC-SLS-011]
---

# Customer Onboarding

Defines how a new customer moves from signed agreement to active usage: planning, kickoff, responsibilities, milestones, risks, and completion criteria. No specific onboarding or project-management tool is assumed.

## Onboarding Planning

Built from the [sales-to-customer handoff](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md): the customer's confirmed need, success criteria they defined for themselves, and any commitments made during the sales cycle that onboarding must honor. Onboarding planned without this context risks re-litigating things the customer already explained once.

## Kickoff

A kickoff conversation confirms: who's involved on the customer's side, what "successfully onboarded" looks like to them specifically, and the plan and timeline to get there. This is where any gap between what was promised during sales and what's actually being delivered surfaces early — better here than mid-onboarding.

## Responsibilities

Onboarding is a two-sided effort — what the company does and what the customer needs to do (configuration, data, internal approval) are both stated explicitly. An onboarding stalled on a customer-side dependency is tracked as such, not silently absorbed as the company's own delay.

## Milestones

Defined checkpoints between kickoff and full adoption (e.g. setup complete, first successful use, team trained) — each with a clear owner and expected date. Milestones make onboarding progress visible instead of a black box the customer has to ask about.

## Risks

Named explicitly: a tight timeline promised during sales, a key stakeholder who might disengage, a technical dependency not yet confirmed feasible (escalate to engineering per [ENGINEERING-LIFECYCLE.md](../03-engineering/ENGINEERING-LIFECYCLE.md) if genuinely uncertain). A risk not named is a risk nobody's watching.

## Completion Criteria

Onboarding is done when the customer has reached the milestones that constitute "active usage" for their situation — not just when a setup checklist is technically complete. Completion hands the account into ongoing [adoption tracking](ADOPTION-AND-ENGAGEMENT.md) and [health monitoring](CUSTOMER-HEALTH.md).

## Required Artifacts

An onboarding plan (milestones, owners, dates) built from the handoff; a kickoff record confirming the customer's own success criteria; a completion record noting how onboarding actually went (see [IMPLEMENTATION-HANDOFF.md](IMPLEMENTATION-HANDOFF.md) for the internal context-transfer side of this).

## Ownership

Customer success (or a dedicated implementation function) owns onboarding execution; the customer owns their side of the responsibilities; sales stays available if a commitment made during the sales cycle needs clarifying.

## Anti-Patterns

- **Generic onboarding regardless of what was sold.** Running the same checklist without referencing what this specific customer actually needs.
- **Silent customer-side stalls.** An onboarding stuck on the customer's own delay, absorbed without being tracked or escalated.
- **Completion by checklist, not by outcome.** Marking onboarding "done" because setup steps are checked off, while the customer hasn't actually reached working usage.
