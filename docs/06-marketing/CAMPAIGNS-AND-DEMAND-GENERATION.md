---
id: DOC-MKT-008
title: Campaigns and Demand Generation
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, campaigns, demand-generation, standard]
dependencies: [DOC-MKT-003, DOC-MKT-004]
related: [DOC-MKT-010, DOC-MKT-012]
---

# Campaigns and Demand Generation

Defines how campaigns are planned, launched, tracked, evaluated, and improved across channels — without assuming any specific channel, ad platform, or automation tool.

## What a Campaign Is

A coordinated effort, with a stated goal and audience, running for a defined period, using one or more channels. A campaign without a stated goal is just activity — it can't be evaluated as a success or failure because nothing defined what either would look like.

## Planning a Campaign

1. **Goal** — what this campaign is meant to achieve (awareness, qualified leads, content engagement) — one primary goal, not several competing ones.
2. **Audience** — which ICP/segment ([IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md)) this targets.
3. **Message** — which key message/proof point ([POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md)) it carries.
4. **Channel(s)** — wherever the audience actually is; no specific channel is prescribed by this standard.
5. **Success metric** — the specific number that will determine whether this campaign worked (see [MARKETING-METRICS.md](MARKETING-METRICS.md)).

## Launching

- Assets (content, landing pages, ad creative) are reviewed per [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md) before going live.
- Tracking is confirmed working *before* launch, not discovered broken after spend has already gone out — an unmeasured campaign can't be evaluated or improved.

## Tracking

Track against the campaign's own stated success metric, not a vanity number that happens to look good. Attribution is imperfect (see [MARKETING-METRICS.md](MARKETING-METRICS.md)'s attribution-limitations section) — note that limitation rather than presenting attributed numbers as more certain than they are.

## Evaluating

A campaign is evaluated against its stated goal, on a schedule decided before launch (mid-run check-in, post-run retrospective). Evaluation asks: did it hit the target, and what would change next time — not just "did it feel like it went well."

## Improving

- A successful campaign's approach (audience, message, channel) is documented so it can be repeated deliberately, not rediscovered from memory next time.
- An underperforming campaign's likely cause (wrong audience, weak message, wrong channel, poor tracking) is named specifically — "it didn't work" without a hypothesis doesn't inform the next attempt.

## Required Artifacts

A campaign brief before launch (goal, audience, message, channel, success metric); a results summary after, including what's being changed next time.

## Ownership

Marketing plans, launches, and evaluates campaigns; whoever holds review authority signs off on public-facing assets before spend or publish.

## Anti-Patterns

- **Channel-first planning.** Picking a channel because it's trendy, then reverse-engineering a message for it, instead of starting from audience and goal.
- **No pre-launch tracking check.** Discovering after the campaign ends that conversions were never actually being measured.
- **Success theater.** Reporting vanity metrics (impressions, clicks) as success when the stated goal was qualified leads or pipeline.
