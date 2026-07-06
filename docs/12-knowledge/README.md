---
id: DOC-KNW-001
title: Knowledge Library — Overview
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: knowledge
tags: [knowledge, overview, library]
dependencies: [DOC-KNW-002]
related: [DOC-PAT-001, DOC-TPL-001]
---

# Knowledge Library — Overview

`docs/12-knowledge/` holds **knowledge records** — research findings, learnings, and external knowledge that inform decisions but aren't themselves operating rules, fillable artifacts, or reusable approaches. This library does not duplicate the operating-system docs; it explains how knowledge is captured, structured, validated, retrieved, maintained, and archived across every domain.

## Where Knowledge Fits Among Startup OS's Document Kinds

Startup OS now has eight distinct kinds of document. Confusing them is the most common way a repository degrades into noise:

| Kind | What it is | Compliance | Lives in |
|------|-----------|------------|----------|
| **Operating system doc** | A binding standard defining required behavior or structure | Must follow | Each domain's own folder |
| **Template** | A fillable, copy-and-paste artifact instance | Copy it, fill every section | `docs/10-templates/` |
| **Pattern** | A reusable approach to a recurring problem | Adapt — take what fits | `docs/11-patterns/` |
| **Knowledge record** | A finding, learning, or piece of external knowledge that informs a decision | Reference, don't treat as binding | `docs/12-knowledge/` |
| **Decision record (ADR)** | A specific choice made, with context and consequences | Follow until superseded by a new decision | `DECISIONS.md`, domain ADR logs |
| **Runbook** | A step-by-step procedure for a recurring operational task | Follow the steps as written | Each domain's own folder (e.g. [OPERATIONAL-RUNBOOKS.md](../09-operations/OPERATIONAL-RUNBOOKS.md)) |
| **Example** | A worked illustration inside another document | Illustrative, not standalone authority | Embedded in the document it illustrates |
| **Archived material** | Anything superseded, kept for history | Historical reference only, never current guidance | `docs/99-archive/` |

A knowledge record is the least binding of these — it's evidence and learning, not a rule. It becomes a rule only when a domain owner turns it into a standard, or a decision only when someone actually decides something based on it (see [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md) for how a knowledge record can graduate into a decision).

## Documents

| Document | Defines |
|----------|---------|
| [KNOWLEDGE-OPERATING-SYSTEM.md](KNOWLEDGE-OPERATING-SYSTEM.md) | Overall model, ownership, principles |
| [KNOWLEDGE-CAPTURE.md](KNOWLEDGE-CAPTURE.md) | How a finding becomes a recorded knowledge item |
| [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md) | How knowledge records are organized and typed |
| [KNOWLEDGE-VALIDATION.md](KNOWLEDGE-VALIDATION.md) | How a claim is checked before being trusted |
| [KNOWLEDGE-OWNERSHIP.md](KNOWLEDGE-OWNERSHIP.md) | Who's accountable for a record staying accurate |
| [KNOWLEDGE-RETRIEVAL.md](KNOWLEDGE-RETRIEVAL.md) | How a record gets found again when needed |
| [KNOWLEDGE-MAINTENANCE.md](KNOWLEDGE-MAINTENANCE.md) | How records are kept current |
| [KNOWLEDGE-ARCHIVING.md](KNOWLEDGE-ARCHIVING.md) | When and how a record is retired |
| [AI-READY-KNOWLEDGE.md](AI-READY-KNOWLEDGE.md) | How AI assistants should use repository knowledge |
| [KNOWLEDGE-QUALITY-CONTROL.md](KNOWLEDGE-QUALITY-CONTROL.md) | What makes a knowledge record trustworthy |
| [KNOWLEDGE-METRICS.md](KNOWLEDGE-METRICS.md) | Measuring whether the knowledge system is working |

## How This Connects to Everything Else

Every domain produces knowledge worth keeping — research findings ([UX-RESEARCH.md](../05-design/UX-RESEARCH.md)), win/loss learnings ([COMPETITIVE-SALES.md](../07-sales/COMPETITIVE-SALES.md)), churn causes ([CHURN-AND-SAVE-PLAYS.md](../13-customer-success/CHURN-AND-SAVE-PLAYS.md)), incident learnings ([OBSERVABILITY-AND-INCIDENTS.md](../03-engineering/OBSERVABILITY-AND-INCIDENTS.md)). This library doesn't replace where those findings are first recorded — it's where knowledge that doesn't have an obvious single-domain home, or that's been synthesized across domains, gets kept so it isn't lost.

## Using This Library

Read [KNOWLEDGE-STRUCTURE.md](KNOWLEDGE-STRUCTURE.md) before adding a new record, to place it correctly and avoid duplicating something already captured elsewhere.
