<!--
This is the active AI task handoff file. Exactly one active task lives here at a time.
See tasks/README.md and docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md for the full workflow.
Canonical source for this template: docs/10-templates/AI-TASK-HANDOFF-TEMPLATE.md.
Replace every section below with the real task before handing this off to a coding agent.
-->

# Task Title

<Short, specific name for this task — e.g. "Add DATABASE-TEMPLATE.md revision" or "Commit 0012 — X Foundation">

## Goal

<One or two sentences: what should be true when this task is done, and why it matters.>

## Branch

<Branch name to work on, following GIT-WORKFLOW.md's naming convention — e.g. `feature/0012-x-foundation`. State whether it should be created fresh from `main` or continue an existing branch.>

## Files to Inspect First

<Exact paths the agent must read before creating or changing anything — standards it must follow, existing docs it must not contradict or duplicate.>

- `path/to/file.md`

## Files to Create or Update

<Exact paths, one line each on what changes. Be specific enough that the agent isn't guessing where something goes.>

- `path/to/new-file.md` — <what it contains>
- `path/to/existing-file.md` — <what changes>

## Requirements

<Numbered, testable instructions. Include front matter/metadata expectations, ID assignment rules, tone/scope constraints, and anything the repository's standards already require that's easy to forget.>

1. ...
2. ...

## Non-Goals

<What this task explicitly does not include — optional, but recommended for anything that could otherwise scope-creep.>

## Validation

<How the agent should verify the work — e.g. "Run `npm run validate` and fix any errors," "Check all document links resolve," "Confirm no existing file was removed or renamed.">

## Commit Message

<The exact commit message and description the agent should use, verbatim.>

```
<type>: <summary>

<description>
```

## Summary Expectations

<What the agent's final report to the human should cover — e.g. files added/updated, doc IDs selected, validation result, any deviations or assumptions made and why.>
