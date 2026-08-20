# Firing 221 Source Notes

## NIST governance and change control

Source: https://airc.nist.gov/airmf-resources/playbook/govern/

NIST AI RMF Govern guidance emphasizes clear roles, delegated authority, current documentation, change-management requirements, ongoing monitoring, periodic review, and documented incident response. Review-state changes should be deliberate, traceable, and controlled by authorized actors. Prior records should remain available for accountability and should not be silently rewritten.

## AWS execution history and error handling

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html and https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html

AWS provides execution IDs, event history, timestamps, inputs, outputs, retries, redrives, and error details to reconstruct workflow behavior. Heartbeat and timeout errors are explicit failures; retries and catches are controlled transitions, not implicit success. The governance analogue is to preserve every V002 review event append-only, require explicit causal links for supersession or retry, reject late callbacks after a terminal event, and never infer a terminal decision from a timeout or retry.

## Google SRE command and handoff

Source: https://sre.google/sre-book/managing-incidents/

Google SRE emphasizes separation of responsibilities, a recognized command post, a live incident state document, clear live handoffs, explicit acknowledgement, and a single commander holding high-level state. This supports requiring current-state versioning and causal handoff records so an out-of-order callback or stale owner update cannot reopen or clear V002.

## Firing-221 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require monotonic state handling: terminal states are one-way; late, stale, duplicate, or out-of-order callbacks are retained as non-terminal evidence and linked to the current state. No new brief or MP4 is authorized.
