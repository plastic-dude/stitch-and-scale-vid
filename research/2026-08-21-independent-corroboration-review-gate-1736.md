# Director Research — Independent Corroboration at the Review Gate

- **Research ID:** `RESEARCH-20260821-independent-corroboration-review-gate-1736`
- **Run role:** Temporary Director/Planner
- **Firing:** 214
- **Run time:** 2026-08-21T17:36:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

If multiple Reviewer-like signals appear, what makes them genuine independent corroboration rather than duplicate, copied, conflicting, or unrelated callbacks?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF says that measurement should use objective, repeatable, documented methods and metrics, and that independent assessors can improve evaluation effectiveness and mitigate internal bias or conflicts of interest. Therefore, a second message is not automatically corroboration. Corroboration must identify a separate reviewer, method, timestamp, exact artifact, complete score, and inspectable evidence. Sources: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) and [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

AWS callback tasks pause until the original task token returns with an explicit success or failure payload. The token and execution context associate the callback with the correct waiting execution. A duplicate, missing-token, or unrelated callback cannot safely advance it. Applied here, every Reviewer packet needs a unique event ID and exact V002 provenance; duplicates and conflicts must be preserved and escalated rather than treated as quorum or last-write-wins. Sources: [AWS Step Functions — Callback Tasks](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html) and [AWS Human Approval Workflow](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html).

## Decision

Publish exactly one blocker requiring one complete terminal Reviewer packet. If a second assessment is ever used as corroboration, it must be independently authored, exact-provenance-bound, methodologically complete, timestamped, and independently inspectable. Identical copied packets, duplicate event IDs, same-author retries, conflicting decisions, or packets for another artifact are non-terminal. No Director, Generator, owner acknowledgement, queue hold, or duplicate signal may substitute for the authorized Reviewer decision.

Keep the single-flight lane closed. Preserve all evidence append-only and escalate conflicts. Do not create a new angle brief, MP4, approval, rejection, or remake.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized terminal resolution may clear the lane. Multiple messages do not equal multiple independent approvals.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Callback Tasks"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Human Approval Workflow"
