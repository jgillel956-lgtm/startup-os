---
id: DOC-AI-008
title: ChatGPT Planning Playbook
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: ai
tags: [ai, playbook, chatgpt, planning]
dependencies: [DOC-AI-003, DOC-AI-007]
related: [DOC-AI-005, DOC-AI-009, DOC-AI-012, DOC-FND-011]
---

# ChatGPT Planning Playbook

Practical guidance for using ChatGPT (or any planning-oriented AI assistant filling the same role — see [AGENT-ROLES.md](AGENT-ROLES.md)) to plan, design tasks, explain decisions, prepare PR descriptions, and guide a human through Startup OS work. This is the "how to actually use it" companion to [AGENT-ROLES.md](AGENT-ROLES.md)'s role definition — read that first.

## What This Role Is For

Planning, structuring, and explaining — never touching repository files directly. A planning assistant's output only becomes real once it's committed to Git as documentation or a task file; a plan that only exists in a chat window has no authority over what a coding agent does next.

## Planning Work

Start from the actual current state, not a remembered summary of it: ask the assistant to work from the specific documents relevant to the decision (a capability, a PRD, the readiness review, a metrics doc) rather than general knowledge about "what startups usually do." Startup OS's own standards ([STARTUP-OS-MAP.md](../00-foundation/STARTUP-OS-MAP.md), the relevant domain's operating-system doc) are the source of truth for what's already decided — a plan that contradicts an active standard needs to either respect it or propose changing the standard explicitly, never quietly ignore it.

## Creating `tasks/NEXT.md`

This is the highest-leverage thing a planning assistant does for repository work: turn a plan into a task file the executing agent can run unambiguously. See [AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md](AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md) for the structure and worked examples; the short version is that every task file needs a goal, a branch, exact files to inspect and change, numbered requirements, non-goals, validation steps, the exact commit message, and summary expectations — per [AI-TASK-HANDOFF-TEMPLATE.md](../10-templates/AI-TASK-HANDOFF-TEMPLATE.md).

## Explanation and User Guidance

When explaining a document, decision, or piece of the repository back to a human, cite the actual document (by path or ID) rather than paraphrasing from memory — the human should be able to go verify the explanation against the repository itself. An explanation that can't be traced to a real document is a guess dressed as an answer.

## Preparing PR Descriptions

A planning assistant can draft a PR description from the task file and the actual diff, but the description must describe what was actually done, not what the task file asked for — if the executing agent deviated (flagged a conflict, made an assumption), the PR description says so, following the [pull request template](../../.github/PULL_REQUEST_TEMPLATE/pull_request_template.md). A PR description that just restates the task file is describing intent, not outcome.

## Review Preparation

Before a human reviews AI-generated work, a planning assistant can summarize what changed and flag anything that looks like it deviates from the governing spec — but this is a first pass, not the review itself. See [AI-REVIEW-AND-VALIDATION-PLAYBOOK.md](AI-REVIEW-AND-VALIDATION-PLAYBOOK.md) for what an actual review pass checks, and [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md)'s "never self-review" — a planning assistant that helped design a task should not be the only check on whether the execution of that task was correct.

## What This Role Does Not Do

Per [AGENT-ROLES.md](AGENT-ROLES.md): does not write or edit repository files directly, does not implement code, does not approve or merge anything, and does not hold authoritative context — only what's committed to Git is authoritative. If a planning session produces something worth keeping, it isn't real until it's in the repository.

## Handling Uncertainty and Standards Conflicts

See [AI-USAGE-PLAYBOOKS.md](AI-USAGE-PLAYBOOKS.md)'s "Common Threads" — the same rule applies here: a material gap in what's being planned gets flagged to the human, not filled with a plausible-sounding assumption presented as fact.

## Related Docs

[AGENT-ROLES.md](AGENT-ROLES.md) · [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md) · [AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md](AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md) · [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)
