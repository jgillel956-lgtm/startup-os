---
id: PRM-001
title: Claude Code Implementation Prompt
status: draft
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [prompt, claude-code, implementation]
dependencies: [DOC-AI-005]
related: [DOC-AI-002, DOC-AI-004, PRM-003]
---

# Claude Code Implementation Prompt

Reusable template for instructing Claude Code to implement from committed documentation. Copy the block below, replace every `<placeholder>`, delete unused optional lines.

---

```
## Context

You are working in the repository <repository-name>, a <Startup OS framework repo | company implementation repo>.
Read AI_CONTEXT.md and docs/04-ai/AI-OPERATING-RULES.md first and follow them.
Inspect existing files before creating or changing anything. Do not invent requirements —
if the documentation below is silent on something material, stop and ask.

## Capability

<CAP-ID / capability name — the capability this work belongs to>

## Documents to read first

- <docs/02-product/PRD-NNN-slug.md>
- <docs/03-engineering/API-NNN-slug.md>
- <docs/03-engineering/DB-NNN-slug.md>
- <DECISIONS.md — ADRs NNNN, NNNN>

## Files to create/update

- <exact/path/one> — <what changes>
- <exact/path/two> — <what changes>

## Requirements

1. <numbered, testable requirement>
2. <numbered, testable requirement>

## Non-goals

- <what must NOT be built or changed>
- <write "None" only if truly none>

## Acceptance criteria

1. GIVEN <context> WHEN <action> THEN <observable result>
2. <criterion>

## Tests

- <tests to write, mapped to acceptance criteria>
- Do not disable, skip, or weaken existing tests.

## Commit message

<type>: <imperative summary>

<optional body: why, affected document IDs>
```

---

## Usage Notes

- One filled prompt ≈ one reviewable commit. Split bigger work into a sequence of prompts.
- Documentation updates belong in the same prompt as the behavior change they describe.
- Output goes through the [AI code review checklist](../docs/04-ai/AI-CODE-REVIEW-CHECKLIST.md) before merge.
