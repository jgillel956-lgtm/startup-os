---
id: DOC-FND-016
title: Startup OS Adoption Guide
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-06
version: 1.2.0
domain: foundation
tags: [foundation, adoption, guide]
dependencies: [DOC-FND-013]
related: [DOC-FND-015, DOC-BIZ-002, DOC-FND-032, DOC-AI-007]
---

# Startup OS Adoption Guide

How a new startup, founder, product team, or AI assistant should adopt Startup OS gradually — without trying to use all sixteen domains at once, which is how a framework this size gets abandoned in week one. For a concrete, step-by-step first pass through the domains relevant right now, see [EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md) — this guide covers *when* over time; that one covers *how* for the first pass itself.

## The Core Idea: Adopt in the Order You'll Actually Need It

Every domain in Startup OS is real and eventually useful, but a pre-revenue, pre-team company needs almost none of it on day one. Adopt in the order the company's own lifecycle actually forces the need — not in folder-number order, and not all at once.

## Phase 1 — Before You've Built Anything

Start with:

- [`docs/00-foundation/`](README.md) — the standards everything else depends on; read [AI_CONTEXT.md](../../AI_CONTEXT.md) and this map first.
- [`docs/01-business/COMPANY-STRATEGY.md`](../01-business/COMPANY-STRATEGY.md) — even a one-page version.
- [`docs/02-product/CAPABILITY-MODEL.md`](../02-product/CAPABILITY-MODEL.md) and [`PRD-STANDARD.md`](../02-product/PRD-STANDARD.md) — you need these the moment you write down what you're building.

Skip everything else for now. A company with no customers doesn't need a customer success domain yet.

## Phase 2 — Once You're Building

Add:

- [`docs/03-engineering/`](../03-engineering/README.md) — technical design and code review discipline, once there's code to review.
- [`docs/05-design/`](../05-design/README.md) — once the product has a user-facing surface worth designing deliberately.
- [`docs/10-templates/`](../10-templates/README.md) — start reaching for templates instead of formatting documents from scratch.

## Phase 3 — Once You Have Something to Sell

Add:

- [`docs/06-marketing/`](../06-marketing/README.md) — positioning and messaging, once there's something worth positioning.
- [`docs/07-sales/`](../07-sales/README.md) — pipeline discipline, once conversations with real prospects start.
- [`docs/14-security-compliance/`](../14-security-compliance/README.md) — earlier if handling sensitive data from day one; otherwise once a customer or prospect first asks a security question.

## Phase 4 — Once You Have Customers

Add:

- [`docs/09-operations/`](../09-operations/README.md) — support model, once there are support requests to triage.
- [`docs/13-customer-success/`](../13-customer-success/README.md) — onboarding and health tracking, once there are accounts to retain.

## Phase 5 — Once You're Raising or Reporting

Add:

- [`docs/08-investors/`](../08-investors/README.md) — fundraising strategy and materials, once you're actually preparing to raise.

## Ongoing, Regardless of Phase

- [`docs/11-patterns/`](../11-patterns/README.md) and [`docs/12-knowledge/`](../12-knowledge/README.md) — start capturing real findings and recurring approaches as soon as they show up, even informally; formalize structure once volume warrants it.
- [`docs/99-archive/`](../99-archive/README.md) — applies from the very first document you ever retire, in every phase.

## What Not to Do

- **Don't stand up all sixteen domains on day one.** Most of it will sit empty and unmaintained, and unmaintained documentation is worse than no documentation — it looks authoritative while being wrong.
- **Don't skip Foundation.** Every other domain assumes the standards in `docs/00-foundation/` are already in force; skipping it doesn't simplify adoption, it just means every later domain gets built inconsistently.
- **Don't wait for a "complete" version before using a domain.** A one-page `COMPANY-STRATEGY.md` used and revised beats a comprehensive one that never gets written because it felt too big to start.

## For AI Assistants Helping With Adoption

When a company asks an AI agent to "set up Startup OS," check which phase actually fits their current stage per this guide — standing up unused domains on request, without checking real need, is exactly the over-adoption this guide exists to prevent. Recommend the matching phase, and let the company ask for more. For how to actually run that work with ChatGPT, Claude Code, or Cursor once the phase is decided, see [AI-USAGE-PLAYBOOKS.md](../04-ai/AI-USAGE-PLAYBOOKS.md).
