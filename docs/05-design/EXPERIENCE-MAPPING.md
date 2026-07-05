---
id: DOC-DSG-004
title: Experience Mapping
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, experience-mapping, journeys, standard]
dependencies: [DOC-DSG-003]
related: [DOC-DSG-005, DOC-PRD-004, DOC-PRD-006]
---

# Experience Mapping

Defines how user journeys, workflows, personas, service blueprints, and experience gaps are mapped before detailed design begins. Mapping happens at the capability level, before individual screens or flows are designed — it establishes what the experience actually needs to accomplish.

## User Journeys

A journey traces what an actor actually does, end to end, to accomplish a goal — including steps outside the product itself (e.g. receiving an email, contacting support) when they're part of the real experience. A journey mapped only within the product's UI misses the parts most likely to be broken.

## Personas

A lightweight description of a real actor type, grounded in research ([UX-RESEARCH.md](UX-RESEARCH.md)) — goals, context, and constraints relevant to the design decision at hand. A persona invented without research is a guess wearing a name; don't let it carry more authority than that.

## Workflows

Step-by-step sequences a user or system follows to complete a task — the design-level counterpart to a PRD's [Workflows section](../02-product/PRD-STANDARD.md). Where a PRD's workflow states *what* happens at each step, an experience map adds *how it should feel* and where friction is likely.

## Service Blueprints

For experiences that cross the product/support boundary (e.g. an issue that starts in-product and finishes in a support conversation), a service blueprint maps both the customer-facing steps and the backstage actions (support, engineering, operations) that support them — see [CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md) for the support side of this.

## Experience Gaps

A gap is a point in the journey where the experience breaks down, confuses, or drops the user — identified by mapping the *current* or *likely* experience against what the user actually needs at that step. Gaps found here are exactly what [WIREFRAMES-AND-PROTOTYPES.md](WIREFRAMES-AND-PROTOTYPES.md) then designs solutions for.

## When to Map

Before detailed design begins on anything nontrivial — a capability with more than one step, more than one actor type, or a cross-team handoff (support-to-product, product-to-engineering). Skip formal mapping for a small, contained change to an already-understood flow.

## Required Artifacts

A journey map or workflow diagram (any format — sketch, diagram, or written step list), named personas/actors involved, and a list of identified gaps with which one(s) this design effort intends to address.

## Ownership

Design drafts experience maps; product confirms they match the capability's actual scope ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)); both agree on which gaps are in scope for the current PRD versus deferred.

## Anti-Patterns

- **Mapping the ideal path only.** Ignoring error states, edge cases, and abandonment points — exactly where real experience gaps live.
- **Mapping in isolation from product.** Producing a journey map that implies scope the PRD never committed to.
- **Personas as decoration.** Creating personas once and never referencing them in an actual design decision.
