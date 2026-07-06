---
id: DOC-CS-012
title: Customer Success Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: customer-success
tags: [customer-success, metrics, standard]
dependencies: [DOC-CS-002]
related: [DOC-SLS-012, DOC-OPS-012, DOC-INV-012]
---

# Customer Success Metrics

Defines practical customer success metrics. Like the metrics standards in sales, marketing, engineering, operations, and design, these measure the system's health — not individual ranking; using them purely to score people invites gaming the numbers instead of actually helping customers. No specific customer success platform is assumed.

## Onboarding Completion

Rate and time for customers reaching [onboarding completion criteria](CUSTOMER-ONBOARDING.md). A lengthening completion time is a process signal worth investigating specifically, not just noting.

## Time to Value

Time from close to the customer's first realized outcome ([CUSTOMER-OUTCOMES.md](CUSTOMER-OUTCOMES.md)) — a more meaningful measure than onboarding completion alone, since a customer can finish setup without yet experiencing real value.

## Adoption Rate

Percentage of customers reaching defined [adoption milestones](ADOPTION-AND-ENGAGEMENT.md), by segment. Low adoption in a specific segment points to a segment-specific enablement or fit issue, not a generalized problem.

## Active Usage

Ongoing engagement level across the customer base — tracked for trend (growing, stable, declining) more than absolute level, since trend is the earlier warning sign.

## Health Score Distribution

How many accounts sit at each [health](CUSTOMER-HEALTH.md) level, and how that distribution is moving over time — a rising share of at-risk accounts is a portfolio-level signal, distinct from any single account's story.

## Renewal Rate

Percentage of eligible accounts that renew, tracked by segment — a declining rate in one segment specifically is more actionable than a single blended company-wide number.

## Churn Rate and Reasons

Rate of loss, and the distribution of documented [churn causes](CHURN-AND-SAVE-PLAYS.md) — read for patterns (a specific cause recurring) rather than as one aggregate number.

## Expansion Rate

Rate and value of [expansion](EXPANSION-AND-GROWTH.md) closed, tracked separately from new-business metrics (which belong to [SALES-METRICS.md](../07-sales/SALES-METRICS.md)) — expansion from existing healthy accounts is a distinct, usually more efficient, growth motion worth measuring on its own.

## Customer Satisfaction

Whatever direct feedback mechanism is used — tracked by segment/account tier the same as other metrics here, since a SEV-worthy account's satisfaction score means something different from a small account's.

## Risk Themes

Not a single number — a periodically reviewed list of recurring risk causes across accounts (see [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md)), with trend per theme. This is the metric most directly tied to whether churn learning is actually closing the loop into product, support, or sales action.

## Using These Metrics

- Review on a regular rhythm, the same discipline as [SALES-METRICS.md](../07-sales/SALES-METRICS.md), [OPERATIONS-METRICS.md](../09-operations/OPERATIONS-METRICS.md), and [MARKETING-METRICS.md](../06-marketing/MARKETING-METRICS.md).
- React to trends and segment-specific signals, not a single blended number.
- Feed findings back into onboarding process, health scoring criteria, and the functions named in [CHURN-AND-SAVE-PLAYS.md](CHURN-AND-SAVE-PLAYS.md)'s learning section.
- Retention and expansion figures here are the same numbers [INVESTOR-METRICS.md](../08-investors/INVESTOR-METRICS.md) reports to investors — reused directly, never a separately-flattering version.

## Right-Sizing for Team Size

At one person (often the founder): most of this is tracked informally — a short list of accounts and a mental sense of who's at risk. The metrics don't change as the team and customer base grow, only the rigor and tooling used to track them.
