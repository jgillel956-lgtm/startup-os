---
id: DOC-FND-034
title: Startup OS Implementation Paths
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: foundation
tags: [foundation, implementation, paths, onboarding]
dependencies: [DOC-FND-032]
related: [DOC-FND-033, DOC-FND-035, DOC-FND-016]
---

# Startup OS Implementation Paths

[EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md)'s ten-step flow assumes a fairly typical product company. Real companies don't all start from the same place — a company that's already selling before the product is fully built needs sales infrastructure before design polish. This document names a few common starting archetypes and which steps to front-load or defer. It doesn't replace the guide's flow; it reorders emphasis within it.

## How to Use This

Pick the archetype that best matches the actual situation, apply its front-loaded and deferred steps, then continue with the full flow for everything not called out. Most real companies are a blend — use judgment, not a rigid label.

## Founder-Only, Pre-Product

**Situation:** One or two people, an idea, nothing built yet.

- **Front-load:** Step 1 (idea) and step 2 (business strategy) — these are the only things that exist yet.
- **Defer:** Steps 6 through 10 — design, engineering, go-to-market, and operations have nothing to act on until a capability is defined.
- **Watch for:** Skipping straight to step 5 (PRD) without steps 3-4 (market and capability) produces a requirements document for a solution nobody's confirmed anyone wants.

## Product-First (Build Before You Sell)

**Situation:** The default path in [EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md) — capability and product work lead, go-to-market follows once something real exists to position.

- **Front-load:** Steps 3-7 (market, capability, PRD, design, engineering) in full depth before steps 8-9.
- **Defer:** Detailed [SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md) and [CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md) buildout until there's something to sell and support.
- **Watch for:** Letting step 8 slip so far behind that positioning gets written in a rush right before launch, disconnected from what was actually built.

## Engineering-First (Technical Founder, Platform or Infrastructure)

**Situation:** The core value is a technical capability (a platform, an API, infrastructure) rather than a user-facing product surface.

- **Front-load:** Step 7 (technical plan) may need to start alongside or even before step 5 (PRD) — architecture decisions with long lead times (data model, core integrations) often can't wait for a fully specified PRD. Use [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) to record these early decisions explicitly rather than letting them happen undocumented.
- **Defer:** Step 6 (design/UX) may be genuinely minimal if the primary interface is an API or a technical integration — but [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md) still applies to whatever surface does face a human.
- **Watch for:** Treating "no UI" as "no design domain needed" — API design, documentation clarity, and integration experience are still design surfaces.

## Sales-Led (Enterprise, Relationship-Driven)

**Situation:** Deals are won through direct relationships and custom proposals before a repeatable, self-serve product experience exists.

- **Front-load:** Step 8's sales half — [SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md), [IDEAL-CUSTOMER-AND-QUALIFICATION.md](../07-sales/IDEAL-CUSTOMER-AND-QUALIFICATION.md), and [PROPOSALS-AND-PRICING.md](../07-sales/PROPOSALS-AND-PRICING.md) — may need to exist before step 5's PRD is even final, since early deals often shape what gets built.
- **Defer:** Broad-reach marketing content ([CONTENT-MARKETING.md](../06-marketing/CONTENT-MARKETING.md), [CAMPAIGNS-AND-DEMAND-GENERATION.md](../06-marketing/CAMPAIGNS-AND-DEMAND-GENERATION.md)) until there's a repeatable enough offering to market broadly.
- **Watch for:** Letting individual deals silently redefine the product roadmap outside [PRD-STANDARD.md](../02-product/PRD-STANDARD.md) and [PRIORITIZATION-STANDARD.md](../02-product/PRIORITIZATION-STANDARD.md) — a real customer request is input to product, not a bypass around it.

## Fundraising-Led (Raising Before Revenue)

**Situation:** Significant time is being spent on investor conversations before or alongside early product work.

- **Front-load:** Step 2's business strategy needs enough rigor to survive investor scrutiny; [docs/08-investors/](../08-investors/README.md) documents (fundraising strategy, pitch materials) run in parallel with, not after, steps 3-5.
- **Defer:** Full go-to-market buildout (step 8) if there's no product to sell yet — investor materials should say so honestly rather than implying a go-to-market motion that doesn't exist.
- **Watch for:** [TRUST-COMMUNICATIONS-AND-CLAIMS.md](../14-security-compliance/TRUST-COMMUNICATIONS-AND-CLAIMS.md)-style rigor applies to investor claims too, even before that domain is formally adopted — a metric reported to investors must be the same number tracked internally.

## Support-Heavy (High-Touch, Service-Adjacent Product)

**Situation:** The product requires significant hands-on customer support or services from day one (as opposed to a self-serve product where support scales in later).

- **Front-load:** Step 9 — [CUSTOMER-SUPPORT-MODEL.md](../09-operations/CUSTOMER-SUPPORT-MODEL.md), [SLA-AND-RESPONSE-STANDARDS.md](../09-operations/SLA-AND-RESPONSE-STANDARDS.md), and [CUSTOMER-ONBOARDING.md](../13-customer-success/CUSTOMER-ONBOARDING.md) — needs to exist before or alongside the first customer, not after.
- **Defer:** Nothing structural, but expect [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md) and [CUSTOMER-SUCCESS-METRICS.md](../13-customer-success/CUSTOMER-SUCCESS-METRICS.md) to matter from the very first customer rather than being a later-stage concern.
- **Watch for:** Under-resourcing support standards because they feel like "later" domains per [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md)'s general phasing — that phasing assumes a self-serve-leaning product; a support-heavy one needs this earlier.

## When No Archetype Fits Cleanly

Use [EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md)'s default ten-step order and adjust as real constraints surface — this document names common patterns, not an exhaustive taxonomy. Do not force-fit a company into an archetype that doesn't actually describe it.

## Related Docs

[EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md) · [NEW-COMPANY-SETUP-CHECKLIST.md](NEW-COMPANY-SETUP-CHECKLIST.md) · [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md)
