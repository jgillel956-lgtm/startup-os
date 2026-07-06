---
id: DOC-TPL-002
title: Template Library Standard
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [templates, standard, library]
dependencies: [DOC-TPL-001]
related: [DOC-FND-004, DOC-FND-006]
---

# Template Library Standard

Defines the uniform structure every cross-domain working template in this library follows, and clarifies the two ID patterns coexisting in `docs/10-templates/`.

## Why Two ID Patterns Coexist

- **`TPL-<subtype>-NNN`** (type code `TPL`, per [ID-STANDARD.md](../00-foundation/ID-STANDARD.md)) — the original artifact-specific templates (capability, PRD, API, database, ADR, user story, sprint), each the copy-and-fill instance of one governed document type. `<subtype>` names that type (`CAP`, `PRD`, `API`, ...).
- **`DOC-TPL-NNN`** (type code `DOC`, scope `TPL`) — this library's cross-domain working templates: standalone, practical, ready-to-copy artifacts (a campaign brief, a sales opportunity record, an onboarding plan) that support an operating-system standard without being that standard's single canonical instance document.

Both are templates in the plain sense. They're not merged into one sequence because the artifact-specific set is already referenced by ID elsewhere (e.g. `PRD-TEMPLATE.md` as `TPL-PRD-001` is linked from [PRD-STANDARD.md](../02-product/PRD-STANDARD.md)) — renumbering it would break those references for no real benefit. New templates that are the single canonical instance of a governed document type should use the `TPL-<subtype>-NNN` pattern, extending the existing sequence; new templates that are a supporting, non-canonical working artifact use `DOC-TPL-NNN`.

## Required Structure

Every template in this library's `DOC-TPL-NNN` set includes, in order:

1. **Purpose** — what this template produces and why it exists.
2. **When to Use** — the specific trigger or situation that calls for this template, and when *not* to use it.
3. **Owner** — who's accountable for filling it in and keeping it current, referencing the relevant domain's ownership boundary.
4. **Inputs** — what needs to exist or be known before this template can be filled in meaningfully.
5. **Template Section** — the actual copy-and-fill content, with placeholders.
6. **Review Checklist** — what to check before treating the filled-in document as done.
7. **Related Docs** — links to the standards this template supports and any adjacent templates.

## Placeholder Conventions

Use angle-bracket placeholders consistently: `<Company>`, `<Owner>`, `<Date>`, `<Decision>`, `<Risk>`, `<Metric>`, and similarly-named placeholders specific to the template. A filled-in document with a placeholder still in it is not finished — the review checklist should catch this.

## Company Neutrality

No template in this library assumes a specific company, tool, platform, CRM, cloud provider, ticketing system, data room, or project management tool. A template that needs to reference "wherever pipeline is tracked" says exactly that, not a named product.

## Avoiding Duplicate Templates

Before adding a new template, check whether an existing one (in either ID pattern) already covers the need — see [README.md](README.md)'s current list. A near-duplicate template with a different name is confusing, not helpful; extend or link to the existing one instead. Where a new template's scope legitimately overlaps an existing one at a different altitude (e.g. a quick-start version of a comprehensive template), the new template states that relationship explicitly rather than silently duplicating content.

## Adding a New Template

1. Confirm it doesn't duplicate an existing one (above).
2. Follow the required structure.
3. Assign the next `DOC-TPL-NNN` (or, if it's the canonical instance of a new governed document type, the appropriate `TPL-<subtype>-001`).
4. Add it to [README.md](README.md)'s table.
5. Cross-link it from the standard(s) it supports.

## Ownership

The founder (or whoever owns `docs/00-foundation/` standards generally) owns this library's structure; whoever creates a new template is responsible for following it and checking for duplicates first.
