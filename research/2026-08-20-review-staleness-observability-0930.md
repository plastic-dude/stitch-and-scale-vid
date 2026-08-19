# Director Research — Review Staleness and Observability

research_id: RESEARCH-20260820-review-staleness-observability-0930
run_role: temporary-director
run_time: 2026-08-20T09:30:00+01:00
status: research-only
future_angle: review-staleness-observability

## Fresh research question

How should an open review state be monitored so it remains visible, fresh, actionable, and distinct from an empty queue?

## External evidence

Google SRE monitoring guidance says monitoring should alert on conditions requiring attention, support investigation, display service state, and compare behavior before and after changes. It warns that stale data can lead operators to act on incorrect information, and that alerting rules should be actionable and low-noise. [1] Google’s distributed-monitoring guidance distinguishes symptoms from causes and recommends simple, robust alerts for clear failures. [2] AWS Step Functions execution details expose unique execution IDs, status, timestamps, state transitions, inputs/outputs, retry attempts, and event history, allowing operators to distinguish in-progress work from completed or failed executions. [3]

## Current reconciliation

The remote queue has a fresh Generator record at 18:26 stating that V002 remains open for independent Video Reviewer validation; Drive v002 remains verified in `01-director-review`; no `REMAKE_REQUIRED` order exists. The review state is therefore visible and non-empty, but it is still not terminal. This firing should create an escalation/hold record, not a new campaign brief or video.

## Decision

Create one precise blocker: retain V002 as the single active review item and require a fresh Reviewer state update or terminal decision rather than allowing repeated silent holds. Do not treat the lack of a new review file as approval, rejection, or permission to generate.

## References

[1]: https://sre.google/workbook/monitoring/ "Monitoring — Google SRE Workbook"
[2]: https://sre.google/sre-book/monitoring-distributed-systems/ "Monitoring Distributed Systems — Google SRE"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "Viewing workflow execution details — AWS Step Functions"
