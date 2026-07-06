---
id: DOC-TPL-005
title: Technical Design Template
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [template, engineering, technical-design]
dependencies: [DOC-TPL-002]
related: [DOC-ENG-005, DOC-ENG-004]
---

# Technical Design Template

## Purpose

The fillable document for [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md)'s required sections — turning an active PRD into a concrete technical plan before implementation begins.

## When to Use

Work that touches more than one component, changes a data model, introduces a new external dependency, or carries meaningful operational risk — per [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md)'s "when required" threshold. Skip it for small, contained changes to well-understood code.

## Owner

The implementer or engineer scoping the work; approved by the engineering owner or a peer, per [TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md).

## Inputs

An active PRD with acceptance criteria; any constraints from prior ADRs ([ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md)).

## Template Section

```markdown
# Technical Design: <Feature>

- **PRD:** <PRD-ID>
- **Author:** <Owner>
- **Date:** <Date>

## Summary
<What's being built and which PRD it implements.>

## Approach
<The chosen technical approach, concrete enough to implement without guessing.>

## Alternatives Considered
### Option: <name>
- Pros: <...>
- Cons: <...>

## Affected Components
- <component/service/repo>

## Data Changes
<New or changed data model — link a DB spec if one results.>

## API Changes
<New or changed interfaces — link an API spec if one results.>

## Risks
| Risk | Mitigation / Accepted |
|------|--------------------------|
| <Risk> | <mitigation, or explicit acceptance> |

## Rollout Plan
<Phasing, if this is large enough to need one.>

## Open Questions
- [ ] <question — owner>
```

## Review Checklist

- [ ] Approach is concrete enough to implement without further judgment calls on material points.
- [ ] At least one real alternative was considered, not just listed for form.
- [ ] Every risk has a mitigation or an explicit acceptance.
- [ ] Data/API changes reference or will produce the relevant engineering specs.
- [ ] No placeholder text remains.

## Related Docs

[TECHNICAL-DESIGN.md](../03-engineering/TECHNICAL-DESIGN.md) · [ARCHITECTURE-DECISION-RECORDS.md](../03-engineering/ARCHITECTURE-DECISION-RECORDS.md) · [API-TEMPLATE.md](API-TEMPLATE.md) · [DATABASE-TEMPLATE.md](DATABASE-TEMPLATE.md)
