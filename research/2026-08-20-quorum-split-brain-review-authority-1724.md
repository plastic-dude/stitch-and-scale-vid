# Director Research — Quorum and Split-Brain Safety for Terminal Review State

- **Research ID:** `RESEARCH-20260820-quorum-split-brain-review-authority-1724`
- **Run role:** Temporary Director/Planner
- **Firing:** 246
- **Run time:** 2026-08-20T17:24:06+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should V002 prevent conflicting Reviewer, owner, retry, or recovery events from producing two terminal outcomes during a network partition, stale read, or split-brain condition?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, terminal-signal paths, and queue tail were inspected. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x9_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

Google SRE explains that distributed consensus is required when processes need a consistent view of critical shared state across unreliable networks, including leadership, queue commitment, leases, and datastore values.[1] It recommends formally proven and tested consensus systems for leader election, critical state, and distributed locking rather than informal heartbeats or timeouts. Its split-brain case shows that heartbeat timeouts can lead both sides of a partition to believe they are active, creating corruption or unavailability. The chapter also describes the consistency/availability trade-off under partitions, the danger of timestamp-only conflict resolution, and the value of strict proposal sequencing plus majority acceptance so two conflicting values cannot both commit for the same proposal.

The same guidance describes replicated state machines as executing the same ordered operations across replicas, lease-based task claims as safer than deleting queued work, and atomic broadcast as a common ordered delivery primitive. It notes that retries should use unique proposal numbers and backoff to avoid dueling proposers. These are state-commitment controls; they do not replace the substantive independence and evidence requirements of the Reviewer.

For V002, multiple agents may observe or append operational records, but only one authorized terminal decision can clear the lane. A simple heartbeat, timeout, latest-timestamp rule, or concurrent retry cannot prove exclusive authority. If two Reviewers, an owner, or a recovery path publish competing approval, rejection, or remake outcomes, the system must preserve both records and mark the conflict non-terminal rather than choosing whichever arrived last.

## Decision

Publish exactly one blocker requiring a split-brain-safe terminal transition protocol. A terminal proposal must carry a unique decision/proposal ID, exact artifact and contract binding, causal parent, monotonically ordered revision or quorum-backed commit, authority witness, freshness bound, and idempotency key. The system must define the authority set and deterministic no-quorum rule. Conflicting or ambiguous proposals must be retained immutably and routed for adjudication; they must not be resolved by last-write-wins, timestamp order alone, queue order, or retry count.

Quorum protects state commitment; it does not authorize substantive judgment. A valid terminal Reviewer packet still requires independent Reviewer authority, exact V002 provenance, complete seven-dimension evidence, reproducible scoring, and immutable rationale. If quorum, the authority witness, or an authoritative state read is unavailable, the lane must fail closed. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only one complete, independently authorized, exact-provenance terminal outcome may clear V002. Approval, rejection, or `REMAKE_REQUIRED` is not valid merely because it is newer, arrives last, has a heartbeat, is signed by an unqualified actor, or is observed by a queue. Conflicts remain non-terminal until an authorized adjudication or contract-authorized owner resolution records the decision and preserves the losing proposal.

## References

[1]: https://sre.google/sre-book/managing-critical-state/ "Google SRE: Managing Critical State—Distributed Consensus for Reliability"
