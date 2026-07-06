---
id: DOC-ENG-006
title: Repository Standards
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.1.0
domain: engineering
tags: [engineering, repository, standard, secrets]
dependencies: [DOC-ENG-002]
related: [DOC-FND-002, DOC-FND-003, DOC-ENG-007, DOC-SEC-004, DOC-SEC-005]
---

# Repository Standards

Defines standards for how an implementation repository (a company's actual codebase, distinct from Startup OS itself) is structured, named, documented, configured, and kept maintainable. These are framework-level defaults — a specific repository's own `docs/00-foundation/` may add detail, but should not contradict these without an ADR.

## Structure

- A repository has a single clear purpose; a monolith that has outgrown "single purpose" gets an ADR before splitting, not after.
- Application code, tests, scripts, and documentation each live in their own top-level area — no scattering source and docs together ad hoc (same principle as [FOLDER-STRUCTURE.md](../00-foundation/FOLDER-STRUCTURE.md), applied to code).
- A repository adopting Startup OS keeps its own `docs/` tree following this framework's domain structure, scoped to that company's actual product.

## Naming

- Follow the language/framework's own idiomatic convention consistently (e.g. one casing style per language) — see [NAMING-STANDARDS.md](../00-foundation/NAMING-STANDARDS.md) for the documentation-side rules this mirrors.
- Never mix naming conventions within the same codebase without a stated, documented reason.

## Documentation

- Every repository has a root `README.md` covering: what it is, how to run it locally, how to test it, and where its deeper documentation lives.
- Documentation-before-development (ADR-0005) applies to implementation repositories too — a repository's own product/engineering docs, not just Startup OS's, govern what gets built there.

## Configuration

- Configuration is environment-specific and never hardcoded into application logic.
- Default configuration ships safe — a missing config value fails closed, not open.
- Configuration schemas are documented (what exists, what it does, what happens if it's absent).

## Secrets

- **Never committed.** Not in code, not in config files, not in test fixtures, not in commit messages.
- Local secrets live in an ignored file (e.g. `.env`, excluded via `.gitignore`); a `.env.example` (no real values) documents what's expected.
- A secret that lands in history is rotated immediately, not just removed going forward.
- This applies with extra force to any repository touching payments, personal data, or financial accounts — leaking those secrets isn't just a security bug, it's a compliance incident (see [DATA-PROTECTION.md](../14-security-compliance/DATA-PROTECTION.md), [ACCESS-CONTROL.md](../14-security-compliance/ACCESS-CONTROL.md)).

## Local Setup

- A new contributor (human or AI agent) should be able to get the repository running locally from the README alone, without asking someone.
- Setup steps are tested — a README that hasn't been followed from scratch recently silently rots.

## Maintainability

- Dependencies are kept current deliberately, not indefinitely deferred; an outdated dependency with a known vulnerability is technical debt with a security dimension (see [TECHNICAL-DEBT.md](TECHNICAL-DEBT.md)).
- Dead code is removed, not commented out "just in case" — Git history is the "just in case."
- No repository-specific tech stack is mandated by Startup OS; whatever stack is chosen, these standards apply to it.

## Ownership

Repository standards are the engineering owner's responsibility to enforce; deviations for a specific repository are documented in that repository's own foundation docs, not silently tolerated.
