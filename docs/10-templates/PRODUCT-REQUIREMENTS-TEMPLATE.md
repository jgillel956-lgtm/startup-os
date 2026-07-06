---
id: DOC-TPL-004
title: Product Requirements Template (Quick-Start)
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [template, product, prd, quick-start]
dependencies: [DOC-TPL-002]
related: [TPL-PRD-001, DOC-PRD-005]
---

# Product Requirements Template (Quick-Start)

## Purpose

A condensed, fast-to-fill product requirements sketch — for scoping a small change or starting a conversation before investing in a full PRD.

**Not a replacement for [PRD-TEMPLATE.md](PRD-TEMPLATE.md) (`TPL-PRD-001`).** Anything reaching Specification per [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md) and requiring `active` status before implementation uses the full PRD template — see [PRD-STANDARD.md](../02-product/PRD-STANDARD.md)'s required sections. This quick-start is for early scoping only.

## When to Use

Sketching a small, well-understood change, or drafting a starting point before a full PRD is warranted. Switch to the full [PRD-TEMPLATE.md](PRD-TEMPLATE.md) once the work needs to enter Ready for Development — a quick-start sketch is never itself the governing spec implementation proceeds from.

## Owner

Product, per [PRD-STANDARD.md](../02-product/PRD-STANDARD.md)'s ownership.

## Inputs

The capability this work belongs to ([CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md)); a rough sense of the problem and desired outcome.

## Template Section

```markdown
# <Feature> — Quick Requirements Sketch

- **Capability:** <CAP-ID>
- **Problem:** <one sentence>
- **Outcome:** <what's true when this ships>

## Goals
- <goal>

## Non-Goals
- <explicitly excluded>

## Rough Requirements
- <requirement — will become numbered FR/NFR in the full PRD>

## Open Questions
- [ ] <question — owner>

## Next Step
<Promote to full PRD-TEMPLATE.md? Ready to draft acceptance criteria? Still needs discovery?>
```

## Review Checklist

- [ ] Capability is named — this sketch traces to something real.
- [ ] Non-goals are stated, not skipped.
- [ ] "Next step" is explicit — this sketch doesn't quietly become the implementation spec.
- [ ] No placeholder text remains.

## Related Docs

[PRD-TEMPLATE.md](PRD-TEMPLATE.md) (`TPL-PRD-001`, the full spec) · [PRD-STANDARD.md](../02-product/PRD-STANDARD.md) · [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md) · [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)
