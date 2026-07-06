---
id: DOC-AI-012
title: AI Prompting and Task Design Playbook
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: ai
tags: [ai, playbook, prompting, task-design]
dependencies: [DOC-AI-005, DOC-AI-007]
related: [DOC-FND-011, DOC-TPL-012, DOC-AI-008]
---

# AI Prompting and Task Design Playbook

Practical, worked-example guidance for writing good AI prompts and task files — specifically `tasks/NEXT.md` entries, the concrete artifact this repository's own workflow runs on. [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md) defines the *rules* every prompt follows (structure, required sections, anti-patterns); this playbook shows what following those rules actually looks like for a real task file, and what happens when they're skipped.

## Start From the Template, Not a Blank Page

Every task file is a filled-in copy of [AI-TASK-HANDOFF-TEMPLATE.md](../10-templates/AI-TASK-HANDOFF-TEMPLATE.md): title, goal, branch, files to inspect first, files to create or update, requirements, non-goals, validation, commit message, summary expectations. Writing a task file from scratch each time, instead of filling this template, is how sections get silently skipped.

## Writing the Goal

A goal states what should be true when the work is done, and why it matters — one or two sentences, not a restatement of the whole task.

- **Weak:** "Improve the operations docs."
- **Strong:** "Narrow `docs/09-operations/`'s stated scope to match what's actually built, so the domain's own description stops overselling itself."

The weak version gives an executing agent no way to know when it's finished; the strong version does.

## Naming Files Exactly

"Files to inspect first" and "files to create or update" always use exact paths, never descriptions the agent has to resolve.

- **Weak:** "Update the folder structure doc."
- **Strong:** `docs/00-foundation/FOLDER-STRUCTURE.md` — narrow the `docs/09-operations/` row's description.

An agent should never have to decide *where* something goes when a folder structure standard already decided it — see [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md), rule 9.

## Writing Requirements

Numbered, testable statements — each one something an agent can either satisfy or not, with no room for a plausible-sounding partial interpretation.

- **Weak:** "Make sure everything is consistent."
- **Strong:**
  ```
  1. Keep everything company-neutral.
  2. Do not create a new top-level docs folder.
  3. Cross-link to the relevant domain README where appropriate.
  4. Validate links and run repository validation.
  ```

## Writing Non-Goals

Non-goals are as binding as requirements — they kill scope creep before it starts. A task with no stated non-goals invites an agent to "helpfully" do more than asked.

- **Example:** "Do not rewrite documents just to rewrite them. Fix clear issues only. Preserve existing document intent."

## Writing Acceptance Criteria / Validation

State exactly how the human will verify "done" — a command to run, a specific check to perform, not "make sure it works."

- **Weak:** "Test it."
- **Strong:** "Run `npm run validate` and confirm 0 failures. Confirm the document stays company-neutral — no real company names introduced anywhere outside a rule that explicitly names one as excluded."

## Writing the Commit Message

Give the exact literal text, not a description of what the commit message should convey — per [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md), this is not a section to paraphrase from. If the task file says "commit exactly: `Commit 0027 - Startup OS AI Usage Playbooks`," that string is what goes in the commit, verbatim.

## Writing Summary Expectations

Name the specific things the final report must cover — typically files added, files updated, doc IDs used, validation result, and any deviations or assumptions. A task file with no stated summary expectations gets back whatever the executing agent felt like reporting, which varies commit to commit.

## Self-Check Before Handing Off

Before telling an executing agent to read `tasks/NEXT.md`, confirm:

- [ ] No section is empty without an explicit "None."
- [ ] Every file path is exact, not descriptive.
- [ ] The commit message is the literal text to use, not a description of one.
- [ ] No secrets, credentials, or work-specific private information appear anywhere in the file, per [PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md).
- [ ] The task is one reviewable unit of work — not several unrelated tasks bundled together, per [tasks/README.md](../../tasks/README.md).

## Related Docs

[PROMPTING-STANDARDS.md](PROMPTING-STANDARDS.md) · [AI-TASK-HANDOFF-TEMPLATE.md](../10-templates/AI-TASK-HANDOFF-TEMPLATE.md) · [AI-TASK-HANDOFF-WORKFLOW.md](../00-foundation/AI-TASK-HANDOFF-WORKFLOW.md) · [CHATGPT-PLANNING-PLAYBOOK.md](CHATGPT-PLANNING-PLAYBOOK.md)
