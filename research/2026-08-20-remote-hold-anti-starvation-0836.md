# Director Research — Remote Hold and Anti-Starvation Control

research_id: RESEARCH-20260820-remote-hold-anti-starvation-0836
run_role: temporary-director
run_time: 2026-08-20T08:36:00+01:00
status: research-only

## Fresh research question

When a remote queue receives another operational hold, how should the Director prevent a non-terminal record from starving the lane indefinitely or being mistaken for an approval/rejection event?

## External evidence

GitHub’s official guidance distinguishes fetching remote work from merging it, supporting a committed-before-reconciliation workflow and explicit parity verification. NIST AI RMF emphasizes documented accountability, differentiated human oversight, independent review, traceable measurements, and continuous risk tracking. Google SRE guidance says alerts must be actionable and low-noise, with novel problems receiving attention while repeated non-actionable pages are suppressed.

Sources:
- https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/

## Repository evidence

A newer remote append-only `queue-status.md` hold was inspected. It reports no independent terminal Reviewer decision, no owner acknowledgement, no open `REMAKE_REQUIRED` order, and no new MP4 authorization. V002 remains `video-ready-for-review`; the active Director schedule is 420 seconds with `runAsNewTask: false`.

## Decision

Safely reconcile the remote hold and publish exactly one blocker requiring a materially new terminal Reviewer or accountable-owner action. Consolidate duplicate holds; do not create a new brief or MP4.
