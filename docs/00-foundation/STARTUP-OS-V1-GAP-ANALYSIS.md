---
id: DOC-FND-029
title: Startup OS v1 Gap Analysis
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-06
version: 1.1.0
domain: foundation
tags: [foundation, gap-analysis, v1]
dependencies: [DOC-FND-028]
related: [DOC-FND-030, DOC-FND-031]
---

# Startup OS v1 Gap Analysis

Remaining gaps, risks, weak areas, missing links, incomplete standards, and cleanup needs found during the [v1 readiness review](STARTUP-OS-V1-READINESS-REVIEW.md). Each item states what was actually checked and what was found — not a generic checklist, the real result of running it against this repository.

## Gap 1 — `docs/09-operations/` Scope Mismatch (Resolved in Commit 0025)

**What was checked:** [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)'s stated description of `docs/09-operations/` against its actual file list.

**What was found:** The description read "Customer support, SLAs, incident communication, runbooks, finance, HR, tooling, internal processes." The actual 12 files ([README.md](../09-operations/README.md) and its table) cover only the customer-support-facing half — support model, triage, SLAs, escalation, incident communication, knowledge base, runbooks, feedback loop, metrics. There was no finance, HR, tooling, or general internal-process standard anywhere in the domain, or anywhere else in the repository.

**Severity:** Was Medium — nothing was broken, but the domain's own stated scope oversold what's actually there.

**Fix applied:** [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)'s description narrowed to "Customer support, SLAs, triage, escalation, incident communication, runbooks" — matching [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md)'s row, which already described the domain accurately. Finance, HR, and general tooling/internal-process standards remain out of scope for this domain; if a future commit adds them, it should either extend `docs/09-operations/` deliberately or introduce them elsewhere with their own description.

## Gap 2 — `CONTRIBUTING.md` Is Stale

**What was checked:** Whether `CONTRIBUTING.md` (written in Commit 0001) describes the workflow this repository actually follows today.

**What was found:** It has no mention of `tasks/`, the AI task handoff workflow ([AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md), added Commit 0011), or the branch-per-commit policy formalized in ADR-0006 (Commit 0004A). It describes a generic contribution flow that predates both. Anyone reading it as the current guide would miss how work actually happens in this repository from Commit 0011 onward.

**Severity:** Medium — this is the first document a new contributor (human or AI) would read, and it's out of date.

**Fix:** Rewrite `CONTRIBUTING.md`'s workflow section to reference [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md) and [REPOSITORY-CHANGE-MANAGEMENT.md](REPOSITORY-CHANGE-MANAGEMENT.md) as the actual current process.

## Gap 3 — GitHub Templates Predate the Task Workflow

**What was checked:** Whether `.github/ISSUE_TEMPLATE/` and `.github/PULL_REQUEST_TEMPLATE/` (Commit 0004) reference `tasks/NEXT.md` or the AI task handoff workflow (Commit 0011).

**What was found:** No cross-reference anywhere in either template set. They were built seven commits before the task workflow existed and were never revisited.

**Severity:** Low — the templates still function for their original purpose; they're just silent about a workflow that now generates a large share of this repository's actual PRs.

**Fix:** Add a line to the PR template's "AI Usage Disclosure" section referencing `tasks/NEXT.md` when applicable, and a note in the issue templates pointing to [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md) for AI-originated work.

## Gap 4 — No `LICENSE` File

**What was checked:** Repository root for a license file.

**What was found:** None exists. This may be intentional (a private repository not yet meant for external use) or simply never decided.

**Severity:** Low for a private repository; would become a real blocker the moment this repository (or a company built from it) is shared externally.

**Fix:** Not a documentation gap this review can resolve — requires a founder decision on licensing terms. Tracked here so it isn't silently forgotten.

## Gap 5 — Several Validation Rules Remain Manual

**What was checked:** [VALIDATION-RULES.md](VALIDATION-RULES.md)'s automated-vs-manual column against what `scripts/validate-front-matter.js` and `scripts/validate-links.js` actually check.

**What was found:** ID uniqueness, `domain`-matches-folder, and anchor-link resolution are all still manual — already transparently stated in [VALIDATION-RULES.md](VALIDATION-RULES.md) and [VALIDATION.md](VALIDATION.md)'s "Future Validation Ideas," not a newly discovered gap, but still open.

**Severity:** Low — this review manually re-verified ID uniqueness across the whole repository and found no real collisions (one false positive from an illustrative example, resolved by inspection). The manual process currently works; it just doesn't scale as well as automation would.

**Fix:** Not required for v1; a reasonable Commit 0025+ candidate if the repository keeps growing at its current rate.

## Gap 6 — `prompts/` Hasn't Grown With the Repository

**What was checked:** Whether `prompts/` reflects the sixteen domains that now exist.

**What was found:** Still exactly the three domain-generic prompts from Commit 0002 (Claude Code implementation, ChatGPT architecture review, Codex code review). No domain-specific prompt templates exist for, say, drafting a new capability, a security review, or an investor update — even though rich standards now exist for all of these.

**Severity:** Low — the three generic prompts are still usable for any domain; this is a missed opportunity, not a broken system.

**Fix:** Optional future work, not a v1 blocker.

## Not a Gap: Structural Completeness

Explicitly checked and confirmed **not** a gap: every domain has the file count it was actually commissioned to have (verified by direct count against each domain's own README table); every relative link resolves (`npm run validate`, 232/232); no real ID collisions exist; no company-specific content leaked into Startup OS itself.

## Summary Table

| Gap | Severity | Blocking for v1? |
|-----|----------|---------------------|
| `docs/09-operations/` scope mismatch | Resolved (Commit 0025) | No longer applicable |
| `CONTRIBUTING.md` stale | Medium | Yes — first-read onboarding doc |
| GitHub templates don't reference task workflow | Low | No, but recommended |
| No `LICENSE` file | Low (private repo) | No, needs a decision |
| Manual validation rules | Low | No, already documented |
| `prompts/` hasn't grown | Low | No |
