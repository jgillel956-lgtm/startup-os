---
id: DOC-PRD-006
title: User Story Standard
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: product
tags: [product, user-story, standard]
dependencies: [DOC-PRD-005]
related: [DOC-PRD-007, TPL-US-001]
---

# User Story Standard

Defines how user stories are written in Startup OS. The copyable template is [USER-STORY-TEMPLATE.md](../10-templates/USER-STORY-TEMPLATE.md); this document is the standard that template implements.

## User Story Format

Every story uses this exact form:

```
As a [actor],
I want to [action],
so that [outcome].
```

## Actor

The specific type of user or system performing the action — never "the user" alone when more than one actor type exists. "As a first-time customer," not "as a user," when the distinction matters to the behavior.

## Goal

The action the actor wants to take — stated as a capability, not an implementation ("save a payment method," not "click the save button").

## Reason

The outcome the actor is actually after. A story whose "so that" just restates the action ("so that it is saved") hasn't identified the real reason — dig one level deeper.

## Acceptance Criteria

Every story carries acceptance criteria per [ACCEPTANCE-CRITERIA-STANDARD.md](ACCEPTANCE-CRITERIA-STANDARD.md). A story without acceptance criteria is not ready to implement — flag it, don't build it.

## Negative Cases

State what happens when the actor *can't* achieve the goal: invalid input, missing permission, unavailable dependency. A story that only describes the happy path is half-specified.

## Edge Cases

Boundary conditions: empty lists, maximum lengths, concurrent edits, duplicate submissions. Named explicitly, not left to be discovered during testing.

## Permission Considerations

State who is allowed to perform this action and who is not. If the capability has a `PERMISSIONS.md` (see [CAPABILITY-MODEL.md](CAPABILITY-MODEL.md)), the story references it rather than restating the whole permission model.

## Data Considerations

What data is read, written, or exposed by this story, and any sensitivity constraints (never log X, never expose Y to this actor). This is where privacy/data-separation requirements from [AI-CODE-REVIEW-CHECKLIST.md](../04-ai/AI-CODE-REVIEW-CHECKLIST.md) originate.

## Notification Considerations

Whether this story triggers a notification (email, SMS, in-app), to whom, and under what condition — or explicitly "none."

## AI Considerations

Whether any part of this story involves AI-driven behavior (generation, classification, recommendation) and, if so, what the AI must not do (e.g. must not fabricate data, must not act without the stated permission check). "None" is a valid, explicit answer.

## Traceability to Capabilities and PRDs

Every story's front matter `dependencies` names the PRD it belongs to; the PRD's front matter or body names the capability it delivers. A story with no traceable parent capability is either misfiled or the capability doesn't exist yet — resolve which before implementing.
