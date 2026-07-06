---
id: DOC-SEC-007
title: Security Reviews
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, review, standard]
dependencies: [DOC-SEC-002]
related: [DOC-SEC-006, DOC-SEC-009, DOC-SEC-010]
---

# Security Reviews

Defines when a security review is required: new features, integrations, vendors, infrastructure changes, public claims, customer commitments, and other high-risk changes.

## When a Security Review Is Required

| Trigger | Review focus |
|---------|----------------|
| New feature touching sensitive data or authn/authz | Data exposure, access boundaries — see [DATA-PROTECTION.md](DATA-PROTECTION.md), [ACCESS-CONTROL.md](ACCESS-CONTROL.md) |
| New integration or third-party service | What data is shared, what access is granted — see [VENDOR-AND-THIRD-PARTY-RISK.md](VENDOR-AND-THIRD-PARTY-RISK.md) |
| Infrastructure change (hosting, network, storage) | Exposure surface, backup/recovery, access model |
| Public security/compliance/trust claim | Verified truth of the claim — see [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md) |
| Customer commitment with security/compliance implications (a contract clause, an SLA, a data-handling promise) | Whether the company can actually deliver on it |
| Any change flagged as high-risk in [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md) or [RELEASE-AND-DEPLOYMENT.md](../03-engineering/RELEASE-AND-DEPLOYMENT.md) | Whatever risk was flagged |

## Conducting a Review

A review checks the specific concern the trigger raises — it is not a generic checklist run reflexively. State what's being reviewed, what was found, and what (if anything) must change before proceeding.

## Review Outcomes

- **Approved** — proceeds as planned.
- **Approved with conditions** — proceeds, with specific named changes required before or shortly after release.
- **Blocked** — does not proceed until the identified risk is addressed or leadership explicitly accepts it (see [SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](SECURITY-COMPLIANCE-OPERATING-SYSTEM.md) decision standards).

## Required Artifacts

A review record per triggered review: what was reviewed, the outcome, and any conditions or accepted risks.

## Ownership

The security owner conducts or delegates the review; engineering, marketing, sales, or whoever initiated the triggering change supplies the context needed to review it and implements any required conditions.

## Anti-Patterns

- **Skipping review under deadline pressure.** Shipping a triggering change without the review because "there's no time," which is exactly when risk is most likely to be missed.
- **Review after the fact.** Reviewing a public claim after it's already published instead of before.
- **Generic sign-off.** Approving without actually examining the specific risk the trigger raised.
