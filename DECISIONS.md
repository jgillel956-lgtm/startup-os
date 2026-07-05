---
id: DOC-ROOT-004
title: Decision Log (ADRs)
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.1.0
domain: root
tags: [adr, decisions, governance]
dependencies: [DOC-ROOT-003]
related: [TPL-ADR-001, DOC-FND-008, DOC-FND-010]
---

# Decision Log

Architecture Decision Records for Startup OS. New decisions follow [docs/10-templates/ADR-TEMPLATE.md](docs/10-templates/ADR-TEMPLATE.md) and are appended here in ID order. Superseded decisions are marked, never deleted.

| ID | Title | Status | Date |
|----|-------|--------|------|
| ADR-0001 | Use Markdown as the source format | Accepted | 2026-07-04 |
| ADR-0002 | Use Git as the source of truth | Accepted | 2026-07-04 |
| ADR-0003 | Keep Startup OS company-neutral | Accepted | 2026-07-04 |
| ADR-0004 | Separate personal projects from work projects | Accepted | 2026-07-04 |
| ADR-0005 | Use documentation before development | Accepted | 2026-07-04 |
| ADR-0006 | Use feature branches after bootstrap | Accepted | 2026-07-04 |

---

## ADR-0001: Use Markdown as the source format

- **Status:** Accepted
- **Date:** 2026-07-04

### Context

Startup OS needs a document format that humans can write easily, AI agents can parse reliably, Git can diff meaningfully, and no vendor can lock in. Candidates included Markdown, proprietary wiki/document platforms (Notion, Confluence, Google Docs), and structured formats (JSON/YAML documents, AsciiDoc).

### Decision

All Startup OS documents are plain Markdown files with YAML front matter, stored in the repository.

### Consequences

- Documents are diffable, reviewable in pull requests, and readable in any editor.
- YAML front matter provides machine-readable metadata without sacrificing readability.
- No dependence on external platforms; content survives tool changes.
- Rich layout (complex tables, embedded interactivity) is limited; diagrams live as assets or Mermaid blocks.

---

## ADR-0002: Use Git as the source of truth

- **Status:** Accepted
- **Date:** 2026-07-04

### Context

Knowledge scattered across chat tools, email, and wikis becomes unfindable and unverifiable. AI agents need one authoritative, versioned location for context. Alternatives considered: wiki platforms as primary with Git as backup, or database-backed documentation systems.

### Decision

The Git repository is the single source of truth. If information is not committed, it is not authoritative. Other tools may mirror or render content but never originate it.

### Consequences

- Full history, attribution, and rollback for every document.
- Branching and pull requests give a review workflow for documentation, identical to code.
- Contributors (human and AI) must work through Git; casual edits require slightly more discipline.
- External stakeholders without Git access need exported or rendered views.

---

## ADR-0003: Keep Startup OS company-neutral

- **Status:** Accepted
- **Date:** 2026-07-04

### Context

Startup OS will be used to build multiple companies over time. If company-specific content leaks into the framework, it stops being reusable and starts leaking context between ventures.

### Decision

Startup OS contains only reusable standards, templates, patterns, and framework-level decisions. Company-specific content lives exclusively in each company's own repository. Examples in Startup OS use placeholder names.

### Consequences

- The framework can bootstrap any new company without cleanup.
- No cross-contamination of confidential or venture-specific information.
- Contributors must judge where content belongs; the rule is "if only one company cares, it goes in that company's repo."

---

## ADR-0004: Separate personal projects from work projects

- **Status:** Accepted
- **Date:** 2026-07-04

### Context

The owner maintains both personal ventures (AviationHub, BidIgniter — future implementations of Startup OS) and unrelated work-related projects. Mixing them risks confidentiality breaches, IP entanglement, and context leakage into AI tools.

### Decision

Personal and work projects are strictly separated. Startup OS and its implementations contain no work-related names, data, code, or references. DisburseCloud is work-related and is explicitly excluded from this repository and all personal implementations.

### Consequences

- Clean IP boundaries between personal and employer/work contexts.
- AI agents operating in this repository must not import, reference, or model work-related material.
- Any overlap in ideas must be re-derived from public, neutral sources rather than copied.

---

## ADR-0005: Use documentation before development

- **Status:** Accepted
- **Date:** 2026-07-04

### Context

Code written against undocumented, assumed requirements produces drift: the system's actual behavior becomes the only spec, and neither humans nor AI agents can verify correctness. AI agents in particular amplify this — they will confidently implement whatever they infer.

### Decision

Documentation precedes development. The required sequence is: capability defined → requirements written (PRD) → design documented (API/database/ADRs) → implementation. Behavior changes update documentation in the same change set. Undocumented requirements are treated as nonexistent.

### Consequences

- Every implementation has a verifiable spec; disagreement between code and docs is a detectable bug.
- AI agents can be pointed at documentation and trusted to build the right thing.
- Upfront writing cost on every feature; the process feels slower at the start and pays back in rework avoided.

---

## ADR-0006: Use feature branches after bootstrap

- **Status:** Accepted
- **Date:** 2026-07-04

### Context

Startup OS bootstrap commits were made directly to `main` before GitHub issue and pull request templates existed. [GIT-WORKFLOW.md](docs/00-foundation/GIT-WORKFLOW.md) already prohibited direct commits to `main`, but there was no PR process or template to route work through, so Commits 0001–0004 committed directly to `main` by necessity.

### Decision

Starting with Commit 0005, meaningful changes should use feature branches and pull requests unless explicitly overridden by the founder.

### Consequences

- The early bootstrap history (Commits 0001–0004) remains valid; it is not retroactively non-compliant.
- Future changes become reviewable through the issue and PR templates established in Commit 0004.
- AI agents should prepare changes in branch-sized increments rather than committing directly to `main`.
