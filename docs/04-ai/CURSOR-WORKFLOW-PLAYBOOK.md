---
id: DOC-AI-010
title: Cursor Workflow Playbook
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: ai
tags: [ai, playbook, cursor, workspace]
dependencies: [DOC-AI-003, DOC-AI-007]
related: [DOC-FND-008, DOC-AI-011]
---

# Cursor Workflow Playbook

Practical guidance for using Cursor (or any local development environment filling the same role — see [AGENT-ROLES.md](AGENT-ROLES.md)) as the shared workspace where humans and AI agents meet. This is the "how to actually work here" companion to [AGENT-ROLES.md](AGENT-ROLES.md)'s role definition — read that first.

## What This Role Is For

The workspace, not an author. Cursor is where implementation happens and where a human inspects, edits, and approves agent output before it's committed — it is never itself the source of truth. Git holds that role; see [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) and [AGENT-ROLES.md](AGENT-ROLES.md).

## Reviewing Files

Before letting an agent act, or after it reports changes, open the actual changed files rather than trusting the agent's summary of them — "trust but verify" applies to AI-generated summaries the same way it applies to any other second-hand description. A summary describes what an agent intended to do, not necessarily what it did.

## Running Commands

`npm run validate` and any other repository-specific check run the same way whether triggered by a human or by an agent — see [DOCUMENTATION-VALIDATION-WORKFLOW.md](../00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md). Running the validation command directly (rather than only trusting an agent's report of having run it) is a cheap, fast way to confirm a claimed result is real.

## Managing Branches

Follow [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md)'s branch-per-change discipline. Before handing a new task to an executing agent, confirm the branch actually exists, is checked out, and starts from an up-to-date base — [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)'s troubleshooting table names "branch created from stale main" and "unmerged prior PR" as the most common real failures in this repository's own history; catching them here, before the agent starts, is cheaper than catching them after.

## Coordinating AI-Assisted Work

- **Respect the open working tree.** An agent operating inside Cursor never silently overwrites uncommitted human work — if uncommitted edits exist in a file the agent needs to change, that's flagged before or alongside the change, per [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md), rule 15.
- **One active task at a time.** Per [tasks/README.md](../../tasks/README.md), starting a new task before the current one is committed and `tasks/NEXT.md` is reset risks mixing two unrelated efforts into one branch.
- **Push, open, and merge PRs as the human.** Per [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)'s standard workflow, this step stays with the human even when everything up to the commit was agent-executed.

## Reviewing Before Merge

Code or documentation seen in Cursor still goes through the applicable checklist before merge — [AI-CODE-REVIEW-CHECKLIST.md](AI-CODE-REVIEW-CHECKLIST.md) for code, [DOCUMENTATION-VALIDATION-CHECKLIST.md](../00-foundation/DOCUMENTATION-VALIDATION-CHECKLIST.md) for documentation. Being visible in the editor is not the same as being reviewed.

## What This Role Does Not Do

Per [AGENT-ROLES.md](AGENT-ROLES.md): does not serve as a source of truth (Git is), and does not replace the review checklist just because the change is visible on screen.

## Related Docs

[AGENT-ROLES.md](AGENT-ROLES.md) · [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md) · [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) · [AI-REVIEW-AND-VALIDATION-PLAYBOOK.md](AI-REVIEW-AND-VALIDATION-PLAYBOOK.md)
