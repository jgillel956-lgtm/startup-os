---
id: DOC-FND-032
title: Example Company Implementation Guide
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: foundation
tags: [foundation, implementation, guide, onboarding]
dependencies: [DOC-FND-013, DOC-FND-016]
related: [DOC-FND-033, DOC-FND-034, DOC-FND-035, DOC-BIZ-001, DOC-PRD-001, DOC-ENG-001, DOC-DSG-001, DOC-MKT-001, DOC-SLS-001, DOC-OPS-001, DOC-CS-001, DOC-TPL-001]
---

# Example Company Implementation Guide

A practical, step-by-step walk-through of applying Startup OS to a brand-new company, product, or portfolio project — from a bare idea to a working set of documents across every domain the company actually needs on day one. This is company-neutral: no real company, product, or market is described here, only the sequence and the standards each step draws on.

## How This Differs From the Adoption Guide

[STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md) answers *when* to bring in each domain as a company matures (phase 1 through 5, over months or years). This guide answers a narrower question: given a brand-new idea today, what is the concrete first pass through the domains that are relevant immediately? Use the adoption guide to decide what to skip for now; use this guide for the mechanics of the first pass itself. Neither restates the other.

## Before Starting

Read [AI_CONTEXT.md](../../AI_CONTEXT.md) and this domain's [README.md](README.md) first, per [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md). If a company-specific implementation is being built in its own repository (per [README.md](../../README.md)'s "Relationship to Future Company Repositories"), confirm that repository — not this one — is where the filled-in documents belong. Startup OS itself stays company-neutral.

## The Ten-Step Flow

### 1. Define the Company Idea

Write down, in a sentence or two, what the company does and for whom. Startup OS does not mandate a specific artifact for this — it is the seed that [COMPANY-STRATEGY.md](../01-business/COMPANY-STRATEGY.md) formalizes in the next step. If this sentence can't be written yet, none of the later steps have a foundation to build on — stop here first.

### 2. Create Business Strategy

Fill in [docs/01-business/COMPANY-STRATEGY.md](../01-business/COMPANY-STRATEGY.md) using [BUSINESS-STRATEGY-TEMPLATE.md](../10-templates/BUSINESS-STRATEGY-TEMPLATE.md). Establish [BUSINESS-MODEL.md](../01-business/BUSINESS-MODEL.md) and name early [GOALS-AND-OKRS.md](../01-business/GOALS-AND-OKRS.md) — even a short first version. This is the document every later domain traces back to.

### 3. Define Customer and Market

Fill in [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md). Marketing's [IDEAL-CUSTOMER-PROFILE.md](../06-marketing/IDEAL-CUSTOMER-PROFILE.md) refines this later with real research — this step just establishes the target market business strategy is built around, so product and marketing don't independently pick different customers to chase.

### 4. Define Product Capabilities

Fill in [docs/02-product/CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md) for the first capability, using [CAPABILITY-TEMPLATE.md](../10-templates/CAPABILITY-TEMPLATE.md) or [CAPABILITY-FOLDER-TEMPLATE.md](../10-templates/CAPABILITY-FOLDER-TEMPLATE.md). A capability traces to the market/customer need named in step 3 — a capability with no traceable customer need is a feature idea, not yet a documented capability per [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md).

### 5. Create Product Requirements

Write the first PRD per [PRD-STANDARD.md](../02-product/PRD-STANDARD.md), using [PRD-TEMPLATE.md](../10-templates/PRD-TEMPLATE.md) (or the quick-start [PRODUCT-REQUIREMENTS-TEMPLATE.md](../10-templates/PRODUCT-REQUIREMENTS-TEMPLATE.md) for a first pass). Acceptance criteria follow [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md) — engineering does not accept a PRD without them.

### 6. Create Design and UX Flows

Once the PRD exists, design work follows [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md): start with [UX-RESEARCH.md](../05-design/UX-RESEARCH.md) and [EXPERIENCE-MAPPING.md](../05-design/EXPERIENCE-MAPPING.md), use [DESIGN-BRIEF-TEMPLATE.md](../10-templates/DESIGN-BRIEF-TEMPLATE.md) to scope the work, and produce [WIREFRAMES-AND-PROTOTYPES.md](../05-design/WIREFRAMES-AND-PROTOTYPES.md)-conformant artifacts before [DESIGN-HANDOFF.md](../05-design/DESIGN-HANDOFF.md) to engineering.

### 7. Create Technical Plan

