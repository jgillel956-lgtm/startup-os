---
id: DOC-PRD-002
title: Product Operating System
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.0
domain: product
tags: [product, operating-model, standard]
dependencies: [DOC-ROOT-003, DOC-ROOT-004]
related: [DOC-PRD-001, DOC-PRD-003, DOC-PRD-004, DOC-PRD-005, DOC-BIZ-003]
---

# Product Operating System

Defines how product work operates in a Startup OS company: the philosophy, decision hierarchy, artifacts, lifecycle, roles, and review expectations that turn an idea into something engineering can build correctly.

## Product Philosophy

- **Outcomes over output.** A capability succeeds when it changes a user or business outcome, not when a feature ships.
- **Specify before building.** Documentation-before-development (ADR-0005) is not optional for product work — it is the mechanism that makes product work reviewable and AI-implementable.
- **Small, traceable units.** Capabilities decompose into PRDs, PRDs into stories, stories into acceptance criteria — each link traceable, none skipped.
- **Company-neutral by default.** Startup OS defines the operating model; each company's actual products, capabilities, and roadmaps live in that company's own repository.
- **Strategy-grounded.** Product priorities trace to [COMPANY-STRATEGY.md](../01-business/COMPANY-STRATEGY.md)'s strategic themes — a capability that doesn't connect to current strategy is either revealing a strategy gap or shouldn't be a current priority.

## Documentation-Before-Development Rule

No implementation — human or AI — begins on a capability until its governing PRD is `active` and has acceptance criteria. This is the product-domain application of ADR-0005: the PRD is the spec; behavior that contradicts it is a bug in the PRD or a bug in the code, never a judgment call made silently during implementation.

## Product Decision Hierarchy

```
Business strategy          (docs/01-business/)
      ↓
Capability                 (what the product durably does — CAPABILITY-MODEL.md)
      ↓
PRD                        (what ships, this iteration — PRD-STANDARD.md)
      ↓
User Story                 (a testable slice of the PRD — USER-STORY-STANDARD.md)
      ↓
Acceptance Criteria        (what "done" means — ACCEPTANCE-CRITERIA-STANDARD.md)
```

Decisions flow down this hierarchy, not around it: a story can't invent a requirement its PRD doesn't have; a PRD can't invent a capability that doesn't exist. Hard-to-reverse decisions at any level get an ADR (see [GITHUB-WORKFLOW.md](../00-foundation/GITHUB-WORKFLOW.md)).

## Product Artifacts

| Artifact | Lives in | Governed by |
|----------|----------|-------------|
| Capability | `docs/02-product/` | [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md) |
| PRD | `docs/02-product/` | [PRD-STANDARD.md](PRD-STANDARD.md) |
| User Story | `docs/02-product/` | [USER-STORY-STANDARD.md](USER-STORY-STANDARD.md) |
| Acceptance Criteria | embedded in stories/PRDs | [ACCEPTANCE-CRITERIA-STANDARD.md](ACCEPTANCE-CRITERIA-STANDARD.md) |
| Sprint plan | `docs/02-product/` | [SPRINT-TEMPLATE.md](../10-templates/SPRINT-TEMPLATE.md) |

## Product Lifecycle

Full stage-by-stage definition lives in [PRODUCT-LIFECYCLE.md](PRODUCT-LIFECYCLE.md). In brief: a capability is not "ready for development" just because someone wants it — it earns that status through Research, Problem Definition, Solution Design, Specification, and Architecture Review, each with exit criteria.

## Product Roles

| Role | Responsibility |
|------|-----------------|
| Founder / Product Owner | Sets priorities, approves capabilities and PRDs, makes the calls product documents can't resolve alone |
| Product documents (this domain) | Encode the decisions once made, so they don't have to be re-explained per implementer |
| Engineering | Implements from active PRDs/specs; raises gaps rather than filling them silently |
| AI agents | Implement from active, sufficiently specified product documents; flag gaps instead of inventing (see [AI_CONTEXT.md](../../AI_CONTEXT.md)) |

## Product Review Expectations

- A PRD or capability that changes meaning goes through the review checklist ([PRODUCT-REVIEW-CHECKLIST.md](PRODUCT-REVIEW-CHECKLIST.md)) before it reaches `active`.
- Reviews check for problem clarity, scope discipline, and testable acceptance criteria — not writing style.
- A capability/PRD that fails review stays in `review` status; it does not get implemented "in the meantime."

## How Product Documentation Becomes Engineering Work

1. A PRD reaches `active` with complete acceptance criteria.
2. Engineering derives API/database specs from the PRD (per [API-TEMPLATE.md](../10-templates/API-TEMPLATE.md), [DATABASE-TEMPLATE.md](../10-templates/DATABASE-TEMPLATE.md)) — these specs implement the PRD, they don't reinterpret it.
3. Implementation proceeds against the PRD's acceptance criteria and the derived engineering specs together.
4. Any gap discovered during implementation updates the PRD first (same change set), then the code.

## How Product Changes Should Be Reviewed

Same mechanism as any other Startup OS document: a documentation-change or feature-request issue, a PR, validation passing, and — for anything that changes an accepted decision — an ADR. See [GITHUB-WORKFLOW.md](../00-foundation/GITHUB-WORKFLOW.md).

## How AI Agents Should Interpret Product Documentation

- A capability or PRD in `draft` or `review` status is not implementable — treat it as unfinished, not as a loose spec to interpret creatively.
- Acceptance criteria are the literal definition of done; if they're missing or ambiguous on a material point, stop and ask rather than infer (per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).
- Non-goals are binding — building something a PRD explicitly excludes is a defect, not initiative.
