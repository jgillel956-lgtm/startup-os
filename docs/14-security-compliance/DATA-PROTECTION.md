---
id: DOC-SEC-004
title: Data Protection
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, data-protection, standard]
dependencies: [DOC-SEC-003]
related: [DOC-SEC-005, DOC-SEC-008, DOC-ENG-006]
---

# Data Protection

Defines how sensitive data, customer data, and internal data are classified, retained, encrypted, shared, and handled. No specific storage platform or encryption tool is assumed.

## Data Classification

At minimum, distinguish: **sensitive** (personal data, credentials, financial/payment data, anything a breach would materially harm someone over), **internal** (business data not meant for public release but not acutely sensitive), and **public** (already intended for external release). Handling rules below scale with classification — not every piece of data needs the sensitive-tier treatment.

## Retention

Data is retained only as long as it serves a stated purpose (see [SECURITY-PRINCIPLES.md](SECURITY-PRINCIPLES.md) data minimization) or a specific compliance obligation requires ([COMPLIANCE-OBLIGATIONS.md](COMPLIANCE-OBLIGATIONS.md)). Indefinite retention "just in case" is itself a growing liability — more data held means more data exposed if something goes wrong.

## Encryption Expectations

Sensitive data is protected in transit and at rest, using the platform's or provider's standard mechanisms — this document does not mandate a specific algorithm or product, only that sensitive data is not left unprotected by default.

## Data Sharing

Sharing sensitive data with a third party (a vendor, a partner, an integration) goes through [VENDOR-AND-THIRD-PARTY-RISK.md](VENDOR-AND-THIRD-PARTY-RISK.md) before it happens — not after a data-sharing arrangement is already live. Sharing internally, across functions, still respects the classification above (e.g. marketing does not need raw customer payment data to write a case study).

## Data Handling Rules

- Never log full sensitive values (full account numbers, full payment credentials, full personal identifiers) — the same rule [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) already states for code review, restated here as a data-protection requirement, not just a review checklist item.
- Test data and examples use synthetic values, never real customer data — see [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) privacy section.
- Access to sensitive data follows [ACCESS-CONTROL.md](ACCESS-CONTROL.md)'s least-privilege model — not everyone who could plausibly need it "someday" gets standing access.

## AI Agents and Data

An AI agent implementing a feature, writing a test, or drafting documentation does not fabricate realistic-looking sensitive data (real-seeming account numbers, names, or credentials) even as placeholder examples — it uses clearly fake placeholders, consistent with [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md).

## Required Artifacts

A data classification reference (what counts as sensitive, for this company's actual data); a retention policy per data type; a record of any third-party data sharing and its approval.

## Ownership

Engineering implements data protection controls; the security owner sets classification and retention policy; leadership approves any exception.

## Anti-Patterns

- **Unclassified data.** Treating everything the same, over-protecting trivial data and under-protecting sensitive data alike.
- **Retention by default.** Keeping data indefinitely because deleting it was never explicitly decided.
- **Realistic fake data in examples.** Using a plausible-looking real name, account number, or credential format in documentation or test fixtures.
