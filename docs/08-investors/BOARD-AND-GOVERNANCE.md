---
id: DOC-INV-011
title: Board and Governance
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: investors
tags: [investors, governance, board, standard]
dependencies: [DOC-INV-002]
related: [DOC-INV-010, DOC-ENG-004]
---

# Board and Governance

Defines lightweight governance expectations: board or advisor communication, decision records, approvals, meeting materials, and accountability. No specific legal structure or governance platform is assumed, and this document does not substitute for legal counsel on actual corporate governance obligations, which vary by jurisdiction and structure.

## Board or Advisor Communication

Whether the company has a formal board, an advisor group, or neither yet, key decisions and progress are communicated to whoever holds a governance or advisory role — proportional to their actual involvement and authority, not treated as a formality once a board exists.

## Decision Records

Material decisions requiring board or advisor input (a fundraising decision, a major hire, a significant pivot) are documented — context, options, decision, and who approved it — the same discipline as an engineering ADR ([ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)), applied to governance decisions.

## Approvals

Where a decision genuinely requires board approval (as opposed to just board awareness), that distinction is respected — leadership does not present something as already decided when it actually requires sign-off, and does not seek approval for something within its own clear authority just to spread accountability.

## Meeting Materials

Prepared ahead of a board or advisor meeting, covering: progress against milestones, key metrics ([INVESTOR-METRICS.md](INVESTOR-METRICS.md)), and any decisions needing input — sent with enough lead time for the board/advisors to actually engage, not delivered at the meeting itself.

## Accountability

Commitments made in a board or advisor meeting (an action item, a follow-up) are tracked to completion — a governance meeting that produces action items nobody follows up on trains participants to disengage.

## Required Artifacts

A decision log for board/advisor-level decisions; meeting materials and notes, archived; a tracked action-item list.

## Ownership

Leadership owns governance process and board/advisor relationships; whoever holds a specific action item owns following through and reporting back.

## Anti-Patterns

- **Governance theater.** Board meetings that happen on schedule but produce no real accountability or decisions.
- **Approval-seeking for everything.** Bringing routine operational decisions to the board that are within leadership's clear authority.
- **Undocumented major decisions.** A significant pivot or decision that was discussed verbally in a board meeting and never actually recorded.
