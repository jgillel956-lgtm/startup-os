---
id: DOC-DSG-005
title: Wireframes and Prototypes
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, wireframes, prototypes, standard]
dependencies: [DOC-DSG-004]
related: [DOC-DSG-006, DOC-DSG-009, DOC-ENG-005]
---

# Wireframes and Prototypes

Defines when to use sketches, wireframes, clickable prototypes, and high-fidelity mockups, and how each gets reviewed. No specific design or prototyping tool is assumed.

## Fidelity Levels

| Level | Purpose | Typical use |
|-------|---------|--------------|
| Sketch | Explore multiple directions fast, cheaply | Early divergent exploration, before committing to one direction |
| Wireframe | Nail down structure and flow without visual polish | Confirming layout and information hierarchy |
| Clickable prototype | Test actual interaction and flow | Validating a workflow feels right before build |
| High-fidelity mockup | Specify exact visual treatment | Final review before handoff |

## Choosing the Right Fidelity

Match fidelity to the risk and uncertainty of the decision, per [ENGINEERING-OPERATING-SYSTEM.md](../03-engineering/ENGINEERING-OPERATING-SYSTEM.md)'s "match weight to the decision" principle applied to design: a well-understood, low-risk flow can go straight to a high-fidelity mockup of an existing pattern; a genuinely new interaction gets sketched and tested at low fidelity first, because throwing away a sketch costs nothing and throwing away a finished mockup costs real time.

## Prototype Reviews

- A prototype is reviewed against the experience map's identified gaps ([EXPERIENCE-MAPPING.md](EXPERIENCE-MAPPING.md)) — does this actually address what was found, not just "does it look finished."
- Where the decision is material, the prototype is tested with real users or stakeholders before moving to higher fidelity ([UX-RESEARCH.md](UX-RESEARCH.md)) — a prototype nobody outside the design process has seen is still a hypothesis.
- Engineering reviews prototypes for feasibility before they harden into final design, when the interaction is technically novel — catching a "this isn't buildable as shown" early is far cheaper than catching it at [DESIGN-HANDOFF.md](DESIGN-HANDOFF.md).

## Required States

Any prototype or mockup destined for handoff covers, at minimum: default/empty, loading, populated, error, and permission-denied states — the same state list [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md) requires for UI criteria. A mockup showing only the happy path is not ready for handoff.

## Consistency Check

Before moving to high fidelity, check the design system ([DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)) for an existing component or pattern — a new pattern is a deliberate choice, not a default born from not checking.

## Ownership

Designer produces; design owner or peer reviews before advancing fidelity; product confirms the flow matches the PRD's intent before it reaches high fidelity, so structural rework doesn't happen after visual polish is already invested.

## Anti-Patterns

- **Jumping straight to high fidelity.** Skipping cheaper exploration, then resisting changes because of the sunk cost in visual polish.
- **Prototyping only the happy path.** Leaving error/edge states to be improvised during implementation.
- **Untested novel interactions.** Shipping a new interaction pattern to handoff without ever validating it with a real user.
