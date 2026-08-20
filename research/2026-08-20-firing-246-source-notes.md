# Firing 246 Source Notes

## Fresh topic

Quorum and split-brain safeguards for distributed review authorization: how to prevent conflicting Reviewer, owner, retry, or recovery events from producing two terminal outcomes for V002.

## Authoritative source

Google SRE’s chapter “Managing Critical State: Distributed Consensus for Reliability” explains that distributed consensus is needed when processes must agree on critical shared state such as leadership, queue commitment, lease ownership, or datastore values over unreliable networks: https://sre.google/sre-book/managing-critical-state/. It warns that leader election and critical state should use formally proven, tested consensus systems rather than informal heartbeats, timeouts, or gossip. The chapter’s split-brain case shows that heartbeat timeouts alone can make both sides believe they are active, causing corruption or unavailability. It also explains that network partitions force a consistency/availability trade-off, that eventual-consistency conflict resolution can be surprising, and that strict proposal sequencing plus majority acceptance prevents two conflicting values from being committed for the same proposal.

The same source describes replicated state machines as executing the same ordered operations across replicas, reliable queues as requiring a lease or equivalent claim semantics rather than deleting work, and atomic broadcast as delivering messages in a reliable common order. It also notes that clock timestamps are problematic as the sole consistency mechanism and that recovery and retries need safeguards such as backoff and unique proposal numbers.

## Application to V002

The V002 review lane has a single terminal state boundary. Multiple agents may observe or append operational records, but only one authorized terminal decision can clear the lane. A simple heartbeat, timeout, latest-timestamp rule, or concurrent retry cannot prove exclusive authority. If two reviewers, an owner, or a recovery path publish competing approval, rejection, or remake outcomes during a partition, the system must preserve both records and mark the conflict non-terminal rather than choosing whichever arrived last.

A terminal transition protocol needs a unique decision/proposal ID, exact artifact and contract binding, causal parent, monotonically ordered revision or quorum-backed commit, an authority set, and a deterministic rule for no-quorum or conflicting proposals. The lane should fail closed when a quorum, authority witness, or authoritative state read is unavailable. Quorum is not a substitute for independent Reviewer role separation; it protects state commitment, while the Reviewer supplies the substantive judgment.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring a split-brain-safe terminal transition protocol with unique proposals, quorum or an equivalent single-writer authority, strict ordering, conflict preservation, no last-write-wins for terminal decisions, and fail-closed behavior under partition. Keep the single-flight lane closed and do not authorize MP4 generation.
