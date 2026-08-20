# Director Research — Escalation-Stage Separation

research_id: RESEARCH-20260820-escalation-stage-separation-0705
run_role: temporary-director
run_time: 2026-08-20T07:05:00+01:00
status: research-only

## Fresh research question

How should the V002 workflow separate escalation-stage progress from the independent quality decision so that an owner response cannot accidentally clear the Generator lane?

## Evidence reviewed

Google SRE’s escalation policy defines thresholds that redirect effort to increasingly senior owners while keeping the underlying service condition unresolved until its class of issue is addressed. NIST AI RMF calls for transparent governance, documented roles and communication lines, differentiated human oversight responsibilities, and independent assessment. AWS’s human-approval pattern pauses a workflow at a callback and advances only after a distinct approval or rejection response; an acknowledgement or timeout does not equal that response.

Repository evidence: V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, no owner acknowledgement, and no open `REMAKE_REQUIRED` order. The active Director schedule is enabled at 420 seconds with `runAsNewTask: false`, and origin/main is authoritative and synchronized.

## Decision

Publish one blocker that separates three states: escalation handoff (owner/deadline/target), independent quality verdict (Reviewer), and terminal lane resolution. An owner acknowledgement may confirm receipt only; it cannot approve quality or authorize generation. A timeout may escalate only; it cannot clear the lane. Preserve V002 and do not create a new brief.

## Sources

[1]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "Google SRE Example Escalation Policy"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"
