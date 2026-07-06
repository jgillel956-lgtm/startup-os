---
id: DOC-FND-035
title: Company Operating Package
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: foundation
tags: [foundation, operating-package, onboarding, minimum-viable-documentation]
dependencies: [DOC-FND-032]
related: [DOC-FND-033, DOC-FND-034, DOC-FND-016]
---

# Company Operating Package

Defines the minimum set of filled-in documents and artifacts a new company needs before it can reasonably call itself "operational" on Startup OS — as distinct from [NEW-COMPANY-SETUP-CHECKLIST.md](NEW-COMPANY-SETUP-CHECKLIST.md)'s step-by-step actions. This document is a bill of materials (what must exist); the checklist is a sequence (what to do, in order). A company can work through the checklist and still be missing something on this list if a step was done superficially — this is the list to check against for that.

## Why a Minimum Package, Not "All of Startup OS"

Per [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md), standing up all sixteen domains on day one produces mostly empty, unmaintained documentation — worse than not having it. This package names the smallest real set that lets a company actually run, not the full framework.

## The Minimum Package

| Artifact | Standard it follows | Why it's non-negotiable |
|----------|---------------------|--------------------------|
| A filled [COMPANY-STRATEGY.md](../01-business/COMPANY-STRATEGY.md) | [BUSINESS-STRATEGY-TEMPLATE.md](../10-templates/BUSINESS-STRATEGY-TEMPLATE.md) | Every other document traces back to this; without it, later work has no anchor to check against. |
| A filled [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md) | — | Prevents product, marketing, and sales from independently choosing different customers. |
| At least one real capability in [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md) | [CAPABILITY-TEMPLATE.md](../10-templates/CAPABILITY-TEMPLATE.md) | A company with nothing defined to build has nothing for engineering, design, or marketing to act on. |
| At least one active PRD | [PRD-STANDARD.md](../02-product/PRD-STANDARD.md), [PRD-TEMPLATE.md](../10-templates/PRD-TEMPLATE.md) | Per [ENGINEERING-OPERATING-SYSTEM.md](../03-engineering/ENGINEERING-OPERATING-SYSTEM.md), engineering does not accept an underspecified request as a starting point. |
| A technical design for what's actually being built | [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md) | Implementation without a reviewed design produces exactly the undocumented decisions [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) exists to prevent. |
| Positioning that traces to a real capability | [POSITIONING-AND-MESSAGING.md](../06-marketing/POSITIONING-AND-MESSAGING.md) | Prevents marketing from claiming something the company hasn't built. |
| A support intake point | [CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md) | The first customer's first problem needs somewhere to go — this cannot be improvised after the fact. |
| A stated review cadence | [OPERATING-CADENCE.md](../01-business/OPERATING-CADENCE.md) | An unreviewed metric or strategy document decays silently; a stated cadence is what keeps any of the above current. |

## What's Deliberately Not in the Minimum Package

- **Sales infrastructure** ([docs/07-sales/](../07-sales/README.md)) — only required once real prospect conversations start; see [STARTUP-OS-IMPLEMENTATION-PATHS.md](STARTUP-OS-IMPLEMENTATION-PATHS.md) for when this moves earlier (sales-led companies).
- **Customer success infrastructure** ([docs/13-customer-success/](../13-customer-success/README.md)) beyond basic onboarding — only required once there are accounts to retain, not before the first sale.
- **Investor documentation** ([docs/08-investors/](../08-investors/README.md)) — only required once fundraising is actually underway.
- **Security & compliance documentation** ([docs/14-security-compliance/](../14-security-compliance/README.md)) beyond what's already implied by engineering's own standards — required earlier if handling sensitive data from day one, per [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md).
- **Design system maturity** ([DESIGN-SYSTEM.md](../05-design/DESIGN-SYSTEM.md)) — a design brief and a working UI are enough for the minimum package; a full documented design system can follow once there's more than one surface to keep consistent.

## Confirming the Package Is Real, Not Nominal

Every artifact in the table above is checked against [DOCUMENTATION-VALIDATION-CHECKLIST.md](../00-foundation/DOCUMENTATION-VALIDATION-CHECKLIST.md) and run through `npm run validate` (or the equivalent in the company's own repository) before being counted as complete. A copied template with placeholders still in it does not satisfy this package — see [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md)'s "templates are copied out, never filled in place."

## Related Docs

[EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md) · [NEW-COMPANY-SETUP-CHECKLIST.md](NEW-COMPANY-SETUP-CHECKLIST.md) · [STARTUP-OS-IMPLEMENTATION-PATHS.md](STARTUP-OS-IMPLEMENTATION-PATHS.md) · [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md)
