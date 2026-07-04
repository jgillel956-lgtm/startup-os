---
id: DOC-ROOT-005
title: Contributing to Startup OS
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: root
tags: [contributing, workflow, humans, ai-agents]
dependencies: [DOC-FND-008]
related: [DOC-ROOT-002, DOC-FND-004, DOC-FND-005]
---

# Contributing

Startup OS accepts contributions from humans and AI agents. Both follow the same standards; the workflow differs slightly.

## Ground Rules (Everyone)

1. **Read first.** [AI_CONTEXT.md](AI_CONTEXT.md), [CONSTITUTION.md](CONSTITUTION.md), and `docs/00-foundation/` govern all contributions.
2. **Front matter is mandatory.** Every Markdown file carries complete YAML front matter per the [metadata standard](docs/00-foundation/METADATA-STANDARD.md).
3. **Stay company-neutral.** No company-specific or work-related content. No exceptions.
4. **Record decisions.** Anything that changes a standard, principle, or structural choice needs an ADR in [DECISIONS.md](DECISIONS.md).
5. **Archive, don't delete.** Superseded documents move to `docs/99-archive/` with status `archived`.
6. **Update, don't duplicate.** Improve the existing document instead of creating a parallel one.

## Workflow for Humans

1. Create a feature branch per the [git workflow](docs/00-foundation/GIT-WORKFLOW.md) — never commit to `main` directly.
2. Make the change: new document from the right template in `docs/10-templates/`, or edit an existing one.
3. Update front matter: bump `version`, set `updated` to today, adjust `status` if the lifecycle stage changed.
4. Open a pull request using the PR template. Explain what changed and why.
5. Merge after review.

## Workflow for AI Agents

1. **Load context**: read `AI_CONTEXT.md`, then the standards in `docs/00-foundation/`, then the documents governing your task.
2. **Never invent requirements.** If the task is ambiguous or the governing documentation is missing, stop and ask the human.
3. **Use templates.** New documents start from the matching template in `docs/10-templates/`; do not improvise structure.
4. **Keep metadata correct.** Assign IDs per the [ID standard](docs/00-foundation/ID-STANDARD.md); maintain `dependencies` and `related` links.
5. **Propose, don't decree.** Changes to standards or principles are proposed as draft ADRs for human approval.
6. **Same-change-set rule.** If your change alters behavior or structure, update the affected documentation in the same branch/commit series.
7. **Summarize your work** in the commit message and PR description so a human can review it without replaying your session.

## Review Standards

A contribution is mergeable when:

- Front matter is complete and valid.
- Naming follows [NAMING-STANDARDS.md](docs/00-foundation/NAMING-STANDARDS.md).
- Content is company-neutral and contains no work-related references.
- Links resolve; referenced IDs exist.
- Any decision-level change has an ADR.

## What Does Not Belong Here

- Application source code (lives in implementation repositories).
- Company-specific requirements, data, or decisions.
- Work-related material of any kind.
- Secrets, credentials, or personal data.
