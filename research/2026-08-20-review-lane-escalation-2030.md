# Director Research — Review-Lane Escalation

research_id: RESEARCH-20260820-review-lane-escalation-2030
run_role: temporary-director
run_time: 2026-08-20T20:30:00+01:00
status: research-only

## Fresh research question

What is the minimum durable handoff needed to escalate an unresolved review without allowing repeated scheduler firings to manufacture a quality decision or release a single-flight lane?

## External evidence

Google’s SRE guidance defines thresholds that redirect more engineering effort toward an unresolved condition, and notes that repeated violations should trigger stronger escalation rather than repeated identical questions. [1] NIST defines data provenance as the generation, transmission, and storage history that permits tracing processed information back to its origin. [2] AWS’s human-approval workflow pauses until an explicit approval or rejection callback arrives; waiting is not a terminal state. [3]

## Current repository evidence

After refreshing, local `main` and `origin/main` are synchronized at `714d207`. V002 remains open in `video-ready-for-review`. No independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order is present. The Director schedule remains active at 420 seconds with `runAsNewTask: false`.

## Decision

Publish one append-only blocker that restates only the unresolved handoff fields, preserves the evidence chain, and names the exact terminal events allowed to clear the lane. Keep the Generator single-flight lane closed. Do not create a new brief or infer a quality state from timeout, silence, acknowledgement, or repeated holds.

## References

[1]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "Google SRE Example Escalation Policy"
[2]: https://csrc.nist.gov/glossary/term/data_provenance "NIST Data Provenance Glossary"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"
