---
id: DOC-SEC-005
title: Access Control
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, access-control, standard]
dependencies: [DOC-SEC-003]
related: [DOC-SEC-004, DOC-SEC-012]
---

# Access Control

Defines access management: role-based access, privileged access, onboarding, offboarding, reviews, shared-account avoidance, and access exceptions. No specific identity or access-management tool is assumed.

## Role-Based Access

Access is granted based on what a role actually needs to do (least privilege, [SECURITY-PRINCIPLES.md](SECURITY-PRINCIPLES.md)), not based on seniority or convenience. A role's access is documented — what it can see and do — so granting access to a new person in that role is a known, repeatable decision, not a guess.

## Privileged Access

Access that can affect production systems, sensitive data, or financial operations is a distinct, more tightly controlled tier — granted to fewer people, reviewed more frequently, and never granted "temporarily" without a stated end date that's actually honored.

## Onboarding

A new person's access is granted to match their actual role from day one — provisioned deliberately, not by copying a predecessor's full access without checking whether it's all still appropriate.

## Offboarding

Access is revoked promptly when someone leaves a role or the company — same-day for anything privileged, and without exception. A former team member or contractor with lingering access is one of the most common, most avoidable security gaps.

## Access Reviews

Access is reviewed periodically — not just at onboarding/offboarding — to catch accumulated access nobody actively decided to keep granting (a person moved roles twice and still has both sets of access). See [SECURITY-METRICS.md](SECURITY-METRICS.md) for tracking review completion.

## Shared Account Avoidance

Individual accounts, not shared logins — a shared account breaks auditability ([SECURITY-PRINCIPLES.md](SECURITY-PRINCIPLES.md)) because "who did this" no longer has an answer. Where a system genuinely requires a service account, it's documented as one, scoped narrowly, and not used by humans as a convenience login.

## Access Exceptions

An exception (temporary elevated access, an access grant outside the normal role model) is documented with its reason, its approver, and an end date — an undocumented exception becomes permanent, unreviewed access by default.

## Required Artifacts

A role-to-access mapping; an access review record per review cycle; an exception log.

## Ownership

The security owner (or engineering, at small scale) owns the access model and review cadence; whoever manages a specific system owns granting/revoking access to it promptly on request or on offboarding.

## Anti-Patterns

- **Access creep.** Nobody's access ever shrinks, only grows, as roles change over time.
- **Slow offboarding.** Revocation treated as a lower priority than other offboarding paperwork.
- **Shared "admin" logins.** A convenience account used by multiple people, with no way to attribute a specific action to a specific person.
