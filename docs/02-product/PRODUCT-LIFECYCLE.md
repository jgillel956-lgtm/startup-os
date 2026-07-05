---
id: DOC-PRD-003
title: Product Lifecycle
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, lifecycle, standard]
dependencies: [DOC-PRD-002]
related: [DOC-PRD-004, DOC-PRD-005, DOC-PRD-009, DOC-FND-007]
---

# Product Lifecycle

The standard lifecycle a capability (or a PRD within one) moves through, idea to archived. This is distinct from — but maps onto — the document `status` lifecycle in [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md); a capability's *lifecycle stage* describes how far the work has progressed, while a document's *status* describes how much that document can be trusted.

```
Idea → Research → Problem Definition → Solution Design → Specification →
Architecture Review → Ready for Development → In Development → Testing →
Release Candidate → Production → Improvement → Deprecated → Archived
```

A capability can only move backward deliberately (e.g. Production → Improvement when a gap is found) — it never silently skips a stage forward.

## Idea

- **Purpose:** Capture a possibility before committing any effort to it.
- **Entry criteria:** Someone (human or AI) noticed a problem or opportunity worth naming.
- **Exit criteria:** The idea is worth spending Research time on, or it's discarded.
- **Required documents:** None — a one-line note is enough.
- **Owner responsibility:** Decide whether to advance to Research.
- **AI agent responsibility:** May surface ideas (e.g. from patterns noticed in support tickets or usage); must not advance an idea past this stage unilaterally.

## Research

- **Purpose:** Establish whether the problem is real and worth solving.
- **Entry criteria:** An idea has enough founder interest to warrant investigation.
- **Exit criteria:** Evidence exists that the problem is real, sized, and affects the intended users.
- **Required documents:** Research notes in `docs/12-knowledge/`.
- **Owner responsibility:** Commission or perform the research; judge whether evidence is sufficient.
- **AI agent responsibility:** May gather and summarize evidence; must cite sources and must not present speculation as evidence.

## Problem Definition

- **Purpose:** State the problem precisely enough that a solution can be judged against it.
- **Entry criteria:** Research confirms the problem is real.
- **Exit criteria:** The problem statement is specific, falsifiable, and tied to a user or business outcome.
- **Required documents:** Problem section of the future capability document (see [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)).
- **Owner responsibility:** Approve the problem statement.
- **AI agent responsibility:** May draft the problem statement from research; must not invent a problem no evidence supports.

## Solution Design

- **Purpose:** Explore how the problem could be solved before locking in one approach.
- **Entry criteria:** Problem definition is approved.
- **Exit criteria:** A solution direction is chosen, with alternatives considered and rejected explicitly.
- **Required documents:** Solution section of the capability document; ADR if the choice is hard to reverse.
- **Owner responsibility:** Choose the solution direction.
- **AI agent responsibility:** May propose and compare options; must not choose unilaterally when the choice is material (per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).

## Specification

- **Purpose:** Turn the chosen solution into a precise, implementable spec.
- **Entry criteria:** Solution direction is approved.
- **Exit criteria:** A PRD exists with goals, non-goals, requirements, and acceptance criteria — complete enough to implement from.
- **Required documents:** PRD ([PRD-STANDARD.md](PRD-STANDARD.md)), user stories ([USER-STORY-STANDARD.md](USER-STORY-STANDARD.md)).
- **Owner responsibility:** Approve the PRD.
- **AI agent responsibility:** May draft the PRD and stories from the approved solution; must flag any requirement it cannot state as testable.

## Architecture Review

- **Purpose:** Confirm the specification is technically sound before development starts.
- **Entry criteria:** PRD is complete and internally consistent.
- **Exit criteria:** Engineering has reviewed the PRD, raised risks, and confirmed feasibility; API/database specs are drafted if needed.
- **Required documents:** API/database specs ([API-TEMPLATE.md](../10-templates/API-TEMPLATE.md), [DATABASE-TEMPLATE.md](../10-templates/DATABASE-TEMPLATE.md)); ADR for any resulting architectural decision.
- **Owner responsibility:** Resolve conflicts between product intent and technical constraints.
- **AI agent responsibility:** May perform the review and propose specs; must route material trade-offs to a human rather than deciding silently.

