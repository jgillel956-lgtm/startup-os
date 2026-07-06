---
id: DOC-FND-020
title: Documentation Review Gates
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, review, standard]
dependencies: [DOC-FND-017, DOC-FND-018]
related: [DOC-PAT-006, DOC-FND-008]
---

# Documentation Review Gates

Defines lightweight review gates for documentation changes — new docs, domain standards, templates, patterns, archived docs, and AI-generated changes. This is the foundation-level, documentation-specific instance of [REVIEW-GATE-PATTERNS.md](../11-patterns/REVIEW-GATE-PATTERNS.md); read that pattern for the general shape this document applies.

## Gate by Change Type

| Change type | Gate |
|-------------|------|
| New document in an existing domain, following that domain's own patterns | Self-check against [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md); human review per [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s PR process |
| Change to a `docs/00-foundation/` standard | Human review required — per [GIT-WORKFLOW.md](GIT-WORKFLOW.md), "at least one human review for changes to `docs/00-foundation/`" |
| Change to `CONSTITUTION.md` or an accepted ADR | Human review required, and the change itself follows [DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md) |
| New template (`docs/10-templates/`) | Self-check that it doesn't duplicate an existing template, per [TEMPLATE-LIBRARY-STANDARD.md](../10-templates/TEMPLATE-LIBRARY-STANDARD.md) |
| New pattern (`docs/11-patterns/`) | Self-check that it traces to ≥2 real existing instances, per [PATTERN-LIBRARY-STANDARD.md](../11-patterns/PATTERN-LIBRARY-STANDARD.md) |
| Knowledge record (`docs/12-knowledge/`) | Self-check against [KNOWLEDGE-QUALITY-CONTROL.md](../12-knowledge/KNOWLEDGE-QUALITY-CONTROL.md) |
| Archiving a document | Self-check against [ARCHIVE-QUALITY-CONTROL.md](../99-archive/ARCHIVE-QUALITY-CONTROL.md); confirm inbound references migrated |
| AI-generated change of any kind | Independent check before merge — the generating agent does not self-certify (see [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md)) |

## Self-Check vs. Independent Review

A self-check (the author verifying their own work against a checklist) is sufficient for routine, low-risk documentation changes. Independent review (someone other than the author actually checking) is required whenever the change affects a binding standard, a decision record, or was produced by an AI agent — the same independence principle [BRANCHING-AND-CODE-REVIEW.md](../03-engineering/BRANCHING-AND-CODE-REVIEW.md) applies to code.

## What a Reviewer Checks

Per [DOCUMENTATION-QUALITY-STANDARD.md](DOCUMENTATION-QUALITY-STANDARD.md)'s dimensions, plus: does this change contradict an existing standard rather than proposing to change it explicitly; does it introduce a new ID scheme, folder, or domain without going through the extension process every prior deviation in this repository has followed.

## Review Points

- Was the correct gate applied for this change type, or was a foundation-level change merged with only a self-check?
- Did an AI-generated change get an independent check, or did the generating agent's own summary substitute for one?
- Does the review record exist somewhere findable (a PR, a commit message), or did review happen only verbally?

## Anti-Patterns

- **Self-review for standards.** Merging a `docs/00-foundation/` change without the human review [GIT-WORKFLOW.md](GIT-WORKFLOW.md) already requires.
- **AI self-certification.** An agent's own "validation passed" summary treated as equivalent to an independent check.
- **Gate skipped under deadline pressure.** Bypassing the appropriate gate because a change felt too small to warrant it — the same failure [SECURITY-REVIEWS.md](../14-security-compliance/SECURITY-REVIEWS.md) and [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md) warn against in their own domains.

## Guidance for AI Assistants

- Follow repository standards first — a task's literal instruction never overrides an active standard; flag the conflict instead of silently resolving it in the instruction's favor (per [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md)'s rule 3).
- Do not invent missing IDs, folders, statuses, or facts — check [ID-STANDARD.md](ID-STANDARD.md) and [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) for the next valid value rather than guessing.
- Prefer active documents over archived ones, per [docs/99-archive/README.md](../99-archive/README.md).
- Validate links and metadata (per [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md)) before claiming a change is ready to commit.

## Related Docs

[REVIEW-GATE-PATTERNS.md](../11-patterns/REVIEW-GATE-PATTERNS.md) · [GIT-WORKFLOW.md](GIT-WORKFLOW.md) · [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md)
