---
id: TPL-CAP-001
title: Capability Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: templates
tags: [template, capability, product]
dependencies: [DOC-FND-004]
related: [TPL-PRD-001, TPL-US-001]
---

# Capability Template

Defines a capability: a durable, user-meaningful thing the product can do (e.g. "accept payments", "schedule lessons"). Capabilities sit above PRDs — one capability is delivered through one or more PRDs over time. Copy this file into `docs/02-product/`, rename per naming standards (`CAP-PRD-NNN-<slug>.md`), and replace all `<placeholders>`.

## Front matter for the new document

```yaml
---
id: CAP-PRD-<NNN>
title: <Capability name>
status: draft
owner: <owner>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
version: 0.1.0
domain: product
tags: [capability]
dependencies: []
related: []
---
```

---

# <Capability Name>

## Summary

One paragraph: what this capability lets users do and why it matters.

## Problem

What user or business problem exists without this capability? Evidence, not assertion.

## Users & Use Cases

| User type | Use case | Frequency |
|-----------|----------|-----------|
| <user> | <what they do with it> | <daily/weekly/rare> |

## Scope

### In scope
- <included behavior>

### Out of scope
- <explicitly excluded behavior — prevents scope creep>

## Success Criteria

Measurable statements that define "this capability works":

1. <criterion — measurable, verifiable>
2. <criterion>

## Dependencies & Constraints

- **Depends on:** <other capabilities, external systems>
- **Constraints:** <legal, technical, budget>

## Delivery Map

| PRD | Delivers | Status |
|-----|----------|--------|
| PRD-<NNN> | <slice of this capability> | <status> |

## Open Questions

- [ ] <unresolved question, with who owns the answer>
