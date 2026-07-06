---
id: DOC-ARCH-008
title: Retention and Review
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: archive
tags: [archive, retention, review, standard]
dependencies: [DOC-ARCH-002]
related: [DOC-SEC-004, DOC-PAT-003]
---

# Retention and Review

## Purpose

Defines how long archived material is kept and how the archive itself is periodically reviewed — distinct from reviewing an individual archived document's content, which doesn't change once it's archived.

## When to Use

On a recurring cadence for the archive as a whole; immediately when a legal, contractual, or compliance retention obligation applies to specific material.

## Owner

The archive owner; for anything with a retention obligation, coordinated with whoever owns [COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md).

## Inputs

The current state of the archive; any retention obligations that apply to specific categories of material.

## Outputs

Confirmation the archive remains organized and findable; for regulated material, confirmation retention periods are actually being honored.

## Required Artifacts

A periodic archive review record; for material under a retention obligation, the specific obligation it's tied to.

## Retention Defaults

Startup OS's default is indefinite retention — nothing is deleted (per [Constitution Article VII](../../CONSTITUTION.md)). Where a specific legal, contractual, or regulatory obligation requires a defined retention period or eventual deletion, that obligation is documented and followed per [COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md) — this document does not itself create a retention-period policy; it points to where one would be defined if the company needs one.

## Review Points

- Is the archive as a whole still organized and browsable, or has it degraded into disorder?
- Does any archived material carry a real retention obligation that's being tracked?
- Is the review happening on the stated cadence, or skipped because the archive "doesn't need attention"?

## Examples

- A periodic archive review confirming filenames, IDs, and successor links are all still intact and correct.
- Material subject to a specific regulatory retention requirement, tracked against [COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md) rather than assumed to follow Startup OS's indefinite-retention default.

## Anti-Patterns

- **Assuming retention obligations don't apply.** Treating "we never delete" as sufficient without checking whether specific material actually carries a legal retention or deletion requirement.
- **No periodic review.** The archive reviewed only once, at setup, and never again as it grows.
- **Retention policy invented here.** Defining a specific legal retention period in this document instead of deferring to [COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md) and qualified advice.

## Related Docs

[COMPLIANCE-OBLIGATIONS.md](../14-security-compliance/COMPLIANCE-OBLIGATIONS.md) · [OPERATING-CADENCE-PATTERNS.md](../11-patterns/OPERATING-CADENCE-PATTERNS.md)
