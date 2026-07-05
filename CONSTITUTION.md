---
id: DOC-ROOT-003
title: Startup OS Constitution
status: active
owner: Founder
created: 2026-07-04
updated: 2026-07-04
version: 1.0.1
domain: root
tags: [constitution, principles, governance]
dependencies: []
related: [DOC-ROOT-001, DOC-ROOT-002, DOC-ROOT-004]
---

# Startup OS Constitution

Core principles that govern everything built with Startup OS. These change rarely and only through a recorded decision (ADR). Everything else in this repository derives from them.

## Article I — Documentation Before Development

No code is written until the governing documentation exists. Requirements, designs, and decisions are documented first; implementation follows. When behavior changes, documentation changes with it, in the same change set.

## Article II — Single Source of Truth

Git is the source of truth. Markdown is the source format. If knowledge lives only in a chat thread, an inbox, or a person's head, it does not exist. Anything worth keeping is committed.

## Article III — AI Agents Are First-Class Participants

Documents are written to be read by both humans and machines. Every document carries structured metadata. Standards are explicit so agents do not have to guess. An AI agent following the documentation should reach the same conclusion a well-informed human would.

## Article IV — Company Neutrality

Startup OS assumes no specific company, product, or customer. Company-specific content lives in company repositories. The framework must remain reusable for the next company without modification.

## Article V — Separation of Personal and Work

Personal projects and work projects never share a repository, a document, or a reference. Work-related material is excluded from Startup OS and all personal implementations, without exception.

## Article VI — Decisions Are Recorded

Significant decisions are captured as Architecture Decision Records with context, options, and consequences. A decision that is not recorded can be relitigated forever; a recorded one can be revisited deliberately.

## Article VII — Nothing Is Deleted, Things Are Archived

Superseded documents move to `docs/99-archive/` with status `archived`. History stays legible.

## Article VIII — Standards Over Heroics

Consistent structure, naming, metadata, and workflow beat individual cleverness. When a standard is wrong, change the standard (via ADR) — do not silently deviate from it.

## Amendments

Amendments to this constitution require an ADR in `DECISIONS.md` explaining the change and its consequences.
