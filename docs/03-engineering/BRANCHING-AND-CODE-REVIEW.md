---
id: DOC-ENG-007
title: Branching and Code Review
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: engineering
tags: [engineering, branching, code-review, standard]
dependencies: [DOC-FND-008, DOC-ENG-002]
related: [DOC-FND-010, DOC-ENG-008, DOC-AI-006]
---

# Branching and Code Review

Specializes [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md)'s general branching/PR rules for application code. Where this document and GIT-WORKFLOW.md overlap, GIT-WORKFLOW.md's mechanics (branch naming, commit format, no-direct-to-main) still apply — this document adds what's specific to reviewing code.

## Branch Strategy

- One branch per unit of reviewable work — a branch that bundles two unrelated changes should be split before review, not reviewed as one.
- Branches are short-lived: the longer a branch lives unmerged, the more it drifts from `main` and the harder review gets. A branch that's been open for a long time without progress is a signal to check, not a fact to accept quietly.

## Pull Request Expectations

- Uses the [pull request template](../../.github/PULL_REQUEST_TEMPLATE/pull_request_template.md) in full — not just the summary line.
- States which PRD/story/acceptance-criteria the change implements, or which ADR/technical design it follows.
- Is small enough to review in one sitting; a PR that isn't gets split, per [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md)'s "small and coherent" rule.

## Review Standards

A reviewer checks, at minimum, the categories in [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) — that checklist applies to all code, not only AI-generated code. Specifically for review:

- **Correctness against the spec** — does this satisfy the PRD's acceptance criteria, not just "does it look reasonable."
- **Standards compliance** — [REPOSITORY-STANDARDS.md](REPOSITORY-STANDARDS.md), naming, structure.
- **Test adequacy** — see [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md).
- **Risk** — does this change carry operational or security risk that needs explicit sign-off, not just approval by default.

## Approval Expectations

- **Independence.** The approver is not the implementer. For AI-authored code, an independent reviewer (human, or a distinct AI agent per [AGENT-ROLES.md](../04-ai/AGENT-ROLES.md)) reviews it — the agent that wrote it does not also approve it.
- **Explicit, not implied.** Approval is a stated action (an actual review approval), not silence or the absence of objection.
- **Standards changes need more.** Changes to `docs/00-foundation/`, `CONSTITUTION.md`, or an ADR-governed decision require the same human-review bar [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md) already sets for documentation.

## Merge Readiness

A PR is ready to merge when:

- [ ] Review is approved by someone other than the author.
- [ ] Tests pass, per [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md).
- [ ] The PR template's validation checklist is complete.
- [ ] Documentation affected by the change was updated in the same PR.
- [ ] Any resulting ADR exists and is at least `Proposed`, if the change involved a hard-to-reverse decision.

A PR missing any of these is not merged "for now" — the gate exists because "for now" is how untracked risk accumulates.

## AI Agents in Review

AI agents may author PRs and may serve as one of multiple reviewers, but never as the sole reviewer of their own work. When an AI agent reviews another AI agent's PR, it reviews adversarially — per the [Codex review prompt](../../prompts/CODEX-CODE-REVIEW-PROMPT.md) — not collaboratively.
