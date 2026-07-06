---
id: DOC-KNW-003
title: Knowledge Capture
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, capture, standard]
dependencies: [DOC-KNW-002]
related: [DOC-DSG-003, DOC-PAT-010]
---

# Knowledge Capture

## Purpose

Defines how a finding, learning, or piece of external knowledge becomes a recorded knowledge item — before it's lost to memory or scattered across chat threads.

## When to Use

Whenever something is learned that will matter again later and doesn't already have an obvious home in an existing standard, decision record, or runbook: a research finding, a synthesized pattern across support tickets, an external market fact, a retrospective learning.

## Owner

Whoever observes or synthesizes the finding.

## Inputs

An observation, a research session, a retrospective, or a synthesized pattern from [feedback loop patterns](../11-patterns/FEEDBACK-LOOP-PATTERNS.md).

## Outputs

A dated, sourced knowledge record, placed per [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md).

## Required Artifacts

Each captured record states: what was found, its source (a research session, a specific data set, an external reference), the date, and its confidence level (confirmed fact, working assumption, single anecdote).

## Review Points

- Was this captured close to the source, or reconstructed from memory afterward?
- Does it state a source and confidence level, or read as unattributed certainty?
- Does it duplicate something already captured elsewhere (check [KNOWLEDGE-RETRIEVAL.md](KNOWLEDGE-RETRIEVAL.md) first)?

## Examples

- A UX research session's findings, captured the same day per [UX-RESEARCH.md](../05-design/UX-RESEARCH.md)'s documentation requirement.
- A synthesized theme from support tickets, per [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md), that doesn't map to one specific product change yet.
- An external market fact (industry trend, competitor move) relevant to [MARKET-AND-CUSTOMER-STRATEGY.md](../01-business/MARKET-AND-CUSTOMER-STRATEGY.md).

## Anti-Patterns

- **Capture by memory, later.** Writing up a finding days after the fact, losing detail and introducing recall bias.
- **Unattributed certainty.** Recording a claim with no stated source or confidence level.
- **Capturing what already has a home.** Duplicating something that belongs in a domain's own standard or an existing decision record.

## Related Docs

[KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md) · [UX-RESEARCH.md](../05-design/UX-RESEARCH.md) · [FEEDBACK-LOOP-PATTERNS.md](../11-patterns/FEEDBACK-LOOP-PATTERNS.md)
