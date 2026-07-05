---
id: DOC-DSG-009
title: Design Handoff
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, handoff, standard]
dependencies: [DOC-DSG-005, DOC-DSG-008]
related: [DOC-ENG-005, DOC-DSG-010]
---

# Design Handoff

Defines how approved designs are handed to engineering: complete, specified, and reviewed — the design-domain equivalent of an active PRD (see [PRD-STANDARD.md](../02-product/PRD-STANDARD.md)). Engineering should not have to guess a design intent any more than it should guess a product requirement.

## When Handoff Happens

After the design is reviewed (see [DESIGN-OPERATING-SYSTEM.md](DESIGN-OPERATING-SYSTEM.md)'s review cadence) and before implementation starts on the UI it covers — ideally alongside [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md), since technical constraints found there sometimes send a design back for revision.

## Required Contents

1. **Final mockups/prototypes** at implementation fidelity (see [WIREFRAMES-AND-PROTOTYPES.md](WIREFRAMES-AND-PROTOTYPES.md)).
2. **All required states** — default, loading, empty, error, success, permission-denied — not just the primary view.
3. **Edge cases** — what the design intends for boundary conditions (long text, many items, zero items) called out explicitly.
4. **Annotations** — spacing, behavior notes, and anything not self-evident from the visual alone.
5. **Content** — final copy per [CONTENT-AND-MICROCOPY.md](CONTENT-AND-MICROCOPY.md), not placeholder text.
6. **Assets** — icons, images, or other resources engineering needs, in usable form.
7. **Design system references** — which existing components are used, and which (if any) are new additions to [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).
8. **Accessibility notes** — anything from [ACCESSIBILITY-AND-INCLUSION.md](ACCESSIBILITY-AND-INCLUSION.md)'s review that needs explicit implementation attention.

## Acceptance Expectations

Handoff is accepted by engineering when the package above is complete enough to implement without needing to guess a material detail. Engineering flags gaps back to design the same way it flags PRD gaps back to product ([AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) — "never invent requirements" applies to design gaps too, not just product ones).

## Review Gate

Before handoff, confirm: every required state is shown, content is final (not placeholder), accessibility notes are included, and the design matches what the PRD actually scoped — a design that's grown beyond the PRD's stated scope goes back to product before, not after, handoff.

## Ownership

Design produces and confirms completeness; engineering confirms it's sufficient to build from and raises gaps immediately rather than filling them during implementation.

## Anti-Patterns

- **Partial handoff.** Handing off the happy-path screen and leaving error/empty states to be improvised during build.
- **Handoff as a one-way drop.** Delivering a file link with no annotation, leaving engineering to reverse-engineer intent.
- **Silent scope growth.** Design adding polish or flows beyond the PRD's approved scope without looping product back in.
