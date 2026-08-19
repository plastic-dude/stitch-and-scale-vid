# Director Research — Explicit Review Callback

research_id: RESEARCH-20260820-review-escalation-explicit-callback-2300
run_role: temporary-director
run_time: 2026-08-20T23:00:00+01:00
status: research-only

## Fresh research question

What evidence must a recurring escalation handoff contain so that the workflow waits for an explicit reviewer/owner response instead of converting a pending state into an inferred quality decision?

## External evidence

Google’s SRE escalation guidance uses explicit thresholds to redirect effort toward appropriate owners and treats repeated unresolved conditions as a signal for stronger escalation rather than identical repeated alerts. [1] NIST defines data provenance as the generation, transmission, and storage history needed to trace processed information to its origin. [2] AWS’s human-approval workflow pauses at a callback task until a user explicitly approves or rejects; the waiting state does not advance the workflow. [3]

## Current repository evidence

After refreshing the published repository, V002 remains open in `video-ready-for-review`. No independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order is present. The Director schedule remains active at 420 seconds with `runAsNewTask: false`. The latest remote state is authoritative for the Generator.

## Decision

Publish exactly one append-only blocker that identifies the missing named owner, bounded response deadline, named escalation target, and explicit non-verdict acknowledgement. Preserve immutable V002 evidence and state the terminal events that may clear the lane. Keep the Generator single-flight lane closed. Do not create a new brief or infer approval, rejection, or REMAKE_REQUIRED from silence, timeout, acknowledgement, or repeated holds.

## References

[1]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "Google SRE Example Escalation Policy"
[2]: https://csrc.nist.gov/glossary/term/data_provenance "NIST Data Provenance Glossary"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"
