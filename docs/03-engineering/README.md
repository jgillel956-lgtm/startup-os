---
id: DOC-ENG-001
title: Engineering — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-06
version: 1.1.0
domain: engineering
tags: [engineering, overview, operating-system]
dependencies: []
related: [DOC-ENG-002, DOC-ENG-003, DOC-PRD-002, DOC-PRD-003, DOC-OPS-001, DOC-SEC-001]
---

# Engineering — Overview

The engineering domain defines the **Engineering Operating System**: how a Startup OS company turns approved product work into reliable, maintainable software — and keeps it reliable after it ships.

## Where This Sits

```
Business (docs/01-business/)
  → Product (docs/02-product/)        "what to build, and why"
      → Engineering (docs/03-engineering/)   "how it gets built, and how it stays healthy"
          → Operations (docs/09-operations/) / Security & Compliance (docs/14-security-compliance/)
```

Engineering work starts once product intent is clear — a capability has reached Specification, ideally with an active PRD (see [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)). From there, engineering owns everything about *how* the work gets built: technical design, implementation, review, testing, release, and the operational health of what's running in production.

## Documents

| Document | Defines |
|----------|---------|
| [ENGINEERING-OPERATING-SYSTEM.md](ENGINEERING-OPERATING-SYSTEM.md) | Principles, responsibilities, cadence, standards |
| [ENGINEERING-LIFECYCLE.md](ENGINEERING-LIFECYCLE.md) | Stages from product-ready work to post-release learning |
| [ARCHITECTURE-DECISION-RECORDS.md](ARCHITECTURE-DECISION-RECORDS.md) | How architecture decisions get proposed, reviewed, and revisited |
| [TECHNICAL-DESIGN.md](TECHNICAL-DESIGN.md) | Required structure for technical design docs |
| [REPOSITORY-STANDARDS.md](REPOSITORY-STANDARDS.md) | Repo structure, naming, config, secrets, local setup |
| [BRANCHING-AND-CODE-REVIEW.md](BRANCHING-AND-CODE-REVIEW.md) | Branch strategy, PR expectations, review and approval standards |
| [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md) | Testing expectations, quality gates, regression prevention |
| [RELEASE-AND-DEPLOYMENT.md](RELEASE-AND-DEPLOYMENT.md) | Release planning, validation, deployment, rollback |
| [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md) | Logging, monitoring, alerting, incident response, postmortems |
| [TECHNICAL-DEBT.md](TECHNICAL-DEBT.md) | How debt is identified, prioritized, and paid down or accepted |
| [ENGINEERING-METRICS.md](ENGINEERING-METRICS.md) | Cycle time, deployment frequency, defect rate, reliability |

## How Engineering Connects to Everything Else

- **Product** (`docs/02-product/`) — hands engineering an active PRD with acceptance criteria; engineering does not accept an underspecified request as a starting point (see [PRD-STANDARD.md](../02-product/PRD-STANDARD.md)).
- **AI** (`docs/04-ai/`) — AI agents implement from engineering specs the same way they implement from product specs; [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) and [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) apply throughout this domain.
- **Foundation** (`docs/00-foundation/`) — [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md) and [GITHUB-WORKFLOW.md](../00-foundation/GITHUB-WORKFLOW.md) define the general branching/PR mechanics; this domain's [BRANCHING-AND-CODE-REVIEW.md](BRANCHING-AND-CODE-REVIEW.md) specializes them for code changes.
- **Operations** (`docs/09-operations/`) — what engineering releases, operations supports; [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md) is the handoff point.
- **Security & Compliance** (`docs/14-security-compliance/`) — security principles and requirements constrain technical design and release decisions; this domain does not independently decide what's secure enough to ship.

## Product Requirements → Design → Implementation → Testing → Release → Operations → Improvement

This is the spine of the [Engineering Lifecycle](ENGINEERING-LIFECYCLE.md):

1. An active PRD exists (product).
2. Technical design is written and reviewed (engineering owns the how).
3. Implementation happens against the design and the PRD's acceptance criteria.
4. Testing verifies the acceptance criteria, not just that code runs.
5. Release is planned, validated, and executed with a rollback path.
6. Operations monitors what's live; incidents feed back into the system.
7. What's learned becomes technical debt entries, metric trends, or new product input — closing the loop back to product.

## Engineering's Authority

Product decides *what* and *why*. Engineering decides *how*, and has final authority over:

- **Technical feasibility** — whether and how something can be built as specified.
- **Implementation approach** — the specific technical path chosen, within product's stated constraints.
- **System health** — code quality, architecture integrity, technical debt.
- **Operational risk** — what's safe to ship, and when.

Product cannot override an engineering feasibility or risk call by fiat — a disagreement here is a discussion, or an ADR, not a directive (see [ARCHITECTURE-DECISION-RECORDS.md](ARCHITECTURE-DECISION-RECORDS.md)).
