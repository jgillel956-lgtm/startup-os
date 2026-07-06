---
id: DOC-SEC-003
title: Security Principles
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, principles, standard]
dependencies: [DOC-SEC-002]
related: [DOC-SEC-004, DOC-SEC-005, DOC-ENG-006]
---

# Security Principles

Defines practical security principles that apply regardless of stack, industry, or company size. These are the lens every other document in this domain applies through.

## Least Privilege

Access — human or system — is granted to what's actually needed, not by default to everything. Broad access granted "to be safe" or "to save time setting up permissions" is itself a risk; see [ACCESS-CONTROL.md](ACCESS-CONTROL.md).

## Defense in Depth

No single control is trusted as the only line of defense. A system relying on one gate (e.g. "the firewall handles it") has no fallback when that gate fails — layer controls so one failure doesn't mean total exposure.

## Secure Defaults

The default configuration is the safe one — a feature or system that's insecure until someone remembers to lock it down will eventually ship unlocked. This mirrors [REPOSITORY-STANDARDS.md](../03-engineering/REPOSITORY-STANDARDS.md)'s "default configuration ships safe" rule, applied beyond just application config.

## Auditability

Security-relevant actions (access grants, data access, configuration changes) are traceable after the fact — who did what, when. A system that can't answer "who had access to X on date Y" can't investigate an incident or pass a real audit, regardless of how secure it otherwise is.

## Data Minimization

Collect and retain only the data actually needed for a stated purpose. Data not collected can't be breached, and data minimization directly supports [DATA-PROTECTION.md](DATA-PROTECTION.md) and [COMPLIANCE-OBLIGATIONS.md](COMPLIANCE-OBLIGATIONS.md) simultaneously.

## Risk-Based Decision Making

Not every risk gets the same response — response is proportional to likelihood and impact. A theoretical, low-impact risk doesn't justify the same investment as a likely, high-impact one. Where a risk is knowingly accepted rather than mitigated, that acceptance is explicit and owned by leadership (see [SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](SECURITY-COMPLIANCE-OPERATING-SYSTEM.md)), not silent.

## Applying These Principles at Any Size

A one-person engineering team can't run a formal access-review board, but can still: grant only the access actually needed, keep secrets out of code ([REPOSITORY-STANDARDS.md](../03-engineering/REPOSITORY-STANDARDS.md)), default new configuration to safe, and know who could access what. The principles don't change with size — only the formality of how they're enforced.

## Anti-Patterns

- **Security theater.** Visible controls that don't actually reduce risk, adopted to look compliant rather than to be secure.
- **All-or-nothing access.** Granting broad admin access because scoping it down "takes too long," which is exactly what least privilege exists to prevent.
- **Treating every risk identically.** Spending equal effort on a trivial risk and a severe one, instead of prioritizing by actual impact.
