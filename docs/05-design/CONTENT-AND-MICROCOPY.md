---
id: DOC-DSG-007
title: Content and Microcopy
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, content, microcopy, standard]
dependencies: [DOC-DSG-002]
related: [DOC-DSG-008, DOC-OPS-008]
---

# Content and Microcopy

Defines standards for product copy: labels, errors, empty states, confirmation messages, and onboarding language. This is the in-product counterpart to [CUSTOMER-COMMUNICATION-STANDARDS.md](../09-operations/CUSTOMER-COMMUNICATION-STANDARDS.md) — same principles (clarity, honesty, ownership language), applied to interface text instead of support conversations.

## General Principles

- **Say what the user needs to know to act**, in the fewest words that do it clearly — not the fewest words period; clarity beats brevity when they conflict.
- **Match tone to context** — a confirmation for a routine action is calm; a warning before a destructive action is direct and unambiguous, not cute.
- **Use plain language.** No internal terminology, no jargon the user hasn't been introduced to.

## Labels

Labels describe what the control does, in the user's terms, not the internal name for it. A button labeled with an internal feature name means nothing to the person clicking it.

## Errors

- State what went wrong, in terms the user can understand, and what they can do about it — an error with no recovery path is a dead end.
- Never expose internal details (stack traces, internal codes, raw API errors) in user-facing error text — that's both a clarity failure and, per [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md), a potential security leak.
- Error copy is written alongside the [error handling requirements](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md) in the governing PRD/story — not improvised during implementation.

## Empty States

An empty state explains why there's nothing here and, where relevant, what to do next — not just "no results." A first-time empty state (nothing yet because the user hasn't started) and a filtered empty state (nothing matches the current filter) are different messages; don't reuse one for both.

## Confirmation Messages

Confirm what actually happened, specifically — "saved" is weaker than "your changes were saved." For consequential or irreversible actions, the confirmation *before* the action is more important than the message after — state clearly what's about to happen, especially for anything destructive or hard to reverse.

## Onboarding Language

Onboarding copy orients a new user to what they can do next, not everything the product can do — overloading a first-run experience with every capability defeats the purpose of onboarding. Tie onboarding content to the actual capabilities a new user needs first, per the capability's documented use cases ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)).

## Review

Content is reviewed for clarity and tone the same way a design mockup is reviewed for usability — as part of [DESIGN-HANDOFF.md](DESIGN-HANDOFF.md), not left for engineering to fill in with placeholder text that ships unreviewed.

## Anti-Patterns

- **Placeholder copy shipping to production.** "Lorem ipsum" or "TODO: write this" reaching real users because nobody circled back.
- **Inconsistent terminology.** Calling the same concept by two different names in two different parts of the product.
- **Blame-shifting error copy.** Error text that implies the user did something wrong when the system is actually at fault.
