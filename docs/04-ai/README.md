---
id: DOC-AI-001
title: AI — Overview
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-06
version: 1.1.0
domain: ai
tags: [ai, overview, agents, operating-system]
dependencies: [DOC-ROOT-002]
related: [DOC-AI-002, DOC-AI-003, DOC-AI-004, DOC-AI-005, DOC-AI-006, DOC-AI-007]
---

# AI — Overview

The AI domain defines the **AI Operating System**: the layer of rules, roles, workflows, and prompts that lets AI agents work inside Startup OS repositories as reliably as a well-onboarded engineer.

## What the AI Operating System Is

Startup OS treats AI agents as first-class participants (Constitution, Article III). That only works if agents have the same things a new hire needs: rules of conduct, a defined role, a workflow, and a way to receive instructions. The AI Operating System provides exactly that:

| Document | Provides |
|----------|----------|
| [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) | Master rulebook binding all agents |
| [AGENT-ROLES.md](AGENT-ROLES.md) | What each AI tool does and does not do |
| [AI-WORKFLOW.md](AI-WORKFLOW.md) | The standard plan → document → implement → review loop |
| [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md) | How humans write prompts for agents |
| [AI-CODE-REVIEW-CHECKLIST.md](AI-CODE-REVIEW-CHECKLIST.md) | How AI-generated code is reviewed |
| [`prompts/`](../../prompts/README.md) | Reusable prompt templates |
| [AI-USAGE-PLAYBOOKS.md](AI-USAGE-PLAYBOOKS.md) | Practical, day-to-day guidance for using AI assistants — the index into the six playbooks below |
| [CHATGPT-PLANNING-PLAYBOOK.md](CHATGPT-PLANNING-PLAYBOOK.md) | Planning, task design, explanation, PR descriptions, review prep |
| [CLAUDE-CODE-EXECUTION-PLAYBOOK.md](CLAUDE-CODE-EXECUTION-PLAYBOOK.md) | Reading task files, making changes, validating, committing, summarizing |
| [CURSOR-WORKFLOW-PLAYBOOK.md](CURSOR-WORKFLOW-PLAYBOOK.md) | The local workspace where humans and agents meet |
| [AI-REVIEW-AND-VALIDATION-PLAYBOOK.md](AI-REVIEW-AND-VALIDATION-PLAYBOOK.md) | Reviewing docs, checking links/metadata, flagging unsupported claims |
| [AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md](AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md) | Worked examples for writing good task files and prompts |

## Supported AI Tools

- **ChatGPT** — planning, strategy, architecture, review
- **Claude Code** — implementation inside the repository
- **Cursor** — the development workspace where humans and agents meet
- **Codex** — independent code review
- **Future agents** — any new tool adopts these same documents before doing work

Roles are defined in [AGENT-ROLES.md](AGENT-ROLES.md).

## How AI Agents Use Startup OS Documentation

1. Read `AI_CONTEXT.md` at the repository root — always first.
2. Read [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) — the binding rulebook.
3. Read the foundation standards (`docs/00-foundation/`) relevant to the task.
4. Read the specific governing documents: capability, PRD, API spec, database spec, ADRs.
5. Only then act — and only within the boundaries those documents define.

## Documentation Is the Source of Truth

The repository's documentation — not chat history, not memory, not inference — defines what is true. If documentation and code disagree, that disagreement is a bug to surface, not a gap to paper over. If documentation is silent, the requirement does not exist yet.

## How Agents Interact With Their Environment

- **Humans** — humans set objectives, approve decisions, and review output. Agents propose; humans decide. Unclear specifications go back to the human, not into the agent's imagination.
- **Git** — all agent work flows through Git: read state from the repository, deliver changes as commits with clear messages, never bypass the workflow in [GIT-WORKFLOW.md](../00-foundation/GIT-WORKFLOW.md).
- **Cursor** — the shared workspace. Agents operating inside Cursor respect the open working tree: never silently overwrite uncommitted human work.
- **Company repositories** — implementations of Startup OS (e.g. the future personal projects AviationHub and BidIgniter) inherit these rules. Company-specific documents live there; Startup OS stays neutral. Work projects are excluded from personal repositories entirely.

## Why Agents Must Not Invent Requirements

An invented requirement is indistinguishable from a real one once it ships. It gets built on, tested against, and defended — and nobody decided it. AI agents generate plausible details fluently, which makes silent invention the single most damaging agent failure mode. The rule is absolute: **if it is not documented, it does not exist.** Gaps are reported to a human, who either documents the requirement or rejects it.
