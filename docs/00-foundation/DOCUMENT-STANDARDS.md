---
id: DOC-FND-005
title: Document Standards
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: foundation
tags: [foundation, writing, documents, standards]
dependencies: [DOC-FND-004]
related: [DOC-FND-003, DOC-FND-007]
---

# Document Standards

How documents in a Startup OS repository are written. The goal is documents that a human can skim and an AI agent can act on without asking questions.

## Structure

1. **Front matter first** — valid YAML per [METADATA-STANDARD.md](METADATA-STANDARD.md).
2. **One H1**, matching the front matter `title`.
3. **Purpose paragraph** immediately after the H1: what this document is and who it is for, in 1–3 sentences.
4. **Headings form a strict hierarchy** — no skipping levels (H2 → H4).
5. **One topic per document.** If a document covers two separable topics, split it and link them via `related`.

## Writing Rules

- **Lead with the conclusion.** State the rule, decision, or answer first; justify after.
- **Be declarative.** "Documents use kebab-case" — not "documents should probably use kebab-case."
- **Requirements use MUST/SHOULD/MAY** with their RFC 2119 meanings when precision matters.
- **No unexplained jargon.** First use of a domain term gets a definition or a link.
- **Examples over abstraction.** Every rule that could be misread gets a ✅/❌ example.
- **Placeholders, never real data.** Example names, keys, and values are obviously fake (`acme`, `example.com`, `<API_KEY>`).
- **Company-neutral.** Nothing that only makes sense for one specific company.

## Linking

- Link to documents by **relative path**, and reference them by **ID** in front matter.
- Every referenced document ID must exist.
- Prefer linking to duplicating: content lives in exactly one place.

## Tables, Lists, Diagrams

- Tables for enumerable facts; prose for reasoning.
- Diagrams as Mermaid blocks when simple, as files in `assets/` when complex (named per [NAMING-STANDARDS.md](NAMING-STANDARDS.md)).

## Change Discipline

- Substantive edits bump `version` and `updated` per the metadata standard.
- A document whose meaning changed (MAJOR bump) must notify its dependents: check every document listing it under `dependencies`.
- Superseded documents are archived, not rewritten beyond recognition — see [STATUS-STANDARD.md](STATUS-STANDARD.md).

## Quality Bar

Before a document leaves `draft` status, it must answer:

1. Who is this for?
2. What can the reader do after reading it that they could not before?
3. Could an AI agent follow it without inventing anything?
