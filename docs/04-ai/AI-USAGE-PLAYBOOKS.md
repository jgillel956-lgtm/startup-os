---
id: DOC-AI-007
title: AI Usage Playbooks
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: ai
tags: [ai, playbooks, usage, guide]
dependencies: [DOC-AI-002, DOC-AI-003]
related: [DOC-AI-008, DOC-AI-009, DOC-AI-010, DOC-AI-011, DOC-AI-012, DOC-FND-011]
---

# AI Usage Playbooks

Practical, day-to-day guidance for using AI assistants on Startup OS work — planning, writing, reviewing, validating, and improving documents and code without losing human control or letting an agent invent unsupported facts. [AGENT-ROLES.md](AGENT-ROLES.md) and [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) define *what each role is allowed to do and must never do*; these playbooks are the practical "how do I actually run this" companion to those rules, not a replacement for reading them.

## Read the Rules First

Every playbook below assumes [AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) and [AGENT-ROLES.md](AGENT-ROLES.md) have already been read. Nothing in a playbook overrides either — if a playbook and the rules ever appear to conflict, the rules win, and that's a documentation bug in the playbook to fix, not a license to follow the playbook instead.

## No AI Tool Approves, Merges, or Replaces Human Judgment

Every playbook in this set operates inside that boundary. Planning assistants draft; humans decide. Executing agents implement from committed specs; humans review and merge. Reviewing agents find issues; humans (or an independent agent, never the same one) confirm them. Nothing here changes who holds final authority — see [AI-ASSISTED-WORKFLOW-PATTERNS.md](../11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md), "Human holds final authority on anything hard-to-reverse or externally visible."

## These Playbooks Are Tool-Agnostic in Spirit

ChatGPT, Claude Code, and Cursor are named because they're the tools in current use — see [AGENT-ROLES.md](AGENT-ROLES.md)'s "Future AI Agents" section. A new planning assistant, coding agent, or workspace tool adopts the *role* a playbook describes, not the specific product name. When a new tool joins, write or adapt a playbook for it rather than assuming the existing three will be used forever.

## Which Playbook to Use

| I need to... | Playbook |
|--------------|----------|
| Plan work, shape a task, write a PR description, prepare a review | [CHATGPT-PLANNING-PLAYBOOK.md](CHATGPT-PLANNING-PLAYBOOK.md) |
| Execute a task file, make repository changes, commit, and summarize | [CLAUDE-CODE-EXECUTION-PLAYBOOK.md](CLAUDE-CODE-EXECUTION-PLAYBOOK.md) |
| Work locally, review files, run commands, manage branches alongside an agent | [CURSOR-WORKFLOW-PLAYBOOK.md](CURSOR-WORKFLOW-PLAYBOOK.md) |
| Review AI output, check links/metadata, flag unsupported claims before committing | [AI-REVIEW-AND-VALIDATION-PLAYBOOK.md](AI-REVIEW-AND-VALIDATION-PLAYBOOK.md) |
| Write a good task file, prompt, or set of acceptance criteria | [AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md](AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md) |
| Understand the full plan → document → implement → review loop these playbooks fit into | [AI-WORKFLOW.md](AI-WORKFLOW.md) |
| Hand off a task between a planning assistant and a coding agent | [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) |

## Common Threads Across Every Playbook

- **Handling uncertainty.** Every playbook below points back to [AI-WORKFLOW.md](AI-WORKFLOW.md)'s "Handling Unclear Requirements" — classify the gap as immaterial (choose the conventional option, note it) or material (stop and ask), never resolve material ambiguity by inventing.
- **Stopping when standards conflict.** A task instruction that contradicts an active standard is flagged, never silently resolved in the instruction's favor — see [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)'s guardrails and [VALIDATION-FAILURE-HANDLING.md](../00-foundation/VALIDATION-FAILURE-HANDLING.md).
- **Avoiding unsupported claims.** Nothing goes into a document, commit, or PR description that isn't traceable to a committed spec, a real validation run, or a stated assumption labeled as such — see [AI-READY-KNOWLEDGE.md](../12-knowledge/AI-READY-KNOWLEDGE.md)'s "do not invent missing facts," applied here to everything an agent produces, not just knowledge records.

## Related Docs

[AI-OPERATING-RULES.md](AI-OPERATING-RULES.md) · [AGENT-ROLES.md](AGENT-ROLES.md) · [AI-WORKFLOW.md](AI-WORKFLOW.md) · [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md) · [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md)
