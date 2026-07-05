---
id: DOC-PRD-007
title: Acceptance Criteria Standard
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, acceptance-criteria, standard, testing]
dependencies: [DOC-PRD-006]
related: [DOC-PRD-005, DOC-AI-006]
---

# Acceptance Criteria Standard

Defines what acceptance criteria are and what makes them good, across PRDs, capabilities, and user stories.

## What Acceptance Criteria Are

Verifiable statements that define when a piece of work is done. They are the contract between what was specified and what gets built — the thing a reviewer, a test, or an AI agent checks against, instead of judgment.

## Why They Matter

Without acceptance criteria, "done" is whatever the implementer believed at the time — unverifiable and un-reviewable. Acceptance criteria are what let AI agents implement without inventing requirements (per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)): they replace "use your judgment" with "check this."

## Good vs. Bad Acceptance Criteria

| Bad | Why | Good |
|-----|-----|------|
| "The form should work well" | Not verifiable | "GIVEN valid input WHEN the form is submitted THEN the record is saved and a confirmation is shown" |
| "Handle errors gracefully" | Vague | "GIVEN the API returns a 500 WHEN the user submits THEN an error message is shown and no partial record is saved" |
| "Fast" | No threshold | "p95 response time is under 300ms" |
| "Secure" | No specific check | "GIVEN an unauthenticated request WHEN it hits this endpoint THEN it receives a 401" |

The GIVEN/WHEN/THEN form is preferred but not mandatory — the requirement is verifiability, not a specific syntax.

## Functional Criteria

Describe observable behavior: given a state and an action, what result must occur. These are the majority of acceptance criteria for most stories.

## Non-Functional Criteria

Performance, reliability, scalability thresholds — stated with a number or a clear pass/fail line, not an adjective. "Fast" fails this standard; "p95 under 300ms" passes.

## Security Criteria

Authentication/authorization boundaries, data exposure limits, and abuse resistance, stated as testable conditions (see [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) Security section for the review-time checklist these criteria feed).

## Data Criteria

What must be persisted, what must never be persisted or logged, and any integrity constraint the feature depends on (uniqueness, referential integrity, idempotency).

## UI Criteria

Required states (empty, loading, error, success, permission-denied) and accessibility requirements — not visual style, which belongs to design review.

## Error Handling Criteria

For every failure mode the requirement describes, state the expected system response — not just "an error is shown," but which error, under which condition, and what state the system is left in.

## Testability

A criterion is testable if a person unfamiliar with the implementation could determine pass/fail from the criterion alone, without asking the author what they meant. If two reasonable people could disagree on whether it passed, rewrite it.

## Definition of Done

A story, PRD, or capability slice is done when:

1. Every functional, non-functional, security, and data criterion passes.
2. Negative and edge cases (per [USER-STORY-STANDARD.md](USER-STORY-STANDARD.md)) are covered and pass.
3. Documentation affected by the change is updated in the same change set.
4. `npm run validate` passes, if Markdown was touched.

"Done" never means "done except for tests" or "done except for docs" — partial completion is not completion (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), "start it = finish it").
