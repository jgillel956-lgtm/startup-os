---
id: DOC-AI-005
title: Prompting Standards
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [ai, prompting, standard, agents]
dependencies: [DOC-AI-002]
related: [DOC-AI-004, DOC-AI-007]
---

# Prompting Standards

How humans write prompts for AI agents in Startup OS work. A good prompt is a small spec: it bounds the work, points at the truth, and defines "done." Reusable prompt templates live in [`prompts/`](../../prompts/README.md).

## Rules

1. **Always provide repository context.** Name the repository and state what kind of repo it is. Agents must not guess where they are.
2. **Always state the objective.** One or two sentences: what should be true when the work is done.
3. **Always list files to create or update.** Exact paths. The agent should never have to decide *where* things go — the folder structure standard already decided.
4. **Always list non-goals.** What the agent must *not* do is as binding as what it must do. Non-goals kill scope creep.
5. **Always include acceptance criteria.** Verifiable statements; the work is done when all pass.
6. **Always instruct the AI to inspect existing files first.** State appears in the repo, not in the prompt. "Inspect before creating or changing files" belongs in every implementation prompt.
7. **Always instruct the AI not to invent requirements.** Even though the operating rules say it, restating it in the prompt costs one line and prevents the worst failure mode.
8. **Prefer commit-sized prompts.** One prompt ≈ one reviewable commit. If the result cannot be reviewed in one sitting, the prompt was too big.
9. **Prefer exact file paths** over descriptions ("update `docs/04-ai/AGENT-ROLES.md`", not "update the roles doc").
10. **Prefer small batches over giant prompts.** A sequence of five focused prompts beats one prompt with five objectives — each step is verifiable before the next builds on it.

## Standard Prompt Structure

Every substantial prompt follows this order:

```
Context             — repository, branch, relevant background, governing doc IDs
Objective           — what should be true when done
Files to inspect    — exact paths the agent must read first
Files to create/update — exact paths, one line each on what changes
Requirements        — numbered, testable statements
Non-goals           — what must NOT be done or changed
Acceptance criteria — how the human will verify "done"
Output format       — code, docs, summary table, commit — whatever is expected back
```

Sections may be short; they may not be skipped silently. An empty section is written as "None."

## Anti-Patterns

- ❌ "Make it better" — no objective, no criteria.
- ❌ Pasting file contents that the agent can read from the repo — stale copies drift from truth.
- ❌ Ten objectives in one prompt — nothing is verifiable.
- ❌ Secrets, credentials, or work-related private information in any prompt — ever.
- ❌ Prompting an agent to skip the operating rules "just this once."
