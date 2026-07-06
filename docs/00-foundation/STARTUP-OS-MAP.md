---
id: DOC-FND-013
title: Startup OS Map
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-06
version: 1.2.0
domain: foundation
tags: [foundation, map, navigation, overview]
dependencies: [DOC-FND-002]
related: [DOC-FND-014, DOC-FND-015, DOC-FND-016, DOC-FND-028, DOC-FND-029]
---

# Startup OS Map

A high-level map of every Startup OS domain: what each one owns, and when to reach for its folder. Read this before [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md) (how domains connect across a workflow) or [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md) (where to start for a specific task).

## The Full Domain Set

| # | Folder | Domain | Owns | Start here |
|---|--------|--------|------|------------|
| 00 | `docs/00-foundation/` | Foundation | Standards governing every other domain — structure, naming, metadata, IDs, status, git, validation, AI task handoff | [README.md](README.md) |
| 01 | `docs/01-business/` | Business | Company strategy, business model, goals, operating cadence, decisions, risk | [README.md](../01-business/README.md) |
| 02 | `docs/02-product/` | Product | Capabilities, PRDs, user stories, acceptance criteria, prioritization | [README.md](../02-product/README.md) |
| 03 | `docs/03-engineering/` | Engineering | Technical design, ADRs, code review, testing, release, incidents, debt | [README.md](../03-engineering/README.md) |
| 04 | `docs/04-ai/` | AI | Rules and roles for AI agents working in this repository | [README.md](../04-ai/README.md) |
| 05 | `docs/05-design/` | Design | UX research, experience mapping, design system, handoff, design QA | [README.md](../05-design/README.md) |
| 06 | `docs/06-marketing/` | Marketing | Positioning, ICP, brand, website, content, campaigns, competitive narrative | [README.md](../06-marketing/README.md) |
| 07 | `docs/07-sales/` | Sales | Qualification, pipeline, discovery, proposals, objections, close, handoff | [README.md](../07-sales/README.md) |
| 08 | `docs/08-investors/` | Investors | Fundraising strategy, pitch, data room, diligence, updates, governance | [README.md](../08-investors/README.md) |
| 09 | `docs/09-operations/` | Operations | Customer support, SLAs, triage, escalation, incident communication, runbooks | [README.md](../09-operations/README.md) |
| 10 | `docs/10-templates/` | Templates | Copy-and-fill artifacts for every domain | [README.md](../10-templates/README.md) |
| 11 | `docs/11-patterns/` | Patterns | Reusable, adaptable approaches extracted from real cross-domain instances | [README.md](../11-patterns/README.md) |
| 12 | `docs/12-knowledge/` | Knowledge | Research findings, learnings, external facts that inform decisions | [README.md](../12-knowledge/README.md) |
| 13 | `docs/13-customer-success/` | Customer Success | Onboarding, adoption, account health, renewals, expansion, churn | [README.md](../13-customer-success/README.md) |
| 14 | `docs/14-security-compliance/` | Security & Compliance | Security principles, data protection, access, compliance, trust claims | [README.md](../14-security-compliance/README.md) |
| 99 | `docs/99-archive/` | Archive | Retired and superseded material, preserved and clearly marked | [README.md](../99-archive/README.md) |

Also relevant, outside `docs/`: [`tasks/`](../../tasks/README.md) (AI task handoff), [`prompts/`](../../prompts/README.md) (reusable AI prompts), [`.github/ISSUE_TEMPLATE/`](../../.github/ISSUE_TEMPLATE/bug-report.md) and [`.github/PULL_REQUEST_TEMPLATE/`](../../.github/PULL_REQUEST_TEMPLATE/pull_request_template.md) (issue/PR templates).

## The Shape Behind the Numbers

Domains 00–09 and 13–14 are **operating-system domains** — each owns a slice of how the company actually runs, with its own standards, ownership boundary, and metrics. Domains 10–12 are **cross-cutting libraries** — templates, patterns, and knowledge that support every operating-system domain rather than owning a slice of the business themselves. Domain 99 is the **historical record** for anything retired from either category. This document (`docs/00-foundation/`) and this map are how the whole set stays legible as one system rather than sixteen unrelated folders.

## When to Use Each Folder

- **Need a binding rule for how something must be done?** → the relevant operating-system domain's own standard.
- **Need a fillable artifact to copy?** → [`docs/10-templates/`](../10-templates/README.md).
- **Need a reusable approach, not a mandated one?** → [`docs/11-patterns/`](../11-patterns/README.md).
- **Need a finding or fact that isn't a rule?** → [`docs/12-knowledge/`](../12-knowledge/README.md).
- **Need to understand why something is the way it is, historically?** → [`docs/99-archive/`](../99-archive/README.md).
- **Not sure which of the above?** → [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md).

## Is This Map Itself Complete?

Not entirely — see [STARTUP-OS-V1-READINESS-REVIEW.md](STARTUP-OS-V1-READINESS-REVIEW.md) for an honest audit. As of Commit 0025, this map's own `docs/09-operations/` row and [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)'s matching row both describe the domain accurately (customer support and incident operations only); the remaining open gaps are onboarding-documentation currency and real second-repository adoption — see [STARTUP-OS-V1-GAP-ANALYSIS.md](STARTUP-OS-V1-GAP-ANALYSIS.md).

## Avoiding Duplication

Every domain's own standard is the single source of truth for its area — this map summarizes and links, it never restates. If something here appears to contradict a domain's own standard, the domain's own standard is correct; report the mismatch as a documentation bug rather than trusting this map over it.
