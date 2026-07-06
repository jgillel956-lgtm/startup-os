---
id: DOC-TPL-010
title: Incident Review Template
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: templates
tags: [template, incident, postmortem]
dependencies: [DOC-TPL-002]
related: [DOC-ENG-010, DOC-SEC-011]
---

# Incident Review Template

## Purpose

The fillable postmortem record required by [OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md) (every SEV1/SEV2) and [SECURITY-INCIDENT-RESPONSE.md](../14-security-compliance/SECURITY-INCIDENT-RESPONSE.md) (every security incident) — blameless, with a concrete follow-up.

## When to Use

After any SEV1/SEV2 operational incident or any security incident, regardless of eventual severity.

## Owner

Whoever coordinated the incident response; reviewed by the engineering or security owner.

## Inputs

The incident timeline as it happened; whatever containment/communication actions were taken.

## Template Section

```markdown
# Incident Review: <Short Title>

- **Date:** <Date>
- **Severity:** <SEV1/SEV2/SEV3 or Security>
- **Coordinator:** <Owner>

## What Happened
<Factual timeline — what was observed, when, and what was done in response.>

## Impact
<Who/what was affected, how many, for how long.>

## Root Cause
<The actual systemic cause — not "human error" alone; what gap let it happen.>

## What Went Well
<...>

## What Didn't Go Well
<...>

## Follow-Up Actions
| Action | Owner | Due Date |
|--------|-------|----------|
| <specific action> | <Owner> | <Date> |

## Customer Communication (if applicable)
<What was said, when, per INCIDENT-COMMUNICATION.md.>
```

## Review Checklist

- [ ] Root cause names a systemic gap, not just "someone made a mistake."
- [ ] At least one concrete follow-up action, with owner and date — not "be more careful."
- [ ] Customer communication section filled in if customers were affected.
- [ ] Review is blameless in tone.
- [ ] No placeholder text remains.

## Related Docs

[OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md) · [SECURITY-INCIDENT-RESPONSE.md](../14-security-compliance/SECURITY-INCIDENT-RESPONSE.md) · [INCIDENT-COMMUNICATION.md](../09-operations/INCIDENT-COMMUNICATION.md)
