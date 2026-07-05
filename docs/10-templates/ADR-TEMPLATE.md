---
id: TPL-ADR-001
title: ADR Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: templates
tags: [template, adr, decisions]
dependencies: [DOC-FND-004]
related: [DOC-ROOT-004]
---

# ADR Template

Architecture Decision Record: captures one significant decision with its context and consequences. In Startup OS, ADRs are appended to `DECISIONS.md`; implementation repositories may instead keep one file per ADR (`ADR-NNNN-<slug>.md` in `docs/03-engineering/` or a dedicated decisions folder) — pick one convention per repository and record it.

## Front matter (when using one file per ADR)

```yaml
---
id: ADR-<NNNN>
title: <Decision title>
status: draft
owner: <owner>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
version: 0.1.0
domain: engineering
tags: [adr]
dependencies: []
related: []
---
```

---

# ADR-<NNNN>: <Decision Title>

- **Status:** Proposed | Accepted | Superseded by ADR-<NNNN>
- **Date:** <YYYY-MM-DD>
- **Deciders:** <who>

## Context

What situation forces a decision? Constraints, requirements, and the cost of not deciding. State facts, not preferences.

## Options Considered

### Option 1: <name>
- **Pros:** <…>
- **Cons:** <…>

### Option 2: <name>
- **Pros:** <…>
- **Cons:** <…>

## Decision

The chosen option, stated declaratively: "We will <decision>." Include the primary reason it beat the alternatives.

## Consequences

What becomes easier, what becomes harder, and what new obligations exist. Include negative consequences honestly — they are the part future readers need most.

- <positive consequence>
- <negative consequence / new constraint>
- <follow-up work required>

## Revisit Criteria

Under what conditions should this decision be re-examined? <e.g. "if volume exceeds X", "if vendor pricing changes">
