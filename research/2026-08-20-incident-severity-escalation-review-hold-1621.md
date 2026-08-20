# Director Research — Incident Severity and Escalation for the Review Hold

- **Research ID:** `RESEARCH-20260820-incident-severity-escalation-review-hold-1621`
- **Run role:** Temporary Director/Planner
- **Firing:** 237
- **Run time:** 2026-08-20T16:21:38+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the team classify and escalate a blocked multi-agent review lane so that a persistent authorization hold receives accountable ownership and a bounded response, without turning routine liveness messages or escalation reminders into terminal authority?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, terminal-signal paths, and queue tail were inspected. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

Google’s incident-management guidance centers on **coordinate, communicate, and control**. It separates Incident Commander, Communications Lead, and Operations Lead responsibilities, uses actionable user-facing signals, records a live incident state, and requires explicit handoffs.[1] Google’s SRE incident chapter further recommends clear separation of responsibilities, a recognized command post, a live state document, explicit handoff acknowledgment, and early incident declaration when multiple teams are needed, customers are affected, or sustained analysis has not resolved the issue.[2] NIST AI RMF provides lifecycle governance for AI risks.[3] AWS Security Incident Response describes detection, triage, investigation, containment, and recovery, with triage and deduplication, scoped escalation, designated contacts, and explicit customer-controlled closure.[4]

A repeated queue hold should therefore be correlated to one canonical review incident, not treated as many independent incidents. Severity should reflect authorization risk, user or campaign impact, evidence integrity, and checkpoint age. A liveness heartbeat is not an authorization event. Escalation is not closure. The operator who manages queue continuity must not silently become the independent Reviewer or final approver.

## Decision

Publish exactly one blocker requiring a severity-classified, accountable escalation ladder for the canonical V002 incident. The record must name the current incident owner or commander, communications channel, operational action owner, current state and impact, severity level and rationale, checkpoint deadline, escalation target, handoff acknowledgment, and closure authority. It must distinguish liveness, operational blockage, evidence-integrity risk, and authorization risk, and it must record the transition criteria between severity tiers.

Duplicate holds, reminders, and routine heartbeats must be deduplicated into the same incident and must not reset the checkpoint clock or create a new authority path. If the checkpoint expires, append an escalation event naming the missed obligation and target; do not infer approval, rejection, remake authorization, or a new brief. Closure requires an explicit independent terminal Reviewer decision or contract-authorized owner resolution plus acknowledgment by the accountable owner. No operator, Director, Generator, or automated scheduler may self-assign Reviewer authority through escalation.

## Terminal boundary

Only a complete independent Reviewer outcome or contract-authorized owner resolution that is severity-tracked, accountable, artifact-identity-bound, evidence-complete, and explicitly closed may clear V002. Until then, preserve the canonical incident, keep the single-flight lane closed, and generate no MP4.

## References

[1]: https://sre.google/resources/practices-and-processes/incident-management-guide/ "Google SRE Incident Management Guide"
[2]: https://sre.google/sre-book/managing-incidents/ "Google SRE: Managing Incidents"
[3]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[4]: https://docs.aws.amazon.com/security-ir/latest/userguide/what-is.html "AWS Security Incident Response"
