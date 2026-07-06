---
id: DOC-SEC-001
title: Security & Compliance — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, compliance, overview, operating-system]
dependencies: []
related: [DOC-SEC-002, DOC-ENG-001, DOC-OPS-001, DOC-CS-001]
---

# Security & Compliance — Overview

The security & compliance domain defines the **Security & Compliance Operating System**: how a Startup OS company manages security expectations, compliance obligations, access control, data protection, secure development, vendor risk, public trust claims, incident response, and security metrics.

This domain does not assume a specific industry, certification, cloud provider, or tool stack — and it does not claim any certification on behalf of any company. Certifications and compliance frameworks (SOC 2, ISO 27001, HIPAA, PCI, GDPR, or any other) are only ever claimed when actually verified and formally approved to state — see [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md).

## Where This Sits

```
Engineering (docs/03-engineering/)         builds and operates the system
Operations & Support (docs/09-operations/) communicates with customers about issues
Product (docs/02-product/)                 decides what gets built
Sales & Marketing (docs/07-sales/, docs/06-marketing/)  make claims about the company
Customer Success (docs/13-customer-success/) owns ongoing customer trust
      ↕
Security & Compliance (docs/14-security-compliance/)
      cuts across all of them: sets the rules each must follow, and is the check
      before anything security- or compliance-sensitive is said or shipped
```

Security is not a phase or a single team's job — it is a shared responsibility with explicit ownership per function (see below). This domain defines what each function is responsible for and where the review gates are.

## Documents

| Document | Defines |
|----------|---------|
| [SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](SECURITY-COMPLIANCE-OPERATING-SYSTEM.md) | Overall model, ownership, principles, cadence |
| [SECURITY-PRINCIPLES.md](SECURITY-PRINCIPLES.md) | Least privilege, defense in depth, secure defaults, auditability |
| [DATA-PROTECTION.md](DATA-PROTECTION.md) | Sensitive data handling, retention, encryption, sharing |
| [ACCESS-CONTROL.md](ACCESS-CONTROL.md) | Role-based access, onboarding/offboarding, reviews |
| [SECURE-SDLC.md](SECURE-SDLC.md) | Security through requirements, design, review, testing, release |
| [SECURITY-REVIEWS.md](SECURITY-REVIEWS.md) | When a security review is required |
| [COMPLIANCE-OBLIGATIONS.md](COMPLIANCE-OBLIGATIONS.md) | Regulatory, contractual, and audit obligations |
| [VENDOR-AND-THIRD-PARTY-RISK.md](VENDOR-AND-THIRD-PARTY-RISK.md) | Evaluating, approving, and monitoring third parties |
| [TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md) | Reviewing public security/compliance/trust claims |
| [SECURITY-INCIDENT-RESPONSE.md](SECURITY-INCIDENT-RESPONSE.md) | Reporting, triaging, containing, and reviewing incidents |
| [SECURITY-METRICS.md](SECURITY-METRICS.md) | Access review completion, vulnerability aging, incident volume |

## How Security Connects to Everything Else

- **Engineering** (`docs/03-engineering/`) — implements secure defaults, handles secrets and access per [REPOSITORY-STANDARDS.md](../03-engineering/REPOSITORY-STANDARDS.md), and builds security into the lifecycle per [SECURE-SDLC.md](SECURE-SDLC.md).
- **Operations & Support** (`docs/09-operations/`) — coordinates customer-facing communication during a security incident alongside [INCIDENT-COMMUNICATION.md](../09-operations/INCIDENT-COMMUNICATION.md); does not independently characterize a security incident's cause or scope.
- **Marketing & Sales** (`docs/06-marketing/`, `docs/07-sales/`) — never make a security, compliance, or trust claim that hasn't been verified and approved ([TRUST-COMMUNICATIONS-AND-CLAIMS.md](TRUST-COMMUNICATIONS-AND-CLAIMS.md)).
- **Customer Success** (`docs/13-customer-success/`) — owns continuity of customer trust; escalates when a security concern threatens account health ([CUSTOMER-HEALTH.md](../13-customer-success/CUSTOMER-HEALTH.md)) rather than reassuring a customer with unverified claims.
- **Leadership** — owns accepting residual risk that engineering and security review surface; owns approving any certification or compliance claim before it's used publicly.

## Ownership Boundary

Security is a shared responsibility, with explicit ownership per function:

- **Engineering** owns technical implementation and system health.
- **Operations** owns customer-facing coordination during support incidents.
- **Leadership** owns risk acceptance.
- **Sales and marketing** must not make unsupported claims.
- **Customer success** owns customer trust continuity.

No function assumes another's role — a salesperson does not decide what's technically secure, and engineering does not decide what's said publicly about it.
