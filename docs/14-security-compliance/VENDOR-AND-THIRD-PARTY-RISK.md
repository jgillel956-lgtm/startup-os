---
id: DOC-SEC-009
title: Vendor and Third-Party Risk
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, vendor-risk, standard]
dependencies: [DOC-SEC-008]
related: [DOC-SEC-007, DOC-ENG-011]
---

# Vendor and Third-Party Risk

Defines how vendors, processors, platforms, contractors, integrations, and third-party services are evaluated, approved, monitored, and offboarded. No specific vendor management or audit tool is assumed.

## What Counts as a Third Party

Any external service or person that touches company or customer data, or that the product depends on operationally: a cloud/infrastructure provider, a payment processor, an analytics tool, a contractor with system access, an integration partner. If it can see data or affect uptime, it's in scope.

## Evaluating a New Vendor

Before adopting a vendor that will touch sensitive data or become operationally critical: understand what data they'll access, what their own security posture actually is (not assumed from their marketing page — see [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md), the same discipline applied here in reverse, to *their* claims), and what happens if they have an incident.

## Approving a Vendor

Approval is proportional to risk — a vendor touching sensitive customer data or critical infrastructure gets more scrutiny than a low-risk internal tool. Approval is documented: who reviewed it, what was found, and what conditions (if any) apply.

## Monitoring Vendors

Vendor risk isn't a one-time check — a vendor's own posture, terms, or ownership can change after approval. Vendors with material access are reassessed periodically, and any vendor incident affecting the company is tracked the same way an internal incident would be ([SECURITY-INCIDENT-RESPONSE.md](SECURITY-INCIDENT-RESPONSE.md)).

## Offboarding a Vendor

When a vendor relationship ends, access and data sharing are revoked — the same discipline as [ACCESS-CONTROL.md](ACCESS-CONTROL.md)'s offboarding rule, applied to a company rather than a person. Confirm what happens to any data the vendor held.

## Data Shared With Vendors

Any sensitive data shared with a vendor follows [DATA-PROTECTION.md](DATA-PROTECTION.md)'s data-sharing rule — approved before sharing begins, not discovered after the fact during a review.

## Required Artifacts

A vendor register: what each vendor accesses, when they were approved, and when they were last reassessed; an offboarding record when a vendor relationship ends.

## Ownership

The security owner (or whoever holds that function at small scale) approves and tracks vendors; whoever brings on a new vendor is responsible for surfacing it for review before integrating it, not after.

## Anti-Patterns

- **Shadow vendors.** A team adopting a new tool with real data access, without it ever going through review.
- **Set-and-forget approval.** Approving a vendor once and never checking again, even as the relationship's risk profile changes.
- **Assuming vendor security from their reputation.** Trusting a vendor's own marketing claims about their security without any actual verification proportional to the risk they carry.
