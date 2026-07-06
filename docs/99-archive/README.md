---
id: DOC-ARCH-001
title: Archive & Retention — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, retention, overview]
dependencies: [DOC-ARCH-002]
related: [DOC-FND-007, DOC-KNW-009]
---

# Archive & Retention — Overview

`docs/99-archive/` holds material that's no longer current guidance but shouldn't be deleted — per [Constitution Article VII](../../CONSTITUTION.md), "nothing is deleted, things are archived." This library defines how material gets here, how it's kept useful as history rather than clutter, and how humans and AI assistants should treat it once it's archived.

## The Archive Is Not a Dumping Ground

Everything in `docs/99-archive/` earned its way here through a specific act — retirement, supersession, or deprecation followed by retirement (see [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md), [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md)). A document doesn't drift here by neglect; it's moved here deliberately, with a stated reason, per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)'s `draft → review → active → deprecated → archived` lifecycle.

## When to Archive Instead of Delete

Always. Startup OS never deletes a document that once carried real information — even a wrong decision or a disproven assumption is useful history (why it seemed right at the time is often the most valuable part). See [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md).

## When to Supersede Instead of Archive

When a new document replaces an old one's *purpose* — the old one is archived, but with an explicit link to its successor, per [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md). Supersession is archiving with a named replacement; plain retirement is archiving with no replacement because the need itself went away.

## When Material Should Remain Active

If it's still the current guidance someone should follow, it stays active — moving something to archive because it "feels old" without a real successor or a real end to its relevance is premature archiving, and it deprives current readers of guidance they still need.

## Documents

| Document | Defines |
|----------|---------|
| [ARCHIVE-OPERATING-STANDARD.md](ARCHIVE-OPERATING-STANDARD.md) | Overall model, ownership, principles |
| [DOCUMENT-RETIREMENT.md](DOCUMENT-RETIREMENT.md) | Moving a document to archive with no successor |
| [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md) | Archiving with an explicit replacement |
| [DEPRECATED-MATERIAL.md](DEPRECATED-MATERIAL.md) | The `deprecated` stage before archiving |
| [HISTORICAL-REFERENCE.md](HISTORICAL-REFERENCE.md) | Using archived material safely for context |
| [ARCHIVE-INDEXING.md](ARCHIVE-INDEXING.md) | Keeping archived material findable |
| [RETENTION-AND-REVIEW.md](RETENTION-AND-REVIEW.md) | How long archived material is kept, and reviewed |
| [ARCHIVE-MIGRATION.md](ARCHIVE-MIGRATION.md) | Moving a document into the archive correctly |
| [ARCHIVE-QUALITY-CONTROL.md](ARCHIVE-QUALITY-CONTROL.md) | What makes an archived record trustworthy as history |
| [AI-USE-OF-ARCHIVED-KNOWLEDGE.md](AI-USE-OF-ARCHIVED-KNOWLEDGE.md) | How AI assistants should treat archived material |
| [ARCHIVE-METRICS.md](ARCHIVE-METRICS.md) | Measuring whether the archive is healthy, not cluttered |

## Marking Archived Material So It's Not Mistaken for Current

Every archived document's front matter carries `status: archived` (per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)) — this is the single signal every human and AI assistant checks before trusting a document as current. A document without this field set correctly is the one failure mode this whole library exists to prevent; see [ARCHIVE-QUALITY-CONTROL.md](ARCHIVE-QUALITY-CONTROL.md).
