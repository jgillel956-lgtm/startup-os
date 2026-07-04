---
id: DOC-AI-006
title: AI Code Review Checklist
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.0
domain: ai
tags: [ai, review, checklist, quality, standard]
dependencies: [DOC-AI-002]
related: [DOC-AI-003, DOC-AI-004]
---

# AI Code Review Checklist

Checklist for reviewing AI-generated code before merge. Used by humans reviewing locally and by reviewer agents (Codex, ChatGPT). Not every item applies to every change — skip consciously, never silently.

## Requirements Alignment

- [ ] Every change traces to a committed spec (capability / PRD / API / DB ID named in the PR).
- [ ] No behavior exists that the spec does not require — invented requirements are defects even when useful.
- [ ] All acceptance criteria of the governing spec are met or explicitly deferred.
- [ ] Non-goals of the spec were respected.

## Architecture

- [ ] Change fits the documented architecture; deviations have an ADR.
- [ ] No new abstraction without a second real use case.
- [ ] Boundaries respected — no reaching across modules/domains that the design keeps separate.
- [ ] Dependencies added are justified and documented.

## Security

- [ ] All external input validated; no injection paths (SQL, command, template, path).
- [ ] AuthN/authZ enforced on every new surface; no privilege escalation via missing checks.
- [ ] No secrets, tokens, or credentials in code, config, tests, or fixtures.
- [ ] Sensitive data is never logged.
- [ ] Cryptography (if any) uses standard libraries, not custom constructions.

## Database

- [ ] Every table/column change exists in a `DB-<NNN>` spec first.
- [ ] Migrations are forward-safe and have a documented rollback.
- [ ] Backfills are idempotent and batched.
- [ ] Indexes exist for the documented access patterns; no speculative indexes.
- [ ] Constraints enforce integrity at the database, not only in application code.

## API

- [ ] Every endpoint change exists in an `API-<NNN>` spec first.
- [ ] Naming, versioning, pagination, and error shape follow the spec's conventions.
- [ ] Mutating operations are idempotent or explicitly documented as not.
- [ ] Error responses use the standard error object; no leaked internals in messages.
- [ ] Breaking changes are versioned, not slipped into existing contracts.

## Frontend / UI

- [ ] Matches the documented flow, including empty, loading, error, and permission-denied states.
- [ ] Accessible: keyboard navigation, labels, contrast — no mouse-only paths.
- [ ] No business logic living only in the UI layer.
- [ ] User input validated client-side for UX and server-side for truth.

## Testing

- [ ] Tests exist for every acceptance criterion.
- [ ] Edge cases tested: empty, null, boundary, concurrent, failure.
- [ ] Tests assert behavior, not implementation details.
- [ ] No tests were disabled, skipped, or weakened to make the change pass.
- [ ] Failure paths (not just happy paths) covered.

## Documentation

- [ ] Affected documents updated in the same change set (`updated`, `version` bumped).
- [ ] Front matter valid per the metadata standard.
- [ ] New decisions recorded as ADRs; superseded docs archived, not deleted.
- [ ] Code comments explain constraints ("why"), not narration ("what").

## Maintainability

- [ ] A reader unfamiliar with the chat session can understand the change from repo + PR alone.
- [ ] Naming follows repository standards; no new conventions introduced.
- [ ] No dead code, commented-out blocks, or leftover scaffolding.
- [ ] Duplication removed or justified.

## Performance

- [ ] No N+1 query patterns or unbounded loops over external data.
- [ ] Pagination/limits on anything that can grow.
- [ ] Hot paths identified in the spec meet their documented targets.
- [ ] No premature optimization that obscures the code without a measured need.

## Error Handling

- [ ] All failure modes handled deliberately — no swallowed exceptions, no bare catches.
- [ ] Errors surfaced with enough context to diagnose, without leaking sensitive data.
- [ ] Retries (if any) are bounded and safe to repeat; no retry on non-idempotent operations.
- [ ] Partial-failure states leave the system consistent.

## Observability

- [ ] Meaningful operations are logged at appropriate levels; noise is not.
- [ ] Logs are structured and correlation-friendly (request/entity IDs where applicable).
- [ ] Failures are detectable without reading source code.
- [ ] No sensitive values in logs, metrics, or traces.

## Privacy & Data Separation

- [ ] No personal data collected beyond what the spec requires.
- [ ] No work-related information anywhere in a personal repository — code, comments, fixtures, commit messages.
- [ ] Company-specific content stays in the company repository; Startup OS remains neutral.
- [ ] Test data is synthetic — never real users, real credentials, real records.
