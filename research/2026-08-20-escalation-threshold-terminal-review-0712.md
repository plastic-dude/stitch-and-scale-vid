# Director Research — Escalation Threshold and Terminal Review

research_id: RESEARCH-20260820-escalation-threshold-terminal-review-0712
run_role: temporary-director
run_time: 2026-08-20T07:12:00+01:00
status: research-only

## Fresh research question

What should happen when repeated escalation is necessary but the workflow still lacks an independent terminal quality decision?

## External evidence

Google SRE’s example escalation policy uses explicit thresholds to redirect effort to named teams and leaders, and says repeated violations are a signal for further escalation rather than endless repetition. It also blocks normal releases while a reliability condition remains unresolved, because continuing releases can add further risk. Source: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons

NIST AI RMF Core states that governance should document roles, responsibilities, communication lines, human oversight, and independent assessment; documentation supports transparency, human review, and accountability. Source: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

AWS Step Functions’ human-approval workflow pauses at a callback task and proceeds only after an explicit approval or rejection response. Source: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

V002 remains `video-ready-for-review` with no independent terminal Reviewer decision, no owner acknowledgement, and no open `REMAKE_REQUIRED` order. The schedule remains active at 420 seconds with `runAsNewTask: false`, and local HEAD equals `origin/main`.

## Decision

Publish one blocker that escalates the missing owner/deadline/target fields while preserving the single-flight lane. Explicitly state that acknowledgement, timeout, repeated holds, and repeated escalation without a new terminal decision are non-terminal. Do not create a new brief or MP4.
