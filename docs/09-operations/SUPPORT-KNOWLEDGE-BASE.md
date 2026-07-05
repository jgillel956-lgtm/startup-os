---
id: DOC-OPS-009
title: Support Knowledge Base
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, knowledge-base, documentation, standard]
dependencies: [DOC-OPS-004]
related: [DOC-OPS-010, DOC-FND-005]
---

# Support Knowledge Base

Defines how internal and external support documentation is created, maintained, reviewed, versioned, and retired. No specific knowledge base platform is assumed.

## Internal vs. External

- **Internal knowledge** — how to resolve specific issue types, known workarounds, escalation contacts. Written for support staff (or an AI agent working support).
- **External knowledge** — customer-facing help articles, FAQs. Written for customers, following [CUSTOMER-COMMUNICATION-STANDARDS.md](CUSTOMER-COMMUNICATION-STANDARDS.md).

Both follow the general documentation principles in [DOCUMENT-STANDARDS.md](../00-foundation/DOCUMENT-STANDARDS.md): lead with the answer, be specific, use placeholders instead of real customer data in examples.

## When an Article Gets Created

A knowledge base article is created when: the same question or issue has come up more than once, a known workaround exists for something not yet fixed, or a new capability ships with support-relevant behavior. A one-off, unlikely-to-recur issue does not need an article — that's over-documentation for its own sake.

## Maintenance

- An article is reviewed whenever the behavior it describes changes — the same discipline as [DOCUMENT-STANDARDS.md](../00-foundation/DOCUMENT-STANDARDS.md)'s change-coupling rule, applied to support content: if engineering ships a change that makes an article wrong, updating the article is part of that change, not a separate cleanup task.
- Articles are periodically spot-checked against current behavior, not just updated reactively when someone notices they're stale.

## Versioning

Support articles don't need the full Startup OS ID/front-matter scheme unless the company chooses to manage them as Markdown in this repository structure — if they do, they follow [METADATA-STANDARD.md](../00-foundation/METADATA-STANDARD.md) like any other document. If managed in an external help-center tool, the tool's own revision history substitutes, but the same discipline (dated updates, clear ownership) applies.

## Review

- A new or substantially changed article gets a second read before publishing externally — clarity and accuracy matter more here than almost anywhere else, since customers act on it directly without a human in the loop.
- Internal knowledge gets a lighter review bar but the same accuracy requirement — wrong internal guidance produces wrong customer answers downstream.

## Retirement

An article is retired (not silently deleted) when the behavior it describes no longer exists — replaced with a note pointing to current guidance, or moved to an archive, mirroring [Constitution Article VII](../../CONSTITUTION.md) ("nothing is deleted, things are archived") applied to support content.

## Anti-Patterns

- **Write-once articles.** Published and never revisited, quietly going stale as the product changes.
- **Duplicate articles.** The same question answered in three places with three slightly different answers, because nobody checked for an existing one first.
- **Internal-only fixes for external questions.** Solving the same customer-facing question in Slack/tickets repeatedly instead of ever writing the external article that would deflect it.
