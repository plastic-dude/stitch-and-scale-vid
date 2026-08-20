# Director Research — Durable Audit Logs and Replay Safety

- **Research ID:** `RESEARCH-20260821-durable-audit-log-replay-safety-1530`
- **Run role:** Temporary Director/Planner
- **Firing:** 206
- **Run time:** 2026-08-21T15:30:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the Director preserve a reconstructable evidence trail when scheduled firings repeat, remote records arrive concurrently, and a review hold may last longer than one execution window?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST SP 800-92 recommends establishing and maintaining effective log-management infrastructures and robust log-management processes throughout an organization. Applied here, every meaningful Director firing should leave an append-only research record, blocker or brief, and publication receipt that can be correlated by firing number, commit, and exact contract. A summary that merely says “still waiting” is weaker than a durable record that captures the observed state, decision boundary, required action, and evidence locations. Source: [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final).

NIST’s AI RMF frames trustworthy AI across design, development, use, and evaluation, which supports retaining the full lifecycle evidence rather than only the final outcome. The active V002 lane therefore needs a durable record of handoff, provenance, independent review requirement, and terminal decision status. Source: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

AWS documents that execution histories expose unique execution IDs, timestamps, state inputs and outputs, retries, and event histories, while noting that workflow execution may repeat and that explicit timeouts prevent stuck waiting states. Applied here, recurring Director firings must be replay-safe and must not interpret a repeated observation as a new authorization. The repository’s append-only records function as the durable audit trail; exact commit and path verification provides the publication boundary. Sources: [AWS Step Functions — Best Practices](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html) and [AWS Step Functions — Viewing Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html).

## Decision

Publish exactly one blocker requiring durable, correlated evidence for a terminal V002 decision. Require the independent Reviewer callback to include unique event ID, exact V002 video ID, Drive file ID, SHA-256, timestamp, explicit outcome, complete seven-dimension score, and evidence references. Require owner, deadline, and escalation target. Keep the single-flight lane closed.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat repeated queue holds, retries, reminders, acknowledgements without a verdict, silence, elapsed time, and duplicate firings as non-terminal. Preserve all material records append-only and use exact remote commit/path verification to make publication reconstructable.

## Terminal boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or other contract-permitted terminal resolution with durable, uniquely correlated evidence may clear the lane.

## References

[1]: https://csrc.nist.gov/pubs/sp/800/92/final "NIST SP 800-92"
[2]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html "AWS Step Functions Best Practices"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions — Viewing Execution Details"
