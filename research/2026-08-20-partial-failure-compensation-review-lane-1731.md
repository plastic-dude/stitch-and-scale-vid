# Director Research — Partial-Failure Compensation and Durable Review Recovery

- **Research ID:** `RESEARCH-20260820-partial-failure-compensation-review-lane-1731`
- **Run role:** Temporary Director/Planner
- **Firing:** 247
- **Run time:** 2026-08-20T17:31:12+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the V002 review lane recover when a distributed step partially succeeds—for example, when the Reviewer record is published but a manifest update, Generator order, checksum record, or derivative upload fails—without duplicating actions or treating recovery as terminal authorization?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, the latest Reviewer record, terminal-signal paths, and queue tail were inspected. The latest Reviewer record is `REV-ownership-receipt-privacy-by-default-v002-20260820T1715Z`; it reports `status: BLOCKED`, weighted score `86.0%`, `remake_order_id: null`, and missing version-matched v002 evidence. V002 therefore remains non-terminal and the single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Manifest status | `director-review` |
| Review verdict | `BLOCKED` |
| Weighted score | `86.0%` |
| Remake order | `null` |

## Research findings

AWS presents the Saga pattern as a way to maintain consistency when a distributed transaction partially succeeds and a later step fails; the workflow uses compensating transactions to address the prior effects.[1] AWS Step Functions distinguishes durable Standard Workflows, which are long-running, auditable, and exactly-once by default, from asynchronous Express Workflows, which are at-least-once and require idempotent actions. AWS also notes that execution history and logging semantics differ by workflow type.[2] NIST SP 800-34 advises organizations to determine contingency-planning requirements, priorities, restoration procedures, and testing needs for information systems.[3] Google SRE warns that naive retries can amplify load and create cascading failures; it recommends randomized exponential backoff, retry limits, retry budgets, and avoiding retry amplification across layers, while testing overload and recovery paths.[4]

For V002, distributed side effects include Drive retrieval, direct observations, review evidence, manifest publication, Generator-facing order publication, and any derivative upload. If a step fails after an earlier side effect, the system must not pretend that no side effect occurred. Each step needs a durable execution ID, contract and artifact binding, idempotency key, precondition, postcondition, evidence reference, and immutable attempt record. A compensating action may quarantine a derivative, append a correction, or restore a non-terminal operational state, but it must not erase evidence or silently rewrite V002’s history.

At-least-once retries are unsafe for non-idempotent terminal actions. Replayed Reviewer or Generator messages must deduplicate by contract, exact artifact, action, and execution identity. Retry budgets, exponential backoff, and a single accountable owner limit cascading duplicate work. If compensation fails, the system must open or update a recovery incident and preserve the partially completed state. A successful compensation or postcondition check is not a Reviewer decision and cannot authorize approval, rejection, remake, publication, or MP4 generation.

## Decision

Publish exactly one blocker requiring a durable, step-level recovery and compensation contract for evidence, manifests, orders, and derivatives. The contract must distinguish reversible operational effects from irreversible or terminal actions, record pre/postconditions and compensation results, limit retries, require idempotency, and fail closed when compensation or postcondition verification is incomplete. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is exact-provenance-bound, evidence-complete, authority-verified, immutable, and not merely a retry or compensation outcome may clear V002.

## References

[1]: https://aws.amazon.com/video/watch/0128e601ef9/ "AWS: Applying the Saga Pattern with AWS Lambda and Step Functions"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html "AWS Step Functions: Choosing Workflow Type"
[3]: https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final "NIST SP 800-34: Contingency Planning Guide for Federal Information Systems"
[4]: https://sre.google/sre-book/addressing-cascading-failures/ "Google SRE: Addressing Cascading Failures"
