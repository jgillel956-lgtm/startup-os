---
id: DOC-ENG-008
title: Testing and Quality
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: engineering
tags: [engineering, testing, quality, standard]
dependencies: [DOC-ENG-003, DOC-PRD-007]
related: [DOC-ENG-007, DOC-AI-006, DOC-SEC-006]
---

# Testing and Quality

Defines testing expectations, quality gates, regression prevention, test ownership, and when manual testing is acceptable. Does not mandate a specific testing framework or tool — that's a repository-level choice.

## What Gets Tested

Every acceptance criterion in the governing PRD/story has a corresponding test, automated wherever feasible (see [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md)). This includes the negative and edge cases the story documents, not just the happy path — and, for security-sensitive work, the security-relevant test cases [SECURE-SDLC.md](../14-security-compliance/SECURE-SDLC.md) calls for.

## Quality Gates

A change does not merge unless:

1. All new and existing automated tests pass.
2. New behavior has test coverage proportional to its risk (a payment path gets more scrutiny than a display label).
3. No existing test was disabled, skipped, or weakened to make the change pass — that's a defect being hidden, not resolved.

## Regression Prevention

- A bug fix includes a test that would have caught the bug — otherwise the fix only proves the bug is gone today, not that it stays gone.
- Tests run automatically on every PR wherever CI exists; where it doesn't yet exist (very early stage), running the test suite manually before every merge is the interim substitute — not an excuse to skip testing.

## Test Ownership

- The implementer writes the tests for their own change.
- The reviewer checks that the tests actually exercise the acceptance criteria — a test suite that passes without meaningfully testing the behavior is a false signal, and catching that is part of review (see [BRANCHING-AND-CODE-REVIEW.md](BRANCHING-AND-CODE-REVIEW.md)).

## When Manual Testing Is Acceptable

Manual testing is an acceptable *supplement* — for UI/UX verification, exploratory testing, and one-off validation — but not a *substitute* for automated coverage on anything that will be touched again. Acceptable as the primary method only when: the change is low-risk, low-frequency-of-change, and automating the test would cost more than the risk it prevents. That judgment is stated explicitly in the PR, not assumed silently.

## AI Agents and Testing

AI agents write tests as part of implementation, not as an optional follow-up (see [ENGINEERING-LIFECYCLE.md](ENGINEERING-LIFECYCLE.md), Implementation stage). An AI agent reporting a change as "done" without having run its tests is making an unverified claim — run them, then report the actual result (see [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md), Testing section).

## Definition of Done, Testing Lens

A change is tested and ready for release when every acceptance criterion has a passing test, the full existing suite still passes, and no test was weakened to get there. This is the testing-specific instance of the broader Definition of Done in [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md).
