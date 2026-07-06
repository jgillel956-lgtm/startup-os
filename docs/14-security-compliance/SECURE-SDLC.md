---
id: DOC-SEC-006
title: Secure SDLC
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, sdlc, standard]
dependencies: [DOC-SEC-003]
related: [DOC-SEC-007, DOC-ENG-003, DOC-ENG-007, DOC-ENG-008]
---

# Secure SDLC

Defines how security is included across the development lifecycle: requirements, design, technical design, code review, testing, release, dependency management, and operational readiness. This document connects [SECURITY-PRINCIPLES.md](SECURITY-PRINCIPLES.md) to the actual points in [ENGINEERING-LIFECYCLE.md](../03-engineering/ENGINEERING-LIFECYCLE.md) where they get applied.

## Requirements

Security and data-sensitivity requirements are stated in the PRD/acceptance criteria, not left implicit — see [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md)'s Security Criteria section. A feature touching sensitive data without a stated security requirement is an underspecified feature.

## Design and Technical Design

Authentication/authorization model, data exposure, and abuse resistance are considered during [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md) — a design that reaches review without having considered how it could be misused is incomplete, the same way a design without considered alternatives is incomplete.

## Code Review

Every code review checks the security section of [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) — injection paths, authn/authz, secrets, sensitive-data logging — as a standing part of [BRANCHING-AND-CODE-REVIEW.md](../03-engineering/BRANCHING-AND-CODE-REVIEW.md), not an optional extra pass.

## Testing

Security-relevant test cases (authz boundaries, input validation, abuse cases) are part of [TESTING-AND-QUALITY.md](../03-engineering/TESTING-AND-QUALITY.md)'s coverage expectations, proportional to risk — a payment or auth path gets more security-specific testing than a display label.

## Release

Higher-risk changes are flagged explicitly in release planning ([RELEASE-AND-DEPLOYMENT.md](../03-engineering/RELEASE-AND-DEPLOYMENT.md)) — anything touching authentication, payment, or sensitive data gets a security-aware release plan, not the default path.

## Dependency Management

Dependencies are kept current deliberately ([REPOSITORY-STANDARDS.md](../03-engineering/REPOSITORY-STANDARDS.md) maintainability section); a known vulnerability in a dependency is tracked and prioritized the same way any other security finding is (see [SECURITY-METRICS.md](SECURITY-METRICS.md) vulnerability aging).

## Operational Readiness

Before a security-sensitive capability is considered fully released, monitoring appropriate to its risk exists ([OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md)) — the same "not done until monitored" rule that document already states, restated here as a security-specific gate.

## When a Formal Security Review Is Needed

See [SECURITY-REVIEWS.md](SECURITY-REVIEWS.md) for the specific triggers — not every change needs a dedicated security review; the ones above are the baseline that applies to all engineering work regardless.

## Ownership

Engineering owns applying secure-SDLC practice at each lifecycle stage; the security owner defines what "proportional to risk" means in practice and audits that it's actually happening.

## Anti-Patterns

- **Security as a final gate.** Only considering security right before release instead of at each stage above.
- **Security review as a rubber stamp.** Checking the box in code review without actually evaluating the security-relevant sections.
- **Unpatched known vulnerabilities.** A flagged dependency vulnerability left unaddressed because "nothing's exploited it yet."
