---
id: DOC-INV-008
title: Investor Data Room
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: investors
tags: [investors, data-room, standard]
dependencies: [DOC-INV-002]
related: [DOC-INV-009, DOC-SEC-005]
---

# Investor Data Room

Defines how investor data rooms are structured, maintained, permissioned, versioned, reviewed, and kept ready for diligence. No specific data room platform is assumed.

## Structure

Organized by category so a reviewer can navigate without guidance: corporate/legal, financials, product/technology, team, customers/traction, security/compliance. A data room organized ad hoc (files dropped in by whoever last needed to add something) slows diligence and looks disorganized at exactly the moment first impressions matter most.

## What Belongs in It

Corporate documents, cap table, financial statements and model, key contracts, product/technology overview, team bios, customer references (with permission — see [CUSTOMER-OUTCOMES.md](../13-customer-success/CUSTOMER-OUTCOMES.md) on confirmed permission before external use), and relevant security/compliance documentation ([COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md)) — scoped to what's actually true and current, never padded with aspirational documents.

## Permissioning

Access follows [ACCESS-CONTROL.md](../14-security-compliance/ACCESS-CONTROL.md)'s least-privilege principle — a prospective investor gets access proportional to how serious the conversation actually is (a light preview set early, full access once diligence is genuinely underway), and access is revoked when a conversation ends without a close.

## Versioning

Documents in the room are current — an outdated financial statement or metric sitting in the room alongside a newer deck creates exactly the kind of inconsistency that erodes investor confidence during diligence.

## Review

The data room is reviewed for completeness and currency before actively fundraising ([FUNDRAISING-STRATEGY.md](FUNDRAISING-STRATEGY.md) readiness checks) — not assembled reactively after an investor asks for something specific.

## Diligence Readiness

Kept in a state where a serious diligence request could be answered largely from what's already there — see [DUE-DILIGENCE.md](DUE-DILIGENCE.md). A data room that requires scrambling to produce basic documents on request signals the company isn't actually ready to raise yet.

## Required Artifacts

A structured folder/document index; an access log; a last-reviewed date per major section.

## Ownership

Leadership owns data room completeness and access decisions; finance maintains financial documents; security/compliance maintains that section; legal counsel maintains corporate/legal documents.

## Anti-Patterns

- **Scramble assembly.** Building the data room only after a raise has already started and an investor is asking for documents.
- **Stale documents.** Financials or metrics in the room that don't match the current deck.
- **Overbroad access.** Granting full data room access to an early, unqualified conversation.
