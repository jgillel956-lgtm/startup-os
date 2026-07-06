---
id: DOC-PAT-001
title: Patterns Library — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, overview, library]
dependencies: [DOC-PAT-002]
related: [DOC-TPL-001, DOC-BIZ-002]
---

# Patterns Library — Overview

`docs/11-patterns/` holds reusable **operating patterns** — recurring shapes for solving common problems across business, product, engineering, design, marketing, sales, operations, investors, customer success, security/compliance, templates, and AI task workflows.

## Standards vs. Templates vs. Patterns

Startup OS uses all three, and they are not interchangeable:

| | Standard | Template | Pattern |
|---|----------|----------|---------|
| **What it is** | A binding rule: required behavior or structure | A fillable, copy-and-paste artifact instance | A reusable approach to a recurring problem |
| **Compliance** | Must follow — validated, reviewed against | Copy it, fill every section, no skipping | Adapt it — take what fits, leave what doesn't |
| **Example** | [PRD-STANDARD.md](../02-product/PRD-STANDARD.md) — every PRD must have these sections | [PRD-TEMPLATE.md](../10-templates/PRD-TEMPLATE.md) — the actual document you copy | [DECISION-MAKING-PATTERNS.md](DECISION-MAKING-PATTERNS.md) — a shape for making a hard call, used across many domains |
| **Where it lives** | Each domain's own folder (`docs/02-product/`, `docs/03-engineering/`, ...) | `docs/10-templates/` | `docs/11-patterns/` |

A pattern is not enforced — it's offered. If a domain's own standard already prescribes a specific approach, that standard wins; a pattern here is what to reach for when a domain hasn't already specified one, or when you're designing a new domain and want to start from something proven rather than from nothing.

## Documents

| Document | Pattern for |
|----------|----------------|
| [PATTERN-LIBRARY-STANDARD.md](PATTERN-LIBRARY-STANDARD.md) | The required structure every pattern document follows |
| [OPERATING-CADENCE-PATTERNS.md](OPERATING-CADENCE-PATTERNS.md) | Recurring review rhythms |
| [DECISION-MAKING-PATTERNS.md](DECISION-MAKING-PATTERNS.md) | Making and documenting a hard call |
| [HANDOFF-PATTERNS.md](HANDOFF-PATTERNS.md) | Transferring context between owners without loss |
| [REVIEW-GATE-PATTERNS.md](REVIEW-GATE-PATTERNS.md) | Checking something before it ships or publishes |
| [METRICS-PATTERNS.md](METRICS-PATTERNS.md) | Measuring a system's health without gaming it |
| [RISK-AND-ESCALATION-PATTERNS.md](RISK-AND-ESCALATION-PATTERNS.md) | Naming risk and routing it to the right owner |
| [COMMUNICATION-PATTERNS.md](COMMUNICATION-PATTERNS.md) | Telling someone the truth, clearly, under pressure |
| [FEEDBACK-LOOP-PATTERNS.md](FEEDBACK-LOOP-PATTERNS.md) | Getting signal from one domain back to the one that can act on it |
| [DOCUMENTATION-PATTERNS.md](DOCUMENTATION-PATTERNS.md) | Keeping a document a source of truth instead of stale |
| [AI-ASSISTED-WORKFLOW-PATTERNS.md](AI-ASSISTED-WORKFLOW-PATTERNS.md) | Using an AI agent inside an operating pattern safely |

## Where These Patterns Already Show Up

Every pattern in this library was extracted from something already working across two or more existing Startup OS domains — cadence in [OPERATING-CADENCE.md](../01-business/OPERATING-CADENCE.md) and [BUSINESS-OPERATING-SYSTEM.md](../01-business/BUSINESS-OPERATING-SYSTEM.md), handoffs in [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) and [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md), review gates in [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md) and [SECURITY-REVIEWS.md](../14-security-compliance/SECURITY-REVIEWS.md), and so on. This library doesn't invent new process — it names the shape that already repeats, so the next domain (or the next company built on Startup OS) doesn't have to rediscover it.

## Using a Pattern

Read the pattern, check its example use cases against your actual situation, and adapt — don't copy verbatim as if it were a template. If your domain already has a standard covering this, that standard wins.
