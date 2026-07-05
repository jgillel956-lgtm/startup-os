---
id: DOC-DSG-001
title: Design — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: design
tags: [design, overview, operating-system]
dependencies: []
related: [DOC-DSG-002, DOC-PRD-001, DOC-ENG-001, DOC-OPS-001]
---

# Design — Overview

The design domain defines the **Design Operating System**: how a Startup OS company uses research, experience mapping, prototyping, a design system, content, accessibility, handoff, and design QA to turn product intent into a clear, usable customer experience.

## Where This Sits

```
Product (docs/02-product/)        "what to build, and why"
  → Design (docs/05-design/)          "how it should feel and work for the user"
      → Engineering (docs/03-engineering/)  "how it gets built, technically"
          → Operations & Support (docs/09-operations/)  "how customers are supported once it's live"
              ↺ feedback flows back into design, product, and engineering
```

Design starts once a capability or PRD has enough problem clarity to design against (see [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md), Solution Design stage) and runs alongside Specification and Architecture Review — design and technical design inform each other rather than happening in strict sequence.

## Documents

| Document | Defines |
|----------|---------|
| [DESIGN-OPERATING-SYSTEM.md](DESIGN-OPERATING-SYSTEM.md) | Principles, ownership, collaboration model, review cadence |
| [UX-RESEARCH.md](UX-RESEARCH.md) | How research and customer insight are collected and used |
| [EXPERIENCE-MAPPING.md](EXPERIENCE-MAPPING.md) | Journeys, personas, service blueprints, experience gaps |
| [WIREFRAMES-AND-PROTOTYPES.md](WIREFRAMES-AND-PROTOTYPES.md) | When to sketch, wireframe, prototype, or mock up in high fidelity |
| [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) | Reusable components, tokens, interaction and layout standards |
| [CONTENT-AND-MICROCOPY.md](CONTENT-AND-MICROCOPY.md) | Product copy, labels, errors, empty states, onboarding language |
| [ACCESSIBILITY-AND-INCLUSION.md](ACCESSIBILITY-AND-INCLUSION.md) | Accessibility expectations and inclusive design principles |
| [DESIGN-HANDOFF.md](DESIGN-HANDOFF.md) | How approved designs reach engineering, complete and specified |
| [DESIGN-QA.md](DESIGN-QA.md) | Reviewing implemented UI against approved design |
| [DESIGN-FEEDBACK-LOOP.md](DESIGN-FEEDBACK-LOOP.md) | How usability and support signal flows back into design |
| [DESIGN-METRICS.md](DESIGN-METRICS.md) | Task success, usability issues, design debt, component adoption |

## How Design Connects to Everything Else

- **Product** (`docs/02-product/`) — design works from an active capability/PRD ([PRD-STANDARD.md](../02-product/PRD-STANDARD.md)) and feeds usability findings back into [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) and [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md).
- **Engineering** (`docs/03-engineering/`) — approved design becomes input to [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md); [DESIGN-HANDOFF.md](DESIGN-HANDOFF.md) is the bridge; [DESIGN-QA.md](DESIGN-QA.md) closes the loop after implementation.
- **Operations & Support** (`docs/09-operations/`) — support-surfaced usability issues and customer-facing incidents are design input via [DESIGN-FEEDBACK-LOOP.md](DESIGN-FEEDBACK-LOOP.md), mirroring [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md).
- **AI** (`docs/04-ai/`) — AI agents implementing UI work from handed-off design the same way they implement from any spec; [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md) applies throughout.

## Ownership Boundary

Product owns product intent and prioritization. Design owns user experience clarity and usability. Engineering owns technical implementation and system health. Operations owns customer communication and support coordination. Design does not decide *what* ships (product's call) or *how* it's technically built (engineering's call) — it decides how the thing that's being built should look, feel, and behave for the person using it, and holds that ground the same way engineering holds feasibility.
