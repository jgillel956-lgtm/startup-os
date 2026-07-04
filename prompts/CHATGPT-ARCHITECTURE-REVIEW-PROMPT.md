---
id: PRM-002
title: ChatGPT Architecture Review Prompt
status: draft
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [prompt, chatgpt, review, architecture]
dependencies: [DOC-AI-005]
related: [DOC-AI-003, DOC-AI-006, PRM-003]
---

# ChatGPT Architecture Review Prompt

Reusable template for a ChatGPT design/architecture review. Paste the relevant committed documents (or their contents) with the prompt — ChatGPT cannot read the repository. Copy the block below and replace every `<placeholder>`.

---

```
## Context

You are reviewing design documentation for <repository-name>, built on the Startup OS
framework (documentation-before-development; Git is the source of truth). You are acting
as a CTO-style reviewer. Do not rewrite the design — review it.

Documents under review (contents pasted below / attached):
- <PRD-NNN — title>
- <API-NNN — title>
- <DB-NNN — title>
- <relevant ADRs>

## Objective

Identify weaknesses, risks, and gaps in this design before implementation begins.

## Review dimensions

Evaluate each explicitly:

1. Architecture — is the structure sound, are boundaries right, does it fit the existing ADRs?
2. Product fit — does the design actually deliver the capability's stated outcome?
3. Security — authn/authz model, input handling, data exposure, secret handling.
4. Scalability — where does this break at 10x and 100x the documented load?
5. Database design — schema shape, integrity, indexes vs. access patterns, migration risk.
6. API consistency — naming, versioning, error shape, idempotency vs. stated conventions.
7. Edge cases — empty/error/concurrent/partial-failure states the documents ignore.
8. Missing documentation — decisions being made implicitly that deserve an ADR or spec section.
9. Risks — the top 3–5 things most likely to hurt later, ranked.
10. Recommended changes — concrete, prioritized (must-fix before build / should-fix / nice).

## Output format

- Findings grouped by dimension, one line each: severity (high/med/low) + issue + why it matters.
- Then the ranked risk list and the prioritized recommendations.
- Flag anything that requires a new ADR.
- If a dimension is clean, say "no findings" — do not pad.
```

---

## Usage Notes

- Run this review **before** the design is handed to Claude Code for implementation, and optionally again after implementation for consistency.
- Accepted findings flow back into the documents (version bump) before implementation proceeds — chat output is not a source of truth.
