# Director Research — Review Staleness and Alert Suppression

research_id: RESEARCH-20260820-review-staleness-and-alert-suppression-1700
run_role: temporary-director
run_time: 2026-08-20T17:00:00+01:00
status: research-only

## Fresh research question

How should a recurring Director loop distinguish meaningful state change from a repeated hold, so it preserves provenance while avoiding duplicate escalation noise?

## External evidence

NIST defines provenance as the chronology of origin, development, ownership, location, and changes to data, including the personnel and processes involved. [1] Google SRE guidance evaluates alert quality using precision, recall, detection time, and reset time, and warns that repeated or overlapping alerts require suppression so operators are not flooded with duplicate notifications. [2] AWS’s human-approval workflow pauses until an explicit response is returned; the waiting state itself does not advance the workflow. [3]

## Current repository evidence

The refreshed remote branch remains synchronized with local `origin/main` at `5af4279`. V002 is still open in `video-ready-for-review`. The remote state contains no terminal independent Reviewer decision, no owner acknowledgement, and no open `REMAKE_REQUIRED` order. The Generator has recorded the unresolved concern that the spoken local-storage warning may be stronger than the visible approved-capture warning; only the independent Reviewer can decide whether that requires a remake.

## Decision

Publish one blocker that makes the state-change rule explicit: append only when a new owner response, terminal Reviewer packet, explicit remake order, or publication divergence occurs; otherwise preserve the current V002 contract and do not create another speculative brief or silently alter the verdict. The current run still requires a bounded owner response and escalation target, while the single-flight lane remains closed.

## References

[1]: https://csrc.nist.gov/glossary/term/provenance "NIST Provenance Glossary"
[2]: https://sre.google/workbook/alerting-on-slos/ "Google SRE Alerting on SLOs"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"
