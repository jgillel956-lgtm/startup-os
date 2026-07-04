---
id: DOC-AI-004
title: AI Workflow
status: draft
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [ai, workflow, process, agents]
dependencies: [DOC-AI-002, DOC-AI-003]
related: [DOC-AI-001, DOC-AI-005, DOC-FND-008]
---

# AI Workflow

The standard loop for building anything with AI agents in a Startup OS repository. Every step produces an artifact in Git; nothing authoritative lives only in a chat window.

## The Loop

```
Founder / Product Owner
        ↓  (intent, priorities)
ChatGPT creates strategy, specs, architecture, or review guidance
        ↓
Documentation is committed to Git          ← docs become the source of truth
        ↓
Claude Code implements from documentation in Cursor
        ↓
Human reviews locally                      ← AI-CODE-REVIEW-CHECKLIST.md
        ↓
Code is committed and pushed
        ↓
ChatGPT or Codex reviews architecture, security, and consistency
        ↺  (findings feed back as doc updates or new tasks)
```

The critical property: **documentation is committed before implementation begins.** Claude Code implements from the repo, not from a conversation.

## When to Use Which Tool

### Use ChatGPT when
- Shaping a new capability, business direction, or product decision
- Writing or revising a PRD, architecture doc, or ADR proposal
- Reviewing a design before it is committed
- Post-implementation architecture/consistency review

### Use Claude Code when
- A committed spec (capability/PRD/API/DB) exists and needs implementing
- Refactoring without behavior change
- Generating tests from acceptance criteria
- Updating documentation alongside code changes

### Use Codex when
- An implementation needs an independent review (Claude Code should not self-certify)
- Security-sensitive code changed
- Test coverage quality is in doubt
- A second opinion on approach is worth the cost

## When to Update Documentation

- **Before implementation** — the spec that governs the work must exist and be committed first.
- **With every behavior change** — same change set, no exceptions (Operating Rule 5/13).
- **After review findings** — accepted findings that change requirements go into the spec, then into code.

## When to Create a New ADR

Create an ADR (per [ADR-TEMPLATE.md](../10-templates/ADR-TEMPLATE.md)) when a choice is:

- **Hard to reverse** (framework, storage engine, hosting, data model shape), or
- **Cross-cutting** (affects multiple domains or future capabilities), or
- **Contradicting an existing ADR** (the new ADR supersedes the old one explicitly), or
- **A standard change** (anything in `docs/00-foundation/` or `CONSTITUTION.md`).

Routine implementation choices within an accepted design do not need ADRs.

## Handling Unclear Requirements

1. **Check the docs chain first** — capability → PRD → API/DB specs → ADRs. Most "unclear" questions are already answered.
2. **Classify the gap:**
   - *Immaterial* (naming detail, conventional default) → choose the conventional option, note the choice in the PR/commit description.
   - *Material* (affects behavior, data, security, or cost) → **stop.** Ask the human with a specific question and the options you see.
3. **Never resolve material ambiguity by inventing.** The answer becomes a documentation update first, then implementation resumes.
4. **Record recurring gaps** — if the same kind of ambiguity keeps appearing, the template that produced the spec needs improving; raise it.
