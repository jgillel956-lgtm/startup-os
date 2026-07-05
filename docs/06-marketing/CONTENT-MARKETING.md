---
id: DOC-MKT-007
title: Content Marketing
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: marketing
tags: [marketing, content, standard]
dependencies: [DOC-MKT-003]
related: [DOC-MKT-009, DOC-MKT-011, DOC-OPS-009]
---

# Content Marketing

Defines how blogs, guides, thought leadership, case studies, white papers, comparison pages, FAQs, and other educational content are planned, written, reviewed, and maintained. No specific content platform or CMS is assumed.

## Content Types and Purpose

| Type | Purpose |
|------|---------|
| Blog post | Timely perspective, SEO reach, or awareness-stage education |
| Guide | Deeper, evergreen education on a topic the ICP cares about |
| Thought leadership | Establish credibility/point of view on the category |
| Case study | Proof, via a real customer outcome |
| White paper | Depth for a technical or high-consideration audience |
| Comparison page | Help a prospect evaluating alternatives (see [COMPETITIVE-MARKETING.md](COMPETITIVE-MARKETING.md)) |
| FAQ | Answer real, recurring questions concisely |

Every piece has a stated type and purpose before writing starts — content written without a clear purpose tends to serve no one well.

## Planning

Content is planned against the messaging hierarchy ([POSITIONING-AND-MESSAGING.md](POSITIONING-AND-MESSAGING.md)) and real audience questions — drawn from actual prospect/customer language in support themes ([CUSTOMER-FEEDBACK-LOOP.md](../09-operations/CUSTOMER-FEEDBACK-LOOP.md)) and sales conversations (once [MARKETING-TO-SALES-HANDOFF.md](MARKETING-TO-SALES-HANDOFF.md)'s feedback channel exists), not guessed from what seems interesting to write.

## Writing

- Lead with the reader's problem or question, not the company's news.
- Follow [BRAND-AND-VOICE.md](BRAND-AND-VOICE.md) for tone and terminology.
- Technical or product claims are accurate to current capabilities — content is not exempt from [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md) just because it's "just a blog post."

## Review

Every piece gets at least one review pass before publishing: accuracy of any product/technical claim, brand voice consistency, and — for anything citing a customer — confirmed permission (see [MARKETING-REVIEW-AND-APPROVAL.md](MARKETING-REVIEW-AND-APPROVAL.md)).

## Maintenance

- Evergreen content (guides, comparison pages, FAQs) is checked periodically against current product reality — an outdated guide actively misleads readers, unlike a dated blog post which reads as historical.
- Content referencing a capability that's since changed or been deprecated ([PRODUCT-LIFECYCLE.md](../02-product/PRODUCT-LIFECYCLE.md)) is updated or retired, not left live and wrong.

## Content Reuse and Repurposing

Prefer extending or updating existing content over creating a near-duplicate — the same discipline [DESIGN-SYSTEM.md](../05-design/DESIGN-SYSTEM.md) applies to components, applied to content: check for an existing asset before writing a new one that covers the same ground.

## Required Artifacts

A content brief (type, purpose, target ICP, key message it supports) before writing; a review record before publishing; for evergreen content, a periodic re-check note.

## Ownership

Marketing plans, writes, and maintains content; subject-matter input (product, engineering, support) is sourced for anything technical rather than guessed.

## Anti-Patterns

- **Content without a home in the message hierarchy.** Publishing whatever's easy to write instead of what supports the actual positioning.
- **Publish and abandon.** Evergreen content that goes stale because nobody owns revisiting it.
- **Unverified technical claims.** Stating a security or performance fact in a guide that engineering never confirmed.
