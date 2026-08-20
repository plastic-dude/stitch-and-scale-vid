# Director Research — Append-Only Reviewer Conflict Handling

- **Research ID:** `RESEARCH-20260821-append-only-reviewer-conflict-handling-1632`
- **Run role:** Temporary Director/Planner
- **Firing:** 210
- **Run time:** 2026-08-21T16:32:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the review lane handle conflicting, corrected, or superseding Reviewer packets while preserving a reconstructable, non-destructive evidence history?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST defines an audit log as both a chronological record of system activity and documentary evidence of specific events. NIST SP 800-92 emphasizes sound log-management infrastructure and robust processes for maintaining effective logs. Applied to this lane, each Reviewer submission, conflict, correction, blocker, and receipt should remain durable and correlated by identity and time. Source: [NIST Audit Log Glossary](https://csrc.nist.gov/glossary/term/audit_log) and [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final).

AWS describes durable Standard Workflows with retrievable execution histories containing unique execution IDs, inputs, outputs, timestamps, retries, errors, and event history. The operational principle is reconstructability: later correction or escalation must be represented as a new linked event, not achieved by erasing the original event. Sources: [AWS Step Functions — Choosing Workflow Type](https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html) and [AWS Step Functions — Viewing Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html).

A conflict between Reviewer packets is itself a material event. It must not be resolved by whichever packet arrived last, by a Director judgment, or by overwriting one packet. A valid resolution requires an authorized independent terminal event that references the conflicting event IDs, explains the correction or adjudication, remains bound to exact V002 provenance, and preserves all original evidence. Until that exists, the lane remains fail-closed.

## Decision

Publish exactly one blocker requiring append-only evidence retention and explicit conflict handling. Every Reviewer packet must carry a unique event ID, exact V002 video ID, Drive file ID, SHA-256, reviewer role, timestamp, complete seven-dimension score, explicit outcome, and immutable evidence references. A corrected or superseding packet must reference the original event ID and must not delete or mutate it. Conflicting packets remain non-terminal until a contract-authorized independent resolution is published.

Keep the single-flight lane closed. Do not create a new angle brief, MP4, approval, rejection, or remake. Preserve all evidence and escalate the same incident when conflict or incompleteness prevents a terminal decision.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized resolution that preserves and addresses prior conflicting evidence may clear the lane.

## References

[1]: https://csrc.nist.gov/glossary/term/audit_log "NIST Audit Log Glossary"
[2]: https://csrc.nist.gov/pubs/sp/800/92/final "NIST SP 800-92"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html "AWS Step Functions — Choosing Workflow Type"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions — Viewing Execution Details"