Engineering writes a technical design per [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md), using [TECHNICAL-DESIGN-TEMPLATE.md](../10-templates/TECHNICAL-DESIGN-TEMPLATE.md). Any decision with lasting consequences becomes an ADR per [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) rather than an undocumented choice. Implementation then follows [ENGINEERING-LIFECYCLE.md](../03-engineering/ENGINEERING-LIFECYCLE.md) through review, testing, and release.

### 8. Prepare Marketing and Sales Basics

Marketing starts from [POSITIONING-AND-MESSAGING.md](../06-marketing/POSITIONING-AND-MESSAGING.md) — built on the real capability from step 4, never on what sounds compelling. Use [MARKETING-CAMPAIGN-TEMPLATE.md](../10-templates/MARKETING-CAMPAIGN-TEMPLATE.md) for the first campaign. Sales stands up [SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md) and [IDEAL-CUSTOMER-AND-QUALIFICATION.md](../07-sales/IDEAL-CUSTOMER-AND-QUALIFICATION.md), using [SALES-OPPORTUNITY-TEMPLATE.md](../10-templates/SALES-OPPORTUNITY-TEMPLATE.md) for the first real opportunity. [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md) defines the boundary between the two from day one.

### 9. Prepare Onboarding and Operations

Before the first customer closes, stand up [CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md) and [SLA-AND-RESPONSE-STANDARDS.md](../09-operations/SLA-AND-RESPONSE-STANDARDS.md) so there's somewhere for the first support request to go. Write the onboarding flow per [CUSTOMER-ONBOARDING.md](../13-customer-success/CUSTOMER-ONBOARDING.md), using [CUSTOMER-ONBOARDING-TEMPLATE.md](../10-templates/CUSTOMER-ONBOARDING-TEMPLATE.md), and confirm [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) actually transfers full context, not just a signed contract.

### 10. Define Metrics and Review Cadence

Every domain has its own metrics doc — [BUSINESS-METRICS.md](../01-business/BUSINESS-METRICS.md), [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md), [DESIGN-METRICS.md](../05-design/DESIGN-METRICS.md), [MARKETING-METRICS.md](../06-marketing/MARKETING-METRICS.md), [SALES-METRICS.md](../07-sales/SALES-METRICS.md), [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md), [CUSTOMER-SUCCESS-METRICS.md](../13-customer-success/CUSTOMER-SUCCESS-METRICS.md). Set the review rhythm in [OPERATING-CADENCE.md](../01-business/OPERATING-CADENCE.md) and [STRATEGIC-REVIEW.md](../01-business/STRATEGIC-REVIEW.md) — a metric nobody reviews on a stated cadence isn't actually being managed.

## What This Guide Does Not Cover

Investor and fundraising documentation ([docs/08-investors/](../08-investors/README.md)) and security/compliance ([docs/14-security-compliance/](../14-security-compliance/README.md)) are real domains but not part of every company's first pass — bring them in per [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md)'s phase 3 and phase 5 triggers. Patterns and knowledge ([docs/11-patterns/](../11-patterns/README.md), [docs/12-knowledge/](../12-knowledge/README.md)) accumulate from real work across all ten steps rather than being "set up" at a specific step.

## Practical Companion Documents

- [NEW-COMPANY-SETUP-CHECKLIST.md](NEW-COMPANY-SETUP-CHECKLIST.md) — this same flow as a check-off list.
- [STARTUP-OS-IMPLEMENTATION-PATHS.md](STARTUP-OS-IMPLEMENTATION-PATHS.md) — how the order above shifts depending on what kind of company this is.
- [COMPANY-OPERATING-PACKAGE.md](COMPANY-OPERATING-PACKAGE.md) — the minimum set of filled-in documents a company needs to call itself operational.

## Guidance for AI Assistants

- **Use active docs as the source of truth.** Follow the standard each step links to, not a remembered summary of it — standards are versioned and change.
- **Do not invent company facts.** A real market size, a real competitor name, a real pricing number — if the human hasn't supplied it, it doesn't exist yet. Ask, don't guess.
- **State assumptions clearly.** If a step is completed with a placeholder or a reasonable default (e.g., a generic OKR while real targets are pending), say so explicitly in the document rather than presenting it as decided fact.
- **Use templates where they exist.** Every step above names one — filling a blank page from scratch when a template exists produces inconsistent documents.
- **Flag missing inputs instead of filling gaps.** If step 3's customer definition doesn't exist yet, step 4's capability work should stop and flag it, not proceed on a guessed customer.

## Related Docs

[STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md) · [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md) · [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md) · [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md)
