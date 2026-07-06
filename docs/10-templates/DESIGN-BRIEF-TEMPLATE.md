---
id: DOC-TPL-006
title: Design Brief Template
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [template, design, brief]
dependencies: [DOC-TPL-002]
related: [DOC-DSG-002, DOC-DSG-004]
---

# Design Brief Template

## Purpose

The fillable scoping document design starts from — the problem, audience, and constraints a design effort needs before wireframing or prototyping begins.

## When to Use

Once a capability reaches Problem Definition (per [PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)) and design engages, per [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md)'s collaboration model — before [WIREFRAMES-AND-PROTOTYPES.md](../05-design/WIREFRAMES-AND-PROTOTYPES.md) work starts.

## Owner

Design, confirmed against product's actual scope per [DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md).

## Inputs

The relevant capability/PRD; research findings ([UX-RESEARCH.md](../05-design/UX-RESEARCH.md)); any experience gaps already identified ([EXPERIENCE-MAPPING.md](../05-design/EXPERIENCE-MAPPING.md)).

## Template Section

```markdown
# Design Brief: <Feature/Capability>

- **PRD / Capability:** <ID>
- **Designer:** <Owner>
- **Date:** <Date>

## Problem
<What experience gap or need this design addresses — from EXPERIENCE-MAPPING.md or research.>

## Audience
<Actor(s) affected, per USER-STORY-STANDARD.md's actor concept.>

## Scope
### In scope
- <...>
### Out of scope
- <...>

## Constraints
<Technical, timeline, or brand constraints design must work within.>

## Success Criteria
<How we'll know the design actually solved the problem — usability, not just visual polish.>

## Required States
<Default, empty, loading, error, permission-denied — per ACCESSIBILITY-AND-INCLUSION.md and ACCEPTANCE-CRITERIA-STANDARD.md.>

## Open Questions
- [ ] <question — owner>
```

## Review Checklist

- [ ] Problem traces to research or an identified experience gap, not assumption.
- [ ] Scope matches what the PRD actually committed to — no silent expansion.
- [ ] Success criteria are about usability outcomes, not just visual finish.
- [ ] Required states list is complete.
- [ ] No placeholder text remains.

## Related Docs

[DESIGN-OPERATING-SYSTEM.md](../05-design/DESIGN-OPERATING-SYSTEM.md) · [EXPERIENCE-MAPPING.md](../05-design/EXPERIENCE-MAPPING.md) · [WIREFRAMES-AND-PROTOTYPES.md](../05-design/WIREFRAMES-AND-PROTOTYPES.md) · [DESIGN-HANDOFF.md](../05-design/DESIGN-HANDOFF.md)
