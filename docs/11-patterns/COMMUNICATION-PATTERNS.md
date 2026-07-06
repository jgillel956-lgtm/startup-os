---
id: DOC-PAT-009
title: Communication Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, communication]
dependencies: [DOC-PAT-002]
related: [DOC-OPS-008, DOC-MKT-005]
---

# Communication Patterns

## Purpose

Telling someone — a customer, an investor, a teammate — the truth clearly, especially when the news isn't good, without either overcommitting or going quiet.

## When to Use

Any external or high-stakes internal communication: an incident update, an investor update, a hard customer conversation, an objection response.

## Common Pattern

```
State what's known (not what's guessed)  →  Use ownership language ("we," not passive voice)  →
Commit to the next update, not a resolution you can't guarantee  →
Keep the promised cadence even when there's nothing new to report
```

Going quiet is the single most common failure mode this pattern prevents — silence during an active problem reads as worse than an honest "still working on it, next update at X."

## Inputs

The actual current state — confirmed facts, not speculation.

## Outputs

A message the recipient can act on or trust, and a kept promise about when they'll hear more.

## Owner

Whoever's closest to the facts drafts it; anything with legal, security, or financial stakes is reviewed before sending (see [REVIEW-GATE-PATTERNS.md](REVIEW-GATE-PATTERNS.md)).

## Review Points

- Does the message say what's actually known, or does it speculate?
- Is there ownership language, or does it dodge responsibility with passive voice?
- Was the next update sent on the promised cadence, even with nothing new to report?

## Example Use Cases

- [CUSTOMER-COMMUNICATION-STANDARDS.md](../09-operations/CUSTOMER-COMMUNICATION-STANDARDS.md)
- [INCIDENT-COMMUNICATION.md](../09-operations/INCIDENT-COMMUNICATION.md)
- [INVESTOR-UPDATES.md](../08-investors/INVESTOR-UPDATES.md)
- [OBJECTION-HANDLING.md](../07-sales/OBJECTION-HANDLING.md)

## Anti-Patterns

- **Going quiet under pressure.** Avoiding an update because the news is bad.
- **False certainty.** Stating a cause or timeline before it's actually confirmed.
- **Corporate hedge-speak.** Acknowledgment with no concrete action attached.

## Related Docs

[CUSTOMER-COMMUNICATION-STANDARDS.md](../09-operations/CUSTOMER-COMMUNICATION-STANDARDS.md) · [BRAND-AND-VOICE.md](../06-marketing/BRAND-AND-VOICE.md) · [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md)
