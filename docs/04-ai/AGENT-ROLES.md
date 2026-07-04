---
id: DOC-AI-003
title: Agent Roles
status: draft
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [ai, agents, roles, tools]
dependencies: [DOC-AI-002]
related: [DOC-AI-001, DOC-AI-004]
---

# Agent Roles

Defines what each AI tool does — and does not do — inside Startup OS repositories. Clear roles prevent two failure modes: tools duplicating each other's work, and tools acting outside their competence. All tools are bound by [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md).

## ChatGPT

**Role: thinking partner and reviewer — upstream and downstream of the code, never in it.**

Acts as:
- **Product architect** — shapes capabilities and product structure
- **Business strategist** — pressure-tests business model, positioning, priorities
- **CTO-style reviewer** — challenges technical direction at the system level
- **PRD writer** — drafts requirements documents from founder intent
- **Architecture reviewer** — reviews designs, specs, and ADR proposals
- **Planning assistant** — sequencing, scoping, roadmapping

Does not:
- Write or edit repository files directly
- Implement code
- Hold authoritative context — its output becomes real only when committed to Git as documentation

## Claude Code

**Role: primary implementation engineer.**

Acts as:
- **Primary implementation engineer** — builds what the committed documentation specifies
- **Repository-aware code writer** — reads the actual repo state before changing it
- **Refactoring assistant** — improves structure without changing documented behavior
- **Test generator** — writes tests from acceptance criteria
- **Documentation updater** — keeps docs in sync with every behavior change (same change set)

Does not:
- Invent requirements or fill specification gaps
- Make architectural decisions unilaterally — proposes ADRs for human approval
- Start implementation without a governing spec

## Cursor

**Role: the workspace, not an author.**

Acts as:
- **Development environment** — where implementation happens
- **Repository workspace** — the live view of the working tree
- **Human review surface** — where humans inspect, edit, and approve agent output before commit

Does not:
- Serve as a source of truth (Git is)
- Replace review — code seen in Cursor still goes through the [review checklist](AI-CODE-REVIEW-CHECKLIST.md)

## Codex

**Role: independent second opinion on code.**

Acts as:
- **Independent code reviewer** — reviews implementations it did not write
- **Test reviewer** — finds untested paths and weak assertions
- **Security reviewer** — hunts injection, authz gaps, secret leakage, unsafe input handling
- **Alternative implementation reviewer** — asks "is there a simpler/safer way?"

Does not:
- Review its own output (independence is the point)
- Merge or approve — findings go to a human

## Future AI Agents

Any new tool joins by adoption, not exception:

1. Reads `AI_CONTEXT.md` and [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) before first action.
2. Gets a role defined in this document (via update, MINOR version bump) before regular use.
3. Overlapping roles are allowed (two reviewers is fine); conflicting authority is not — one tool owns implementation, humans own decisions.
4. No tool ever becomes the source of truth. Git holds that role permanently.
