# Firing 235 Source Notes

## Fresh topic

Temporal consistency and clock synchronization in distributed audit records: how to distinguish event time from observation time and prevent stale, delayed, duplicated, or out-of-order messages from being treated as terminal authorization.

## Authoritative sources

NIST defines an audit log as a chronological record of system activities and a record providing documentary evidence of specific events: https://csrc.nist.gov/glossary/term/audit_log. NIST SP 800-92 recommends sound log-management infrastructure and robust log-management processes: https://csrc.nist.gov/publications/detail/sp/800-92/final. AWS Prescriptive Guidance describes event sourcing as an immutable history of state-changing events that supports auditability, traceability, and point-in-time reconstruction; it warns about concurrent event collisions, eventual consistency, time sensitivity, ordering, replay, and event versioning: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/event-sourcing-pattern.html. Google SRE guidance states that monitoring should distinguish symptoms from causes, keep human alerts simple and actionable, avoid noise, and preserve enough telemetry for post hoc diagnosis: https://sre.google/sre-book/monitoring-distributed-systems/.

## Application to V002

A wall-clock timestamp alone cannot establish causal order or terminal authority across Director, Generator, Reviewer, and queue records. A Reviewer packet must carry a unique event ID, actor identity, prior-event or causal-parent ID, repository commit or immutable artifact reference, event creation time, observation/ingestion time, and explicit ordering or conflict status. The system must distinguish a late observation of an old review event from a new terminal decision. Out-of-order, duplicate, stale, clock-skewed, or causally unlinked records remain non-terminal until reconciled against the canonical append-only incident ledger.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring temporal-consistency fields and conflict handling, not a new campaign brief. Keep the single-flight lane closed and do not authorize MP4 generation. A queue heartbeat or routine hold record must not clear the lane.
