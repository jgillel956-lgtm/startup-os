---
id: DOC-ROOT-001
title: Startup OS
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-05
version: 1.6.0
domain: root
tags: [readme, overview, foundation]
dependencies: []
related: [DOC-ROOT-002, DOC-ROOT-003, DOC-FND-001, DOC-AI-001, DOC-FND-009, DOC-FND-010, DOC-PRD-001, DOC-ENG-001, DOC-OPS-001]
---

# Startup OS

**An AI-native framework for building, documenting, developing, and operating software companies.**

## What Startup OS Is

Startup OS is a reusable, company-neutral operating system for software startups. It is not a product and not a codebase — it is the structured knowledge layer that sits above any specific company: standards, templates, patterns, decision records, and AI context that make a company buildable and operable by both humans and AI agents.

Startup OS is deliberately separate from any single company. Companies are *implementations* of Startup OS.

## Why It Exists

Building a software company involves the same recurring work: defining products, writing requirements, designing APIs and databases, recording decisions, running sprints, talking to investors, operating the business. Most of that work is reinvented from scratch every time, and most of it lives in people's heads where AI agents cannot see it.

Startup OS exists to:

1. **Capture the repeatable structure once** — folder layouts, document standards, naming rules, templates — so every new company starts with a working operating system instead of a blank page.
2. **Make companies legible to AI** — every document carries machine-readable metadata, every decision is recorded, every standard is written down. AI agents can read the documentation and act on it without guessing.
3. **Enforce documentation-before-development** — code is written against documented requirements, never against assumptions.

## How It Is Used

1. **As a reference** — standards in `docs/00-foundation/` govern how all documents are written, named, identified, and versioned.
2. **As a source of templates** — documents in `docs/10-templates/` are copied into company repositories and filled in.
3. **As a starting point** — a new company repository begins by adopting the Startup OS structure, then grows its own content inside it.
4. **As AI context** — `AI_CONTEXT.md` and the foundation documents are loaded by AI coding agents (Claude Code, Cursor, ChatGPT, Codex) so they operate with the same rules humans do.

## Repository Structure

```
startup-os/
├── README.md              ← You are here
├── AI_CONTEXT.md          ← Operating rules for AI agents
├── CONSTITUTION.md        ← Core principles (rarely change)
├── DECISIONS.md           ← Architecture Decision Records (ADRs)
├── CONTRIBUTING.md        ← How humans and AI agents contribute
├── docs/
│   ├── 00-foundation/     ← Standards: structure, naming, metadata, IDs, status, git
│   ├── 01-business/       ← Business model, strategy, legal
│   ├── 02-product/        ← Product vision, PRDs, roadmaps
│   ├── 03-engineering/    ← Architecture, APIs, databases, infrastructure
│   ├── 04-ai/             ← AI strategy, prompts, agent design
│   ├── 05-design/         ← Design system, UX standards
│   ├── 06-marketing/      ← Positioning, content, channels
│   ├── 07-sales/          ← Sales process, pricing, playbooks
│   ├── 08-investors/      ← Fundraising, updates, data room structure
│   ├── 09-operations/     ← Finance, HR, tooling, processes
│   ├── 10-templates/      ← Copy-and-fill document templates
│   ├── 11-patterns/       ← Reusable solutions and playbooks
│   ├── 12-knowledge/      ← Research, learnings, external knowledge
│   └── 99-archive/        ← Superseded documents (never deleted)
├── prompts/               ← Reusable AI prompts
├── templates/             ← Non-document templates (configs, scaffolds)
├── scripts/               ← Automation scripts
├── assets/                ← Images, diagrams, shared assets
└── .github/               ← Issue and PR templates
```

See [docs/00-foundation/FOLDER-STRUCTURE.md](docs/00-foundation/FOLDER-STRUCTURE.md) for the full specification.

## AI-First Development Philosophy

Startup OS assumes AI agents are first-class participants in building and operating a company:

