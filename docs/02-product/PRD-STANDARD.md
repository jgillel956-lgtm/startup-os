---
id: DOC-PRD-005
title: PRD Standard
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, prd, standard, requirements]
dependencies: [DOC-PRD-004, DOC-PRD-002]
related: [DOC-PRD-006, DOC-PRD-007, TPL-PRD-001]
---

# PRD Standard

Defines what a Product Requirements Document is, when one is required, and what it must contain. The copyable template is [PRD-TEMPLATE.md](../10-templates/PRD-TEMPLATE.md); this document is the standard that template implements.

## What a PRD Is

A PRD is the authoritative specification for a deliverable slice of a capability — what ships, this iteration, and how "done" will be verified. It is not a design brainstorm and not a status update; it is the document implementation is built and judged against.

## When a PRD Is Required

A PRD is required before implementation whenever behavior is being added or changed for users — per ADR-0005, no exceptions for "it's small." A typo fix or a non-behavioral refactor does not need one. If in doubt, the capability's Specification stage ([PRODUCT-LIFECYCLE.md](PRODUCT-LIFECYCLE.md)) is where the PRD gets written.

## Required Sections

1. **Summary** — what ships and why, in a few sentences.
2. **Problem** — the user/business problem this PRD addresses.
3. **Goals** — outcomes this PRD must achieve.
4. **Non-goals** — explicitly excluded, as binding as the goals.
5. **Users / actors** — who is affected and how.
6. **User stories** — linked or embedded, per [USER-STORY-STANDARD.md](USER-STORY-STANDARD.md).
7. **Workflows** — the sequences of steps involved, when non-trivial.
8. **Requirements** — functional and non-functional, numbered and testable.
9. **Business rules** — constraints the system must enforce regardless of entry point.
10. **Acceptance criteria** — per [ACCEPTANCE-CRITERIA-STANDARD.md](ACCEPTANCE-CRITERIA-STANDARD.md).
11. **Dependencies** — other capabilities, PRDs, or external systems this relies on.
12. **Risks** — what could go wrong, and how likely/severe.
13. **Metrics** — what will be measured after release to judge success.
14. **Edge cases** — empty, error, boundary, concurrent, permission-denied states.
15. **Open questions** — unresolved items, each with an owner.

## Non-Goals

Every PRD states non-goals explicitly. A PRD without non-goals has not actually bounded its scope — it has just not written the boundary down yet.

## Assumptions

State assumptions the PRD relies on but does not itself prove (e.g. "assumes the user already has a verified account"). An assumption that turns out false invalidates the parts of the PRD built on it — naming it lets that be caught early.

## Risks

Risks are named with likelihood and impact, not just listed. A risk with no mitigation or explicit acceptance is an open question, not a risk entry.

## Dependencies

Dependencies are named by ID (capability, PRD, API, DB) wherever one exists — not just described in prose. A dependency that is not yet Specified (see [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)) blocks this PRD from Ready for Development.

## Acceptance Criteria

Every goal and every user story has at least one corresponding acceptance criterion. Criteria are written per [ACCEPTANCE-CRITERIA-STANDARD.md](ACCEPTANCE-CRITERIA-STANDARD.md) — verifiable, not aspirational.

## Metrics

Name the specific metric, its current baseline (if known), and the target or direction of change expected. "Improve engagement" is not a metric; "increase week-2 retention from X% to Y%" is.

## Edge Cases

Cover at minimum: empty state, invalid input, permission-denied, concurrent modification, and partial failure. A PRD silent on edge cases is implicitly asking the implementer to invent behavior — which ADR-0005 and the AI operating rules both forbid.

## Open Questions

Every open question names who owns resolving it. A PRD can enter review with open questions; it cannot enter Ready for Development with open questions that affect scope, data, or security.

## Relationship to Engineering Specifications

A PRD does not contain database schemas or endpoint contracts — those live in [DATABASE-TEMPLATE.md](../10-templates/DATABASE-TEMPLATE.md)-based and [API-TEMPLATE.md](../10-templates/API-TEMPLATE.md)-based specs, derived from the PRD during Architecture Review. The PRD states *what* and *why*; engineering specs state *how, technically*. A PRD may reference the specs it produced once they exist.

## AI Usage Guidelines

- AI agents may draft a PRD from an approved problem/solution, but a human approves it before it reaches `active`.
- AI agents must flag any requirement they cannot phrase as a testable acceptance criterion rather than writing a vague one to fill the section.
- AI agents implementing from a PRD treat its non-goals as forbidding, not as suggestions.
- See [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) and [PROMPTING-STANDARDS.md](../04-ai/PROMPTING-STANDARDS.md).
