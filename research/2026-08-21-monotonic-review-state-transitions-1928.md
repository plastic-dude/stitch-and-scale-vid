# Director Research — Monotonic Review-State Transitions

- **Research ID:** `RESEARCH-20260821-monotonic-review-state-transitions-1928`
- **Run role:** Temporary Director/Planner
- **Firing:** 221
- **Run time:** 2026-08-21T19:28:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the V002 review state handle duplicate, late, retried, or out-of-order callbacks so that a terminal decision cannot be reopened, overwritten, or applied to the wrong causal state?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF Govern guidance supports explicit role authority, current documentation, change management, ongoing monitoring, and incident response. AWS workflow guidance shows that execution IDs, event history, timestamps, inputs, outputs, retry records, and error records are necessary to reconstruct state transitions; timeout and retry are explicit failure or controlled transition paths, not implicit success. Google SRE incident management emphasizes a single commander holding high-level state, a live state document, clear handoffs, separation of responsibilities, and explicit acknowledgement. Sources: [NIST AI RMF Govern](https://airc.nist.gov/airmf-resources/playbook/govern/), [AWS Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html), [AWS Error Handling](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html), and [Google SRE Managing Incidents](https://sre.google/sre-book/managing-incidents/).

## Decision

Publish exactly one blocker requiring monotonic review-state transitions. Every event must identify its parent or superseded event, exact V002 provenance, event timestamp, current state version, actor role, and causal relationship. A terminal state, once authorized and published, is immutable and cannot be reopened by a late, stale, retried, or out-of-order callback. Before a terminal event exists, such callbacks remain append-only non-terminal evidence and may trigger conflict or escalation; they cannot clear the lane. No retry, timeout, heartbeat, owner acknowledgement, queue hold, or newer Director firing is a terminal quality decision.

Use explicit `supersedes`, `revalidates`, `conflicts_with`, or `late_for` links rather than overwriting earlier records. Any state transition that lacks a valid predecessor, exact provenance, authorized actor, or complete evidence is rejected as non-terminal. Keep the single-flight lane closed and do not create a new angle brief or MP4.

## Terminal boundary

Only one complete exact-provenance independent Reviewer decision or explicit contract-authorized terminal resolution may clear the lane. Terminal states are one-way and immutable; subsequent corrections are linked append-only records, not mutations.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/govern/ "NIST AI RMF Govern"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions Execution Details"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html "AWS Step Functions Error Handling"
[4]: https://sre.google/sre-book/managing-incidents/ "Google SRE Managing Incidents"
