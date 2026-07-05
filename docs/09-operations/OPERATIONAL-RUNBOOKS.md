---
id: DOC-OPS-010
title: Operational Runbooks
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, runbooks, standard]
dependencies: [DOC-OPS-009]
related: [DOC-ENG-010, DOC-OPS-006]
---

# Operational Runbooks

Defines how runbooks get created for recurring support, operational, manual, exception, and recovery processes — the step-by-step "do this" documents, distinct from the knowledge base's explanatory articles.

## Runbooks vs. Knowledge Base

A [knowledge base](SUPPORT-KNOWLEDGE-BASE.md) article explains *what* something is or *why* it behaves a certain way. A runbook is a procedure: *do these steps, in this order, to accomplish this specific operational task.* If a document's real content is a numbered sequence of actions, it's a runbook, even if it currently lives in the knowledge base.

## When a Runbook Is Needed

- A manual process is performed more than once (e.g. manually correcting a known data state, provisioning something not yet automated).
- An exception path exists outside the normal flow (e.g. what to do when a customer's account is in a specific broken state).
- A recovery procedure exists for a known failure mode (e.g. steps to take when a specific dependency is down).

A process performed exactly once, unlikely to recur, does not need a runbook — write a ticket note instead.

## Required Structure

1. **Trigger** — when this runbook applies; how to recognize the situation.
2. **Prerequisites** — access, information, or state needed before starting.
3. **Steps** — numbered, specific, in order. Each step states the expected result, so a deviation is noticeable immediately rather than discovered at the end.
4. **Verification** — how to confirm the procedure actually worked.
5. **Rollback / escalation** — what to do if a step fails or the outcome isn't as expected.
6. **Owner** — who maintains this runbook and who's expected to be able to run it.

## Ownership

The person or team that performs the procedure owns keeping the runbook accurate — if you run it and a step is wrong, fixing the runbook is part of running it, not a separate task for later.

## Review

Runbooks for anything touching money, customer data, or production systems are reviewed by someone other than the author before first use — the same independence principle as [code review](../03-engineering/BRANCHING-AND-CODE-REVIEW.md), applied to operational procedures. Lower-risk runbooks (e.g. a purely informational lookup) don't need this bar.

## Testing Runbooks

A recovery runbook that's never been run is unverified — where feasible, run it once in a non-production or low-risk context before relying on it during an actual incident, the same principle [RELEASE-AND-DEPLOYMENT.md](../03-engineering/RELEASE-AND-DEPLOYMENT.md) applies to rollback plans.

## AI Agents and Runbooks

AI agents may draft a runbook from an observed repeated procedure, and may execute a runbook's steps where the runbook explicitly authorizes automated execution. An AI agent does not skip a runbook's verification or rollback step to move faster — those steps exist because the procedure has already been shown to need them.

## Anti-Patterns

- **Tribal-knowledge runbooks.** The procedure exists only in one person's head; if they're unavailable, nobody can run it.
- **Stale runbooks.** Steps reference a tool, account, or system that no longer exists, discovered mid-incident instead of before.
- **Steps without expected results.** A runbook that just lists actions gives no way to notice something's gone wrong until the very end.
