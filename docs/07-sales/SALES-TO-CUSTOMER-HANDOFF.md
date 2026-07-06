---
id: DOC-SLS-011
title: Sales to Customer Handoff
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: sales
tags: [sales, handoff, onboarding, standard]
dependencies: [DOC-SLS-010]
related: [DOC-OPS-003, DOC-OPS-006, DOC-PRD-001]
---

# Sales to Customer Handoff

Defines how closed deals are handed to implementation, onboarding, customer success, operations, support, product, and leadership without losing context. The sales-domain mirror of [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md) — same discipline (qualify what's handed off, include full context, close the loop), applied at the other end of the sales cycle.

## What Gets Handed Off

- **Deal context** — what was discovered ([DISCOVERY-AND-NEEDS-ASSESSMENT.md](DISCOVERY-AND-NEEDS-ASSESSMENT.md)): the confirmed need, business impact, and success criteria the customer defined for themselves.
- **Commercial terms** — what was actually agreed ([CONTRACTING-AND-CLOSE.md](CONTRACTING-AND-CLOSE.md)), including any pricing assumptions the customer needs to stay within.
- **Commitments made** — anything promised during the sales cycle (a timeline, an integration, a specific configuration) that whoever onboards the customer needs to know about and honor.
- **Stakeholder map** — who the actual users and decision-makers are, from discovery, so onboarding/support isn't starting from zero.
- **Risks flagged during the deal** — anything sales noticed that could affect onboarding or satisfaction (a tight timeline expectation, an internal champion who might not stay engaged).

## Who Receives the Handoff

| Function | Uses handoff for |
|----------|---------------------|
| Implementation / onboarding | Setting up the customer against the commitments made |
| Customer success / support ([CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md)) | Ongoing relationship, informed by why the customer bought |
| Operations | Billing/account setup matching the actual agreed terms |
| Product | Real customer context behind why this deal was won — feeds [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) the same way support themes do |
| Leadership | Visibility into commitments made that carry business risk if unmet |

## Handoff Completeness

A complete handoff means the receiving team can start delivering without re-interviewing the customer about things sales already learned. An incomplete handoff — just a signed contract and an account name — forces the customer to re-explain themselves, which damages trust built during the sales cycle right when it matters most.

## Closing the Loop

Sales is told how onboarding actually goes — smooth, or hitting friction from a commitment that was harder to deliver than expected. A commitment that regularly causes onboarding trouble is fed back into [PROPOSALS-AND-PRICING.md](PROPOSALS-AND-PRICING.md) and [DEMO-AND-SOLUTION-PRESENTATION.md](DEMO-AND-SOLUTION-PRESENTATION.md) so it stops being promised the same way.

## Required Artifacts

A handoff record containing the fields above, delivered before or at the moment implementation/onboarding begins — not after the customer has already asked why nobody knows what was agreed.

## Ownership

Sales owns producing a complete handoff. Operations/support owns the customer relationship from handoff forward (see [README.md](README.md) ownership boundary) — sales does not continue managing the account as if it were still an open opportunity.

## Anti-Patterns

- **Thin handoff.** A signed contract with no context, forcing the customer to re-explain their situation to a new team.
- **Overpromised commitments, quietly handed off.** Passing along an unrealistic timeline without flagging that it was aggressive, leaving onboarding to discover the gap themselves.
- **No loop back.** Sales never learning whether their handoffs actually set customers up well, so the handoff quality never improves.
