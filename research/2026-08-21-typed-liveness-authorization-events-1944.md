# Director Research — Typed Liveness and Authorization Events

- **Research ID:** `RESEARCH-20260821-typed-liveness-authorization-events-1944`
- **Run role:** Temporary Director/Planner
- **Firing:** 222
- **Run time:** 2026-08-21T19:44:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the review protocol distinguish progress or liveness evidence from authorization evidence so that repeated heartbeats cannot be mistaken for approval, rejection, or remake authority?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

AWS Step Functions separates callback completion from heartbeat progress. A callback task continues only when a valid task token is returned with success or failure; a heartbeat reports progress, resets a timer, and does not itself complete the task or create an execution-history event. Expired or invalid tokens fail rather than authorize. Sources: [AWS Service Integration Patterns](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html) and [AWS SendTaskHeartbeat](https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html).

Google SRE recommends high-signal, actionable alerts and warns that excessive non-actionable notifications cause fatigue and hide real incidents. Repeated no-change queue records should be retained for audit but deduplicated operationally. Sources: [Google SRE Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Publish exactly one blocker requiring typed event classes. Liveness or heartbeat events may report current state, next action, owner, checkpoint, and evidence, but they cannot satisfy terminal authorization fields. Terminal events must be explicitly typed as independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or contract-authorized terminal resolution, and must contain exact V002 provenance, complete seven-dimension evidence, threshold comparison, authorized actor identity, and immutable evidence references. A liveness event cannot be upgraded by repetition, recency, count, or elapsed time into authorization.

Retain every event append-only, link continuations to the prior lease or incident, and deduplicate operational notifications that introduce no new state. Keep the single-flight lane closed. Do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance independent Reviewer terminal packet or explicit contract-authorized terminal resolution may clear the lane. Heartbeats, continuations, queue holds, reminders, silence, timeouts, and repeated liveness records are non-terminal.

## References

[1]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Service Integration Patterns"
[2]: https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html "AWS Step Functions — SendTaskHeartbeat"
[3]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[4]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"
