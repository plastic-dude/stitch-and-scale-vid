# Firing 222 Source Notes

## AWS callback and heartbeat semantics

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html and https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html

AWS distinguishes a callback that completes a waiting task from a heartbeat that merely reports progress. A callback task continues only when the valid task token is returned with success or failure. A heartbeat resets a heartbeat clock but does not itself create an execution-history event or complete the task. A task timeout remains a failure, and a token can be invalid or expired. Applied to V002, liveness signals must be strictly separate from authorization signals: a continuation or heartbeat cannot authorize approval, rejection, remake, new angle, or MP4.

## Google SRE alert signal and noise

Sources: https://sre.google/sre-book/monitoring-distributed-systems/ and https://sre.google/workbook/alerting-on-slos/

Google SRE recommends alerts that are urgent, actionable, user-visible, and low-noise. Excessive non-actionable pages cause fatigue and can hide real incidents. Alert systems should distinguish precision, recall, detection time, and reset time. Repeated queue holds with no state change should therefore be retained as audit evidence but deduplicated operationally, while a separate high-signal authorization incident identifies the missing terminal decision and owner action.

## Firing-222 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require typed event classes: liveness/heartbeat events cannot satisfy terminal authorization fields; only a complete exact-provenance Reviewer packet or contract-authorized terminal resolution can clear the lane. No new brief or MP4 is authorized.
