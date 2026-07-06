---
id: DOC-FND-023
title: Validation Failure Handling
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, validation, standard]
dependencies: [DOC-FND-021]
related: [DOC-FND-020, DOC-KNW-010]
---

# Validation Failure Handling

Defines what to do when validation fails — when to fix it directly, when to escalate, when to flag an assumption instead of guessing, and when to stop entirely.

## The Default: Fix It

Most validation failures are mechanical and have one clear fix — a missing front matter field, a broken link from a typo, an invalid status value. Fix it directly and re-run `npm run validate` to confirm, per [DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md). This covers the large majority of failures.

## When to Flag an Assumption Instead of Guessing

A failure sometimes reveals a genuine ambiguity — a broken link where it's unclear whether the target moved, was renamed, or was never created; a status that could plausibly be `deprecated` or `archived` depending on intent nobody stated. In this case, state the ambiguity and the assumption made to resolve it, rather than silently picking one option and moving on — per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), "never invent," extended here to never silently resolving an ambiguous failure.

## When to Escalate

Escalate to a human when:

- The fix would require changing an active standard (a `docs/00-foundation/` document, `CONSTITUTION.md`, or an accepted ADR) — per [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md)'s human-review requirement for these.
- The failure reveals a conflict between two active standards, rather than a single document being wrong.
- Fixing it would mean archiving or retiring something that's still referenced elsewhere, and it's unclear whether that's actually intended.

## When Repository Standards Conflict With a Task Instruction

If a task's literal instruction (a specific ID, folder, or prefix) conflicts with an active standard, the standard wins — this has been the consistent resolution across every deviation in this repository's history (Commits 0004A through 0021). Flag the deviation clearly in the resulting summary; do not silently follow the instruction over the standard, and do not silently follow the standard without saying so.

## When to Stop

Stop and ask before proceeding when:

- The failure can't be resolved without information only a human has (a real business decision, a fact not yet documented anywhere).
- Fixing it would mean deleting content rather than archiving it — per [Constitution Article VII](../../CONSTITUTION.md), nothing is deleted; if the fix seems to require deletion, that's a signal to stop and reconsider, not a signal to proceed carefully.
- The same failure keeps recurring across multiple files — a pattern worth surfacing as a systemic gap (see [DOCUMENTATION-QUALITY-STANDARD.md](DOCUMENTATION-QUALITY-STANDARD.md)) rather than fixed file-by-file without ever addressing the root cause.

## Recording What Happened

Whatever the resolution — fixed, flagged, escalated, or stopped — the outcome is stated in the commit message or PR description, not left implicit. A validation failure that was fixed silently, with no record, looks identical to one that was never checked in the first place.

## Guidance for AI Assistants

An AI agent encountering a validation failure follows this same hierarchy — fix the mechanical ones, flag genuine ambiguity rather than guessing, escalate what needs human judgment, and stop rather than proceeding past something that would require inventing a fact or a decision. Reporting "validation passed" after silently working around a failure, rather than actually resolving it, is the specific failure mode this document exists to prevent.

## Related Docs

[DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md) · [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) · [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)
