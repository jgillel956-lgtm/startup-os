---
id: DOC-FND-012
title: Tasks — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: foundation
tags: [tasks, handoff, workflow]
dependencies: [DOC-FND-011]
related: [DOC-FND-011, DOC-TPL-012]
---

# Tasks

The `tasks/` folder is the repository-based handoff point between a planning AI (or human) and an executing coding agent — currently ChatGPT planning and Claude Code executing, though the mechanism is not specific to either tool. Full workflow: [docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md](../docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md).

## The Workflow

1. A planning assistant (ChatGPT, or a human directly) prepares or helps create a task file.
2. The active task lives in **`tasks/NEXT.md`** — one file, one active task.
3. A coding agent (Claude Code, or another) is told: *"Read `tasks/NEXT.md` and execute it exactly."*
4. The agent validates its work, commits, and summarizes what it did.
5. The completed task file can be moved or copied into `tasks/completed/` for a record, and `tasks/NEXT.md` is replaced with the next task (or reset to the reusable template).

## What Belongs in a Task File

- A clear goal and scope.
- Which branch the work happens on.
- Exact files to inspect before changing anything.
- Exact files to create or update.
- Requirements, phrased as instructions the agent can follow without guessing.
- How the work should be validated.
- The exact commit message to use.
- What the agent's final summary should cover.

See [`NEXT.md`](NEXT.md) for the current template with these sections filled in as placeholders — canonically sourced from [AI-TASK-HANDOFF-TEMPLATE.md](../docs/10-templates/AI-TASK-HANDOFF-TEMPLATE.md).

## What Should Not Go in a Task File

- Secrets, credentials, or work-specific private information (same rule as [PROMPTING-STANDARDS.md](../docs/04-ai/PROMPTING-STANDARDS.md)).
- Company-specific content that doesn't belong in a Startup OS repository, unless the repository in question is itself a specific company's implementation.
- Vague, open-ended requests — a task file is a spec, not a conversation starter. If the goal isn't concrete enough to execute, it isn't ready for `tasks/NEXT.md` yet.
- Multiple unrelated tasks bundled together — one task file, one reviewable unit of work, the same discipline as [GIT-WORKFLOW.md](../docs/00-foundation/GIT-WORKFLOW.md)'s "small and coherent" commit rule.

## One Active Task at a Time

`tasks/NEXT.md` holds exactly one active task. Starting a new task before the current one is committed and cleared risks the executing agent mixing work from two unrelated efforts into one branch. Finish, commit, and reset `NEXT.md` to [AI-TASK-HANDOFF-TEMPLATE.md](../docs/10-templates/AI-TASK-HANDOFF-TEMPLATE.md)'s content before handing off the next one.

## Validation

Files in `tasks/` are operational handoff content, not governed Startup OS documents — they are exempt from the front-matter validation in [`scripts/validate-front-matter.js`](../scripts/validate-front-matter.js) (see [VALIDATION.md](../docs/00-foundation/VALIDATION.md)). This file itself carries front matter anyway, since it's a permanent explanation of the system rather than disposable task content.
