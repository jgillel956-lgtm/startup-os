---
id: TPL-SPR-001
title: Sprint Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: templates
tags: [template, sprint, planning, agile]
dependencies: [DOC-FND-004]
related: [TPL-US-001, TPL-PRD-001]
---

# Sprint Template

Plans and closes one sprint. Created at sprint start, updated during, closed with the review/retro sections at sprint end — one document per sprint, so planning and outcome live together. Copy into `docs/02-product/` (or an implementation repo's planning folder), rename `SPR-YYYY-NN.md` (year + sprint number).

## Front matter for the new document

```yaml
---
id: SPR-<YYYY>-<NN>
title: Sprint <YYYY>-<NN>
status: draft
owner: <owner>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
version: 0.1.0
domain: product
tags: [sprint]
dependencies: []
related: []
---
```

---

# Sprint <YYYY>-<NN>

- **Dates:** <start> → <end>
- **Sprint goal:** <one sentence — the outcome that makes this sprint a success>

## Committed Work

| ID | Item | Owner | Size | Status |
|----|------|-------|------|--------|
| US-<NNNN> | <story title> | <owner> | <est> | planned / in-progress / done / dropped |

## Not Committed (explicitly deferred)

| ID | Item | Why deferred |
|----|------|--------------|
| US-<NNNN> | <story title> | <reason> |

## Risks & Dependencies

- <risk — mitigation>
- <external dependency — status>

---

## Sprint Review (filled at end)

- **Goal met?** yes / partially / no — <one line why>
- **Completed:** <IDs>
- **Carried over:** <IDs and destination sprint>
- **Demo notes:** <what was shown, feedback>

## Retrospective (filled at end)

| Went well | Went poorly | Change next sprint |
|-----------|-------------|--------------------|
| <…> | <…> | <concrete action, with owner> |

## Metrics

- **Planned vs completed:** <X of Y items / points>
- **Unplanned work absorbed:** <items>