- **Everything is written down.** If it is not documented, it does not exist. AI agents cannot read minds.
- **Everything is structured.** YAML front matter on every document gives agents machine-readable identity, status, ownership, and relationships.
- **Everything is traceable.** Stable IDs link requirements to designs to decisions. Agents can follow the chain.
- **Standards over instructions.** Instead of telling an agent what to do each time, the standards define correct behavior once.

## AI Operating System

The AI layer that governs how agents work here lives in [docs/04-ai/](docs/04-ai/README.md):

- [AI-OPERATING-RULES.md](docs/04-ai/AI-OPERATING-RULES.md) — binding rulebook for all AI agents
- [AGENT-ROLES.md](docs/04-ai/AGENT-ROLES.md) — what ChatGPT, Claude Code, Cursor, and Codex each do
- [AI-WORKFLOW.md](docs/04-ai/AI-WORKFLOW.md) — the plan → document → implement → review loop
- [PROMPTING-STANDARDS.md](docs/04-ai/PROMPTING-STANDARDS.md) — how to write prompts for agents
- [AI-CODE-REVIEW-CHECKLIST.md](docs/04-ai/AI-CODE-REVIEW-CHECKLIST.md) — reviewing AI-generated code
- [prompts/](prompts/README.md) — reusable prompt templates

## Validation

Every Markdown document's YAML front matter is checked automatically:

```bash
npm run validate
```

See [docs/00-foundation/VALIDATION.md](docs/00-foundation/VALIDATION.md) for what it checks and how to fix errors.

## Product Operating System

How products, capabilities, requirements, and stories are documented before development starts:

- [docs/02-product/README.md](docs/02-product/README.md) — overview of the product domain
- [docs/02-product/PRODUCT-OPERATING-SYSTEM.md](docs/02-product/PRODUCT-OPERATING-SYSTEM.md) — the overall product operating model
- [docs/02-product/CAPABILITY-MODEL.md](docs/02-product/CAPABILITY-MODEL.md) — what a capability is and how it's structured
- [docs/02-product/PRD-STANDARD.md](docs/02-product/PRD-STANDARD.md) — how Product Requirements Documents are written

## Engineering Operating System

How approved product work becomes reliable software — technical design, implementation, review, testing, release, observability, and technical debt:

- [docs/03-engineering/README.md](docs/03-engineering/README.md) — overview of the engineering domain
- [docs/03-engineering/ENGINEERING-OPERATING-SYSTEM.md](docs/03-engineering/ENGINEERING-OPERATING-SYSTEM.md) — principles, responsibilities, cadence

## Operations & Support Operating System

How approved, released work gets supported: customer support model, SLAs, triage, escalation, incident communication, knowledge base, runbooks, and the feedback loop back into product and engineering:

- [docs/09-operations/README.md](docs/09-operations/README.md) — overview of the operations & support domain
- [docs/09-operations/OPERATIONS-OPERATING-SYSTEM.md](docs/09-operations/OPERATIONS-OPERATING-SYSTEM.md) — the overall operating model

## GitHub Workflow

How changes move through issues and pull requests is documented in:

- [docs/00-foundation/GITHUB-WORKFLOW.md](docs/00-foundation/GITHUB-WORKFLOW.md) — issues, PRs, ADRs, and their templates
- [docs/00-foundation/GIT-WORKFLOW.md](docs/00-foundation/GIT-WORKFLOW.md) — branching, commits, and review

## Documentation-Before-Development Rule

**No code is written until the governing documentation exists.**

The sequence is always: document the capability → document the requirements (PRD) → document the design (API, database, ADRs) → then implement. When behavior changes, documentation is updated in the same change. Code that contradicts documentation is a bug in one of the two.

## Relationship to Future Company Repositories

Startup OS is the framework; companies are implementations built with it. Each company lives in its **own repository**, adopts the Startup OS structure and standards, and references this repo as its foundation.

Planned implementations:

- **AviationHub** — personal project, future implementation
- **BidIgniter** — personal project, future implementation

Company-specific content (real requirements, real decisions, real data) belongs in the company repository, never here. Startup OS stays company-neutral so it remains reusable.
