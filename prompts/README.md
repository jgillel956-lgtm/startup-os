---
id: DOC-AI-007
title: Prompts — Overview
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: ai
tags: [ai, prompts, templates]
dependencies: [DOC-AI-005]
related: [PRM-001, PRM-002, PRM-003]
---

# Prompts

Reusable prompt templates for AI tools working in Startup OS repositories. Written per [PROMPTING-STANDARDS.md](../docs/04-ai/PROMPTING-STANDARDS.md).

## What Lives Here

- **Prompt files are reusable instructions for AI tools.** Copy one, fill the `<placeholders>`, send it to the target tool. The template stays pristine.
- One prompt per file; the filename says which tool and which job (`CLAUDE-CODE-IMPLEMENTATION-PROMPT.md`).

## Rules

1. **Specific, versioned, document-tied.** Prompts carry front matter with a version; where possible they reference governing document IDs (PRD, API, DB, ADR) instead of restating content.
2. **No secrets, credentials, or work-specific private information.** Prompts get pasted into external AI tools — treat every prompt as if it will be seen by a third party, because it will.
3. **Generic here, specific there.** Prompts in Startup OS are company-neutral templates. Company-specific prompt variants live inside that company's own repository.
4. **Templates evolve via version bump.** Improving a prompt updates its `version` and `updated` fields; a fundamentally different prompt is a new file with a new ID.

## Current Prompts

| ID | File | Target tool | Job |
|----|------|-------------|-----|
| PRM-001 | [CLAUDE-CODE-IMPLEMENTATION-PROMPT.md](CLAUDE-CODE-IMPLEMENTATION-PROMPT.md) | Claude Code | Implement from committed documentation |
| PRM-002 | [CHATGPT-ARCHITECTURE-REVIEW-PROMPT.md](CHATGPT-ARCHITECTURE-REVIEW-PROMPT.md) | ChatGPT | Architecture / design review |
| PRM-003 | [CODEX-CODE-REVIEW-PROMPT.md](CODEX-CODE-REVIEW-PROMPT.md) | Codex | Independent code review |
