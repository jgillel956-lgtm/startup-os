---
id: DOC-ARCH-011
title: AI Use of Archived Knowledge
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, ai, standard]
dependencies: [DOC-ARCH-006]
related: [DOC-KNW-010, DOC-AI-002]
---

# AI Use of Archived Knowledge

## Purpose

Defines how AI assistants should treat archived material — extending [AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md)'s guidance specifically to the risk of an agent presenting outdated material as current.

## When to Use

Any time an AI agent reads from `docs/99-archive/`, or encounters a document with `status: archived` anywhere in the repository.

## Owner

Whoever's operating the AI agent for a given task.

## Inputs

Archived documents encountered during a task.

## Outputs

Work that correctly treats archived material as historical context, never as current instruction.

## Guidance for AI Assistants

- **Do not treat archived material as current truth.** A document with `status: archived` is superseded or retired — its content describes what *used to be* true or required, not what is now (per [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md)).
- **Prefer active documents over archived ones.** When both an active document and an archived one address the same question, the active one governs — always check whether an archived document has a successor before relying on it at all.
- **Use archived documents only for historical context.** Understanding why a past decision was made, or confirming an idea was already tried — never as the basis for a current implementation or claim.
- **Flag archived status when referencing archived material.** Any output that cites an archived document says so explicitly — per [HISTORICAL-REFERENCE.md](HISTORICAL-REFERENCE.md)'s citation rule.
- **Do not revive archived decisions without human approval.** An agent that finds a compelling-sounding archived approach does not silently reimplement it — a decision was made to move past it, and reversing that is a human call (see [DECISION-MAKING-PATTERNS.md](../11-patterns/DECISION-MAKING-PATTERNS.md)), not something to quietly undo.

## Required Artifacts

None beyond what [AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md) already requires — this document governs behavior specific to archived status.

## Review Points

- Did the agent's output ever treat archived content as current without flagging it?
- Did it check for a successor before citing archived material?
- Did it propose reviving an archived decision without surfacing that to a human first?

## Examples

- An agent researching a past pricing decision cites the archived ADR explicitly as archived, and separately confirms whether a successor ADR exists before drawing conclusions.
- An agent asked to implement something it recognizes from an archived, retired PRD flags that the PRD was retired and asks whether the human actually wants to revive it, rather than proceeding.

## Anti-Patterns

- **Unflagged archived citation.** Presenting an archived document's content as if it were current guidance.
- **Silent revival.** Reimplementing an archived, rejected approach without surfacing that it was previously decided against.
- **Ignoring supersession.** Citing an archived document's conclusion while never checking whether a successor reached a different one.

## Related Docs

[AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md) · [HISTORICAL-REFERENCE.md](HISTORICAL-REFERENCE.md) · [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)
