---
id: DOC-DSG-008
title: Accessibility and Inclusion
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, accessibility, inclusion, standard]
dependencies: [DOC-DSG-002]
related: [DOC-DSG-010, DOC-ENG-008]
---

# Accessibility and Inclusion

Defines practical accessibility expectations, inclusive design principles, and the review gate that catches gaps before release. Accessibility is a requirement, not an enhancement — it belongs in the same acceptance criteria as any other functional requirement ([ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md)).

## Inclusive Design Principles

- Design for the actual range of users, including those using assistive technology, those with limited bandwidth or older devices, and those unfamiliar with the product's conventions — not just the fastest, most capable path.
- Don't design a feature that only works for one input method (mouse-only, touch-only) unless the context genuinely rules out others.

## Keyboard Use

Every interactive element is reachable and operable by keyboard alone: tab order follows visual/logical order, focus is visible, and no interaction requires a mouse-only gesture (hover-only reveal, drag-only action) without a keyboard-accessible alternative.

## Contrast

Text and meaningful UI elements meet a minimum contrast ratio against their background — checked at design time with a contrast tool, not assumed from how it looks on one screen. Color is never the *only* signal for meaning (e.g. error state) — pair it with text, icon, or pattern.

## Screen Reader Considerations

- Every meaningful element has an accessible name — an icon-only button needs a label a screen reader can announce, not just a visual icon.
- Dynamic content changes (errors appearing, content loading) are announced, not just visually inserted.
- Reading order matches visual/logical order — a screen reader user should experience the same sequence a sighted user does.

## Accessibility Review Gate

Before handoff ([DESIGN-HANDOFF.md](DESIGN-HANDOFF.md)), a design is checked against: keyboard operability, contrast, and screen-reader-relevant labeling for its key interactions. This is not a full audit of every pixel — it's confirming the design doesn't hand engineering an inaccessible spec to build from.

After implementation, [DESIGN-QA.md](DESIGN-QA.md) verifies the built version actually meets what the design intended — a design can be accessible and an implementation can still fail to realize it.

## Ownership

Design is responsible for designing accessible patterns; engineering is responsible for implementing them faithfully (see [TESTING-AND-QUALITY.md](../03-engineering/TESTING-AND-QUALITY.md) for accessibility as a testable requirement); design QA catches the gap between the two.

## Anti-Patterns

- **Accessibility as a final pass.** Treating it as cleanup after design is "done" instead of a constraint designed in from the start.
- **Compliance theater.** Meeting a checklist's letter (e.g. contrast ratio) while ignoring its intent (e.g. still color-only for critical meaning).
- **One accessible path, buried.** Providing an accessible alternative that's harder to find or use than the primary path.
