---
id: DOC-TPL-012
title: AI Task Handoff Template
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [template, ai, task-handoff]
dependencies: [DOC-TPL-002]
related: [DOC-FND-011, DOC-FND-012]
---

# AI Task Handoff Template

## Purpose

The canonical, versioned copy of the task-handoff structure [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) defines. [`tasks/NEXT.md`](../../tasks/NEXT.md) is reset to this template's content after each task completes — this file is the source of truth for that reset, not a separate duplicate copy maintained independently.

## When to Use

Whenever preparing a new task for a coding agent to execute, per [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)'s standard workflow. Also used to reset `tasks/NEXT.md` after a task completes.

## Owner

Whoever is preparing the task (human or planning assistant), per [tasks/README.md](../../tasks/README.md).

## Inputs

The goal of the task; which files it touches; the exact commit message to use.

## Template Section

```markdown
# Task Title

<Short, specific name for this task.>

## Goal

<One or two sentences: what should be true when this task is done, and why it matters.>

## Branch

<Branch name, following GIT-WORKFLOW.md's naming convention. State whether fresh from main or continuing an existing branch.>

## Files to Inspect First

- `path/to/file.md`

## Files to Create or Update

- `path/to/new-file.md` — <what it contains>
- `path/to/existing-file.md` — <what changes>

## Requirements

1. ...

## Non-Goals

<What this task explicitly does not include.>

## Validation

<How the agent should verify the work.>

## Commit Message

<The exact commit message and description, verbatim.>

## Summary Expectations

<What the agent's final report should cover.>
```

## Review Checklist

- [ ] Goal is concrete enough to execute without guessing.
- [ ] Files to inspect/create/update use exact paths, not descriptions.
- [ ] Commit message is the exact literal text to use.
- [ ] No secrets, credentials, or work-specific private information included, per [PROMPTING-STANDARDS.md](../04-ai/PROMPTING-STANDARDS.md).
- [ ] No placeholder text remains once filled in for a real task.

## Related Docs

[AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) · [tasks/README.md](../../tasks/README.md) · [PROMPTING-STANDARDS.md](../04-ai/PROMPTING-STANDARDS.md)
