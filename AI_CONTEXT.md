---
id: DOC-ROOT-002
title: AI Context — Operating Rules for AI Agents
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.3.0
domain: root
tags: [ai, agents, context, rules]
dependencies: [DOC-ROOT-003]
related: [DOC-ROOT-001, DOC-FND-004, DOC-FND-005, DOC-AI-001, DOC-AI-002, DOC-AI-004, DOC-FND-009, DOC-FND-010]
---

# AI Context

**Audience:** Claude Code, Cursor, ChatGPT, Codex, and any other AI agent working in this repository or a repository built from it.

Read this file before doing anything else. These rules are binding.

## What This Repository Is

Startup OS is a **reusable, company-neutral framework** for building, documenting, developing, and operating software companies. It contains standards, templates, patterns, and decision records — not company-specific content and not application source code.

## Core Rules

### 1. Never invent requirements

If a requirement, behavior, constraint, or specification is not documented, it does not exist. Do not fill gaps with assumptions. When documentation is missing or ambiguous, stop and ask the human — do not guess and proceed.

### 2. Read documentation before coding

Before writing or modifying any code, read the governing documents in this order:

1. `AI_CONTEXT.md` (this file)
2. `CONSTITUTION.md` — core principles
3. `docs/00-foundation/` — standards that govern all work
4. The specific PRD, API spec, database spec, or ADR that governs the task

Code written without reading the governing documentation is invalid, even if it works.

### 3. Update documentation when behavior changes

Documentation and behavior must never diverge. Any change that alters behavior, structure, or decisions must update the affected documents **in the same change set**. Bump the `updated` date and `version` in front matter per [docs/00-foundation/METADATA-STANDARD.md](docs/00-foundation/METADATA-STANDARD.md).

### 4. Do not mix personal projects with work projects

- **Personal projects** (AviationHub, BidIgniter, and anything built from Startup OS) stay in their own repositories.
- **Work projects** are entirely separate and must never appear in this repository or in any Startup OS-based personal repository — no names, no data, no code, no references.
- **DisburseCloud is work-related and is explicitly excluded** from Startup OS and all personal implementations. Do not reference it, import from it, or model anything on its internals.

### 5. Startup OS is reusable and company-neutral

Nothing in this repository may assume a specific company, product, customer, or dataset. Examples use placeholder names. If content only makes sense for one company, it belongs in that company's repository, not here.

### 6. AviationHub and BidIgniter are future implementations

They are personal projects that will be **built using** Startup OS later, each in its own repository. They are mentioned here only as planned implementations. Do not create content for them inside this repository.

### 7. No application source code in this repository

Startup OS holds documentation, templates, prompts, and light automation scripts. Application code lives in implementation repositories.

### 8. Run validation after touching Markdown

AI agents should run `npm run validate` after creating or updating Markdown documents. See [docs/00-foundation/VALIDATION.md](docs/00-foundation/VALIDATION.md).

### 9. Use GitHub templates for reviewable changes

AI agents should use GitHub issue and PR templates when preparing changes that will be reviewed. See [docs/00-foundation/GITHUB-WORKFLOW.md](docs/00-foundation/GITHUB-WORKFLOW.md).

## AI Agent Workflow

The full workflow and per-tool roles live in [docs/04-ai/](docs/04-ai/README.md). The short version:

- **ChatGPT** plans and reviews (strategy, PRDs, architecture, post-implementation review).
- **Claude Code** implements — from committed documentation only.
- **Cursor** is the workspace where humans and agents share the working tree.
- **Codex** reviews independently when a second opinion is needed.
- **Git is the source of truth** — chat output becomes real only when committed.
- **Documentation is updated before or with code changes** — never after, never not.

Binding rules for all agents: [docs/04-ai/AI-OPERATING-RULES.md](docs/04-ai/AI-OPERATING-RULES.md).

## Working Conventions

- Every Markdown document carries YAML front matter per the [metadata standard](docs/00-foundation/METADATA-STANDARD.md).
- Every document has a stable ID per the [ID standard](docs/00-foundation/ID-STANDARD.md).
- Document lifecycle follows the [status standard](docs/00-foundation/STATUS-STANDARD.md).
- Files and folders follow the [naming standards](docs/00-foundation/NAMING-STANDARDS.md).
- Git usage follows the [git workflow](docs/00-foundation/GIT-WORKFLOW.md).
- Significant decisions are recorded as ADRs in `DECISIONS.md` using the [ADR template](docs/10-templates/ADR-TEMPLATE.md).

## When In Doubt

Stop. Ask. Never invent.
