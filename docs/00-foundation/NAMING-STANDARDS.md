---
id: DOC-FND-003
title: Naming Standards
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: foundation
tags: [foundation, naming, conventions]
dependencies: []
related: [DOC-FND-002, DOC-FND-006]
---

# Naming Standards

Consistent names make the repository navigable by pattern, not memory. These rules apply to every file and folder in Startup OS and its implementations.

## Folders

- **Lowercase kebab-case**: `02-product/`, `payment-patterns/`.
- Domain folders in `docs/` carry a two-digit numeric prefix: `NN-name/`.
- No spaces, no underscores, no camelCase.

## Markdown Documents

- **UPPERCASE-KEBAB-CASE** with `.md` extension: `FOLDER-STRUCTURE.md`, `PRD-TEMPLATE.md`.
- Governance and standard documents use a descriptive noun phrase: `NAMING-STANDARDS.md`, not `NAMES.md`.
- Templates end in `-TEMPLATE.md`.
- Domain overview files are named `README.md` (one per folder, rendered automatically by Git hosts).
- Instance documents created from templates are named `<TYPE>-<NNN>-<short-slug>.md`, e.g. `PRD-001-user-onboarding.md`, `ADR-0012-queue-selection.md`. The `<NNN>` matches the document ID sequence (see [ID-STANDARD.md](ID-STANDARD.md)).

## Prompts

- Lowercase kebab-case: `prompts/summarize-prd.md`, `prompts/generate-user-stories.md`.

## Scripts

- Lowercase kebab-case with the appropriate extension: `scripts/validate-front-matter.ps1`, `scripts/new-doc.js`.

## Assets

- Lowercase kebab-case, prefixed by the related document ID when applicable: `assets/doc-fnd-002-structure-diagram.png`.

## General Rules

1. **Never mix conventions** within the same category.
2. **Names describe content**, not history (`API-TEMPLATE.md`, not `NEW-API-TEMPLATE-V2-FINAL.md`). Versions live in front matter; history lives in Git.
3. **ASCII only** in file and folder names.
4. **Renames are refactors**: update all inbound links in the same change set.
