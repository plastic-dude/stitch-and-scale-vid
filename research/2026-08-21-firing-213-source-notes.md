# Firing 213 Source Notes

## NIST AI RMF human-AI oversight and delegation

Sources: https://airc.nist.gov/airmf-resources/playbook/govern/ and https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

NIST AI RMF calls for clear roles, responsibilities, lines of communication, differentiated human-AI oversight, transparent policies, documented delegation, continuous monitoring, and independent review. NIST also describes incident response and appeal/override processes as human adjudication mechanisms. Applied to V002, an automated agent cannot infer approval from elapsed time, silence, a queue hold, or a routine acknowledgement; a terminal transition requires the explicitly authorized Reviewer event.

## NIST documentation and accountability

Source: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf

NIST states that documentation can enhance transparency, improve human review, and bolster accountability. It describes human-AI configurations and oversight as role-specific and identifies separation between building/using and verifying/validating as a best practice. This supports recording who authorized a decision, what artifact was reviewed, what method was used, and what explicit outcome was chosen.

## AWS human approval workflow

Source: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

AWS’s human approval example pauses a workflow at a callback task and resumes only when a user selects an explicit Approve or Reject action. The workflow exposes separate endpoints and records the execution context, task token, and execution ID. The operational lesson is that an explicit, identity-bound approval signal is required; the waiting state itself, a reminder, or a missing response does not mean approval.

## Firing-213 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require an explicit terminal Reviewer action with identity, provenance, evidence, and decision fields. Silence, elapsed time, routine acknowledgement, and queue activity remain non-terminal. No new brief or MP4 is authorized.
