---
id: DOC-MKT-012
title: Marketing Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, metrics, standard]
dependencies: [DOC-MKT-002]
related: [DOC-MKT-008, DOC-MKT-010, DOC-OPS-012]
---

# Marketing Metrics

Defines practical marketing metrics. Like the metrics standards in engineering, operations, and design, these measure the system — what's working and what isn't — not individual output; using them to rank people invites gaming, not improvement. No specific analytics or attribution platform is assumed.

## Website Conversion

Rate at which visitors take the primary call to action on key pages ([WEBSITE-AND-LANDING-PAGES.md](WEBSITE-AND-LANDING-PAGES.md)). Tracked per page/purpose — a comparison page and a pricing page have different expected conversion behavior; one blended site-wide number hides more than it shows.

## Qualified Leads

Volume of leads meeting the ICP's qualification signals ([IDEAL-CUSTOMER-PROFILE.md](IDEAL-CUSTOMER-PROFILE.md)), not raw lead count. A campaign producing fewer, better-qualified leads is outperforming one producing more, poorly-qualified ones — report both numbers together so this isn't hidden.

## Content Performance

Engagement (views, time on page, downloads) per content piece, weighed against its stated purpose ([CONTENT-MARKETING.md](CONTENT-MARKETING.md)) — a comparison page's job is influencing consideration, not maximizing pageviews; measure it against the job, not a generic traffic number.

## Campaign ROI

Return relative to spend, where cost is trackable — acknowledging that ROI is only as reliable as the attribution behind it (see below). Track by campaign against its own stated success metric ([CAMPAIGNS-AND-DEMAND-GENERATION.md](CAMPAIGNS-AND-DEMAND-GENERATION.md)), not a portfolio-wide blend that obscures which specific campaigns actually worked.

## Pipeline Influence

Once sales exists, the degree to which marketing-sourced or marketing-touched activity contributed to closed business — tracked to close the loop described in [MARKETING-TO-SALES-HANDOFF.md](MARKETING-TO-SALES-HANDOFF.md). Until then, this is approximated by whoever's closing business directly reporting which marketing content/campaigns influenced the decision.

## Message Testing

Which positioning/messaging variants ([POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md)) perform better against a stated metric (conversion, engagement) when tested head to head. A message that "feels stronger" internally is a hypothesis; a message that wins a real test is evidence.

## Audience Growth

Growth in reachable audience (subscribers, followers, or equivalent, whatever channels are in use) — a leading indicator for future campaign reach, not a success metric on its own. Growth without engagement or conversion is a vanity number.

## Attribution Limitations

Marketing attribution is inherently imprecise — multiple touches usually precede a conversion, and not all of them are trackable. State this limitation explicitly when reporting attributed numbers rather than presenting a single attributed source as the sole cause of a conversion. Directional trends across attribution models are more trustworthy than any single model's exact number.

## Using These Metrics

- Review on a regular rhythm, the same discipline as [ENGINEERING-METRICS.md](../03-engineering/ENGINEERING-METRICS.md) and [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md).
- React to trends across periods, not single data points or single-channel snapshots.
- Feed findings back into [POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md) and [CAMPAIGNS-AND-DEMAND-GENERATION.md](CAMPAIGNS-AND-DEMAND-GENERATION.md) — a metric reviewed but never acted on is overhead, not insight.

## Right-Sizing for Team Size

At very small scale, most of this is tracked informally (a spreadsheet, a handful of numbers checked monthly) — the metrics themselves don't change as the team grows, only the rigor and tooling used to track them.
