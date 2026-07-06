---
id: DOC-FND-019
title: Cross-Linking Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, cross-linking, standard]
dependencies: [DOC-FND-017]
related: [DOC-FND-006, DOC-FND-014]
---

# Cross-Linking Standard

Defines how documents link across domains without creating broken links, circular confusion, stale references, or duplicated guidance. Startup OS now spans sixteen domains ([STARTUP-OS-MAP.md](STARTUP-OS-MAP.md)) — this is what keeps that many documents navigable instead of a tangle.

## Link by Path, Reference by ID

A document links to another by relative path (so a human can click through) and references it by ID in front matter (`dependencies`/`related`), per [ID-STANDARD.md](ID-STANDARD.md) — the ID is what survives a rename or move; the path is what makes the link clickable today. Both matter; neither substitutes for the other.

## Link Instead of Duplicating

If content already exists in another document, link to it — don't restate it. A restated section drifts the moment the original changes, since nobody remembers to update both. This is the single most common way Startup OS's own domains have avoided duplication so far (e.g. [PRODUCT-REQUIREMENTS-TEMPLATE.md](../10-templates/PRODUCT-REQUIREMENTS-TEMPLATE.md) explicitly defers to [PRD-TEMPLATE.md](../10-templates/PRD-TEMPLATE.md) rather than re-authoring it).

## Avoiding Circular Confusion

A cross-link should make the destination clearer, not send a reader in a loop with no new information gained. If document A links to B "for detail" and B links back to A "for detail," neither actually holds the detail — one of them needs to.

## Avoiding Stale References

A link to a document that's since been archived or superseded should be updated to point to the successor, per [ARCHIVE-MIGRATION.md](../99-archive/ARCHIVE-MIGRATION.md)'s "migrate inbound references" step — a stale link that still technically resolves (because IDs don't change) but points to outdated content is more dangerous than a broken one, since it looks fine.

## When to Cross-Link vs. When Not To

Cross-link when a reader genuinely needs the connected document to understand or act on this one. Don't force a link into every document that could theoretically relate to another — per [FEEDBACK-LOOP-PATTERNS.md](../11-patterns/FEEDBACK-LOOP-PATTERNS.md)'s "do not force updates where not needed" precedent already applied across every recent commit in this repository. A link that exists only to pad "related docs" adds noise, not connection.

## Anchors

A link to a specific section (`#heading-anchor`) is only used when the anchor's heading text is confirmed to exist — an anchor guessed from a plausible heading name silently fails to navigate correctly even though the file-level link still resolves.

## Review Points

- Does every relative link in a changed document actually resolve? (Checked by [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md).)
- Does a cross-link add real value, or is it padding?
- Has an archived or superseded target been updated to point to its successor?

## Anti-Patterns

- **Duplicated guidance.** The same rule restated in two documents instead of one linking to the other.
- **Padding links.** Cross-links added to satisfy a "should cross-link" instruction without genuine relevance.
- **Guessed anchors.** Linking to `#section-name` without confirming that heading actually exists in the target.

## Related Docs

[ID-STANDARD.md](ID-STANDARD.md) · [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md) · [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md)
