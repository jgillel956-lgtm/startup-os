# Commit 0027 — Startup OS AI Usage Playbooks

You are working in the Startup OS repository.

## Goal

Create practical AI usage playbooks for Startup OS.

This commit should explain how humans can use AI assistants such as ChatGPT, Claude Code, Cursor, or similar tools to plan, write, review, validate, and improve Startup OS work without losing human control or inventing unsupported facts.

This is not a new operating system domain. It belongs in the existing AI domain.

## Branch

Current branch should be:

`feature/0027-ai-usage-playbooks`

If the current branch is different, stop and flag it.

## Files to inspect first

Inspect:

- `README.md`
- `docs/00-foundation/`
- `docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md`
- `docs/00-foundation/DOCUMENTATION-QUALITY-STANDARD.md`
- `docs/00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md`
- `docs/00-foundation/REPOSITORY-CHANGE-MANAGEMENT.md`
- `docs/04-ai/`
- `docs/10-templates/AI-TASK-HANDOFF-TEMPLATE.md`
- `docs/11-patterns/AI-ASSISTED-WORKFLOW-PATTERNS.md`
- `docs/12-knowledge/AI-READY-KNOWLEDGE.md`
- `tasks/`

Follow active repository standards.

Use the existing AI folder:

`docs/04-ai/`

Use the next available valid AI document IDs from `docs/00-foundation/ID-STANDARD.md`. Do not create ID conflicts.

## Files to create in `docs/04-ai/`

Create these files using valid AI doc IDs:

1. `AI-USAGE-PLAYBOOKS.md`  
   Purpose: introduce the AI usage playbooks and explain when to use each playbook.

2. `CHATGPT-PLANNING-PLAYBOOK.md`  
   Purpose: define how ChatGPT should be used for planning, task design, explanation, PR descriptions, review preparation, and user guidance.

3. `CLAUDE-CODE-EXECUTION-PLAYBOOK.md`  
   Purpose: define how Claude Code should be used for repository execution, task file reading, edits, validation, commits, and summaries.

4. `CURSOR-WORKFLOW-PLAYBOOK.md`  
   Purpose: define how Cursor should be used as the local development environment for reviewing files, running commands, managing branches, and coordinating AI-assisted work.

5. `AI-REVIEW-AND-VALIDATION-PLAYBOOK.md`  
   Purpose: define how AI assistants should review docs, check links, validate metadata, identify unsupported claims, and flag risks before committing.

6. `AI-PROMPTING-AND-TASK-DESIGN-PLAYBOOK.md`  
   Purpose: define how to write good AI task prompts, task files, acceptance criteria, constraints, and summary expectations.

## Files to update

Update these if appropriate:

- `README.md`
- `docs/04-ai/README.md`
- `docs/00-foundation/AI-TASK-HANDOFF-WORKFLOW.md`
- `docs/00-foundation/DOCUMENTATION-NAVIGATION-GUIDE.md`
- `docs/00-foundation/STARTUP-OS-ADOPTION-GUIDE.md`
- `docs/00-foundation/ID-STANDARD.md`
- `tasks/README.md`
- Any relevant index files

Do not force edits into unrelated domain docs.

## Requirements

- Use Markdown.
- Keep everything company-neutral.
- Do not mention AviationHub, BidIgniter, or DisburseCloud.
- Do not create a new top-level docs folder.
- Do not create a new operating system domain.
- Do not claim any AI assistant can approve, merge, or replace human judgment.
- Do not assume only one AI tool will be used forever.
- Mention ChatGPT, Claude Code, and Cursor as current examples, but keep the guidance reusable for other AI assistants and coding agents.
- Include guidance for:
  - planning work
  - creating `tasks/NEXT.md`
  - executing repo changes
  - reviewing AI output
  - validating links and metadata
  - writing PR descriptions
  - handling uncertainty
  - stopping when standards conflict
  - avoiding unsupported claims
- Cross-link to AI task handoff, documentation quality, validation workflow, knowledge, templates, patterns, and archive docs where appropriate.
- Validate links.
- Run repository validation if available.
- Archive this task into `tasks/completed/0027-ai-usage-playbooks.md`.
- Reset `tasks/NEXT.md` back to the reusable template after completion.

## Commit message

Commit exactly:

`Commit 0027 - Startup OS AI Usage Playbooks`

## Commit description

`Add practical AI usage playbooks: how Startup OS uses ChatGPT, Claude Code, Cursor, and other AI assistants for planning, execution, review, validation, task design, and repository-safe workflows.`

## Summary expectations

When done, summarize:

- Files added
- Files updated
- Doc IDs used
- Validation result
- Any deviations or assumptions
