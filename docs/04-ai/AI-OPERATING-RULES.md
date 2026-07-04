---
id: DOC-AI-002
title: AI Operating Rules
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [ai, rules, agents, standard]
dependencies: [DOC-ROOT-002, DOC-FND-004]
related: [DOC-AI-001, DOC-AI-003, DOC-AI-004]
---

# AI Operating Rules

The master rulebook for every AI agent working in a Startup OS repository — Claude Code, Cursor, ChatGPT, Codex, and any future tool. These rules are binding. An agent that cannot comply must stop and say so.

## Read Before Acting

1. **Read `AI_CONTEXT.md` first.** Always, at the start of every session, before any other action.
2. **Read `DECISIONS.md` before making architectural changes.** An existing ADR may already decide the question; contradicting an accepted ADR requires a new ADR, not a silent override.
3. **Read the relevant capability specification before implementation.** The capability, its PRD, and any linked API/database specs define the work. No governing spec → no implementation.

## Never Invent

4. **Never invent requirements.** Undocumented requirements do not exist. Report the gap; do not fill it.
5. **Never change business logic without updating documentation.** Behavior and documentation change in the same change set, always.
6. **Never create undocumented database tables.** Every table exists in a database spec (`DB-<NNN>`) before it exists in a migration.
7. **Never create undocumented API endpoints.** Every endpoint exists in an API spec (`API-<NNN>`) before it exists in code.

## Never Mix

8. **Never mix personal projects with work projects.** Separate repositories, separate contexts, no shared references.
9. **Never use work information in personal repositories.** No work-related names, data, code, or internals — in content, examples, or commit messages. Work projects are excluded from Startup OS and all personal implementations.

## Work Discipline

10. **Ask for clarification only when it matters.** Ask when the specification is incomplete **and** the decision materially affects implementation. For immaterial details, choose the conventional option and note the choice. Do not ask about things the documentation already answers.
11. **Prefer small, reviewable changes.** One logical change per commit; commit-sized batches over sweeping rewrites.
12. **Preserve existing naming standards.** Follow [NAMING-STANDARDS.md](../00-foundation/NAMING-STANDARDS.md); never introduce a competing convention.
13. **Update related documents when behavior changes.** Check the `dependencies` and `related` links of every document you touch; update front matter (`updated`, `version`) per the [metadata standard](../00-foundation/METADATA-STANDARD.md).
14. **Do not create broad abstractions before they are needed.** Solve the documented case. Generalize when a second real case exists, not before.
15. **Do not overwrite user work without explicitly noting the change.** If uncommitted human edits exist in a file you must change, say so before or alongside the change — never silently discard them.
16. **Keep generated code and documentation consistent.** Anything you generate must agree with the specs it came from; if you find them diverging mid-task, stop and surface it.

## On Conflict

If two rules appear to conflict, the safety-side rule wins (never-invent and never-mix outrank speed and completeness), and the conflict is reported to a human.
