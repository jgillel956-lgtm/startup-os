---
id: DOC-PAT-005
title: Handoff Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, handoff]
dependencies: [DOC-PAT-002]
related: [DOC-SLS-011, DOC-CS-004]
---

# Handoff Patterns

## Purpose

Transferring context between owners — one function to another, one stage to the next — without forcing whoever receives it to re-ask what's already known.

## When to Use

Any point where ownership of a customer, a task, or a decision moves from one function to another: sales to customer success, marketing to sales, design to engineering, an on-call rotation change.

## Common Pattern

```
Qualify what's being handed off  →  Package full context (not just the artifact)  →
Confirm receipt with a named owner  →  Close the loop (report back what happened)
```

The step most often skipped is "close the loop" — without it, the handing-off side never learns whether their handoff actually worked, and the same gaps repeat every cycle.

## Inputs

Whatever the receiving side needs to act without re-interviewing the source: history, context, prior decisions, known risks.

## Outputs

A receiving owner who can act immediately, and — eventually — feedback to the sending side about how it went.

## Owner

The sending side owns producing a complete handoff; the receiving side owns confirming receipt and not silently absorbing gaps.

## Review Points

- Could the receiving side act without asking the source to repeat themselves?
- Is there a named receiving owner, or did the handoff go into a queue nobody's watching?
- Does feedback ever flow back to the sending side, or does the loop only run one direction?

## Example Use Cases

- [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md)
- [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md)
- [IMPLEMENTATION-HANDOFF.md](../13-customer-success/IMPLEMENTATION-HANDOFF.md)
- [DESIGN-HANDOFF.md](../05-design/DESIGN-HANDOFF.md)

## Anti-Patterns

- **Context-free handoff.** A name and a task with no history attached.
- **Unrouted handoff.** Sent to a team or queue, not a named owner who's acknowledged it.
- **One-way loop.** The sending side never learns whether their handoffs actually set the receiver up well.

## Related Docs

[SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) · [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md) · [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)
