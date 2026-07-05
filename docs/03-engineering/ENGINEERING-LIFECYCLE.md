---
id: DOC-ENG-003
title: Engineering Lifecycle
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, lifecycle, standard]
dependencies: [DOC-ENG-002]
related: [DOC-PRD-003, DOC-ENG-005, DOC-ENG-008, DOC-ENG-009, DOC-ENG-010]
---

# Engineering Lifecycle

The stages work moves through once it leaves product's [Ready for Development](../02-product/PRODUCT-LIFECYCLE.md) stage. Product's lifecycle ends where this one begins — this document does not redefine Idea through Ready for Development; it picks up from there.

```
Ready for Development → Technical Design → Implementation → Review →
Testing → Release → Monitoring → Post-Release Learning
```

## Ready for Development (handoff)

- **Purpose:** Confirm the incoming work is actually engineering-ready.
- **Inputs:** Active PRD, acceptance criteria, [PRODUCT-REVIEW-CHECKLIST.md](../02-product/PRODUCT-REVIEW-CHECKLIST.md) passed.
- **Outputs:** Accepted work item, or a bounce-back to product with the specific gap named.
- **Owner:** Engineering owner confirms acceptance.
- **AI agent responsibility:** May flag that a PRD lacks testable acceptance criteria; must not accept and "fill in" a gap silently.

## Technical Design

- **Purpose:** Decide how the work will be built before building it.
- **Entry criteria:** Work accepted as Ready for Development; complexity or risk warrants a written design (see [TECHNICAL-DESIGN.md](TECHNICAL-DESIGN.md) for the threshold).
- **Exit criteria:** Design is reviewed and approved; any resulting architecture decision has an ADR.
- **Required artifacts:** Technical design doc (or a documented decision that one isn't needed); ADR if a hard-to-reverse choice was made (see [ARCHITECTURE-DECISION-RECORDS.md](ARCHITECTURE-DECISION-RECORDS.md)).
- **Owner:** Implementer drafts; engineering owner (or a peer, at minimum) approves.
- **AI agent responsibility:** May draft the design; must route material technical trade-offs to a human rather than deciding unilaterally.

## Implementation

- **Purpose:** Build the thing.
- **Entry criteria:** Design approved (or explicitly skipped for low-risk work).
- **Exit criteria:** Code satisfies every acceptance criterion in the governing PRD/stories.
- **Required artifacts:** Code, matching tests, updated documentation for any behavior change (same change set).
- **Owner:** Implementer.
- **AI agent responsibility:** Implement from the spec; update the spec in the same change set if reality forces a divergence — never let code and docs quietly disagree (per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).

## Review

- **Purpose:** Catch what the implementer couldn't see from inside the work.
- **Entry criteria:** Implementation believed complete.
- **Exit criteria:** Review approves; see [BRANCHING-AND-CODE-REVIEW.md](BRANCHING-AND-CODE-REVIEW.md) for approval gates.
- **Required artifacts:** A pull request; a completed review (human or, for AI-authored code, an independent reviewer — see [AGENT-ROLES.md](../04-ai/AGENT-ROLES.md) on Codex's role).
- **Owner:** Reviewer, distinct from the implementer wherever feasible.
- **AI agent responsibility:** An AI agent does not approve its own implementation.

## Testing

- **Purpose:** Verify the acceptance criteria actually pass, not just that the code runs.
- **Entry criteria:** Review approved.
- **Exit criteria:** All acceptance criteria pass, including edge and failure cases (see [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md)).
- **Required artifacts:** Test results; automated tests wherever the risk profile calls for them.
- **Owner:** Implementer writes tests; an independent check (reviewer, QA, or CI) confirms they're meaningful.
- **AI agent responsibility:** Must not weaken, skip, or delete a failing test to report success.

## Release

- **Purpose:** Get verified work into production safely.
- **Entry criteria:** Testing passed.
- **Exit criteria:** Deployed with a rollback path confirmed (see [RELEASE-AND-DEPLOYMENT.md](RELEASE-AND-DEPLOYMENT.md)).
- **Required artifacts:** Release record, rollback plan.
- **Owner:** Whoever holds deployment authority for the environment; sign-off is explicit, not assumed.
- **AI agent responsibility:** May prepare the release; a human approves production releases unless explicitly delegated.

## Monitoring

- **Purpose:** Know whether what shipped is actually healthy.
- **Entry criteria:** Released to production.
- **Exit criteria:** N/A — ongoing (see [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md)).
- **Required artifacts:** Logs, metrics, alerts appropriate to the change's risk.
- **Owner:** Whoever's on call or otherwise responsible for the running system.
- **AI agent responsibility:** May surface anomalies; must not silently change production behavior in response.

## Post-Release Learning

- **Purpose:** Turn what happened into something the system retains.
- **Entry criteria:** Enough time/data has passed to know how the release actually performed.
- **Exit criteria:** Findings recorded — as a metric update, a technical debt entry, an incident postmortem, or new product input.
- **Required artifacts:** Whichever of [ENGINEERING-METRICS.md](ENGINEERING-METRICS.md), [TECHNICAL-DEBT.md](TECHNICAL-DEBT.md), or [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md) applies.
- **Owner:** Engineering owner ensures the learning is actually captured, not just discussed.
- **AI agent responsibility:** May draft the postmortem or debt entry from available evidence; must not omit uncomfortable findings.
