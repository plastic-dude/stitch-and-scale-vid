# Firing 208 Source Notes

## NIST AI RMF Core

Source: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

NIST states that AI RMF risk management should be continuous, timely, and performed throughout the AI system lifecycle. The Govern function calls for documented and clear roles, responsibilities, and lines of communication; ongoing monitoring and periodic review; accountability structures; and documentation that enhances transparency, human review, and accountability. The Measure function says independent review can improve testing effectiveness and mitigate internal bias and conflicts of interest. It also calls for documented, repeatable evaluation and for AI systems to fail safely.

## AWS Step Functions error handling

Source: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html

AWS documents explicit `Retry` and `Catch` handling for task failures and `States.Timeout` / `States.HeartbeatTimeout` errors. An error defaults to failing the execution unless a defined recovery path handles it. Retry and catch transitions are explicit state-machine transitions, not implicit success. A timeout is an error condition requiring handling; it is not proof of approval or completion.

## AWS callback tasks

Source: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html

AWS documents that callback tasks pause until the correct task token is returned with `SendTaskSuccess` or `SendTaskFailure`; only then does the workflow continue. Heartbeat timeouts prevent an unresponsive waiting task from remaining indefinite. This supports treating V002 queue holds, silence, and reminders as non-terminal and requiring a unique exact-provenance Reviewer callback.

## Google SRE Incident Management Guide

Source: https://sre.google/resources/practices-and-processes/incident-management-guide/

Google SRE recommends timely, actionable alerts based on user-facing symptoms, up-to-date playbooks, and clear roles. Its incident model uses distinct Incident Commander, Communications Lead, and Operations Lead roles to coordinate, communicate, and control. Effective response is treated as a project with explicit planning, documentation, escalation support, and follow-up. This supports one bounded operational blocker with clear responsibility rather than repeated parallel holds.

## Firing-208 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require a unique independent Reviewer callback with exact V002 video ID, Drive file ID, SHA-256, timestamp, explicit decision, complete seven-dimension score, immutable evidence references, and a named owner/deadline/escalation target. Timeouts and queue holds remain non-terminal; the single-flight lane stays closed; no new brief or MP4 is authorized.
