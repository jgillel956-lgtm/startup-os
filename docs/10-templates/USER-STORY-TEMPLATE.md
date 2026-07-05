---
id: TPL-US-001
title: User Story Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.0
domain: templates
tags: [template, user-story, product, agile]
dependencies: [DOC-FND-004, DOC-PRD-006]
related: [TPL-PRD-001, TPL-SPR-001, DOC-PRD-007]
---

# User Story Template

One user story: a small, testable slice of user value. Follows [USER-STORY-STANDARD.md](../02-product/USER-STORY-STANDARD.md). Stories belong to a PRD and are scheduled into sprints. Copy into `docs/02-product/` (or embed in a PRD's story table for small stories), rename `US-NNNN-<slug>.md`.

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

> As a **<actor>**,
> I want to **<action>**,
> so that **<outcome>**.

## Priority & Size

- **Priority:** Must / Should / Could / Won't (this iteration)
- **Estimate:** <points or T-shirt size>

## Acceptance Criteria

Every criterion is verifiable (see [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md)); the story is done when all pass.

1. GIVEN <precondition> WHEN <action> THEN <observable result>
2. GIVEN <precondition> WHEN <action> THEN <observable result>

## Negative Cases

- <what happens when the actor can't achieve the goal — invalid input, missing permission, unavailable dependency>

## Edge Cases

- <empty/boundary/concurrency/duplicate-submission case and expected behavior>

## Permission Considerations

<Who is allowed to perform this action, who is not. Link the capability's PERMISSIONS.md if one exists.>

## Data Considerations

<What data is read/written/exposed, and any sensitivity constraints — e.g. "never log the full value of X.">

## Notification Considerations

<Whether this story triggers a notification, to whom, under what condition — or "None.">

## AI Considerations

<Whether any part of this story involves AI-driven behavior, and what it must not do — or "None.">

## Out of Scope

- <explicitly excluded, to keep the story small>

## Dependencies

- **Blocked by:** <US/API/DB IDs>
- **Design:** <link to assets, if any>

## Traceability

- **PRD:** <PRD-<NNN>>
- **Capability:** <CAP-PRD-<NNN>>

## Notes

<Anything the implementer needs that doesn't fit above. Never a hidden requirement — if it's required, it's an acceptance criterion.>
