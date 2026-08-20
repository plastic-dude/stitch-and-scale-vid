# Firing 245 Source Notes

## Fresh topic

Control-plane versus data-plane separation in distributed governance: how to prevent queue, telemetry, administrative APIs, and recovery channels from directly mutating the V002 authorization state.

## Authoritative sources

NIST Zero Trust Architecture describes a logical separation between the control plane, where policy decisions and administration occur, and the data plane, where enforcement and application traffic occur: https://doi.org/10.6028/NIST.SP.800-207. AWS explains that control planes provide administrative CRUDL APIs and complex orchestration, while data planes provide the primary service function and are intentionally less complicated; the separation provides performance and availability benefits: https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/control-planes-and-data-planes.html. AWS reliability guidance recommends relying on the data plane rather than the control plane during recovery, minimizing control-plane operations during degradation, and preparing and rehearsing required control-plane actions before an incident: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_withstand_component_failures_avoid_control_plane.html. NIST SP 800-53 describes security and privacy controls with both functionality and assurance dimensions, including access control, audit/accountability, assessment, configuration management, contingency planning, incident response, and system/information integrity: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final.

## Application to V002

For the Stitch & Scale review lane, the media artifact and immutable evidence are data-plane objects; queue updates, heartbeats, schedules, administrative commands, receipts, and escalation records are control-plane events. A control-plane event may request evaluation, report liveness, append a hold, or route an incident, but it must not directly change V002 from `video-ready-for-review` to approved, rejected, remake-required, published, or generation-authorized. Terminal transitions require a separate, identity-bound decision path with complete evidence.

Control-plane degradation must not cause unsafe fallback. The queue may continue to append a blocked hold, and protected evidence must remain readable, but a stale control-plane response, recovery retry, administrative replay, or partial write must not be interpreted as a decision. Any control-plane operation that could clear the lane should be pre-authorized, idempotent, auditable, and tested; recovery should use the smallest safe set of operations and fail closed when state or authority is ambiguous.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring explicit control/data-plane separation, read-only or append-only operational channels, protected terminal transition authority, pre-rehearsed recovery actions, and fail-closed behavior during control-plane degradation. Keep the single-flight lane closed and do not authorize MP4 generation.
