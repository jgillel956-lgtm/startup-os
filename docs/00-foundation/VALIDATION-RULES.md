---
id: DOC-FND-022
title: Validation Rules
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, validation, rules]
dependencies: [DOC-FND-021]
related: [DOC-FND-006, DOC-FND-004, DOC-FND-019]
---

# Validation Rules

A single reference of the practical validation rules Startup OS checks documents against — document IDs, metadata, folder placement, links, archived material, task files, and unsupported claims. Each rule cites the standard it comes from; this document doesn't restate the reasoning behind a rule, only the checkable assertion, and states whether it's currently automated or manual.

## Document IDs

| Rule | Source | Automated? |
|------|--------|-------------|
| `id` is present and non-empty | [METADATA-STANDARD.md](METADATA-STANDARD.md) | Yes ([VALIDATION.md](VALIDATION.md)) |
| `id` follows the `TYPE-SCOPE-NNN` format for its type | [ID-STANDARD.md](ID-STANDARD.md) | No — manual, per [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) |
| `id` is unique across the repository | [ID-STANDARD.md](ID-STANDARD.md) | No — checked manually before assigning, per [ID-STANDARD.md](ID-STANDARD.md) rule 4 |
| `id` never changes once assigned | [ID-STANDARD.md](ID-STANDARD.md) | No — enforced by convention, not tooling |

## Metadata

| Rule | Source | Automated? |
|------|--------|-------------|
| All required fields present (`id`, `title`, `status`, `owner`, `created`, `updated`, `version`, `domain`, `tags`, `dependencies`, `related`) | [METADATA-STANDARD.md](METADATA-STANDARD.md) | Yes |
| `status` is one of `draft`/`review`/`active`/`deprecated`/`archived` | [STATUS-STANDARD.md](STATUS-STANDARD.md) | Yes |
| `owner` is non-empty | [METADATA-STANDARD.md](METADATA-STANDARD.md) | Yes |
| `domain` matches the folder the file lives in | [METADATA-STANDARD.md](METADATA-STANDARD.md) | No — manual check |
| `dependencies`/`related` reference IDs that actually exist | [METADATA-STANDARD.md](METADATA-STANDARD.md) | No — manual check |

## Folder Placement

| Rule | Source | Automated? |
|------|--------|-------------|
| Document lives in the correct domain folder | [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | No — manual check |
| No new top-level folder invented without an ID-STANDARD/FOLDER-STRUCTURE extension | [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | No — manual check, flagged as a deviation when it happens |
| Filename follows the repository's naming convention | [NAMING-STANDARDS.md](NAMING-STANDARDS.md) | No — manual check |

## Links

| Rule | Source | Automated? |
|------|--------|-------------|
| Every relative link resolves to an existing file | [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) | Yes ([VALIDATION.md](VALIDATION.md)) |
| Anchor links (`#section`) point to a heading that actually exists | [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) | No — manual check |
| No duplicated guidance where a link would do | [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) | No — manual check, part of review |

## Archived Material

| Rule | Source | Automated? |
|------|--------|-------------|
| `status: archived` is set correctly for anything physically in `docs/99-archive/` | [ARCHIVE-QUALITY-CONTROL.md](../99-archive/ARCHIVE-QUALITY-CONTROL.md) | Partially — front matter validation confirms `status` is a valid value, not that it matches physical location |
| Superseded documents state their successor, and the link resolves | [DOCUMENT-SUPERSESSION.md](../99-archive/DOCUMENT-SUPERSESSION.md) | Link resolution: yes. Successor stated: no |
| Inbound references migrated on archiving | [ARCHIVE-MIGRATION.md](../99-archive/ARCHIVE-MIGRATION.md) | No — manual check |

## Task Files

| Rule | Source | Automated? |
|------|--------|-------------|
| `tasks/NEXT.md` and `tasks/README.md` are exempt from front matter validation | [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md), [VALIDATION.md](VALIDATION.md) | N/A — deliberate exemption |
| Task file links still must resolve | [VALIDATION.md](VALIDATION.md) | Yes — link validation does not exempt `tasks/` |
| Completed tasks archived to `tasks/completed/` and `tasks/NEXT.md` reset to the canonical template | [AI-TASK-HANDOFF-TEMPLATE.md](../10-templates/AI-TASK-HANDOFF-TEMPLATE.md) | No — manual, per the workflow |

## Unsupported Claims

| Rule | Source | Automated? |
|------|--------|-------------|
| No certification/compliance claim unless verified and approved | [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) | No — manual review gate |
| No fundraising/financial claim unless already explicitly supported by the repository | [INVESTOR-DECK.md](../08-investors/INVESTOR-DECK.md) | No — manual review gate |
| No company name (AviationHub, BidIgniter, DisburseCloud) in Startup OS itself | [Constitution Article IV](../../CONSTITUTION.md) | No — manual check, part of every commit's own review |

## Using This Reference

This is a lookup table, not a procedure — [DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md) defines when to check these, and [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) is the actual checklist to run through. When a rule here becomes automated, its "Automated?" column is updated here and its entry removed from [VALIDATION.md](VALIDATION.md)'s "Future Validation Ideas" list.

## Related Docs

[VALIDATION.md](VALIDATION.md) · [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) · [ID-STANDARD.md](ID-STANDARD.md) · [METADATA-STANDARD.md](METADATA-STANDARD.md)
