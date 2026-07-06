---
id: DOC-MKT-010
title: Marketing to Sales Handoff
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: marketing
tags: [marketing, sales, handoff, standard]
dependencies: [DOC-MKT-004, DOC-MKT-008]
related: [DOC-MKT-002, DOC-SLS-003, DOC-SLS-004, DOC-SLS-011]
---

# Marketing to Sales Handoff

Defines how marketing-qualified interest, campaign responses, inbound leads, content engagement, customer context, and messaging insights are handed to sales. This document defines marketing's side of the handoff; [docs/07-sales/](../07-sales/README.md) defines what sales does with it — starting at [IDEAL-CUSTOMER-AND-QUALIFICATION.md](../07-sales/IDEAL-CUSTOMER-AND-QUALIFICATION.md), which applies the same ICP to the individual opportunity, and [SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md), where a handed-off lead enters the pipeline once requalified.

## What Gets Handed Off

- **Qualified interest** — a lead matching [ICP qualification signals](IDEAL-CUSTOMER-PROFILE.md), not just any form fill.
- **Source context** — which campaign, content, or channel produced the interest, and what message it responded to.
- **Engagement history** — what the prospect has already seen/read/downloaded, so sales isn't starting a conversation from zero.
- **Messaging insight** — which value proposition or key message ([POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md)) apparently resonated, based on what they engaged with.

## Qualification Before Handoff

Marketing applies the ICP's qualification signals ([IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md)) before handing off — an unqualified lead handed to sales wastes sales' time and, over enough repetitions, teaches sales to distrust marketing-sourced leads generally.

## Handoff Completeness

A complete handoff lets a sales conversation start from context, not from scratch: who the prospect is, why they're interested, and what's already been communicated to them. An incomplete handoff (just a name and email, no context) forces sales to re-ask everything marketing already knows, which is where prospects lose confidence fastest.

## Feedback Back to Marketing

Sales tells marketing which handed-off leads actually converted and why (or why not) — this is the marketing-side mirror of [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md): a handoff that only flows one direction can't improve. Sales' [SALES-METRICS.md](../07-sales/SALES-METRICS.md) "source quality" measurement is the specific mechanism that closes this loop — win rate and deal size by originating campaign/source, reported back to marketing.

## Required Artifacts

A defined qualification bar (this document references, doesn't duplicate, [IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md)); a handoff record per qualified lead containing source, context, and engagement history.

## Ownership

Marketing owns qualifying and handing off interest with complete context. Sales owns what happens after handoff — active opportunity management is explicitly outside marketing's ownership (see [README.md](README.md) ownership boundary), and is defined in [docs/07-sales/](../07-sales/README.md).

## Anti-Patterns

- **Volume over qualification.** Handing off every lead regardless of fit, to make a lead-count number look good.
- **Context-free handoff.** A name and email with no source, message, or engagement history attached.
- **One-way handoff.** Never learning which leads actually converted, so qualification criteria never improve.
