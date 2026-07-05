---
id: DOC-MKT-010
title: Marketing to Sales Handoff
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, sales, handoff, standard]
dependencies: [DOC-MKT-004, DOC-MKT-008]
related: [DOC-MKT-002]
---

# Marketing to Sales Handoff

Defines how marketing-qualified interest, campaign responses, inbound leads, content engagement, customer context, and messaging insights are handed to sales. No `docs/07-sales/` operating system exists yet in this repository — this document defines marketing's side of the handoff so it's ready to connect once a sales operating system is built; it does not define sales' own process.

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

Once sales exists, it should tell marketing which handed-off leads actually converted and why (or why not) — this is the marketing-side mirror of [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md): a handoff that only flows one direction can't improve. Until sales exists, this feedback comes from whoever is closing business directly (often the founder), and the same discipline applies.

## Required Artifacts

A defined qualification bar (this document references, doesn't duplicate, [IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md)); a handoff record per qualified lead containing source, context, and engagement history.

## Ownership

Marketing owns qualifying and handing off interest with complete context. Sales (once it exists) owns what happens after handoff — active opportunity management is explicitly outside marketing's ownership (see [README.md](README.md) ownership boundary).

## Future Connection to Sales

When `docs/07-sales/` gets its own operating system, this document's "what gets handed off" and "feedback back to marketing" sections should be cross-linked from the sales side, and this document updated to reference sales' actual intake process rather than describing it generically.

## Anti-Patterns

- **Volume over qualification.** Handing off every lead regardless of fit, to make a lead-count number look good.
- **Context-free handoff.** A name and email with no source, message, or engagement history attached.
- **One-way handoff.** Never learning which leads actually converted, so qualification criteria never improve.
