# Director Research — Review-Event Deduplication

research_id: RESEARCH-20260820-review-event-deduplication-0911
run_role: temporary-director
run_time: 2026-08-20T09:11:00+01:00
status: research-only

## Fresh research question

How can the review lane deduplicate repeated operational events without losing the one explicit terminal decision needed to release the exact asset?

## External evidence

NIST AI RMF emphasizes clear accountability, differentiated oversight roles, independent review, traceable measurement evidence, and ongoing monitoring. Google SRE guidance says alerts must be actionable and low-noise, with repeated non-actionable pages suppressed so novel failures remain visible. AWS Step Functions demonstrates a pause-until-callback workflow in which a waiting execution continues only after an explicit approval or rejection response.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

V002 remains `video-ready-for-review` with no unique independent terminal Reviewer callback, no owner acknowledgement, and no open `REMAKE_REQUIRED` order. The Director schedule remains active at 420 seconds with `runAsNewTask: false`, and origin/main is synchronized.

## Decision

Publish exactly one blocker preserving a canonical terminal Reviewer callback requirement bound to V002’s exact provenance. Consolidate duplicate operational holds and do not create a new brief or MP4.
