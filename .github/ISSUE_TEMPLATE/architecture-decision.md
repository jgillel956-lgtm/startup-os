---
id: DOC-GH-004
title: Architecture Decision Issue Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.0
domain: templates
tags: [github, issue-template, adr, architecture]
dependencies: [DOC-FND-004, DOC-FND-009]
related: [DOC-FND-010, DOC-GH-005, TPL-ADR-001, DOC-ROOT-004]
name: Architecture Decision
about: Propose a new Architecture Decision Record for Startup OS.
---

# Architecture Decision Issue Template

GitHub issue template for proposing a new Architecture Decision Record before it is written up in full and added to `DECISIONS.md`. Use this to get alignment on a hard-to-reverse or cross-cutting choice before drafting the ADR itself (see [ADR-TEMPLATE.md](../../docs/10-templates/ADR-TEMPLATE.md)). Copy the body below into a new GitHub issue.

---

```markdown
## Decision Title

<Short, declarative — e.g. "Use PostgreSQL as the default database engine">

## Context

<What situation forces this decision? Constraints, requirements, cost of not deciding.>

## Options Considered

### Option 1: <name>
- Pros: <…>
- Cons: <…>

### Option 2: <name>
- Pros: <…>
- Cons: <…>

## Recommended Decision

<Which option, and the primary reason it wins.>

## Consequences

- <what becomes easier>
- <what becomes harder / new constraint>
- <follow-up work required>

## Alternatives Rejected

<Options considered and explicitly ruled out, with why — prevents relitigating.>

## Related Documents

- <capability / PRD / standard IDs this decision affects>

## Required ADR ID

<Next available ADR-NNNN — check DECISIONS.md for the highest existing number.>

## Acceptance Criteria

1. ADR-NNNN is added to `DECISIONS.md` using [ADR-TEMPLATE.md](../../docs/10-templates/ADR-TEMPLATE.md)
2. Affected documents are updated to reference the new ADR
3. `npm run validate` passes
```
