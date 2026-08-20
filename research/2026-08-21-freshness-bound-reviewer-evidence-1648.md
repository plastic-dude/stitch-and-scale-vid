# Director Research — Freshness-Bound Reviewer Evidence

- **Research ID:** `RESEARCH-20260821-freshness-bound-reviewer-evidence-1648`
- **Run role:** Temporary Director/Planner
- **Firing:** 211
- **Run time:** 2026-08-21T16:48:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How can the review gate distinguish a valid decision about the active V002 artifact from a stale decision about an earlier version, a different Drive upload, or an unqualified campaign pointer?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF treats risk management as continuous across the AI lifecycle and calls for documented governance, ongoing monitoring, independent review, repeatable measurement, and version tracking. Its own publication records version number, date, and change description, demonstrating that “current” is an explicit identity claim, not merely the latest pointer. Applied here, a Reviewer decision must bind to the exact active artifact and review time. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) and [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

AWS associates executions with a qualified version or alias at execution start and distinguishes this from an unqualified ARN. An unqualified pointer does not establish the version identity needed for later audit. Applied here, a campaign name, “latest” file, or generic review message cannot establish that the Reviewer evaluated V002. The callback must carry exact V002 video ID, Drive file ID, SHA-256, and timestamp. Sources: [AWS Step Functions — Execution Version and Alias Association](https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html) and [AWS Step Functions — State Machine Aliases](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html).

## Decision

Publish exactly one blocker requiring freshness-bound independent Reviewer evidence. The terminal packet must include unique event ID, timestamp, exact V002 video ID, exact Drive file ID, exact SHA-256, independent reviewer role, complete seven-dimension score, weighted total, threshold comparison, explicit outcome, and immutable evidence references. Any packet for v001, another upload, another checksum, a later remake, or an unqualified campaign pointer is non-terminal and must be preserved and escalated.

Keep the single-flight lane closed. Do not create a new angle brief, MP4, approval, rejection, or remake. A stale callback cannot authorize production or clear the active lane.

## Terminal boundary

Only a complete independent Reviewer decision that is fresh and bound to the exact active V002 provenance may clear the lane.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html "AWS Step Functions — Execution Version and Alias Association"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html "AWS Step Functions — State Machine Aliases"
