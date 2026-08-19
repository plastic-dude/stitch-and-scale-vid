# Director Research — Bounded Review Timeout and Escalation

research_id: RESEARCH-20260820-bounded-review-timeout-1100
run_role: temporary-director
run_time: 2026-08-20T11:00:00+01:00
status: research-only
future_angle: bounded-review-timeout

## Fresh research question

How should an open human review be bounded so it cannot remain pending forever, while preserving the distinction between timeout escalation and approval, rejection, or remake?

## External evidence

AWS Step Functions documents `TimeoutSeconds` and `HeartbeatSeconds` for long-running tasks; when the worker does not respond within the configured timeout, the task fails rather than remaining indefinitely active. [1] Google’s escalation-policy example uses explicit thresholds to redirect more engineering effort and says escalation policies should establish reasonable action thresholds without eliminating judgment. [2] Google’s Incident Management Guide requires actionable alerts, defined roles, communication channels, and documented response; it treats incident response as a managed project, not an implicit waiting loop. [3]

## Current reconciliation

The remote queue says V002 is still `video-ready-for-review`, no terminal approval/rejection/`REMAKE_REQUIRED` order exists, and the newest Generator hold is published. The current project has not defined a review deadline in the repository, so this firing must not invent an approval or reject the asset. It should create an escalation record that asks the human owner to set a bounded review deadline and, if missed, explicitly choose `review-timeout-escalated`—not a terminal quality verdict.

## Decision

Create one precise blocker: keep V002 single-flight and require the Video Reviewer or owner to define and meet a bounded review deadline. A missed deadline escalates to human coordination; it does not authorize generation, approval, rejection, or remake.

## References

[1]: https://docs.aws.amazon.com/step-functions/latest/dg/state-task.html "Task state timeouts — AWS Step Functions"
[2]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "An example escalation policy — Google Cloud"
[3]: https://sre.google/resources/practices-and-processes/incident-management-guide/ "Incident Management Guide — Google SRE"
