---
id: DOC-DSG-003
title: UX Research
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, research, ux, standard]
dependencies: [DOC-DSG-002]
related: [DOC-DSG-004, DOC-PRD-003, DOC-OPS-011]
---

# UX Research

Defines how customer research, stakeholder interviews, usability insights, pain points, and feedback are collected, documented, and converted into product input. No specific research tool is assumed.

## What Counts as Research

Direct observation or conversation with real users or stakeholders — interviews, usability tests, surveys with open-ended follow-up, and analysis of real usage. Internal opinion about what users probably want is not research; it's a hypothesis research can test.

## When Research Happens

- **Before design starts**, at a capability's Research/Problem Definition stage ([PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)) — to confirm the problem is real.
- **During design**, to validate a direction before committing engineering effort to it (see [WIREFRAMES-AND-PROTOTYPES.md](WIREFRAMES-AND-PROTOTYPES.md)).
- **After release**, to confirm the shipped experience actually works (feeds [DESIGN-FEEDBACK-LOOP.md](DESIGN-FEEDBACK-LOOP.md)).

## Collecting Research

- State the question being answered before starting — research without a question produces anecdotes, not evidence.
- Talk to actual users of the relevant type (see [USER-STORY-STANDARD.md](../02-product/USER-STORY-STANDARD.md)'s actor concept) — not whoever's easiest to reach, unless they genuinely represent the target actor.
- Capture verbatim quotes and specific observed behavior, not paraphrased impressions — paraphrasing loses the signal that later disambiguates disagreement.

## Documenting Research

Each research effort records: the question asked, who was involved (type/count, not necessarily names), what was observed, and what it implies. A finding without a stated implication is a fact with nowhere to go — always connect it to a decision it should inform.

## Converting Research into Product Input

- A finding that confirms or challenges a documented problem statement updates the relevant capability's `PROBLEM.md` or PRD (see [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md), [PRD-STANDARD.md](../02-product/PRD-STANDARD.md)) — research that isn't connected back to the document it affects doesn't actually change anything.
- A finding that surfaces a new problem becomes product input via the same idea/research path any new idea takes ([PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)), not a side channel that bypasses prioritization.

## Support and Analytics as Research Input

Support tickets ([CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)) and usage analytics are secondary research sources — they tell you *what* is happening at scale; direct research tells you *why*. Use both: a spike in a specific support category is a prompt to go do targeted research, not a substitute for it.

## Review Gate

Research is "done enough to design from" when the stated question has a clear answer, backed by more than one source or observation where the decision is material — a single anecdote does not justify a hard-to-reverse design decision.

## Anti-Patterns

- **Confirmation-seeking research.** Only asking questions that validate a decision already made.
- **Research theater.** Running interviews and never writing down or using the findings.
- **Sample of one.** Generalizing a UX direction from a single user's reaction.
