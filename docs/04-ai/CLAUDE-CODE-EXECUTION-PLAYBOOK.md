---
id: DOC-AI-009
title: Claude Code Execution Playbook
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: ai
tags: [ai, playbook, claude-code, execution]
dependencies: [DOC-AI-003, DOC-AI-007]
related: [DOC-FND-011, DOC-AI-011, DOC-AI-006]
---

# Claude Code Execution Playbook

Practical guidance for using Claude Code (or any repository-executing coding agent filling the same role — see [AGENT-ROLES.md](AGENT-ROLES.md)) to read a task file, make repository changes, validate, commit, and summarize. This is the "how to actually run this" companion to [AGENT-ROLES.md](AGENT-ROLES.md)'s role definition and [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)'s standard workflow — read both first.

## What This Role Is For

Primary implementation: building exactly what committed documentation specifies, inside the actual repository, from the actual current state — never from a remembered summary of it or an assumption about what "probably" already exists.

## Reading the Task File

`tasks/NEXT.md` is read in full before any file is touched — goal, branch, files to inspect, files to create or update, requirements, non-goals, validation, commit message, and summary expectations, per [AI-TASK-HANDOFF-TEMPLATE.md](../10-templates/AI-TASK-HANDOFF-TEMPLATE.md). If the file is still the unfilled placeholder template (bracketed `<...>` text throughout), there is no real task yet — say so and stop rather than inventing one from the placeholders.

## Before Touching Anything: Confirm State

1. Check `git status` and `git branch --show-current` against what the task file names. Wrong branch, uncommitted work from a prior session, or a branch cut from a stale point are the most common real failures in this workflow — see [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)'s troubleshooting table before assuming anything is broken.
2. Read every file the task lists under "Files to inspect first" — state lives in the repository, not in the task file's description of it.
3. Check the relevant standards (ID, folder, metadata) the task's requested changes must comply with, per [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md).

## Making the Changes

- Follow the task file's exact paths and IDs where they're valid; where a requested ID or folder conflicts with an active standard, the standard wins and the deviation is flagged in the final summary — never silently resolved either direction.
- Update `dependencies` and `related` front matter on every document touched, and bump `updated`/`version` per [METADATA-STANDARD.md](../00-foundation/METADATA-STANDARD.md) and [VERSIONING-STANDARD.md](../00-foundation/VERSIONING-STANDARD.md).
- Cross-link rather than duplicate — see [CROSS-LINKING-STANDARD.md](../00-foundation/CROSS-LINKING-STANDARD.md), including its rule against guessed anchor links.
- Keep everything company-neutral unless the task file explicitly says the target repository is a specific company's implementation.

## Validating

Run `npm run validate` (or the equivalent in the target repository) and report the actual output — per [DOCUMENTATION-VALIDATION-WORKFLOW.md](../00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md), reporting "validation passed" without having run it is exactly the unverified claim [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) prohibits. For code changes specifically, run through [AI-CODE-REVIEW-CHECKLIST.md](AI-CODE-REVIEW-CHECKLIST.md) before considering the work done. Scan new and touched content for company-name leaks per the task's own neutrality requirement — don't assume a prior scan still covers new content.

## Committing

Use the exact commit message the task file specifies — this is not a suggestion to paraphrase. Archive the task file per the task's instructions (typically into `tasks/completed/`) and reset `tasks/NEXT.md` to the reusable template, per [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md).

## Summarizing

Report against the task file's actual "Summary expectations" section, not a generic template — typically: files added, files updated, doc IDs used, validation result, and any deviations or assumptions. A deviation buried in the middle of a long summary is as bad as an unreported one; state it plainly.

## What This Role Does Not Do

Per [AGENT-ROLES.md](AGENT-ROLES.md): does not invent requirements or fill specification gaps, does not make architectural decisions unilaterally (proposes ADRs for human approval instead), and does not start implementation without a governing spec. Per [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md): does not push, open, or merge a PR — that stays with the human.

## Handling Uncertainty and Standards Conflicts

Classify the gap per [AI-WORKFLOW.md](AI-WORKFLOW.md)'s "Handling Unclear Requirements": an immaterial detail gets the conventional choice, noted; a material one stops the work and goes back to the human as a specific question with the options seen. A task instruction that conflicts with an active standard is never silently resolved in the instruction's favor.

## Related Docs

[AGENT-ROLES.md](AGENT-ROLES.md) · [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) · [AI-REVIEW-AND-VALIDATION-PLAYBOOK.md](AI-REVIEW-AND-VALIDATION-PLAYBOOK.md) · [DOCUMENTATION-VALIDATION-WORKFLOW.md](../00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md)
