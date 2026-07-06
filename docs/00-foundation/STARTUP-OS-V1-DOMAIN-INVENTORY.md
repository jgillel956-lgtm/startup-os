---
id: DOC-FND-037
title: Startup OS v1 Domain Inventory
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: foundation
tags: [foundation, inventory, v1, domains]
dependencies: [DOC-FND-013]
related: [DOC-FND-036, DOC-FND-038]
---

# Startup OS v1 Domain Inventory

A literal manifest of what exists in each Startup OS domain as of this writing — file counts, the operating-system standard, and the metrics document. [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md) answers "what does this domain own, and when do I use it"; this document answers "what's actually in the folder right now." Counts are a snapshot — re-count against the actual repository rather than trusting this table as it ages, the same discipline [STARTUP-OS-V1-READINESS-REVIEW.md](STARTUP-OS-V1-READINESS-REVIEW.md) applies to itself.

## Operating-System Domains

| # | Domain | Folder | Files | Operating-system doc | Metrics doc |
|---|--------|--------|-------|----------------------|-------------|
| 00 | Foundation | `docs/00-foundation/` | 38 | — (this domain defines standards, not an operating system) | — |
| 01 | Business | `docs/01-business/` | 12 | [BUSINESS-OPERATING-SYSTEM.md](../01-business/BUSINESS-OPERATING-SYSTEM.md) | [BUSINESS-METRICS.md](../01-business/BUSINESS-METRICS.md) |
| 02 | Product | `docs/02-product/` | 9 | [PRODUCT-OPERATING-SYSTEM.md](../02-product/PRODUCT-OPERATING-SYSTEM.md) | — (tracked via [PRODUCT-REVIEW-CHECKLIST.md](../02-product/PRODUCT-REVIEW-CHECKLIST.md)) |
| 03 | Engineering | `docs/03-engineering/` | 12 | [ENGINEERING-OPERATING-SYSTEM.md](../03-engineering/ENGINEERING-OPERATING-SYSTEM.md) | [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) |
| 04 | AI | `docs/04-ai/` | 12 | [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) | — (governed by rules, not a metrics doc) |
| 05 | Design | `docs/05-design/` | 12 | [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md) | [DESIGN-METRICS.md](../05-design/DESIGN-METRICS.md) |
| 06 | Marketing | `docs/06-marketing/` | 12 | [MARKETING-OPERATING-SYSTEM.md](../06-marketing/MARKETING-OPERATING-SYSTEM.md) | [MARKETING-METRICS.md](../06-marketing/MARKETING-METRICS.md) |
| 07 | Sales | `docs/07-sales/` | 12 | [SALES-OPERATING-SYSTEM.md](../07-sales/SALES-OPERATING-SYSTEM.md) | [SALES-METRICS.md](../07-sales/SALES-METRICS.md) |
| 08 | Investors | `docs/08-investors/` | 12 | — (see [README.md](../08-investors/README.md) for this domain's structure) | [INVESTOR-METRICS.md](../08-investors/INVESTOR-METRICS.md) |
| 09 | Operations | `docs/09-operations/` | 12 | [OPERATIONS-OPERATING-SYSTEM.md](../09-operations/OPERATIONS-OPERATING-SYSTEM.md) | [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md) |
| 13 | Customer Success | `docs/13-customer-success/` | 12 | [CUSTOMER-SUCCESS-OPERATING-SYSTEM.md](../13-customer-success/CUSTOMER-SUCCESS-OPERATING-SYSTEM.md) | [CUSTOMER-SUCCESS-METRICS.md](../13-customer-success/CUSTOMER-SUCCESS-METRICS.md) |
| 14 | Security & Compliance | `docs/14-security-compliance/` | 12 | — (see [README.md](../14-security-compliance/README.md) for this domain's structure) | — |

## Cross-Cutting Libraries

| # | Library | Folder | Files | What it supports |
|---|---------|--------|-------|-------------------|
| 10 | Templates | `docs/10-templates/` | 20 | Copy-and-fill artifacts for every operating-system domain — see [README.md](../10-templates/README.md) for the full list and which standard each governs |
| 11 | Patterns | `docs/11-patterns/` | 12 | Reusable, adaptable approaches extracted from real cross-domain instances |
| 12 | Knowledge | `docs/12-knowledge/` | 12 | Research findings, learnings, and external facts that inform decisions |

## Historical Record

| # | Domain | Folder | Files | Purpose |
|---|--------|--------|-------|---------|
| 99 | Archive | `docs/99-archive/` | 12 | Retired and superseded material, preserved and clearly marked — never a place to look for current guidance |

## Reading This Table

- A domain with no operating-system doc listed either governs by rules rather than a single named operating-system document (AI, Foundation) or its structure is fully described in its own `README.md` (Investors, Security & Compliance) — this is not a gap, just a different documentation shape for a domain that doesn't need the same operating-cadence framing as the others.
- File counts include each domain's own `README.md`.
- For what each domain is actually *for* and when to reach for it, see [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md); for how domains connect across a real workflow, see [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md).

## Related Docs

[STARTUP-OS-MAP.md](STARTUP-OS-MAP.md) · [STARTUP-OS-V1-RELEASE-NOTES.md](STARTUP-OS-V1-RELEASE-NOTES.md) · [STARTUP-OS-V1-USAGE-GUIDE.md](STARTUP-OS-V1-USAGE-GUIDE.md)
