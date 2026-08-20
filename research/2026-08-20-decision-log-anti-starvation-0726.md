# Director Research — Decision Log and Anti-Starvation Escalation

research_id: RESEARCH-20260820-decision-log-anti-starvation-0726
run_role: temporary-director
run_time: 2026-08-20T07:26:00+01:00
status: research-only

## Fresh research question

How can the Director keep repeated review-hold notifications actionable without allowing them to become alert fatigue or an implicit decision log?

## External evidence

NIST AI RMF states that governance should document roles, responsibilities, communication lines, and ongoing review; documentation improves transparency, human review, and accountability. Its Measure function also supports independent assessment and documented, traceable evaluation.

Google SRE monitoring guidance says a human alert should represent a clear, actionable condition, have low noise, and require a meaningful response. Repeated non-novel pages should be reduced or consolidated rather than allowing alert fatigue to hide a real signal.

AWS Step Functions’ human-approval workflow demonstrates a clean callback boundary: the workflow pauses and advances only when a human sends a distinct approval or rejection response. A notification, acknowledgement, or repeated reminder is not that response.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order exists. The active schedule remains enabled at 420 seconds with `runAsNewTask: false`, and local HEAD equals `origin/main`.

## Decision

Publish exactly one blocker that consolidates the unresolved state into one actionable callback request. Preserve immutable V002 evidence and state that the next record must be a new owner/reviewer action or a terminal packet, not another identical hold. No new brief or MP4 is authorized.
