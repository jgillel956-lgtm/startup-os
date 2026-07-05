---
id: DOC-ENG-002
title: Engineering Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, operating-model, standard]
dependencies: [DOC-ENG-001]
related: [DOC-ENG-003, DOC-ENG-004, DOC-PRD-002, ADR-0005]
---

# Engineering Operating System

Defines how engineering operates as a system in a Startup OS company: principles, responsibilities, cadence, and the standards that hold it together.

## Principles

1. **Build against a spec, not a conversation.** Implementation starts from an active PRD and, where warranted, a technical design — not from a chat thread or a verbal description (ADR-0005).
2. **Small, reviewable, reversible.** Prefer changes that are easy to review and easy to roll back over large batches that are neither.
3. **Feasibility and risk are engineering calls.** Product sets intent; engineering sets the technical path and can say no to an approach — not to the goal — on feasibility or risk grounds.
4. **Operational health is part of the job, not an afterthought.** Shipping a feature and shipping a feature that stays healthy in production are the same deliverable.
5. **Lightweight until it needs to not be.** An early-stage team doesn't need every gate in this domain fully staffed — it needs to know which ones it's consciously skipping (see "Scaling the System" below).

## Responsibilities

| Role | Responsible for |
|------|-------------------|
| Engineering owner (founder, tech lead, or delegate) | Technical direction, architecture decisions, risk sign-off, unblocking |
| Implementer (human or AI agent) | Building to spec, raising gaps instead of inventing, testing their own work |
| Reviewer | Verifying correctness, standards compliance, and risk before merge |
| Operations (once it exists as its own function) | Running what's shipped, first response to incidents |

One person can hold multiple roles in an early-stage team; the responsibilities don't disappear because the headcount is one.

## Operating Cadence

Startup OS does not mandate a specific cadence (sprints, kanban, etc. — see [SPRINT-TEMPLATE.md](../10-templates/SPRINT-TEMPLATE.md) if using sprints). What is mandated regardless of cadence:

- Work entering "In Development" has a spec it's being built against (see [ENGINEERING-LIFECYCLE.md](ENGINEERING-LIFECYCLE.md)).
- Work doesn't sit "in review" indefinitely — a stuck PR is a blocker to surface, not quietly absorb.
- Production health is checked on a regular rhythm, not only when something breaks (see [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md)).
- Technical debt is reviewed periodically, not only when it becomes an emergency (see [TECHNICAL-DEBT.md](TECHNICAL-DEBT.md)).

## Standards This System Rests On

| Concern | Standard |
|---------|----------|
| What gets built | [PRD-STANDARD.md](../02-product/PRD-STANDARD.md) |
| How the technical approach is decided | [ARCHITECTURE-DECISION-RECORDS.md](ARCHITECTURE-DECISION-RECORDS.md), [TECHNICAL-DESIGN.md](TECHNICAL-DESIGN.md) |
| Where and how code lives | [REPOSITORY-STANDARDS.md](REPOSITORY-STANDARDS.md) |
| How changes get merged | [BRANCHING-AND-CODE-REVIEW.md](BRANCHING-AND-CODE-REVIEW.md) |
| How correctness is verified | [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md) |
| How changes reach production | [RELEASE-AND-DEPLOYMENT.md](RELEASE-AND-DEPLOYMENT.md) |
| How production health is known | [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md) |
| How debt is managed | [TECHNICAL-DEBT.md](TECHNICAL-DEBT.md) |
| How the system is measured | [ENGINEERING-METRICS.md](ENGINEERING-METRICS.md) |

## Inputs and Outputs of the Engineering System

- **Inputs:** an active PRD with acceptance criteria; capability documentation where relevant (see [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)); prior ADRs that constrain the approach.
- **Outputs:** working software that satisfies the PRD's acceptance criteria; the technical design and ADRs that document how it works and why; test evidence; a release record; updated metrics and, when relevant, new technical debt entries.

## Scaling the System

At one engineer: technical design may be a paragraph, review may be a self-check against the checklist, and metrics may be tracked informally. What must not shrink to zero, at any size: a written spec before building, some form of review before merge (even self-review against [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md)), and a rollback plan before release. As the team grows, formalize — don't invent new requirements, staff the ones already here.
