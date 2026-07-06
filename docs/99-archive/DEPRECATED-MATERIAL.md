---
id: DOC-ARCH-005
title: Deprecated Material
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, deprecated, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-FND-007, DOC-ARCH-003]
---

# Deprecated Material

## Purpose

Defines the `deprecated` stage — still technically in force but scheduled for replacement — that precedes archiving, per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)'s lifecycle.

## When to Use

A document is still accurate and may still be relied on, but a successor is planned or already exists and will eventually replace it. Not yet ready to archive — the transition period matters, since readers still need the current document until the successor is genuinely ready.

## Owner

The document's owner, coordinating the transition timeline with whoever's building the successor.

## Inputs

A planned or in-progress successor.

## Outputs

The document's `status` set to `deprecated`, with a note on what's replacing it and roughly when.

## Required Artifacts

A stated successor (planned or existing) and, where known, a target date for full archiving.

## Review Points

- Is the deprecated document still accurate for what it covers, or has it already drifted while sitting in this stage?
- Is the successor's progress actually being tracked, or has "deprecated" become a permanent limbo state?
- Are readers of the deprecated document being pointed to the successor, once one exists?

## Examples

- A standard marked `deprecated` while its replacement is drafted, per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)'s lifecycle diagram.
- A template scheduled for replacement once a new pattern is confirmed, kept `deprecated` rather than archived until the pattern is actually ready to use.

## Anti-Patterns

- **Permanent deprecation.** A document marked `deprecated` indefinitely, with no real progress toward the successor that justified the label.
- **Deprecated but unmaintained.** Treating "deprecated" as license to stop keeping it accurate, even though it's still the thing readers rely on until the successor lands.
- **Skipping the stage entirely.** Archiving directly without a deprecation period, when readers genuinely needed transition time.

## Related Docs

[STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md) · [DOCUMENT-SUPERSESSION.md](DOCUMENT-SUPERSESSION.md)
