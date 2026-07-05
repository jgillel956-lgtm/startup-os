---
id: DOC-MKT-006
title: Website and Landing Pages
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, website, landing-pages, standard]
dependencies: [DOC-MKT-003, DOC-MKT-005]
related: [DOC-MKT-008, DOC-DSG-008, DOC-MKT-012]
---

# Website and Landing Pages

Defines how the website and landing pages communicate the product, audience, value, proof, calls to action, conversion paths, and trust. No specific website platform or builder is assumed.

## What a Website Page Must Communicate

Every primary page answers, in order: what this is, who it's for, why it matters (value/outcome), and what to do next. A visitor who can't answer "is this for me" within seconds of arriving is a visitor who leaves — clarity here is the highest-leverage marketing decision on the page.

## Audience and Value

Pages speak to a specific ICP/persona ([IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md)), using the value proposition and key messages from [POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md) — not a generic pitch meant to fit everyone.

## Proof

Claims on the page are backed by proof points ([POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md)) — a testimonial, a metric, a concrete example — reviewed per [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md) before publishing. Unsubstantiated superlatives ("the best," "the only") are avoided unless there's a specific, defensible claim behind them.

## Calls to Action

Each page has one primary call to action matched to where the visitor likely is in their decision — a page written for someone who's never heard of the category shouldn't lead with "buy now," and a page written for a returning, informed visitor shouldn't bury the action in exploratory content.

## Conversion Paths

The path from arrival to conversion (signup, demo request, contact) is short and matches what [MARKETING-TO-SALES-HANDOFF.md](MARKETING-TO-SALES-HANDOFF.md) needs to route the resulting interest correctly. A conversion path that collects too little context makes handoff harder; one that asks too much before showing value loses visitors before they convert.

## Trust

Security, compliance, and social-proof elements ([BRAND-AND-VOICE.md](BRAND-AND-VOICE.md) trust signals) appear where they matter most to the ICP's concerns — e.g. near a signup form for a product handling sensitive data. Trust content is never asserted beyond what's actually true or currently valid.

## Accessibility and Clarity

Website and landing pages meet the same accessibility bar as the product itself ([ACCESSIBILITY-AND-INCLUSION.md](../05-design/ACCESSIBILITY-AND-INCLUSION.md)) — contrast, keyboard navigation, and screen-reader labeling apply to marketing surfaces, not just the product UI.

## Required Artifacts

A page brief before building: target audience/ICP, primary message, proof points to include, and the intended call to action — the marketing equivalent of a PRD's goals section, sized to the page.

## Review Gate

Before publishing: claims are verified ([MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md)), the page matches current product reality (no promoting a deprecated or not-yet-shipped capability as current), and accessibility basics pass.

## Ownership

Marketing drafts and owns page content and strategy; design ensures visual/accessibility consistency; whoever holds review authority signs off on claims before publish.

## Anti-Patterns

- **Everything-page.** Trying to speak to every ICP and use case on one page, diluting the message for all of them.
- **Stale proof.** A testimonial or metric that's years old and no longer representative, left up because nobody revisits it.
- **Conversion friction mismatch.** Asking for a phone number to read a blog post, or asking nothing before a high-intent demo request.
