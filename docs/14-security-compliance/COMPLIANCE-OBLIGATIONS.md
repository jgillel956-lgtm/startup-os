---
id: DOC-SEC-008
title: Compliance Obligations
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [compliance, obligations, standard]
dependencies: [DOC-SEC-002]
related: [DOC-SEC-004, DOC-SEC-010]
---

# Compliance Obligations

Defines how regulatory, contractual, customer, audit, privacy, financial, operational, and industry obligations are identified, documented, owned, reviewed, and updated. No specific compliance framework or certification is assumed or claimed by this document.

## Types of Obligations

| Type | Example source |
|------|-------------------|
| Regulatory | Data protection or privacy law applicable to where customers/the company operate |
| Contractual | A specific commitment made in a customer or vendor contract |
| Customer-driven | A requirement a customer imposes as a condition of doing business |
| Audit | A requirement to demonstrate a control exists, for an internal or external audit |
| Privacy | How personal data may be collected, used, and retained |
| Financial | Obligations tied to handling money or financial data |
| Operational | Internal policy commitments the company has made to itself |
| Industry | Norms or requirements specific to the company's sector |

## Identifying Obligations

Obligations are identified from their actual source — a specific regulation, a specific contract clause, a specific customer requirement — not assumed generically ("we probably need to be compliant with X"). An obligation nobody can point to a source for isn't a confirmed obligation yet; it's a hypothesis to verify.

## Documenting Obligations

Each obligation records: its source, what it actually requires, and how the company currently meets it (or doesn't yet). A vague entry ("comply with data protection law") is not actionable — state the specific requirement and the specific control that satisfies it.

## Ownership

Every obligation has a named owner responsible for knowing whether the company still meets it — an obligation with no owner is one nobody will notice falling out of compliance with.

## Review

Obligations are reviewed periodically and whenever something material changes (a new regulation, a new customer contract, a new market). A stale obligation list is worse than an honest gap list — it creates false confidence.

## No Unverified Certification Claims

This document, and this domain generally, never states that the company holds a certification (SOC 2, ISO 27001, HIPAA, PCI, GDPR, or any other) or has completed a specific compliance framework unless that status has actually been verified and formally approved to state. Generic guidance in this domain may describe *how* such a framework would be approached — it does not assert current certification status. See [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md) for the review gate this feeds.

## Required Artifacts

An obligations register: source, requirement, current control, owner, last-reviewed date.

## Ownership (of this process)

The security or compliance owner maintains the register; individual obligation owners confirm their area still meets its requirement at each review.

## Anti-Patterns

- **Assumed compliance.** Believing an obligation is met without ever having verified the specific control against the specific requirement.
- **Orphaned obligations.** An obligation nobody currently owns, discovered only during an audit or a customer's due-diligence questionnaire.
- **Claiming certification status informally.** Someone telling a prospect "we're basically SOC 2 compliant" without that status being real and approved to state.
