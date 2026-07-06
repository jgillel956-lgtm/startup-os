---
id: DOC-FND-026
title: Changelog Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, changelog, standard]
dependencies: [DOC-FND-025]
related: [DOC-FND-024, DOC-FND-027]
---

# Changelog Standard

Defines how meaningful changes are summarized so humans and AI assistants can understand what changed and why, without reading the full commit history. Distinct from [DECISIONS.md](../../DECISIONS.md): an ADR records a *decision* and its reasoning; a changelog entry records that a *change happened* and where to look for more detail. A changelog is optional infrastructure — Startup OS itself currently relies on its commit history and `DECISIONS.md` rather than maintaining a separate `CHANGELOG.md`; a company implementing Startup OS may choose to add one, and this standard is what it should follow if so.

## What Belongs in a Changelog Entry

A change meaningful enough to summarize: a new domain, a standard that changed meaning, a template or pattern added, a breaking change to something other documents depend on. Not every commit needs one — a PATCH-level wording fix doesn't; a MAJOR change to a widely-referenced standard does.

## Entry Format

```markdown
## [Commit NNNN or version] — YYYY-MM-DD

### Added
- What's new, in plain language.

### Changed
- What changed in meaning, not just wording.

### Fixed
- What was wrong and is now corrected.

### Deprecated / Archived
- What's being phased out, and its successor if one exists.
```

Only include sections that actually apply — an entry with nothing removed doesn't need an empty "Removed" heading.

## Writing a Good Entry

State what changed and why it matters to a reader, not a restated commit message. "Added the security domain" is a title; "Added security & compliance standards so a company can document data protection, access control, and trust claims consistently" is an entry someone can actually use to decide if it's relevant to them.

## Sourcing Entries From Real History

Every entry traces to an actual commit or PR — per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), a changelog entry is never invented or reconstructed from a plausible-sounding guess about what probably happened. If the underlying commit message doesn't state clearly what changed, that's fixed at the commit level (see [GIT-WORKFLOW.md](GIT-WORKFLOW.md)'s commit message format), not papered over with a confident-sounding changelog entry.

## Relationship to Version Bumps

A MAJOR version bump on a widely-depended-on document is exactly the kind of change a changelog entry should capture — see [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md) for how to classify the bump itself.

## Relationship to Release Notes

A changelog is a running, granular log; release notes ([RELEASE-NOTES-STANDARD.md](RELEASE-NOTES-STANDARD.md)) are a periodic summary at a milestone. A release note can be assembled by grouping recent changelog entries — the changelog is the source material, the release note is the curated summary for a wider audience.

## Related Docs

[DECISIONS.md](../../DECISIONS.md) · [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md) · [RELEASE-NOTES-STANDARD.md](RELEASE-NOTES-STANDARD.md)
