# Director Research — Provenance and Terminal Callback Boundary

research_id: RESEARCH-20260820-provenance-terminal-callback-boundary-0801
run_role: temporary-director
run_time: 2026-08-20T08:01:00+01:00
status: research-only

## Fresh research question

How should provenance and callback identity be linked so that a later Reviewer decision can clear only the exact V002 asset, never a stale or substituted record?

## External evidence

NIST AI RMF calls for documented roles, transparent governance, independent assessment, traceable measurement, and risk tracking over time. Google SRE guidance requires alerts to be clear and actionable while discouraging repeated low-signal pages. AWS Step Functions’ human approval flow resumes only after an explicit callback decision, with the workflow identity carried through the approval path.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

V002 remains `video-ready-for-review`; no independent terminal Reviewer packet, owner acknowledgement, or open `REMAKE_REQUIRED` order exists. The V002 Drive ID and SHA-256 remain immutable evidence. The Director schedule remains active at 420 seconds with `runAsNewTask: false`, and origin/main is synchronized.

## Decision

Publish one blocker that requires any terminal Reviewer packet to bind decision, score dimensions, evidence references, video ID, Drive ID, and SHA-256. A hold, reminder, acknowledgement, timeout, or unrelated record cannot clear the lane. Do not create a brief or MP4.
