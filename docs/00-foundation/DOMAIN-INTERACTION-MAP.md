---
id: DOC-FND-014
title: Domain Interaction Map
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: foundation
tags: [foundation, workflow, navigation, integration]
dependencies: [DOC-FND-013]
related: [DOC-FND-015, DOC-PAT-005]
---

# Domain Interaction Map

How Startup OS domains connect across the workflows that actually cross them. Each flow below already exists as real, cross-linked documentation — this map traces the path through it rather than restating any single domain's content.

## Idea → Product

```
Idea/Research (docs/12-knowledge/, PRODUCT-LIFECYCLE.md) → Problem Definition → Solution Design
  → Specification (PRD-STANDARD.md) → Architecture Review → Ready for Development
```

See [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md) for the full stage-by-stage detail; [KNOWLEDGE-CAPTURE.md](../12-knowledge/KNOWLEDGE-CAPTURE.md) for how research becomes usable evidence along the way.

## Product → Engineering

```
Active PRD (PRD-STANDARD.md) → Technical Design (TECHNICAL-DESIGN.md) → Architecture Decision (if needed)
  → Implementation → Code Review (BRANCHING-AND-CODE-REVIEW.md) → Testing → Release
```

See [ENGINEERING-LIFECYCLE.md](../03-engineering/ENGINEERING-LIFECYCLE.md) for the full lifecycle; product does not hand engineering an idea directly — it hands an active PRD with acceptance criteria.

## Launch → Marketing / Sales

```
Capability ships (CAPABILITY-MODEL.md) → Positioning & Messaging (POSITIONING-AND-MESSAGING.md)
  → Campaign (CAMPAIGNS-AND-DEMAND-GENERATION.md) → Qualified Interest
  → Marketing-to-Sales Handoff (MARKETING-TO-SALES-HANDOFF.md) → Sales Pipeline (SALES-PIPELINE.md)
```

See [MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md) for the handoff contract; marketing does not claim a capability publicly before product has actually shipped it.

## Customer Close → Onboarding

```
Closed-Won (CONTRACTING-AND-CLOSE.md) → Sales-to-Customer Handoff (SALES-TO-CUSTOMER-HANDOFF.md)
  → Customer Onboarding (CUSTOMER-ONBOARDING.md) → Adoption & Engagement (ADOPTION-AND-ENGAGEMENT.md)
  → Ongoing Health Monitoring (CUSTOMER-HEALTH.md)
```

See [SALES-TO-CUSTOMER-HANDOFF.md](../07-sales/SALES-TO-CUSTOMER-HANDOFF.md) for what must transfer — full context, not just a signed contract.

## Support Issue → Product Improvement

```
Ticket (SUPPORT-INTAKE-AND-TRIAGE.md) → Categorized & Synthesized (CUSTOMER-FEEDBACK-LOOP.md)
  → Theme (3+ instances) → Product Input (PRIORITIZATION-STANDARD.md)
  → Improvement Stage (PRODUCT-LIFECYCLE.md#improvement) → Loop Closed Back to Support
```

See [CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md) — a single ticket is an anecdote; a theme is what actually reaches product, and the loop closes only when support is told what changed.

## Incident → Communication

```
Detected/Reported → Technical Response (OBSERVABILITY-AND-INCIDENTS.md, SECURITY-INCIDENT-RESPONSE.md if security-relevant)
  → Customer Communication (INCIDENT-COMMUNICATION.md) → Postmortem → Follow-up Actions
```

See [INCIDENT-COMMUNICATION.md](../09-operations/INCIDENT-COMMUNICATION.md) — technical containment and customer communication run in parallel, not sequentially; a customer should never learn about an incident later than they need to.

## Investor Update Preparation

```
Business Metrics (BUSINESS-METRICS.md) + Sales/CS Metrics (SALES-METRICS.md, CUSTOMER-SUCCESS-METRICS.md)
  → Verified via Trust Communications rule (TRUST-COMMUNICATIONS-AND-CLAIMS.md)
  → Investor Update (INVESTOR-UPDATES.md) → Sent on stated cadence
```

See [INVESTOR-METRICS.md](../08-investors/INVESTOR-METRICS.md) — every number reported to investors is the same number tracked internally, never a separately-flattering recalculation.

## The General Shape

Every flow above follows the same underlying pattern: a [handoff](../11-patterns/HANDOFF-PATTERNS.md) transfers full context between owners, a [review gate](../11-patterns/REVIEW-GATE-PATTERNS.md) checks anything before it becomes external-facing, and a [feedback loop](../11-patterns/FEEDBACK-LOOP-PATTERNS.md) closes by telling the source what happened. When a new cross-domain workflow doesn't fit an existing flow above, check [`docs/11-patterns/`](../11-patterns/README.md) before inventing a new approach from scratch.
