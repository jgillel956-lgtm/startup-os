---
id: DOC-MKT-003
title: Positioning and Messaging
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: marketing
tags: [marketing, positioning, messaging, standard]
dependencies: [DOC-MKT-002]
related: [DOC-MKT-004, DOC-MKT-009, DOC-PRD-004, DOC-INV-005]
---

# Positioning and Messaging

Defines how positioning, value proposition, category language, customer pain, outcomes, proof points, and messaging hierarchy are created and maintained.

## Positioning

Positioning states what the product is, for whom, and why it matters, relative to the alternatives a buyer would otherwise consider. It is a claim about the product's place in the market — not a slogan and not a features list.

## Value Proposition

The specific outcome the product delivers for a specific customer, stated in terms of the customer's problem, not the product's mechanism. Grounded in the actual problem a capability was built to solve ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md), [PROBLEM.md](../02-product/CAPABILITY-MODEL.md) section) — a value proposition invented independent of product's own problem statement will drift from what's actually true.

## Category Language

The frame customers use to understand what kind of thing this is (the category it competes in, or the new category it's trying to define). Category language is chosen deliberately — an unclear category forces every other message to first explain "what even is this," which is expensive to repeat everywhere.

## Customer Pain

The specific problem being addressed, in the customer's own language wherever possible — drawn from [UX-RESEARCH.md](../05-design/UX-RESEARCH.md) and support themes ([CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)), not invented in a marketing meeting disconnected from either.

## Outcomes

What changes for the customer after adopting the product — stated as a result, not a feature. "Saves 10 hours a month on reconciliation," not "has a reconciliation dashboard."

## Proof Points

Evidence that backs a claimed outcome: a metric, a customer result, a technical fact. Every proof point used publicly is verifiable and currently true — see [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md) for the check that keeps stale or unverifiable proof points out of published material. These same proof points are what [PITCH-NARRATIVE.md](../08-investors/PITCH-NARRATIVE.md) draws on for investor materials — one verified set of evidence, reused, not a separate stronger version for investors.

## Messaging Hierarchy

```
Positioning              (what we are, for whom, vs. what)
  └─ Value Proposition    (the outcome, per audience segment)
       └─ Key Messages     (2-4 supporting reasons to believe it)
            └─ Proof Points (specific evidence for each key message)
```

Every piece of content and every campaign traces upward through this hierarchy — content that doesn't connect to a key message is either filling a real gap the hierarchy is missing, or it's off-message and should be reconsidered.

## Maintaining Messaging Over Time

- Positioning is revisited when the product, market, or competitive landscape changes materially — not left untouched for years while the product moves on.
- A messaging change that contradicts prior public claims is reviewed for what needs correcting elsewhere (website, content, sales material) — messaging drift across surfaces is a common, avoidable failure.

## Ownership

Marketing owner drafts and maintains positioning/messaging; product confirms it's accurate to what's actually built and roadmapped; design ensures it's expressed consistently with [BRAND-AND-VOICE.md](BRAND-AND-VOICE.md).

## Anti-Patterns

- **Feature-first messaging.** Leading with what the product does instead of what changes for the customer.
- **Positioning by committee, forever.** Endless revision without ever shipping a stated position to test against the market.
- **Borrowed proof points.** Using a competitor's or industry's statistic as if it were the company's own result.
