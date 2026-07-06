---
id: DOC-PAT-011
title: Documentation Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, documentation]
dependencies: [DOC-PAT-002]
related: [DOC-FND-005, DOC-OPS-009]
---

# Documentation Patterns

## Purpose

Keeping a document a source of truth instead of a snapshot that quietly goes stale the moment reality moves past it.

## When to Use

Any document that governs behavior others rely on: a standard, a knowledge base article, a runbook, a data room document.

## Common Pattern

```
Write it where the behavior it describes actually changes  →
Couple documentation updates to the same change that alters behavior  →
State ownership so someone is accountable for currency  →
Archive, don't delete, when superseded — history stays legible
```

Coupling documentation to the same change set that alters behavior — not a follow-up task "for later" — is what actually prevents drift; a separate "update the docs" ticket is the most commonly dropped ticket in any backlog.

## Inputs

A behavior, process, or fact that others need to rely on.

## Outputs

A document that stays accurate because updating it is part of the same change that made it inaccurate, not a separate step.

## Owner

Whoever changes the underlying behavior owns updating the document in the same change set; a named owner is accountable for periodic accuracy checks even absent a triggering change.

## Review Points

- Was the doc updated in the same change set as the behavior it describes, or as an afterthought (or not at all)?
- Does it have a named owner, or is currency nobody's job?
- When it's superseded, is it archived with a pointer to the successor, or just left to confuse the next reader?

## Example Use Cases

- [DOCUMENT-STANDARDS.md](../00-foundation/DOCUMENT-STANDARDS.md) — "documentation and behavior must never diverge."
- [SUPPORT-KNOWLEDGE-BASE.md](../09-operations/SUPPORT-KNOWLEDGE-BASE.md) — article maintenance tied to behavior change.
- [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) — archive, don't delete.
- [OPERATIONAL-RUNBOOKS.md](../09-operations/OPERATIONAL-RUNBOOKS.md) — "if you run it and a step is wrong, fixing it is part of running it."

## Anti-Patterns

- **Docs as an afterthought.** A separate "update docs" task that gets deprioritized indefinitely.
- **Ownerless documents.** Nobody accountable for whether a document is still accurate.
- **Deleting instead of archiving.** Losing the history of why something used to be true.

## Related Docs

[DOCUMENT-STANDARDS.md](../00-foundation/DOCUMENT-STANDARDS.md) · [METADATA-STANDARD.md](../00-foundation/METADATA-STANDARD.md) · [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)
