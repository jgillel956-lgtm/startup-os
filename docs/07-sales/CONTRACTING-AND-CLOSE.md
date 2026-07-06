---
id: DOC-SLS-010
title: Contracting and Close
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: sales
tags: [sales, contracting, close, standard]
dependencies: [DOC-SLS-007]
related: [DOC-SLS-011, DOC-SLS-004]
---

# Contracting and Close

Defines how opportunities move from verbal alignment to legal/commercial review, signature, and close-won or close-lost documentation. No specific contracting or e-signature tool is assumed.

## From Verbal Alignment to Contract

Verbal agreement on terms is not close-won — it's the trigger to move into contracting: generating the actual agreement from the approved proposal ([PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md)), confirming legal/commercial terms, and routing for any required review.

## Legal/Commercial Review

Terms that deviate from standard (custom liability language, non-standard payment terms, unusual data handling commitments) get reviewed before signature — the same exception discipline as [PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md), extended to contract language itself. A commitment made in a contract that engineering or leadership never confirmed is achievable is a liability created at the close, discovered during delivery.

## Signature

Once terms are confirmed, signature is collected from someone with actual authority to sign — a deal "closed" by someone without signing authority isn't closed, it's at risk of unwinding.

## Close-Won Documentation

A closed-won deal records: final terms, the assumptions pricing was based on ([PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md)), the confirmed decision-maker(s), and everything [SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md) needs to onboard this customer without re-asking what sales already knows.

## Close-Lost Documentation

A closed-lost deal records the primary loss reason ([COMPETITIVE-SALES.md](COMPETITIVE-SALES.md) win/loss learning) and whether it's worth revisiting later (a timing-based loss might requalify in future; a fundamental fit mismatch usually won't).

## Handling Stalled Contracting

A deal stuck in contracting for an extended period is a pipeline hygiene issue ([SALES-PIPELINE.md](SALES-PIPELINE.md)) — it's escalated (what's actually blocking signature) rather than left to age silently as "almost closed."

## Required Artifacts

The signed contract; a close-won or close-lost record with the fields above; any legal/commercial exception and its approval.

## Ownership

Salesperson drives the deal to signature; legal/commercial review authority (however the company has assigned it) reviews non-standard terms; sales owner confirms close-won documentation is complete before handoff.

## Anti-Patterns

- **Calling it closed before signature.** Reporting a deal as won on verbal agreement, which can still fall through.
- **Unreviewed custom terms.** Signing a contract with non-standard language nobody with authority actually reviewed.
- **Thin close-won records.** A signed deal with no captured context, forcing [SALES-TO-CUSTOMER-HANDOFF.md](SALES-TO-CUSTOMER-HANDOFF.md) to start from nothing.
