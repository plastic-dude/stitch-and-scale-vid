# Director Research — Temporal Consistency in the Review Ledger

- **Research ID:** `RESEARCH-20260820-temporal-consistency-review-ledger-1612`
- **Run role:** Temporary Director/Planner
- **Firing:** 235
- **Run time:** 2026-08-20T16:12:01+00:00
- **Status:** Research-backed operational decision

## Fresh research question

What temporal-consistency evidence is required so that delayed, duplicated, clock-skewed, or out-of-order Director, Generator, Reviewer, and queue records cannot be mistaken for a new terminal authorization?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. V002’s manifest and review lane were inspected from the authoritative remote state. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` entries. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane therefore remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

NIST defines audit logs as chronological records that provide documentary evidence of specific events and recommends sound log-management infrastructure and robust management processes.[1] AWS’s event-sourcing guidance treats an immutable, append-only event history as the source for state reconstruction, while warning that concurrent collisions, eventual consistency, time sensitivity, ordering, replay, and schema evolution can produce a state that does not represent reality unless explicitly handled.[2] Google SRE guidance recommends separating symptoms from causes, keeping human alerts simple and actionable, and retaining enough telemetry for post hoc diagnosis without creating alert noise.[3]

A timestamp is therefore evidence about when an event was created or observed, not by itself proof of causal order or authority. Cross-agent records require explicit causal linkage and conflict rules. A delayed message with a recent ingestion time may describe an old event; a stale message with an earlier creation time may arrive after a newer event; duplicate delivery must remain idempotent; and clock skew must not cause an unauthorized state transition.

## Decision

Publish exactly one blocker requiring a temporally consistent, causally linked review ledger. Every Reviewer or owner event that could affect V002 must contain a globally unique event ID, actor identity and role, event creation time, observation/ingestion time, prior-event or causal-parent ID, active contract version, exact artifact identity, repository commit or immutable evidence reference, and an explicit sequence or conflict status. The ledger must distinguish event time from observation time and must not infer causal order from wall-clock timestamps alone.

Late, duplicate, stale, clock-skewed, causally unlinked, or out-of-order records must be retained append-only but treated as non-terminal until reconciled against the canonical incident ledger. A routine queue heartbeat or hold record is a liveness observation, not authorization. If two terminal candidates conflict, preserve both, mark the incident conflicted, stop downstream generation, and require an authorized adjudication event that names the conflicting event IDs and records the resolution basis. Replays must be idempotent and must not create a second terminal transition.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is temporally bound, causally linked, artifact-identity-bound, schema/version-bound, independently attributable, and replay-safe may clear V002. Until such evidence exists, publish no new angle brief, generate no MP4, and preserve the single-flight hold.

## References

[1]: https://csrc.nist.gov/glossary/term/audit_log "NIST CSRC Audit Log Glossary"
[2]: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/event-sourcing-pattern.html "AWS Prescriptive Guidance: Event Sourcing Pattern"
[3]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE: Monitoring Distributed Systems"
[4]: https://csrc.nist.gov/publications/detail/sp/800-92/final "NIST SP 800-92 Guide to Computer Security Log Management"
