# Director Research — Evaluation-Context Snapshot Review Gate

- **Research ID:** `RESEARCH-20260821-evaluation-context-snapshot-review-gate-2130`
- **Run role:** Temporary Director/Planner
- **Firing:** 228
- **Run time:** 2026-08-21T21:30:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the review gate determine whether a Reviewer callback is still valid when the artifact, policy, evidence schema, ownership, or incident state may have changed after evaluation began?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. Repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records remain present. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF emphasizes lifecycle-wide TEVV, version control, reproducibility, documentation, and retaining evaluation history. AWS state-machine versions are immutable snapshots; executions are associated with a qualified version or alias at execution start, while unqualified invocations are not version-associated. Google SRE’s incident state-document example records current status, command hierarchy, update times, exit criteria, TODOs, and a timeline. Sources: [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), [AWS State Machine Versions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html), [AWS Execution Version Association](https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html), and [Google SRE Example Incident State Document](https://sre.google/sre-book/incident-document/).

## Decision

Publish exactly one blocker requiring an immutable evaluation-context snapshot and acceptance-time comparison. A terminal Reviewer packet must capture the exact artifact and manifest identity, V002 video ID, Drive file ID, SHA-256, all review-contract and policy versions, evidence schema, reviewer authorization, evaluation method, evaluation start and end timestamps, incident state, accountable owner, checkpoint, escalation target, complete scores, threshold comparison, explicit decision, and immutable evidence.

At callback acceptance, compare every snapshot field with the current canonical V002 incident. If any artifact, checksum, manifest, policy, evidence schema, reviewer authorization, method, owner, checkpoint, escalation, or state field changed, the callback is stale or context-mismatched and remains non-terminal until revalidated. A callback that says only `latest`, `current`, `default`, or a generic video ID cannot establish context. Do not silently reinterpret the old packet or use it to clear the single-flight lane. Keep V002 blocked and do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance Reviewer packet whose evaluation snapshot matches the active current context, or explicit contract-authorized terminal resolution with an equivalent context binding, may clear V002. A stale packet remains immutable evidence and requires a linked re-review event.

## References

[1]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html "AWS Step Functions State Machine Versions"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html "AWS Step Functions Execution Version Association"
[4]: https://sre.google/sre-book/incident-document/ "Google SRE Example Incident State Document"
