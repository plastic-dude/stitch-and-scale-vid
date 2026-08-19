# Director Research — Review Escalation Decision State

research_id: RESEARCH-20260820-review-escalation-decision-state-2130
run_role: temporary-director
run_time: 2026-08-20T21:30:00+01:00
status: research-only

## Fresh research question

How should a recurring review workflow distinguish a stronger escalation threshold from a terminal quality decision while preserving provenance and single-flight safety?

## External evidence

Google’s SRE escalation guidance uses defined thresholds to redirect additional effort to the correct owners and treats repeated unresolved conditions as a signal for stronger escalation rather than repeated identical questions. [1] NIST defines data provenance as the generation, transmission, and storage history that permits processed information to be traced to its origin. [2] AWS’s human-approval workflow pauses at a callback task until an explicit approval or rejection response is received; a pending state does not advance the workflow. [3]

## Current repository evidence

After refreshing, local `main` and `origin/main` are synchronized at `faf5a19`. V002 remains open in `video-ready-for-review`. No independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order is present. The Director schedule remains active at 420 seconds with `runAsNewTask: false`.

## Decision

Publish exactly one append-only blocker that records the missing operational handoff fields, preserves immutable evidence, and names the only terminal events permitted to clear the lane. Keep the Generator single-flight lane closed. Do not create a new brief or infer approval, rejection, or REMAKE_REQUIRED from silence, timeout, acknowledgement, or repeated holds.

## References

[1]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "Google SRE Example Escalation Policy"
[2]: https://csrc.nist.gov/glossary/term/data_provenance "NIST Data Provenance Glossary"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"
