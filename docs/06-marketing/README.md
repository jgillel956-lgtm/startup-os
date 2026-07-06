---
id: DOC-MKT-001
title: Marketing — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, overview, operating-system]
dependencies: []
related: [DOC-MKT-002, DOC-PRD-001, DOC-DSG-001, DOC-OPS-001]
---

# Marketing — Overview

The marketing domain defines the **Marketing Operating System**: how a Startup OS company defines positioning, messaging, audience, content, website presence, campaigns, brand standards, competitive narrative, and marketing performance.

## Where This Sits

```
Business strategy (docs/01-business/)
  → Product (docs/02-product/)        "what to build, and why"
      → Design (docs/05-design/)          "how it should feel and work"
          → Marketing (docs/06-marketing/)    "how the market understands and wants it"
              → Sales (docs/07-sales/, future layer)  "how active opportunities are won"
```

Marketing translates what product has built and design has shaped into language and presence the market can find, understand, and act on. It does not decide what gets built (product) or how it looks and behaves (design) — it decides how the market hears about it, and creates the demand sales eventually closes.

## Documents

| Document | Defines |
|----------|---------|
| [MARKETING-OPERATING-SYSTEM.md](MARKETING-OPERATING-SYSTEM.md) | Principles, ownership, planning cadence, collaboration |
| [POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md) | Value proposition, category language, messaging hierarchy |
| [IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md) | Target markets, ICPs, personas, qualification signals |
| [BRAND-AND-VOICE.md](BRAND-AND-VOICE.md) | Brand principles, tone, voice, naming, visual consistency |
| [WEBSITE-AND-LANDING-PAGES.md](WEBSITE-AND-LANDING-PAGES.md) | How the website and landing pages communicate and convert |
| [CONTENT-MARKETING.md](CONTENT-MARKETING.md) | Blogs, guides, case studies, comparison pages, FAQs |
| [CAMPAIGNS-AND-DEMAND-GENERATION.md](CAMPAIGNS-AND-DEMAND-GENERATION.md) | Planning, launching, tracking, and improving campaigns |
| [COMPETITIVE-MARKETING.md](COMPETITIVE-MARKETING.md) | Competitors, differentiation, battlecards, objections |
| [MARKETING-TO-SALES-HANDOFF.md](MARKETING-TO-SALES-HANDOFF.md) | How qualified interest and context reach sales |
| [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md) | Review gates for claims, proof, compliance-sensitive statements |
| [MARKETING-METRICS.md](MARKETING-METRICS.md) | Conversion, qualified leads, campaign ROI, attribution limits |

## How Marketing Connects to Everything Else

- **Product** (`docs/02-product/`) — positioning is built on real capabilities and their documented problems ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)); marketing does not claim what product hasn't shipped or committed to. Roadmap awareness informs what marketing can safely say is coming.
- **Design** (`docs/05-design/`) — brand, website, and landing pages draw on the [design system](../05-design/DESIGN-SYSTEM.md) for visual consistency; content follows the same clarity and accessibility bar as product content ([CONTENT-AND-MICROCOPY.md](../05-design/CONTENT-AND-MICROCOPY.md), [ACCESSIBILITY-AND-INCLUSION.md](../05-design/ACCESSIBILITY-AND-INCLUSION.md)).
- **Sales** (`docs/07-sales/`, not yet built) — marketing creates demand; sales converts qualified interest into closed business. [MARKETING-TO-SALES-HANDOFF.md](MARKETING-TO-SALES-HANDOFF.md) defines marketing's side of that boundary now, ready to connect once a sales operating system exists.
- **Operations & Support** (`docs/09-operations/`) — support themes and customer language ([CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)) are direct input to messaging accuracy and content topics.
- **Engineering / AI** (`docs/03-engineering/`, `docs/04-ai/`) — technical proof points and security/trust language are verified against what's actually true, not just what sounds credible (see [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md)).

## Ownership Boundary

Marketing owns market narrative, positioning, messaging, audience education, and demand creation. Product owns product direction and capabilities. Sales (once it exists) owns active opportunity management. Design owns customer experience and visual clarity. Operations owns customer support communication. Marketing does not decide what ships, does not run active sales conversations, and does not set the visual system — it uses what those functions produce to build market understanding and demand.
