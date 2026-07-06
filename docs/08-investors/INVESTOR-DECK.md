---
id: DOC-INV-006
title: Investor Deck
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: investors
tags: [investors, deck, standard]
dependencies: [DOC-INV-005]
related: [DOC-INV-007, DOC-SEC-010]
---

# Investor Deck

Defines the standard structure, review expectations, evidence requirements, claim guardrails, and version control for investor decks. No specific presentation tool is assumed.

## Standard Structure

Following [PITCH-NARRATIVE.md](PITCH-NARRATIVE.md)'s sections: problem, product/solution, traction, market, business model, moat, team, financials/ask, use of funds. A specific deck may reorder or combine sections for a specific audience or stage — the underlying narrative doesn't change, only its presentation.

## Evidence Requirements

Every claim slide (traction, market size, financial projection) states or links to its source. A slide that asserts a number with no traceable source behind it is not ready to show — the moment it's ready is when whoever built it could answer "where does this come from" without hesitation.

## Claim Guardrails

- No claim of funding raised, investor commitment, board approval, audited financials, or a specific certification/compliance status unless that's actually and currently true.
- No security, compliance, or trust claim without [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) approval.
- No financial projection presented as certain — projections are stated as projections, with their key assumptions available on request (see [FINANCIAL-MODEL-AND-ASSUMPTIONS.md](FINANCIAL-MODEL-AND-ASSUMPTIONS.md)).
- Any legal, tax, accounting, or securities-adjacent statement is reviewed by a qualified advisor before it appears in a deck shown externally.

## Review Before Sending

Every deck version going to an actual investor is reviewed for: factual accuracy, consistency with the current financial model and metrics, and consistency with public/marketing narrative — the same bar as [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md), applied to fundraising materials.

## Version Control

The deck is versioned — which version went to which investor, and when — so that if a fact changes (a metric updates, a claim is corrected), it's clear which investors saw the outdated version and whether they need an update. A single "final" file silently overwritten loses this traceability.

## Required Artifacts

The deck itself, versioned; a source-of-truth note per claim slide; a review record before each external send.

## Ownership

Leadership owns deck content and approval; marketing supports design/narrative consistency; finance confirms financial slides match the current model; security/compliance approves any trust-related claim.

## Anti-Patterns

- **Untraceable claims.** A number on a slide nobody can currently source.
- **Stale decks in circulation.** Sending an outdated version because the "latest" file wasn't clearly identified.
- **Certainty language on projections.** Presenting a forecast as a guaranteed outcome rather than a modeled projection.
