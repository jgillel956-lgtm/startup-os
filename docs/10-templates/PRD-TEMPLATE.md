---
id: TPL-PRD-001
title: PRD Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.0
domain: templates
tags: [template, prd, requirements, product]
dependencies: [DOC-FND-004, DOC-PRD-005]
related: [TPL-CAP-001, TPL-US-001, TPL-API-001, DOC-PRD-004, DOC-PRD-007]
---

# PRD Template

Product Requirements Document: the authoritative spec for a deliverable slice of a capability. Follows [PRD-STANDARD.md](../02-product/PRD-STANDARD.md). Per the documentation-before-development rule, no implementation starts until the governing PRD is `active` with complete acceptance criteria. Copy into `docs/02-product/`, rename `PRD-NNN-<slug>.md`, replace all `<placeholders>`.

## Front matter for the new document

```yaml
---
id: PRD-<NNN>
title: <Feature name>
status: draft
owner: <owner>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
version: 0.1.0
domain: product
tags: [prd]
dependencies: [CAP-PRD-<NNN>]
related: []
---
```

---

# PRD: <Feature Name>

## Summary

<What ships and why, in a few sentences.>

## Problem

- **Capability:** CAP-PRD-<NNN>
- **Problem:** <the user/business problem this PRD addresses, with evidence>

## Goals

1. <goal — outcome, not output>

## Non-Goals

1. <explicitly not doing — as binding as the goals>

## Users / Actors

| Actor | How they're affected |
|-------|------------------------|
| <actor type> | <what changes for them> |

## User Stories

Link or embed stories (see [USER-STORY-TEMPLATE.md](USER-STORY-TEMPLATE.md)):

| ID | Story | Priority |
|----|-------|----------|
| US-<NNNN> | As a <actor>, I want to <action>, so that <outcome>. | Must / Should / Could / Won't |

## Workflows

<Step-by-step user/system workflow(s), when non-trivial. Diagram or numbered steps.>

## Requirements

Numbered, testable, MUST/SHOULD/MAY:

| # | Requirement |
|---|-------------|
| FR-1 | The system MUST <behavior> |
| FR-2 | The system SHOULD <behavior> |

| # | Category | Non-Functional Requirement |
|---|----------|------------------------------|
| NFR-1 | Performance | <e.g. p95 latency under X ms> |
| NFR-2 | Security | <e.g. authn/authz constraint> |
| NFR-3 | Reliability | <e.g. availability, retry behavior> |

## Business Rules

<Constraints the system must enforce regardless of entry point — not tied to one screen or endpoint.>

## Acceptance Criteria

Verifiable statements that define "done" (see [ACCEPTANCE-CRITERIA-STANDARD.md](../02-product/ACCEPTANCE-CRITERIA-STANDARD.md)):

1. GIVEN <context> WHEN <action> THEN <observable result>
2. …

## Dependencies

- **Depends on:** <capability/PRD/API/DB IDs>
- **Blocks:** <if anything is waiting on this>

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| <risk> | <low/med/high> | <low/med/high> | <mitigation or explicit acceptance> |

## Metrics

| Metric | Baseline | Target |
|--------|----------|--------|
| <metric> | <current value or "unknown"> | <target value/direction> |

## Edge Cases

- <empty/error/permission/concurrency case and expected behavior>

## Open Questions

- [ ] <question — owner — due>

## AI Considerations

<Any AI-driven behavior in this PRD's scope, and what it must/must not do. State "None" explicitly if not applicable.>

## Future Considerations

<Ideas explicitly deferred out of this PRD's scope — captured so they aren't lost or silently implemented early. See capability `FUTURE.md` if one exists.>
