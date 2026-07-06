---
id: DOC-TPL-001
title: Templates Library — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [templates, overview, library]
dependencies: [DOC-TPL-002]
related: [DOC-FND-002]
---

# Templates Library — Overview

`docs/10-templates/` holds every reusable, company-neutral template Startup OS provides. A template is copied out and filled in — the file here stays pristine (see [FOLDER-STRUCTURE.md](../00-foundation/FOLDER-STRUCTURE.md), "templates are copied out, never filled in place").

## Two Kinds of Templates in This Folder

1. **Artifact-specific templates** — the original set (`CAPABILITY-TEMPLATE.md`, `PRD-TEMPLATE.md`, `API-TEMPLATE.md`, `DATABASE-TEMPLATE.md`, `ADR-TEMPLATE.md`, `USER-STORY-TEMPLATE.md`, `SPRINT-TEMPLATE.md`, `CAPABILITY-FOLDER-TEMPLATE.md`). Each is the copy-and-fill instance of a specific governed document type, IDed `TPL-<subtype>-NNN` per [ID-STANDARD.md](../00-foundation/ID-STANDARD.md).
2. **Cross-domain working templates** — the library introduced in this commit (business strategy, product requirements quick-start, technical design, design brief, marketing campaign, sales opportunity, customer onboarding, incident review, investor update, AI task handoff). Each follows the uniform structure in [TEMPLATE-LIBRARY-STANDARD.md](TEMPLATE-LIBRARY-STANDARD.md) and is IDed `DOC-TPL-NNN`.

Both kinds are templates in the plain-English sense; they use two ID patterns because they were introduced at different points and serve slightly different roles — see [TEMPLATE-LIBRARY-STANDARD.md](TEMPLATE-LIBRARY-STANDARD.md) for exactly why, so it isn't a silent inconsistency.

## Current Templates

| File | ID | Governs / supports |
|------|-----|----------------------|
| [CAPABILITY-TEMPLATE.md](CAPABILITY-TEMPLATE.md) | TPL-CAP-001 | [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md) |
| [CAPABILITY-FOLDER-TEMPLATE.md](CAPABILITY-FOLDER-TEMPLATE.md) | TPL-CAP-002 | [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md) |
| [PRD-TEMPLATE.md](PRD-TEMPLATE.md) | TPL-PRD-001 | [PRD-STANDARD.md](../02-product/PRD-STANDARD.md) |
| [API-TEMPLATE.md](API-TEMPLATE.md) | TPL-API-001 | Engineering API specs |
| [DATABASE-TEMPLATE.md](DATABASE-TEMPLATE.md) | TPL-DB-001 | Engineering database specs |
| [ADR-TEMPLATE.md](ADR-TEMPLATE.md) | TPL-ADR-001 | [DECISIONS.md](../../DECISIONS.md) |
| [USER-STORY-TEMPLATE.md](USER-STORY-TEMPLATE.md) | TPL-US-001 | [USER-STORY-STANDARD.md](../02-product/USER-STORY-STANDARD.md) |
| [SPRINT-TEMPLATE.md](SPRINT-TEMPLATE.md) | TPL-SPR-001 | Sprint planning |
| [BUSINESS-STRATEGY-TEMPLATE.md](BUSINESS-STRATEGY-TEMPLATE.md) | DOC-TPL-003 | [COMPANY-STRATEGY.md](../01-business/COMPANY-STRATEGY.md) |
| [PRODUCT-REQUIREMENTS-TEMPLATE.md](PRODUCT-REQUIREMENTS-TEMPLATE.md) | DOC-TPL-004 | [PRD-STANDARD.md](../02-product/PRD-STANDARD.md) (quick-start; see note in the file) |
| [TECHNICAL-DESIGN-TEMPLATE.md](TECHNICAL-DESIGN-TEMPLATE.md) | DOC-TPL-005 | [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md) |
| [DESIGN-BRIEF-TEMPLATE.md](DESIGN-BRIEF-TEMPLATE.md) | DOC-TPL-006 | [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md) |
| [MARKETING-CAMPAIGN-TEMPLATE.md](MARKETING-CAMPAIGN-TEMPLATE.md) | DOC-TPL-007 | [CAMPAIGNS-AND-DEMAND-GENERATION.md](../06-marketing/CAMPAIGNS-AND-DEMAND-GENERATION.md) |
| [SALES-OPPORTUNITY-TEMPLATE.md](SALES-OPPORTUNITY-TEMPLATE.md) | DOC-TPL-008 | [SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md) |
| [CUSTOMER-ONBOARDING-TEMPLATE.md](CUSTOMER-ONBOARDING-TEMPLATE.md) | DOC-TPL-009 | [CUSTOMER-ONBOARDING.md](../13-customer-success/CUSTOMER-ONBOARDING.md) |
| [INCIDENT-REVIEW-TEMPLATE.md](INCIDENT-REVIEW-TEMPLATE.md) | DOC-TPL-010 | [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md), [SECURITY-INCIDENT-RESPONSE.md](../14-security-compliance/SECURITY-INCIDENT-RESPONSE.md) |
| [INVESTOR-UPDATE-TEMPLATE.md](INVESTOR-UPDATE-TEMPLATE.md) | DOC-TPL-011 | [INVESTOR-UPDATES.md](../08-investors/INVESTOR-UPDATES.md) |
| [AI-TASK-HANDOFF-TEMPLATE.md](AI-TASK-HANDOFF-TEMPLATE.md) | DOC-TPL-012 | [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md), [tasks/NEXT.md](../../tasks/NEXT.md) |

## Using a Template

Copy the file to where its target document belongs (per [FOLDER-STRUCTURE.md](../00-foundation/FOLDER-STRUCTURE.md)), assign a real ID (per [ID-STANDARD.md](../00-foundation/ID-STANDARD.md)), and fill in every placeholder — a copied template with a placeholder still in it is not finished.
