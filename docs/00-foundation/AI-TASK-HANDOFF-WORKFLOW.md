---
id: DOC-FND-011
title: AI Task Handoff Workflow
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.2.0
domain: foundation
tags: [foundation, ai, workflow, handoff]
dependencies: [DOC-FND-008, DOC-FND-010, DOC-AI-002]
related: [DOC-FND-012, DOC-AI-004, DOC-TPL-012, DOC-FND-018]
---

# AI Task Handoff Workflow

Defines how a planning assistant and an executing coding agent coordinate through the repository itself, using `tasks/NEXT.md`, instead of the user copying large prompts back and forth between tools. This formalizes the [`tasks/`](../../tasks/README.md) folder introduced alongside this document.

## Why This Exists

Two different AI tools are good at different things — see [AGENT-ROLES.md](../04-ai/AGENT-ROLES.md): ChatGPT plans and structures; Claude Code executes inside the repository. Without a shared handoff point, the user becomes the copy-paste layer between them, which is slow and error-prone for anything longer than a few lines. `tasks/NEXT.md` moves the handoff into the repository, where it's versioned, reviewable, and unambiguous.

## Roles

| Role | Responsibility |
|------|-----------------|
| Human owner | Approves direction, resolves ambiguity the agents can't, pushes branches, opens and merges PRs |
| Planning assistant (currently ChatGPT) | Helps plan, structure, and write the task instructions in `tasks/NEXT.md` |
| Executing coding agent (currently Claude Code) | Reads `tasks/NEXT.md`, executes it inside the repository, validates, commits, and summarizes |
| GitHub | Stores the reviewable history — branches, commits, PRs — that makes the work auditable after the fact |

This workflow is not Claude-only or ChatGPT-only. Any planning assistant and any coding agent can fill these two roles, as long as one produces a task file the other can execute unambiguously.

## Standard Workflow

1. **Start from updated `main`.** Pull the latest before starting anything new.
2. **Create a feature branch**, per [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s naming convention.
3. **Create or update `tasks/NEXT.md`** with the task to execute — see [`tasks/NEXT.md`](../../tasks/NEXT.md) for the current template and required sections, canonically defined in [AI-TASK-HANDOFF-TEMPLATE.md](../10-templates/AI-TASK-HANDOFF-TEMPLATE.md).
4. **Tell the coding agent:** `Read tasks/NEXT.md and execute it exactly.`
5. **The agent validates, commits, and summarizes** — running the repository's validation command, checking links, committing with the exact message the task file specifies, and reporting what it did against what the task file asked for. [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) is the concrete checklist behind this step.
6. **The human pushes the branch, opens a PR, reviews, and merges** — per [GITHUB-WORKFLOW.md](GITHUB-WORKFLOW.md).
7. **The human updates `main` and starts the next branch** — resetting `tasks/NEXT.md` to the reusable template before the next handoff.

## Guardrails

- **Do not skip repository standards.** A task file is an instruction, not a license to bypass [METADATA-STANDARD.md](METADATA-STANDARD.md), [ID-STANDARD.md](ID-STANDARD.md), or any other active standard.
- **Do not invent folders, IDs, or tools.** If the task file names an ID or path that conflicts with what already exists, the active repository standard wins — see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), "never invent."
- **Do not overwrite unrelated work.** Check the working tree and branch state before touching files; a task file executed on the wrong branch or over uncommitted work is a preventable mistake, not an acceptable risk.
- **Stop and ask if active standards conflict** with what the task file requests — do not silently pick a side.
- **Flag deviations clearly.** When the task file's literal instruction (a specific ID, a specific path) doesn't match the repository's actual current state, follow the repository and say so plainly in the summary — don't bury it.
- **Keep generated docs company-neutral** unless the task file explicitly says the target repository is a specific company's implementation.

## Troubleshooting

| Problem | What to do |
|---------|-------------|
| Wrong branch | Check `git status`/`git branch --show-current` before executing; if wrong, switch or create the correct branch before touching files. |
| Unmerged prior PR | Check whether the current branch's base actually contains the prior commit's work; if not, fast-forward or merge onto the prior branch/tag before proceeding — don't rebuild work that already exists elsewhere. |
| Permission denied when pushing | This is a human-side auth/permissions issue (credentials, branch protection); the agent commits locally and reports the push failure rather than working around it. |
| Branch created from stale `main` | Fast-forward the branch onto the latest merged work before starting, if there are no local commits yet to lose; if there are, merge instead of resetting. |
| PR contains previous commit's files unexpectedly | Usually means the branch was cut before a prior PR merged — verify the branch's merge-base against the intended prior commit and fix before adding new work. |
| Agent used a different folder than the task file named | If an active repository standard (e.g. [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)) already reserves the requested location for something else, the standard wins — the agent documents the deviation and why, rather than creating a conflicting folder. |

## Example Task File

```markdown
# Fix typo in onboarding guide

Goal: correct a factual error in the onboarding capability's FAQ.

Branch: fix/onboarding-faq-typo

Files to inspect first:
- docs/02-product/capabilities/onboarding/README.md

Files to create or update:
- docs/02-product/capabilities/onboarding/README.md — fix the incorrect step number in the FAQ section

Requirements:
- Preserve all other content exactly.
- Bump `updated` and `version` (PATCH) per METADATA-STANDARD.md.

Validation:
- Run `npm run validate`.

Commit message:
fix: correct step number in onboarding FAQ

Summary expectations:
- Confirm the exact line changed.
- Confirm validation passed.
```

A real task file is usually larger than this — this example shows the minimum shape, not a size limit.
