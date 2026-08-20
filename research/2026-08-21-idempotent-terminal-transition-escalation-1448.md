# Director Research — Idempotent Terminal Transitions and Escalation

- **Research ID:** `RESEARCH-20260821-idempotent-terminal-transition-escalation-1448`
- **Run role:** Temporary Director/Planner
- **Firing:** 203
- **Run time:** 2026-08-21T14:48:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring multi-agent workflow remain safe when execution can repeat, while ensuring that a terminal review decision is applied once, auditable, and escalated if the waiting state exceeds its operational bound?

## Current repository observation

The authoritative Director playbook and `references/publication-control.md` were inspected. `origin/main` was fetched and checked; the local checkout was synchronized before Generator-relevant publication. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

AWS documents that workflows may operate under at-least-once execution semantics, meaning a step can run more than once. AWS recommends idempotent handling for non-idempotent actions and explicit timeouts and heartbeats for waiting tasks so a workflow does not remain stuck indefinitely. Applied to this lane, repeated Director firings must be safe to replay: they may append a new research record and one current blocker, but must not create duplicate Generator contracts or re-apply a terminal state. A terminal Reviewer event should carry a unique event identifier and be accepted once against exact V002 provenance. Source: [AWS Step Functions Best Practices](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html).

NIST presents the AI RMF as a lifecycle framework for incorporating trustworthiness into design, development, use, and evaluation. That supports keeping the review decision auditable as a complete lifecycle record rather than inferring completion from a later queue state. The record should make the responsible role, artifact, evidence, decision, and transition visible. Source: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

Google SRE guidance treats escalation as an operational response to an actionable condition and warns that excessive repeated pages cause fatigue and mask important events. It recommends clear ownership, response expectations, playbooks, and escalation paths, while separating informational records from urgent actionable alerts. Applied here, repeated same-state holds should remain append-only evidence but should not cause duplicate production work or escalating noise unless there is a materially new event or an unfulfilled owner deadline. Sources: [Google SRE — On-Call](https://sre.google/workbook/on-call/) and [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/).

## Decision

Publish exactly one blocker requiring an idempotent, unique, provenance-bound terminal Reviewer event and an explicit escalation assignment. Preserve the single-flight lane as closed. Require the Reviewer callback to include a unique event ID, exact V002 video ID, Drive file ID, SHA-256, timestamp, explicit decision, complete seven-dimension score, and immutable evidence references. Require the owner assignment to include responsible party, deadline, and escalation target.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat repeated queue holds, reminders, acknowledgements without verdict, silence, elapsed time, and duplicate callbacks as non-terminal. If an owner deadline is missed without a terminal decision, escalate the same bounded incident; do not open a parallel Generator contract.

## Terminal boundary

Only one authorized terminal event for the exact V002 contract may clear the lane: explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or another contract-permitted terminal resolution with unique identity, timestamp, evidence, and exact provenance. Duplicate or conflicting callbacks require escalation and preservation of both records, not silent overwrite.

## References

[1]: https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html "AWS Step Functions Best Practices"
[2]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[3]: https://sre.google/workbook/on-call/ "Google SRE — On-Call"
[4]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