## Ready for Development

- **Purpose:** Confirm nothing is blocking implementation from starting.
- **Entry criteria:** PRD is `active`; architecture review is complete; dependencies are known.
- **Exit criteria:** [PRODUCT-REVIEW-CHECKLIST.md](PRODUCT-REVIEW-CHECKLIST.md) passes.
- **Required documents:** Completed review checklist.
- **Owner responsibility:** Sign off that the work is ready to start.
- **AI agent responsibility:** May run the checklist and report gaps; must not begin implementation while gaps remain open.

## In Development

- **Purpose:** Build the capability against the spec.
- **Entry criteria:** Ready for Development sign-off.
- **Exit criteria:** Implementation satisfies every acceptance criterion in the governing stories.
- **Required documents:** None new; the PRD and stories are the spec being built against.
- **Owner responsibility:** Stay available to resolve ambiguity discovered mid-build.
- **AI agent responsibility:** Implement from the spec; update the spec in the same change set if behavior must diverge from it (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).

## Testing

- **Purpose:** Verify the implementation actually satisfies the spec.
- **Entry criteria:** Implementation is complete against all acceptance criteria.
- **Exit criteria:** All acceptance criteria pass, including edge and failure cases.
- **Required documents:** Test results; TEST-CASES.md if using the full capability folder ([CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)).
- **Owner responsibility:** Confirm testing is genuinely independent of the builder's assumptions.
- **AI agent responsibility:** May write and run tests; must not weaken or skip a failing test to report success (see [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md)).

## Release Candidate

- **Purpose:** Confirm the capability is safe to release.
- **Entry criteria:** Testing passes.
- **Exit criteria:** Rollout plan exists; risks are understood and accepted.
- **Required documents:** Rollout section of the PRD.
- **Owner responsibility:** Approve the release.
- **AI agent responsibility:** May prepare rollout notes; must not approve its own release readiness.

## Production

- **Purpose:** The capability is live and in use.
- **Entry criteria:** Release candidate approved and shipped.
- **Exit criteria:** N/A — ongoing until Improvement or Deprecated.
- **Required documents:** Metrics defined in the PRD are being tracked.
- **Owner responsibility:** Monitor outcomes against the metrics the PRD defined.
- **AI agent responsibility:** May surface metric anomalies; must not change production behavior without a documented change.

## Improvement

- **Purpose:** Refine a live capability based on real usage.
- **Entry criteria:** A gap, bug, or opportunity is found in production.
- **Exit criteria:** The improvement is specified (often re-entering Specification for the affected slice) and shipped.
- **Required documents:** Updated PRD/stories for the affected slice.
- **Owner responsibility:** Decide whether the improvement is worth prioritizing (see [PRIORITIZATION-STANDARD.md](PRIORITIZATION-STANDARD.md)).
- **AI agent responsibility:** May propose improvements from observed evidence; must not treat "it could be better" as license to change shipped behavior unprompted.

## Deprecated

- **Purpose:** Signal the capability is being phased out.
- **Entry criteria:** A replacement exists or the capability is no longer needed.
- **Exit criteria:** Users are migrated or the capability is confirmed unused.
- **Required documents:** Deprecation notice naming the successor capability/PRD, if any.
- **Owner responsibility:** Approve deprecation and the migration plan.
- **AI agent responsibility:** May identify usage to migrate; must not remove access before migration is confirmed complete.

## Archived

- **Purpose:** Retain history without implying current relevance.
- **Entry criteria:** Deprecation is complete.
- **Exit criteria:** N/A — terminal stage (nothing is deleted, per Constitution Article VII).
- **Required documents:** Document(s) moved to `docs/99-archive/`, `status: archived`.
- **Owner responsibility:** None ongoing.
- **AI agent responsibility:** May reference archived material for history; must not treat it as current guidance.
