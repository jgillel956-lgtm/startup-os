---
id: DOC-GH-005
title: Pull Request Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: templates
tags: [github, pull-request-template]
dependencies: [DOC-FND-004, DOC-FND-009, DOC-FND-008]
related: [DOC-FND-010, DOC-GH-001, DOC-GH-002, DOC-GH-003, DOC-GH-004]
---

# Pull Request Template

Default pull request template for Startup OS. This file itself is not filled in — GitHub renders the content below into every new PR description.

---

```markdown
## Summary

<One or two sentences: what changed and why.>

## Type of Change

- [ ] New documentation
- [ ] Documentation update
- [ ] New template
- [ ] Script / tooling
- [ ] Standard change (docs/00-foundation/ or CONSTITUTION.md)
- [ ] ADR
- [ ] Other: <describe>

## Documents Created

- <exact/path — DOC-ID>

## Documents Updated

- <exact/path — DOC-ID — what changed>

## Scripts Changed

- <exact/path — what changed, or "None">

## Related Issue

Closes #<issue-number>

## Related ADR

<ADR-NNNN, or "None">

## Validation Checklist

- [ ] `npm run validate` was run and passes
- [ ] Markdown front matter is valid (id, title, status, owner, created, updated, version, domain, tags, dependencies, related)
- [ ] No company-specific content was added
- [ ] No work-project content was added
- [ ] Documentation was updated before or with any behavior change
- [ ] Related documents were linked where appropriate (`dependencies` / `related`)
- [ ] An ADR was added if an architectural decision was made

## AI Usage Disclosure

<Which AI agent(s), if any, were used (ChatGPT / Claude Code / Cursor / Codex / other), and for what part of this change.>

## Acceptance Criteria

1. <verifiable statement>
2. <verifiable statement>

## Risk Level

- [ ] Low — documentation/template only, no standards affected
- [ ] Medium — affects a foundational standard or widely-referenced document
- [ ] High — affects CONSTITUTION.md, an accepted ADR, or company-neutrality

## Reviewer Notes

<Anything a reviewer should pay special attention to.>
```
