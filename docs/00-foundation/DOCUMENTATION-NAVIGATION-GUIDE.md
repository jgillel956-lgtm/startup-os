---
id: DOC-FND-015
title: Documentation Navigation Guide
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: foundation
tags: [foundation, navigation, ai, guide]
dependencies: [DOC-FND-013]
related: [DOC-FND-014, DOC-AI-002, DOC-FND-018]
---

# Documentation Navigation Guide

Where to start, depending on what you're trying to do — for humans and AI assistants alike. If your situation isn't listed, start from [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md) and find the closest matching domain.

## "I'm Trying To..."

| Goal | Start here |
|------|------------|
| Understand what Startup OS is at all | [README.md](../../README.md) |
| Understand the rules I must follow as an AI agent | [AI_CONTEXT.md](../../AI_CONTEXT.md) → [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) |
| Add or change a company strategy | [docs/01-business/COMPANY-STRATEGY.md](../01-business/COMPANY-STRATEGY.md) |
| Define a new product capability | [docs/02-product/CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md) |
| Write requirements for a feature | [docs/02-product/PRD-STANDARD.md](../02-product/PRD-STANDARD.md) |
| Design a technical solution | [docs/03-engineering/TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md) |
| Design the user experience | [docs/05-design/DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md) |
| Position or promote the product | [docs/06-marketing/POSITIONING-AND-MESSAGING.md](../06-marketing/POSITIONING-AND-MESSAGING.md) |
| Work a sales opportunity | [docs/07-sales/SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md) |
| Prepare for a fundraise | [docs/08-investors/FUNDRAISING-STRATEGY.md](../08-investors/FUNDRAISING-STRATEGY.md) |
| Handle a customer support issue | [docs/09-operations/SUPPORT-INTAKE-AND-TRIAGE.md](../09-operations/SUPPORT-INTAKE-AND-TRIAGE.md) |
| Onboard a new customer | [docs/13-customer-success/CUSTOMER-ONBOARDING.md](../13-customer-success/CUSTOMER-ONBOARDING.md) |
| Check a security or compliance question | [docs/14-security-compliance/README.md](../14-security-compliance/README.md) |
| Copy a fillable document | [docs/10-templates/README.md](../10-templates/README.md) |
| Find a reusable approach instead of a mandated rule | [docs/11-patterns/README.md](../11-patterns/README.md) |
| Record or find a research finding | [docs/12-knowledge/README.md](../12-knowledge/README.md) |
| Understand why something old is the way it is | [docs/99-archive/README.md](../99-archive/README.md) |
| Hand off a task to a coding agent | [docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md) |
| Understand how a cross-domain workflow moves | [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md) |
| Adopt Startup OS for a new company | [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md) |
| Check a document before committing it | [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) |
| Cross-link a new document correctly | [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) |

## Rules That Apply No Matter Where You Start

These three hold everywhere in this repository, regardless of which domain you're working in:

### 1. Active Docs Are Preferred Over Archived Docs

A document with `status: archived` describes what *used to be* true or required — never current guidance (see [STATUS-STANDARD.md](STATUS-STANDARD.md), [docs/99-archive/README.md](../99-archive/README.md)). When an active document and an archived one seem to address the same question, the active one governs. Check whether an archived document has a stated successor before relying on it even for historical context.

### 2. Never Invent Missing Facts

If the documentation doesn't state something, it doesn't exist yet — for a human, that's a prompt to go write it; for an AI agent, that's a prompt to flag the gap rather than fill it with a plausible guess (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), "never invent requirements," and [AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md), "do not invent missing facts").

### 3. Repository Standards Win When Instructions Conflict

If a task's literal instruction (a specific folder, a specific ID, a specific approach) conflicts with an active repository standard, the standard wins — the conflict is flagged clearly, not silently resolved in favor of whichever instruction arrived most recently. This is the same discipline every prior commit in this repository has applied when a requested ID or folder didn't match [ID-STANDARD.md](ID-STANDARD.md) or [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md).

## For AI Assistants Specifically

Read [AI_CONTEXT.md](../../AI_CONTEXT.md) first, every session, before anything else in this table. This guide helps you find the right domain quickly; it does not replace reading that domain's own standard once you're there.
