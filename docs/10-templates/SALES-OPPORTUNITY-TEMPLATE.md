---
id: DOC-TPL-008
title: Sales Opportunity Template
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [template, sales, opportunity]
dependencies: [DOC-TPL-002]
related: [DOC-SLS-004, DOC-SLS-003]
---

# Sales Opportunity Template

## Purpose

The fillable record for tracking one opportunity through [SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md) — qualification, discovery findings, and current status in one place.

## When to Use

As soon as a lead passes qualification and becomes a tracked opportunity — see [IDEAL-CUSTOMER-AND-QUALIFICATION.md](../07-sales/IDEAL-CUSTOMER-AND-QUALIFICATION.md).

## Owner

Salesperson working the opportunity, per [SALES-OPERATING-SYSTEM.md](../07-sales/SALES-OPERATING-SYSTEM.md).

## Inputs

Marketing handoff context if applicable ([MARKETING-TO-SALES-HANDOFF.md](../06-marketing/MARKETING-TO-SALES-HANDOFF.md)); qualification notes.

## Template Section

```markdown
# Opportunity: <Prospect / Company>

- **Owner:** <Owner>
- **Source:** <campaign/referral/inbound>
- **Stage:** <current SALES-PIPELINE.md stage>

## Qualification
- **Fit:** <...>
- **Need:** <confirmed problem, in their words>
- **Urgency / Budget / Authority / Timing:** <...>
- **Weakest dimension:** <...>

## Discovery Notes
<Business impact, decision process, stakeholders, success criteria — per DISCOVERY-AND-NEEDS-ASSESSMENT.md.>

## Next Step
<Specific action and date.>

## Objections Raised
- <objection> — <response given>

## Outcome (filled in at close)
<Closed-won / closed-lost — reason, per COMPETITIVE-SALES.md win/loss learning.>
```

## Review Checklist

- [ ] Qualification dimensions are filled honestly, not optimistically.
- [ ] Next step is specific with a real date — not "follow up."
- [ ] Discovery notes reference actual business impact, not assumed.
- [ ] Outcome, when closed, states the real reason — not the easiest answer.
- [ ] No placeholder text remains.

## Related Docs

[SALES-PIPELINE.md](../07-sales/SALES-PIPELINE.md) · [IDEAL-CUSTOMER-AND-QUALIFICATION.md](../07-sales/IDEAL-CUSTOMER-AND-QUALIFICATION.md) · [DISCOVERY-AND-NEEDS-ASSESSMENT.md](../07-sales/DISCOVERY-AND-NEEDS-ASSESSMENT.md) · [COMPETITIVE-SALES.md](../07-sales/COMPETITIVE-SALES.md)
