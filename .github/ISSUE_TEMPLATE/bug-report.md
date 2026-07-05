---
id: DOC-GH-001
title: Bug Report Issue Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: templates
tags: [github, issue-template, bug]
dependencies: [DOC-FND-004, DOC-FND-009]
related: [DOC-FND-010, DOC-GH-005]
---

# Bug Report Issue Template

GitHub issue template for reporting bugs in Startup OS documents, scripts, templates, or future framework behavior. Copy the body below into a new GitHub issue; this file itself is not filled in.

---

```markdown
## Summary

<One or two sentences: what is broken.>

## Area Affected

<e.g. docs/00-foundation, scripts/validate-front-matter.js, docs/10-templates, .github/ — be specific.>

## Expected Behavior

<What should happen.>

## Actual Behavior

<What actually happens.>

## Steps to Reproduce

1. <step>
2. <step>
3. <observe the bug>

## Files Affected

- <exact/path/one>
- <exact/path/two>

## Related Decisions / ADRs

- <ADR-NNNN, if this bug relates to or contradicts a recorded decision>

## Validation Results

<Output of `npm run validate` relevant to this bug, if applicable. Paste failures verbatim.>

## Suggested Fix

<Optional — a proposed correction, if known.>

## Acceptance Criteria

1. <verifiable statement — bug no longer reproducible>
2. <e.g. `npm run validate` passes>
```
