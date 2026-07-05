---
id: TPL-US-001
title: User Story Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: templates
tags: [template, user-story, product, agile]
dependencies: [DOC-FND-004]
related: [TPL-PRD-001, TPL-SPR-001]
---

# User Story Template

One user story: a small, testable slice of user value. Stories belong to a PRD and are scheduled into sprints. Copy into `docs/02-product/` (or embed in a PRD's story table for small stories), rename `US-NNNN-<slug>.md`.

## Front matter for the new document

```yaml
---
id: US-<NNNN>
title: <Short story title>
status: draft
owner: <owner>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
version: 0.1.0
domain: product
tags: [user-story]
dependencies: [PRD-<NNN>]
related: []
---
```

---

# US-<NNNN>: <Short Title>

## Story

> As a **<user type>**, I want **<action/capability>** so that **<benefit>**.

## Priority & Size

- **Priority:** Must / Should / Could / Won't (this iteration)
- **Estimate:** <points or T-shirt size>

## Acceptance Criteria

Every criterion is verifiable; the story is done when all pass.

1. GIVEN <precondition> WHEN <action> THEN <observable result>
2. GIVEN <precondition> WHEN <action> THEN <observable result>

## Edge Cases

- <empty/error/permission/concurrency case and expected behavior>

## Out of Scope

- <explicitly excluded, to keep the story small>

## Dependencies

- **Blocked by:** <US/API/DB IDs>
- **Design:** <link to assets, if any>

## Notes

<Anything the implementer needs that doesn't fit above. Never a hidden requirement — if it's required, it's an acceptance criterion.>
