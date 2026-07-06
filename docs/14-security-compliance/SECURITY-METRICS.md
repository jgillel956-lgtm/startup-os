---
id: DOC-SEC-012
title: Security Metrics
status: active
owner: Founder
created: 2026-07-05
updated: 2026-07-05
version: 1.0.0
domain: security-compliance
tags: [security, metrics, standard]
dependencies: [DOC-SEC-002]
related: [DOC-SEC-005, DOC-SEC-011, DOC-ENG-012]
---

# Security Metrics

Defines practical security and compliance metrics. Like the metrics standards elsewhere in Startup OS, these measure the system's health — not individual blame; using them to punish rather than improve invites hiding problems instead of surfacing them. No specific security or compliance platform is assumed.

## Access Review Completion

Whether scheduled [access reviews](ACCESS-CONTROL.md) actually happened, on time, for every system in scope. A skipped review is itself a finding worth tracking, not just an administrative miss.

## Vulnerability Aging

How long a known vulnerability (in a dependency, a configuration, a finding from any review) sits unaddressed, by severity. Aging vulnerabilities, especially high-severity ones, are the most direct predictor of a preventable incident — tracked and escalated the same way [TECHNICAL-DEBT.md](../03-engineering/TECHNICAL-DEBT.md) escalates growing-cost debt.

## Incident Volume

Count and severity of security incidents ([SECURITY-INCIDENT-RESPONSE.md](SECURITY-INCIDENT-RESPONSE.md)) over time — read for trend and root-cause pattern, not just a raw count.

## Audit Readiness

Whether the [compliance obligations register](COMPLIANCE-OBLIGATIONS.md) is current and each obligation's control can actually be demonstrated — a practical proxy for "if asked today, could we show this is true."

## Vendor Review Status

Percentage of vendors with material access ([VENDOR-AND-THIRD-PARTY-RISK.md](VENDOR-AND-THIRD-PARTY-RISK.md)) reassessed on schedule — a lapsed vendor review is exposure nobody's currently watching.

## Policy Exceptions

Count and age of open access or policy exceptions ([ACCESS-CONTROL.md](ACCESS-CONTROL.md)) — a "temporary" exception with no end date, still open months later, is a policy gap wearing an exception's label.

## Training Completion

Where the company runs security awareness training (e.g. on phishing, data handling), completion rate — a low-effort, high-value signal for an early-stage team, since most incidents at small scale trace to human error rather than sophisticated attack.

## Risk Trends

Not a single number — a periodically reviewed view of open risks (unpatched vulnerabilities, open exceptions, unreviewed vendors, aging findings) and whether that set is growing or shrinking over time.

## Using These Metrics

- Review on a regular rhythm, the same discipline as every other metrics standard in Startup OS.
- React to trends, not single data points — one aging vulnerability might be a scheduling gap; a consistently growing aging-vulnerability count is a process failure.
- Feed findings into [SECURITY-REVIEWS.md](SECURITY-REVIEWS.md) prioritization and, where a systemic gap is found, into leadership's risk-acceptance decisions ([SECURITY-COMPLIANCE-OPERATING-SYSTEM.md](SECURITY-COMPLIANCE-OPERATING-SYSTEM.md)).

## Right-Sizing for Team Size

At very small scale, most of this is tracked informally — a short list of known risks and open items, checked periodically. The metrics don't change as the company grows, only the rigor and tooling used to track them.
