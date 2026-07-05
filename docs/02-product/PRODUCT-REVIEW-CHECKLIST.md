---
id: DOC-PRD-009
title: Product Review Checklist
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, review, checklist, standard]
dependencies: [DOC-PRD-005, DOC-PRD-007]
related: [DOC-PRD-003, DOC-PRD-004, DOC-AI-006]
---

# Product Review Checklist

Checklist for reviewing a product specification (capability or PRD) before it moves to Ready for Development (see [PRODUCT-LIFECYCLE.md](PRODUCT-LIFECYCLE.md)). Used by the founder/product owner and by AI agents preparing a specification for human sign-off.

## Problem Clarity

- [ ] The problem is stated specifically, not just as a symptom.
- [ ] Evidence supports that the problem is real and matters to the intended users.

## Customer Value

- [ ] The value to the user is stated, not just the value to the business.
- [ ] The intended actor(s) are named specifically (see [USER-STORY-STANDARD.md](USER-STORY-STANDARD.md)).

## Business Value

- [ ] The business rationale is stated (revenue, retention, risk, strategic fit).
- [ ] It has been weighed against other work per [PRIORITIZATION-STANDARD.md](PRIORITIZATION-STANDARD.md).

## Scope

- [ ] In-scope behavior is explicit.
- [ ] The scope is small enough to be delivered and verified as a unit.

## Non-Goals

- [ ] Non-goals are stated explicitly, not left implicit.
- [ ] Deferred ideas are captured (e.g. in `FUTURE.md`) rather than dropped.

## User Stories

- [ ] Every major flow has a corresponding story.
- [ ] Stories follow the standard format (see [USER-STORY-STANDARD.md](USER-STORY-STANDARD.md)).
- [ ] Negative and edge cases are covered.

## Acceptance Criteria

- [ ] Every goal and story has verifiable acceptance criteria (see [ACCEPTANCE-CRITERIA-STANDARD.md](ACCEPTANCE-CRITERIA-STANDARD.md)).
- [ ] No criterion depends on a judgment call to evaluate.

## Dependencies

- [ ] All dependencies (capabilities, PRDs, external systems) are named by ID.
- [ ] Hard dependencies are at least Specified (see [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)).

## Risks

- [ ] Material risks are named with likelihood/impact.
- [ ] Each risk has a mitigation or an explicit acceptance.

## Metrics

- [ ] Success metrics are named with a baseline and target, not just a direction.

## UX Readiness

- [ ] Flows and required states (empty/loading/error/success/permission-denied) are documented or linked.

## Data Readiness

- [ ] Data touched by this work is identified, including sensitivity and retention implications.

## API Readiness

- [ ] Any new or changed API surface is identified for Architecture Review, even if not yet fully specified.

## Security Considerations

- [ ] Authentication/authorization requirements are stated.
- [ ] Sensitive data handling is stated (never logged, never exposed to the wrong actor).

## AI Considerations

- [ ] Any AI-driven behavior is identified, with explicit constraints on what it must not do.
- [ ] "No AI involvement" is stated explicitly when true, not left ambiguous.

## Engineering Readiness

- [ ] Engineering has reviewed the spec for feasibility (Architecture Review complete).
- [ ] No open questions remain that would materially affect scope, data, or security.
