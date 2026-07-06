---
id: DOC-BIZ-010
title: Business Risks and Assumptions
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: business
tags: [business, risk, assumptions, standard]
dependencies: [DOC-BIZ-002]
related: [DOC-BIZ-011, DOC-SEC-003, DOC-ENG-011]
---

# Business Risks and Assumptions

Defines how business risks, assumptions, dependencies, constraints, unknowns, and mitigation plans are documented and reviewed at the company level. This is where risks surfaced across every domain — technical debt, security exposure, market assumptions, key-person dependency — get seen together, since a risk that looks small in one domain can be material in combination with another.

## What Counts as a Business Risk

Anything that could materially prevent the company from achieving its strategy or surviving: a market assumption that might be wrong ([MARKET-AND-CUSTOMER-STRATEGY.md](MARKET-AND-CUSTOMER-STRATEGY.md)), a concentration risk (one customer, one channel, one key person), a technical or security risk with business consequences ([TECHNICAL-DEBT.md](../03-engineering/TECHNICAL-DEBT.md), [SECURITY-METRICS.md](../14-security-compliance/SECURITY-METRICS.md) risk trends), or a financial assumption that hasn't held ([FINANCIAL-MODEL-AND-ASSUMPTIONS.md](../08-investors/FINANCIAL-MODEL-AND-ASSUMPTIONS.md)).

## Assumptions

Strategy and the business model rest on assumptions — stated explicitly (market size, willingness to pay, retention behavior) rather than left implicit. An assumption not written down can't be tested or flagged when it turns out wrong.

## Dependencies

What the business depends on to function — a specific vendor ([VENDOR-AND-THIRD-PARTY-RISK.md](../14-security-compliance/VENDOR-AND-THIRD-PARTY-RISK.md)), a specific person, a specific customer concentration, a specific channel. Each dependency is a risk in proportion to how hard it would be to replace.

## Constraints

Real limits the company operates within — budget, headcount, regulatory, technical — named so strategy is set against actual constraints, not an idealized unconstrained version of the business.

## Unknowns

What the company genuinely doesn't know yet but that matters — distinct from assumptions (a stated best guess) and risks (a known negative possibility). An honest unknowns list is more useful than false confidence.

## Mitigation Plans

Each material risk has a stated response: reduce it, accept it explicitly (per [SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](../14-security-compliance/SECURITY-COMPLIANCE-OPERATING-SYSTEM.md)'s risk-acceptance discipline, applied at business level), or monitor it for change. A risk with no response is a risk nobody's actually managing.

## Review

The risk register is reviewed on [OPERATING-CADENCE.md](OPERATING-CADENCE.md)'s rhythm and whenever a domain surfaces something material — an aging vulnerability, a churn pattern, a market shift. This is where domain-level risk signals (technical debt, security findings, churn themes) get evaluated for business-level consequence.

## Required Artifacts

A business risk register: risk, assumption or dependency it relates to, likelihood/impact, mitigation, owner, last-reviewed date.

## Ownership

Leadership owns the risk register and accepts residual risk; domain owners surface risks from their own area and own executing mitigation within it.

## Anti-Patterns

- **Risks felt but not written down.** Real, known concerns that live only as background anxiety, never formally tracked.
- **Domain risk silos.** A security finding, a churn pattern, and a market assumption never viewed together, missing a compounding risk.
- **Mitigation without follow-through.** A stated mitigation plan that's never actually checked for progress.
