# Pass 174 Browser / Source Findings — Exception State

**Research question:** When a workflow departs from a rule, is the exception documented with scope, reason, owner, expiry, affected gates, and follow-up, or does a temporary deviation silently become the new normal?

**Selected angle:** `exception-state` — Allowed once is not governed.

## NIST Risk Management Framework

NIST describes the Risk Management Framework as a comprehensive, flexible, repeatable, and measurable seven-step process for managing information-security and privacy risk across organizations and systems. The current page notes recent 2025 and 2026 updates to related publications. The pass-174 use is a governance metaphor for recording and revisiting a deviation, not evidence that Stitch & Scale uses the RMF, accepts security risk, or implements exception controls.

Source: [NIST Risk Management Framework](https://csrc.nist.gov/projects/risk-management).

## GOV.UK architecture decisions

The GOV.UK architecture-decision guidance says decisions affecting a service should be recorded in version control to preserve context, including status, context, decision, consequences, who changed what, and when. It describes proposed, accepted, implemented, and superseded lifecycle states and notes that unimplemented or partially implemented decisions should remain subject to review. The pass-174 use is to motivate an explicit exception record with lifecycle and follow-up, not to claim that Stitch & Scale has ADRs, approval workflows, or versioned exception handling.

Source: [GOV.UK — Documenting architecture decisions](https://gds-way.digital.cabinet-office.gov.uk/standards/architecture-decisions.html).

## W3C accessibility guidance

W3C's WCAG quick reference includes text alternatives for non-text content and notes failures where text alternatives are not updated when non-text content changes. This informs the requirement that any exception indicator or state change must remain textually understandable and reviewed in caption-on and caption-free versions. It does not prove WCAG conformance or product accessibility behavior.

Source: [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/).

## Research decision

The research changes the concept from “a deviation was allowed” to “the exception has explicit scope, reason, owner, expiry or review date, affected gates, compensating action, and disposition.” The fictional proof surface is `EXCEPTION E-001 / RULE / SCOPE / REASON / OWNER / STARTED_AT / EXPIRES_OR_REVIEWED_AT / AFFECTED_GATES / COMPENSATING_ACTION / STATUS / DISPOSITION`.

No current product capture or proof-registry record was supplied. No product claim may be made about exception workflows, waivers, risk acceptance, approvals, lifecycle status, or accessibility conformance.
