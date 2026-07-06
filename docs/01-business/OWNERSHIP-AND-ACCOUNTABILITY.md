---
id: DOC-BIZ-009
title: Ownership and Accountability
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: business
tags: [business, ownership, accountability, standard]
dependencies: [DOC-BIZ-008]
related: [DOC-BIZ-010, DOC-ENG-002]
---

# Ownership and Accountability

Defines ownership models, role clarity, accountability expectations, decision owners, execution owners, and escalation paths across the company. Every domain in Startup OS already states its own ownership boundary (see each domain's README) — this document is the company-level pattern those boundaries follow.

## Ownership Model

Every meaningful area of the business has exactly one accountable owner at any time — the same "no ownerless work" principle [SUPPORT-INTAKE-AND-TRIAGE.md](../09-operations/SUPPORT-INTAKE-AND-TRIAGE.md) applies to tickets, applied company-wide. Shared responsibility does not mean no one is accountable — it means each function's accountability is explicit, as every domain's own ownership boundary already states.

## Role Clarity

A role's authority and boundaries are stated, not assumed — what a role decides alone, what it needs to escalate, and what's explicitly outside its authority. Ambiguous role boundaries are where cross-domain conflict and dropped work both originate.

## Decision Owners vs. Execution Owners

The person who decides something is not always the person who executes it — both are named explicitly for any material initiative, so execution doesn't stall waiting on an unclear decision-maker, and a decision-maker doesn't get blamed for an execution failure that wasn't theirs.

## Accountability Expectations

An owner is accountable for the outcome in their area, not just for effort — the same standard [ENGINEERING-OPERATING-SYSTEM.md](../03-engineering/ENGINEERING-OPERATING-SYSTEM.md) sets for engineering responsibilities, applied company-wide.

## Escalation Paths

When an owner can't resolve something within their authority, there's a known path upward — the same principle every domain's escalation document already implements ([ESCALATION-MANAGEMENT.md](../09-operations/ESCALATION-MANAGEMENT.md)). This document is the company-level statement that every domain should have one, not a duplicate list of all of them.

## Cross-Domain Ownership Conflicts

When two domains both believe they own something (or neither does), it escalates to leadership to assign explicitly — left unresolved, ownership gaps are where things fail silently, discovered only when something goes wrong and no one was watching.

## Required Artifacts

A role/ownership map for material areas of the business; an escalation path per domain (many already exist per-domain — this is where gaps are checked for).

## Ownership

Leadership owns assigning and resolving ownership at the company level; each domain owner owns clarity within their own area, per that domain's own README.

## Anti-Patterns

- **Ownerless areas.** A function or risk nobody has explicitly been assigned to own.
- **Ambiguous authority.** A role that doesn't know what it can decide alone versus what needs escalation.
- **Accountability without authority.** Someone held responsible for an outcome they don't actually have the authority to control.
