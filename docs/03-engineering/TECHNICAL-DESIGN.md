---
id: DOC-ENG-005
title: Technical Design
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, technical-design, standard]
dependencies: [DOC-ENG-003]
related: [DOC-ENG-004, DOC-PRD-005, TPL-API-001, TPL-DB-001]
---

# Technical Design

Defines the required structure for a technical design document, written before major implementation begins. A technical design turns an active PRD into a concrete technical plan — it is where engineering exercises its authority over implementation approach.

## When a Technical Design Is Required

Required when the work: touches more than one component or service, changes a data model, introduces a new external dependency, or carries meaningful operational risk. Not required for a small, contained change to existing, well-understood code — that goes straight to implementation with the PRD as its spec.

## Required Sections

1. **Summary** — what's being built and which PRD it implements.
2. **Approach** — the chosen technical approach, in enough detail that another engineer (or AI agent) could implement it without guessing.
3. **Alternatives considered** — at least one other approach and why it wasn't chosen.
4. **Affected components** — services, modules, or repositories touched.
5. **Data changes** — new or changed data model, referencing [DATABASE-TEMPLATE.md](../10-templates/DATABASE-TEMPLATE.md) specs where applicable.
6. **API changes** — new or changed interfaces, referencing [API-TEMPLATE.md](../10-templates/API-TEMPLATE.md) specs where applicable.
7. **Risks** — technical risks and how they're mitigated or accepted.
8. **Rollout plan** — phased delivery if the work is large enough to need one.
9. **Open questions** — anything unresolved, with an owner.

## Ownership

- **Drafted by:** The implementer (human or AI agent) who will build the work, or the engineer scoping it.
- **Approved by:** Engineering owner, or a peer review when the engineering owner is the drafter.

## Inputs

An active PRD with acceptance criteria ([PRD-STANDARD.md](../02-product/PRD-STANDARD.md)); any constraints from prior ADRs ([ARCHITECTURE-DECISION-RECORDS.md](ARCHITECTURE-DECISION-RECORDS.md)); the current state of the affected components.

## Outputs

An approved design document; any resulting ADR for decisions that turned out to be hard-to-reverse; draft API/database specs where the design introduces or changes either.

## Review Gate

A design is approved when: the approach is concrete enough to implement without further judgment calls on material points, alternatives were genuinely considered (not just listed for form), and risks have a stated mitigation or explicit acceptance. A design that says "we'll figure out the data model during implementation" for a data-heavy feature is not approved — that's exactly what this document exists to prevent.

## Example: Right-Sizing the Document

A design for "add a filter to an existing list view" might be four sentences: no new data, no new API shape, one component touched, no real alternative worth writing down. A design for "support a second payment method" is a full document: new data model, new API surface, a genuine alternative (e.g. build vs. integrate a provider) worth recording. Match the document's weight to the decision's weight — a heavy document for a trivial change is its own form of over-engineering.
