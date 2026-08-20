# Director Research — Callback Identity and Anti-Starvation

research_id: RESEARCH-20260820-callback-identity-anti-starvation-0857
run_role: temporary-director
run_time: 2026-08-20T08:57:00+01:00
status: research-only

## Fresh research question

How should a review workflow bind a human callback to the correct asset and avoid treating repeated operational holds as terminal progress?

## External evidence

NIST AI RMF emphasizes clear roles and accountability, differentiated human-AI oversight, independent review, traceable evaluation evidence, and documented ongoing monitoring. Google SRE guidance says pages should signal clear actionable failures, maintain high signal-to-noise, and focus on novel events rather than repeated pages. AWS Step Functions demonstrates a pause-until-callback pattern in which the waiting execution proceeds only after an explicit approval or rejection callback.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order exists. The Director schedule is active at 420 seconds with `runAsNewTask: false`, and origin/main is synchronized.

## Decision

Publish exactly one blocker requiring a unique terminal Reviewer event bound to the unchanged V002 video ID, Drive ID, and SHA-256. Consolidate repeated holds and do not create a new brief or MP4.
