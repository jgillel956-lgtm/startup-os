---
id: DOC-DSG-010
title: Design QA
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, qa, review, standard]
dependencies: [DOC-DSG-009]
related: [DOC-ENG-007, DOC-ENG-008, DOC-DSG-011]
---

# Design QA

Defines how implemented UI is reviewed against approved design after engineering has built it — visual accuracy, usability, accessibility, responsiveness, and edge cases. This is design's equivalent of [code review](../03-engineering/BRANCHING-AND-CODE-REVIEW.md): an independent check before the work is considered done.

## When Design QA Happens

Before a UI change is considered release-ready — ideally as part of the same review gate as [TESTING-AND-QUALITY.md](../03-engineering/TESTING-AND-QUALITY.md), not as a separate, optional afterthought that gets skipped under time pressure.

## What Gets Checked

1. **Visual accuracy** — does the implementation match the [handed-off design](DESIGN-HANDOFF.md): spacing, type, color, layout.
2. **Usability** — does it behave the way the design intended, not just look the way it intended (e.g. interaction timing, feedback on action).
3. **Accessibility** — keyboard operability, contrast, screen-reader labeling, per [ACCESSIBILITY-AND-INCLUSION.md](ACCESSIBILITY-AND-INCLUSION.md) — verified in the built product, not assumed from the design file.
4. **Responsiveness** — behavior across the screen sizes/contexts the design specified.
5. **Edge cases** — the states and boundary conditions the handoff called out (long text, empty lists, error states) actually implemented, not just the primary view.

## Discrepancy Handling

- A visual discrepancy that's clearly an implementation miss goes back to engineering as a fix.
- A discrepancy that reveals the design didn't account for a real constraint (e.g. a state the design never specified) goes back to design — this is a handoff gap, not an engineering bug, and it feeds [DESIGN-HANDOFF.md](DESIGN-HANDOFF.md) improvement.
- A discrepancy discovered to be a deliberate, reasonable engineering adjustment (e.g. a platform constraint) is documented and either accepted or escalated — not silently overridden in either direction.

## Required Artifacts

A design QA record: what was checked, what passed, what didn't, and where each gap was routed (engineering fix vs. design gap). This feeds [DESIGN-METRICS.md](DESIGN-METRICS.md)'s usability-issue tracking.

## Ownership

Design (or a design-aware reviewer) performs design QA; engineering fixes implementation discrepancies; design updates the handoff or design system when the gap traces back to an incomplete spec.

## Anti-Patterns

- **Pixel-only QA.** Checking visual accuracy while ignoring whether the interaction actually works well.
- **Skipping under deadline pressure.** Treating design QA as optional polish instead of a release gate, the same mistake [TESTING-AND-QUALITY.md](../03-engineering/TESTING-AND-QUALITY.md) warns against for functional testing.
- **QA without follow-through.** Finding gaps and never routing them anywhere — the check happened, but nothing changed.
