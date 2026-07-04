---
id: DOC-FND-002
title: Folder Structure Standard
status: active
owner: skip
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: foundation
tags: [foundation, structure, folders]
dependencies: [DOC-FND-003]
related: [DOC-FND-001]
---

# Folder Structure Standard

Defines the canonical layout of a Startup OS repository. Implementations (company repositories) adopt the same layout so humans and AI agents always know where things live.

## Top Level

```
/
├── README.md          # What this repository is
├── AI_CONTEXT.md      # Operating rules for AI agents
├── CONSTITUTION.md    # Core principles
├── DECISIONS.md       # ADR log
├── CONTRIBUTING.md    # Contribution workflow
├── .gitignore
├── docs/              # All documentation (numbered domains)
├── prompts/           # Reusable AI prompts
├── templates/         # Non-document templates (configs, scaffolds)
├── scripts/           # Automation scripts
├── assets/            # Images, diagrams, shared media
└── .github/           # Issue and PR templates, workflows
```

## docs/ Domains

Domains are numbered for stable ordering. Numbers never change meaning; new domains take unused numbers.

| Folder | Domain | Contains |
|--------|--------|----------|
| `docs/00-foundation/` | Foundation | Standards governing all work |
| `docs/01-business/` | Business | Business model, strategy, legal, entity docs |
| `docs/02-product/` | Product | Vision, capabilities, PRDs, roadmap |
| `docs/03-engineering/` | Engineering | Architecture, API specs, database specs, infra |
| `docs/04-ai/` | AI | AI strategy, agent design, prompt engineering docs |
| `docs/05-design/` | Design | Design system, UX standards, brand |
| `docs/06-marketing/` | Marketing | Positioning, messaging, content, channels |
| `docs/07-sales/` | Sales | Sales process, pricing, playbooks |
| `docs/08-investors/` | Investors | Fundraising strategy, updates, data room structure |
| `docs/09-operations/` | Operations | Finance, HR, tooling, internal processes |
| `docs/10-templates/` | Templates | Copy-and-fill document templates |
| `docs/11-patterns/` | Patterns | Reusable solutions, playbooks, recipes |
| `docs/12-knowledge/` | Knowledge | Research notes, learnings, external knowledge |
| `docs/99-archive/` | Archive | Superseded documents (status `archived`) |

## Placement Rules

1. **One home per document.** A document lives in exactly one domain folder; cross-domain relevance is expressed through `related` front matter links, not copies.
2. **Templates are copied out, never filled in place.** `docs/10-templates/` stays pristine.
3. **Archive preserves path context.** Archived documents keep their original filename; the front matter records the original domain.
4. **Subfolders are allowed** inside a domain when a topic exceeds ~10 documents; subfolder names follow [NAMING-STANDARDS.md](NAMING-STANDARDS.md).
5. **No application source code** anywhere in a Startup OS repository. Implementation repositories keep code outside `docs/` in their own structure.
6. **Empty folders carry a `.gitkeep`** so structure survives cloning.

## Non-docs Folders

- `prompts/` — one prompt per file, Markdown, front matter required.
- `templates/` — machine templates (config scaffolds, boilerplate) that are not Markdown documents.
- `scripts/` — automation; each script has a header comment stating purpose and usage.
- `assets/` — referenced media; organized by domain subfolder when volume grows.
- `.github/ISSUE_TEMPLATE/`, `.github/PULL_REQUEST_TEMPLATE/` — GitHub process templates.
