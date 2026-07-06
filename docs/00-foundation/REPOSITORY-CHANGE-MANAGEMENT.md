---
id: DOC-FND-024
title: Repository Change Management
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, change-management, workflow]
dependencies: [DOC-FND-008, DOC-FND-010]
related: [DOC-FND-025, DOC-FND-026, DOC-FND-027]
---

# Repository Change Management

Defines how repository changes are proposed, scoped, reviewed, approved, merged, and tracked — the single umbrella this document sits under, connecting [GIT-WORKFLOW.md](GIT-WORKFLOW.md) (branching/commit mechanics), [GITHUB-WORKFLOW.md](GITHUB-WORKFLOW.md) (issues/PRs), [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) (when review is required), and [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md) (how changes are numbered) into one coherent process. This document does not restate any of those — it's the map across them.

## How to Handle Each Change Type

| Change type | Process |
|--------------|---------|
| Small documentation update (typo, clarification, wording) | Direct edit, PATCH version bump per [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md), self-check per [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md), no formal review required |
| New domain doc, following existing patterns | Feature branch, next available ID per [ID-STANDARD.md](ID-STANDARD.md), self-check + PR review per [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) |
| Standards change (`docs/00-foundation/`, `CONSTITUTION.md`, an accepted ADR) | Human review required per [GIT-WORKFLOW.md](GIT-WORKFLOW.md); if it reverses or contradicts a prior decision, a new ADR per [DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md) |
| Template or pattern change (`docs/10-templates/`, `docs/11-patterns/`) | Check for duplication first per [TEMPLATE-LIBRARY-STANDARD.md](../10-templates/TEMPLATE-LIBRARY-STANDARD.md) / [PATTERN-LIBRARY-STANDARD.md](../11-patterns/PATTERN-LIBRARY-STANDARD.md), then standard PR flow |
| Archived or superseded material | Follow [ARCHIVE-MIGRATION.md](../99-archive/ARCHIVE-MIGRATION.md)'s checklist — never a plain delete |
| AI-generated change | Independent check before merge — the generating agent never self-certifies, per [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md) |
| Validation failure discovered mid-change | Resolve per [VALIDATION-FAILURE-HANDLING.md](VALIDATION-FAILURE-HANDLING.md) before proceeding — never merge past an unresolved failure |
| PR description | Follow the [pull request template](../../.github/PULL_REQUEST_TEMPLATE/pull_request_template.md) in full, per [GIT-WORKFLOW.md](GIT-WORKFLOW.md) |
| Version bump | Per [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md) — every substantive change, sized to what actually changed |
| Release notes | When a set of changes reaches a coherent, adoptable milestone — per [RELEASE-NOTES-STANDARD.md](RELEASE-NOTES-STANDARD.md) |
| Changelog entry | For anything meaningful enough that a human or AI assistant would later want a plain-language "what changed and why" — per [CHANGELOG-STANDARD.md](CHANGELOG-STANDARD.md) |

## Proposing a Change

Follow [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s branch-per-change discipline: start from updated `main`, branch, make the change, validate ([DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md)), open a PR ([GITHUB-WORKFLOW.md](GITHUB-WORKFLOW.md)). This document adds nothing new to that mechanic — it's where you look up which additional step (review gate, ADR, version bump size) applies to what you're changing.

## Approval and Merge

Approval authority follows [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s review requirements and [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md)'s per-change-type gate table — this document does not add a separate approval mechanism, it routes to the one that already exists for the change type in question.

## Tracking Changes

Every merged change is traceable: the commit message states what changed, the PR states why, and — for anything a future reader would want summarized in plain language — a changelog entry per [CHANGELOG-STANDARD.md](CHANGELOG-STANDARD.md) exists alongside the commit history.

## Guidance for AI Assistants

- Do not merge or approve changes — that authority stays with a human, per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) and [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md).
- Follow the branch and PR workflow — no direct commits to `main` outside the bootstrap exception already recorded in [GIT-WORKFLOW.md](GIT-WORKFLOW.md) and [ADR-0006](../../DECISIONS.md).
- Summarize deviations clearly — the same discipline every commit in this repository's history has applied when a task instruction conflicted with an active standard.
- Validate before committing, per [DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md).
- Do not change version numbers without a reason — a version bump reflects an actual substantive change, per [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md), not a reflexive increment.
- Do not invent change history — a changelog or release note entry states what actually happened, sourced from the real commit/PR record, never a plausible-sounding summary of what might have happened.

## Related Docs

[GIT-WORKFLOW.md](GIT-WORKFLOW.md) · [GITHUB-WORKFLOW.md](GITHUB-WORKFLOW.md) · [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) · [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md)
