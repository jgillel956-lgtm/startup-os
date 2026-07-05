---
id: DOC-FND-010
title: GitHub Workflow
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: foundation
tags: [foundation, github, issues, pull-requests, workflow]
dependencies: [DOC-FND-008, DOC-FND-009]
related: [DOC-GH-001, DOC-GH-002, DOC-GH-003, DOC-GH-004, DOC-GH-005, DOC-ROOT-004]
---

# GitHub Workflow

How Startup OS uses GitHub issues and pull requests on top of the base [Git workflow](GIT-WORKFLOW.md). Issues and PRs are where humans and AI agents make change reviewable — they do not replace Git as the source of truth; they are the review layer around it.

## Why Issues Exist

An issue captures intent before work starts: what's wrong, what's proposed, why it matters. Without one, a change shows up as a surprise diff with no record of the reasoning behind it. Issues give every change a documented "why" that outlives the PR that closes it.

## Why PRs Exist

A PR is where a change is reviewed before it becomes part of `main`. It bundles the diff, the validation evidence, and the reasoning into one reviewable unit — matching [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s rule that `main` stays coherent and nothing lands without review.

## When to Create an Issue

- A bug is found in a document, script, or template → [bug-report.md](../../.github/ISSUE_TEMPLATE/bug-report.md)
- A new framework capability is proposed → [feature-request.md](../../.github/ISSUE_TEMPLATE/feature-request.md)
- An existing document needs to change → [documentation-change.md](../../.github/ISSUE_TEMPLATE/documentation-change.md)
- A hard-to-reverse or cross-cutting choice needs to be made → [architecture-decision.md](../../.github/ISSUE_TEMPLATE/architecture-decision.md)

Small, obvious fixes (a typo, a broken link) can skip the issue and go straight to a PR. Anything that changes meaning, structure, or a standard gets an issue first.

## When to Create an ADR

Per [AI-WORKFLOW.md](../04-ai/AI-WORKFLOW.md): when the choice is hard to reverse, cross-cutting, contradicts an existing ADR, or changes a standard in `docs/00-foundation/` or `CONSTITUTION.md`. The architecture-decision issue template is the on-ramp; the ADR itself is written into `DECISIONS.md` using [ADR-TEMPLATE.md](../10-templates/ADR-TEMPLATE.md).

## How to Reference Documents

Reference documents by **ID**, not just by path — IDs survive renames, paths don't. In issues, PRs, and commit messages: `DOC-FND-009`, `PRD-002`, `ADR-0003`. Link the path too when it helps a human click through, but the ID is what makes the reference durable.

## How to Run Validation Before Opening a PR

```bash
npm run validate
```

Run this before opening any PR that touches a Markdown file. A PR whose front matter fails validation should not be opened — fix it first (see [VALIDATION.md](VALIDATION.md)). The PR template's validation checklist requires confirming this was done.

## How AI Agents Should Use Issue and PR Templates

- When preparing a change destined for human review, use the matching issue template to state intent before implementing, and fill the PR template's sections completely — including the AI usage disclosure.
- Never skip the validation checklist item; run `npm run validate` and report the result rather than assuming it passes.
- Never leave a PR's "Documents Created/Updated" sections vague — list exact paths and IDs, per [PROMPTING-STANDARDS.md](../04-ai/PROMPTING-STANDARDS.md)'s "exact file paths" rule applied in reverse (reporting, not just requesting).
- If a change surfaces a decision that looks architectural, propose it via the architecture-decision template rather than deciding unilaterally (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).

## Every Meaningful Change Should Be Reviewable

A change is reviewable when a human who wasn't in the room can look at the issue, the PR, and the diff and understand what happened and why — without replaying a chat session. If a change can't be explained that way, it isn't ready to merge, regardless of how it was produced.
