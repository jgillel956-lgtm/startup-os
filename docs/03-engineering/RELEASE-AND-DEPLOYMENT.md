---
id: DOC-ENG-009
title: Release and Deployment
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: engineering
tags: [engineering, release, deployment, standard]
dependencies: [DOC-ENG-003, DOC-ENG-008]
related: [DOC-ENG-010, DOC-ENG-006, DOC-SEC-007]
---

# Release and Deployment

Defines how releases are planned, validated, deployed, rolled back, and communicated. Does not mandate a specific deployment platform or pipeline tool — the discipline applies regardless of what executes it.

## Planning a Release

- A release bundles work that's ready together — it does not wait on unrelated in-progress work "to save a deploy."
- Higher-risk changes (data migrations, payment logic, anything touching money or personal data) are called out explicitly in the release plan, not bundled invisibly with routine changes — and checked against [SECURITY-REVIEWS.md](../14-security-compliance/SECURITY-REVIEWS.md)'s triggers before release.

## Validation Before Release

- All quality gates in [TESTING-AND-QUALITY.md](TESTING-AND-QUALITY.md) have passed.
- Configuration for the target environment has been checked, not assumed (see [REPOSITORY-STANDARDS.md](REPOSITORY-STANDARDS.md) on configuration/secrets).
- For anything non-trivial: a named rollback plan exists *before* deployment, not improvised after something breaks.

## Deployment

- Deploys are repeatable — the same artifact, deployed the same way, produces the same result. A deploy that depends on manual, undocumented steps is a deploy the team can't trust under pressure.
- Deploys to production require explicit authorization from whoever holds deployment authority for that environment (see [ENGINEERING-OPERATING-SYSTEM.md](ENGINEERING-OPERATING-SYSTEM.md) responsibilities) — AI agents do not self-authorize production deploys.
- Staged rollout (a subset of traffic/users first) is preferred over all-at-once for anything carrying meaningful risk, when the platform supports it.

## Rollback

- Every release has a stated way back to the previous known-good state — "we'll figure it out if it breaks" is not a rollback plan.
- Rollback is tested at least once for any deployment mechanism before it's trusted for production-risk releases — an untested rollback path is a rollback plan in name only.
- Data migrations get special scrutiny: a schema change that isn't backward-compatible needs a rollback plan for the *data*, not just the code.

## Communication

- What's being released, and any risk it carries, is stated somewhere findable — the PR, a release note, or both — before or at the moment of deployment, not after something goes wrong.
- If a release could affect users' experience (downtime, behavior change), that's communicated to whoever owns customer communication, ahead of the release when feasible.

## Post-Deployment

- A release isn't "done" at deploy — it's done once [OBSERVABILITY-AND-INCIDENTS.md](OBSERVABILITY-AND-INCIDENTS.md)'s monitoring confirms it's healthy in production. Watch the specific things this release could plausibly break, not just general dashboards.

## AI Agents and Releases

AI agents may prepare a release (build the artifact, draft the release notes, run pre-deploy checks) but a human approves and triggers production deployment unless the founder has explicitly delegated that authority in writing.
