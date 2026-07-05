---
id: DOC-FND-001
title: Foundation — Overview
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.0
domain: foundation
tags: [foundation, standards, overview]
dependencies: []
related: [DOC-FND-002, DOC-FND-003, DOC-FND-004, DOC-FND-005, DOC-FND-006, DOC-FND-007, DOC-FND-008, DOC-FND-009]
---

# Foundation

The foundation domain defines the standards that govern every document, file, and workflow in Startup OS and its implementations. Everything else in the repository is built on these rules. When a standard conflicts with a habit, the standard wins; when a standard is wrong, change it via ADR.

## Documents

| Document | Governs |
|----------|---------|
| [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | Repository layout and what belongs where |
| [NAMING-STANDARDS.md](NAMING-STANDARDS.md) | File and folder naming |
| [METADATA-STANDARD.md](METADATA-STANDARD.md) | YAML front matter on every document |
| [DOCUMENT-STANDARDS.md](DOCUMENT-STANDARDS.md) | How documents are written and structured |
| [ID-STANDARD.md](ID-STANDARD.md) | Stable document identifiers |
| [STATUS-STANDARD.md](STATUS-STANDARD.md) | Document lifecycle statuses |
| [GIT-WORKFLOW.md](GIT-WORKFLOW.md) | Branching, commits, and pull requests |
| [VALIDATION.md](VALIDATION.md) | Automated front matter validation (`npm run validate`) |

## Reading Order

New contributors (human or AI) read in this order:

1. Repository root: `README.md`, `AI_CONTEXT.md`, `CONSTITUTION.md`
2. This folder, top to bottom as listed above
3. The templates in `docs/10-templates/` relevant to the task at hand

## Changing a Standard

Standards change only through an ADR in `DECISIONS.md`. The ADR records why the old rule was insufficient and what the migration path is. After acceptance, the standard document is updated (version bump) and affected documents are migrated.
