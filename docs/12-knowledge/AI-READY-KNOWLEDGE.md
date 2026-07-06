---
id: DOC-KNW-010
title: AI-Ready Knowledge
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, ai, standard]
dependencies: [DOC-KNW-004]
related: [DOC-AI-002, DOC-PAT-012]
---

# AI-Ready Knowledge

## Purpose

Defines how AI assistants should use repository knowledge — extending [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)'s "never invent" rule specifically to research findings, learnings, and knowledge records.

## When to Use

Any time an AI agent reads from or writes to `docs/12-knowledge/`, or draws on knowledge records elsewhere in the repository to inform a task.

## Owner

Whoever's operating the AI agent for a given task; the knowledge owner confirms records stay structured well enough to be used this way.

## Inputs

The knowledge library's current, active records.

## Outputs

Work that correctly distinguishes what's known from what's assumed, with sources traceable back to the records used.

## Guidance for AI Assistants

- **Prefer current, active documents.** A record marked `deprecated` or `archived` is historical context, not current guidance — see [STATUS-STANDARD.md](../00-foundation/STATUS-STANDARD.md).
- **Cite or reference source records.** When a piece of knowledge informs output, name which record it came from — this is what makes the output checkable.
- **Do not invent missing facts.** A gap in the knowledge library is a gap to flag, not fill with a plausible guess — the same rule [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) applies to requirements, applied here to facts.
- **Flag stale, conflicting, or unsupported information.** If two records disagree, or a record looks outdated against its own last-reviewed date, say so rather than silently picking one.
- **Distinguish facts, assumptions, examples, and decisions.** Per [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md)'s typing — an agent that treats an assumption as a confirmed fact (or vice versa) has quietly changed its reliability without telling anyone.

## Required Artifacts

None beyond what [KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md) already requires — this document governs behavior, not a new artifact type.

## Review Points

- Did the agent's output cite which knowledge record it drew from?
- Did it flag a gap instead of filling it, when the knowledge library was silent?
- Did it preserve the fact/assumption/example/decision distinction, or collapse them into uniform certainty?

## Examples

- An agent drafting a pitch narrative cites the specific traction metric source rather than restating a number from memory.
- An agent asked a market question with no corresponding knowledge record says so explicitly, rather than answering from general training knowledge presented as company-specific fact.

## Anti-Patterns

- **Silent invention.** Filling a knowledge gap with a plausible-sounding fact instead of flagging it.
- **Uncited synthesis.** Presenting a conclusion without saying which records it drew from.
- **Confidence flattening.** Treating an assumption or single example with the same certainty as a validated fact.

## Related Docs

[AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) · [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md) · [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md)
