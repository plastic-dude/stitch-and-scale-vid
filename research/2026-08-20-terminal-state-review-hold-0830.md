# Director Research — Explicit Terminal Review States

research_id: RESEARCH-20260820-terminal-state-review-hold-0830
run_role: temporary-director
run_time: 2026-08-20T08:30:00+01:00
status: research-only
future_angle: stateful-acceptance

## Fresh research question

How should the video pipeline represent an open review hold so it cannot be misread as an empty queue, a failed generation, or permission to start another campaign?

## External evidence

AWS Step Functions models workflows as state machines whose states transition explicitly and terminate only through `Succeed`, `Fail`, or an `End` state; execution history records state inputs, outputs, timing, and transitions. [1] Google Cloud Workflows distinguishes retryable error conditions, retry limits, backoff, and propagated failure after retries are exhausted. [2] These patterns support an explicit non-terminal `video-ready-for-review` state rather than treating an open review as an empty queue or retrying generation with a new identity.

## Current repository reconciliation

The remote `queue-status.md` states that the local-only v002 asset is verified in Drive `01-director-review` and is held for independent Video Reviewer scoring. The active handoff remains `video-ready-for-review`, there is no open `REMAKE_REQUIRED` order, and the latest Director rule is single-flight. Therefore, this firing must not create a new campaign brief or another MP4. The correct state transition is `video-ready-for-review → approved`, `REMAKE_REQUIRED`, or `rejected`, owned by the Reviewer.

## Decision

Create one precise blocker documenting the open non-terminal review state. Preserve the same `video_id`, do not retry generation with a new identity, and defer the next campaign until the Reviewer emits a terminal decision.

## References

[1]: https://docs.aws.amazon.com/step-functions/latest/dg/workflow-states.html "Workflow states — AWS Step Functions"
[2]: https://docs.cloud.google.com/workflows/docs/reference/syntax/retrying "Retry steps — Google Cloud Workflows"
