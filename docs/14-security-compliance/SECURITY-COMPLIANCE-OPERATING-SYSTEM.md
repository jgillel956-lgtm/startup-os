---
id: DOC-SEC-002
title: Security & Compliance Operating System
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: security-compliance
tags: [security, compliance, operating-model, standard]
dependencies: [DOC-SEC-001]
related: [DOC-ENG-002, DOC-SEC-003, DOC-SEC-007, DOC-BIZ-010]
---

# Security & Compliance Operating System

Defines the overall security and compliance model: ownership, principles, operating cadence, review expectations, and decision standards. No specific cloud provider, security tool, or compliance framework is assumed.

## Principles

Full detail in [SECURITY-PRINCIPLES.md](SECURITY-PRINCIPLES.md); in brief: least privilege, defense in depth, secure defaults, auditability, data minimization, and risk-based decision making — applied proportionally to an early-stage company's actual size and risk, not as enterprise process for its own sake. Risk-based decisions ultimately feed [BUSINESS-RISKS-AND-ASSUMPTIONS.md](../01-business/BUSINESS-RISKS-AND-ASSUMPTIONS.md) — a security risk leadership has knowingly accepted is a business risk, tracked at that level too.

## Ownership

Security is a shared responsibility with explicit per-function ownership — see [README.md](README.md)'s ownership boundary. Within the security function itself:

| Role | Responsibility |
|------|-----------------|
| Security owner (founder or delegate) | Sets standards, runs reviews, tracks obligations, owns the incident response process |
| Engineering | Implements secure defaults and secure development practice ([SECURE-SDLC.md](SECURE-SDLC.md)) |
| Leadership | Accepts residual risk that can't or won't be eliminated |
| Every function making public claims | Routes through [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md) before publishing anything security- or compliance-related |

One person holds the security owner and engineering roles early on — the responsibilities still apply.

## Operating Cadence

Startup OS does not mandate a specific cadence. What's mandated regardless: access is reviewed periodically ([ACCESS-CONTROL.md](ACCESS-CONTROL.md)), known obligations are checked against actual practice periodically ([COMPLIANCE-OBLIGATIONS.md](COMPLIANCE-OBLIGATIONS.md)), and vendors are reassessed on a rhythm, not only at initial approval ([VENDOR-AND-THIRD-PARTY-RISK.md](VENDOR-AND-THIRD-PARTY-RISK.md)).

## Review Expectations

- Security review is required before certain changes ship — see [SECURITY-REVIEWS.md](SECURITY-REVIEWS.md) for exactly when.
- Every public security/compliance/trust claim is reviewed and approved before use — see [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md). No exceptions for "it's just marketing copy" or "the customer's asking, we need an answer now."

## Decision Standards

A security or compliance decision that's hard to reverse (a core access model, a data retention policy, accepting a residual risk rather than mitigating it) is documented with context, options, decision, and consequences — the same discipline as an engineering ADR ([ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)), because a security decision that's wrong is often expensive or impossible to unwind after the fact.

## Inputs and Outputs

- **Inputs:** engineering's implementation and architecture, known regulatory/contractual obligations, vendor relationships, requests for public claims from marketing/sales.
- **Outputs:** documented security principles and controls, tracked obligations and vendor status, reviewed and approved (or rejected) public claims, incident records, and security metrics.

## Scaling the System

At one person (often the founder, or a founding engineer): principles may be a short checklist, reviews may be a self-check before anything ships, and claims review may be a quick sanity check before a proposal goes out. What must not shrink to zero regardless of size: nobody claims a certification that hasn't actually been verified, secrets are never committed, and every security incident is documented — however small the team.
