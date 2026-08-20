# Director Research — Freshness and Revalidation at the Review Gate

- **Research ID:** `RESEARCH-20260821-freshness-revalidation-review-gate-1840`
- **Run role:** Temporary Director/Planner
- **Firing:** 218
- **Run time:** 2026-08-21T18:40:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

When a Reviewer packet was created for an artifact or contract version, what makes it temporally valid for the current V002 lane, and when must the item be re-reviewed?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF Manage and Measure guidance treats risk management as continuous across the AI lifecycle. It recommends regular monitoring, re-verification, documentation of revisions, and responses to drift or changed operating conditions. Therefore, a prior score cannot automatically remain valid when the artifact, evidence, review method, threshold, or operating context changes. Sources: [NIST AI RMF Manage Playbook](https://airc.nist.gov/airmf-resources/playbook/manage/) and [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/).

AWS associates an execution with a specific version or alias at execution start, and versions are immutable snapshots. An unqualified execution does not establish the same version association. The operational lesson is that a terminal decision must identify the exact evaluated version and context, not merely a moving campaign label. Sources: [AWS — Associating Executions with a Version or Alias](https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html) and [AWS — State Machine Versions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html).

## Decision

Publish exactly one blocker requiring freshness-bound revalidation. A terminal Reviewer packet must identify the exact V002 video ID, Drive file ID, SHA-256, review-contract or scoring-policy version, evaluation timestamp, method, complete score, and evidence. If any of those identities or the relevant operating context changes before terminal authorization, the packet becomes non-terminal for the current lane and must be re-reviewed. Never apply a decision for another upload, checksum, remake version, or scoring-policy revision to V002.

Keep the single-flight lane closed. Preserve prior packets and superseding re-review packets append-only, linked by explicit supersedes/revalidates relationships. Do not create a new angle brief, MP4, approval, rejection, or remake.

## Terminal boundary

Only a freshness-valid, exact-provenance Reviewer decision or contract-authorized terminal resolution may clear the lane.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/manage/ "NIST AI RMF Manage Playbook"
[2]: https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF Measure Playbook"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html "AWS Step Functions — Associating Executions with a Version or Alias"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html "AWS Step Functions — State Machine Versions"
