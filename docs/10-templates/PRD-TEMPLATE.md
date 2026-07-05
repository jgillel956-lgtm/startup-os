---
id: TPL-PRD-001
title: PRD Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: templates
tags: [template, prd, requirements, product]
dependencies: [DOC-FND-004]
related: [TPL-CAP-001, TPL-US-001, TPL-API-001]
---

# PRD Template

Product Requirements Document: the authoritative spec for a deliverable slice of a capability. Per the documentation-before-development rule, no implementation starts until the governing PRD is `active`. Copy into `docs/02-product/`, rename `PRD-NNN-<slug>.md`, replace all `<placeholders>`.

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

## Overview

- **Capability:** CAP-PRD-<NNN>
- **Problem:** <one-sentence problem statement>
- **Outcome:** <one-sentence description of the world after this ships>

## Goals & Non-Goals

### Goals
1. <goal — outcome, not output>

### Non-Goals
1. <explicitly not doing — as important as goals>

## Users & Stories

Link or embed user stories (see USER-STORY-TEMPLATE):

| ID | Story | Priority |
|----|-------|----------|
| US-<NNNN> | As a <user>, I want <action> so that <benefit> | Must / Should / Could |

## Functional Requirements

Numbered, testable, MUST/SHOULD/MAY:

| # | Requirement |
|---|-------------|
| FR-1 | The system MUST <behavior> |
| FR-2 | The system SHOULD <behavior> |

## Non-Functional Requirements

| # | Category | Requirement |
|---|----------|-------------|
| NFR-1 | Performance | <e.g. p95 latency under X ms> |
| NFR-2 | Security | <e.g. authn/authz constraint> |
| NFR-3 | Reliability | <e.g. availability, retry behavior> |

## User Experience

- Flow description or link to design assets.
- Edge states: empty, loading, error, permission-denied.

## Acceptance Criteria

Verifiable statements that define "done":

1. GIVEN <context> WHEN <action> THEN <observable result>
2. …

## Technical Notes

- Affected APIs / data: link API-<NNN>, DB-<NNN> specs.
- Decisions required: link or propose ADRs.

## Rollout

- **Phasing:** <MVP → iterations>
- **Migration/backfill:** <if any>
- **Metrics to watch:** <post-launch signals>

## Open Questions

- [ ] <question — owner — due>
