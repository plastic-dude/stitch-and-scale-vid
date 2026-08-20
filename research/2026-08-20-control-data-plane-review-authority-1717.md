# Director Research — Control/Data-Plane Separation for Review Authority

- **Research ID:** `RESEARCH-20260820-control-data-plane-review-authority-1717`
- **Run role:** Temporary Director/Planner
- **Firing:** 245
- **Run time:** 2026-08-20T17:17:40+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How can the review system prevent queue, telemetry, administrative APIs, and recovery channels from directly mutating V002 authorization state while remaining observable and recoverable during control-plane degradation?

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

NIST Zero Trust Architecture describes a logical separation between policy decision and enforcement functions, which can be applied as a control-plane/data-plane boundary.[1] AWS describes control planes as administrative CRUDL and orchestration systems and data planes as the primary service function; AWS notes that the data plane is intentionally less complex and that separation provides performance and availability benefits.[2] AWS reliability guidance recommends relying on the data plane rather than the control plane during recovery, minimizing control-plane operations during degradation, pre-provisioning or rehearsing control actions, and designing static stability so recovery does not depend on fragile administrative APIs.[3] NIST SP 800-53 frames controls in both functionality and assurance terms and includes access control, audit/accountability, assessment, configuration management, contingency planning, incident response, and system/information integrity.[4]

For V002, the exact media artifact and immutable evidence are data-plane objects. Queue records, heartbeats, schedules, administrative commands, receipts, incident notices, and escalations are control-plane events. Control-plane events may request evaluation, report liveness, append a hold, or route an incident, but they must not directly transition V002 from `video-ready-for-review` to approved, rejected, `REMAKE_REQUIRED`, published, or generation-authorized. Terminal transitions need a separate identity-bound decision path with complete evidence.

Control-plane degradation must not create unsafe fallback. Queue append operations and protected evidence reads may continue, while stale responses, retries, administrative replays, partial writes, or recovery probes remain non-terminal. Any control-plane operation capable of clearing the lane must be pre-authorized, idempotent, auditable, minimally scoped, and rehearsed. Ambiguous state or authority must fail closed, and recovery must preserve both the pre-recovery record and the new attempt.

## Decision

Publish exactly one blocker requiring explicit control/data-plane separation, read-only or append-only operational channels, protected terminal transition authority, pre-rehearsed recovery actions, and fail-closed behavior during control-plane degradation. The boundary must be versioned and bound to V002’s exact provenance. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is exact-provenance-bound, evidence-complete, authority-verified, and immutable may clear V002. No queue update, heartbeat, schedule event, receipt, administrative retry, recovery success, or control-plane health signal is terminal authority.

## References

[1]: https://doi.org/10.6028/NIST.SP.800-207 "NIST SP 800-207: Zero Trust Architecture"
[2]: https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/control-planes-and-data-planes.html "AWS Fault Isolation Boundaries: Control Planes and Data Planes"
[3]: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_withstand_component_failures_avoid_control_plane.html "AWS Well-Architected Reliability: Rely on the Data Plane and Not the Control Plane During Recovery"
[4]: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final "NIST SP 800-53 Rev. 5: Security and Privacy Controls"
