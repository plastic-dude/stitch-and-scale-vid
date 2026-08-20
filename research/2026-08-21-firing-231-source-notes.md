# Firing 231 Source Notes

## NIST evaluation coverage and external validity

Sources: https://airc.nist.gov/airmf-resources/playbook/measure/ and https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf

NIST recommends documented testing procedures and metrics, realistic and representative test conditions, independent assessors, limitations and external-validity analysis, and tracking pockets of failure rather than relying only on averages. It also says risks or trustworthiness characteristics that cannot be measured should be documented. Applied here, a Reviewer must state the inspected coverage of the video, audio, captions, claims, frames, and platform conditions, document known uninspected regions, and avoid treating a short favorable sample as complete proof.

## AWS execution event history

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html and https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html

AWS execution history is an ordered event chain with unique IDs, timestamps, previous-event links, pagination, and possible truncation or unavailable history depending on workflow type and logging. Applied here, review evidence should identify the coverage interval and whether inspection was complete. An event log with missing pages, truncated inputs or outputs, unavailable logs, or unknown stopping conditions cannot support a terminal authorization without an explicit evidence-gap treatment.

## Firing-231 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require documented coverage and stopping rules, explicit negative-evidence handling, and fail-closed treatment of incomplete inspection. No new brief or MP4 is authorized.
