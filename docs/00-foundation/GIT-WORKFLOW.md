---
id: DOC-FND-008
title: Git Workflow
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: foundation
tags: [foundation, git, workflow, branching]
dependencies: []
related: [DOC-ROOT-005, DOC-FND-007]
---

# Git Workflow

Git is the source of truth (ADR-0002), so Git discipline is documentation discipline. These rules apply to Startup OS and to every implementation repository.

## Branching

- `main` is always coherent: every commit on `main` leaves the repository in a valid, compliant state.
- **No direct commits to `main`.** All work happens on branches merged via pull request.
- Branch names: `<type>/<short-kebab-slug>`

| Type | Use |
|------|-----|
| `docs/` | New or updated documentation |
| `feature/` | New capability (implementation repos) |
| `fix/` | Corrections |
| `adr/` | Decision proposals |
| `chore/` | Housekeeping, tooling, structure |

Examples: `docs/api-template-v2`, `adr/0006-hosting-choice`.

## Commits

- **Small and coherent**: one logical change per commit.
- **Message format**: `<type>: <imperative summary>` — e.g. `docs: add database template`, `adr: propose ADR-0006 hosting choice`.
- Body (when needed) explains *why*, not *what* — the diff shows what.
- Behavior/documentation coupling: a change that alters behavior includes its documentation update **in the same branch**, ideally the same commit.

## Pull Requests

- Use the PR template in `.github/PULL_REQUEST_TEMPLATE/`.
- The description states: what changed, why, and which document IDs are affected.
- A PR that changes a standard or principle must reference its ADR.
- AI-authored PRs are labeled as such and summarize the agent's reasoning so a human can review without replaying the session.

## Review & Merge

- At least one human review for changes to `docs/00-foundation/`, `CONSTITUTION.md`, or `DECISIONS.md`.
- Squash-merge is preferred for documentation branches; the squash message follows the commit format.
- Merging a PR that moves a document to `active` constitutes approval (see [STATUS-STANDARD.md](STATUS-STANDARD.md)).

## Tags & Releases

- Framework milestones are tagged `vMAJOR.MINOR.PATCH` (e.g. `v1.0.0` for the initial foundation).
- A tag means: the standards at this point form a coherent, adoptable set.

## Prohibitions

- No force-pushes to `main`.
- No committed secrets, credentials, or personal data — ever. If one lands, rotate the secret and rewrite history immediately.
- No work-related content in personal repositories (see AI_CONTEXT.md rule 4).
