---
id: DOC-PRD-001
title: Product — Overview
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, overview, operating-system]
dependencies: []
related: [DOC-PRD-002, DOC-PRD-003, DOC-PRD-004, DOC-PRD-005, DOC-PRD-006, DOC-PRD-007, DOC-PRD-008, DOC-PRD-009]
---

# Product — Overview

The product domain defines the **Product Operating System**: how companies built on Startup OS describe products, capabilities, user problems, requirements, stories, acceptance criteria, lifecycle, and prioritization — before any of it becomes code.

## What the Product Operating System Is

A consistent way to go from "we should build X" to "engineering has everything it needs to build X correctly." It is not a specific product's roadmap — Startup OS stays company-neutral — it is the structure every company's product work fits into.

| Document | Defines |
|----------|---------|
| [PRODUCT-OPERATING-SYSTEM.md](PRODUCT-OPERATING-SYSTEM.md) | The overall product operating model |
| [PRODUCT-LIFECYCLE.md](PRODUCT-LIFECYCLE.md) | The stages a capability moves through, idea to archived |
| [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md) | What a capability is and how it's structured |
| [PRD-STANDARD.md](PRD-STANDARD.md) | How Product Requirements Documents are written |
| [USER-STORY-STANDARD.md](USER-STORY-STANDARD.md) | How user stories are written |
| [ACCEPTANCE-CRITERIA-STANDARD.md](ACCEPTANCE-CRITERIA-STANDARD.md) | What makes acceptance criteria good |
| [PRIORITIZATION-STANDARD.md](PRIORITIZATION-STANDARD.md) | How work gets ranked and sequenced |
| [PRODUCT-REVIEW-CHECKLIST.md](PRODUCT-REVIEW-CHECKLIST.md) | What to check before engineering starts |

## Why Product Documentation Matters Before Development

Startup OS's documentation-before-development rule (ADR-0005) applies most directly here: a feature built from an undocumented idea has no verifiable definition of "correct." Product documentation is what implementation — human or AI — gets measured against. Skipping it doesn't save time; it moves the cost of specification into debugging.

## How Product Connects to Other Domains

- **Business** (`docs/01-business/`) — capabilities exist to serve a business model; product documents trace back to a business problem or opportunity.
- **Design** (`docs/05-design/`) — PRDs and capabilities reference UX flows; design work is scoped by what product has specified.
- **Engineering** (`docs/03-engineering/`) — API and database specs are written against an active PRD, never invented independently.
- **AI** (`docs/04-ai/`) — AI agents implement from product documents; product documents tell agents what "done" means.
- **Operations** (`docs/09-operations/`) — released capabilities become things operations supports, measures, and reports on.

## How Capabilities Move From Idea to Production

Capabilities move through the stages defined in [PRODUCT-LIFECYCLE.md](PRODUCT-LIFECYCLE.md): Idea → Research → Problem Definition → Solution Design → Specification → Architecture Review → Ready for Development → In Development → Testing → Release Candidate → Production → Improvement → (eventually) Deprecated → Archived. Each stage has entry/exit criteria and required documents — a capability doesn't advance on intention, it advances on evidence.

## How AI Agents Should Use Product Documents

1. Read the governing capability and PRD before writing or changing product-facing behavior.
2. Treat missing acceptance criteria as a blocker, not a gap to fill in — flag it (see [AI_CONTEXT.md](../../AI_CONTEXT.md)).
3. Never advance a capability's lifecycle stage; that's a human product decision.
4. Update the PRD/story/acceptance-criteria documents in the same change set as any behavior they govern.

## Products, Capabilities, PRDs, Stories, Acceptance Criteria — How They Relate

```
Product
  └─ Capability            (durable, user-meaningful thing the product does)
       └─ PRD               (a deliverable slice of a capability)
            └─ User Story    (a small, testable slice of user value)
                 └─ Acceptance Criteria  (verifiable statements that define "done")
```

A capability outlives any single PRD; a PRD is delivered through one or more stories; a story is done when its acceptance criteria pass. Implementation traces back up this chain — code that can't be traced to an acceptance criterion, a story, a PRD, and a capability is unspecified work (see [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)).
