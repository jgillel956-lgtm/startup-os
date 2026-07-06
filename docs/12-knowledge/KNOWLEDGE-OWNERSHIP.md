---
id: DOC-KNW-006
title: Knowledge Ownership
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, ownership, standard]
dependencies: [DOC-KNW-002]
related: [DOC-BIZ-009, DOC-PAT-011]
---

# Knowledge Ownership

## Purpose

Defines who's accountable for a knowledge record staying accurate — the knowledge-specific instance of [OWNERSHIP-AND-ACCOUNTABILITY.md](../01-business/OWNERSHIP-AND-ACCOUNTABILITY.md)'s "no ownerless work" principle.

## When to Use

Every knowledge record, at capture time — ownership is assigned then, not left to be figured out later.

## Owner

Assigned to whoever captured the record by default; reassignable if a more appropriate domain owner exists (e.g. a market fact reassigned to whoever owns [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md)).

## Inputs

A newly captured record.

## Outputs

A record with a named accountable owner, visible to anyone retrieving it.

## Required Artifacts

An owner field on every record; a record with no stated owner is treated as needing one assigned before it's trusted.

## Review Points

- Does every record have a named owner, or are some effectively ownerless?
- When an owner leaves a role, does their knowledge get reassigned, or does it go stale unnoticed?
- Is the owner actually the right person to judge whether the record still holds, or just whoever happened to write it down?

## Examples

- A UX research finding owned by design, per [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md)'s ownership.
- A market assumption owned by whoever holds [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md).
- A security-relevant fact owned by the security function, per [SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](../14-security-compliance/SECURITY-COMPLIANCE-OPERATING-SYSTEM.md).

## Anti-Patterns

- **Ownerless records.** Knowledge nobody's specifically accountable for keeping accurate.
- **Orphaned on departure.** An owner leaves and their knowledge is never reassigned, discovered stale only when someone tries to rely on it.
- **Wrong-owner assignment.** A record owned by whoever wrote it down, even when a different domain owner is better positioned to judge its accuracy.

## Related Docs

[OWNERSHIP-AND-ACCOUNTABILITY.md](../01-business/OWNERSHIP-AND-ACCOUNTABILITY.md) · [KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md)
