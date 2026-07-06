---
id: DOC-PAT-012
title: AI-Assisted Workflow Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, ai, workflow]
dependencies: [DOC-PAT-002]
related: [DOC-AI-002, DOC-FND-011]
---

# AI-Assisted Workflow Patterns

## Purpose

Using an AI agent inside an existing operating pattern safely — where it adds speed, and where it must hand a decision to a human instead.

## When to Use

Any workflow where an AI agent drafts, executes, or reviews part of the work: implementation, content drafting, review support, task planning.

## Common Pattern

```
Human/planning step defines the goal and scope explicitly  →
AI agent executes within that scope, from documented sources, never invented ones  →
AI agent flags gaps instead of filling them  →
Independent check before anything ships (human, or a distinct AI agent — never self-review)  →
Human holds final authority on anything hard-to-reverse or externally visible
```

"Flags gaps instead of filling them" is the step that distinguishes a safe AI-assisted pattern from a risky one — an agent that encounters a missing requirement and invents a plausible one has silently converted a documentation gap into an unreviewed decision.

## Inputs

A documented goal, scope, and the standards/templates/patterns already governing the work.

## Outputs

Completed work within scope, a clear record of any gap flagged rather than filled, and an independent review before anything ships.

## Owner

The human or planning assistant who defines the task owns scope; the executing agent owns staying within it and flagging gaps; whoever holds review authority owns the independent check.

## Review Points

- Did the agent invent anything the documentation didn't already establish?
- Were gaps flagged, or silently filled with a plausible guess?
- Did an independent reviewer check the work, or did the same agent self-certify?

## Example Use Cases

- [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) — the full task-handoff loop.
- [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) — "never invent requirements."
- [AGENT-ROLES.md](../04-ai/AGENT-ROLES.md) — why an agent doesn't review its own work.
- [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) — the independent-check instance for code.

## Anti-Patterns

- **Silent invention.** An agent filling a documentation gap with a plausible guess instead of flagging it.
- **Self-review.** The same agent that produced the work also being its only check.
- **Scope creep by helpfulness.** An agent doing more than the defined task because it seemed useful, without the scope being explicitly widened first.

## Related Docs

[AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) · [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) · [PROMPTING-STANDARDS.md](../04-ai/PROMPTING-STANDARDS.md)
