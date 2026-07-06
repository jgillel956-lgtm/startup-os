---
id: DOC-SEC-010
title: Trust Communications and Claims
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: security-compliance
tags: [security, trust, claims, standard]
dependencies: [DOC-SEC-008]
related: [DOC-MKT-011, DOC-SLS-007, DOC-SLS-008, DOC-INV-006, DOC-INV-009]
---

# Trust Communications and Claims

Defines how public security, compliance, privacy, reliability, certification, and audit claims are reviewed before use in marketing, sales, proposals, contracts, or customer communications. This is the security-specific enforcement point behind [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md)'s security-language checklist item and [PROPOSALS-AND-PRICING.md](../07-sales/PROPOSALS-AND-PRICING.md)'s technical-assumption verification.

## The Rule

**No security, compliance, privacy, reliability, or certification claim is made publicly unless it has been verified as true and formally approved to state.** This applies equally to marketing copy, sales conversations, proposals, contracts, and support responses — there is no lower bar for an informal channel.

## What Requires This Review

- Certification claims (SOC 2, ISO 27001, HIPAA, PCI, GDPR, or any other framework) — never claimed unless actually achieved and confirmed.
- Security architecture claims ("encrypted at rest," "we never store X") — verified against what engineering has actually implemented, not what sounds reassuring.
- Reliability/uptime claims — verified against actual measured performance ([ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) reliability), not aspiration.
- Audit claims ("independently audited," "penetration tested") — only stated if true, current, and the company is permitted to reference it publicly.
- Investor-facing claims — [INVESTOR-DECK.md](../08-investors/INVESTOR-DECK.md) content and [due diligence](../08-investors/DUE-DILIGENCE.md) answers touching security, compliance, or trust follow this same rule; an investor asking a direct question does not lower the bar for accuracy.

## Review Process

1. Whoever wants to make the claim (marketing, sales, support, or leadership preparing investor materials) states exactly what they want to say.
2. The security owner confirms whether it's true, currently accurate, and appropriately scoped (a narrow true fact stated as a broad claim is still a false claim).
3. Approved claims are recorded so they can be reused consistently instead of re-verified from scratch every time.
4. An unverifiable or false claim is rejected — the requester gets a true, defensible alternative statement instead, not silence.

## Handling Customer and Sales Pressure

A prospect or customer asking "are you SOC 2 compliant" or "is our data encrypted" gets an honest, verified answer — including "not yet, here's our current approach and timeline" when that's the truth. Sales' [objection handling](../07-sales/OBJECTION-HANDLING.md) already requires factual, verified answers to trust/risk objections; this document is where that verification actually happens. Losing a deal to an honest "not yet" is recoverable; a false compliance claim discovered later is not.

## Where Approved Claims Live

Approved, current claims are kept in one referenced place (however the company chooses to store it) so marketing and sales use the same accurate language consistently — not each independently deciding how to phrase something security-sensitive.

## Required Artifacts

A log of claim review requests and their outcomes; an approved-claims reference kept current as the underlying facts change.

## Ownership

The security owner approves or rejects claims; marketing, sales, and support own not publishing or stating anything security/compliance-related without that approval — including under time pressure from a live deal or an anxious customer.

## Anti-Patterns

- **Deal pressure overriding truth.** Stating an unverified compliance claim to close or save a deal.
- **Stale approved claims.** Continuing to use a claim after the underlying fact has changed (e.g. a certification lapsed, an architecture changed).
- **Scope creep in claims.** Taking a narrow true fact ("we encrypt this one field") and generalizing it into a broad claim ("everything is encrypted").
