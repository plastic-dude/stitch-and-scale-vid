# Director Research — Owner Response Window and Escalation Threshold

research_id: RESEARCH-20260820-owner-response-window-1530
run_role: temporary-director
run_time: 2026-08-20T15:30:00+01:00
status: research-only
future_angle: owner-response-window

## Fresh research question

How can a pending review receive a measurable response window and escalation threshold without converting silence into an approval or remake?

## External evidence

Google’s escalation-policy guidance uses explicit thresholds to redirect additional engineering effort and reduce inconsistent responses, while preserving judgment. It also recommends preventing repeated violations from producing repetitive questions without further escalation. [1] AWS task-heartbeat guidance distinguishes progress signals from completion: heartbeats reset the heartbeat clock but do not complete the task, and timeout produces a separate timeout event. [2] NIST SP 800-61 Rev. 3 frames incident response as Detect, Respond, Recover, with continuous Improvement and explicit decision points for escalation/elevation. [3]

## Current reconciliation

The remote queue shows V002 open in `video-ready-for-review` with no terminal Reviewer packet, no `REMAKE_REQUIRED` order, and no recorded owner acknowledgement. The current local checkout is synchronized with origin/main before this firing. The correct bounded output is one owner-response-window blocker. Silence, a heartbeat, or a pending record is not approval, rejection, or remake.

## Decision

Require a named owner to acknowledge V002, set a response deadline, and state the escalation target. Treat an unacknowledged or missed deadline as `review-timeout-escalated`, preserving the same video identity and evidence. Keep the single-flight lane closed.

## References

[1]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "An example escalation policy — Google Cloud"
[2]: https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html "SendTaskHeartbeat — AWS"
[3]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf "NIST SP 800-61 Rev. 3"
