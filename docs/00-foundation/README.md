---
id: DOC-FND-001
title: Foundation — Overview
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-06
version: 1.9.0
domain: foundation
tags: [foundation, standards, overview]
dependencies: []
related: [DOC-FND-002, DOC-FND-003, DOC-FND-004, DOC-FND-005, DOC-FND-006, DOC-FND-007, DOC-FND-008, DOC-FND-009, DOC-FND-010, DOC-FND-011, DOC-FND-013, DOC-FND-014, DOC-FND-015, DOC-FND-016, DOC-FND-017, DOC-FND-018, DOC-FND-019, DOC-FND-020, DOC-FND-021, DOC-FND-022, DOC-FND-023, DOC-FND-024, DOC-FND-025, DOC-FND-026, DOC-FND-027, DOC-FND-028, DOC-FND-029, DOC-FND-030, DOC-FND-031, DOC-FND-032, DOC-FND-033, DOC-FND-034, DOC-FND-035]
---

# Foundation

The foundation domain defines the standards that govern every document, file, and workflow in Startup OS and its implementations. Everything else in the repository is built on these rules. When a standard conflicts with a habit, the standard wins; when a standard is wrong, change it via ADR.

## Documents

| Document | Governs |
|----------|---------|
| [FOLDER-STRUCTURE.md](FOLDER-STRUCTURE.md) | Repository layout and what belongs where |
| [NAMING-STANDARDS.md](NAMING-STANDARDS.md) | File and folder naming |
| [METADATA-STANDARD.md](METADATA-STANDARD.md) | YAML front matter on every document |
| [DOCUMENT-STANDARDS.md](DOCUMENT-STANDARDS.md) | How documents are written and structured |
| [ID-STANDARD.md](ID-STANDARD.md) | Stable document identifiers |
| [STATUS-STANDARD.md](STATUS-STANDARD.md) | Document lifecycle statuses |
| [GIT-WORKFLOW.md](GIT-WORKFLOW.md) | Branching, commits, and pull requests |
| [VALIDATION.md](VALIDATION.md) | Automated front matter validation (`npm run validate`) |
| [GITHUB-WORKFLOW.md](GITHUB-WORKFLOW.md) | GitHub issues, pull requests, and their templates |
| [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md) | Repository-based task handoff between planning and coding AI agents |
| [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md) | What every domain owns, and when to use each folder |
| [DOMAIN-INTERACTION-MAP.md](DOMAIN-INTERACTION-MAP.md) | How domains connect across real cross-domain workflows |
| [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md) | Where to start for a specific task, human or AI |
| [STARTUP-OS-ADOPTION-GUIDE.md](STARTUP-OS-ADOPTION-GUIDE.md) | How to adopt Startup OS gradually, by company stage |
| [DOCUMENTATION-QUALITY-STANDARD.md](DOCUMENTATION-QUALITY-STANDARD.md) | The bar documentation is evaluated against: clarity, completeness, consistency, neutrality, ownership, metadata, links, usefulness |
| [DOCUMENTATION-VALIDATION-CHECKLIST.md](DOCUMENTATION-VALIDATION-CHECKLIST.md) | Pre-commit checklist covering what automated validation can't check |
| [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) | How documents link across domains without duplication or stale references |
| [DOCUMENTATION-REVIEW-GATES.md](DOCUMENTATION-REVIEW-GATES.md) | Which changes need a self-check versus independent review |
| [DOCUMENTATION-VALIDATION-WORKFLOW.md](DOCUMENTATION-VALIDATION-WORKFLOW.md) | When and how to run validation before a commit or PR |
| [VALIDATION-RULES.md](VALIDATION-RULES.md) | The full rule catalog — IDs, metadata, folders, links, archive, tasks, claims |
| [VALIDATION-FAILURE-HANDLING.md](VALIDATION-FAILURE-HANDLING.md) | When to fix, flag, escalate, or stop on a validation failure |
| [REPOSITORY-CHANGE-MANAGEMENT.md](REPOSITORY-CHANGE-MANAGEMENT.md) | How every change type is proposed, reviewed, approved, and tracked |
| [VERSIONING-STANDARD.md](VERSIONING-STANDARD.md) | When and how a document's version should change, with worked examples |
| [CHANGELOG-STANDARD.md](CHANGELOG-STANDARD.md) | How to summarize a meaningful change in plain language |
| [RELEASE-NOTES-STANDARD.md](RELEASE-NOTES-STANDARD.md) | How to communicate a larger group of changes at a milestone |
| [STARTUP-OS-V1-READINESS-REVIEW.md](STARTUP-OS-V1-READINESS-REVIEW.md) | Honest v1 readiness assessment — current verdict: not yet |
| [STARTUP-OS-V1-GAP-ANALYSIS.md](STARTUP-OS-V1-GAP-ANALYSIS.md) | The specific gaps found, with severity and fixes |
| [STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md](STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md) | What must be true to declare v1 complete |
| [STARTUP-OS-V1-RELEASE-CHECKLIST.md](STARTUP-OS-V1-RELEASE-CHECKLIST.md) | Final checklist before tagging v1 |
| [EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md](EXAMPLE-COMPANY-IMPLEMENTATION-GUIDE.md) | Step-by-step first pass through Startup OS for a brand-new company |
| [NEW-COMPANY-SETUP-CHECKLIST.md](NEW-COMPANY-SETUP-CHECKLIST.md) | The implementation guide's flow as a check-off list |
| [STARTUP-OS-IMPLEMENTATION-PATHS.md](STARTUP-OS-IMPLEMENTATION-PATHS.md) | How the default flow shifts by company archetype |
| [COMPANY-OPERATING-PACKAGE.md](COMPANY-OPERATING-PACKAGE.md) | The minimum artifact set a company needs to be operational |

## Reading Order

New contributors (human or AI) read in this order:

1. Repository root: `README.md`, `AI_CONTEXT.md`, `CONSTITUTION.md`
2. This folder, top to bottom as listed above — or jump straight to [STARTUP-OS-MAP.md](STARTUP-OS-MAP.md) and [DOCUMENTATION-NAVIGATION-GUIDE.md](DOCUMENTATION-NAVIGATION-GUIDE.md) for a faster orientation
3. The templates in `docs/10-templates/` relevant to the task at hand

## Changing a Standard

Standards change only through an ADR in `DECISIONS.md`. The ADR records why the old rule was insufficient and what the migration path is. After acceptance, the standard document is updated (version bump) and affected documents are migrated.
