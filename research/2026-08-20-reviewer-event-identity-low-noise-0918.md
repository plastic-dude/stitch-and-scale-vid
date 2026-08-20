# Director Research — Reviewer Event Identity and Low-Noise Escalation

research_id: RESEARCH-20260820-reviewer-event-identity-low-noise-0918
run_role: temporary-director
run_time: 2026-08-20T09:18:00+01:00
status: research-only

## Fresh research question

How should a review system prove that a terminal decision belongs to the exact asset under review while preventing repeated non-terminal reminders from becoming decision noise?

## External evidence

NIST AI RMF states that accountability structures, differentiated human oversight roles, independent assessment, traceable evaluation evidence, and documented ongoing monitoring strengthen trustworthy review. Google SRE guidance states that human alerts should be clear and actionable, maintain high signal-to-noise, and focus on novel problems rather than repeated pages. AWS Step Functions demonstrates a human-approval workflow that pauses at a callback task and proceeds only after an explicit approval or rejection response.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

The newer remote `queue-status.md` record is another non-terminal authorization hold under Director handoff 114. It contains no independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order. V002 remains `video-ready-for-review`; the Director schedule is active at 420 seconds with `runAsNewTask: false`.

## Decision

Safely reconcile the remote append-only record and publish exactly one blocker requiring a unique independent Reviewer terminal event bound to V002’s exact video ID, Drive ID, and SHA-256. Consolidate repeated operational holds; do not create a new brief or MP4.
