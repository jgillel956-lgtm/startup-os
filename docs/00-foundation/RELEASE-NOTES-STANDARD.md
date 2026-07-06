---
id: DOC-FND-027
title: Release Notes Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: foundation
tags: [foundation, release-notes, standard]
dependencies: [DOC-FND-026]
related: [DOC-FND-008, DOC-FND-024, DOC-FND-031]
---

# Release Notes Standard

Defines how a larger group of changes is communicated when Startup OS (or a company built on it) reaches a useful milestone. [GIT-WORKFLOW.md](GIT-WORKFLOW.md) already states the tagging mechanic (`vMAJOR.MINOR.PATCH`, "a tag means the standards at this point form a coherent, adoptable set") — this document defines what accompanies that tag.

## When a Release Note Is Warranted

Not every commit — a release note marks a point where the *cumulative* set of changes since the last one forms something coherent enough to adopt as a whole. In this repository's own history, each numbered commit (`Commit 0001` through the current one) is a candidate milestone; a release note groups a meaningful span of them (e.g. "the full sixteen-domain foundation is now in place") rather than restating each commit individually.

## What a Release Note Contains

```markdown
# [Tag or milestone name] — YYYY-MM-DD

## Summary
One or two sentences: what this release actually represents.

## What's New
- The domains, standards, or capabilities added since the last release note.

## What Changed
- Anything existing that changed meaning, with a pointer to the changelog entry or ADR behind it.

## Migration Notes
- Anything a reader adopting this release needs to do differently than before — or "none" if nothing's required.

## Known Gaps
- What's intentionally not yet covered, so adopters aren't surprised by an absence.
```

## Audience

Written for someone deciding whether to adopt this milestone — a new company starting from this point, or an existing implementation deciding whether to pull in the latest changes. Less granular than a changelog entry, more narrative than a bare commit list.

## Sourcing From Real History

Same discipline as [CHANGELOG-STANDARD.md](CHANGELOG-STANDARD.md): every claim in a release note traces to an actual commit, PR, or ADR — never reconstructed from a plausible guess about what a span of commits probably added up to.

## Before the First Real Release

Before tagging a first `v1.0.0` for Startup OS itself, run [STARTUP-OS-V1-RELEASE-CHECKLIST.md](STARTUP-OS-V1-RELEASE-CHECKLIST.md) — a release note describing a foundation that doesn't actually pass its own release checklist would be exactly the kind of unsupported claim [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) and this standard's "sourcing from real history" rule both prohibit.

## Relationship to Tags

A release note accompanies a tag per [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s tagging convention — the tag is the marker in history; the release note is the human-readable explanation of what that marker actually represents.

## Related Docs

[GIT-WORKFLOW.md](GIT-WORKFLOW.md) · [CHANGELOG-STANDARD.md](CHANGELOG-STANDARD.md) · [REPOSITORY-CHANGE-MANAGEMENT.md](REPOSITORY-CHANGE-MANAGEMENT.md)
