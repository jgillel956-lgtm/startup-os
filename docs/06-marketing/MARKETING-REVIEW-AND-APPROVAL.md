---
id: DOC-MKT-011
title: Marketing Review and Approval
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, review, compliance, standard]
dependencies: [DOC-MKT-002]
related: [DOC-MKT-005, DOC-MKT-009, DOC-AI-006]
---

# Marketing Review and Approval

Defines review gates for claims, proof points, compliance-sensitive statements, customer references, screenshots, pricing, security language, and public-facing materials generally. This is marketing's equivalent of [code review](../03-engineering/BRANCHING-AND-CODE-REVIEW.md) and [product review](../02-product/PRODUCT-REVIEW-CHECKLIST.md) — nothing customer-facing ships without an independent check.

## What Requires Review

Anything published externally: website copy, landing pages, content, campaign assets, competitive material, and anything containing a claim, a number, a customer reference, a screenshot, a price, or a security/compliance statement.

## Review Checklist

- [ ] **Claims** trace to a documented capability or verified fact ([POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md) proof points) — nothing is asserted that isn't currently true.
- [ ] **Proof points** are current — no stale metric, outdated customer result, or superseded fact.
- [ ] **Compliance-sensitive statements** (data handling, security, regulatory claims) are confirmed with whoever has the authority to make them — marketing does not independently assert a compliance status.
- [ ] **Customer references** (logos, quotes, case studies) have actual, current permission to use.
- [ ] **Screenshots** reflect the current, real product — not a mockup, a deprecated version, or placeholder/fake data (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) on never presenting fabricated content as real).
- [ ] **Pricing** matches what's actually currently offered.
- [ ] **Security language** is verified against what engineering has actually implemented and can stand behind ([AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) security section is the technical-truth source; marketing does not independently upgrade a security claim to sound stronger).
- [ ] **Brand and voice** consistency ([BRAND-AND-VOICE.md](BRAND-AND-VOICE.md)).
- [ ] **Competitive fairness** ([COMPETITIVE-MARKETING.md](COMPETITIVE-MARKETING.md)) for anything mentioning alternatives.

## Escalation

A claim that can't be verified, a compliance statement nobody can confirm, or a customer reference without confirmed permission does not publish while unresolved — it escalates to whoever owns that fact (engineering for technical/security claims, leadership for compliance, the account owner for customer permission) rather than being softened into ambiguity and shipped anyway.

## AI-Assisted Content Review

Content drafted or assisted by an AI agent goes through this same review — an AI agent does not independently verify its own claims as true; a human confirms anything factual before publish (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md), "never invent requirements" extended here to "never invent claims").

## Required Artifacts

A review record per published piece: what was checked, who reviewed it, and any escalations raised and resolved.

## Ownership

Whoever holds marketing review authority (founder or delegate) approves; anyone creating content applies the checklist as a self-check before submitting for review, not as the reviewer's first pass.

## Anti-Patterns

- **Review as rubber stamp.** Approving without actually checking each item, especially under launch-deadline pressure.
- **Retroactive-only review.** Catching a bad claim after it's been live for months instead of before publish.
- **Escalation avoidance.** Softening an unverifiable claim into vague language and publishing it anyway, instead of resolving whether it's true.
