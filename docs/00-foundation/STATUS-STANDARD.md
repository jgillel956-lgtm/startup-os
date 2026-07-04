---
id: DOC-FND-007
title: Status Standard
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: foundation
tags: [foundation, status, lifecycle]
dependencies: []
related: [DOC-FND-004, DOC-FND-002]
---

# Status Standard

Every document declares its lifecycle stage in the `status` front matter field. Status tells readers — human and AI — how much to trust a document and what may be done with it.

## Statuses

| Status | Meaning | May be relied on? |
|--------|---------|-------------------|
| `draft` | Being written; incomplete or unreviewed. | No. Do not build against a draft. |
| `review` | Content complete; awaiting review/approval. | Provisionally — expect changes. |
| `active` | Approved and in force. The current truth. | Yes. |
| `deprecated` | Still technically in force but scheduled for replacement; successor may exist. | Yes, but check the successor first. |
| `archived` | Superseded or obsolete; kept for history in `docs/99-archive/`. | No. Historical reference only. |

## Lifecycle

```
draft → review → active → deprecated → archived
          ↑         │
          └─────────┘  (active documents re-enter review on major revision)
```

## Transition Rules

1. **draft → review** — author declares content complete.
2. **review → active** — owner approves. For standards and ADR-level changes, approval is recorded via the merge of the reviewing pull request.
3. **active → deprecated** — a successor is planned or exists. The deprecated document's body gains a banner line naming the successor ID.
4. **deprecated → archived** — successor is `active`. The file moves to `docs/99-archive/`, `status` becomes `archived`, and inbound `dependencies` links are migrated to the successor.
5. **Backwards moves** (`active → review`) happen when a major revision is underway; the previously active version remains the version of record until the revision is approved.

## Special Cases

- **Templates** (`docs/10-templates/`) are `active` when usable; they skip `deprecated` and archive directly when replaced.
- **ADRs** use their own status vocabulary in the body (`Proposed`, `Accepted`, `Superseded`) but still carry a front matter `status` (`active` while the record is current, `archived` if the log itself is retired).
- **Nothing is deleted.** Archival is the terminal state (see CONSTITUTION.md, Article VII).
