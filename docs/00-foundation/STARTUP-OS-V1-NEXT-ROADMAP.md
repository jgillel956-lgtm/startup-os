---
id: DOC-FND-039
title: Startup OS v1 Next Roadmap
status: active
owner: Founder
created: 2026-07-06
updated: 2026-07-06
version: 1.0.0
domain: foundation
tags: [foundation, roadmap, v1]
dependencies: [DOC-FND-029]
related: [DOC-FND-036, DOC-FND-038]
---

# Startup OS v1 Next Roadmap

Recommended next steps, in rough priority order, sequenced from [STARTUP-OS-V1-GAP-ANALYSIS.md](STARTUP-OS-V1-GAP-ANALYSIS.md)'s open items and [STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md](STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md)'s unmet criteria. This document doesn't re-diagnose anything — it turns already-diagnosed gaps into an ordered set of next moves.

## Before Tagging v1

These two are what [STARTUP-OS-V1-RELEASE-CHECKLIST.md](STARTUP-OS-V1-RELEASE-CHECKLIST.md) currently fails on and [STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md](STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md) marks unmet:

1. **Refresh `CONTRIBUTING.md`.** Rewrite its workflow section to describe the actual current process — [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md) and the branch-per-commit policy (ADR-0006) — instead of the generic flow it currently describes from Commit 0001.
2. **A real second-repository adoption attempt.** Even a minimal one. Every claim of reusability so far is internal consistency, not an actual company repository standing up on top of this foundation — this is the single test that can't be manufactured by writing more documentation about it.

## Recommended Alongside, Not Strictly Blocking

3. **Cross-link `.github/` templates to the task workflow.** Add a line to the PR template's AI-usage section referencing `tasks/NEXT.md` when applicable, and point the issue templates at [AI-TASK-HANDOFF-WORKFLOW.md](AI-TASK-HANDOFF-WORKFLOW.md) for AI-originated work.
4. **Make a deliberate `LICENSE` decision.** Adopt one or explicitly record why this repository stays unlicensed for now — undecided is the only unacceptable state.

## Company-Specific Implementation

5. **Start the first real company implementation** in its own repository, following [STARTUP-OS-V1-USAGE-GUIDE.md](STARTUP-OS-V1-USAGE-GUIDE.md) as the entry point. This is the same action as item 2 above, viewed from the adopting company's side rather than Startup OS's own release checklist.
6. **Feed real friction back into the foundation.** Anything the first real implementation finds confusing, missing, or wrong is exactly the kind of finding [KNOWLEDGE-CAPTURE.md](../12-knowledge/KNOWLEDGE-CAPTURE.md) exists to record — don't let a real adoption's lessons evaporate into a chat session.

## Starter App / Tooling

7. **Consider a minimal starter scaffold** (a fresh-repository template pre-loaded with the Foundation domain and `tasks/` folder) once a second real implementation has proven the manual setup path works — building tooling before the manual path is proven risks automating the wrong steps.

## Validation Automation

8. **Automate ID-uniqueness checking** in `scripts/validate-front-matter.js` or a new script — currently a manual sweep, per [VALIDATION-RULES.md](VALIDATION-RULES.md)'s documented gap.
9. **Automate domain-matches-folder checking** — currently manual; a document whose `domain` front matter doesn't match its actual folder is a silent inconsistency an automated check would catch immediately.
10. **Consider anchor-link resolution** in `scripts/validate-links.js` — currently only file-level relative links are checked; anchor links (`#heading-slug`) are not verified against the target document's actual headings, which is why [CROSS-LINKING-STANDARD.md](CROSS-LINKING-STANDARD.md) currently recommends avoiding guessed anchors rather than relying on a check that doesn't exist yet.

## Ongoing, Not a One-Time Task

- **Grow `prompts/`** beyond its three Commit-0002 generic prompts as domain-specific prompt needs become clear (a security review prompt, an investor-update prompt) — optional, not urgent, per [STARTUP-OS-V1-GAP-ANALYSIS.md](STARTUP-OS-V1-GAP-ANALYSIS.md)'s Gap 6.
- **Re-run the readiness review periodically** rather than treating [STARTUP-OS-V1-READINESS-REVIEW.md](STARTUP-OS-V1-READINESS-REVIEW.md) as a one-time audit — a snapshot decays the moment the repository changes again.

## What This Roadmap Deliberately Leaves Out

Speculative future domains, tooling, or integrations not already named in an existing gap or acceptance criterion. Per [AI-OPERATING-RULES.md](../04-ai/AI-OPERATING-RULES.md)'s "do not create broad abstractions before they are needed," this roadmap sequences known, diagnosed work — it does not invent new work to look more ambitious.

## Related Docs

[STARTUP-OS-V1-GAP-ANALYSIS.md](STARTUP-OS-V1-GAP-ANALYSIS.md) · [STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md](STARTUP-OS-V1-ACCEPTANCE-CRITERIA.md) · [STARTUP-OS-V1-RELEASE-CHECKLIST.md](STARTUP-OS-V1-RELEASE-CHECKLIST.md) · [STARTUP-OS-V1-RELEASE-NOTES.md](STARTUP-OS-V1-RELEASE-NOTES.md)
