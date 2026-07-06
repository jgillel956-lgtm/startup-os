---
id: DOC-SLS-007
title: Proposals and Pricing
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: sales
tags: [sales, proposals, pricing, standard]
dependencies: [DOC-SLS-006]
related: [DOC-SLS-008, DOC-SLS-010, DOC-SEC-010]
---

# Proposals and Pricing

Defines how proposals, pricing, packaging, commercial terms, assumptions, approvals, and exceptions are prepared and reviewed. No specific proposal or quoting tool is assumed.

## What a Proposal Contains

- A recap of the confirmed need and business impact (from [discovery](DISCOVERY-AND-NEEDS-ASSESSMENT.md)) — so the proposal reads as a response to their situation, not a generic price sheet.
- The specific solution being proposed, referencing what was demonstrated ([DEMO-AND-SOLUTION-PRESENTATION.md](DEMO-AND-SOLUTION-PRESENTATION.md)).
- Pricing and packaging, stated clearly, with any assumptions it depends on (usage volume, user count, term length) made explicit.
- Commercial terms — length, renewal, payment terms — stated plainly, not buried.

## Pricing and Packaging

Pricing follows the company's standard packaging and rate structure. A proposal that deviates from standard pricing is an exception (below), not a default negotiating stance.

## Assumptions

Every proposal states the assumptions its price is based on (e.g. seat count, usage tier) — an assumption proven wrong after signing is the single most common source of billing disputes and account friction; naming it up front prevents that.

## Approvals

- Standard pricing within pre-approved packaging requires no special approval.
- Any discount, custom term, or non-standard packaging requires sign-off from whoever holds pricing authority (see [SALES-OPERATING-SYSTEM.md](SALES-OPERATING-SYSTEM.md) ownership) — proposed and approved before it's presented to the prospect, not promised first and reconciled after.

## Exceptions

An exception (unusual discount, custom terms, a commitment outside standard packaging) is documented with its business justification and its approver — an undocumented exception becomes a precedent nobody agreed to and a pattern that's impossible to review later.

## Technical and Feasibility Assumptions

A proposal that depends on an integration, a technical capability, or an implementation timeline is confirmed with engineering before it's sent — proposing a technical commitment sales can't actually verify is how a signed deal turns into an implementation crisis. A proposal containing a security, compliance, or data-handling commitment follows [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md) — never stated to win the deal unless it's actually verified and approved.

## Required Artifacts

The proposal itself; a record of any exception and its approval; the assumptions the pricing depends on, stated where the customer can see and agree to them.

## Ownership

Salesperson drafts; sales owner (or delegated pricing authority) approves anything non-standard; engineering confirms technical assumptions before they're proposed.

## Anti-Patterns

- **Silent discounting.** Offering a discount without approval to keep a deal moving, discovered only when someone reviews closed-won terms later.
- **Unstated assumptions.** Pricing based on an assumed usage level that's never confirmed with the customer, leading to disputes later.
- **Technical overcommitment.** Proposing an integration or timeline engineering never confirmed as feasible.
