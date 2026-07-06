---
id: DOC-PAT-010
title: Feedback Loop Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, feedback-loop]
dependencies: [DOC-PAT-002]
related: [DOC-OPS-011, DOC-DSG-011]
---

# Feedback Loop Patterns

## Purpose

Getting a real signal — a support theme, a usability issue, a lost deal — from wherever it surfaces back to whoever can actually act on it, and closing the loop so the source knows it mattered.

## When to Use

Any point where one domain observes something another domain needs to know: support seeing a usability pattern, sales hearing a recurring objection, customer success seeing a churn cause tied to a product gap.

## Common Pattern

```
Capture the signal where it's observed  →  Distinguish anecdote from pattern (3+ instances)  →
Synthesize before routing (don't forward raw, unfiltered signal)  →
Route to the function that can act  →  Close the loop (tell the source what changed)
```

Synthesizing before routing is what separates a useful feedback loop from noise — forwarding every individual ticket or conversation overwhelms the receiving function; a summarized theme with a stated pattern is what actually gets acted on.

## Inputs

Raw observations from wherever they occur: support tickets, sales conversations, design QA findings, churn conversations.

## Outputs

A synthesized theme routed to the right owner, and eventually a change (or a documented decision not to change) reported back to the source.

## Owner

Whoever observes the signal owns capturing and synthesizing it; whoever owns the affected domain owns deciding what to do; the observing function owns following up if the loop goes quiet.

## Review Points

- Is signal captured as it's categorized (per [SUPPORT-INTAKE-AND-TRIAGE.md](../09-operations/SUPPORT-INTAKE-AND-TRIAGE.md)-style categorization), or lost in individual tickets?
- Does a real pattern (3+ instances) get treated differently from a single anecdote?
- Does the source ever learn what happened as a result, or does the loop only run one direction?

## Example Use Cases

- [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)
- [DESIGN-FEEDBACK-LOOP.md](../05-design/DESIGN-FEEDBACK-LOOP.md)
- [COMPETITIVE-SALES.md](../07-sales/COMPETITIVE-SALES.md) win/loss learning
- [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md) feedback-back section

## Anti-Patterns

- **Forwarding without synthesis.** Sending raw, unfiltered signal to an already-overloaded function.
- **Anecdote treated as pattern.** Reacting to a single loud voice as if it were a confirmed theme.
- **One-way loop.** The source never learning whether their signal led anywhere.

## Related Docs

[CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md) · [DESIGN-FEEDBACK-LOOP.md](../05-design/DESIGN-FEEDBACK-LOOP.md) · [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md)
