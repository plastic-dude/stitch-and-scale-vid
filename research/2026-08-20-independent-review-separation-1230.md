# Director Research — Independent Review and Separation of Duties

research_id: RESEARCH-20260820-independent-review-separation-1230
run_role: temporary-director
run_time: 2026-08-20T12:30:00+01:00
status: research-only
future_angle: independent-review-separation

## Fresh research question

How should the pipeline prevent the Generator or Director from turning their own technical work or repeated pending records into an independent approval?

## External evidence

NIST defines separation of duties as preventing one user from having enough privilege to misuse a critical process alone; it gives the two-person rule as an example. [1] Google SRE advises preserving the previous known-good configuration and awaiting human approval before using new or potentially invalid data. [2] AWS human-approval workflows pause until an explicit approve or reject response and retain an execution identity for the decision path. [3]

## Current reconciliation

The remote queue still shows V002 open for independent review, with no terminal packet and no `REMAKE_REQUIRED` order. The latest Generator hold is published. The Director and Generator must remain barred from treating their own QA, repeated hold records, or absence of a Reviewer response as an independent decision.

## Decision

Create one precise separation-of-duties blocker. Require a Reviewer-owned terminal packet or explicitly recorded human resolution. Keep the single-flight lane closed and preserve the current V002 identity and evidence.

## References

[1]: https://csrc.nist.gov/glossary/term/separation_of_duty "Separation of Duty — NIST"
[2]: https://sre.google/sre-book/service-best-practices/ "Production Service Best Practices — Google SRE"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "Human Approval Workflow — AWS Step Functions"
