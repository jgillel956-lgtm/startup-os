---
id: DOC-DSG-012
title: Design Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, metrics, standard]
dependencies: [DOC-DSG-002]
related: [DOC-DSG-011, DOC-ENG-012, DOC-OPS-012]
---

# Design Metrics

Defines practical design metrics. Like [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) and [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md), these measure the system — design quality and process health — not individuals; using them to rank designers invites gaming, not improvement. No specific analytics platform is assumed.

## Task Success

Whether users can actually complete the task a design was meant to support, measured via usability testing or observed completion rates. This is the most direct measure of whether design is achieving its purpose — clarity and usability, per [README.md](README.md)'s ownership boundary.

## Usability Issues

Count and severity of usability issues found, by source ([Design QA](DESIGN-QA.md), support, direct research). A rising count in one flow specifically is a stronger signal than a rising total — it points to exactly where to look.

## Conversion / Friction Points

Where users drop off or repeatedly struggle in a flow (measured via whatever analytics the company already uses — not a specific tool this document names). A friction point is a prompt to investigate via [UX-RESEARCH.md](UX-RESEARCH.md), not a number to react to blindly.

## Accessibility Issues

Count of accessibility gaps found, by severity (blocks use entirely vs. degrades use) and by source ([Design QA](DESIGN-QA.md) vs. customer-reported). A customer-reported accessibility issue that Design QA should have caught is a process signal, not just a one-off fix.

## Design Debt

Tracked the same way as [technical debt](../03-engineering/TECHNICAL-DEBT.md): known gaps between current implementation and the intended design or design-system standard, each with a stated cost of leaving it. Inconsistent component usage, drifted patterns, and unresolved usability findings all count.

## Design Review Cycle Time

Time from a design being ready for review to being approved for handoff. A rising cycle time usually means unclear review criteria or reviewer bottleneck — the design-domain counterpart to engineering's [review time](../03-engineering/ENGINEERING-METRICS.md#review-time).

## Adoption of Reusable Components

Proportion of new UI built from existing [design system](DESIGN-SYSTEM.md) components versus one-off patterns. Falling adoption signals either a design system that's not meeting real needs (missing components) or a discipline lapse (not checking before building new) — worth distinguishing between the two before reacting.

## Using These Metrics

- Review periodically, not just when something feels wrong — the same discipline as engineering and operations metrics.
- React to trends across periods, not single data points.
- Design debt and usability-issue trends feed [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) the same way engineering debt does — a flow with falling task success and rising usability issues is a strong improvement candidate regardless of what else is competing for attention.

## Right-Sizing for Team Size

At very small scale, most of this is observed informally ("users keep getting stuck on X" is a friction point, noted without a dashboard). Formalize measurement as the product and team grow — the metrics don't change, only the rigor of tracking them.
