---
id: DOC-AI-011
title: AI Review and Validation Playbook
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: ai
tags: [ai, playbook, review, validation]
dependencies: [DOC-AI-007, DOC-FND-021]
related: [DOC-FND-017, DOC-AI-006, DOC-KNW-010, DOC-PAT-012]
---

# AI Review and Validation Playbook

Practical guidance for how an AI assistant — any of them, reviewing its own or another agent's output — reviews documents, checks links, validates metadata, identifies unsupported claims, and flags risks before anything is committed. [AI-CODE-REVIEW-CHECKLIST.md](AI-CODE-REVIEW-CHECKLIST.md) is the equivalent checklist for reviewing code specifically; this playbook covers the documentation-and-claims side that applies to every Startup OS change, code or not.

## The Non-Negotiable First Rule: Never Self-Review

Per [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md)'s anti-patterns, the agent that produced a change is not its own independent check. A self-check before requesting review is still useful and expected — see [DOCUMENTATION-VALIDATION-CHECKLIST.md](../00-foundation/DOCUMENTATION-VALIDATION-CHECKLIST.md) — but it does not substitute for a human or a distinct agent reviewing the work per [DOCUMENTATION-REVIEW-GATES.md](../00-foundation/DOCUMENTATION-REVIEW-GATES.md)'s gate table.

## Running the Automated Checks

Run `npm run validate` (or the target repository's equivalent) and read the actual output — per [DOCUMENTATION-VALIDATION-WORKFLOW.md](../00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md), this catches missing or malformed front matter and broken relative links before any manual review starts. A reviewer who skips this step and goes straight to reading prose will miss exactly the mechanical errors the script exists to catch fast.

## Checking Links

Beyond what the automated link checker confirms (a link resolves to a real file), manually confirm: no guessed anchor links (per [CROSS-LINKING-STANDARD.md](../00-foundation/CROSS-LINKING-STANDARD.md) — an anchor guessed from a plausible heading name silently fails to navigate correctly and the script can't catch this), and no link pointing at a personal file, a different repository, or a URL that doesn't actually belong in this document.

## Checking Metadata

Confirm every required front matter field is present and accurate — not just present. [VALIDATION.md](../00-foundation/VALIDATION.md)'s script confirms structure (a `status` value is one of the allowed ones); it cannot confirm a `domain` value actually matches the document's folder, that an `id` is genuinely the next available number in its sequence, or that `related`/`dependencies` actually name real, still-existing documents. Per [DOCUMENTATION-QUALITY-STANDARD.md](../00-foundation/DOCUMENTATION-QUALITY-STANDARD.md)'s "Metadata" dimension, a passing script confirms structure, not accuracy.

## Identifying Unsupported Claims

Every factual claim in the document under review traces to one of: a committed spec, a real validation run, a cited knowledge record, or an explicitly labeled assumption. If none of those apply, it's an invented fact per [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md)'s "never invent requirements" and [AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md)'s "do not invent missing facts" — flag it rather than letting it pass because it reads plausibly. This applies to numbers, company facts, and claims about what "the standard already says" — verify the standard actually says that before repeating the claim.

## Flagging Risks Before Committing

- **Standards conflicts.** A requested change that contradicts an active standard is named explicitly, not silently resolved in either direction — see [VALIDATION-FAILURE-HANDLING.md](../00-foundation/VALIDATION-FAILURE-HANDLING.md).
- **Company-neutrality violations.** Scan new and touched content for any real company name that isn't inside a sanctioned exclusion-rule sentence — a scan run on a prior commit does not cover new content added since.
- **Duplication.** Content that restates what an existing standard already says, instead of linking to it — see [CROSS-LINKING-STANDARD.md](../00-foundation/CROSS-LINKING-STANDARD.md).
- **Retroactive rewriting.** A prior finding or audit result silently edited to look better than it was, instead of appended or superseded transparently — see [DOCUMENT-SUPERSESSION.md](../99-archive/DOCUMENT-SUPERSESSION.md).

## Reviewing Code Specifically

For code changes, [AI-CODE-REVIEW-CHECKLIST.md](AI-CODE-REVIEW-CHECKLIST.md)'s full checklist applies — requirements alignment, architecture, security, database, API, testing, and the rest. This playbook's claims-and-metadata focus is in addition to that checklist, not instead of it.

## What a Review Pass Reports

Per [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md)'s review points: did the work invent anything the documentation didn't already establish; were gaps flagged or silently filled; did an independent reviewer actually check it. A review that only says "looks good" without addressing these has not actually reviewed anything.

## Related Docs

[AI-CODE-REVIEW-CHECKLIST.md](AI-CODE-REVIEW-CHECKLIST.md) · [DOCUMENTATION-VALIDATION-WORKFLOW.md](../00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md) · [DOCUMENTATION-QUALITY-STANDARD.md](../00-foundation/DOCUMENTATION-QUALITY-STANDARD.md) · [AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md)
