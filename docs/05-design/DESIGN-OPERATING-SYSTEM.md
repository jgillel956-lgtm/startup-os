---
id: DOC-DSG-002
title: Design Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, operating-model, standard]
dependencies: [DOC-DSG-001]
related: [DOC-PRD-002, DOC-ENG-002, DOC-OPS-002]
---

# Design Operating System

Defines the overall design model: principles, ownership, collaboration model, review cadence, and decision standards. Tool-agnostic — no specific design or prototyping tool is assumed.

## Principles

1. **Design against evidence, not preference.** Usability decisions trace back to research or observed behavior ([UX-RESEARCH.md](UX-RESEARCH.md)), not to whoever argues loudest.
2. **Clarity beats cleverness.** A familiar, boring pattern that users understand instantly beats a novel one that needs explaining.
3. **Consistency is a feature.** Reusing the [design system](DESIGN-SYSTEM.md) is the default; a one-off pattern needs a reason, not the other way around.
4. **Design is done when it's usable, not when it's pretty.** Visual polish without demonstrated usability is incomplete work.
5. **Lightweight until it needs to not be.** Early on, design may be one person sketching and deciding fast — the discipline (evidence, consistency, accessibility) matters more than the process weight.

## Ownership

Design owns user experience clarity and usability — see the ownership boundary in [README.md](README.md). Within design itself:

| Role | Responsibility |
|------|-----------------|
| Design owner (founder or delegate) | Design direction, review sign-off, design system integrity |
| Designer (human or AI agent) | Research synthesis, experience mapping, prototypes, handoff artifacts |
| Reviewer | Usability, accessibility, and consistency check before handoff |

One person can hold all these roles early on — the responsibilities still apply.

## Collaboration Model

- Design engages as soon as a capability reaches Problem Definition (see [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)) — not after a PRD is already locked, which forces expensive rework.
- Design and engineering's technical design ([TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md)) develop in parallel where both are needed — a technical constraint discovered late is exactly what this overlap prevents.
- Product, design, and engineering each hold veto power in their own domain (intent, usability, feasibility) — none overrides another's domain by default; disagreements that can't resolve directly become an ADR ([ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)) if technical, or a documented product decision if not.

## Design Review Cadence

- Every design that will be handed off gets reviewed before handoff (see [DESIGN-HANDOFF.md](DESIGN-HANDOFF.md)) — not after engineering has already started building against it.
- The design system itself is reviewed periodically for drift — components that have quietly diverged from the documented standard (see [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)).
- Post-release, implemented UI is checked against approved design via [DESIGN-QA.md](DESIGN-QA.md) — review does not stop at handoff.

## Decision Standards

- A design decision that's hard to reverse (a core interaction pattern, a foundational design system choice) gets documented the same way an engineering ADR does — context, options, decision, consequences — even if it doesn't formally join `DECISIONS.md`.
- A decision made without supporting research or a stated rationale is flagged in review, not waved through because it "looks right."

## Inputs and Outputs

- **Inputs:** an active capability/PRD with problem clarity ([PRD-STANDARD.md](../02-product/PRD-STANDARD.md)); prior research ([UX-RESEARCH.md](UX-RESEARCH.md)); existing design system components.
- **Outputs:** experience maps, prototypes, a reviewed handoff package, and — post-release — design QA findings and updated metrics.

## Scaling the System

At one designer (or a founder doing double duty): research may be a handful of customer conversations, review may be a self-check against [DESIGN-QA.md](DESIGN-QA.md)'s checklist, and the design system may be three documented components. What must not shrink to zero: some evidence behind material decisions, a documented handoff before engineering builds, and an accessibility pass before release. Formalize as the team grows.
