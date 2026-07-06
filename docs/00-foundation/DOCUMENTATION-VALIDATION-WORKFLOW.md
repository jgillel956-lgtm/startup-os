---
id: DOC-FND-021
title: Documentation Validation Workflow
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, validation, workflow]
dependencies: [DOC-FND-009, DOC-FND-018]
related: [DOC-FND-022, DOC-FND-023]
---

# Documentation Validation Workflow

Defines when and how to run documentation validation before a commit or PR — the process that connects [VALIDATION.md](VALIDATION.md)'s automated checks and [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md)'s manual checks into one repeatable sequence. Builds directly on [DOCUMENTATION-QUALITY-STANDARD.md](DOCUMENTATION-QUALITY-STANDARD.md) from Commit 0021.

## The Sequence

```
1. Run automated checks     → npm run validate
     (front matter, then links)
2. Run the manual checklist → DOCUMENTATION-VALIDATION-CHECKLIST.md
     (clarity, duplication, placement, neutrality — what a script can't check)
3. Fix anything that failed → VALIDATION-FAILURE-HANDLING.md
4. Commit / open the PR    → GIT-WORKFLOW.md, GITHUB-WORKFLOW.md
```

Automated checks run first because they're fast and catch the mechanical errors (missing front matter fields, broken links) that would otherwise distract from the manual review. The manual checklist runs on documents that already pass automated validation — it's not a substitute for it.

## Before a Commit

For any commit touching Markdown: run `npm run validate`. A commit with a failing validation is not made — this mirrors [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md)'s own step 5 ("the agent validates, commits, and summarizes"), stated here as the general rule that applies whether or not an AI agent is involved.

## Before a PR

In addition to the automated checks: run the manual checklist in [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) against every new or changed document. The PR template's own validation checklist (see [pull request template](../../.github/PULL_REQUEST_TEMPLATE/pull_request_template.md)) is where this gets confirmed in writing before review.

## Running It Yourself vs. an AI Agent Running It

The sequence is identical either way — an AI agent preparing a commit runs the same `npm run validate` and applies the same manual checklist a human would, per [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md). An agent reporting "validation passed" without having actually run it is exactly the unverified claim [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) prohibits.

## Guidance for AI Assistants

- Validate before committing — run `npm run validate` and report the actual output, not an assumed result.
- Do not invent missing IDs or folders — check [ID-STANDARD.md](ID-STANDARD.md) and [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) for the next valid value.
- Stop when standards conflict — a task instruction that contradicts an active standard is flagged, not silently resolved in the instruction's favor (see [VALIDATION-FAILURE-HANDLING.md](VALIDATION-FAILURE-HANDLING.md)).
- Flag deviations clearly — in the same summary that reports validation results, not buried.
- Prefer active docs over archived docs — per [docs/99-archive/README.md](../99-archive/README.md).

## Related Docs

[VALIDATION.md](VALIDATION.md) · [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) · [VALIDATION-RULES.md](VALIDATION-RULES.md) · [VALIDATION-FAILURE-HANDLING.md](VALIDATION-FAILURE-HANDLING.md)
