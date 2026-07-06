---
id: DOC-PAT-006
title: Review Gate Patterns
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: patterns
tags: [patterns, review, gate]
dependencies: [DOC-PAT-002]
related: [DOC-MKT-011, DOC-SEC-007]
---

# Review Gate Patterns

## Purpose

Checking something before it ships, publishes, or gets sent externally — an independent look that catches what the creator couldn't see from inside the work.

## When to Use

Anything leaving the company's internal boundary: published content, a code change reaching production, a claim made to a customer or investor, a public-facing design.

## Common Pattern

```
Define what requires review (explicit trigger list)  →
Checklist specific to the risk (not a generic rubber stamp)  →
Independent reviewer (not the creator)  →
Named outcome (approved / approved with conditions / blocked)
```

The independence requirement is the part that gets quietly dropped under deadline pressure — a reviewer who's also the creator, or who approves without actually checking, isn't running this pattern at all.

## Inputs

The artifact under review; the specific risk categories relevant to it (accuracy, security, brand, legal).

## Outputs

A recorded review outcome; for anything blocked or conditional, a specific list of what must change.

## Owner

Whoever holds review authority for that risk category — not the creator of the artifact.

## Review Points

- Is the reviewer actually independent of the creator?
- Does the checklist address the specific risk, or is it generic?
- Are outcomes recorded, so a pattern of near-misses is visible over time?

## Example Use Cases

- [MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md)
- [BRANCHING-AND-CODE-REVIEW.md](../03-engineering/BRANCHING-AND-CODE-REVIEW.md)
- [SECURITY-REVIEWS.md](../14-security-compliance/SECURITY-REVIEWS.md)
- [DESIGN-QA.md](../05-design/DESIGN-QA.md)

## Anti-Patterns

- **Review as rubber stamp.** Approving without actually checking each risk category.
- **Self-review.** The creator also serving as the sole reviewer.
- **Skipping under deadline pressure.** Shipping the triggering change without the gate because "there's no time."

## Related Docs

[MARKETING-REVIEW-AND-APPROVAL.md](../06-marketing/MARKETING-REVIEW-AND-APPROVAL.md) · [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) · [PRODUCT-REVIEW-CHECKLIST.md](../02-product/PRODUCT-REVIEW-CHECKLIST.md)
