---
id: DOC-GH-003
title: Documentation Change Issue Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: templates
tags: [github, issue-template, documentation]
dependencies: [DOC-FND-004, DOC-FND-009]
related: [DOC-FND-010, DOC-GH-005, DOC-FND-005]
---

# Documentation Change Issue Template

GitHub issue template for proposing an update to existing Startup OS documentation — standards, templates, or domain docs. Copy the body below into a new GitHub issue.

---

```markdown
## Document(s) Affected

- <exact/path/one — DOC-ID>
- <exact/path/two — DOC-ID>

## Reason for Change

<Why this needs to change now — error found, standard evolved, gap discovered.>

## Current Problem

<What is wrong, missing, or unclear in the current document(s).>

## Proposed Update

<What the document(s) should say instead. Be specific enough to implement directly.>

## Related Documents

- <IDs of documents that reference or depend on the document(s) being changed>

## Validation Requirements

- [ ] `npm run validate` passes after the change
- [ ] Front matter `version` and `updated` are bumped per the metadata standard
- [ ] Any documents listing this one under `dependencies` have been checked for impact

## Acceptance Criteria

1. <verifiable statement — e.g. "STATUS-STANDARD.md documents the new transition rule">
2. <verifiable statement>
```
