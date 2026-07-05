---
id: DOC-MKT-004
title: Ideal Customer Profile
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, icp, personas, standard]
dependencies: [DOC-MKT-002]
related: [DOC-MKT-003, DOC-PRD-006]
---

# Ideal Customer Profile

Defines how target markets, ideal customer profiles (ICPs), buyer personas, user personas, market segments, and qualification/disqualification signals are documented.

## ICP vs. Persona

- **ICP** — the type of *company or account* that gets the most value from the product (size, industry, situation). Relevant primarily for B2B; a consumer product may define a target segment instead.
- **Buyer persona** — the person who decides to purchase; may differ from who uses the product day to day.
- **User persona** — the person who actually uses the product, corresponding to an actor in [USER-STORY-STANDARD.md](../02-product/USER-STORY-STANDARD.md). Marketing's persona work and product's actor definitions should describe the same real people — divergence between them is a signal one side has drifted from reality.

## Target Markets and Segments

A segment is a group of ICPs/personas that share enough in common to be addressed with the same positioning and messaging. Segmenting too finely creates messaging nobody can maintain; segmenting too broadly produces messaging specific enough to resonate with no one.

## Documenting an ICP/Persona

Each documented profile states: defining characteristics, the specific pain it experiences (per [POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md)), what outcome it's seeking, and where it can realistically be reached. A profile with no stated pain or reachable channel is a demographic sketch, not a usable marketing asset.

## Qualification Signals

Observable signals that indicate a prospect matches the ICP — used to focus campaigns and, later, to hand off to sales with useful context (see [MARKETING-TO-SALES-HANDOFF.md](MARKETING-TO-SALES-HANDOFF.md)). Signals are specific and checkable, not vague ("seems interested" is not a qualification signal; "downloaded the pricing page after reading two technical guides" is).

## Disqualification Signals

Equally important: signals that a prospect is *not* a fit — a wrong company size, a use case the product explicitly doesn't serve (see [Non-Goals](../02-product/PRD-STANDARD.md) in the relevant PRDs), or a need the roadmap has no plan to address. Naming disqualification signals prevents wasted effort on both marketing and, later, sales.

## Grounding in Real Evidence

ICPs and personas are built from actual customer research ([UX-RESEARCH.md](../05-design/UX-RESEARCH.md)) and real usage/support patterns ([CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)) — not assumed from who the founder imagines the customer to be. A profile that hasn't been checked against real customers in the last several cycles is due for revalidation.

## Review

ICPs/personas are revisited when: the product's capabilities materially expand or narrow, a new segment consistently shows up in research/support with a pattern the current profile doesn't capture, or qualification signals stop predicting actual fit.

## Ownership

Marketing owner maintains the documented profiles; product confirms they match who capabilities are actually built for; sales (once it exists) validates qualification signals against real conversion outcomes.

## Anti-Patterns

- **Aspirational ICP.** Defining the customer the company wishes it had instead of the one the product actually serves well today.
- **One ICP for everything.** Using a single broad profile when distinct segments actually need different messaging.
- **Stale personas.** Personas built once, early, and never revisited as the product and market evolve.
