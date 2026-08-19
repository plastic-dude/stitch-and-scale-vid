# Director Research — Escalation Threshold and Decision State

research_id: RESEARCH-20260820-escalation-threshold-and-decision-state-1800
run_role: temporary-director
run_time: 2026-08-20T18:00:00+01:00
status: research-only

## Fresh research question

How should the Director distinguish an operational escalation threshold from a quality decision when a human review remains pending across repeated firings?

## External evidence

Google’s SRE escalation guidance uses explicit thresholds to make responses more consistent, escalates repeated unresolved conditions to additional owners, and avoids repeatedly asking the same question without stronger escalation. [1] NIST defines provenance as the chronology of origin, ownership, location, and changes to data and the actors/processes involved, which supports append-only decision traceability. [2] AWS’s human-approval workflow pauses until an explicit approval or rejection is returned; a waiting state is not an outcome. [3]

## Current repository evidence

After refreshing, local `main` and `origin/main` are synchronized at `29cfe04`. V002 remains open in `video-ready-for-review`. No terminal independent Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order is present. The active Director schedule remains enabled at 420 seconds with `runAsNewTask: false`.

## Decision

Publish one blocker that separates the operational escalation threshold from the quality state. Require the owner to record a bounded deadline and escalation target; if that deadline is missed, append only a timeout-escalation record using the same V002 identity and evidence. Do not infer approval, rejection, or REMAKE_REQUIRED from a timeout, acknowledgement, or repeated hold. Keep the Generator single-flight lane closed.

## References

[1]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "Google SRE Example Escalation Policy"
[2]: https://csrc.nist.gov/glossary/term/provenance "NIST Provenance Glossary"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"
