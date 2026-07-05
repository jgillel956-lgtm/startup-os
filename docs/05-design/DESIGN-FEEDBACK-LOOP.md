---
id: DOC-DSG-011
title: Design Feedback Loop
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, feedback, standard]
dependencies: [DOC-DSG-010]
related: [DOC-OPS-011, DOC-PRD-008, DOC-DSG-012]
---

# Design Feedback Loop

Defines how usability issues, support feedback, analytics, customer complaints, and product learnings flow back into design improvements. Mirrors [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md) — that document routes support signal to product/engineering; this one routes the subset that's specifically a usability/experience signal to design.

## What Flows Back

| Signal | Source | Destination |
|--------|--------|--------------|
| Usability issue found post-release | [Design QA](DESIGN-QA.md), support tickets | Design, for the affected flow |
| Repeated "how do I" support question | [Support knowledge base](../09-operations/SUPPORT-KNOWLEDGE-BASE.md) | Design, if the repetition indicates unclear UX rather than just missing documentation |
| Analytics friction point (drop-off, repeated errors) | Product/usage analytics | Design, for root-cause investigation via [UX-RESEARCH.md](UX-RESEARCH.md) |
| Accessibility gap reported | Support, direct customer report | Design, immediately — accessibility gaps are treated with the urgency of a functional defect |
| Customer complaint about confusion or frustration | Support | Design, as a research prompt, not just a one-off fix |

## How Signal Gets Captured

- Design QA findings ([DESIGN-QA.md](DESIGN-QA.md)) are logged, not just fixed and forgotten — a recurring category of QA finding is itself a signal about where the design/handoff process is weak.
- Support-originated usability signal arrives through the same categorization [SUPPORT-INTAKE-AND-TRIAGE.md](../09-operations/SUPPORT-INTAKE-AND-TRIAGE.md) already requires — design doesn't need a separate intake channel, it needs to be a recognized destination for the "usability" category.

## Converting Signal into Design Work

- A single report is a data point; a repeated pattern (three or more independent instances) is a theme worth acting on, the same threshold [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md) uses.
- A confirmed usability theme becomes research ([UX-RESEARCH.md](UX-RESEARCH.md)) or directly informs a redesign, entering the product lifecycle at [Improvement](../02-product/PRODUCT-LIFECYCLE.md#improvement) like any other post-release finding.
- Design debt (see [DESIGN-METRICS.md](DESIGN-METRICS.md)) is prioritized alongside other work via [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) — usability issues don't get a free pass to jump the queue, but they also don't get silently deprioritized forever.

## Closing the Loop

When a design change ships in response to feedback, whoever surfaced it (support, a specific reviewer) is told — the same closing-the-loop discipline [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md) requires. A support team that keeps reporting an issue design already fixed is a sign the loop didn't actually close.

## Ownership

Design owns synthesizing usability signal into design decisions; support owns surfacing what customers experience; product owns prioritizing the resulting work against everything else competing for attention.

## Anti-Patterns

- **Fixing without recording.** Patching a usability issue found in QA without logging it, so the pattern behind it never surfaces.
- **Feedback that dies in a backlog.** Usability issues logged and never revisited because nothing forces periodic review.
- **Treating every complaint as a redesign mandate.** Reacting to the loudest single voice instead of confirming a real pattern first.
