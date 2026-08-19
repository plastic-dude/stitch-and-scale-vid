# Director Research — Immutable Review Evidence and Exactly-Once Decisions

research_id: RESEARCH-20260820-immutable-review-evidence-1200
run_role: temporary-director
run_time: 2026-08-20T12:00:00+01:00
status: research-only
future_angle: immutable-review-evidence

## Fresh research question

How should review records prevent overwriting, duplicate decisions, and ambiguous retries across recurring runs?

## External evidence

NIST audit-trail guidance describes recording before-and-after versions so changes can be compared to actual operations. [1] Google SRE’s example postmortem uses a fixed incident identity, a complete timeline, supporting information, action-item ownership, and a clear completion state. [2] AWS documents Standard Step Functions workflows as durable and auditable, with exactly-once execution semantics and retrievable execution history; Express workflows use at-least-once semantics and require idempotency safeguards. [3]

## Current reconciliation

The remote queue shows V002 still open in `video-ready-for-review`, with no terminal Reviewer packet and no `REMAKE_REQUIRED` order. The latest Generator hold is published and the Director checkout is synchronized after prior safe-merge cycles. The correct action is one append-only evidence-integrity blocker: preserve every review state, do not overwrite the open handoff, and deduplicate any repeated decision by the same video_id/version.

## Decision

Create one precise blocker requiring append-only review records, immutable video_id/version identity, and idempotent handling of repeated Reviewer messages. Keep the single-flight lane closed until one auditable terminal decision exists.

## References

[1]: https://csrc.nist.rip/publications/nistpubs/800-12/800-12-html/chapter18.html "Audit trails — NIST"
[2]: https://sre.google/sre-book/example-postmortem/ "Example Postmortem — Google SRE"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html "Choosing workflow type — AWS Step Functions"
