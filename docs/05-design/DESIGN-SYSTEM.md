---
id: DOC-DSG-006
title: Design System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, design-system, components, standard]
dependencies: [DOC-DSG-002]
related: [DOC-DSG-005, DOC-DSG-009, DOC-ENG-006]
---

# Design System

Defines reusable UI patterns, components, tokens, interaction standards, layout rules, consistency expectations, and how changes to the system get proposed. No specific design-system tooling is assumed — this governs the system's content and discipline, not its implementation platform.

## What the Design System Contains

- **Components** — reusable UI building blocks (buttons, forms, cards, navigation patterns) with their states and usage rules.
- **Tokens** — the atomic values behind components (color, spacing, typography scale) that keep visual decisions consistent and centrally changeable.
- **Interaction standards** — how things behave (transitions, feedback on action, loading/error conventions) consistently across the product.
- **Layout rules** — grid, spacing, and composition conventions that keep screens feeling like one product.

## Consistency Expectations

- Reusing an existing component is the default (per [DESIGN-OPERATING-SYSTEM.md](DESIGN-OPERATING-SYSTEM.md) principle 3); a new one-off pattern requires a stated reason in the design review.
- A component used inconsistently across the product (same purpose, different look/behavior in different places) is design debt — log it, don't just notice it (see [DESIGN-METRICS.md](DESIGN-METRICS.md) on design debt).

## Proposing a Design System Change

1. **State the gap** — what existing components don't cover, with a real use case.
2. **Check for a near-miss** — could an existing component be extended instead of adding a new one?
3. **Propose the addition/change** — including states, tokens used, and where else it might apply.
4. **Review** — design owner (or peer) confirms it's genuinely reusable, not a one-off dressed up as a system component.
5. **Document and publish** — the system entry is updated before the component is used anywhere beyond its originating design, so the next designer finds it instead of reinventing it.

A hard-to-reverse system-level choice (e.g. the core interaction model, the token structure itself) is documented with context/options/decision/consequences, the same discipline as an engineering ADR ([ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)).

## Relationship to Implementation

The design system's components correspond to implemented UI components in the codebase ([REPOSITORY-STANDARDS.md](../03-engineering/REPOSITORY-STANDARDS.md)) — when they drift out of sync (the design system says one thing, the code does another), that drift is itself tracked as debt on both sides ([TECHNICAL-DEBT.md](../03-engineering/TECHNICAL-DEBT.md) and this document's own debt tracking).

## Ownership

Design owner maintains system integrity; any designer or engineer may propose an addition; changes with UI-wide impact get design-owner sign-off before publishing.

## Anti-Patterns

- **Shadow components.** A near-duplicate of an existing component created because nobody checked first.
- **Silent drift.** A component's real, implemented behavior diverging from its documented spec without either being updated.
- **System bloat.** Adding a component for a single, unlikely-to-repeat use case instead of a one-off — the system should stay a *reusable* set, not accumulate everything ever designed.
