---
id: DOC-ENG-004
title: Architecture Decision Records
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, adr, architecture, standard]
dependencies: [DOC-ENG-002, DOC-ROOT-004]
related: [DOC-ENG-005, DOC-FND-010, TPL-ADR-001]
---

# Architecture Decision Records

Defines how architecture decisions are proposed, reviewed, documented, approved, and revisited within engineering. This document governs the *process*; the record format itself is [ADR-TEMPLATE.md](../10-templates/ADR-TEMPLATE.md) and the log is [DECISIONS.md](../../DECISIONS.md). [GITHUB-WORKFLOW.md](../00-foundation/GITHUB-WORKFLOW.md) already states *when* an ADR is needed at the repository level — this document adds the engineering-specific mechanics.

## When an Engineering Decision Needs an ADR

A technical choice needs an ADR when it is:

- **Hard to reverse** — data model shape, storage engine, core dependency, hosting platform.
- **Cross-cutting** — affects more than one capability's implementation.
- **Contradicts a prior ADR** — the new ADR must explicitly supersede the old one.
- **Materially risky** — introduces a new operational, security, or cost exposure.

Routine implementation choices within an already-decided architecture do not need one — that's what [TECHNICAL-DESIGN.md](TECHNICAL-DESIGN.md) is for.

## Propose

- **Owner:** Whoever identifies the decision — engineer, founder, or AI agent.
- **Inputs:** The problem forcing the decision; at least two real options.
- **Output:** A draft ADR using [ADR-TEMPLATE.md](../10-templates/ADR-TEMPLATE.md), or the [architecture-decision issue template](../../.github/ISSUE_TEMPLATE/architecture-decision.md) if alignment is needed before drafting.
- **Gate:** The draft names the context, the options, and a recommendation — a proposal with only one option considered is not ready for review.

## Review

- **Owner:** Engineering owner, plus anyone materially affected by the decision.
- **Inputs:** The draft ADR.
- **Output:** Feedback on the options, the recommendation, and unstated consequences.
- **Gate:** Reviewers ask "what breaks if this is wrong?" before signing off — an ADR that hasn't been pressure-tested this way isn't reviewed, it's rubber-stamped.

## Document

- **Owner:** Proposer, incorporating review feedback.
- **Output:** Final ADR text — context, options considered, decision, consequences (including negative ones), revisit criteria.
- **Gate:** Consequences section names at least one thing that gets *harder*, not just what gets easier. A one-sided ADR is incomplete.

## Approve

- **Owner:** Engineering owner (founder or delegate) for technical decisions; escalate to the founder specifically when the decision has material business or cost consequences.
- **Output:** ADR status becomes `Accepted`, appended to [DECISIONS.md](../../DECISIONS.md) in ID order.
- **Gate:** No implementation proceeds against a `Proposed` ADR — approval precedes building, not the reverse.

## Revisit

- **Trigger:** The ADR's own stated revisit criteria are met, or a new proposal explicitly contradicts it.
- **Output:** A new ADR that supersedes the old one — the old ADR's status updates to reference the superseding ADR; it is never edited to pretend it always said the new thing.
- **Gate:** Superseding an ADR requires the same review/approve steps as a new one — "we changed our minds" is a decision too.

## AI Agents and ADRs

AI agents may draft ADRs, including the options analysis, and may flag when an in-progress task is about to make a decision that looks ADR-worthy. AI agents do not approve ADRs and do not proceed with implementation on the assumption that a proposed ADR will be accepted (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).
