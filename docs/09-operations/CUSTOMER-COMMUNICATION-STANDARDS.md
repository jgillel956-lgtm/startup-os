---
id: DOC-OPS-008
title: Customer Communication Standards
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: operations
tags: [operations, communication, standard]
dependencies: [DOC-OPS-003]
related: [DOC-OPS-007, DOC-AI-002]
---

# Customer Communication Standards

Defines tone, clarity, ownership language, update cadence, and how to communicate uncertainty without overcommitting — for every customer-facing message, not only incidents.

## Tone

Direct, respectful, and human — not scripted-sounding, not defensive. A customer who's frustrated gets acknowledgment of the frustration, not just a procedural answer.

## Clarity

- Say what happened, what it means for the customer, and what happens next — in that order.
- Avoid internal jargon (system/component names, internal ticket IDs) unless the customer already uses them.
- One clear next step per message — a message with three vague possibilities gives the customer nothing to act on.

## Ownership Language

- Use "we," not passive voice, for anything the company is responsible for: "we introduced a bug," not "a bug was introduced."
- Do not blame a vendor, a third party, or "unprecedented circumstances" as a way to avoid stating what the company itself will do about it — naming a contributing cause is fine; using it to dodge ownership is not.

## Update Cadence

Follow [SLA-AND-RESPONSE-STANDARDS.md](SLA-AND-RESPONSE-STANDARDS.md)'s cadence by severity for incidents and tickets. Outside of active issues, proactive communication (e.g. planned maintenance) is sent far enough ahead that customers can plan around it.

## What to Avoid

- **Overcommitting.** Don't promise a specific fix time, feature date, or outcome that support doesn't control — commit to the next update, not the resolution, unless engineering has explicitly confirmed the resolution timing.
- **False certainty.** Don't state a cause as confirmed when it's still a hypothesis.
- **Silence as a strategy.** Going quiet to avoid delivering bad news makes the eventual news land worse.
- **Corporate hedge-speak.** "We take this seriously" with no concrete action reads as empty — pair any acknowledgment with what's actually being done.

## Communicating Uncertainty

It is acceptable, and often correct, to tell a customer "we don't yet know X" — paired with what *is* known and when they'll hear more. Uncertainty stated honestly, with a next update promised and kept, builds more trust than false confidence that later turns out wrong.

## AI-Generated Customer Communication

If an AI agent drafts a customer-facing message, a human reviews it before it sends for anything above routine/templated responses — an AI agent does not independently commit the company to a timeline, a compensation decision, or a characterization of what went wrong (see [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).
