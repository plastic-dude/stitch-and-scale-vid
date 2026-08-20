# Director Research — Bounded Review Lease and Heartbeat

- **Research ID:** `RESEARCH-20260821-bounded-review-lease-heartbeat-1912`
- **Run role:** Temporary Director/Planner
- **Firing:** 220
- **Run time:** 2026-08-21T19:12:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How can an open review hold remain live and actionable without becoming an indefinite authorization lease, and what should happen when the responsible Reviewer or owner misses a bounded checkpoint?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF Govern and Manage guidance calls for transparent policies, clearly delegated authority, periodic review, monitoring, documented change management, incident response, and human adjudication. An open item should therefore have an accountable owner, defined review cadence, and a documented response path. Sources: [NIST AI RMF Govern Playbook](https://airc.nist.gov/airmf-resources/playbook/govern/) and [NIST AI RMF Manage Playbook](https://airc.nist.gov/airmf-resources/playbook/manage/).

Google SRE guidance recommends actionable alerts, clear incident roles, early escalation, coordination, communication, control, and a working record. Repeated no-change holds should not be mistaken for progress or authorization. Source: [Google SRE Incident Management Guide](https://sre.google/resources/practices-and-processes/incident-management-guide/).

AWS Step Functions callback tasks wait for an external token but support `HeartbeatSeconds` to avoid stuck executions. A missed heartbeat produces a timeout failure; it does not produce success. The relevant governance analogy is a bounded review lease: a valid continuation or terminal callback must renew or resolve the incident, while an expired lease escalates the same incident and remains fail-closed. Source: [AWS Step Functions — Service Integration Patterns](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html).

## Decision

Publish exactly one blocker requiring a bounded review lease. The lease record must identify the exact V002 provenance, responsible Reviewer or owner, lease start, bounded checkpoint expiry, expected terminal or continuation callback, escalation target, and immutable evidence. A valid heartbeat/continuation packet may renew the same incident only if it reports current state, next action, owner, new bounded checkpoint, and evidence; it cannot clear the lane. A missed checkpoint or timeout escalates the same incident, records the failure, and remains blocked. It never implies approval, rejection, remake, new angle, or MP4 authorization.

Keep the single-flight lane closed. Preserve all callbacks and timeout records append-only and link renewals to the prior lease event. Do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance independent Reviewer decision or explicit contract-authorized terminal resolution may close the incident and clear the lane. Heartbeats, continuation packets, elapsed time, timeout, silence, and queue-only commits are non-terminal.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/govern/ "NIST AI RMF Govern Playbook"
[2]: https://airc.nist.gov/airmf-resources/playbook/manage/ "NIST AI RMF Manage Playbook"
[3]: https://sre.google/resources/practices-and-processes/incident-management-guide/ "Google SRE Incident Management Guide"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Service Integration Patterns"
