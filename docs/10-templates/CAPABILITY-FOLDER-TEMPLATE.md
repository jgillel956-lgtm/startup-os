---
id: TPL-CAP-002
title: Capability Folder Template
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: templates
tags: [template, capability, folder, product]
dependencies: [DOC-PRD-004]
related: [TPL-CAP-001, DOC-PRD-004]
---

# Capability Folder Template

Describes the full folder structure for a capability that has outgrown the single-file [CAPABILITY-TEMPLATE.md](CAPABILITY-TEMPLATE.md). The concept is defined in [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md); this document is the practical how-to for creating and filling one.

## Folder Naming

Create the folder at `docs/02-product/capabilities/<slug>/`, where `<slug>` is lowercase-kebab-case and matches the capability's name (e.g. `capabilities/accept-payments/`). The capability's own ID (`CAP-PRD-<NNN>`, assigned per [ID-STANDARD.md](../00-foundation/ID-STANDARD.md)) is recorded in `README.md`'s front matter, not in the folder name — folder names describe, IDs identify.

## Required Files

Not every file is required for every capability — only create what the capability actually needs (see [CAPABILITY-MODEL.md](../02-product/CAPABILITY-MODEL.md), "Required Capability Documents"). `README.md`, `BUSINESS.md`, `PROBLEM.md`, and `ACCEPTANCE-CRITERIA.md` are the minimum for any capability past Level 1 (Defined).

| File | Purpose | Minimum for |
|------|---------|-------------|
| `README.md` | Overview: summary, scope, success criteria | Level 1+ |
| `BUSINESS.md` | Value, revenue/cost impact, strategic fit | Level 1+ |
| `PROBLEM.md` | The problem, with evidence | Level 1+ |
| `SOLUTION.md` | Chosen solution direction, alternatives rejected | Level 2+ |
| `USER-STORIES.md` | Stories delivering this capability | Level 2+ |
| `WORKFLOWS.md` | Step-by-step user/system workflows | When flows are non-trivial |
| `BUSINESS-RULES.md` | Rules enforced regardless of entry point | When such rules exist |
| `PERMISSIONS.md` | Roles and authorization rules | When access is restricted |
| `DATA-MODEL.md` | Conceptual data owned/touched | When the capability owns data |
| `API.md` | Conceptual API surface | When the capability exposes/consumes an API |
| `UX.md` | Flows, screens, states, or links to design assets | When there is a UI |
| `NOTIFICATIONS.md` | What's communicated, to whom, when | When notifications are sent |
| `AI.md` | AI-driven behavior and its constraints | When AI is involved (state "None" if not) |
| `TEST-CASES.md` | Test scenarios, including edge/failure cases | Level 2+ |
| `ACCEPTANCE-CRITERIA.md` | Consolidated, verifiable definition of done | Level 1+ |
| `FUTURE.md` | Deferred ideas, with reasoning | When ideas have been deferred |

## Required Metadata

Every file in the folder carries standard Startup OS front matter (see [METADATA-STANDARD.md](../00-foundation/METADATA-STANDARD.md)): `id`, `title`, `status`, `owner`, `created`, `updated`, `version`, `domain: product`, `tags`, `dependencies`, `related`. `README.md` takes the capability's own ID (`CAP-PRD-<NNN>`); the other files in the folder get their own `DOC` or domain-appropriate IDs and list the capability's ID under `dependencies`.

## Marking Incomplete Sections

Use `<TBD>` inline for a value not yet known, and state explicitly why in an Open Questions section — never leave a section silently blank. A file that does not yet apply to this capability is simply not created; an empty placeholder file is not required.

## Referencing Dependencies

Reference other capabilities, PRDs, APIs, or database specs **by ID**, not just by name (`CAP-PRD-003`, not "the payments capability") — IDs survive renames. Cross-file references within the same capability folder (e.g. `WORKFLOWS.md` referencing `PERMISSIONS.md`) use relative links.

## How AI Agents Should Use This Folder

- Read `README.md`, `PROBLEM.md`, and `ACCEPTANCE-CRITERIA.md` first — they define what the capability is and what "done" means.
- Read `AI.md` before implementing anything AI-driven within the capability; if it states constraints, they are binding.
- If a file this capability clearly needs is missing (e.g. `PERMISSIONS.md` for a capability that touches money), flag the gap rather than inventing the missing content (per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)).
- Update the relevant file in this folder in the same change set as any behavior change it governs.
