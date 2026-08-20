# Director Research — Version-Bound Review Contract

- **Research ID:** `RESEARCH-20260821-version-bound-review-contract-2110`
- **Run role:** Temporary Director/Planner
- **Firing:** 227
- **Run time:** 2026-08-21T21:10:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the review system prevent a Reviewer decision from being applied under the wrong artifact version, scoring policy, evidence schema, or authorization contract when those inputs can change over time?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. Repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records remain present. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST materials emphasize version control, retention of TEVV and digital-content history, documented governance, independent review, and reproducibility. AWS Step Functions binds an execution to a qualified version or alias at execution start; an unqualified invocation is not associated with a version even if it happens to use the latest revision. Google SRE emphasizes controlled change management, progressive rollout, safe rollback, durable playbooks, and retained incident records. Sources: [NIST AI RMF Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), [AWS Execution Version Association](https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html), [AWS State Machine Aliases](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html), and [Google SRE Introduction](https://sre.google/sre-book/introduction/).

## Decision

Publish exactly one blocker requiring explicit version binding. A terminal Reviewer packet must identify the exact V002 video ID, Drive file ID, SHA-256, artifact manifest version, review-contract version, scoring-policy or weights version, threshold version, evidence-schema version, reviewer-role authorization version, evaluation timestamp, method, complete score, and immutable evidence references.

An unqualified callback, a packet that names only a campaign or video ID without policy versions, or a packet evaluated under a different artifact or contract is non-terminal. If any bound artifact, checksum, review contract, scoring weights, threshold, evidence schema, or authorization policy changes before the terminal decision, the open review must be revalidated under the new version. A published terminal decision remains immutable and is not silently reinterpreted; a later policy is a new event. Keep the single-flight lane closed and do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance Reviewer packet bound to the active artifact and all applicable policy versions, or explicit contract-authorized terminal resolution, may clear V002. Policy drift, version omission, or silent reinterpretation cannot authorize production.

## References

[1]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf "NIST AI RMF Generative AI Profile"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html "AWS Step Functions Execution Version Association"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html "AWS Step Functions State Machine Aliases"
[5]: https://sre.google/sre-book/introduction/ "Google SRE Introduction"
