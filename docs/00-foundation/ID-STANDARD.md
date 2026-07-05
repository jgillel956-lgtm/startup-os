---
id: DOC-FND-006
title: ID Standard
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.1
domain: foundation
tags: [foundation, ids, identifiers]
dependencies: []
related: [DOC-FND-004, DOC-FND-003]
---

# ID Standard

Every document has a stable, unique ID in its front matter. IDs are how documents reference each other (`dependencies`, `related`) and how AI agents trace requirements to designs to decisions. **IDs never change**, even when a document is renamed, moved, or archived.

## Format

```
<TYPE>-<SCOPE>-<NNN>
```

- `TYPE` — what kind of document this is.
- `SCOPE` — domain or subtype code.
- `NNN` — zero-padded sequence number, unique within `TYPE-SCOPE`, assigned in order, never reused.

ADRs use the short form `ADR-NNNN` (four digits) to match long-standing industry convention.

## Type Codes

| Type | Meaning | Example |
|------|---------|---------|
| `DOC` | Standard / governance / general document | `DOC-FND-004` |
| `TPL` | Template | `TPL-PRD-001` |
| `ADR` | Architecture Decision Record | `ADR-0003` |
| `CAP` | Capability definition | `CAP-PRD-001` |
| `PRD` | Product Requirements Document | `PRD-002` |
| `API` | API specification | `API-004` |
| `DB`  | Database specification | `DB-001` |
| `US`  | User story | `US-0142` |
| `SPR` | Sprint document | `SPR-2026-14` |
| `PAT` | Pattern | `PAT-003` |
| `KNW` | Knowledge note | `KNW-017` |
| `PRM` | Reusable AI prompt | `PRM-001` |

## Scope Codes

Used where a type spans domains (chiefly `DOC` and `TPL`):

| Scope | Domain |
|-------|--------|
| `ROOT` | Repository root |
| `FND` | Foundation |
| `BIZ` | Business |
| `PRD` | Product |
| `ENG` | Engineering |
| `AI`  | AI |
| `DSG` | Design |
| `MKT` | Marketing |
| `SLS` | Sales |
| `INV` | Investors |
| `OPS` | Operations |
| `PAT` | Patterns |
| `KNW` | Knowledge |

Instance types with their own sequence (`PRD`, `API`, `DB`, `US`, `ADR`, `PRM`) omit the scope segment.

## Rules

1. **Immutable.** An ID is assigned once and never edited, even if the document moves domains (front matter `domain` changes; `id` does not).
2. **Never reused.** A retired ID stays retired; the next document takes the next number.
3. **Assigned at creation.** A document is created with its ID; "TBD" IDs are non-compliant.
4. **Next number = highest existing + 1** within the same `TYPE-SCOPE` sequence. Check the repository before assigning.
5. **Filenames echo IDs** for instance documents: `PRD-001-user-onboarding.md` (see [NAMING-STANDARDS.md](NAMING-STANDARDS.md)).
