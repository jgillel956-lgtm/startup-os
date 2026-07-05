---
id: DOC-PRD-004
title: Capability Model
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, capability, standard]
dependencies: [DOC-PRD-002, ADR-0007]
related: [DOC-PRD-001, DOC-PRD-003, DOC-PRD-005, TPL-CAP-001, TPL-CAP-002]
---

# Capability Model

Defines what a capability is in Startup OS, how it relates to other units of product and engineering work, and the folder structure a fully-documented capability follows. Per ADR-0007, the capability is the primary unit of product planning.

## Definition of a Capability

A **capability** is a durable, user- or business-meaningful thing the product can do — it outlives any single release. "Accept payments," "schedule appointments," "notify a customer of a status change" are capabilities. Capabilities are what a company's product *is*, described at the level a customer or the business would recognize.

## Product, Capability, Feature, Workflow, Screen, API, Database Object

| Unit | What it is | Lives in | Example |
|------|-----------|----------|---------|
| Product | The overall thing the company sells | `docs/01-business/`, `docs/02-product/` | "A disbursement platform" (generic example) |
| Capability | A durable thing the product does | `docs/02-product/` | "Accept payments" |
| PRD | A deliverable slice of a capability, scoped to one release | `docs/02-product/` | "Add support for a new payment method" |
| Feature | A user-visible piece of a PRD's scope | Described inside a PRD | "Save a payment method for reuse" |
| Workflow | A sequence of steps a user or system follows | `WORKFLOWS.md` in a capability folder | "Checkout flow" |
| Screen | A specific UI surface within a workflow | `UX.md` in a capability folder | "Payment method selection screen" |
| API | A technical interface implementing part of a capability | `docs/03-engineering/`, `API.md` | "POST /payment-methods" |
| Database object | A stored representation of capability data | `docs/03-engineering/`, `DATA-MODEL.md` | "payment_methods table" |

Capabilities are business-shaped; features, workflows, and screens are product-shaped; APIs and database objects are engineering-shaped. Each layer is documented at its own altitude — a capability document doesn't contain SQL, and a database spec doesn't restate the business problem.

## Capability Hierarchy

```
Capability
  └─ PRD (one or more, delivered over time)
       └─ User Story (one or more)
            └─ Acceptance Criteria
```

A capability may also decompose directly into features, workflows, screens, APIs, database objects, and AI behaviors — these are documented within the capability's own folder (below) rather than as separate top-level units.

## Capability Folder Structure

A capability that needs full documentation uses a folder, not a single file. Lightweight capabilities may start as a single file per [CAPABILITY-TEMPLATE.md](../10-templates/CAPABILITY-TEMPLATE.md) and grow into a folder when they need more than that file's sections. Recommended location: `docs/02-product/capabilities/<slug>/`.

| File | Purpose |
|------|---------|
| `README.md` | Capability overview — summary, scope, success criteria (the capability's front door) |
| `BUSINESS.md` | Business case: value, revenue/cost impact, strategic fit |
| `PROBLEM.md` | The problem being solved, with evidence |
| `SOLUTION.md` | The chosen solution direction and rejected alternatives |
| `USER-STORIES.md` | The stories that deliver this capability |
| `WORKFLOWS.md` | Step-by-step user/system workflows |
| `BUSINESS-RULES.md` | Rules the system must enforce, independent of any one screen or endpoint |
| `PERMISSIONS.md` | Who can do what — roles, authorization rules |
| `DATA-MODEL.md` | The data this capability owns or touches, at a conceptual level (detailed schema stays in `docs/03-engineering/`) |
| `API.md` | The API surface this capability needs, at a conceptual level (detailed spec stays in `docs/03-engineering/`) |
| `UX.md` | Flows, screens, states — or a link to design assets |
| `NOTIFICATIONS.md` | What gets communicated to whom, when, and how |
| `AI.md` | Any AI-driven behavior this capability includes, and what AI agents must/must not do when implementing it |
| `TEST-CASES.md` | Test scenarios, including edge and failure cases |
| `ACCEPTANCE-CRITERIA.md` | The consolidated, verifiable definition of "this capability works" |
| `FUTURE.md` | Ideas explicitly deferred — captured so they aren't lost or silently implemented early |

Full guidance on using this structure is in [CAPABILITY-FOLDER-TEMPLATE.md](../10-templates/CAPABILITY-FOLDER-TEMPLATE.md).

## Required Capability Documents

At minimum, a capability — file or folder — must have: a summary/problem statement, in/out of scope, and success criteria (`README.md` + `PROBLEM.md`, or the equivalent sections in the single-file template). Everything else is added as the capability's complexity requires it — an empty `NOTIFICATIONS.md` is not required for a capability that sends no notifications.

## Capability Maturity Model

| Level | Meaning |
|-------|---------|
| 0 — Named | An idea has a name and a one-line description; nothing else exists yet. |
| 1 — Defined | Problem and scope are documented; success criteria exist. |
| 2 — Specified | At least one active PRD with stories and acceptance criteria exists. |
| 3 — Delivered | At least one PRD has reached Production (see [PRODUCT-LIFECYCLE.md](PRODUCT-LIFECYCLE.md)). |
| 4 — Mature | Business rules, permissions, data model, API, and test cases are documented; the capability folder is substantially complete. |

A capability's maturity level is a description, not a gate — a capability can ship at Level 2 and mature to Level 4 afterward through the Improvement stage.

## Capability Dependencies

Capabilities declare dependencies on other capabilities via front matter `dependencies` (e.g. "Refunds" depends on "Accept payments"). A capability should not be marked Ready for Development while a hard dependency is below Level 2 (Specified).

## Capability Readiness Checklist

Before a capability's first PRD enters Ready for Development:

- [ ] Problem is documented with evidence, not assertion
- [ ] Scope (in/out) is explicit
- [ ] Success criteria are measurable
- [ ] Dependencies are identified and at least Specified
- [ ] At least one PRD exists with acceptance criteria
- [ ] Permissions/business rules are documented if the capability touches sensitive data or money

See [PRODUCT-REVIEW-CHECKLIST.md](PRODUCT-REVIEW-CHECKLIST.md) for the full pre-engineering review.

## How Capabilities Map to Engineering Work

Engineering never implements directly from a capability — it implements from the PRD, API spec, and database spec the capability produces. The capability is the durable "why"; the PRD is the "what, this time"; the API/database specs are the "how, technically." Changing the capability's documented scope requires updating the capability document itself, not just the code.
