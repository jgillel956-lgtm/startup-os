# Commit 0022 — Documentation Validation Automation Foundation

You are working in the Startup OS repository.

## Goal

Create a lightweight documentation validation automation foundation for Startup OS.

This commit should help humans and AI assistants validate repository documentation before commits and pull requests.

It should build on the documentation quality standards from Commit 0021 and make validation more repeatable.

## Branch

Current branch should be:

`feature/0022-documentation-validation-automation`

If the current branch is different, stop and flag it.

## Files to inspect first

Inspect:

- `README.md`
- `docs/00-foundation/`
- `docs/00-foundation/DOCUMENTATION-QUALITY-STANDARD.md`
- `docs/00-foundation/DOCUMENTATION-VALIDATION-CHECKLIST.md`
- `docs/00-foundation/CROSS-LINKING-STANDARD.md`
- `docs/00-foundation/DOCUMENTATION-REVIEW-GATES.md`
- `docs/00-foundation/FOLDER-STRUCTURE.md`
- `docs/00-foundation/ID-STANDARD.md`
- `docs/00-foundation/METADATA-STANDARD.md`
- `tasks/`
- Any existing validation scripts, package files, CI files, or tooling folders

Follow active repository standards.

Use Foundation document IDs. Inspect `docs/00-foundation/ID-STANDARD.md` first and use the next available valid Foundation IDs. Do not create ID conflicts.

## Files to create or update

Create or update these if appropriate:

1. `docs/00-foundation/DOCUMENTATION-VALIDATION-WORKFLOW.md`
   Purpose: define how documentation validation should be run before commits and PRs.

2. `docs/00-foundation/VALIDATION-RULES.md`
   Purpose: define the practical validation rules for document IDs, metadata, folder placement, links, archived material, task files, and unsupported claims.

3. `docs/00-foundation/VALIDATION-FAILURE-HANDLING.md`
   Purpose: define what to do when validation fails, including when to fix, when to escalate, when to flag assumptions, and when to stop.

If the repository already has a validation script, update documentation to reference it.

If the repository has an obvious existing scripts or tools folder, add a lightweight validation entry point there only if it fits the active standards.

If no scripts/tools location exists, do not invent a complex automation system. Prefer documentation and a simple repeatable manual workflow.

## Requirements

- Use Markdown for documentation.
- Keep everything company-neutral.
- Do not mention AviationHub, BidIgniter, or DisburseCloud.
- Do not create a new operating system domain.
- Do not create a complex toolchain.
- Do not add external dependencies unless the repo already uses them.
- Do not assume GitHub Actions, npm, Python, PowerShell, or any specific runtime unless already present in the repo.
- Cross-link to documentation quality, metadata, ID, folder structure, cross-linking, archive, knowledge, and AI task handoff docs.
- Include guidance for AI assistants:
  - validate before committing
  - do not invent missing IDs or folders
  - stop when standards conflict
  - flag deviations clearly
  - prefer active docs over archived docs
- Update `README.md` and foundation indexes if appropriate.
- Validate links.
- Run repository validation if available.
- Archive this task into `tasks/completed/0022-documentation-validation-automation.md`.
- Reset `tasks/NEXT.md` back to the reusable template after completion.

## Commit message

Commit exactly:

`Commit 0022 - Documentation Validation Automation Foundation`

## Commit description

`Add the documentation validation automation foundation: how Startup OS validates document IDs, metadata, folder placement, links, archived material, unsupported claims, task files, and AI-generated documentation changes before commits and pull requests.`

## Summary expectations

When done, summarize:

- Files added
- Files updated
- Doc IDs used
- Validation result
- Any deviations or assumptions
