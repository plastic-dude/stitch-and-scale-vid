# Director Research — Owner Review Escalation and Low-Noise Signal

research_id: RESEARCH-20260820-owner-review-escalation-low-noise-0747
run_role: temporary-director
run_time: 2026-08-20T07:47:00+01:00
status: research-only

## Fresh research question

How should the Director escalate an unresolved owner callback without generating alert noise or allowing the callback to substitute for an independent quality decision?

## External evidence

NIST AI RMF requires documented roles, communication lines, human oversight, continuous monitoring, and independent assessment. Google SRE monitoring guidance says human alerts should represent a clear, actionable failure with low noise; excessive pages cause people to ignore important signals. AWS Step Functions’ human-approval pattern pauses at a callback and advances only after an explicit approval or rejection response.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order. The active Director schedule remains enabled at 420 seconds with `runAsNewTask: false`, and origin/main is synchronized.

## Decision

Publish one blocker with a bounded callback contract and a non-duplication rule. The owner must provide the named owner, deadline, and escalation target; the Reviewer must independently publish the terminal packet. A reminder, timeout, or acknowledgement is not a verdict and cannot open the Generator lane.
